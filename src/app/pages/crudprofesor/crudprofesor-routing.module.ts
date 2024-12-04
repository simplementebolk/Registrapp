import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudprofesorPage } from './crudprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: CrudprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudprofesorPageRoutingModule {}
