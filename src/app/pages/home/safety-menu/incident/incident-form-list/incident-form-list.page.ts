import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import moment from 'moment';

@Component({
  selector: 'app-incident-form-list',
  templateUrl: './incident-form-list.page.html',
  styleUrls: ['./incident-form-list.page.scss'],
})
export class IncidentFormListPage implements OnInit {

  pName: String = 'Incidents List';
  rows: any;
  userDetails: any;
  listOfUsers: any = [];

  gm_id: any;
  gm_name: any;
  listData: any = [];
  role: any;
  userRole: any;
  gmRole: any;
  investigatorRole: any;
  managerRole: any;
  supervisorRole: any;
  investigatorData: any;
  investigator_id: any;
  getRowData: any;
  // investigator_name: any;

  constructor(
    private nav: NavController,
    private global: GlobalService,
    private toastService: ToastService
  ) { }

  ngOnInit() {

    // this.gm_id = localStorage.getItem("id");
    // this.gm_name = localStorage.getItem("name");


    this.role = localStorage.getItem("role");

    this.userRole = this.global.user;
    this.gmRole = this.global.gm;
    this.investigatorRole = this.global.investigator;
    this.managerRole = this.global.manager;
    this.supervisorRole = this.global.supervisior



    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.getInvestigatorDetails();
    this.loadData();
  }

  getInvestigatorDetails() {
    this.global.getData1("Investigator/getInvestigator").subscribe((result: any) => {
      if (result && result.data && result.data.length > 0) {
        this.listOfUsers = result.data;
      }
    }, err => {
      console.log(err)
    });
  }

  // ionViewWillEnter() {
  //   // this.global.presentLoading()
  //   this.role = localStorage.getItem("role");
  //   this.userRole = this.global.user;
  //   this.gmRole = this.global.gm;

  //   this.investigatorRole = this.global.investigator;
  //   this.managerRole = this.global.manager;
  //   this.supervisorRole = this.global.supervisior
  //   if (this.role == this.investigatorRole) {
  //     this.global.postData("api/Add_form/get", { investigator_id: this.gm_id }).subscribe((res: any) => {
  //       if (res) {
  //         console.log('investigator');
  //         let data = [];
  //         res?.data?.forEach((el: any, index) => {
  //           el.no = index + 1;
  //           el.incident_type = el.incident_value;
  //           el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
  //           el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
  //           el.manager = el.onViewInvestigation;
  //           el.inValue = el.incident_value;
  //           el.role;
  //           el.cStatus = el.complete_status
  //         });
  //         // this.listData = res.data;
  //         this.listData.forEach((element) => {
  //           if (element.complete_status == 1) {
  //             data.push(element)
  //           }
  //         })
  //         // this.rows = this.listData;
  //         this.investigatorData = data;
  //       }
  //       console.log('investigatorData', this.investigatorData);

  //       // this.global.dismissLoading();
  //     }, err => {
  //       console.log("Err response", err)
  //     });
  //   } else {
  //     this.global.postData("api/add_form/get", {}).subscribe((res: any) => {
  //       console.log('other', res);
  //       if (res) {
  //         if (this.role == this.gmRole) {

  //           console.log('gm');
  //           let data = [];
  //           res?.data?.forEach((el: any, index) => {
  //             el.no = index + 1;
  //             el.incident_type = el.incident_value;
  //             el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
  //             el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
  //             el.manager = el.onViewInvestigation;
  //             el.inValue = el.incident_value;
  //             el.role;
  //             el.cStatus = el.complete_status
  //             if (el.investigators && el.investigators[0].name !== null) {
  //               el.ivalue = el.investigators[0].investigator_name;
  //             }
  //             if (el.is_investigation_action) {
  //               data.push(el)
  //             }
  //           });
  //           this.rows = data;

  //           console.log('gmRole', this.rows);
  //         } else {

  //           console.log('user');
  //           res?.data?.forEach((el: any, index) => {
  //             el.no = index + 1;
  //             el.incident_type = el.incident_value;
  //             el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
  //             el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
  //             el.manager = el.classification_manager;
  //             el.inValue = el.incident_value;
  //             el.role;
  //             el.cStatus = el.complete_status
  //           });
  //           // this.listData = res.data;
  //           // this.rows = res.data
  //           console.log('userRole', res.data);
  //         }
  //         // this.global.dismissLoading();
  //       } else {
  //         // this.global.dismissLoading();
  //       }
  //     }, error => {
  //       console.log(error);
  //       // this.global.dismissLoading();
  //     })
  //   }

  //   // this.global.postData("api/add_form/get", {}).subscribe((res: any) => {
  //   //   if (res) {
  //   //     if (this.role == this.gmRole) {
  //   //       let data = [];
  //   //       res?.data?.forEach((el: any, index) => {
  //   //         el.no = index + 1;
  //   //         el.incident_type = el.incident_value;
  //   //         el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
  //   //         el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
  //   //         el.manager = el.classification_manager;
  //   //         el.inValue = el.incident_value;
  //   //         el.role;
  //   //         if (el?.investigation_details?.name != null) {
  //   //           el.investigator = el?.investigation_details?.name[0]?.investigator_name
  //   //         }
  //   //         if (el.investigators !== null) {
  //   //           el.ivalue = el.investigators[0].investigator_name
  //   //         }
  //   //         if (el.complete_status == 1) {
  //   //           data.push(el)
  //   //         }
  //   //       });
  //   //       this.listData = data;
  //   //       this.rows = this.listData;
  //   //     } else {
  //   //       res?.data?.forEach((el: any, index) => {
  //   //         el.no = index + 1;
  //   //         el.incident_type = el.incident_value;
  //   //         el.noc = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
  //   //         el.time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
  //   //         el.manager = el.classification_manager;
  //   //         el.inValue = el.incident_value;
  //   //         el.role;
  //   //         el.cStatus = el.complete_status
  //   //       });
  //   //       this.listData = res.data;
  //   //       this.rows = this.listData;
  //   //     }
  //   //     // this.global.dismissLoading();
  //   //   } else {
  //   //     // this.global.dismissLoading();
  //   //   }
  //   // }, error => {
  //   //   console.log(error);
  //   //   // this.global.dismissLoading();
  //   // })

  // }

  loadData() {
    let data = JSON.parse(localStorage.getItem('userDetails'));
    console.log('data', data);
    this.global.getData1('add_form/getIncidentFormlist/' + data.id).subscribe((result: any) => {
      console.log('result 0', result);
      if (result && result.data && result.data.length > 0) {
        result?.data?.forEach((el: any, index) => {
          el.created_date = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
          el.created_time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
          el.complete_status = (el.complete_status == 0 ? 'Incomplete' : (el.complete_status == 1 ? 'Complete' : ''));
          if (el.investigators && el.investigators.investigator_id && el.investigators.investigator_id !== null) {
            console.log('el.investigators',el.investigators);
            el.ivalue = el.investigators.investigator_id;
          }
        })
        this.rows = result.data
      }
      // console.log('result', this.rows);
    }, err => {
      console.log(err)
    });
  }

  onActivate(e) {
    this.getRowData = e.row;
    localStorage.setItem("singleView", JSON.stringify(e.row));
  }

  onGoToEdit(rowId) {
    this.nav.navigateRoot("/incident-form-edit/" + rowId)
  }

  onGoToDetails(rowId) {
    console.log('data', rowId);
    this.nav.navigateRoot("/incident-details/" + rowId);
  }

  onAssignInvestigator(event) {

    console.log('event', event);
    console.log('onAssignInvestigator', event.detail.value);

    let emp_name = '';
    this.listOfUsers.forEach(data => {
      if (data.employee_id == event.detail.value) {
        emp_name = data.full_name;
      }
    })

    const fd = new FormData();

    let data = JSON.parse(localStorage.getItem("singleView"));
    fd.append("incident_id", data.id);

    fd.append("gm_id", this.userDetails.id)
    fd.append("gm_name", this.userDetails.full_name);

    fd.append("investigator_id", event.detail.value);
    fd.append("investigator_name", emp_name);

    this.global.presentLoading();

    this.global.postData1("GeneralManager/assignedInvestigator", fd).subscribe((res: any) => {
      console.log('assignedInvestigator', res);
      if (res && res.status) {
        this.toastService.toast(res.message, 'success');
      } else {
        this.toastService.toast(res.message, 'danger');
      }
      this.global.dismissLoading();
    }, err => {
      console.log(err)
      this.global.dismissLoading();
    });

  }

  onGoToInvestigation() {
    let data = JSON.parse(localStorage.getItem("singleView"));
    console.log('data', data);
    if (data.investigation_details !== null && data.investigation_details != '') {
      localStorage.setItem("isInvestigationFrom", "edit");
    } else {
      localStorage.setItem("isInvestigationFrom", "add");
    }
    this.nav.navigateForward("investigation");
  }

  onViewInvestigation() {
    // console.log('this.getRowData.investigation_details.id', this.getRowData.investigation_details.id);
    console.log('this.getRowData ',this.getRowData );
    if (this.getRowData && this.getRowData.complete_status && this.getRowData.complete_status == "Complete"
      && this.getRowData.investigation_details && this.getRowData.investigation_details.id) {
      this.nav.navigateForward("investigation-view/" + this.getRowData.investigation_details.id);
    } else {
      this.global.presentToast("You haven't Investigation created")
    }
  }

  onGoToActions() {
    let data = JSON.parse(localStorage.getItem("singleView"))
    console.log('onGoToActions',data);
    if (data.is_investigation_action == true) {
      localStorage.setItem("isActionsForm", "edit")
    } else {
      localStorage.setItem("isActionsForm", "add")
    }
    this.nav.navigateForward("actions");
  }

  onViewAction() {
    // this.nav.navigateForward("actions-view");
    let data = JSON.parse(localStorage.getItem("singleView"))
    if (data.is_investigation_action == true) {
      this.nav.navigateForward("actions-view");
    } else {
      this.global.presentToast("You don't have any actions created");
    }
  }

}
