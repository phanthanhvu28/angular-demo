import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalShowHideColsComponent } from '@common-components/base-modal-show-hide-cols/base-modal-show-hide-cols.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseInputModule } from '@common-components/base-input/base-input.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';
import { SelectedColItemComponent } from '@common-components/base-modal-show-hide-cols/components/selected-col-item/selected-col-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BaseButtonModule } from '@common-components/base-button/base-button.module';
import { AvailableColItemComponent } from './components/available-col-item/available-col-item.component';
import { BaseModalModule } from '@common-components/base-modal/base-modal.module';

@NgModule({
  declarations: [
    BaseModalShowHideColsComponent,
    SelectedColItemComponent,
    AvailableColItemComponent
  ],
  imports: [
    CommonModule,
    BaseModalModule,
    ReactiveFormsModule,
    BaseInputModule,
    IconsComponentModule,
    DragDropModule,
    BaseButtonModule
  ],
  exports: [BaseModalShowHideColsComponent]
})
export class BaseModalShowHideColsModule {}
