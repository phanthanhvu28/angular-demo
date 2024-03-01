import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { BaseCheckBoxModule } from '@common-components/base-check-box/base-check-box.module';
import { BaseTableFilterModule } from '@common-components/base-table-filter/base-table-filter.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BaseTableBodyComponent } from './base-table-body.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BaseDirectiveModule } from '@components/directives/directives.module';

const NZ_MODULE = [
  NzTableModule,
  NzPaginationModule,
  NzPopoverModule,
  NzBadgeModule
];
const COMMON_MODULE = [
  BaseCheckBoxModule,
  BaseDirectiveModule,
  BaseButtonModule,
  BaseTableFilterModule,
  IconsComponentModule,
  PipesModule
];
@NgModule({
  declarations: [BaseTableBodyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...COMMON_MODULE,
    ...NZ_MODULE
  ],
  exports: [BaseTableBodyComponent]
})
export class BaseTableBodyModule {}
