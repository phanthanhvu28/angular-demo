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
    IconFullscreenExitComponent
];

@NgModule({
  declarations: [...ICONS_PROVIDER],
  imports: [CommonModule],
  exports: [...ICONS_PROVIDER]
})
export class IconsComponentModule {}
