import { Component, OnInit } from '@angular/core';
import {ListaComponent} from '../lista/lista.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],

})
export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDiaClicado() {
    const dia = document.getElementById('evt-date').innerHTML;
    sessionStorage.setItem('diaClicado', dia);
  }

}
