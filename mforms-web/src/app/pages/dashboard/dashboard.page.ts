import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data: any = [];
  role: any;
  userRole: any;
  gmRole: any;
  investigatorRole: any;
  managerRole: any;
  supervisorRole: any;

  constructor(
    private nav: NavController,
    private global: GlobalService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.userRole = this.global.user;
    this.gmRole = this.global.gm;
    this.investigatorRole = this.global.investigator;
    this.managerRole = this.global.manager;
    this.supervisorRole = this.global.supervisior
    this.role = localStorage.getItem("role");
    if (this.role == this.userRole) {
      this.data = ["Previous Form", "My Reports", "Notification"]
    } else if (this.role == this.gmRole) {
      this.data = ["Submitted Form", "My Reports", "Notification"]
    } else {
      this.data = ["Submitted Form", "My Reports", "Notification"]
    }
  }

  next() {
    this.nav.navigateForward("incident-type")
  }

  pendingForm() {
    this.nav.navigateForward("form-list")
  }

  navGo(item) {
    if (item === 'Previous Form' || item == 'Submitted Form') {
      this.nav.navigateForward("form-list");
    } else if ((localStorage.getItem("role") != this.userRole) && (item === 'Notification')) {
      this.nav.navigateForward("notification");
    }
  }

  goBack() {
    this.nav.back();
  }

  logOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

}
