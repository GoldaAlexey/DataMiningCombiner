import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from 'src/app/urls';

import { Credits } from './credits-model';

@Injectable()
export class LoginDataService {

  constructor(private readonly http: HttpClient) { }

  public login(credits: Credits): Observable<User> {
    return this.http.post<User>(URLS.LOGIN, credits);
  }
}
