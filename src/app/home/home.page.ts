
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  data = ["Admin", "Company", "Projects", "Workshops", "Safety"];
  pageName: string;

  constructor(
    private nav: NavController,
    private globalService: GlobalService
  ) { }

  ionViewWillEnter() { }

  goBack() {
    this.nav.back();
  }

  next(item) {
    if (item == "Safety") {
      // if (localStorage.getItem('role') != this.globalService.gm) {
      //   this.nav.navigateForward("safety-menu");
      // } else {
        this.nav.navigateForward("dashboard")
      // }
    }
  }

  logout() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

  ngOnInit() {
    // this.getRout()
  }

  // getRout() {
  //   console.log('activatedRoute', this.activatedRoute);
  //   console.log('activatedRoute', this.activatedRoute['_routerState'].snapshot.url);
  //   let rout = this.activatedRoute['_routerState'].snapshot.url;
  //   console.log('rout', rout.split("/"));
  //   this.pageName = rout.split("/")['1'];
  //   console.log('this.pageName', this.pageName);
  // }
}
