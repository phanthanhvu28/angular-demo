import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/service';

@Component({
  selector: 'app-public-signout-callback',
  templateUrl: './public-signout-callback.component.html',
  styleUrls: ['./public-signout-callback.component.less']
})
export class PublicSignoutCallbackComponent {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._auth.finishLogout().then((_) => {
      this._router.navigate(['/'], { replaceUrl: true });
    });
  }
}
