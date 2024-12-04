import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/model/Persona';
import { Alumno } from 'src/app/model/Alumno';
import { Profesor } from 'src/app/model/Profesor';

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
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      const uid = userCredential.user?.uid;

      const userData: Persona = {
        id: uid,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.email,
        tipo_usuario: this.tipo_usuario,
      };

      await this.firestore.collection('users').doc(uid).set(userData);

      if (this.tipo_usuario === 'profesor') {
        const profesorData: Profesor = {
          ...userData,
          tipo_usuario: 'profesor',
          materias: []
        };
        await this.firestore.collection('profesores').doc(uid).set(profesorData);
      } else if (this.tipo_usuario === 'alumno') {
        const alumnoData: Alumno = {
          ...userData,
          tipo_usuario: 'alumno',
          materias: []
        };
        await this.firestore.collection('alumnos').doc(uid).set(alumnoData);
      }

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
