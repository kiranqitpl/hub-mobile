import { LoadingController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl: string = 'https://mforms-api-devel.horts.com.au/';
  // https://mforms-api-devel.horts.com.au/

  baseUrl1: string = 'https://mforms-api-devel.horts.com.au/api/';

  //Role 
  user: any = "31";
  gm: any = "32";
  investigator: any = "33";
  manager: any = "34";
  supervisior: any = "35";
  formType_user = 1;
  formType_investigator = 2;

  constructor(
    public toastController: ToastController,
    public http: HttpClient,
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
    let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
    header.set("Access-Control-Allow-Origin", "*");
    header.set("Content-Type", "application/json");
    header.set("Access-Control-Allow-Headers", "*")
    header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    header.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if (localStorage.getItem("token") && localStorage.getItem("token") != "") {
      header.set("token", localStorage.getItem("token"));
    }
    return header;
  }


  // setHeaders() {
  //   let token = ""
  //   if (localStorage.getItem("token") && localStorage.getItem("token") != "") {
  //     token = localStorage.getItem("token")
     
  //   }
  //   let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' })
  //     .set("Access-Control-Allow-Origin", "*")
  //     // .set("Content-Type", "application/json")
  //     .set("Access-Control-Allow-Headers", "*")
  //     .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  //     .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
  //     .set("token", token)

  //   return header;
  // }

  getData(url) {
    let headers = this.setHeader();
    return this.http.get(this.baseUrl + url, { headers: headers });
  }

  postData(url, data) {
    let headers = this.setHeader();

    return this.http.post(this.baseUrl + url, data, { headers: headers });
  }

  postDataWithId(url, data) {
    let headers = this.setHeader();
    return this.http.post(this.baseUrl + url, data, { headers: headers });
  }

  getDataWithId(url) {
    let headers = this.setHeader();
    return this.http.get(this.baseUrl + url, { headers: headers });
  }





  postData1(url, data) {
    let headers = this.setHeader();
    return this.http.post(this.baseUrl1 + url, data, { headers: headers });
  }

  getData1(url) {
    let headers = this.setHeader();
    return this.http.get(this.baseUrl1 + url, { headers: headers });


    // return this.http.get(this.baseUrl1 + url, { headers: headers }).pipe(
    //   map((response) => {
    //     console.log('response', response);
    //     if (!response['status']) {
    //       throw new Error('Value expected!');
    //     }
    //     response;
    //   }),
    //   catchError(() => of())
    // );
  }
}




