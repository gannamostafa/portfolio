import { TestBed } from '@angular/core/testing';

import { PortfolioServiceTs } from './portfolio.service.js';

describe('PortfolioServiceTs', () => {
  let service: PortfolioServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
