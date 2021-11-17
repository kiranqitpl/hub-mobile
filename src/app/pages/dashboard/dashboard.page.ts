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

  role: any;
  userRole: any;
  gmRole: any;
  investigatorRole: any;
  managerRole: any;
  supervisorRole: any;
  roleId: string;

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
    let formData = new FormData();
    formData.append("type", this.type);
    formData.append("user_id", this.loggedInUserDetails.id);
    let url = "";
    // if (this.roleId == this.global.investigator) {
    //   url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
    // } else if (this.roleId == this.global.gm) {
    //   url = 'api/notification/getGMNotificationByGmID';
    // }
    // if (url != "") {
    //   this.global.postData(url, formData).subscribe(result => {
    //     if (result['status']) {
    //       let count: number = 0;
    //       result['data'].forEach(element => {
    //         if (element.is_seen == 0) {
    //           count = count + 1;
    //         }
    //       });
    //       this.sharedService.notViewNotiCount = count
    //     } else {
    //       this.sharedService.notViewNotiCount = 0
    //       console.log('error');
    //     }
    //   }), error => {
    //     console.log('error', error);
    //   }
    // } else {
    //   console.log("error");
    // }
  }

  onAddForm() {
    this.nav.navigateForward("home")
  }
}
