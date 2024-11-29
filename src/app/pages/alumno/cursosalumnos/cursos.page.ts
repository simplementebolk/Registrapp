import { Component, OnInit } from '@angular/core';

// Definimos las interfaces de Curso y Alumno
interface Curso {
  nombre: string;
  descripcion: string;
}

interface Alumno {
  nombre: string;
  cursos: Curso[];
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  todosLosCursos: Curso[] = [
    { nombre: 'Calidad de Software', descripcion: 'Curso sobre principios de calidad en el desarrollo de software.' },
    { nombre: 'Aplicaciones Móviles', descripcion: 'Curso sobre desarrollo de aplicaciones móviles para diferentes plataformas.' },
    { nombre: 'Arquitectura de Software', descripcion: 'Curso sobre diseño y arquitectura de sistemas de software.' },
    { nombre: 'Inglés Intermedio', descripcion: 'Curso de inglés para niveles intermedios con enfoque en habilidades comunicativas.' },
    { nombre: 'Estadística Descriptiva', descripcion: 'Curso sobre técnicas y métodos para el análisis descriptivo de datos.' }
  ];

  alumno: Alumno = {
    nombre: 'Juan Pérez',
    cursos: [
      { nombre: 'Calidad de Software', descripcion: 'Curso sobre principios de calidad en el desarrollo de software.' },
      { nombre: 'Estadística Descriptiva', descripcion: 'Curso sobre técnicas y métodos para el análisis descriptivo de datos.' }
    ]
  };

  cursosInscritos: Curso[] = [];

  constructor() { }

  ngOnInit() {
    this.cursosInscritos = this.alumno.cursos;
  }

}
