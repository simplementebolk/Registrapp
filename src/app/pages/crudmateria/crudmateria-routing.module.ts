import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudmateriaPage } from './crudmateria.page';

const routes: Routes = [
  {
    path: '',
    component: CrudmateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudmateriaPageRoutingModule {}
