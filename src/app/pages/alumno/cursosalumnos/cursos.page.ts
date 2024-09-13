import { Component, OnInit } from '@angular/core';

interface Curso {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: Curso[] = [
    { nombre: 'Calidad de Software', descripcion: 'Curso sobre principios de calidad en el desarrollo de software.' },
    { nombre: 'Aplicaciones Móviles', descripcion: 'Curso sobre desarrollo de aplicaciones móviles para diferentes plataformas.' },
    { nombre: 'Arquitectura de Software', descripcion: 'Curso sobre diseño y arquitectura de sistemas de software.' },
    { nombre: 'Inglés Intermedio', descripcion: 'Curso de inglés para niveles intermedios con enfoque en habilidades comunicativas.' },
    { nombre: 'Estadística Descriptiva', descripcion: 'Curso sobre técnicas y métodos para el análisis descriptivo de datos.' }
  ];

  constructor() { }

  ngOnInit() { }

}
