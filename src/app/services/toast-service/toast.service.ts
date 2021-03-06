import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastController: ToastController,
  ) { }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      // mode: "ios",
      color: "dark"
    });
    toast.present();
  }

  async toast(msg, type) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: type,
      animated: true,
    });
    toast.present();
  }
}
