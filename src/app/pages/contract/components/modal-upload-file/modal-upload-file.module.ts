import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { BaseModalModule } from '@common-components/base-modal/base-modal.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ModalUploadFileComponent } from './modal-upload-file.component';
import { BaseDirectiveModule } from '@directives/directives.module';


export const TYPE_CONTRACT = new InjectionToken<string>('type contract');

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
 // BaseDropdownModule,
  BaseModalModule,
  BaseButtonModule,
  BaseDirectiveModule,
  //BaseDropdownModule
];
@NgModule({
  declarations: [ModalUploadFileComponent],
  imports: [
    CommonModule,
    NzIconModule,
    FormsModule,
    IconsComponentModule,
    PipesModule,
    ReactiveFormsModule,
    ...BASE_MODULE,
    ...NZ_MODULE
  ],
  exports: [ModalUploadFileComponent]
})
export class ModalUploadFiledModule {}
