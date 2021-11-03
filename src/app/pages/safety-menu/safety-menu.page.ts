import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global-service/global.service';

@Component({
  selector: 'app-safety-menu',
  templateUrl: './safety-menu.page.html',
  styleUrls: ['./safety-menu.page.scss'],
})
export class SafetyMenuPage implements OnInit {

  _menu = [
    {
      menuName: "Incident", route: "/add-form"
    },
    {
      menuName: "Hazard Report", route: "#"
    },
    {
      menuName: "SBO", route: "#"
    },
    // {
    //   menuName: "Previous Form", route: "/form-list"
    // },
    // {
    //   menuName: "Notification", route: "#"
    // },
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
