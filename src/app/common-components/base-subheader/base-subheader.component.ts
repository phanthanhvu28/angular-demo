import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-subheader',
  templateUrl: './base-subheader.component.html',
  styleUrls: ['./base-subheader.component.less']
})
export class BaseSubheaderComponent {
  @Input() className: string = '';
}
