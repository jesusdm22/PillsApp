import { Injectable } from '@angular/core';
import {MEDICAMENTOS} from '../mock-medicamentos';
import {Medicamento} from '../Medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor() { }

  getMedicamentos(): Medicamento[] {
    return MEDICAMENTOS;
}
}

