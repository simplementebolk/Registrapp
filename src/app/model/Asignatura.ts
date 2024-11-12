import { Alumno } from './Alumno';


export interface Asignatura {
    id?: string;
    nombre: string;
    profesor: string;
    totalClases: number;
    alumnos: Alumno[];

}