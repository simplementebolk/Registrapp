import { Alumno } from './Alumno'; 

export interface Asistencia {
  id: string;
  alumno: Alumno; 
  materiaId: string;
  fecha: string;
  presente: boolean;
}
