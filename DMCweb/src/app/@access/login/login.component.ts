import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/@core/services/user/user.service';

import { Credits } from './credits-model';
import { LoginDataService } from './login-data.service';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, LoginDataService]
})
export class LoginComponent implements OnInit, OnDestroy {

  public credits: Credits = {} as Credits;

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  public ngOnInit(): void { }

  public ngOnDestroy(): void { }

  public login(form: NgForm): void {
    if (form.valid) {
      this.loginService
        .login(this.credits)
        .pipe(
          untilDestroyed(this),
          catchError(this.failedUserLogin.bind(this))
        )
        .subscribe(this.successUserLogin.bind(this));
    }
  }

  private successUserLogin(user: User): void {
    this.userService.saveUserData(user);
    this.router.navigate(['']);
  }

  private failedUserLogin(errors): void {
    console.log(errors);
  }

}
