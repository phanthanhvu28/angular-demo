import { Component } from '@angular/core';
import { AbsBaseModalNewComponent } from 'src/app/abstracts/components/base-data-list/base-modal-new.component';

@Component({
  selector: 'app-modal-annex-list-fullscreen',
  templateUrl: './modal-annex-list-fullscreen.component.html',
  styleUrls: ['./modal-annex-list-fullscreen.component.less']
})
export class ModalAnnexListFullscreenComponent extends AbsBaseModalNewComponent {
  constructor() {
    super();
  }
  initShow(args) {}
  onVisibleModalChange(e) {
    this.isActive = false;
  }
}
