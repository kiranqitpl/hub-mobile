import { LoadingController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, Observer, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  baseUrl: string = 'https://mforms-api-devel.horts.com.au/api/';

  formType_user = 1;
  formType_investigator = 2;
  platform: String = '';

  constructor(
    public toastController: ToastController,
    public httpClient: HttpClient,
    public http: HTTP,
    public loadingController: LoadingController
  ) { }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      mode: "ios",
      color: "dark"
    });
    toast.present();
  }

  async toast(msg, type) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      // mode: "ios",
      color: type,
      animated: true,
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await loading.present();
  }

  async dismissLoading() {
    await this.loadingController.dismiss();
  }

  setHeader() {
    let header = new HttpHeaders()
      .set('apikey', 'as*37486a*()HGY')
      .set('Access-Control-Allow-Origin', '*')
      // .set('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
      // .set('Access-Control-Allow-Methods', '*')
      // .set('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS')
      // .set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')

      .set('token', localStorage.getItem('token') && localStorage.getItem('token') != "" ? localStorage.getItem('token') : '')
    return header;
  }

  // --------------------------------------------------New Services ---------------------------------------------//

  postData(url, data) {
    let headers = this.setHeader();
    return this.httpClient.post(this.baseUrl + url, data, { headers: headers });
  }

  getData(url) {
    let headers = this.setHeader();
    return this.httpClient.get(this.baseUrl + url, { headers: headers })

    // return this.httpClient.get(this.baseUrl + url, { headers: headers }).pipe(
    //   map((response) => {
    //     console.log('response', response);
    //     // if (!response['status']) {
    //     //   throw new Error('Value expected!');
    //     // }
    //     response;
    //   }),
    //   catchError(() => of())
    // );
    
  }
}
// ---------------------------------------------  New Services --------------------------------------------------//