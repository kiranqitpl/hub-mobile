import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  menu: any = [
    {
      menuName: "Favourites", route: "/dashboard/favourite-form"
    },
    {
      menuName: "Submitted Forms", route: "/incident-form-list"
    },
    {
      menuName: "Notification", route: "/dashboard/notification"
    },
  ];

  type: any = environment.allType;
  imageUrl = environment.imageUrl;
  pName: String = 'Dashboard';
  loggedInUserDetails: any;

  constructor(
    public nav: NavController,
    public global: GlobalService,
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    this.loggedInUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.onNotificationLoad();
  }

  onLogOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

  onNotificationLoad() {
    this.global.getData('notification/getNotificationList/' + this.loggedInUserDetails.id).subscribe(result => {
      if (result && result['row_count'] > 0) {
        let count: number = 0;
        result['data'].forEach(element => {
          if (element.is_seen == 0) {
            count = count + 1;
          }
        });
        this.sharedService.notViewNotiCount = count
      } else {
        this.sharedService.notViewNotiCount = 0
      }
    }), error => {
      console.log('error', error);
    }
  }

  onAddForm() {
    this.nav.navigateForward("home")
  }
}
