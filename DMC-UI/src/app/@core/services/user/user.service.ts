import { Injectable } from '@angular/core';

import { UserDataService } from './user-data.service';

@Injectable()
export class UserService {

  public user: User;

  constructor(private readonly userDataService: UserDataService) {
    this.user = this.userDataService.getUserFromStorage();
  }

  public saveUserData(user: User): void {
    this.user = user;
    this.userDataService.saveUserInStorage(user);
  }
}
