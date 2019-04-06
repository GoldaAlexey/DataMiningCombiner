import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EN_TRANSLATION } from '../../../../assets/translation/en.translation';
import { RU_TRANSLATION } from '../../../../assets/translation/ru.translation';
import { LANGUAGE } from '../../constants/translation';
import { TranslationDataService } from './translation-data.service';

@Injectable()
export class TranslationService {

    private readonly subject = new BehaviorSubject<any>(null);

    constructor(
        private readonly translate: TranslateService,
        private readonly translationDataService: TranslationDataService) {
    }

    public initializeTranslatation(): void {
        this.translate.setTranslation(LANGUAGE.English.title, EN_TRANSLATION);
        this.translate.setTranslation(LANGUAGE.Russian.title, RU_TRANSLATION);
        this.translate.setDefaultLang(LANGUAGE.English.title);

        const currentLanguage = this.translationDataService.getLanguageFromStorage();
        if (currentLanguage) {
            this.translate.use(currentLanguage);
        }
        this.translate.use(LANGUAGE.English.title);
        this.translationDataService.saveLanguageInStorage(LANGUAGE.English.title);
    }

    public switchLanguage(language): void {
        this.translate.use(language);
        this.translationDataService.saveLanguageInStorage(language);
        this.subject.next(language);
    }

    public getObserver(): Observable<any> {
        return this.subject;
    }

    public getCurrentLanguage(): string {
        return this.translate.currentLang;
    }
    public getListOfLanguages(): string[]{
        return this.translate.getLangs();
    }
}
