import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Profesor } from '../model/Profesor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private coleccionProfesores = 'profesores';

  constructor(private firestore: AngularFirestore) { }

  listarProfesores(): Observable<Profesor[]> {
    return this.firestore.collection<Profesor>(this.coleccionProfesores).valueChanges();
  }

  crearProfesor(profesor: Profesor): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection<Profesor>(this.coleccionProfesores).doc(id).set({ ...profesor, id });
  }

  eliminarProfesor(id: string): Promise<void> {
    return this.firestore.collection<Profesor>(this.coleccionProfesores).doc(id).delete();
  }
}
