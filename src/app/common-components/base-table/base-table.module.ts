import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTableModule, NzTableStyleService } from 'ng-zorro-antd/table';
import { BaseTableComponent } from './base-table.component';
import { BaseTableNavComponent } from './components/base-table-nav/base-table-nav.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';

import { BaseTableFilterModule } from '@common-components/base-table-filter/base-table-filter.module';
import { BaseInputModule } from '@common-components/base-input/base-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseModalShowHideColsModule } from '@common-components/base-modal-show-hide-cols/base-modal-show-hide-cols.module';
import { BaseDirectiveModule } from '@directives/directives.module';
import { BaseTableBodyModule } from './components/base-table-body/base-table-body.module';


@NgModule({
  declarations: [BaseTableComponent, BaseTableNavComponent],
  imports: [
    NzDividerModule,
    BaseButtonModule,
    IconsComponentModule,
    BaseDirectiveModule  ,
    BaseTableBodyModule  ,
    BaseTableFilterModule,
    BaseInputModule,
    FormsModule,
    ReactiveFormsModule,
    BaseModalShowHideColsModule,
    NzTableModule,
    CommonModule
  ],
  exports: [BaseTableComponent, BaseTableNavComponent],
  providers: [NzTableStyleService]
})
export class BaseTableModule {}
