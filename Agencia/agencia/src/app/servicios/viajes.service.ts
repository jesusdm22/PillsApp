import { Injectable } from '@angular/core';

import { Viaje } from "../interfaces/viaje";
import { VIAJES } from "../lista-viajes";

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor() { }

  getLista(): Viaje[] {
    return VIAJES;
  }

  getViaje(idViaje: number): Viaje {
    return VIAJES.find(viaje => viaje.idViaje === idViaje);
  }
}
