import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  usuario:string=""

  constructor(private navCtrl:NavController) {}

  ngOnInit(): void {
    var x=localStorage.getItem("usuario")
    this.usuario=x ?? ''
  }

  escanearqr(){
    this.navCtrl.navigateForward(['/escanearqr']);
  }

  horario(){
    this.navCtrl.navigateForward(['/horario']);
  }

  calificaciones(){
    this.navCtrl.navigateForward(['/calificaciones']);
  }

  asistencia(){
    this.navCtrl.navigateForward(['/asistenciaalumno']);
  }

  cursos(){
    this.navCtrl.navigateForward(['/cursosalumnos']);
  }

}
