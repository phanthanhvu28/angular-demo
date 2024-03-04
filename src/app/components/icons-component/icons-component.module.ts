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
    IconArrowOutlineComponent
];

@NgModule({
  declarations: [...ICONS_PROVIDER],
  imports: [CommonModule],
  exports: [...ICONS_PROVIDER]
})
export class IconsComponentModule {}
