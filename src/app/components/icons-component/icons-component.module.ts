import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconNotificationComponent } from './icon-notification/icon-notification.component';
import { IconBellComponent } from './icon-bell/icon-bell.component';
import { IconChevronComponent } from './icon-chevron/icon-chevron.component';
import { IconCheckComponent } from './icon-check/icon-check.component';
import { IconDoubleLineComponent } from './icon-double-line/icon-double-line.component';
import { IconBxSearchComponent } from './icon-bx-search/icon-bx-search.component';
import { IconArrowComponent } from './icon-arrow/icon-arrow.component';
import { IconMenuFoldComponent } from './icon-menu-fold/icon-menu-fold.component';
import { IconPlusComponent } from './icon-plus/icon-plus.component';
import { IconSortAscComponent } from './icon-sort-asc/icon-sort-asc.component';
import { IconSortDescComponent } from './icon-sort-desc/icon-sort-desc.component';
import { IconRedoComponent } from './icon-redo/icon-redo.component';
import { IconEnterComponent } from './icon-enter/icon-enter.component';
import { IconArrowOutlineComponent } from './icon-arrow-outline/icon-arrow-outline.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';
import { IconFilteringComponent } from './icon-filtering/icon-filtering.component';
import { IconRemoveComponent } from './icon-remove/icon-remove.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconSaveComponent } from './icon-save/icon-save.component';
import { IconFullscreenComponent } from './icon-fullscreen/icon-fullscreen.component';
import { IconFullscreenExitComponent } from './icon-fullscreen-exit/icon-fullscreen-exit.component';
import { IconArrowCircleLeftComponent } from './icon-arrow-circle-left/icon-arrow-circle-left.component';
import { IconSendComponent } from './icon-send/icon-send.component';
import { IconContractCustomerComponent } from './icon-contract-customer/icon-contract-customer.component';
import { IconContractModuleContractComponent } from './icon-contract-module-contract/icon-contract-module-contract.component';
import { IconRadioButtonComponent } from './icon-radio-button/icon-radio-button.component';
import { IconCurrencyContractComponent } from './icon-currency-contract/icon-currency-contract.component';
import { IconTrashComponent } from './icon-trash/icon-trash.component';
import { IconDownloadComponent } from './icon-download/icon-download.component';
import { IconExclamationCircleComponent } from './icon-exclamation-circle/icon-exclamation-circle.component';
import { IconPushpinComponent } from './icon-pushpin/icon-pushpin.component';
import { IconReuseMarkupComponent } from './icon-reuse-markup/icon-reuse-markup.component';
import { IconChangeMarkupComponent } from './icon-change-markup/icon-change-markup.component';
import { IconCheckCircleComponent } from './icon-check-circle/icon-check-circle.component';
import { IconStopComponent } from './icon-stop/icon-stop.component';
import { IconCalendarComponent } from './icon-calendar/icon-calendar.component';
import { IconDoubleRightComponent } from './icon-double-right/icon-double-right.component';
import { IconShrinkComponent } from './icon-shrink/icon-shrink.component';
import { IconArrowsAltComponent } from './icon-arrows-alt/icon-arrows-alt.component';
import { IconCheckTickComponent } from './icon-check-tick/icon-check-tick.component';


const ICONS_PROVIDER = [
    IconNotificationComponent,
    IconBellComponent,
    IconChevronComponent,
    IconCheckComponent,
    IconDoubleLineComponent,
    IconBxSearchComponent,
    IconArrowComponent,
    IconMenuFoldComponent,
    IconPlusComponent,
    IconSortAscComponent,
    IconSortDescComponent,
    IconRedoComponent,
    IconEnterComponent,
    IconArrowOutlineComponent,
    IconFilterComponent,
    IconFilteringComponent,
    IconRemoveComponent,
    IconCloseComponent,
    IconSaveComponent,
    IconFullscreenComponent,
    IconFullscreenExitComponent,
    IconArrowCircleLeftComponent,
    IconSendComponent,
    IconContractCustomerComponent,
    IconContractModuleContractComponent,
    IconRadioButtonComponent,
    IconCurrencyContractComponent,
    IconTrashComponent,
    IconDownloadComponent,
    IconExclamationCircleComponent,
    IconPushpinComponent,
    IconReuseMarkupComponent,
    IconChangeMarkupComponent,
    IconCheckCircleComponent,
    IconStopComponent,
    IconCalendarComponent,
    IconDoubleRightComponent,
    IconShrinkComponent,
    IconArrowsAltComponent,
    IconCheckTickComponent
];

@NgModule({
  declarations: [...ICONS_PROVIDER],
  imports: [CommonModule],
  exports: [...ICONS_PROVIDER]
})
export class IconsComponentModule {}
