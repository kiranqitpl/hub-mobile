import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  data = ["Admin", "Company", "Projects", "Workshops", "WHSE"];
  pageName: string;

  constructor(
    private nav: NavController,
    private activatedRoute: ActivatedRoute
  ) { }

  ionViewWillEnter() { }

  goBack() {
    this.nav.back();
  }

  next(item) {
    if (item == "WHSE") {
      this.nav.navigateForward("dashboard")
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
