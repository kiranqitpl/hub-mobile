
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  // data = ["Admin", "Company", "Projects", "Workshops", "Safety"];
  pName: String = 'Home';
  menu = [
    {
      menuName: "Admin", route: "#"
    },
    {
      menuName: "Company", route: "#"
    },
    {
      menuName: "Projects", route: "#"
    },
    {
      menuName: "Workshops", route: "#"
    },
    {
      menuName: "Safety", route: "/safety-menu"
    },
  ];

  constructor(
    private nav: NavController,
  ) { }

  ionViewWillEnter() { }

  logout() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

  ngOnInit() {
    // this.getRout()
  }

  // next(item) {
  //   if (item == "Safety") {
  //     // if (localStorage.getItem('role') != this.globalService.gm) {
  //     //   this.nav.navigateForward("safety-menu");
  //     // } else {
  //     this.nav.navigateForward("dashboard")
  //     // }
  //   }
  // }

  // getRout() {
  //   console.log('activatedRoute', this.activatedRoute);
  //   console.log('activatedRoute', this.activatedRoute['_routerState'].snapshot.url);
  //   let rout = this.activatedRoute['_routerState'].snapshot.url;
  //   console.log('rout', rout.split("/"));
  //   this.pageName = rout.split("/")['1'];
  //   console.log('this.pageName', this.pageName);
  // }
}
