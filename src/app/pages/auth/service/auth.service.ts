import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings, WebStorageStateStore } from 'oidc-client';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _userManager: UserManager;
  _user: User;
  _loginChangedSubject = new Subject<boolean>();
  loginChanged = this._loginChangedSubject.asObservable();
  private get idpSettings(): UserManagerSettings {
    return {
      authority: environment.idpAuthority,
      client_id: environment.clientId,
      redirect_uri: `${environment.clientRoot}/signin-callback`,
      scope:
        'openid roles profile tariff-api',
      response_type: 'code',
      post_logout_redirect_uri: `${environment.clientRoot}/signout-callback`,
      automaticSilentRenew: true,
      silent_redirect_uri: `${environment.clientRoot}/assets/silent-callback.html`,
      stateStore: new WebStorageStateStore({
        store: localStorage
      }),
      userStore: new WebStorageStateStore({
        store: localStorage
      })
    };
  }
  public get user(): User {
    return this._user;
  }
  constructor() {
    this._userManager = new UserManager(this.idpSettings);

    this._userManager.events.addAccessTokenExpired((_) => {
      this._loginChangedSubject.next(false);
    });
   }
   public login = () => {
    return this._userManager.signinRedirect();
  };
  public isAuthenticated = (): Promise<boolean> => {
    return this._userManager.getUser().then((user) => {
      if (this._user !== user) {
        this._loginChangedSubject.next(this.checkUser(user));
      }
      this._user = user;
      return this.checkUser(user);
    });
  };

  public finishLogin = (): Promise<User> => {
    if (window.location.hash) {
      window.location.hash = decodeURIComponent(window.location.hash);
    }
    return this._userManager
      .signinRedirectCallback()
      .then((user) => {
        this._user = user;
        this._loginChangedSubject.next(this.checkUser(user));
        return user;
      })
      .catch((error) => {
        return this._user;
      });
  };

  public logout = () => {
    this._userManager.signoutRedirect();
  };

  public finishLogout = () => {
    this._user = null;
    return this._userManager.signoutRedirectCallback();
  };

  private checkUser = (user: User): boolean => {
    return !!user && !user.expired;
  };

  public getAccessToken = (): string => {
    return !!this._user && !this._user.expired ? this._user.access_token : null;
  };

  public checkIfUserIsRole = (roleroute: Array<string>): Promise<boolean> => {
    return this._userManager.getUser().then((user) => {
      if (user?.profile.role.some((v) => roleroute.includes(v))) {
        return true;
      } else {
        return false;
      }
    });
  };

  public checkIfRole = (role: Array<string>): Promise<boolean> => {
    return this._userManager.getUser().then((user) => {
      let xy = new Array<string>();
      if (user) {
        xy = user.profile.role as Array<string>;

        console.log(xy);
      }

      return role.some((v) => xy.indexOf(v) > -1);
    });
  };

  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  public getCurrentUser(): User {
    return this._user;
  }

  public getCurrentUserParse(): Object {
    if (!this._user || !this._user.access_token) {
      return null;
    }

    return this.parseJwt(this._user.access_token);
  }

  
}
