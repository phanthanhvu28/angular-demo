import { NgModule } from '@angular/core';
import { NvPopoverDirective } from './nv-popover.directive'; 
import { NvRowScrollPingDirective } from './nv-row-scroll-ping.directive';
import { NvWaringByDateDirective } from './nv-warning-by-date.directive';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NvEllipsisDirective } from './nv-ellipsis.directive';
import { NvHasPermission } from './has-permission.directive';

const DIRECTIVES_PROVIDER = [
  NvPopoverDirective,
  NvWaringByDateDirective,
  NvEllipsisDirective,
  NvHasPermission
];

@NgModule({
    declarations: [...DIRECTIVES_PROVIDER],
    imports: [NvRowScrollPingDirective],
    exports: [NvRowScrollPingDirective,...DIRECTIVES_PROVIDER],
    providers: [NzNoAnimationDirective]
})
export class BaseDirectiveModule {}
