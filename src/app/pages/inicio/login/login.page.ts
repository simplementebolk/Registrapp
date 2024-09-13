import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController, 
    private navCtrl: NavController
  ) { }

  nombre:string=''
  password:string=''

  ngOnInit() {
  }

  validar(){
    if (this.nombre=="juanito" && this.password=="123") {
      localStorage.setItem("usuario", this.nombre)
      this.navCtrl.navigateForward(['/home'])
    } else if (this.nombre === 'profesor' && this.password === 'profesor') {
      localStorage.setItem('usuario', this.nombre);
      this.navCtrl.navigateForward(['/homeprofesor']);
    } else {
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!!',
      subHeader: '',
      message: 'Usuario o contraseña incorrecto',
      buttons: ['Aceptar'],
    });
    
    await alert.present();
  }

}