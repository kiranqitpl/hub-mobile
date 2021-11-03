import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../../services/global-service/global.service';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  userId: any;
  type: any = environment.allType;
  // notificationData: Array<[]>;
  roleId: any;
  notificationId = [];
  notificationData: any = '';

  constructor(
    private nav: NavController,
    private globalService: GlobalService,
    private sharedService: SharedService
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

  //----------------------------------- Load Notification Data ---------------------------------------------------------// 


  async onNotificationLoad() {
    let formData = new FormData();
    formData.append("type", this.type);
    formData.append("user_id", this.userId);

    // this.notificationData = await this.sharedService.notificationLoad(formData);

    // console.log("this.notificationData ", this.notificationData);

    let url = "";
    if (this.roleId == this.globalService.investigator) {
      url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
    } else if (this.roleId == this.globalService.gm) {
      url = 'api/notification/getGMNotificationByGmID';
    }
    if (url != "") {
      // this.globalService.presentLoading();
      this.globalService.postData(url, formData).subscribe(result => {
        if (result['status']) {
          this.notificationData = result['data']
        }
        // this.globalService.dismissLoading();
      }), error => {
        // this.globalService.dismissLoading();
        console.log('error', error);
      }
    } else {
      // this.globalService.dismissLoading();
      console.log("error");
    }

  }

  //----------------------------------- Load Notification Data ---------------------------------------------------------//

  //----------------------------------- Delete Notification ---------------------------------------------------------//
  
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

  onDelete() {
    if (this.notificationId.length != 0) {
      this.globalService.presentLoading();
      let url = 'api/notification/deleteNotificationByNotificationID';
      let formData = new FormData();
      formData.append("id", JSON.stringify(this.notificationId));
      this.globalService.postData(url, formData).subscribe(result => {
        if (result && result['status']) {
          this.onNotificationLoad();
        }
        this.globalService.presentToast(result['message']);
        this.globalService.dismissLoading();
      }), error => {
        this.globalService.dismissLoading();
        console.log('error', error);
      }
    }
  }

  //----------------------------------- Delete Notification ---------------------------------------------------------//

  //----------------------------------- Re-direct on detail page --------------------------------------------------------//

  onNotificationDetaliPage(rowID, formId, formType, isSeen) {
    if (formType == this.globalService.formType_user) {
      this.nav.navigateForward('view/' + formId);
    } else if (formType == this.globalService.formType_investigator) {
      this.nav.navigateForward('investigation-view/' + formId);
    }

    if (isSeen == 0) {
      this.globalService.getData('api/notification/changeNotificationSeen/' + rowID).
        subscribe(result => {
          console.log('result', result);
          if (result['status']) {
            this.sharedService.notViewNotiCount = this.sharedService.notViewNotiCount != 0 ? (this.sharedService.notViewNotiCount - 1) : 0;
          }
        }), error => {
          console.log("error", error);
        }
    }
  }

  //----------------------------------- Re-direct on detail page --------------------------------------------------------//
}
