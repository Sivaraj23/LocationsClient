import { TestBed } from '@angular/core/testing';

import { FindnearbylocationService } from './findnearbylocation.service';

describe('FindnearbylocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindnearbylocationService = TestBed.get(FindnearbylocationService);
    expect(service).toBeTruthy();
  });
});
