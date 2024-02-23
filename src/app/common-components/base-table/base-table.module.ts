import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTableModule, NzTableStyleService } from 'ng-zorro-antd/table';
import { BaseTableComponent } from './base-table.component';
import { BaseTableNavComponent } from './components/base-table-nav/base-table-nav.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';


@NgModule({
  declarations: [BaseTableComponent, BaseTableNavComponent],
  imports: [
    NzDividerModule,
    BaseButtonModule,
    IconsComponentModule
  ],
  exports: [BaseTableComponent, BaseTableNavComponent],
  providers: [NzTableStyleService]
})
export class BaseTableModule {}
