import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseApprovalProcessComponent } from './base-approval-process.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';

@NgModule({
  declarations: [BaseApprovalProcessComponent],
  imports: [CommonModule, NzAvatarModule, IconsComponentModule],
  exports: [BaseApprovalProcessComponent]
})
export class BaseApprovalProcessModule {}
