import { Persona } from './Persona';
import { Materia } from './Materia';

export interface Profesor extends Persona {
  tipo_usuario: 'profesor';
  materias?: Materia[];
}
