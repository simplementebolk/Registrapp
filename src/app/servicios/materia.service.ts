import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Materia } from '../model/Materia';
import { Alumno } from '../model/Alumno';
import { Profesor } from '../model/Profesor';
import { arrayUnion, arrayRemove, FieldValue } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private afs: AngularFirestore) { }

  crearMateria(materia: Materia): Promise<any> {
    return this.afs.collection('materias').add(materia);
  }

  listarMaterias() {
    return this.afs.collection<Materia>('materias').valueChanges({ idField: 'id' });
  }

  obtenerMateriaPorId(id: string) {
    return this.afs.collection('materias').doc<Materia>(id).valueChanges();
  }

  modificarMateria(materia: Materia): Promise<void> {
    return this.afs.collection('materias').doc(materia.id).update(materia);
  }

  eliminarMateria(id: string): Promise<void> {
    return this.afs.collection('materias').doc(id).delete();
  }

  agregarAlumnoAMateria(materiaId: string, alumnoId: string): Promise<void> {
    const materiaRef = this.afs.collection('materias').doc(materiaId);
    return materiaRef.update({
      alumnos: arrayUnion(alumnoId),
    });
  }
  
  eliminarAlumnoDeMateria(materiaId: string, alumnoId: string): Promise<void> {
    const materiaRef = this.afs.collection('materias').doc(materiaId);
    return materiaRef.update({
      alumnos: arrayRemove(alumnoId),
    });
  }
  
  obtenerCursosDelAlumno(alumnoId: string) {
    return this.afs.collection('materias', ref => ref.where('alumnos', 'array-contains', alumnoId)).valueChanges();
  }

}