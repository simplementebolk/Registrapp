import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../servicios/materia.service';
import { Materia } from '../../model/Materia';
import { Alumno } from '../../model/Alumno';
import { AlumnoService } from '../../servicios/alumno.service';

@Component({
  selector: 'app-crudmateria',
  templateUrl: './crudmateria.page.html',
  styleUrls: ['./crudmateria.page.scss'],
})
export class CrudmateriaPage implements OnInit {

  materias: Materia[] = [];
  nuevaMateria: Materia = { id: '', nombre: '', profesor: { id: '', nombre: '', apellido: '', correo: '', tipo_usuario: 'profesor', materias: [] }, alumnos: [] };
  alumnos: Alumno[] = [];
  alumnoSeleccionado: Alumno | null = null;

  constructor(
    private materiaService: MateriaService,
    private alumnoService: AlumnoService
  ) { }

  ngOnInit() {
    this.cargarMaterias();
    this.cargarAlumnos();
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

  crearMateria() {
    this.materiaService.crearMateria(this.nuevaMateria)
      .then(() => {
        console.log('Materia creada');
        this.cargarMaterias();
      })
      .catch(err => console.error('Error al crear materia:', err));
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
    if (!alumnoId) {
      console.error('El alumno no tiene un ID válido.');
      return;
    }
  
    this.materiaService.eliminarAlumnoDeMateria(materiaId, alumnoId)
      .then(() => {
        console.log('Alumno eliminado de la materia');
        this.cargarMaterias();
      })
      .catch(err => console.error('Error al eliminar alumno:', err));
  }
  
}
