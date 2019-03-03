import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICredits } from '../../../../login/credits-model';
import { URLS } from '../../../../urls';
import { USER_STORAGE_KEY } from '../../../constants/user';
import { User } from '../../user/user-model';

@Injectable()
export class UserDataService {

  constructor(private readonly http: HttpClient) { }

  public getUserFromStorage(): User {
    const user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));

    return user ? user : {};
  }

  public saveUserInStorage(user: User): void {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  }

  public removeUserFromStorage(): void {
    localStorage.removeItem(USER_STORAGE_KEY);
  }

  public login(credits: ICredits): Observable<User> {
    return this.http.post<User>(URLS.LOGIN, credits);
  }
}
