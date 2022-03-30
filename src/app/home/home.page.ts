import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}
  async alertHello() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Alerta';
  alert.subHeader = 'Hello World';
  alert.message = 'Boton con IONIC';
  alert.buttons = ['OK'];
  document.body.appendChild(alert);
  await alert.present();
  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
  }
  async alertHello1() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Alerta 1';
  alert.subHeader = 'Hello World1';
  alert.message = 'Boton con IONIC 1';
  alert.buttons = ['OK'];
  document.body.appendChild(alert);
  await alert.present();
  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
  }
  async alertHello2() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alerta 2';
    alert.subHeader = 'Hello World2';
    alert.message = 'Boton con IONIC 2';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    }
}
