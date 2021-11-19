import { Component, OnInit } from '@angular/core';
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
export class IncidentFormListPage implements OnInit {

  pName: String = 'Incidents List';
  rows: any = [];
  userDetails: any;
  listOfUsers: any = [];
  getRowData: any;

  constructor(
    private nav: NavController,
    private global: GlobalService,
    private toastService: ToastService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.getInvestigatorDetails();
    this.loadData();
  }

  getInvestigatorDetails() {
    this.global.getData("Investigator/getInvestigator").subscribe((result: any) => {
      if (result && result.data && result.data.length > 0) {
        this.listOfUsers = result.data;
      }
    }, err => {
      console.log(err)
    });
  }

  loadData() {
    // this.loadingService.presentLoading();
    let data = JSON.parse(localStorage.getItem('userDetails'));
    this.global.getData('add_form/getIncidentFormlist/' + data.id).subscribe((result: any) => {
      if (result && result.data && result.data.length > 0) {
        result?.data?.forEach((el: any, index) => {
          el.created_date = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY")
          el.created_time = moment(el.created_at, "YYYY-MM-DD HH:m:ss").format("h:mm a");
          el.complete_status = (el.complete_status == 0 ? 'Incomplete' : (el.complete_status == 1 ? 'Complete' : ''));
          if (el.investigators && el.investigators.investigator_id && el.investigators.investigator_id !== null) {
            el.ivalue = el.investigators.investigator_id;
          }
        })
        this.rows = result.data;
        console.log('this.rows', this.rows);
      }
      // this.loadingService.dismissLoading();
    }, err => {
      // this.loadingService.dismissLoading();
      console.log(err)
    });
  }

  onActivate(e) {
    this.getRowData = e.row;
    localStorage.setItem("singleView", JSON.stringify(e.row));
  }

  onGoToEdit(rowData) {
    console.log('rowData', rowData);
    this.nav.navigateRoot("/incident-form-edit/" + rowData.id)
  }

  onGoToDetails(rowId) {
    this.nav.navigateRoot("/incident-details/" + rowId);
  }

  onAssignInvestigator(event, rowData) {
    this.global.presentLoading();
    let emp_name = '';
    this.listOfUsers.forEach(data => {
      if (data.employee_id == event.detail.value) {
        emp_name = data.full_name;
      }
    })
    const fd = new FormData();
    // let data = JSON.parse(localStorage.getItem("singleView"));
    fd.append("incident_id", rowData.id);
    fd.append("gm_id", this.userDetails.id)
    fd.append("gm_name", this.userDetails.full_name);
    fd.append("investigator_id", event.detail.value);
    fd.append("investigator_name", emp_name);
    this.global.postData("GeneralManager/assignedInvestigator", fd).subscribe((res: any) => {
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

  onGoToInvestigation(rowData) {
    // let data = JSON.parse(localStorage.getItem("singleView"));
    // console.log('data', data);
    if (rowData.investigation_details !== null && rowData.investigation_details != '') {
      localStorage.setItem("isInvestigationFrom", "edit");
    } else {
      localStorage.setItem("isInvestigationFrom", "add");
    }
    this.nav.navigateForward("investigation");
  }

  onViewInvestigation(rowData) {
    // console.log('this.getRowData ', this.getRowData);
    if (rowData && rowData.complete_status && rowData.complete_status == "Complete"
      && rowData.investigation_details && rowData.investigation_details.id) {
      this.nav.navigateForward("investigation-view/" + rowData.investigation_details.id);
    } else {
      this.global.presentToast("You haven't Investigation created")
    }
  }

  onGoToActions(rowData) {
    // let data = JSON.parse(localStorage.getItem("singleView"))
    if (rowData.is_investigation_action == true) {
      localStorage.setItem("isActionsForm", "edit")
    } else {
      localStorage.setItem("isActionsForm", "add")
    }
    this.nav.navigateForward("actions");
  }

  onViewAction(rowData) {
    // let data = JSON.parse(localStorage.getItem("singleView"))
    // console.log('onViewAction', data);
    if (rowData.is_investigation_action == true) {
      this.nav.navigateForward("actions-view");
    } else {
      this.global.presentToast("You don't have any actions created");
    }
  }
}
