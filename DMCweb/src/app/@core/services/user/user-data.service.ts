import { Injectable } from '@angular/core';
import { USER_STORAGE_KEY } from '../../constants/user';

@Injectable()
export class UserDataService {

  constructor() { }

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
}
