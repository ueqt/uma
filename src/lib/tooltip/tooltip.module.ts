import { NgModule } from '@angular/core';
import { UmaTooltipDirective } from './tooltip.directive';
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';
import { MatCommonModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { UmaTooltipComponent } from './tooltip.component';

@NgModule({
    imports: [
        A11yModule,
        CommonModule,
        OverlayModule,
        MatCommonModule,
    ],
    exports: [UmaTooltipDirective, UmaTooltipComponent, MatCommonModule],
    declarations: [UmaTooltipDirective, UmaTooltipComponent],
    providers: [
        MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    ]
})
export class UmaTooltipModule { }