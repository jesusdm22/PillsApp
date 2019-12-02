import { Component, OnInit } from '@angular/core';
import { Viaje } from '../interfaces/viaje';
import { ViajesService } from '../servicios/viajes.service';

@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.component.html',
  styleUrls: ['./lista-viajes.component.css']
})
export class ListaViajesComponent implements OnInit {

  viajes: Viaje[];

  constructor(private viajesService: ViajesService) { }

  ngOnInit() {
    this.viajes = this.viajesService.getLista();
  }
}
