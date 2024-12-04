import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit() {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      
      const userDoc = this.firestore.collection<Persona>('users').doc(userCredential.user?.uid);
      userDoc.valueChanges().subscribe((user) => {
        if (user) {
          localStorage.setItem('usuarioId', userCredential.user?.uid ?? '');
          localStorage.setItem('nombre', user.nombre);
          localStorage.setItem('apellido', user.apellido);
          localStorage.setItem('tipo_usuario', user.tipo_usuario);
  
          if (user.tipo_usuario === 'profesor') {
            this.router.navigate(['/homeprofesor']);
          } else if (user.tipo_usuario === 'alumno') {
            this.router.navigate(['/home']);
          } else {
            this.presentAlert("Tipo de usuario no reconocido.");
          }
        } else {
          this.presentAlert("No se pudo encontrar el usuario.");
        }
      });
    } catch (error) {
      this.presentAlert("Nombre de usuario o contraseña incorrecto!");
    }
  }

  async presentAlert(p0: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrectos.',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
