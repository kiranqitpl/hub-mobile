import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global-service/global.service';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  menu: any = [
    {
      menuName: "Submitted Form", route: "/incident-form-list"
    },
    {
      menuName: "Notification", route: "/notification"
    },
  ];

  type: any = environment.allType;
  imageUrl = environment.imageUrl;

  loggedInUserDetails: any;

  constructor(
    private nav: NavController,
    private global: GlobalService,
    private sharedService: SharedService
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
    console.log('here');
    this.global.getData('notification/getNotificationList/' + this.loggedInUserDetails.id).subscribe(result => {
      console.log('getNotificationList', result);
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
