import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { Router } from '@angular/router';
import { NvSafeAny } from '@models/base/data.interface';

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.less']
})
export class BaseHeaderComponent {
  @Input() className: string = '';
  @Input() hasTitle: boolean = false;
  @Input() title: TemplateRef<NvSafeAny> | string = '';
  @Input() hasIconBack: boolean = false;

  @Output() onClickIconBack: EventEmitter<void> = new EventEmitter();

  constructor(private _router: Router) {}

  onClickIcon() {
    this.onClickIconBack.emit();
  }
}
