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

  async presentAlert(message) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert',
      header: 'Alert Message',
      backdropDismiss: false,
      message: message,
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

}
