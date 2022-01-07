import { GlobalService } from 'src/app/services/global-service/global.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { LoadingService } from 'src/app/services/loading-service/loading.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  pName: String = "Actions";
  data: any = [];

  //------------------------------------------------------------ Form Variables ---------------------------------------------------------------//

  description_of_required_action: any = '';
  user_name: any;
  priority: any = '';
  expected_completion: any = '';
  isFrom: any;
  user_id: any;
  id: any;
  incident_id: any;

  loggedInUser = '';

  //------------------------------------------------------------ Form Variables ---------------------------------------------------------------//

  constructor(
    private nav: NavController,
    private global: GlobalService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    let d = JSON.parse(localStorage.getItem("singleView"));
    this.incident_id = d.id;
    this.loadEmp();
  }

  loadEmp() {
    this.loadingService.presentLoading();
    this.global.getData("user/getAllUser").subscribe((result: any) => {
      if (result && result.data) {
        this.data = result.data;
      }
      this.loadingService.dismissLoading();
      console.log('this.data ', this.data);
    }, err => {
      this.loadingService.dismissLoading();
      console.log(err)
    })
  }

  ionViewWillEnter() {
    let isOpenFrom = localStorage.getItem("isActionsForm");
    this.isFrom = isOpenFrom;
    if (isOpenFrom == 'edit') {
      let d = JSON.parse(localStorage.getItem("singleView"));
      // this.incident_id = d.id;
      // this.global.presentLoading();
      console.log('  this.incident_id ', this.incident_id);
      this.global.getData("Investigator/getInvestigationAction/" + this.loggedInUser['id']).subscribe((res: any) => {
        console.log('getInvestigationAction 1', res);
        if (res) {
          res?.data?.forEach((el) => {
            console.log('getInvestigationAction 2', el);
            if (el.incident_id == this.incident_id) {
              console.log('here');
              this.description_of_required_action = el.description_of_required_action;
              // this.user_name = el.user_name;
              this.user_name = el.user_id;
              this.priority = el.priority;
              this.expected_completion = el.expected_completion;
              this.id = el.id
              // this.global.dismissLoading();
              console.log(' this.id ', this.id);
            }
          })
        }
      }, err => {
        console.log("res", err)
        // this.global.dismissLoading();
      });
    }
  }

  goBack() {
    this.nav.back();
  }

  selectUser(e) {
    this.data.forEach((el) => {
      if (el.employee_id == e.detail.value) {
        this.user_id = el.full_name
      }
    })
  }

  dateSelect(e) {
    this.expected_completion = moment(e.detail.value).format("YYYY-MM-DD")
  }

  onSubmit() {

    let userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (this.description_of_required_action == '') {
      this.global.presentToast("Please enter description of required action")
    }
    else if (this.user_name == '') {
      this.global.presentToast("Please Select User")
    }
    else if (this.priority == '') {
      this.global.presentToast("Please select the priority")
    } else if (this.expected_completion == '') {
      this.global.presentToast("Please enter expected completion")
    } else {
      this.global.presentLoading();
      const fd = new FormData();
      if (this.isFrom == 'edit')
        fd.append("id", this.id)
      fd.append("incident_id", this.incident_id);
      fd.append('user_id', this.user_name);
      fd.append("user_name", this.user_id);
      fd.append("priority", this.priority);
      fd.append("expected_completion", this.expected_completion);
      fd.append("description_of_required_action", this.description_of_required_action);
      fd.append("investigator_id", userDetails.id);
      this.global.postData("Investigator/InvestigationAction", fd).subscribe((res: any) => {
        if (res.status) {
          this.global.presentToast(res.message)
          this.global.dismissLoading();
          this.nav.back();
        } else {
          this.global.dismissLoading();
        }
      }, err => {
        console.log(err)
        this.global.dismissLoading();
      })
    }
  }

}
