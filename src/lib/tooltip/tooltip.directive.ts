import { Directive, Input, ElementRef, ViewContainerRef, NgZone, Inject, Optional, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_DEFAULT_OPTIONS, TooltipPosition, TOOLTIP_PANEL_CLASS, getMatTooltipInvalidPositionError } from '@angular/material/tooltip';
import { Overlay, ScrollDispatcher, OverlayRef, ScrollStrategy, FlexibleConnectedPositionStrategy, OriginConnectionPosition, OverlayConnectionPosition, HorizontalConnectionPos, VerticalConnectionPos } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { AriaDescriber, FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { HammerLoader, HAMMER_LOADER } from '@angular/platform-browser';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { UmaTooltipComponent } from './tooltip.component';

/**
 * 因为MatTooltip不肯支持html的内容，所以继承之
 * https://github.com/angular/components/blob/master/src/material/tooltip/tooltip.ts
 */
@Directive({
    selector: '[umaTooltip]',
    exportAs: 'umaTooltip',
    host: {
        '(longpress)': 'show()',
        '(keydown)': '_handleKeydown($event)',
        '(touchend)': '_handleTouchend()',
    }
})
export class UmaTooltipDirective implements OnDestroy, OnInit {
    _overlayRef: OverlayRef | null;
    _tooltipInstance: UmaTooltipComponent | null;

    private _portal: ComponentPortal<UmaTooltipComponent>;
    private _position: TooltipPosition = 'below';
    private _disabled = false;
    private _tooltipClass: string | string[] | Set<string> | { [key: string]: any };
    private _scrollStrategy: () => ScrollStrategy;

    /** Allows the user to define the position of the tooltip relative to the parent element */
    @Input('matTooltipPosition')
    get position(): TooltipPosition { return this._position; }
    set position(value: TooltipPosition) {
        if (value !== this._position) {
            this._position = value;

            if (this._overlayRef) {
                this._updatePosition();

                if (this._tooltipInstance) {
                    this._tooltipInstance.show(0);
                }

                this._overlayRef.updatePosition();
            }
        }
    }

    /** Disables the display of the tooltip. */
    @Input('matTooltipDisabled')
    get disabled(): boolean { return this._disabled; }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);

        // If tooltip is disabled, hide immediately.
        if (this._disabled) {
            this.hide(0);
        }
    }

    /** The default delay in ms before showing the tooltip after show is called */
    // tslint:disable-next-line: no-input-rename
    @Input('matTooltipShowDelay') showDelay = this._defaultOptions.showDelay;

    /** The default delay in ms before hiding the tooltip after hide is called */
    // tslint:disable-next-line: no-input-rename
    @Input('matTooltipHideDelay') hideDelay = this._defaultOptions.hideDelay;

    private _message: string | TemplateRef<void> = '';

    /** The message to be displayed in the tooltip */
    @Input('umaTooltip')
    get message() { return this._message; }
    set message(value: string | TemplateRef<void>) {
        if (this._message instanceof TemplateRef) {
            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message.elementRef.nativeElement);
        } else {
            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message);
        }
        // If the message is not a string (e.g. number), convert it to a string and trim it.
        if (value instanceof TemplateRef) {
            this._message = value;
        } else {
            this._message = value != null ? `${value}`.trim() : '';
        }

        if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
        } else {
            this._updateTooltipMessage();
            if (this.message instanceof TemplateRef) {
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message.elementRef.nativeElement);
            } else {
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message);
            }
        }
    }

    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
    @Input('matTooltipClass')
    get tooltipClass() { return this._tooltipClass; }
    set tooltipClass(value: string | string[] | Set<string> | { [key: string]: any }) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
        }
    }

    private _manualListeners = new Map<string, EventListenerOrEventListenerObject>();

    /** Emits when the component is destroyed. */
    private readonly _destroyed = new Subject<void>();

    constructor(
        private _overlay: Overlay,
        private _elementRef: ElementRef<HTMLElement>,
        private _scrollDispatcher: ScrollDispatcher,
        private _viewContainerRef: ViewContainerRef,
        private _ngZone: NgZone,
        platform: Platform,
        private _ariaDescriber: AriaDescriber,
        private _focusMonitor: FocusMonitor,
        @Inject(MAT_TOOLTIP_SCROLL_STRATEGY) scrollStrategy: any,
        @Optional() private _dir: Directionality,
        @Optional() @Inject(MAT_TOOLTIP_DEFAULT_OPTIONS)
        private _defaultOptions: MatTooltipDefaultOptions,
        @Optional() @Inject(HAMMER_LOADER) hammerLoader?: HammerLoader) {

        this._scrollStrategy = scrollStrategy;
        const element: HTMLElement = _elementRef.nativeElement;
        const hasGestures = typeof window === 'undefined' || (window as any).Hammer || hammerLoader;

        // The mouse events shouldn't be bound on mobile devices, because they can prevent the
        // first tap from firing its click event or can cause the tooltip to open for clicks.
        if (!platform.IOS && !platform.ANDROID) {
            this._manualListeners
                .set('mouseenter', () => this.show())
                .set('mouseleave', () => this.hide());
        } else if (!hasGestures) {
            // If Hammerjs isn't loaded, fall back to showing on `touchstart`, otherwise
            // there's no way for the user to trigger the tooltip on a touch device.
            this._manualListeners.set('touchstart', () => this.show());
        }

        this._manualListeners.forEach((listener, event) => element.addEventListener(event, listener));

        _focusMonitor.monitor(_elementRef).pipe(takeUntil(this._destroyed)).subscribe(origin => {
            // Note that the focus monitor runs outside the Angular zone.
            if (!origin) {
                _ngZone.run(() => this.hide(0));
            } else if (origin === 'keyboard') {
                _ngZone.run(() => this.show());
            }
        });

        if (_defaultOptions && _defaultOptions.position) {
            this.position = _defaultOptions.position;
        }
    }

    /**
     * Setup styling-specific things
     */
    ngOnInit() {
        const element = this._elementRef.nativeElement;
        const elementStyle = element.style as CSSStyleDeclaration & { webkitUserDrag: string };

        if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            // When we bind a gesture event on an element (in this case `longpress`), HammerJS
            // will add some inline styles by default, including `user-select: none`. This is
            // problematic on iOS and in Safari, because it will prevent users from typing in inputs.
            // Since `user-select: none` is not needed for the `longpress` event and can cause unexpected
            // behavior for text fields, we always clear the `user-select` to avoid such issues.
            elementStyle.webkitUserSelect = elementStyle.userSelect = elementStyle.msUserSelect = '';
        }

        // Hammer applies `-webkit-user-drag: none` on all elements by default,
        // which breaks the native drag&drop. If the consumer explicitly made
        // the element draggable, clear the `-webkit-user-drag`.
        if (element.draggable && elementStyle.webkitUserDrag === 'none') {
            elementStyle.webkitUserDrag = '';
        }
    }

    /**
     * Dispose the tooltip when destroyed.
     */
    ngOnDestroy() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = null;
        }

        // Clean up the event listeners set in the constructor
        this._manualListeners.forEach((listener, event) => {
            this._elementRef.nativeElement.removeEventListener(event, listener);
        });
        this._manualListeners.clear();

        this._destroyed.next();
        this._destroyed.complete();

        if (this.message instanceof TemplateRef) {
            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.message.elementRef.nativeElement);
        } else {
            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.message);
        }
        this._focusMonitor.stopMonitoring(this._elementRef);
    }

    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    show(delay: number = this.showDelay): void {
        if (this.disabled || !this.message || (this._isTooltipVisible() &&
            !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId)) {
            return;
        }

        const overlayRef = this._createOverlay();

        this._detach();
        this._portal = this._portal || new ComponentPortal(UmaTooltipComponent, this._viewContainerRef);
        this._tooltipInstance = overlayRef.attach(this._portal).instance;
        this._tooltipInstance.afterHidden()
            .pipe(takeUntil(this._destroyed))
            .subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        this._tooltipInstance.show(delay);
    }

    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    hide(delay: number = this.hideDelay): void {
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    }

    /** Shows/hides the tooltip */
    toggle(): void {
        this._isTooltipVisible() ? this.hide() : this.show();
    }

    /** Returns true if the tooltip is currently visible to the user */
    _isTooltipVisible(): boolean {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }

    /** Handles the keydown events on the host element. */
    _handleKeydown(e: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (this._isTooltipVisible() && e.keyCode === ESCAPE && !hasModifierKey(e)) {
            e.preventDefault();
            e.stopPropagation();
            this.hide(0);
        }
    }

    /** Handles the touchend events on the host element. */
    _handleTouchend() {
        this.hide(this._defaultOptions.touchendHideDelay);
    }

    /** Create the overlay config and position strategy */
    private _createOverlay(): OverlayRef {
        if (this._overlayRef) {
            return this._overlayRef;
        }

        const scrollableAncestors =
            this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);

        // Create connected position strategy that listens for scroll events to reposition.
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this._elementRef)
            .withTransformOriginOn('.mat-tooltip')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withScrollableContainers(scrollableAncestors);

        strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe(change => {
            if (this._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip.
                    this._ngZone.run(() => this.hide(0));
                }
            }
        });

        this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
        });

        this._updatePosition();

        this._overlayRef.detachments()
            .pipe(takeUntil(this._destroyed))
            .subscribe(() => this._detach());

        return this._overlayRef;
    }

    /** Detaches the currently-attached tooltip. */
    private _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }

        this._tooltipInstance = null;
    }

    /** Updates the position of the current tooltip. */
    private _updatePosition() {
        const position =
            this._overlayRef.getConfig().positionStrategy as FlexibleConnectedPositionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();

        position.withPositions([
            { ...origin.main, ...overlay.main },
            { ...origin.fallback, ...overlay.fallback }
        ]);
    }

    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    _getOrigin(): { main: OriginConnectionPosition, fallback: OriginConnectionPosition } {
        const isLtr = !this._dir || this._dir.value === 'ltr';
        const position = this.position;
        let originPosition: OriginConnectionPosition;

        if (position === 'above' || position === 'below') {
            originPosition = { originX: 'center', originY: position === 'above' ? 'top' : 'bottom' };
        } else if (
            position === 'before' ||
            (position === 'left' && isLtr) ||
            (position === 'right' && !isLtr)) {
            originPosition = { originX: 'start', originY: 'center' };
        } else if (
            position === 'after' ||
            (position === 'right' && isLtr) ||
            (position === 'left' && !isLtr)) {
            originPosition = { originX: 'end', originY: 'center' };
        } else {
            throw getMatTooltipInvalidPositionError(position);
        }

        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);

        return {
            main: originPosition,
            fallback: { originX: x, originY: y }
        };
    }

    /** Returns the overlay position and a fallback position based on the user's preference */
    _getOverlayPosition(): { main: OverlayConnectionPosition, fallback: OverlayConnectionPosition } {
        const isLtr = !this._dir || this._dir.value === 'ltr';
        const position = this.position;
        let overlayPosition: OverlayConnectionPosition;

        if (position === 'above') {
            overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
        } else if (position === 'below') {
            overlayPosition = { overlayX: 'center', overlayY: 'top' };
        } else if (
            position === 'before' ||
            (position === 'left' && isLtr) ||
            (position === 'right' && !isLtr)) {
            overlayPosition = { overlayX: 'end', overlayY: 'center' };
        } else if (
            position === 'after' ||
            (position === 'right' && isLtr) ||
            (position === 'left' && !isLtr)) {
            overlayPosition = { overlayX: 'start', overlayY: 'center' };
        } else {
            throw getMatTooltipInvalidPositionError(position);
        }

        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);

        return {
            main: overlayPosition,
            fallback: { overlayX: x, overlayY: y }
        };
    }

    /** Updates the tooltip message and repositions the overlay according to the new message length */
    private _updateTooltipMessage() {
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;
            this._tooltipInstance._markForCheck();

            this._ngZone.onMicrotaskEmpty.asObservable().pipe(
                take(1),
                takeUntil(this._destroyed)
            ).subscribe(() => {
                if (this._tooltipInstance) {
                    this._overlayRef.updatePosition();
                }
            });
        }
    }

    /** Updates the tooltip class */
    private _setTooltipClass(tooltipClass: string | string[] | Set<string> | { [key: string]: any }) {
        if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;
            this._tooltipInstance._markForCheck();
        }
    }

    /** Inverts an overlay position. */
    private _invertPosition(x: HorizontalConnectionPos, y: VerticalConnectionPos) {
        if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            } else if (y === 'bottom') {
                y = 'top';
            }
        } else {
            if (x === 'end') {
                x = 'start';
            } else if (x === 'start') {
                x = 'end';
            }
        }

        return { x, y };
    }
}