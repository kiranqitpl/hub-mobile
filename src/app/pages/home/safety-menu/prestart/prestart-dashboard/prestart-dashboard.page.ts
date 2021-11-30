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
      menuName: 'LV', route: '#'
    },
    {
      menuName: 'Forklift', route: '#'
    },
    {
      menuName: 'Telehandler', route: '/home/safety-menu/telehandler-add-form'
    },
    {
      menuName: 'Crane', route: '/home/safety-menu/crane-add-form'
    },
    {
      menuName: 'Vehicle Hoist', route: '/home/safety-menu/vehicle-hoist-add-form'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
