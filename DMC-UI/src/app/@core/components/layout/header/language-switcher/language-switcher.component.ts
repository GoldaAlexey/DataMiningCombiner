import { Component, OnInit } from '@angular/core';
import { Language } from './language-model';
import { TranslationService } from '../../../../services/translation/translation.service'
@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  languages: Language[];

  selectedlanguage: Language;

  constructor(private translationService: TranslationService ) { 
    this.languages = [
      {name: 'En', secondName:'English'},
      {name: 'Ru', secondName:'Russian'},
  ];
  this.selectedlanguage = this.languages[0];
  }

  ngOnInit() { 
    
  }

  languageChange(){
    this.translationService.switchLanguage(this.selectedlanguage.secondName);
  }
}
