import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
    public handle(params: MissingTranslationHandlerParams): string {
        console.warn(`Translation with key ${params.key} not found`);

        return params.key;
    }
}
