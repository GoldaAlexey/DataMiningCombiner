import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICredits } from './credits-model';
import { LoginService } from './login.service';
import { LoginDataService } from './login-data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, LoginDataService]
})
export class LoginComponent implements OnInit {

  public credits: ICredits = {} as ICredits;

  constructor(private readonly loginService: LoginService) { }

  public ngOnInit(): void { }

  public login(form: NgForm): void { }

}
