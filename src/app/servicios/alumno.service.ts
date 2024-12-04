import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Alumno } from '../model/Alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private afs: AngularFirestore) { }

  listarAlumnos() {
    return this.afs.collection<Alumno>('alumnos', ref => ref.where('tipo_usuario', '==', 'alumno'))
      .valueChanges();
  }  
  
  obtenerAlumnosPorCurso(cursoId: string): Observable<Alumno[]> {
    return this.afs.collection<Alumno>('alumnos', ref => ref.where('cursoId', '==', cursoId))
      .valueChanges();
  }

  obtenerAlumnoPorId(id: string) {
    return this.afs.collection<Alumno>('alumnos').doc(id).valueChanges();
  }
  
  agregarAlumno(alumno: Alumno): Promise<any> {
    return this.afs.collection('alumnos').add(alumno);
  }

  eliminarAlumno(id: string): Promise<void> {
    return this.afs.collection('alumnos').doc(id).delete();
  }
}
