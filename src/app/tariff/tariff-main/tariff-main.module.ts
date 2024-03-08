import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NzTabsModule } from 'ng-zorro-antd/tabs'; // import NzTabsModule
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'; // import the module for nz-range-picker
import { TariffMainComponent } from './tariff-main.component';
import { TariffMainRoutingModule } from './tariff-main-routing.module';

@NgModule({
  declarations: [
    TariffMainComponent
  ],
  imports: [
    CommonModule,    
    NzTabsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzDrawerModule,
    NzFormModule,
    NzDatePickerModule,
    TariffMainRoutingModule
    
  ]
})
export class TariffMainModule { }
