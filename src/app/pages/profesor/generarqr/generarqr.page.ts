import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  tiempoRestante: number = 10;
  timerInterval: any; 
  qrGenerado: boolean = false; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    this.qrGenerado = true;
    this.timerInterval = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(this.timerInterval);
        this.qrGenerado = false;
        this.redirigirAlHomeProfesor();
      }
    }, 1000);
  }

  redirigirAlHomeProfesor() {
    this.navCtrl.navigateForward('/homeprofesor'); 
  }

  cancelar() {
    clearInterval(this.timerInterval); 
    this.navCtrl.navigateForward(['/homeprofesor']); 
  }
}
