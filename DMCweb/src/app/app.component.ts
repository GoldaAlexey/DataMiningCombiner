import { Component } from '@angular/core';
import { TranslationService } from './@core/services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly translationService: TranslationService) {
    this.translationService.initializeTranslatation();
  }
}
