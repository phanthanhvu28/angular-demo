import { Component,OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  constructor(private common:CommonService){
    this.age = common.age
  }
  ngOnInit(): void {
    
  }

  name = "Phan Thanh Vu";
  age = 17;

  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  showAge = true;

  isVisibleImport: boolean = false;

  handleShowImportModal() {
    debugger
    alert("Button is clicked fddggf!");
  }

  TangTuoi() {
    this.common.age++;
    this.age = this.common.age;
    if(this.age===20){
      this.months.push(`${this.name}-${this.age}`)
    }
  }
  GiamTuoi=()=>{
    this.age --;
  }

}
