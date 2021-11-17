import { AlertController, NavController, Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from './services/global-service/global.service';


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
    private globalService: GlobalService
  ) {
    let userDetails = JSON.parse(localStorage.getItem('userDetails'));
    let token = userDetails && userDetails.email ? userDetails.email : '';
    if (token == '') {
      this.nav.navigateRoot("login");
    } else {
      this.nav.navigateRoot("dashboard");
    }
    this.initializeApp();
  }

  initializeApp() {
    document.body.setAttribute('color-theme', 'dark');
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
