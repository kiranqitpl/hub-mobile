import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  async alertWithBack(message) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-message',
      header: 'Alert !',
      backdropDismiss: false,
      message: message,
      animated: true,
      buttons: [{
        text: 'Ok',
        role: 'Ok',
        handler: () => {
          this.navCtrl.back();
        }
      }]
    });
    await alert.present();
  }

  async alert(message) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-message',
      header: 'Alert !',
      backdropDismiss: false,
      message: message,
      animated: true,
      buttons: [{
        text: 'Ok',
        role: 'Ok',
        handler: () => { }
      }]
    });
    await alert.present();
  }

}
