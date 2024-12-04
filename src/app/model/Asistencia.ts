import { Alumno } from './Alumno';

export interface Asistencia {
  alumno: Alumno;
  fecha: string;
  presente: boolean;
}
