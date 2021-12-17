import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { GlobalService } from 'src/app/services/global-service/global.service';

@Component({
  selector: 'app-prestart-dashboard',
  templateUrl: './prestart-dashboard.page.html',
  styleUrls: ['./prestart-dashboard.page.scss'],
})
export class PrestartDashboardPage implements OnInit {

  pName: String = 'Prestart';
  menu = [];
  //  [
  //   {
  //     menuName: 'LV', route: '#', favourite: false
  //   },
  //   {
  //     menuName: 'Forklift', route: '#', favourite: false
  //   },
  //   {
  //     menuName: 'Telehandler', route: '/home/safety-menu/telehandler-add-form', favourite: false
  //   },
  //   {
  //     menuName: 'Crane', route: '/home/safety-menu/crane-add-form', favourite: false
  //   },
  //   {
  //     menuName: 'Vehicle Hoist', route: '/home/safety-menu/vehicle-hoist-add-form', favourite: false
  //   },
  // ];

  loggedInUser = "";

  constructor(
    private sharedService: SharedService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    this.loadFavoriteList();

    console.log('prestartMenu',this.sharedService.prestartMenu);
  }

  loadFavoriteList() {
    console.log('this.loggedInUser', this.loggedInUser);
    this.globalService.getData('PrestartMenu/get_PrestartMenu/' + this.loggedInUser['id']).subscribe(result => {
      console.log('result', result);
    }, error => {
      console.log(error);
    })
  }

  onFavorite(tabname, val) {

    this.sharedService.prestartMenu.filter(ele => {
      if (ele.menuName == tabname) {
        ele.favorite = val;
      }
    })
  }


}
