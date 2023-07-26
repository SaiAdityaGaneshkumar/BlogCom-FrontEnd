import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ApplicationUser } from '../models/account/applicationuser.model';
import { HttpClient } from '@angular/common/http';
import { ApplicationUserLogin } from '../models/account/applicationuserlogin.model';
import { environment } from 'src/environments/environment';
import { ApplicationUserCreate } from '../models/account/applicationusercreate.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject$: BehaviorSubject<ApplicationUser>

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject$ = new BehaviorSubject<ApplicationUser>(JSON.parse(localStorage.getItem('blogCom-currentUser')));
   }

   login(model: ApplicationUserLogin) : Observable<ApplicationUser>  {
    return this.http.post(`${environment.webApi}/Account/login`, model).pipe(
      map((user : ApplicationUser) => {

        if (user) {
          localStorage.setItem('blogCom-currentUser', JSON.stringify(user));
          this.setCurrentUser(user);
        }

        return user;
      })
    )
  }
  register(model: ApplicationUserCreate) : Observable<ApplicationUser> {
    return this.http.post(`${environment.webApi}/Account/register`, model).pipe(
      map((user : ApplicationUser) => {

        if (user) {
          localStorage.setItem('blogCom-currentUser', JSON.stringify(user));
          this.setCurrentUser(user);
        }

        return user;
      })
    )
  }

  setCurrentUser(user: ApplicationUser) {
    this.currentUserSubject$.next(user);
  }
  public get currentUserValue(): ApplicationUser {
    return this.currentUserSubject$.value;
  }

  public givenUserIsLoggedIn(username: string) {
    return this.isLoggedIn() && this.currentUserValue.username === username;
  }

  public isLoggedIn() {
    const currentUser = this.currentUserValue;
    const isLoggedIn = !!currentUser && !!currentUser.token;
    return isLoggedIn;
  }

  logout() {
    localStorage.removeItem('blogCom-currentUser');
    this.currentUserSubject$.next(null);
  }
}