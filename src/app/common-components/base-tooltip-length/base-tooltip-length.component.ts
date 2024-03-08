import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-tooltip-length',
  templateUrl: './base-tooltip-length.component.html',
  styleUrls: ['./base-tooltip-length.component.less']
})
export class BaseTooltipLengthComponent {
  @Input() text: string | number;
  @Input() textTooltip: string | number;
  @Input() className: string;
  @Input() maxLength: number = 20;
  checkTypeNumber(text): boolean {
    if (typeof text == 'number') return true;
    else return false;
  }
}
