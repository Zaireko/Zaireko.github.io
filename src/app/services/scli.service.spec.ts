import { TestBed } from '@angular/core/testing';

import { ScliService } from './scli.service';

describe('ScliService', () => {
  let service: ScliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScliService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
