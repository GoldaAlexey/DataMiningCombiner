import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginDataService } from './login/login-data.service';
import { SharedModule } from '../@shared/shared.module';
import { AccessRoutingModule } from './access.routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    AccessRoutingModule
  ],
  providers: [
    LoginDataService
  ]
})
export class AccessModule { }
