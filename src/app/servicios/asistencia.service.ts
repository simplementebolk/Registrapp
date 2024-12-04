import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Asistencia } from '../model/Asistencia';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private afs: AngularFirestore) { }

  obtenerAsistenciasPorCursoYAlumno(cursoId: string, alumnoId: string): Observable<Asistencia[]> {
    return this.afs.collection<Asistencia>('asistencias', ref => 
      ref.where('materiaId', '==', cursoId)
         .where('alumnoId', '==', alumnoId)
         .orderBy('fecha', 'desc') 
    ).valueChanges();
  }

  registrarAsistencia(asistencia: Asistencia): Promise<void> {
    return this.afs.collection('asistencias').doc(asistencia.id).set(asistencia);
  }
}
