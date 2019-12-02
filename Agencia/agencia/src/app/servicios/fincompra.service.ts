import { Injectable } from '@angular/core';
import {Compra} from "../interfaces/compra";
import {Cliente} from "../interfaces/cliente";
import {Viaje} from "../interfaces/viaje";

@Injectable({
  providedIn: 'root'
})
export class FincompraService {

  compras: Compra[];

  constructor() { }

  getCompras(){
    return this.compras;
  }

  getCompra(cliente: Cliente, viaje: Viaje){
    let compra: Compra = {cliente, viaje};
    this.compras.push(compra);
  }
}
