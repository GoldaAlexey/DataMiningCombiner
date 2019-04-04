import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(
        private readonly userService: UserService,
        private readonly router: Router) {
    }

    public canLoad(route: Route): boolean {
        const userAuthenticated = this.userService.user.token ? true : false;

        if (!userAuthenticated) {
            this.router.navigate(['/login']);
        }

        return userAuthenticated;
    }
}
