import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EMPTY_COLOR, USED_COLORS, ColorPickerConfig } from './color-picker';

import { UmaColorPickerService } from './color-picker.service';

import { UmaColorPickerComponent } from './color-picker.component';
import { UmaColorPickerSelectorComponent } from './color-picker-selector.component';
import { UmaColorPickerCollectionComponent } from './color-picker-collection.component';
import {
  UmaConnectedColorPickerDirective,
  UmaColorPickerOriginDirective,
  UmaColorPickerOptionDirective,
} from './color-picker.directives';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    UmaColorPickerComponent,
    UmaConnectedColorPickerDirective,
    UmaColorPickerSelectorComponent,
    UmaColorPickerOriginDirective,
    UmaColorPickerOptionDirective,
    UmaColorPickerCollectionComponent,
  ],
  exports: [
    UmaColorPickerComponent,
    UmaConnectedColorPickerDirective,
    UmaColorPickerOriginDirective,
    UmaColorPickerCollectionComponent,
  ],
  providers: [
    UmaColorPickerService,
    { provide: EMPTY_COLOR, useValue: 'none' },
    { provide: USED_COLORS, useValue: [] }
  ],
})
export class UmaColorPickerModule {
  /**
   *
   */
  static forRoot(config: ColorPickerConfig): ModuleWithProviders<UmaColorPickerModule> {
    return {
      ngModule: UmaColorPickerModule,
      providers: [
        { provide: EMPTY_COLOR, useValue: ('empty_color' in config ? config.empty_color : 'none') },
        { provide: USED_COLORS, useValue: config.used_colors || [] }
      ],
    };
  }
}
