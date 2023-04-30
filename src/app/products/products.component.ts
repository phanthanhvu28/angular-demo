import { Component,OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit{
  
constructor(private common:CommonService){

}
ngOnInit(): void {
  
}


public age = this.common.age

  TangTuoi() {
    this.common.age++;
    this.age = this.common.age;   
  }

}
