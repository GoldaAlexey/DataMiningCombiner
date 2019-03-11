import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissingTranslationHandler, TranslateModule } from '@ngx-translate/core';
import { CustomFormsModule } from 'ngx-custom-validators';

import { DmcButtonComponent } from '../shared/components/dmc-button/dmc-button.component';
import { DmcInputComponent } from '../shared/components/dmc-input/dmc-input.component';
import { CustomMissingTranslationHandler } from '../shared/handlers/missing-translation-handler';
import { PrimeNgModule } from './primeng.module';
import { ValidationMessageComponent } from '../shared/components/validation-message/validation-message.component';

@NgModule({
  declarations: [DmcButtonComponent, DmcInputComponent, ValidationMessageComponent],
  imports: [
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler
      }
    }),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    CustomFormsModule
  ],
  exports: [
    TranslateModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DmcButtonComponent,
    DmcInputComponent,
    CustomFormsModule
  ]
})
export class DMCCommonModule { }
