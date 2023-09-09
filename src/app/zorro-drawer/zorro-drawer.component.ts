import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterModel } from '../models/tariff-main';

@Component({
  selector: 'app-zorro-drawer',
  templateUrl: './zorro-drawer.component.html',
  styleUrls: ['./zorro-drawer.component.less']
})
export class ZorroDrawerComponent implements OnInit {


  public myObservable$!: Observable<number>;
  objectModel :  FilterModel = {fieldName:"FieldName",comparision:"Comparision",fieldValue:"FieldValue"}
  ngOnInit(): void {
    
    // this.myObservable$ = new Observable(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    // });

    // this.myObservable$.subscribe(value => {
    //   console.log(value);
    // });

    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      subscriber.next(4);
      subscriber.next(4);
      subscriber.next(4);
      subscriber.next(4);
      subscriber.next(4);
      setTimeout(() => {
        subscriber.next(5);
        subscriber.complete();
      }, 1000);
    });
     
    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');


    const foo = new Observable((subscriber) => {
      
      console.log('Hello');
      console.log('Hello2');
      subscriber.next(42);
      subscriber.next(this.objectModel);
    });
     
    foo.subscribe((x:any) => {
      console.log(x);
    });    
  }

  
  
  visible = false;

  

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}


export class FilterModelA {
  // các thuộc tính và phương thức của lớp
  static defaultFilter = new FilterModelA(); // khởi tạo một đối tượng mặc định
  static readonly MAX_FILTERS = 10; // khai báo một hằng số
  
}