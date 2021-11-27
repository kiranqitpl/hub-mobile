import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestart-dashboard',
  templateUrl: './prestart-dashboard.page.html',
  styleUrls: ['./prestart-dashboard.page.scss'],
})
export class PrestartDashboardPage implements OnInit {

  pName: String = 'Prestart';
  menu = [
    {
      menuName: 'LV Prestart', route: '#'
    },
    {
      menuName: 'Forklift Prestart', route: '#'
    },
    {
      menuName: 'Telehandler Prestart', route: '/home/safety-menu/telehandler-add-form'
    },
    {
      menuName: 'Crane Prestart', route: '/home/safety-menu/crane-add-form'
    },
    {
      menuName: 'Vehicle Hoist Prestart', route: '/home/safety-menu/vehicle-hoist-add-form'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
