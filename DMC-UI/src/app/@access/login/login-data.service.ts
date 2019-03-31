import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICredits } from './credits-model';
import { URLS } from 'src/app/urls';

@Injectable()
export class LoginDataService {

  constructor(private readonly http: HttpClient) { }

  public login(credits: ICredits): Observable<User> {
    return this.http.post<User>(URLS.LOGIN, credits);
  }
}
