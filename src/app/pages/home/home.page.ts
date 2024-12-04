import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string = '';
  apellido: string = '';

  constructor(private navCtrl: NavController, private menu: MenuController) {}

  ngOnInit(): void {
    var x = localStorage.getItem("nombre");
    var y = localStorage.getItem("apellido");
    this.nombre = x ?? '';
    this.apellido = y ?? '';
  }

  
  cerrarSesion() {

    console.log('Cerrando sesión...');
    localStorage.removeItem("usuario"); 
    this.navCtrl.navigateForward(['/login']); 
    this.menu.close(); 
  }


  otraAccion() {
    console.log('Realizando otra acción');
    this.menu.close(); 
  }


  escanearqr() {
    this.navCtrl.navigateForward(['/escanearqr']);
  }

  horario() {
    this.navCtrl.navigateForward(['/horario']);
  }

  calificaciones() {
    this.navCtrl.navigateForward(['/calificaciones']);
  }

  asistencia() {
    this.navCtrl.navigateForward(['/asistenciaalumno']);
  }

  cursos() {
    this.navCtrl.navigateForward(['/cursosalumnos']);
  }

}
