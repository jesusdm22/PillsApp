import { TestBed } from '@angular/core/testing';

import { MedicamentoService } from './medicamento.service';

describe('MedicamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicamentoService = TestBed.get(MedicamentoService);
    expect(service).toBeTruthy();
  });
});
