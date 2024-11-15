import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.page.html',
  styleUrls: ['./bitacora.page.scss'],
})
export class BitacoraPage implements OnInit {


  fecha: string;
  resumen: string;

  constructor() { }

  ngOnInit() {

    this.fecha = '';
    this.resumen = '';
  }


  guardarBitacora() {
    if (this.fecha && this.resumen) {
      console.log('Bitácora Guardada: ', { fecha: this.fecha, resumen: this.resumen });
      alert('Bitácora guardada con éxito.');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

}
