import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  generarqr(){
    this.navCtrl.navigateForward(['/generarqr']);
  }
  
}
