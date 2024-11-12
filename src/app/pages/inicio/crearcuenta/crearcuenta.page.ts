import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage {

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  tipo_usuario: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private alertController: AlertController
  ) {}

  async registerUser() {
    try {
      // Registrar usuario con Firebase Authentication
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      const uid = userCredential.user?.uid;

      // Crear el objeto del usuario
      const userData: Persona = {
        id: uid,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.email,
        tipo_usuario: this.tipo_usuario,
      };

      // Guardar el usuario en Firestore
      await this.firestore.collection('users').doc(uid).set(userData);

      // Mostrar mensaje de éxito
      this.presentAlert('Registro exitoso', 'Usuario creado correctamente.');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      this.presentAlert('Error', 'No se pudo crear el usuario.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
