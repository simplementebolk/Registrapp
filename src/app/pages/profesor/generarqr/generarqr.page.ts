import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  cursoId: string = '';  
  qrValue: string = '';
  cursoNombre: string = '';  

  constructor(
    private activatedRoute: ActivatedRoute, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cursoId = this.activatedRoute.snapshot.paramMap.get('cursoId') || '';  

    this.cursoNombre = this.activatedRoute.snapshot.paramMap.get('cursoNombre') || '';
    this.qrValue = `Curso ID: ${this.cursoId}`;

    console.log('Curso ID:', this.cursoId);
    console.log('Curso Nombre:', this.cursoNombre);
  }

  volver() {
    this.navCtrl.navigateBack('/asistencia'); 
  }
}
