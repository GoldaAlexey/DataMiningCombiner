import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../@shared/shared.module';
import { AccessRoutingModule } from './access.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
