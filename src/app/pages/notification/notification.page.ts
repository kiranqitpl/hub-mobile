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

  pName: String = "Notifications";
  type: any = environment.allType;
  notificationId = [];
  notificationData: any = '';
  loggedInUser = '';

  constructor(
    private nav: NavController,
    private globalService: GlobalService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    this.onNotificationLoad();
  }


  //----------------------------------- Load Notification Data ---------------------------------------------------------// 

  async onNotificationLoad() {
    console.log('this.loggedInUser', this.loggedInUser, this.loggedInUser['id']);
    this.globalService.presentLoading();
    this.globalService.getData('notification/getNotificationList/' + this.loggedInUser['id']).subscribe(result => {
      if (result && result['row_count'] > 0) {
        this.notificationData = result['data']
      } else {
        this.notificationData = [];
      }
      console.log('this.notificationData ', this.notificationData);
      this.globalService.dismissLoading();
    }), error => {
      this.globalService.dismissLoading();
      console.log('error', error);
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
      let formData = new FormData();

      console.log('this.notificationId', this.notificationId);

      formData.append("id", JSON.stringify(this.notificationId));

      this.globalService.postData('notification/deleteNotificationByNotificationID', formData).subscribe(result => {
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
      // this.nav.navigateForward('view/' + formId);
      this.nav.navigateForward('incident-details/' + formId)
    } else if (formType == this.globalService.formType_investigator) {
      this.nav.navigateForward('investigation-view/' + formId);
    }
    if (isSeen == 0) {
      this.globalService.getData('notification/changeNotificationSeen/' + rowID).
        subscribe(result => {
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
