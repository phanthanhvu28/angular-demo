import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/service';

@Component({
  selector: 'app-public-signin-callback',
  templateUrl: './public-signin-callback.component.html',
  styleUrls: ['./public-signin-callback.component.less']
})
export class PublicSigninCallbackComponent {
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._auth.finishLogin().then((_) => {
      this._router.navigate(['/'], { replaceUrl: true });
    });
  }
}
