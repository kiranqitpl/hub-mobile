import { GlobalService } from '../../services/global-service/global.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-type',
  templateUrl: './incident-type.page.html',
  styleUrls: ['./incident-type.page.scss'],
})

export class IncidentTypePage implements OnInit {

  data: any = []

  constructor(private nav: NavController, private global: GlobalService) {
    this.data = ["Actual", "Near Miss", "Serious potential incident (SPI)"];
  }
  
  ionViewWillEnter() {
  }

  goBack() {
    this.nav.back();
  }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

  next(item) {
    localStorage.setItem("incidentType",item);
    this.nav.navigateForward("add-form")
  }
}
