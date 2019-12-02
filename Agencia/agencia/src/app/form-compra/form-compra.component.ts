import {Component, Input, OnInit} from '@angular/core';
import {Viaje} from '../interfaces/viaje';

import { ViajesService } from "../servicios/viajes.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from "@angular/common";
import {Cliente} from "../interfaces/cliente";

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit {

  @Input() viaje: Viaje;
  cliente: Cliente;

  constructor(
    public route: ActivatedRoute,
    private viajesService: ViajesService,
    public location: Location) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.viaje = this.viajesService.getViaje(id);
  }

}
