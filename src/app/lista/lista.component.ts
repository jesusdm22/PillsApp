import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }
    hoy = new Date();
    diaHoy = this.hoy.getDate();
    mesHoy = this.hoy.getMonth() + 1;
    anioHoy = this.hoy.getFullYear();
    diaActual = 'HOY (' + this.diaHoy + '/' + this.mesHoy + '/' + this.anioHoy + ')';

  ngOnInit() {
    this.diaActual = 'HOY (' + this.diaHoy + '/' + this.mesHoy + '/' + this.anioHoy + ')';
  }

}
