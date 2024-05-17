import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseInputModule } from '@common-components/base-input/base-input.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BaseDatePickerRangeNewComponent } from './base-date-picker-range-new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseDatePickerRangeNewComponent],
  imports: [
    CommonModule,
    NzDatePickerModule,
    FormsModule,
    BaseInputModule,
    IconsComponentModule,
    PipesModule
  ],
  exports: [BaseDatePickerRangeNewComponent]
})
export class BaseDatePickerRangeNewModule {}
