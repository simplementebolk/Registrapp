import { Persona } from './Persona';

export interface Profesor extends Persona {
  curso: string;
}

export function asignarAsignaturaAProfesor(profesor: Profesor, asignaturaId: string): Profesor {
  profesor.curso = asignaturaId;
  return profesor;
}

export function verificarAsignaturaAsignada(profesor: Profesor, asignaturaId: string): boolean {
  return profesor.curso === asignaturaId;
}
export interface Profesor {
   id?: string;
   nombre: string;
   apellido: string;
   email: string;
   contrasenia: string;
   contrasenia2: string;
   asignatura: string; 
}



export function asignarMateriaAProfesor(
  profesor: Profesor,
  asignaturaId: string
): Profesor {
  profesor.asignatura = asignaturaId;
  return profesor;
}