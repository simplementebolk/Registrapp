import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudmateriaPageRoutingModule } from './crudmateria-routing.module';

import { CrudmateriaPage } from './crudmateria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudmateriaPageRoutingModule
  ],
  declarations: [CrudmateriaPage]
})
export class CrudmateriaPageModule {}
