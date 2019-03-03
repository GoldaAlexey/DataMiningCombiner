import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredits } from 'src/app/login/credits-model';

import { UserDataService } from '../data-services/user-data/user-data.service';
import { User } from './user-model';

@Injectable()
export class UserService {

  public user: User;

  constructor(private readonly userDataService: UserDataService) {
    this.user = this.userDataService.getUserFromStorage();
  }

  public login(credits: ICredits): Observable<User> {
    return this.userDataService.login(credits);
  }

  public logout(): void {
    this.userDataService.removeUserFromStorage();
  }
}
