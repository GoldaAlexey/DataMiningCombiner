import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../@shared/shared.module';
import { AccessRoutingModule } from './access.routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
