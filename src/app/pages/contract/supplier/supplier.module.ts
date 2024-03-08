import { NgModule } from '@angular/core';
import { SupplierPage } from './supplier.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierRoutingModule } from './supplier-routing.module';
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
import {
  AnnexDetailPage,
  AnnexListPage,
  ContractDetailPage,
  ContractListPage
} from './pages';
//import { BaseApprovalProcessModule } from '@common-components/base-approval-process/base-approval-process.module';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { BaseCheckBoxModule } from '@common-components/base-check-box/base-check-box.module';
//import { BaseDatePickerRangeNewModule } from '@common-components/base-date-picker-range-new/base-date-picker-range-new.module';
import { BaseDatePickerModule } from '@common-components/base-date-picker/base-date-picker.module';
// import { BaseDropdownContractModule } from '@common-components/base-dropdown-contract/base-dropdown-contract.module';
// import { BaseDropdownModule } from '@common-components/base-dropdown/base-dropdown.module';
// import { BaseImportFileModule } from '@common-components/base-import-file/base-import-file.module';
import { BaseInputNumberModule } from '@common-components/base-input-number/base-input-number.module';
import { BaseInputModule } from '@common-components/base-input/base-input.module';
//import { BaseModalImportExcelModule } from '@common-components/base-modal-import-excel/base-modal-import-excel.module';
import { BaseModalModule } from '@common-components/base-modal/base-modal.module';
import { BaseTableModule } from '@common-components/base-table/base-table.module';
import { BaseTooltipLengthModule } from '@common-components/base-tooltip-length/base-tooltip-length.module';
//import { BaseDirectiveModule } from '@directives/directives.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {
  //BaseDropdownPinnedModule,
  ModalUploadFiledModule,
  TYPE_CONTRACT,
  TableFileManagementModule,
  //TableFileManagementModule,
  //TableSurchargeAttractCostModule
} from '../components';
//import { ModalRejectContractModule } from '../customer/components/modal-reject-contract/modal-reject-contract.module';
import { StatusLabelModule } from '../components/status-label/status-lablel.module';
// import {
//   ModalAnnexListFullscreenComponent,
//   ModalCreateEditAnnexComponent,
//   ModalCreateEditContractComponent,
//   TableAnnexListComponent
// } from './components';
//import { GeneralInformationComponent } from './components/modal-create-edit-annex/components/general-information/general-information.component';
// import { CommonService } from '../services/base-common.service';
// import { AttractCostComponent } from './components/modal-create-edit-annex/components/attract-cost/attract-cost.component';
// import { SummaryComponent } from './components/modal-create-edit-annex/components/summary/summary.component';
// import { TabCostingComponent } from './components/modal-create-edit-annex/components/attract-cost/components/tab-costing/tab-costing.component';
// import { TableCostingAttractCostModule } from '../components/table-costing-attract-cost/table-costing-attract-cost.module';
// import { NvCollapsedCostComponent } from './components/modal-create-edit-annex/components/attract-cost/components/nv-collapsed-cost/nv-collapsed-cost.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { CommonService } from '../services/base-common.service';
import { BaseDirectiveModule } from '@directives/directives.module';
import { BaseDropdownPinnedModule } from '../components/base-dropdown-pinned/base-dropdown-pinned.module';
import { AnnexService } from './services';
import { ModalAnnexListFullscreenComponent, TableAnnexListComponent } from './components';
// import { TabVasComponent } from './components/modal-create-edit-annex/components/attract-cost/components/tab-vas/tab-vas.component';
// import { TabBlcComponent } from './components/modal-create-edit-annex/components/attract-cost/components/tab-blc/tab-blc.component';
// import { TableVasAttractCostModule } from '../components/table-vas-attract-cost/table-vas-attract-cost.module';
// import { TableBlcAttractCostModule } from '../components/table-blc-attract-cost/table-blc-attract-cost.module';
// import { TabSurchargeComponent } from './components/modal-create-edit-annex/components/attract-cost/components/tab-surcharge/tab-surcharge.component';
// import { TableCostingDataInactiveComponent } from './components/table-costing-data-inactive/table-costing-data-inactive.component';
// import { ModalShowCostingInactiveComponent } from './components/modal-create-edit-annex/components/attract-cost/components/modal-show-costing-inactive/modal-show-costing-inactive.component';

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
  NzEmptyModule
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
];
const COMMON_COMPONENTS = [
  TableAnnexListComponent,
  ModalAnnexListFullscreenComponent
];
@NgModule({
  declarations: [
    SupplierPage,
    ContractListPage,
    AnnexListPage,
    //ModalCreateEditContractComponent,
    ContractDetailPage,
    AnnexDetailPage,
    // ModalCreateEditAnnexComponent,
    // GeneralInformationComponent,
    // AttractCostComponent,
    // SummaryComponent,
    // TabCostingComponent,
    // TabVasComponent,
    // TabBlcComponent,
    // TabSurchargeComponent,

    // NvCollapsedCostComponent,
     ...COMMON_COMPONENTS,
    // TableCostingDataInactiveComponent,
    // ModalShowCostingInactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SupplierRoutingModule,
    IconsComponentModule,
   // ModalRejectContractModule,
    StatusLabelModule,
    BaseDropdownPinnedModule,
    ModalUploadFiledModule,
    TableFileManagementModule,
    // TableCostingAttractCostModule,
    // TableVasAttractCostModule,
    // TableBlcAttractCostModule,
    // TableSurchargeAttractCostModule,
    PipesModule,
    ...BASE_MODULE,
    ...NZ_MODULE
  ],
  exports: [...COMMON_COMPONENTS],
  providers: [
    {
      provide: TYPE_CONTRACT,
      useValue: 'supplier'
    },
    CommonService,
    AnnexService
  ]
})
export class SupplierModule {}
