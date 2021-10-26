import { AlertController, NavController, Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private nav: NavController,
    private platform: Platform,
    public alertController: AlertController,
    private _location: Location,
  ) {
    let token = localStorage.getItem("email") ? localStorage.getItem("email") : '';
    if (token == '') {
      nav.navigateRoot("login");
    } else {
      nav.navigateRoot("home");
      // nav.navigateRoot("dashboard");
    }
    this.initializeApp();
  }

  initializeApp() {

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      if (this._location.isCurrentPathEqualTo('/login')) {
        this.showExitConfirm();
        processNextHandler();
      } else {
        this._location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      this.alertController.getTop().then(res => {
        if (res) {
          navigator['app'].exitApp();
        }
      }).catch(err => {
        console.log(err);
      })
    });
    
  }

  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        cssClass: "alertBtn",
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        cssClass: "alertBtn",
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
}
