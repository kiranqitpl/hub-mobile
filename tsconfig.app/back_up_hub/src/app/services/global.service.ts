import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {  
  baseUrl: string ='https://mforms-api-devel.horts.com.au/';

  //https://mforms-api-devel.horts.com.au/

  //Role 
  user:any="31";
  gm:any="32";
  investigator:any="33";
  manager:any="34";
  supervisior:any="35";
  constructor(public toastController: ToastController, public http: HttpClient, public loadingController: LoadingController) { }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      mode:"ios",
      color:"dark"
    });
    toast.present();
  }

  getData(url){
    let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });    
    header.set("Access-Control-Allow-Origin", "*");
    header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    header.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")    
    return this.http.get(this.baseUrl+url,{headers:header});
  }

  postData(url,data){
    let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
    header.set("Access-Control-Allow-Origin","*");
    header.set("Content-Type","application/json");
    header.set("Access-Control-Allow-Headers","*")
    header.set("Access-Control-Allow-Methods","DELETE, POST, GET, OPTIONS");
    header.append("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    return this.http.post(this.baseUrl+url,data,{headers:header});
  }

  getDataWithId(url){
    let header = new HttpHeaders();
    header.set("token",localStorage.getItem("token"));
    header.set("apikey","as*37486a*()HGY")
    return this.http.get(this.baseUrl + url,{headers:header});
  }

  postDataWithId(url,data){
    let header = new HttpHeaders();
    header.set("token", localStorage.getItem("token"));
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await loading.present();
  }

  async dismissLoading(){
  await this.loadingController.dismiss();
  }
}
