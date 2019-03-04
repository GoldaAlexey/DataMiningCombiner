import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './core/layout/header/header.component';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { DMCCommonModule } from './modules/dmc-common.module';
import { PrimeNgModule } from './modules/primeng.module';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { TranslationDataService } from './shared/services/data-services/translation-data/translation-data.service';
import { UserDataService } from './shared/services/data-services/user-data/user-data.service';
import { TranslationService } from './shared/services/translation/translation-service.service';
import { UserService } from './shared/services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectsComponent,
    HeaderComponent,
    ProjectComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    PrimeNgModule,
    DMCCommonModule
  ],
  providers: [
    UserService,
    UserDataService,
    TranslationService,
    TranslationDataService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
