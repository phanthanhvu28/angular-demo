import { Component,OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';


import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit{
  indexTab: number | string = 0;
constructor(private common:CommonService){

}
ngOnInit(): void {
  
}

public tab1Data = [{"Name":"Phan Thanh Vu","Age":30,"Email":"phanthanhvu28@gmail.com"},{"Name":"Nguyen Thi Nu","Age":30,"Email":"numt08@gmail.com"}];
public tab2Data = [{"Age":30},{"Age":20}];
public age = this.common.age

  TangTuoi() {
    this.common.age++;
    this.age = this.common.age;   
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
