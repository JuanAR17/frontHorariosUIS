import { TestBed } from '@angular/core/testing';

import { FunccompService } from './funccomp.service';

describe('FunccompService', () => {
  let service: FunccompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunccompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
