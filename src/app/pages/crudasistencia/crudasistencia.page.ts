import { Component, OnInit } from '@angular/core';
import { CrudAsistenciaService } from '../../servicios/asistencia.service';
import { Asistencia } from '../../model/Asistencia';

@Component({
  selector: 'app-crudasistencia',
  templateUrl: './crudasistencia.page.html',
  styleUrls: ['./crudasistencia.page.scss']
})
export class CrudasistenciaPage implements OnInit {

  asistencias: Asistencia[] = [];

  nuevaAsistencia: Asistencia = {
    id: '',
    materiaId: '',
    alumnoId: '',
    fecha: new Date()
  };

  constructor(private crudAsistenciaService: CrudAsistenciaService) {}

  ngOnInit() {
    this.listarAsistencias();
  }

  listarAsistencias() {
    this.crudAsistenciaService.listarAsistencias().subscribe((data) => {
      this.asistencias = data;
    });
  }

  registrarAsistencia() {
    this.crudAsistenciaService.registrarAsistencia(this.nuevaAsistencia).then(() => {
      console.log('Asistencia registrada');
      this.nuevaAsistencia = { id: '', materiaId: '', alumnoId: '', fecha: new Date() };
      this.listarAsistencias();
    });
  }

  modificarAsistencia(asistencia: Asistencia) {
    asistencia.fecha = new Date(); 
    this.crudAsistenciaService.modificarAsistencia(asistencia).then(() => {
      console.log('Asistencia modificada');
    });
  }

  eliminarAsistencia(id: string) {
    this.crudAsistenciaService.eliminarAsistencia(id).then(() => {
      console.log('Asistencia eliminada');
    });
  }
}