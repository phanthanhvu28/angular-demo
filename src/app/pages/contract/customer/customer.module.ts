import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';


import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  CustomerLayoutPage,
  CustomerAnnexListPage,
  CustomerTrialContractListPage,CustomerAgreementListPage
} from './pages';


const NZ_MODULE = [
  NzBreadCrumbModule,
  NzButtonModule,
  NzPageHeaderModule,
  NzTableModule,
  NzInputModule,
  NzCollapseModule,
  NzGridModule,
  NzDropDownModule,
  NzListModule,
  NzPaginationModule,
  NzCardModule,
  NzSelectModule,
  NzIconModule,
  NzTagModule,
  ScrollingModule,
  NzTabsModule,
  NzRadioModule,
  NzDividerModule,
  NzSwitchModule,
  NzPopoverModule,
  NzToolTipModule,
  NzModalModule,
  NzDrawerModule,
  NzDatePickerModule,
  NzRadioModule,
  NzUploadModule,
  
];

@NgModule({
  declarations: [
    CustomerLayoutPage,
    CustomerAnnexListPage,
    CustomerTrialContractListPage,
    CustomerAgreementListPage
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,  
    ...NZ_MODULE
  ]
})
export class CustomerModule { }
