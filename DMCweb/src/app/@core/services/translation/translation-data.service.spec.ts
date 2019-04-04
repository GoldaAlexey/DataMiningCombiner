import { TestBed } from '@angular/core/testing';

import { TranslationDataService } from './translation-data.service';

describe('TranslationDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslationDataService = TestBed.get(TranslationDataService);
    expect(service).toBeTruthy();
  });
});
