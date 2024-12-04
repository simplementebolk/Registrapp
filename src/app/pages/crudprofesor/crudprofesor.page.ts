import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfesorService } from '../../servicios/profesor.service';
import { Profesor } from '../../model/Profesor';


@Component({
  selector: 'app-crudprofesor',
  templateUrl: './crudprofesor.page.html',
  styleUrls: ['./crudprofesor.page.scss'],
})
export class CrudprofesorPage implements OnInit {

  profesores: Profesor[] = [];
  nuevoProfesor: Profesor = { id: '', nombre: '', apellido: '', correo: '', tipo_usuario: 'profesor' };

  constructor(private navCtrl: NavController,private profesorService: ProfesorService,) { }

  ngOnInit() {
    this.cargarProfesores();
  }

  cargarProfesores() {
    this.profesorService.listarProfesores().subscribe(profesores => {
      this.profesores = profesores;
    });
  }

  crearProfesor() {
    this.profesorService.crearProfesor(this.nuevoProfesor)
      .then(() => {
        console.log('Profesor creado');
        this.cargarProfesores();
      })
      .catch(err => console.error('Error al crear profesor:', err));
  }

  eliminarProfesor(id: string) {
    this.profesorService.eliminarProfesor(id)
      .then(() => {
        console.log('Profesor eliminado');
        this.cargarProfesores();
      })
      .catch(err => console.error('Error al eliminar profesor:', err));
  }

  volver() {
    this.navCtrl.navigateForward('/homeprofesor');
  }
}
