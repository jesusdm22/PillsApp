import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lema: string;
  title: string;

  constructor() {
    this.lema = 'Escoja un lugar y viaje a donde quiera.';
    this.title = 'Viajes Cabrera';
  }

  ngOnInit() {
  }

}
