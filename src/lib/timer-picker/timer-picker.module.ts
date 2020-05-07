import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';

import { UmaTimerPickerComponent } from './timer-picker.component';
import {
  UmaTimerPickerOriginDirective,
  UmaConnectedTimerPickerDirective,
} from './timer-picker.directives';

@NgModule({
  imports: [CommonModule, PortalModule, OverlayModule, MatButtonModule],
  declarations: [
    UmaTimerPickerComponent,
    UmaTimerPickerOriginDirective,
    UmaConnectedTimerPickerDirective,
  ],
  exports: [
    UmaTimerPickerComponent,
    UmaTimerPickerOriginDirective,
    UmaConnectedTimerPickerDirective,
  ],
})
export class UmaTimerPickerModule { }
