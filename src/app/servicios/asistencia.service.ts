import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Asistencia } from '../model/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class CrudAsistenciaService {

  private asistenciaCollection = collection(this.firestore, 'asistencias');

  constructor(private firestore: Firestore) {}

  registrarAsistencia(asistencia: Asistencia): Promise<void> {
    return addDoc(this.asistenciaCollection, asistencia).then(() => {});
  }
  

  listarAsistencias(): Observable<Asistencia[]> {
    return collectionData(this.asistenciaCollection, { idField: 'id' }) as Observable<Asistencia[]>;
  }

  eliminarAsistencia(id: string): Promise<void> {
    const asistenciaDoc = doc(this.firestore, `asistencias/${id}`);
    return deleteDoc(asistenciaDoc);
  }

  modificarAsistencia(asistencia: Asistencia): Promise<void> {
    const asistenciaDoc = doc(this.firestore, `asistencias/${asistencia.id}`);
    return updateDoc(asistenciaDoc, { ...asistencia });
  }
}
