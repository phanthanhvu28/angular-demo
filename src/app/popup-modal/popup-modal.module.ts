import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupModalRoutingModule } from './popup-modal-routing.module';
import { PopupModalComponent } from './popup-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [
    PopupModalComponent
  ],
  imports: [
    CommonModule,
    PopupModalRoutingModule,
    NzModalModule,
    NzButtonModule
    
  ]
})
export class PopupModalModule { }
