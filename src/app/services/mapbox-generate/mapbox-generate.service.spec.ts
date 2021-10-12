import { TestBed } from '@angular/core/testing';

import { MapboxGenerateService } from './mapbox-generate.service';

describe('MapboxGenerateService', () => {
  let service: MapboxGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapboxGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
