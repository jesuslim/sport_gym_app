import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from '../services/asistencias.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  asistencias: any = [];
  constructor(
    public asistenciasService: AsistenciasService
  ) { }

  ngOnInit() {
    this.findAsistencias();
  }

  findAsistencias() {
    this.asistenciasService.getAsistencias(localStorage.getItem('ID_Usuario')).subscribe((response) => {
      this.asistencias = response;
      console.log(this.asistencias);

    });
  }
}
