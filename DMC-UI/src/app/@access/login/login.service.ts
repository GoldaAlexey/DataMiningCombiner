import { Injectable } from '@angular/core';
import { ICredits } from './credits-model';
import { Observable } from 'rxjs';
import { LoginDataService } from './login-data.service';

@Injectable()
export class LoginService {

  constructor(private readonly loginDataService: LoginDataService) { }

  public login(credits: ICredits): Observable<User> {
    return this.loginDataService.login(credits);
  }

  public logout(): void {
    // delete from storage
  }
}
