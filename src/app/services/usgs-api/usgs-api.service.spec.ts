import { TestBed } from '@angular/core/testing';

import { UsgsApiService } from './usgs-api.service';

describe('UsgsApiService', () => {
  let service: UsgsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsgsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
