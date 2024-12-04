import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudprofesorPageRoutingModule } from './crudprofesor-routing.module';

import { CrudprofesorPage } from './crudprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudprofesorPageRoutingModule
  ],
  declarations: [CrudprofesorPage]
})
export class CrudprofesorPageModule {}
