import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { NavController } from '@ionic/angular';
import { Materia } from 'src/app/model/Materia';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: Materia[] = [];

  constructor(
    private materiaService: MateriaService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const profesorId = localStorage.getItem('usuarioId');
    if (profesorId) {
      this.listarMaterias(profesorId);
    }
  }

  listarMaterias(profesorId: string) {
    this.materiaService.listarMaterias().subscribe((materias: Materia[]) => {
      this.cursos = materias.filter(materia => materia.profesor.id === profesorId);
    });
  }

  verDetallesCurso(curso: Materia) {
    localStorage.setItem('alumnosCurso', JSON.stringify(curso.alumnos));
    this.navCtrl.navigateForward('/asistencia');
  }

  volver() {
    this.navCtrl.navigateForward('/homeprofesor');
  }
}
