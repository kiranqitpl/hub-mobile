import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any=[]
  constructor(private nav: NavController, private global:GlobalService) {
    this.data = ["Admin", "Company", "Projects", "Workshops","WHSE"]
  }
  ionViewWillEnter() {
    this.global.dismissLoading();
  }
  goBack() {
    this.nav.back();
  }
  next(item){
    if (item =="WHSE"){
      this.nav.navigateForward("dashboard")
    }
  }

  logout(){
    localStorage.clear();
    this.nav.navigateRoot("login")
  }
}
