import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICredits } from './credits-model';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credits: ICredits = {} as ICredits;

  constructor(private readonly userService: LoginService) { }

  public ngOnInit(): void { }

  public login(form: NgForm): void {

  }

}
