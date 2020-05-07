import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UmaSpeedDialActionsComponent } from './speed-dial-actions.component';
import { UmaSpeedDialComponent } from './speed-dial.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [UmaSpeedDialComponent, UmaSpeedDialActionsComponent],
  exports: [UmaSpeedDialComponent, UmaSpeedDialActionsComponent],
})
export class UmaSpeedDialModule { }
