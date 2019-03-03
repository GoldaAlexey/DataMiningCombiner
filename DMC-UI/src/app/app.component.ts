import { Component } from '@angular/core';

import { TranslationService } from './shared/services/translation/translation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslationService]
})
export class AppComponent {

  constructor(private readonly translationService: TranslationService) {
    this.translationService.initializeTranslatation();
  }
}
