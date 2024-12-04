import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../servicios/materia.service';
import { Materia } from '../../model/Materia';
import { Alumno } from '../../model/Alumno';
import { AlumnoService } from '../../servicios/alumno.service';
import { ProfesorService } from '../../servicios/profesor.service';
import { Profesor } from 'src/app/model/Profesor';

@Component({
  selector: 'app-crudmateria',
  templateUrl: './crudmateria.page.html',
  styleUrls: ['./crudmateria.page.scss'],
})
export class CrudmateriaPage implements OnInit {

  materias: Materia[] = [];
  nuevaMateria: Materia = { id: '', nombre: '', profesor: { id: '', nombre: '', apellido: '', correo: '', tipo_usuario: 'profesor', materias: [] }, alumnos: [] };
  alumnos: Alumno[] = [];
  profesores: Profesor[] = [];
  alumnoSeleccionado: Alumno | null = null;
  profesorSeleccionado: Profesor | null = null; 

  constructor(
    private materiaService: MateriaService,
    private alumnoService: AlumnoService,
    private profesorService: ProfesorService,
  ) { }

  ngOnInit() {
    this.cargarMaterias();
    this.cargarAlumnos();
    this.cargarProfesores();
  }

  cargarMaterias() {
    this.materiaService.listarMaterias().subscribe(materias => {
      this.materias = materias;
    });
  }

  cargarAlumnos() {
    this.alumnoService.listarAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;
    });
  }

  cargarProfesores() {
    this.profesorService.listarProfesores().subscribe(profesores => {
      this.profesores = profesores;
    });
  }

  crearMateria() {
    if (this.profesorSeleccionado) {
      this.nuevaMateria.profesor = this.profesorSeleccionado;
      this.materiaService.crearMateria(this.nuevaMateria)
        .then(() => {
          console.log('Materia creada');
          this.cargarMaterias();
        })
        .catch(err => console.error('Error al crear materia:', err));
    } else {
      console.error('Profesor no seleccionado');
    }
  }

  eliminarMateria(id: string) {
    this.materiaService.eliminarMateria(id)
      .then(() => {
        console.log('Materia eliminada');
        this.cargarMaterias();
      })
      .catch(err => console.error('Error al eliminar materia:', err));
  }

  agregarAlumnoAMateria(materiaId: string) {
    if (this.alumnoSeleccionado && this.alumnoSeleccionado.id) {
      this.materiaService.agregarAlumnoAMateria(materiaId, this.alumnoSeleccionado.id)
        .then(() => {
          console.log('Alumno agregado a la materia');
          this.cargarMaterias();
        })
        .catch(err => console.error('Error al agregar alumno:', err));
      this.alumnoSeleccionado = null;
    } else {
      console.error('Alumno no seleccionado o sin ID válido');
    }
  }

  eliminarAlumnoDeMateria(materiaId: string, alumnoId: string) {
    this.materiaService.eliminarAlumnoDeMateria(materiaId, alumnoId)
      .then(() => {
        console.log('Alumno eliminado de la materia');
        this.cargarMaterias();
      })
      .catch(err => console.error('Error al eliminar alumno:', err));
  }
}
