import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZorroTableRoutingModule } from './zorro-table-routing.module';
import { ZorroTableComponent } from './zorro-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    ZorroTableComponent,
  ],
  imports: [
    CommonModule,
    ZorroTableRoutingModule,
    NzTableModule
  ]
})
export class ZorroTableModule { }
