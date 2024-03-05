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
  CustomerTrialContractListPage,CustomerAgreementListPage, CustomerContractListPage
} from './pages';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { CommonService } from 'src/app/services/common.service';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { BaseTableModule } from '@common-components/base-table/base-table.module';
import { BaseDirectiveModule } from '@components/directives/directives.module';
import { StatusLabelModule } from '../components/status-label/status-lablel.module';
import { ModalCreateEditContractComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseInputModule } from '@common-components/base-input/base-input.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BaseModalMessageModule } from '@common-components/base-modal-message/base-modal-message.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';


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
  ReactiveFormsModule 
  
];
const BASE_MODULE=[
  BaseButtonModule,
  BaseTableModule,
  BaseDirectiveModule,
  BaseInputModule,
  BaseModalMessageModule,
  PipesModule

]

const COMMON_COMPONENTS=[
  CustomerContractListPage,
  ModalCreateEditContractComponent
]

@NgModule({
  declarations: [
    CustomerLayoutPage,
    CustomerAnnexListPage,
    CustomerTrialContractListPage,
    CustomerAgreementListPage,    
    ...COMMON_COMPONENTS
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,      
    IconsComponentModule,
    StatusLabelModule,  
    
    ...BASE_MODULE,
    ...NZ_MODULE    
  ] ,
  exports: [...COMMON_COMPONENTS],
  providers: [   
    CommonService
  ]
})
export class CustomerModule { }
