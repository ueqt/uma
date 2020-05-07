import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UmaColorPickerComponent } from './color-picker.component';
import { UmaColorPickerCollectionComponent } from './color-picker-collection.component';
import { UmaColorPickerSelectorComponent } from './color-picker-selector.component';
import { UmaColorPickerOptionDirective } from './color-picker.directives';
import { UmaColorPickerService } from './color-picker.service';
import { EMPTY_COLOR, USED_COLORS } from './color-picker';

describe('UmaColorPickerComponent', () => {
  let comp: UmaColorPickerComponent;
  let fixture: ComponentFixture<UmaColorPickerComponent>;
  let service: UmaColorPickerService;

  let emptyColor: string;

  const colors = ['#FFFFFF', '#000000'];

  // convert rgb to hex
  const toHex = color => {
    const parts = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete (parts[0]);
    for (let i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length === 1) {
        parts[i] = '0' + parts[i];
      }
    }
    return '#' + parts.join('').toUpperCase();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        OverlayModule,
        PortalModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
      ],
      declarations: [
        UmaColorPickerOptionDirective,
        UmaColorPickerComponent,
        UmaColorPickerCollectionComponent,
        UmaColorPickerSelectorComponent
      ],
      providers: [
        UmaColorPickerService,
        { provide: EMPTY_COLOR, useValue: 'none' },
        { provide: USED_COLORS, useValue: [] },
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ]
    });

    TestBed.overrideComponent(UmaColorPickerComponent, {
      set: {
        changeDetection: ChangeDetectionStrategy.Default
      }
    });

    service = TestBed.get(UmaColorPickerService);
    emptyColor = TestBed.get(EMPTY_COLOR);
    fixture = TestBed.createComponent(UmaColorPickerComponent);

    comp = fixture.componentInstance;
    comp.ngOnInit();
    comp.isOpen = true;
  });

  afterEach(() => { fixture.destroy(); });

  it('should open color-picker', () => {
    const button = fixture.debugElement.query(By.css('.btn-picker'));
    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(comp.isOpen).toBeFalsy();
  });

  it('should change used color label', () => {
    const label = 'My Colors';
    comp.usedColorLabel = label;

    fixture.detectChanges();

    expect(comp.usedColorLabel).toBe(label);
  });

  it('should add used colors', (done: DoneFn) => {
    comp.usedColorStart = colors
    fixture.detectChanges();

    service.getColors().subscribe(resp => {
      expect(resp.length).toBe(colors.length);
      done();
    });
  });

  it('should not add any color', (done: DoneFn) => {
    comp.usedColorStart = [];
    fixture.detectChanges();

    service.getColors().subscribe(resp => {
      expect(resp.length).toBe(0);
      done();
    });
  });

  it('should reverse the used colors', () => {
    comp.usedColorStart = colors;
    comp.reverseUsedColors = true;
    fixture.detectChanges();

    const collection = fixture.debugElement.query(By.css('uma-color-picker-collection'));
    const buttons = collection.queryAll(By.css('button'));

    expect(toHex(buttons[1].styles['background'])).toBe(colors[1]);
    expect(toHex(buttons[2].styles['background'])).toBe(colors[0]);
  });

  it('should hide form hex', () => {
    comp.hideHexForms = true;
    fixture.detectChanges();

    const selector = fixture.debugElement.query(By.css('uma-color-picker-selector'));
    const forms = selector.query(By.css('.uma-color-picker-selector-preview'));

    expect(forms.children.length).toBe(0);
  });

  it('should hide empty colors', () => {
    comp.usedColorStart = colors;
    comp.hideEmpty = true;
    fixture.detectChanges();

    const collection = fixture.debugElement.query(By.css('uma-color-picker-collection'));
    const buttons = collection.queryAll(By.css('button'));

    expect(buttons.length).toBe(3);
  });

  it('should hide transparent option', () => {
    comp.usedColorStart = colors;
    comp.hideTransparent = true;
    fixture.detectChanges();

    const collection = fixture.debugElement.query(By.css('uma-color-picker-collection'));
    const buttons = collection.queryAll(By.css('button'));

    expect(toHex(buttons[0].styles['background'])).toBe(colors[0]);
  });

  it('should hide buttons', () => {
    comp.hideButtons = true;
    fixture.detectChanges();

    const actions = fixture.debugElement.query(By.css('.uma-color-picker-actions'));
    expect(actions).toBeNull();
  });

  it('should change the height of selector component', () => {
    fixture.detectChanges();

    const selector = fixture.debugElement.query(By.css('uma-color-picker-selector'));
    const height = parseInt(selector.query(By.css('.uma-color-picker-selector')).styles['height']);

    comp.colorPickerSelectorHeight = 200;
    fixture.detectChanges();

    const newHeight = parseInt(selector.query(By.css('.uma-color-picker-selector')).styles['height']);
    expect(newHeight).toBeGreaterThan(height);
  });

  it('should hide color picker selector', () => {
    comp.hideColorPickerSelector = true;
    fixture.detectChanges();

    const selector = fixture.debugElement.query(By.css('uma-color-picker-selector'));
    expect(selector).toBeNull();
  });

  it('should select first color of colors array', fakeAsync(() => {
    comp.hideTransparent = true;
    comp.usedColorStart = colors;
    comp.ngAfterContentInit();
    fixture.detectChanges();

    const collection = fixture.debugElement.query(By.css('uma-color-picker-collection'));
    const buttons = collection.queryAll(By.css('button'));

    buttons[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    comp.selected.subscribe(selected => {
      expect(selected).toBe(colors[0]);
    });

    comp.confirmSelectedColor();
  }));

  it('should select second color of colors array with hide buttons', fakeAsync(() => {
    comp.hideTransparent = true;
    comp.hideButtons = true;
    comp.usedColorStart = colors;
    comp.ngAfterContentInit();
    fixture.detectChanges();

    const collection = fixture.debugElement.query(By.css('uma-color-picker-collection'));
    const buttons = collection.queryAll(By.css('button'));

    buttons[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    comp.selected.subscribe(selected => {
      expect(selected).toBe(colors[1]);
    });

    comp.backdropClick();
  }));

  it('should cancel selected color', fakeAsync(() => {
    comp.hideTransparent = true;
    comp.usedColorStart = colors;
    comp.ngAfterContentInit();
    fixture.detectChanges();

    const collection = fixture.debugElement.query(By.css('uma-color-picker-collection'));
    const buttons = collection.queryAll(By.css('button'));

    buttons[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    comp.selected.subscribe(selected => {
      expect(selected).toBe(emptyColor);
    });

    comp.cancelSelection();
  }));

  it('should cancel selected color by clicking on backdrop', fakeAsync(() => {
    comp.hideTransparent = true;
    comp.usedColorStart = colors;
    comp.ngAfterContentInit();
    fixture.detectChanges();

    comp.selected.subscribe(selected => {
      expect(selected).toBe(emptyColor);
    });

    comp.backdropClick();
  }));

});
