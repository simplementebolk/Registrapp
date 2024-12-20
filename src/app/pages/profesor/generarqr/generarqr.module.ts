import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarqrPageRoutingModule } from './generarqr-routing.module';

import { GenerarqrPage } from './generarqr.page';

import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    QrCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarqrPageRoutingModule
  ],
  declarations: [GenerarqrPage]
})
export class GenerarqrPageModule {}
