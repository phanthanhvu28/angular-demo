import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { BaseModalModule } from '@common-components/base-modal/base-modal.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { ModalDeclineReasonComponent } from './modal-decline-reason.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [ModalDeclineReasonComponent],
  exports: [ModalDeclineReasonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseModalModule,
    BaseButtonModule,
    IconsComponentModule,
    NzInputModule,
    NzFormModule
  ]
})
export class ModalDeclineReasonModule {}
