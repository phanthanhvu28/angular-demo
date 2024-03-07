import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
//import { BaseDropdownModule } from '@common-components/base-dropdown/base-dropdown.module';
import { BaseModalModule } from '@common-components/base-modal/base-modal.module';
import { BaseTableModule } from '@common-components/base-table/base-table.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
//import { BaseDirectiveModule } from '@directives/directives.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { TableFileManagementComponent } from './table-file-management.component';
import { BaseDirectiveModule } from '@components/directives/directives.module';
const NZ_MODULE = [
  NzButtonModule,
  NzGridModule,
  NzDropDownModule,
  NzSelectModule,
  NzIconModule,
  NzModalModule,
  NzUploadModule
];
const BASE_MODULE = [
  BaseTableModule,
  BaseButtonModule,
  BaseDirectiveModule,
  //BaseDropdownModule
];
@NgModule({
  declarations: [TableFileManagementComponent],
  imports: [
    CommonModule,
    NzIconModule,
    FormsModule,
    IconsComponentModule,
    ...BASE_MODULE,
    ...NZ_MODULE
  ],
  exports: [TableFileManagementComponent]
})
export class TableFileManagementModule {}
