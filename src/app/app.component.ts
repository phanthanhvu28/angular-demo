import { Component,OnInit } from '@angular/core';
import { ServerhttpService } from './Services/serverhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {    
    
  }
  title = 'app-angular-web';
  public isCollapsed=false
}
