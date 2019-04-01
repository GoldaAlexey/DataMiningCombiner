import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './@shared/shared.module';
import { PrimeNgModule } from './@primeng/primeng.module';
import { CoreModule } from './@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

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
