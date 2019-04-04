import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './@core/core.module';
import { PrimeNgModule } from './@primeng/primeng.module';
import { SharedModule } from './@shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
