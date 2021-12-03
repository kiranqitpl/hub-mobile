import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-host-view-detail',
  templateUrl: './vehicle-host-view-detail.page.html',
  styleUrls: ['./vehicle-host-view-detail.page.scss'],
})
export class VehicleHostViewDetailPage implements OnInit {

  pName: String = 'Vehicle host form details';

  constructor() { }

  ngOnInit() {
  }

}
