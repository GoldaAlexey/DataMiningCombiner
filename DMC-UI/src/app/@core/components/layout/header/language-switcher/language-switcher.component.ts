import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../../services/translation/translation.service';
import { LANGUAGE } from './../../../../constants/translation';
import {SelectItem} from 'primeng/api';
import { LanguageItem } from './language-item';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  private selectedlanguage: SelectItem;
  private languages: SelectItem[]=[];

  constructor(private translationService: TranslationService ) { 
    this.selectedlanguage = {
      value: this.translationService.getCurrentLanguage(),
      label: this.translationService.getCurrentLanguage(),
    };
    this.setLanguages();
  }

  ngOnInit() {}

  public getLanguages(): SelectItem[]{
    return this.languages;
  }

  public getSelectedLanguages(): SelectItem{
    return this.selectedlanguage;
  }

  public languageChange(){
    this.translationService.switchLanguage(this.selectedlanguage.value.label);
  }

  private setLanguages(){
    let languages:string[] = this.translationService.getListOfLanguages();
    let lang = LanguageItem[languages.length] = [];
    for(let i=0;i<languages.length;i++){
      lang[i] = new LanguageItem(languages[i]);
    }
    this.languages=lang;
  }
}
