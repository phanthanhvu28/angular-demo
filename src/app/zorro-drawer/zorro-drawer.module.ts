import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZorroDrawerRoutingModule } from './zorro-drawer-routing.module';
import { ZorroDrawerComponent } from './zorro-drawer.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs'; // import NzTabsModule
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'; // import the module for nz-range-picker

@NgModule({
  declarations: [
    ZorroDrawerComponent
  ],
  imports: [
    CommonModule,
    ZorroDrawerRoutingModule,
    NzTabsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzDrawerModule,
    NzFormModule,
    NzDatePickerModule
    
  ]
})
export class ZorroDrawerModule { }
