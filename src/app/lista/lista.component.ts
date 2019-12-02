import {Component, OnInit, ViewChild} from '@angular/core';
import {MEDICAMENTOS} from '../mock-medicamentos';
import {MedicamentoService} from '../services/medicamento.service';
import {Medicamento} from '../Medicamento';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css',
  './la/css/line-awesome.css']
})
export class ListaComponent implements OnInit {

  medicamentos: Medicamento[];
  constructor(private medicamentoService: MedicamentoService) { }
    hoy = new Date();
    diaHoy = this.hoy.getDate();
    mesHoy = this.hoy.getMonth() + 1;
    anioHoy = this.hoy.getFullYear();
    diaActual = 'HOY (' + this.diaHoy + '/' + this.mesHoy + '/' + this.anioHoy + ')';


    getMedicamentos(): void {
      this.medicamentos = this.medicamentoService.getMedicamentos();
    }


  ngOnInit() {
    this.diaActual = 'HOY (' + this.diaHoy + '/' + this.mesHoy + '/' + this.anioHoy + ')';
    this.getMedicamentos();
  }

}
