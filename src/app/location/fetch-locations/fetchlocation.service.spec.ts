import { TestBed } from '@angular/core/testing';

import { FetchlocationService } from './fetchlocation.service';

describe('FetchlocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchlocationService = TestBed.get(FetchlocationService);
    expect(service).toBeTruthy();
  });
});
