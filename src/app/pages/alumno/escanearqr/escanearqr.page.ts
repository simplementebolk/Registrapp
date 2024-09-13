import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  cancelar(){
    this.navCtrl.navigateForward(['/escanearqr']);
  }

}
