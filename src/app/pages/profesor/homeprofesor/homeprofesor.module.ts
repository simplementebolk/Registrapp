import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeprofesorPageRoutingModule } from './homeprofesor-routing.module';

import { HomeprofesorPage } from './homeprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeprofesorPageRoutingModule
  ],
  declarations: [HomeprofesorPage]
})
export class HomeprofesorPageModule {}
