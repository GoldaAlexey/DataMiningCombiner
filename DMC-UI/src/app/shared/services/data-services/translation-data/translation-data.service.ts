import { Injectable } from '@angular/core';
import { LANGUAGE_STORAGE_KEY } from '../../../constants/translation';

@Injectable()
export class TranslationDataService {

  constructor() { }

  public getLanguageFromStorage(): string {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  }

  public saveLanguageInStorage(language: string): void {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
}
