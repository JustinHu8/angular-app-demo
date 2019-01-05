import { TestBed } from '@angular/core/testing';

import { CreditRatingServiceService } from './credit-rating-service.service';

describe('CreditRatingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditRatingServiceService = TestBed.get(CreditRatingServiceService);
    expect(service).toBeTruthy();
  });
});
