import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  notViewNotiCount: any;

  constructor(
    private globalService: GlobalService
  ) { }


  notificationLoad(formData) {
    let roleId = localStorage.getItem('role');
    let url = "";

    if (roleId) {
      if (roleId == this.globalService.investigator) {
        url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
      } else if (roleId == this.globalService.gm) {
        url = 'api/notification/getGMNotificationByGmID';
      }
    }


    if (url != "") {
      new Promise((resolve, reject) => {
        this.globalService.postData(url, formData).subscribe(result => {
          console.log('notificationLoad', result);
          if (result['status']) {
            let count: number = 0;
            result['data'].forEach(element => {
              if (element.is_seen == 0) {
                count = count + 1;
              }
            });
            this.notViewNotiCount = count;
            return result['data'];
          } else {
            console.log('error');
          }
          setTimeout(function () {
            resolve("Success!");
          });
        });
      });
    }

    // this.globalService.postData(url, formData).subscribe(result => {
    //   console.log('notificationLoad', result);
    //   if (result['status']) {
    //     let count: number = 0;
    //     result['data'].forEach(element => {
    //       if (element.is_seen == 0) {
    //         count = count + 1;
    //       }
    //     });
    //     this.notViewNotiCount = count;
    //     return result['data'];
    //   } else {
    //     console.log('error');
    //   }
    // }), error => {
    //   console.log('error', error);
    // }
  }

  getWitness() {
    let data: any;
    this.globalService.getData1("Witness/getWitnessList").subscribe((res: any) => {
      console.log('getWitness', res);
      console.log('getWitness', res.status);
      if (res.status) {
         data = res.data;
      }
    }, err => {
      console.log(err);
    })
  }
}
