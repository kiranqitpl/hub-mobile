import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data: any = [];
  role: any;
  userRole: any;
  gmRole: any;
  investigatorRole: any;
  managerRole: any;
  supervisorRole: any;
  userId: string;
  roleId: string;
  type: any = environment.allType;
  pName :String = 'Dashboard';

  _menu = [
    {
      // menuName: "Incident", route: "/add-form"
      menuName: "Incident", route: "/incident-form"
    },
    {
      menuName: "Hazard Report", route: ""
      // menuName: "Hazard Report", route: "/add-form"
    },
    {
      menuName: "SBO", route: "#"
    },
  ];

  constructor(
    private nav: NavController,
    private global: GlobalService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('id');
    this.roleId = localStorage.getItem('role');
    this.onNotificationLoad();
  }

  ionViewWillEnter() {
    this.userRole = this.global.user;
    this.gmRole = this.global.gm;
    this.investigatorRole = this.global.investigator;
    this.managerRole = this.global.manager;
    this.supervisorRole = this.global.supervisior
    this.role = localStorage.getItem("role");
    if (this.role == this.userRole) {
      this.data = ["Previous Form", "Notification"]
    } else {
      this.data = ["Submitted Form", "Notification"]
    }
  }

  next() {
    this.nav.navigateForward("incident-type")
  }

  navGo(item) {
    if (item === 'Previous Form' || item == 'Submitted Form') {
      this.nav.navigateForward("form-list");
    } else if ((localStorage.getItem("role") != this.userRole) && (item === 'Notification')) {
      this.nav.navigateForward("notification");
    }
  }

  logOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

  onNotificationLoad() {
    let formData = new FormData();
    formData.append("type", this.type);
    formData.append("user_id", this.userId);
    let url = "";
    if (this.roleId == this.global.investigator) {
      url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
    } else if (this.roleId == this.global.gm) {
      url = 'api/notification/getGMNotificationByGmID';
    }
    if (url != "") {
      this.global.postData(url, formData).subscribe(result => {
        if (result['status']) {
          let count: number = 0;
          result['data'].forEach(element => {
            if (element.is_seen == 0) {
              count = count + 1;
            }
          });
          this.sharedService.notViewNotiCount = count
        } else {
          console.log('error');
        }
      }), error => {
        console.log('error', error);
      }
    } else {
      console.log("error");
    }
  }
}
