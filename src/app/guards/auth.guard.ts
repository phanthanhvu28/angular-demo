import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, from, map } from 'rxjs';
import { AuthService } from '../pages/auth/service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return from(this._auth.isAuthenticated()).pipe(
      map((res) => {
        if (!res) {
          this.redirectToLogin();
        }
       // return true;
        return res;
      })
    );
  }

  private redirectToLogin() {
    this._auth.login();
   // return true;
  }
}
