import { Component, OnInit } from '@angular/core';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-zorro-tab',
  templateUrl: './zorro-tab.component.html',
  styleUrls: ['./zorro-tab.component.less']
})
export class ZorroTabComponent implements OnInit {
  // Tab1(){
  //   alert('Tab1')
  // }
  public tab1Data = [{"Name":"Phan Thanh Vu","Age":30,"Email":"phanthanhvu28@gmail.com"},{"Name":"Nguyen Thi Nu","Age":30,"Email":"numt08@gmail.com"}];
  public tab2Data = [{"Age":30},{"Age":20}];

  ngOnInit(): void {

  }

  onTabSelected(index: number) {
    console.log(index); // index của tab đã chọn
    switch (index) {
      case 0:
        this.tab1Data=[{"Name":"Phan Thanh Vu","Age":30,"Email":"phanthanhvu28@gmail.com"},{"Name":"Nguyen Thi Nu","Age":30,"Email":"numt08@gmail.com"}];
        break;
      case 1:
        this.tab2Data = [{"Age":30},{"Age":20}];        
        break;
      // Add more cases for additional tabs
    }
  }
}
