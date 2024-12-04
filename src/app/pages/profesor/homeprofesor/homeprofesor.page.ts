import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homeprofesor',
  templateUrl: './homeprofesor.page.html',
  styleUrls: ['./homeprofesor.page.scss'],
})
export class HomeprofesorPage implements OnInit {

  nombre: string = "";
  apellido: string = "";


  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    const x = localStorage.getItem("nombre");
    const y = localStorage.getItem("apellido");
    this.nombre = x ?? '';
    this.apellido = y ?? '';
  }

  generarqr() {
    this.navCtrl.navigateForward(['/generarqr']);
  }

  asistencia() {
    this.navCtrl.navigateForward(['/asistencia']);
  }

  bitacora() {
    this.navCtrl.navigateForward(['/bitacora']);
  }

  notas() {
    this.navCtrl.navigateForward(['/notas']);
  }

  cursos() {
    this.navCtrl.navigateForward(['/cursos']);
  }


  horario() {
    this.navCtrl.navigateForward(['/schedule']);
  }

  logout() {
    localStorage.removeItem("usuario");
    this.navCtrl.navigateRoot(['/login']);
  }
}
