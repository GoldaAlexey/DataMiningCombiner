import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Credits } from './credits-model';
import { LoginDataService } from './login-data.service';

@Injectable()
export class LoginService {

  constructor(private readonly loginDataService: LoginDataService) { }

  public login(credits: Credits): Observable<User> {
    return this.loginDataService.login(credits);
  }

  public logout(): void {
    // delete from storage
  }
}
