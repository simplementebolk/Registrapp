import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/inicio/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cambiarcontrasena',
    loadChildren: () => import('./pages/inicio/cambiarcontrasena/cambiarcontrasena.module').then( m => m.CambiarcontrasenaPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./pages/inicio/crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/inicio/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/profesor/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./pages/profesor/generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'homeprofesor',
    loadChildren: () => import('./pages/profesor/homeprofesor/homeprofesor.module').then( m => m.HomeprofesorPageModule)
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./pages/alumno/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/alumno/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./pages/alumno/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'cursosalumnos',
    loadChildren: () => import('./pages/alumno/cursosalumnos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'asistenciaalumno',
    loadChildren: () => import('./pages/alumno/asistenciaalumno/asistenciaalumno.module').then( m => m.AsistenciaalumnoPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/profesor/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'bitacora',
    loadChildren: () => import('./pages/profesor/bitacora/bitacora.module').then( m => m.BitacoraPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/profesor/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'crudpersona',
    loadChildren: () => import('./pages/crudpersona/crudpersona.module').then( m => m.CrudpersonaPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
