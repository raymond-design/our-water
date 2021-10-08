import { TestBed } from '@angular/core/testing';

import { DataArrangementService } from './data-arrangement.service';

describe('DataArrangementService', () => {
  let service: DataArrangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataArrangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
