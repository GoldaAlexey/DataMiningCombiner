import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MissingTranslationHandler, TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { CustomMissingTranslationHandler } from './handlers/missing-translation-handler';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { TranslationDataService } from './services/translation/translation-data.service';
import { TranslationService } from './services/translation/translation.service';
import { UserDataService } from './services/user/user-data.service';
import { UserService } from './services/user/user.service';
import { LanguageSwitcherComponent } from './components/layout/header/language-switcher/language-switcher.component';
import { UserMenuComponent } from './components/layout/header/user-menu/user-menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LanguageSwitcherComponent,
    UserMenuComponent
  ],
  imports: [
    RouterModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler
      }
    })
  ],
  exports: [
    TranslateModule,
    LayoutComponent
  ],
  providers: [
    TranslationService,
    TranslationDataService,
    UserService,
    UserDataService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
