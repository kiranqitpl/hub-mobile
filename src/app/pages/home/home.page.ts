
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  pName: String = 'Home';
  menu = [
    {
      menuName: "Admin", route: "#"
    },
    {
      // menuName: "HR", route: "/home/hr/on-boarding"
      menuName: "HR", route: "/user-profile"
    },
    {
      menuName: "Projects", route: "#"
    },
    {
      menuName: "Workshops", route: "#"
    },
    {
      menuName: "Safety", route: "/home/safety-menu"
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

  ngOnInit() { }
}
