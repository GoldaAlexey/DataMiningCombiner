import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

import { DmcButtonComponent } from './components/dmc-button/dmc-button.component';
import { DmcInputComponent } from './components/dmc-input/dmc-input.component';
import { PrimeNgModule } from '../@primeng/primeng.module';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DmcButtonComponent, DmcInputComponent, ValidationMessageComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    PrimeNgModule,
    CustomFormsModule,
    TranslateModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    DmcButtonComponent,
    DmcInputComponent,
    CustomFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
