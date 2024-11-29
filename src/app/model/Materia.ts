import { Profesor } from './Profesor';
import { Alumno } from './Alumno';

export interface Materia {
  id: string;
  nombre: string;
  profesor: Profesor;
  alumnos: Alumno[];
}