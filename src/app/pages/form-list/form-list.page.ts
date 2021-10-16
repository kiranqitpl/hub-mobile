import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import * as moment from 'moment';

import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.page.html',
  styleUrls: ['./form-list.page.scss'],
})

export class FormListPage implements OnInit {

  // isApp: boolean;

  gm_id: any;
  gm_name: any;
  listOfUsers: any = [];
  public rows: any;
  listData: any = [];
  role: any;
  userRole: any;
  gmRole: any;
  investigatorRole: any;
  managerRole: any;
  supervisorRole: any;
  investigatorData: any;
  investigator_name: any;
  investigator_id: any;

  getRowData: any;


  constructor(
    private nav: NavController,
    private global: GlobalService,
    // private platform: Platform
  ) { }

  ngOnInit() {
    this.gm_id = localStorage.getItem("id");
    this.gm_name = localStorage.getItem("name");
    this.getInvestigatorDetails();
  }

  getInvestigatorDetails() {
    this.global.getData("api/Investigator/getInvestigator").subscribe((res: any) => {
      if (res) {
        this.listOfUsers = res.data;
      }
    }, err => {
      console.log(err)
    });
  }

  ionViewWillEnter() {
    this.global.presentLoading()
    this.role = localStorage.getItem("role");
    this.userRole = this.global.user;
    this.gmRole = this.global.gm;
    this.investigatorRole = this.global.investigator;
    this.managerRole = this.global.manager;
    this.supervisorRole = this.global.supervisior
    // if (this.platform.is('mobileweb')) {
    //   this.isApp = false;
    // } else {
    //   this.isApp = true;
    // }

    if (this.role == this.investigatorRole) {
      this.global.postData("api/Add_form/get", { investigator_id: this.gm_id }).subscribe((res: any) => {
        if (res) {
          let data = [];
          res?.data?.forEach((el: any, index) => {
            el.no = index + 1;
            el.incident_type = el.incident_value;
            el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
            el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
            el.manager = el.classification_manager;
            el.inValue = el.incident_value;
            el.role;
            el.cStatus = el.complete_status
          });
          this.listData = res.data;
          this.listData.forEach((element) => {
            if (element.complete_status == 1) {
              data.push(element)
            }
          })
          this.rows = this.listData;
          this.investigatorData = data;
        }
        this.global.dismissLoading();
      }, err => {
        console.log("Err response", err)
      });
    } else {
      this.global.postData("api/add_form/get", {}).subscribe((res: any) => {
        if (res) {
          if (this.role == this.gmRole) {
            let data = [];
            res?.data?.forEach((el: any, index) => {
              el.no = index + 1;
              el.incident_type = el.incident_value;
              el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
              el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
              el.manager = el.classification_manager;
              el.inValue = el.incident_value;
              el.role;
              el.cStatus = el.complete_status
              if (el.inveinvestigators[0].name !== null) {
                el.ivalue = el.inveinvestigators[0].investigator_name;
              }
              if (el.is_investigation_action) {
                data.push(el)
              }
            });
            this.listData = data;
            this.rows = data;
          } else {
            res?.data?.forEach((el: any, index) => {
              el.no = index + 1;
              el.incident_type = el.incident_value;
              el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
              el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
              el.manager = el.classification_manager;
              el.inValue = el.incident_value;
              el.role;
              el.cStatus = el.complete_status
            });
            this.listData = res.data;
            this.rows = this.listData;
          }
          this.global.dismissLoading();
        } else {
          this.global.dismissLoading();
        }
      }, error => {
        console.log(error);
        this.global.dismissLoading();
      })
    }

    this.global.postData("api/add_form/get", {}).subscribe((res: any) => {
      if (res) {
        if (this.role == this.gmRole) {
          let data = [];
          res?.data?.forEach((el: any, index) => {
            el.no = index + 1;
            el.incident_type = el.incident_value;
            el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
            el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
            el.manager = el.classification_manager;
            el.inValue = el.incident_value;
            el.role;
            if (el?.investigation_details?.name != null) {
              el.investigator = el?.investigation_details?.name[0]?.investigator_name
            }
            if (el.investigators !== null) {
              el.ivalue = el.investigators[0].investigator_name
            }
            if (el.complete_status == 1) {
              data.push(el)
            }
          });
          this.listData = data;
          this.rows = this.listData;
        } else {
          res?.data?.forEach((el: any, index) => {
            el.no = index + 1;
            el.incident_type = el.incident_value;
            el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
            el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
            el.manager = el.classification_manager;
            el.inValue = el.incident_value;
            el.role;
            el.cStatus = el.complete_status
          });
          this.listData = res.data;
          this.rows = this.listData;

        }
        this.global.dismissLoading();
      } else {
        this.global.dismissLoading();
      }
    }, error => {
      console.log(error);
      this.global.dismissLoading();
    })
  }

  goBack() {
    this.nav.back();
  }

  onActivate(e) {
    ;
    this.getRowData = e.row;
    localStorage.setItem("singleView", JSON.stringify(e.row));
  }

  singleView() {
    this.nav.navigateRoot("view/" + this.getRowData.id);
  }

  editClick() {
    this.nav.navigateRoot("edit")
  }

  investigation() {
    let data = JSON.parse(localStorage.getItem("singleView"))
    if (data.investigation_details !== null) {
      localStorage.setItem("isInvestigationFrom", "edit");
    } else {
      localStorage.setItem("isInvestigationFrom", "add");
    }
    this.nav.navigateForward("investigation")
  }

  actions() {
    let data = JSON.parse(localStorage.getItem("singleView"))
    if (data.is_investigation_action == true) {
      localStorage.setItem("isActionsForm", "edit")
    } else {
      localStorage.setItem("isActionsForm", "add")
    }
    this.nav.navigateForward("actions");
  }

  viewActionForm() {
    let data = JSON.parse(localStorage.getItem("singleView"))
    if (data.is_investigation_action == true) {
      this.nav.navigateForward("actions-view");
    } else {
      this.global.presentToast("You don't have any actions created");
    }
  }

  viewInvestigation() {

    // let data = JSON.parse(localStorage.getItem("singleView"))
    console.log('this.getRowData ', this.getRowData);
    if (this.getRowData && this.getRowData.complete_status && this.getRowData.complete_status == 1) {
      this.nav.navigateForward("investigation-view/" + this.getRowData.investigation_details.id);
    } else {
      this.global.presentToast("You haven't Investigation created")
    }
  }

  assignToinvestigator() {
    const fd = new FormData();
    let data = JSON.parse(localStorage.getItem("singleView"))
    fd.append("incident_id", data.id);
    fd.append("gm_id", this.gm_id)
    fd.append("gm_name", this.gm_name);
  }

  selectInvestigator(e) {
    console.log('selectInvestigator', e);
    this.investigator_name = e.detail.value;
    this.listOfUsers.forEach(user => {
      if (user.full_name == e.detail.value) {
        this.investigator_id = user.id
      }
    })
    const fd = new FormData();
    let data = JSON.parse(localStorage.getItem("singleView"))
    fd.append("incident_id", data.id);
    fd.append("gm_id", this.gm_id)
    fd.append("gm_name", this.gm_name);
    fd.append("investigator_id", this.investigator_id)
    fd.append("investigator_name", this.investigator_name)
    // let datas = {
    //   incident_id: data.id,
    //   gmL: this.gm_id,
    //   gm_name: this.gm_name,
    //   investigator_id: this.investigator_id,
    //   investigator_name: this.investigator_name
    // }

    console.log("fd", fd);
    this.global.presentLoading();
    this.global.postDataWithId("api/GeneralManager/assignedInvestigator", fd).subscribe((res: any) => {
      this.global.presentToast(res.message);
      // if (res.status) {
      //   this.global.presentToast(res.message);
      // } else {
      //   this.global.presentToast(res.message);
      // }
      this.global.dismissLoading();
    }, err => {
      console.log(err)
      this.global.dismissLoading();
    })
  }

  logOut() {
    localStorage.clear();
    this.nav.navigateRoot("login")
  }

}
