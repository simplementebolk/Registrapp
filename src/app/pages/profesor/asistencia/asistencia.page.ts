import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  alumnos: { nombre: string, fecha: string, presente: boolean }[] = [
    { nombre: 'Juan Caceres', fecha: '12/02/2024', presente: false },
    { nombre: 'Ana Torres', fecha: '12/02/2024', presente: false },
    { nombre: 'Luis Pérez', fecha: '12/02/2024', presente: false },
    { nombre: 'Carla Méndez', fecha: '12/02/2024', presente: false },
    { nombre: 'Pedro Jiménez', fecha: '12/02/2024', presente: false },
    { nombre: 'Lucía Rodríguez', fecha: '12/02/2024', presente: false },
    { nombre: 'Carlos Hernández', fecha: '12/02/2024', presente: false },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {}

  generarqr() {
    this.navCtrl.navigateForward(['/generarqr']);
  }

  confirmarAsistencia() {
    console.log('Asistencia confirmada: ', this.alumnos);
    alert('Asistencia confirmada con éxito.');
    this.navCtrl.navigateForward(['/homeprofesor']);
  }
}
