import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() { }


}
