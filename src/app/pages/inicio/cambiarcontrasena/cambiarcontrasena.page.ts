import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {
  passwordResetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth 
  ) {}

  ngOnInit() {
    this.passwordResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.passwordResetForm.get('email');
  }

  async onSubmit() {
    if (this.passwordResetForm.valid) {
      const email = this.passwordResetForm.value.email;
      await this.sendPasswordResetEmail(email);
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor ingresa un correo electrónico válido.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async sendPasswordResetEmail(email: string) {
    try {
  
      await this.afAuth.sendPasswordResetEmail(email);
      
      const alert = await this.alertCtrl.create({
        header: 'Correo Enviado',
        message: `Se ha enviado un enlace de recuperación a ${email}.`,
        buttons: ['OK'],
      });
      await alert.present();
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Ocurrió un error al intentar enviar el correo. Intente nuevamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  goBack() {
    this.navCtrl.navigateBack('/login');
  }
}
