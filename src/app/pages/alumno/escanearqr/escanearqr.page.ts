import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {
  isScanning: boolean = false; 

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  async iniciarEscaneo() {
    try {
      const permiso = await BarcodeScanner.checkPermission({ force: true });
      if (!permiso.granted) {
        alert('Se necesita acceso a la cámara para escanear el código QR.');
        return;
      }

      this.isScanning = true;
      document.body.style.background = 'transparent'; 
      const resultado = await BarcodeScanner.startScan();

      this.isScanning = false; 
      document.body.style.background = ''; 

      if (resultado.hasContent) {
        console.log('Contenido del QR:', resultado.content);
        alert(`Código QR escaneado: ${resultado.content}`);
      }
    } catch (error) {
      console.error('Error al escanear:', error);
      alert('No se pudo escanear el código QR.');
      this.isScanning = false;
      document.body.style.background = ''; 
    }
  }

  detenerEscaneo() {
    BarcodeScanner.stopScan();
    this.isScanning = false;
    document.body.style.background = '';
  }

  cancelar() {
    this.navCtrl.navigateForward(['/home']);
  }

  volver() {
    this.navCtrl.navigateBack('/home');
  } 
}
