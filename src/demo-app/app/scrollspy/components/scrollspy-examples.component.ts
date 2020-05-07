import { Component, ChangeDetectorRef, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { UmaScrollspyService, UmaScrollspyItemDirective } from '../../../../lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scrollspy-examples',
  templateUrl: './scrollspy-examples.component.html',
  styleUrls: ['./scrollspy-examples.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollspyExamplesComponent implements OnInit, OnDestroy {
  items: UmaScrollspyItemDirective[];

  private _subscription: Subscription;

  constructor(
    private umaScrolspyService: UmaScrollspyService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._subscription = this.umaScrolspyService.group('My Scrollspy').subscribe(items => {
      this.items = items;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }

  scrollTo(id: string): void {
    this.umaScrolspyService.scrollTo('My Scrollspy', id);
  }
}
