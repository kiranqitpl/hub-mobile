import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.page.html',
  styleUrls: ['./form-section.page.scss'],
})
export class FormSectionPage implements OnInit {
  data: any = []
  constructor(private nav: NavController, private global: GlobalService) {
    this.data = ["Admin", "Company", "Projects", "Workshops", "WHSE"]
  }
  ionViewWillEnter() {
    this.global.dismissLoading();
  }
  goBack() {
    this.nav.back();
  }

  ngOnInit() {
  }

  next(item){
    if(item=="WHSE"){
      this.nav.navigateForward("incident-type")
    }
  }

  
  

}
