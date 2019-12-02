import { TestBed } from '@angular/core/testing';

import { ViajesService } from './viajes.service';

describe('ViajesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViajesService = TestBed.get(ViajesService);
    expect(service).toBeTruthy();
  });
});
