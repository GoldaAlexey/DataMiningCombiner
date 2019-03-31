import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './@shared/shared.module';
import { PrimeNgModule } from './@primeng/primeng.module';
import { CoreModule } from './@core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
