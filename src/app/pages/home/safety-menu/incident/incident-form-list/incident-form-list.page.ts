import { Component, OnInit, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import moment from 'moment';

@Component({
  selector: 'app-incident-form-list',
  templateUrl: './incident-form-list.page.html',
  styleUrls: ['./incident-form-list.page.scss'],
})

@HostListener('window:resize', ['$event'])

export class IncidentFormListPage implements OnInit {

  getScreenWidth: any;
  pName: String = 'Submitted Forms';
  allSubmittedFormlist: any = [];
  newList: any = [];
  listOfUsers: any = [];
  userDetails: any;
  getRowData: any;


  current_page_no: number = 0;
  total_page_no: number = 0;

  page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];

  constructor(
    private nav: NavController,
    private global: GlobalService,
    private toastService: ToastService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.onResize(window);
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    // this.getInvestigatorDetails();
    this.loadData(1);
  }

  onResize(event) {
    this.getScreenWidth = event.innerWidth ? event.innerWidth : event.target.innerWidth;
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

  loadData(pageNo) {

    this.loadingService.presentLoading();

    this.current_page_no = pageNo;

    this.global.getData('add_form/get/?page_no=' + this.current_page_no).subscribe((result: any) => {
      if (result && result.data && result.data.mforms_add_form && result.data.mforms_add_form.length > 0) {
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
          el.Date = moment(el.Date, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY");
          el.Status = (el.Status == 0 ? 'In progress' : (el.Status == 1 ? 'Complete' : (el.Status == 2 ? 'Cancel' : '')));
        })

        this.total_page_no = result.total_pages;

        if (this.allSubmittedFormlist.length <= 0) {
          this.allSubmittedFormlist = result.data.mforms_add_form;
        } else {
          this.newList = this.allSubmittedFormlist;
          this.allSubmittedFormlist = this.newList.concat(result.data.mforms_add_form);
        }
      }
      this.loadingService.dismissLoading();
    }, err => {
      this.loadingService.dismissLoading();
      console.log(err)
    });
  }

  onLoadMoreData() {
    this.current_page_no = this.current_page_no + 1;
    this.loadData(this.current_page_no);
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
