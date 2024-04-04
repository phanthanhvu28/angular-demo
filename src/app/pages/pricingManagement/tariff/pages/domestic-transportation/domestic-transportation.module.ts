import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomesticTransportationRoutingModule } from './domestic-transportation-routing.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { BaseTableModule } from '@common-components/base-table/base-table.module';
import { BaseInputNumberModule } from '@common-components/base-input-number/base-input-number.module';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { BaseCheckBoxModule } from '@common-components/base-check-box/base-check-box.module';
import { BaseDatePickerModule } from '@common-components/base-date-picker/base-date-picker.module';
import { BaseInputModule } from '@common-components/base-input/base-input.module';
import { BaseModalModule } from '@common-components/base-modal/base-modal.module';
import { BaseTooltipLengthModule } from '@common-components/base-tooltip-length/base-tooltip-length.module';
import { BaseDirectiveModule } from '@directives/directives.module';
import { DomesticTransportationComponent } from './domestic-transportation.component';
import { SmcPage } from './smc/smc.page';
import { BaseStatusLabelModule } from '@common-components/base-status-label/base-status-label.module';
import { DeatailSmcComponent } from './detail/smc/detail-smc.component';
import { BaseHeaderModule } from '@common-components/base-header/base-header.module';
import { BaseApprovalProcessModule } from '../../components/base-approval-process/base-approval-process.module';
import { BaseSubheaderModule } from '@common-components/base-subheader/base-subheader.module';
import { BaseAlertFlagModule } from '@common-components/base-alert-flag/base-alert-flag.module';
import { ModalDeclineReasonModule } from '../../components/modal-decline-reason/modal-decline-reason.module';
import { NewTariffSmcComponent } from './new/new.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TariffSmcService } from './services';
import { TransportNewTariffService } from './new/services/transport-new-tariff.service';
import { TransportDetailTariffService } from './detail/services/detail-smc.service';


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
  NzSpinModule,
  NzEmptyModule,
];

const BASE_MODULE = [
  BaseTableModule,
  BaseInputNumberModule,
  BaseInputModule,
  BaseDirectiveModule,
  BaseCheckBoxModule,
  BaseButtonModule,
//   BaseDropdownModule,  
//   BaseModalImportExcelModule,
//   BaseImportFileModule,
//   BaseApprovalProcessModule,
// BaseDatePickerRangeNewModule,
// BaseDropdownContractModule
  BaseModalModule,
  BaseTooltipLengthModule,
  BaseDatePickerModule, 
  BaseStatusLabelModule,
  BaseHeaderModule,
  BaseApprovalProcessModule,
  BaseSubheaderModule,
  BaseAlertFlagModule,
  ModalDeclineReasonModule,
  //PipesModule  
];

const COMPONENTS = [
  SmcPage,
  DomesticTransportationComponent,
  DeatailSmcComponent  ,
  NewTariffSmcComponent
];

@NgModule({
  declarations: [    
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    IconsComponentModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,    
    DomesticTransportationRoutingModule,
   // NewRoutingModule,
     ...BASE_MODULE,
     ...NZ_MODULE
    ],
  exports: [...COMPONENTS],
  providers: [
    // DatePipe,
    // TariffSmcService,
    // TransportNewTariffService,
    // TransportDetailTariffService
  ]
})
export class DomesticTransportationModule {}
