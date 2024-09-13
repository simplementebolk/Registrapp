import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homeprofesor',
  templateUrl: './homeprofesor.page.html',
  styleUrls: ['./homeprofesor.page.scss'],
})
export class HomeprofesorPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  usuario:string=""

  ngOnInit(): void {
    var x=localStorage.getItem("usuario")
    this.usuario=x ?? ''
  }
  
  generarqr(){
    this.navCtrl.navigateForward(['/generarqr']);
  }

  asistencia(){
    this.navCtrl.navigateForward(['/asistencia']);
  }
  
  bitacora(){
    this.navCtrl.navigateForward(['/bitacora']);
  }

  notas(){
    this.navCtrl.navigateForward(['/notas']);
  }

  cursos(){
    this.navCtrl.navigateForward(['/cursos']);
  }
}
