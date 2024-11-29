import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CrudasistenciaPageRoutingModule } from './crudasistencia-routing.module';
import { CrudasistenciaPage } from './crudasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudasistenciaPageRoutingModule,
  ],
  declarations: [CrudasistenciaPage],
})
export class CrudasistenciaPageModule {}