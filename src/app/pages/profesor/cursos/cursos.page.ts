import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

 
  isModalOpen = false;


  cursoSeleccionado: any = null;

  cursos = [
    {
      nombre: 'programacion de algoritmos',
      descripcion: 'Curso completo de programacion de algoritmos.',
      secciones: [
        { nombre: 'Sección PGY-122', dia: 'Lunes', aula: '101' },
        { nombre: 'Sección PGY-512', dia: 'Miércoles', aula: '102' }
      ]
    },
    {
      nombre: 'programacion web',
      descripcion: 'programacion orientada a paginas web.',
      secciones: [
        { nombre: 'Sección A', dia: 'Martes', aula: '201' },
        { nombre: 'Sección B', dia: 'Jueves', aula: '202' }
      ]
    },

  ];

  constructor() { }

  ngOnInit() {}


  verDetallesCurso(nombreCurso: string) {
    this.cursoSeleccionado = this.cursos.find(curso => curso.nombre === nombreCurso);
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
  }

}
