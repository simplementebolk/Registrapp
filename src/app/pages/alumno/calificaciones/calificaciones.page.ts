import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Calificacion {
  evaluacion1: number;
  evaluacion2: number;
  evaluacion3: number;
  examen: number;
}

interface Calificaciones {
  [key: string]: Calificacion;
}

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

  calificaciones: Calificaciones = {
    calidadSoftware: {
      evaluacion1: 5.5,
      evaluacion2: 6.0,
      evaluacion3: 4.5,
      examen: 5.0,
    },
    aplicacionesMoviles: {
      evaluacion1: 6.0,
      evaluacion2: 5.5,
      evaluacion3: 6.0,
      examen: 6.5,
    },
    arquitectura: {
      evaluacion1: 5.0,
      evaluacion2: 4.0,
      evaluacion3: 5.5,
      examen: 5.5,
    },
    inglesIntermedio: {
      evaluacion1: 6.5,
      evaluacion2: 6.0,
      evaluacion3: 6.0,
      examen: 6.5,
    },
    estadisticaDescriptiva: {
      evaluacion1: 5.0,
      evaluacion2: 4.5,
      evaluacion3: 5.0,
      examen: 5.5,
    }
  };

  constructor(private navCtrl:NavController) { }

  ngOnInit() { }

  redondear(valor: number): number {
    return parseFloat(valor.toFixed(1));
  }

  promedioPresentacion(asignatura: string): number {
    const evals = this.calificaciones[asignatura];
    if (!evals) return 0;
    const { evaluacion1, evaluacion2, evaluacion3 } = evals;
    const promedio = (evaluacion1 + evaluacion2 + evaluacion3) / 3;
    return this.redondear(promedio);
  }

  promedioFinal(asignatura: string): number {
    const evals = this.calificaciones[asignatura];
    if (!evals) return 0;
    const { evaluacion1, evaluacion2, evaluacion3, examen } = evals;
    const promedioPresentacion = (evaluacion1 + evaluacion2 + evaluacion3) / 3;
    const promedioFinal = (promedioPresentacion * 0.6) + (examen * 0.4);
    return this.redondear(promedioFinal);
  }

  volver() {
    this.navCtrl.navigateBack('/home');
  } 
}