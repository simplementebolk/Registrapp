import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Asistencia } from 'src/app/model/Asistencia'; // Importa la interfaz Asistencia

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private firestore: AngularFirestore) { }

  guardarAsistencia(materiaId: string, alumnoId: string, asistencia: Asistencia): Promise<any> {
    const asistenciaRef = this.firestore.collection('asistencia').doc(materiaId).collection('alumnos').doc(alumnoId);
    return asistenciaRef.set({
      fecha: asistencia.fecha,
      presente: asistencia.presente
    }, { merge: true });
  }

  obtenerAsistencia(materiaId: string, alumnoId: string) {
    return this.firestore.collection('asistencia').doc(materiaId).collection('alumnos').doc(alumnoId).valueChanges();
  }
}
