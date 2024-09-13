import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  
  cancelar(){
    this.navCtrl.navigateForward(['/homeprofesor']);
  }
    
}

