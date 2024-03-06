import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTooltipLengthComponent } from './base-tooltip-length.component';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [BaseTooltipLengthComponent],
  imports: [
    CommonModule,
    IconsComponentModule,
    NzPopoverModule,
    NzToolTipModule
  ],
  exports: [BaseTooltipLengthComponent]
})
export class BaseTooltipLengthModule {}
