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
      
      // Obtén el documento del usuario desde Firestore
      const userDoc = this.firestore.collection<Persona>('users').doc(userCredential.user?.uid);
      userDoc.valueChanges().subscribe((user) => {
        if (user) {
          // Guarda el nombre de usuario en localStorage
          localStorage.setItem('usuario', user.nombre);
  
          // Redirige según el tipo de usuario
          if (user.tipo_usuario === 'profesor') {
            this.router.navigate(['/homeprofesor']);
          } else if (user.tipo_usuario === 'alumno') {
            this.router.navigate(['/home']);
          } else {
            alert("Tipo de usuario no reconocido.");
          }
        }
      });
    } catch (error) {
      alert("Nombre de usuario o contraseña incorrecto!")
    }
  }
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrectos.',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
