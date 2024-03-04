import { Component, Input } from '@angular/core';
import { StatusClassEnumContract } from '../../enums';


@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.less']
})
export class StatusLabelComponent {
  @Input() data: string = '';
  @Input() isShowArrow: boolean = false;
  classStatus = StatusClassEnumContract;
}
