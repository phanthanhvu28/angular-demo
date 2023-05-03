import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostingMainRoutingModule } from './costing-main-routing.module';
import { CostingMainComponent } from './costing-main.component';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    CostingMainComponent
  ],
  imports: [
    CommonModule,
    CostingMainRoutingModule,
    NzTableModule
  ]
})
export class CostingMainModule { }
