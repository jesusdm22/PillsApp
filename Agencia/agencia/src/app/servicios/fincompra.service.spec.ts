import { TestBed } from '@angular/core/testing';

import { FincompraService } from './fincompra.service';

describe('FincompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FincompraService = TestBed.get(FincompraService);
    expect(service).toBeTruthy();
  });
});
