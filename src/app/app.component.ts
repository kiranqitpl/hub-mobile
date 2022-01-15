import { AlertController, NavController, Platform } from '@ionic/angular';
import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { environment } from 'src/environments/environment';

@HostListener('window:resize', ['$event'])

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
    private globalService: GlobalService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // if (window.location.href == 'https://mforms-devel.horts.com.au/user-profile/superannuation-choice?frame=true') {
    //   this.globalService.frame.next(true);
    // }

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    if (token == '') {
      this.nav.navigateRoot("login");
    // } else {
    //   this.nav.navigateRoot("dashboard");
    }

    if (this.platform.is('cordova')) {
      this.globalService.platform = 'cordova'
      // } else if (this.platform.is('android')) {
      //   this.globalService.platform = 'android'
    } else {
      this.globalService.platform = 'browser'
    }

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

    let urlFull = window.location.href;
    let url = urlFull.split('/');
    if (url[2] == 'mforms-qa.horts.com.au') {
      this.globalService.url.next(environment.QA_API_URL);
    } else {
      console.log('dev/live', environment.API_URL);
      this.globalService.url.next(environment.API_URL);
    }
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
