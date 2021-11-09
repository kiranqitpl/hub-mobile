import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestart-dashboard',
  templateUrl: './prestart-dashboard.page.html',
  styleUrls: ['./prestart-dashboard.page.scss'],
})
export class PrestartDashboardPage implements OnInit {

  pName: String = 'Prestart Dashbaord';
  menu = [
    {
      menuName: 'LV Prestart', route: '#'
    },
    {
      menuName: 'Forklift Prestart', route: '#'
    },
    {
      menuName: 'Telehandler Prestart', route: '#'
    },
    {
      menuName: 'Crane Prestart', route: '#'
    },
    {
      menuName: 'Vehicle Hoist Prestart', route: '/vehicle-hoist-add-form'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
