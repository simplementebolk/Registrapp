import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {


  evaluaciones: string[] = ['Evaluación 1', 'Evaluación 2', 'Evaluación 3'];


  evaluacionSeleccionada: string = this.evaluaciones[0];


  alumnos: { nombre: string, notas: { [key: string]: number | null } }[] = [
    { nombre: 'Juan Caceres', notas: { 'Evaluación 1': null, 'Evaluación 2': null, 'Evaluación 3': null } },
    { nombre: 'Ana Torres', notas: { 'Evaluación 1': null, 'Evaluación 2': null, 'Evaluación 3': null } },
    { nombre: 'Luis Pérez', notas: { 'Evaluación 1': null, 'Evaluación 2': null, 'Evaluación 3': null } },
    { nombre: 'Carla Méndez', notas: { 'Evaluación 1': null, 'Evaluación 2': null, 'Evaluación 3': null } },
    { nombre: 'Pedro Jiménez', notas: { 'Evaluación 1': null, 'Evaluación 2': null, 'Evaluación 3': null } },
    { nombre: 'Lucía Rodríguez', notas: { 'Evaluación 1': null, 'Evaluación 2': null, 'Evaluación 3': null } },
    { nombre: 'Carlos Hernández', notas: { 'Evaluación 1': null, 'Evaluación 2': null, 'Evaluación 3': null } },
  ];

  constructor(private navCtrl:NavController) { }

  ngOnInit() {}


  esNotaValida(nota: number): boolean {
    return !isNaN(nota) && nota >= 1 && nota <= 7;
  }


  sonNotasCompletasYValidas(): boolean {
    return this.alumnos.every(alumno => {
      const nota = alumno.notas[this.evaluacionSeleccionada];
      return nota !== null && this.esNotaValida(nota);
    });
  }


  isFormInvalid(): boolean {
    return !this.sonNotasCompletasYValidas();
  }


  guardarNotas() {
    if (this.sonNotasCompletasYValidas()) {
      console.log('Notas guardadas:', this.alumnos);
      alert('Notas guardadas con éxito para la ' + this.evaluacionSeleccionada);
    } else {
      alert('Por favor, ingrese notas válidas para todos los alumnos antes de guardar.');
    }
  }

  seleccionarEvaluacion(evaluacion: string) {
    this.evaluacionSeleccionada = evaluacion;
  }

  volver() {
    this.navCtrl.navigateForward('/homeprofesor');
  }
}
