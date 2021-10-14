import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  userId: any;
  type: any = environment.type;
  notificationData: Array<[]>;
  roleId: any;
  notificationId = [];

  constructor(
    private nav: NavController,
    private globalService: GlobalService,
  ) { }

  goBack() {
    this.nav.back();
  }

  logOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

  ngOnInit() {
    this.getUserData();
    this.onNotificationLoad();
  }


  getUserData() {
    this.userId = localStorage.getItem('id');
    this.roleId = localStorage.getItem('role');
  }


  filterArrayData(rowId) {
    let data = [];
    data['result'] = false;
    this.notificationId.filter((ele, i) => {
      if (ele == rowId) {
        data['result'] = true;
        data['index'] = i
      }
    })

    return data;
  }

  onDeleteDataSelect(rowId) {
    let val = this.filterArrayData(rowId);
    if (val['result']) {
      this.notificationId.splice(val['index'], 1);
    } else {
      this.notificationId.push(rowId);
    }
  }

  onNotificationLoad() {
    let formData = new FormData();
    formData.append("type", this.type);
    formData.append("user_id", this.userId);
    let url = "";
    if (this.roleId == this.globalService.investigator) {
      url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
    } else if (this.roleId == this.globalService.gm) {
      url = 'api/notification/getGMNotificationByGmID';
    }

    if (url != "") {
      this.globalService.postData(url, formData).subscribe(result => {
        if (result['status']) {
          this.notificationData = result['data'];
        }
      }), error => {
        console.log('error', error);
      }
    }
  }

  onDelete() {
    if (this.notificationId.length != 0) {
      let url = 'api/notification/deleteNotificationByNotificationID';
      let formData = new FormData();
      formData.append("id", JSON.stringify(this.notificationId));
      this.globalService.postData(url, formData).subscribe(result => {
        if (result && result['status']) {
          this.onNotificationLoad();
        }
        this.globalService.presentToast(result['message'])
      }), error => {
        console.log('error', error);
      }
    }
  }

  onNotification(rowID, formType) {
    let formData = new FormData();
    formData.append('id', rowID);
    formData.append('form_type', formType);
    this.globalService.postData('api/notification/getFormByNotificationID', formData).
      subscribe(result => {
        if (result['status']) {
          localStorage.setItem("singleView", JSON.stringify(result['data']))
          if (formType == this.globalService.formType_user) {
            this.nav.navigateForward('view');
          } else if (formType == this.globalService.formType_investigator) {
            this.nav.navigateForward('investigation-view');
          }
        }
      })

  }

}
