import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { CambiarcontrasenaPageRoutingModule } from './cambiarcontrasena-routing.module';
import { CambiarcontrasenaPage } from './cambiarcontrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    CambiarcontrasenaPageRoutingModule
  ],
  declarations: [CambiarcontrasenaPage]
})
export class CambiarcontrasenaPageModule {}
