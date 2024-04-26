import { Component,OnInit } from '@angular/core';
import { ServerhttpService } from './services/serverhttp.service';
import { AuthService } from './pages/auth/service';
// import { AuthService } from './guard/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private _authService: AuthService){

    this._authService.loginChanged.subscribe((userAuthenticated) => {
      this.userAuthenticated = userAuthenticated;
    });

  }
  ngOnInit(): void {    
    this._authService.isAuthenticated().then((userAuthenticated) => {
      this.userAuthenticated = userAuthenticated;
    });
  }
  
  title = 'app-angular-web';
  public userAuthenticated = false;
  public isCollapsed=false
}
