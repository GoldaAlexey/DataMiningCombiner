import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CustomFormsModule } from 'ngx-custom-validators';

import { PrimeNgModule } from '../@primeng/primeng.module';
import { DmcButtonComponent } from './components/dmc-button/dmc-button.component';
import { DmcInputComponent } from './components/dmc-input/dmc-input.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';

@NgModule({
  declarations: [
    DmcButtonComponent,
    DmcInputComponent,
    ValidationMessageComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    PrimeNgModule,
    CustomFormsModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    DmcButtonComponent,
    DmcInputComponent,
    CustomFormsModule,
    TranslateModule,
    ValidationMessageComponent
  ]
})
export class SharedModule { }
