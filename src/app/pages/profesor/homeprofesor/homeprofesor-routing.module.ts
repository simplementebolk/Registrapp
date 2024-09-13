import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeprofesorPage } from './homeprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeprofesorPageRoutingModule {}
