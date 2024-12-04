import { Persona } from './Persona';
import { Materia } from './Materia';

export interface Alumno extends Persona {
  tipo_usuario: 'alumno';
  materias: Materia[]; 
}
