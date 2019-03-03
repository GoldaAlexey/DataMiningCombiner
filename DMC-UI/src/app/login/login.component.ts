import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/services/user/user.service';
import { ICredits } from './credits-model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credits: ICredits = {} as ICredits;

  constructor(private readonly userService: UserService) { }

  public ngOnInit(): void { }

  public login(form: NgForm): void {

  }

}
