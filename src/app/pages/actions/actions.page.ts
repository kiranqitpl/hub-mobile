import { GlobalService } from '../../services/global-service/global.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  description_of_required_action: any = '';
  user_id: any;
  user_name: any;
  priority: any = '';
  expected_completion: any = '';
  id: any;
  incident_id: any;
  constructor(private nav: NavController, private global: GlobalService) { }
  data: any = [];

  role: any;
  userRole: any;
  gmRole: any;
  investigatorRole: any;
  managerRole: any;
  supervisorRole: any;
  ngOnInit() {
    this.userRole = this.global.user;
    this.gmRole = this.global.gm;
    this.investigatorRole = this.global.investigator;
    this.managerRole = this.global.manager;
    this.supervisorRole = this.global.supervisior
    this.role = localStorage.getItem("role");
    let ar = [];
    let d = JSON.parse(localStorage.getItem("singleView"));
    this.incident_id = d.id;
    this.global.getData("api/user/getAllUser").subscribe((success: any) => {
      if (success) {
        success.data.forEach((user) => {
          if (user.role == this.gmRole) {
            ar.push(user)
            console.log(ar)
            this.data = ar
          }
        })
      }
    }, err => {
      console.log(err)
    })
  }
  isFrom: any;
  ionViewWillEnter() {

    let isOpenFrom = localStorage.getItem("isActionsForm");
    this.isFrom = isOpenFrom;
    if (isOpenFrom == 'edit') {
      let d = JSON.parse(localStorage.getItem("singleView"));
      this.incident_id = d.id;
      this.global.presentLoading();
      this.global.getData("api/Investigator/getInvestigationAction").subscribe((res: any) => {
        if (res) {
          res?.data?.forEach((el) => {
            if (el.incident_id == this.incident_id) {
              this.description_of_required_action = el.description_of_required_action;
              this.user_name = el.user_name;
              this.user_id = el.user_id;
              this.priority = el.priority;
              this.expected_completion = el.expected_completion;
              this.id = el.id
              this.global.dismissLoading();
            } else {
              this.global.dismissLoading();
            }
          })
        }
      }, err => {
        console.log("res", err)
        this.global.dismissLoading();
      });
    } else {

    }
  }

  goBack() {
    this.nav.back();
  }

  selectUser(e) {
    this.data.forEach((el) => {
      if (el.full_name == e.detail.value) {
        this.user_id = el.id
      }
    })
  }

  dateSelect(e) {
    this.expected_completion = moment(e.detail.value).format("YYYY-MM-DD")
  }

  onSubmit() {
    if (this.description_of_required_action == '') {
      this.global.presentToast("Please enter description of required action")
    }
    else if (this.user_id == '' || this.user_id == undefined) {
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
      fd.append('user_id', this.user_id);
      fd.append("user_name", this.user_name);
      fd.append("priority", this.priority);
      fd.append("expected_completion", this.expected_completion);
      fd.append("description_of_required_action", this.description_of_required_action);
      fd.append("investigator_id", localStorage.getItem("id"));
      this.global.postData("api/Investigator/InvestigationAction", fd).subscribe((res: any) => {
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
