import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlumnoService } from 'src/app/servicios/alumno.service'; // Importa el servicio de alumnos
import { Alumno } from 'src/app/model/Alumno'; // Asegúrate de importar el modelo Alumno
import { Asistencia } from 'src/app/model/Asistencia';// Importa el modelo de Asistencia

// Creamos una nueva interfaz que combine la información de un Alumno con la Asistencia
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

  constructor(private navCtrl: NavController, private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    // Obtener los IDs de los alumnos desde localStorage
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

  confirmarAsistencia() {
    console.log('Asistencia confirmada: ', this.asistencia);
    alert('Asistencia confirmada con éxito.');
    this.navCtrl.navigateForward(['/homeprofesor']);
  }
  
  volver() {
    this.navCtrl.navigateForward('/homeprofesor');
  }
}