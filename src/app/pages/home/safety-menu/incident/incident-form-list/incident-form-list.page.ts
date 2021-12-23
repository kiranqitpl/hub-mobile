import { Component, OnInit, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import moment from 'moment';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-incident-form-list',
  templateUrl: './incident-form-list.page.html',
  styleUrls: ['./incident-form-list.page.scss'],
})

@HostListener('window:resize', ['$event'])

export class IncidentFormListPage implements OnInit {

  pName: String = 'Submitted Forms';
  allSubmittedFormlist: any = [];
  newList: any = [];
  listOfUsers: any = [];
  getScreenWidth: any;
  userDetails: any;
  getRowData: any;

  size: number = 10;
  totalElements: number = 0;
  totalPages: number = 0;
  pageNumber: number = 0;
  offset: number = 0

  constructor(
    private nav: NavController,
    private global: GlobalService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.onResize(window);
    // this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.setValueOnLoadData();
  }

  onResize(event) {
    this.getScreenWidth = this.sharedService.resize(event);
    // this.getScreenWidth = event.innerWidth ? event.innerWidth : event.target.innerWidth;
  }

  setValueOnLoadData() {
    let screen = this.getScreenWidth < 1080 ? 'mobile' : 'web'

    if (screen == 'mobile') {
      this.loadData('', 1, screen);
    } else {
      let object = {
        count: 60,
        limit: 10,
        offset: 0,
        pageSize: 10,
      }
      this.loadData(object, '', screen);
    }
  }

  loadData(event, pageNo, screen) {

    if (screen == 'mobile') {
      this.pageNumber = event == 'newList' ? ++pageNo : pageNo;
    }

    if (screen == 'web') {
      this.pageNumber = (event.offset + 1);
      this.offset = event.offset
    }

    if (this.pageNumber != 0) {
      // this.loadingService.presentLoading();
      this.global.getData('add_form/get/?page_no=' + this.pageNumber).subscribe((result: any) => {
        if (result && result.data && result.data.mforms_add_form && result.data.mforms_add_form.length > 0) {

          result.data.mforms_add_form.sort(function (a, b) {
            let keyA = new Date(a.Date),
              keyB = new Date(b.Date);
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;

          });

          result.data.mforms_add_form.forEach((el: any) => {
            if (el.Form == 'mforms_add_form') {
              el.Form = 'Incident'
            } else if (el.Form == 'mforms_telehandler') {
              el.Form = 'Telehandler Prestarts'
            } else if (el.Form == 'mforms_crane') {
              el.Form = 'Crane Prestarts'
            } else if (el.Form == 'mforms_prestart_vehicle_hoist') {
              el.Form = 'Vehicle Hoist Prestarts'
            }
            el.Date = moment(el.Date).format("DD-MM-YYYY hh:mm");
            // el.Date = moment(el.Date, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY hh:mm:ss");
            el.Status = (el.Status == 0 ? 'In progress' : (el.Status == 1 ? 'Completed' : (el.Status == 2 ? 'Cancel' : '')));
          })

          this.totalPages = result.total_pages;
          this.totalElements = result.row_count;

          if (screen == 'mobile') {
            if (this.allSubmittedFormlist.length == 0) {
              this.allSubmittedFormlist = result.data.mforms_add_form;
            } else {
              this.newList = this.allSubmittedFormlist;
              this.allSubmittedFormlist = this.newList.concat(result.data.mforms_add_form);
            }
          }
          if (screen == 'web') {
            this.allSubmittedFormlist = result.data.mforms_add_form;
          }

          // console.log(' this.allSubmittedFormlist ', this.allSubmittedFormlist);
        }
        // this.loadingService.dismissLoading();
      }, err => {
        // this.loadingService.dismissLoading();
        console.log(err)
      });
    }
  }

  onGoToEdit(rowData) {
    if (rowData && rowData.Form == 'Incident') {
      this.nav.navigateRoot("/home/safety-menu/incident-form-edit/" + rowData.Id);
    } else if (rowData && rowData.Form == 'Telehandler Prestarts') {
      this.nav.navigateRoot("/home/safety-menu/telehandler-add-form/" + rowData.Id);
    } else if (rowData && rowData.Form == 'Crane Prestarts') {
      this.nav.navigateRoot("/home/safety-menu/crane-add-form/" + rowData.Id);
    } else if (rowData && rowData.Form == 'Vehicle Hoist Prestarts') {
      this.nav.navigateRoot("/home/safety-menu/vehicle-hoist-add-form/" + rowData.Id);
    }
  }

  onGoToDetails(rowData) {
    if (rowData && rowData.Form == 'Incident') {
      this.nav.navigateRoot("/home/safety-menu/incident-details/" + rowData.Id);
    } else if (rowData && rowData.Form == 'Telehandler Prestarts') {
      this.nav.navigateRoot("/home/safety-menu/telehandler-view-detail/" + rowData.Id);
    } else if (rowData && rowData.Form == 'Crane Prestarts') {
      this.nav.navigateRoot("/home/safety-menu/crane-view-detail/" + rowData.Id);
    } else if (rowData && rowData.Form == 'Vehicle Hoist Prestarts') {
      this.nav.navigateRoot("/home/safety-menu/vehicle-host-view-detail/" + rowData.Id);
    }
  }

  // getInvestigatorDetails() {
  //   this.global.getData("Investigator/getInvestigator").subscribe((result: any) => {
  //     if (result && result.data && result.data.length > 0) {
  //       this.listOfUsers = result.data;
  //     }
  //   }, err => {
  //     console.log(err)
  //   });
  // }

  // onActivate(e) {
  //   this.getRowData = e.row;
  //   localStorage.setItem("singleView", JSON.stringify(e.row));
  // }

  // onAssignInvestigator(event, rowData) {
  //   this.global.presentLoading();
  //   let emp_name = '';
  //   this.listOfUsers.forEach(data => {
  //     if (data.employee_id == event.detail.value) {
  //       emp_name = data.full_name;
  //     }
  //   })
  //   const fd = new FormData();
  //   // let data = JSON.parse(localStorage.getItem("singleView"));
  //   fd.append("incident_id", rowData.id);
  //   fd.append("gm_id", this.userDetails.id)
  //   fd.append("gm_name", this.userDetails.full_name);
  //   fd.append("investigator_id", event.detail.value);
  //   fd.append("investigator_name", emp_name);
  //   this.global.postData("GeneralManager/assignedInvestigator", fd).subscribe((res: any) => {
  //     if (res && res.status) {
  //       this.toastService.toast(res.message, 'success');
  //     } else {
  //       this.toastService.toast(res.message, 'danger');
  //     }
  //     this.global.dismissLoading();
  //   }, err => {
  //     console.log(err)
  //     this.global.dismissLoading();
  //   });
  // }

  // onGoToInvestigation(rowData) {
  //   // let data = JSON.parse(localStorage.getItem("singleView"));
  //   // console.log('data', data);
  //   if (rowData.investigation_details !== null && rowData.investigation_details != '') {
  //     localStorage.setItem("isInvestigationFrom", "edit");
  //   } else {
  //     localStorage.setItem("isInvestigationFrom", "add");
  //   }
  //   this.nav.navigateForward("investigation");
  // }

  // onViewInvestigation(rowData) {
  //   // console.log('this.getRowData ', this.getRowData);
  //   if (rowData && rowData.complete_status && rowData.complete_status == "Complete"
  //     && rowData.investigation_details && rowData.investigation_details.id) {
  //     this.nav.navigateForward("investigation-view/" + rowData.investigation_details.id);
  //   } else {
  //     this.global.presentToast("You haven't Investigation created")
  //   }
  // }

  // onGoToActions(rowData) {
  //   // let data = JSON.parse(localStorage.getItem("singleView"))
  //   if (rowData.is_investigation_action == true) {
  //     localStorage.setItem("isActionsForm", "edit")
  //   } else {
  //     localStorage.setItem("isActionsForm", "add")
  //   }
  //   this.nav.navigateForward("actions");
  // }

  // onViewAction(rowData) {
  //   // let data = JSON.parse(localStorage.getItem("singleView"))
  //   // console.log('onViewAction', data);
  //   if (rowData.is_investigation_action == true) {
  //     this.nav.navigateForward("actions-view");
  //   } else {
  //     this.global.presentToast("You don't have any actions created");
  //   }
  // }

}
