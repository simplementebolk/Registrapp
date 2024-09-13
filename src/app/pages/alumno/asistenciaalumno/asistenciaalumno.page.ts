import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistenciaalumno',
  templateUrl: './asistenciaalumno.page.html',
  styleUrls: ['./asistenciaalumno.page.scss'],
})
export class AsistenciaalumnoPage {
  calidadSoftware = [
    { fecha: new Date('2024-09-10'), asistencia: 'Presente' },
    { fecha: new Date('2024-09-12'), asistencia: 'Ausente' },
  ];

  aplicacionesMoviles = [
    { fecha: new Date('2024-09-11'), asistencia: 'Presente' },
    { fecha: new Date('2024-09-13'), asistencia: 'Presente' },
  ];

  arquitectura = [
    { fecha: new Date('2024-09-14'), asistencia: 'Presente' },
    { fecha: new Date('2024-09-15'), asistencia: 'Ausente' },
  ];

  inglesIntermedio = [
    { fecha: new Date('2024-09-16'), asistencia: 'Presente' },
    { fecha: new Date('2024-09-17'), asistencia: 'Presente' },
  ];

  estadisticaDescriptiva = [
    { fecha: new Date('2024-09-18'), asistencia: 'Ausente' },
    { fecha: new Date('2024-09-19'), asistencia: 'Presente' },
  ];

  constructor() {}
}