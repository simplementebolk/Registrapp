export interface Alumno {
  id?: string;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  password2: string;
  asistencia: number;
  asignaturas: Asignatura[];
}

export interface Asignatura {
  nombre: string;
  correo_profe: string;
  totalClases: number;
}