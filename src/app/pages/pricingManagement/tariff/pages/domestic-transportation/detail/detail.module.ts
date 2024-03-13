import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BaseAlertFlagModule } from '@common-components/base-alert-flag/base-alert-flag.module';
//import { BaseApprovalProcessModule } from '@common-components/base-approval-process/base-approval-process.module';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { BaseCheckBoxModule } from '@common-components/base-check-box/base-check-box.module';
import { BaseDatePickerModule } from '@common-components/base-date-picker/base-date-picker.module';
//import { BaseHeaderModule } from '@common-components/base-header/base-header.module';
import { BaseInputNumberModule } from '@common-components/base-input-number/base-input-number.module';
import { BaseInputModule } from '@common-components/base-input/base-input.module';
import { BaseModalMessageModule } from '@common-components/base-modal-message/base-modal-message.module';
import { BaseModalModule } from '@common-components/base-modal/base-modal.module';
import { BaseStatusLabelModule } from '@common-components/base-status-label/base-status-label.module';
//import { BaseSubheaderModule } from '@common-components/base-subheader/base-subheader.module';
import { BaseTableModule } from '@common-components/base-table/base-table.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { BaseDirectiveModule } from '@directives/directives.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
// import { ModalDeclineReasonModule } from '../../../components/modal-decline-reason/modal-decline-reason.module';
// import { ModalViewChangeResultModule } from '../../../components/modal-view-change-result/modal-view-change-result.module';
// import { ReasonTooltipTemplateModule } from '../../../components/reason-tooltip-template/reason-tooltip-template.module';
// import { ModalChangePercentMarkupModule } from '../components/modal-change-percent-markup/modal-change-percent-markup.module';
// import { ModalFilterNewModule } from '../components/modal-filter-new/modal-filter-new.module';
// import { ApprovedItemTableComponent } from './components/approve-record-table/approve-record-table.component';
// import { RejectedItemTableComponent } from './components/reject-record-table/reject-record-table.component';
// import { DetailRoutingModule } from './detail-routing.module';
// import { DetailComponent } from './detail.component';
import { SmcComponent } from './smc/smc.component';

const NZ_MODULE = [
  NzFormModule,
  NzTableModule,
  NzDividerModule,
  NzPopoverModule
];
const COMMON_COMPONENT_MODULES = [
 // BaseHeaderModule,
  BaseButtonModule,
//   BaseSubheaderModule,
//   ModalChangePercentMarkupModule,
  BaseDatePickerModule,
  //BaseAlertFlagModule,
  BaseTableModule,
  //ModalFilterNewModule,
  BaseStatusLabelModule,
  //BaseApprovalProcessModule,
  BaseInputModule,
  BaseInputNumberModule,
  BaseCheckBoxModule,
  IconsComponentModule,
  BaseModalMessageModule,
  BaseModalModule,
  BaseDirectiveModule,
//   ModalViewChangeResultModule,
//   ReasonTooltipTemplateModule
];

@NgModule({
  declarations: [
    SmcComponent,
   // RejectedItemTableComponent,
    //ApprovedItemTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // DetailRoutingModule,
    //ModalDeclineReasonModule,
    PipesModule,
    ...NZ_MODULE,
    ...COMMON_COMPONENT_MODULES
  ],
  providers: [AsyncPipe]
})
export class DetailModule {}
