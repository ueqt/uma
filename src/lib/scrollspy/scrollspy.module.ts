import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { UmaScrollspyService } from './scrollspy.service';
import { UmaScrollspyGroupDirective, UmaScrollspyItemDirective } from './scrollspy.directive';

@NgModule({
  imports: [CommonModule, ScrollingModule],
  providers: [UmaScrollspyService, { provide: 'Window', useValue: window }],
  declarations: [UmaScrollspyGroupDirective, UmaScrollspyItemDirective],
  exports: [UmaScrollspyGroupDirective, UmaScrollspyItemDirective],
})
export class UmaScrollspyModule { }
