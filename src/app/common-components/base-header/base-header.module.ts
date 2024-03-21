import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeaderComponent } from './base-header.component';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

@NgModule({
  declarations: [BaseHeaderComponent],
  imports: [CommonModule, NzOutletModule],
  exports: [BaseHeaderComponent]
})
export class BaseHeaderModule {}
