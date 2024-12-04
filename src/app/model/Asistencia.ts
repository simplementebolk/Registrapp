import { Alumno } from './Alumno';  // Asegúrate de que el modelo Alumno esté importado correctamente.

export interface Asistencia {
  id: string;
  alumno: Alumno;  // Ahora almacenamos el objeto Alumno completo
  materiaId: string;
  fecha: string;  // Se usa un string para representar la fecha (puedes usar Date si prefieres)
  presente: boolean;
}
