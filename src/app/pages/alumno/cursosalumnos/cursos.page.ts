import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from 'src/app/model/Materia';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  isModalOpen = false;
  cursoSeleccionado: Materia | null = null;
  cursos: Materia[] = [];

  constructor(private materiaService: MateriaService, private navCtrl:NavController) { }

  ngOnInit() {
    const alumnoId = localStorage.getItem('usuarioId'); 
    if (alumnoId) {
      this.listarCursosDelAlumno(alumnoId); 
    }
  }

  listarCursosDelAlumno(alumnoId: string) {
    this.materiaService.obtenerCursosDelAlumno(alumnoId).subscribe((materias: Materia[]) => {
      this.cursos = materias;
    });
  }
  

  verDetallesCurso(curso: Materia) {
    this.cursoSeleccionado = curso;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
  }

  volver() {
    this.navCtrl.navigateBack('/home');
  } 
}
