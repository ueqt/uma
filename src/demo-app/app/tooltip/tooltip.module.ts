import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { UmaTooltipModule } from '../../../lib';
import { TooltipApiComponent } from './components/tooltip-api.component';
import { TooltipExamplesComponent } from './components/tooltip-examples.component';
import { TooltipComponent } from './tooltip.component';
import { routes } from './tooltip.router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    UmaTooltipModule,
  ],
  declarations: [TooltipComponent, TooltipApiComponent, TooltipExamplesComponent],
})
export class TooltipModule { }
