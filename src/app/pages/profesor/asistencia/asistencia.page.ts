import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlumnoService } from 'src/app/servicios/alumno.service'; 
import { Alumno } from 'src/app/model/Alumno'; 
import { Asistencia } from 'src/app/model/Asistencia';
import { AngularFirestore } from '@angular/fire/compat/firestore';  // Importar AngularFirestore

export interface AsistenciaAlumno {
  alumno: Alumno;
  fecha: string;
  presente: boolean;
}

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencia: AsistenciaAlumno[] = [];
  cursoId: string = '';

  constructor(
    private navCtrl: NavController, 
    private alumnoService: AlumnoService,
    private firestore: AngularFirestore  // Inyectamos AngularFirestore
  ) { }

  ngOnInit(): void {
    const alumnosCurso = localStorage.getItem('alumnosCurso');
    this.cursoId = localStorage.getItem('cursoId') || '';

    if (alumnosCurso) {
      const alumnosIds = JSON.parse(alumnosCurso);

      this.alumnoService.listarAlumnos().subscribe((alumnosList: Alumno[]) => {
        this.asistencia = alumnosList.filter((alumno) => alumnosIds.includes(alumno.id)).map((alumno) => ({
          alumno: alumno,
          fecha: new Date().toLocaleDateString(),
          presente: false
        }));
      });
    }
  }

  generarqr() {
    this.navCtrl.navigateForward(['/generarqr', this.cursoId]);
  }

  // Modificar el método para guardar la asistencia en Firestore
  confirmarAsistencia() {
    this.asistencia.forEach(item => {
      const asistenciaData = {
        cursoId: this.cursoId,
        alumnoId: item.alumno.id,
        presente: item.presente,
        fecha: item.fecha,
      };

      // Guardar cada registro de asistencia en la colección 'asistencia'
      this.firestore.collection('asistencia').add(asistenciaData)
        .then(() => {
          console.log('Asistencia guardada:', asistenciaData);
        })
        .catch((error) => {
          console.error('Error al guardar asistencia: ', error);
        });
    });

    alert('Asistencia confirmada con éxito.');
    this.navCtrl.navigateForward(['/homeprofesor']);
  }
  
  volver() {
    this.navCtrl.navigateForward('/homeprofesor');
  }
}
