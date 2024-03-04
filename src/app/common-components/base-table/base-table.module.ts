import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTableModule, NzTableStyleService } from 'ng-zorro-antd/table';
import { BaseTableComponent } from './base-table.component';
import { BaseTableNavComponent } from './components/base-table-nav/base-table-nav.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { BaseDirectiveModule } from '@components/directives/directives.module';
import { BaseTableBodyModule } from './components/base-table-body/base-table-body.module';
import { BaseTableFilterModule } from '@common-components/base-table-filter/base-table-filter.module';


@NgModule({
  declarations: [BaseTableComponent, BaseTableNavComponent],
  imports: [
    NzDividerModule,
    BaseButtonModule,
    IconsComponentModule,
    BaseDirectiveModule  ,
    BaseTableBodyModule  ,
    BaseTableFilterModule
  ],
  exports: [BaseTableComponent, BaseTableNavComponent],
  providers: [NzTableStyleService]
})
export class BaseTableModule {}
