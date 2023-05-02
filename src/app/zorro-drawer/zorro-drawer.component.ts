import { Component } from '@angular/core';

@Component({
  selector: 'app-zorro-drawer',
  templateUrl: './zorro-drawer.component.html',
  styleUrls: ['./zorro-drawer.component.less']
})
export class ZorroDrawerComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
