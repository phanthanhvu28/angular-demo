import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZorroTabRoutingModule } from './zorro-tab-routing.module';
import { ZorroTabComponent } from './zorro-tab.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs'; // import NzTabsModule
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    ZorroTabComponent
  ],
  imports: [
    CommonModule,
    ZorroTabRoutingModule,
    NzTabsModule,
    NzTableModule
  ]
})
export class ZorroTabModule { }
