import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudasistenciaPage } from './crudasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: CrudasistenciaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudasistenciaPageRoutingModule {}
