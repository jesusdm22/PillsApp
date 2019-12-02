import {Cliente} from "./cliente";
import {Viaje} from "./viaje";

export interface Compra {
  cliente: Cliente;
  viaje: Viaje;
}
