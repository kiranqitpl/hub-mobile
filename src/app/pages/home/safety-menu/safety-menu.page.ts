import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global-service/global.service';

@Component({
  selector: 'app-safety-menu',
  templateUrl: './safety-menu.page.html',
  styleUrls: ['./safety-menu.page.scss'],
})
export class SafetyMenuPage implements OnInit {

  menu = [
    {
      menuName: "Prestart", route: "/prestart-dashboard"
    },
    {
      menuName: "Incident", route: "/incident-form"
    },
    {
      menuName: "Hazard Report", route: "#"
    },
    {
      menuName: "SBO", route: "#"
    },
  ];

  pName: String = "Safety";
  loginUserRole: string;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.loginUserRole = localStorage.getItem('role');
  }

  onGoTo() {

  }

}
