import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from 'src/app/model/Materia';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  isModalOpen = false; // Controla si el modal está abierto o cerrado
  cursoSeleccionado: Materia | null = null; // Almacena el curso seleccionado para mostrar los detalles
  cursos: Materia[] = [];  // Lista de cursos

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.listarMaterias();
  }

  // Listar todas las materias
  listarMaterias() {
    this.materiaService.listarMaterias().subscribe((materias: Materia[]) => {
      this.cursos = materias;
    });
  }

  // Ver detalles del curso seleccionado
  verDetallesCurso(curso: Materia) {
    this.cursoSeleccionado = curso; // Asigna el curso seleccionado al modal
    this.isModalOpen = true; // Abre el modal
  }

  // Cerrar el modal
  cerrarModal() {
    this.isModalOpen = false; // Cierra el modal
  }
}
