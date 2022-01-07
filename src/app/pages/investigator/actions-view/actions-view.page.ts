import { GlobalService } from 'src/app/services/global-service/global.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actions-view',
  templateUrl: './actions-view.page.html',
  styleUrls: ['./actions-view.page.scss'],
})
export class ActionsViewPage implements OnInit {

  pName: String = 'Actions';
  incident_id: any;
  data: any;
  loggedInUser = '';

  constructor(
    private nav: NavController,
    private global: GlobalService
  ) { }

  ngOnInit() {

    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));

    let d = JSON.parse(localStorage.getItem("singleView"));
    this.incident_id = d.id;
    this.global.presentLoading();
    this.global.getData("Investigator/getInvestigationAction/" + this.loggedInUser['id']).subscribe((res: any) => {
      this.global.dismissLoading();
      if (res) {
        res?.data?.forEach((el) => {
          if (el.incident_id == this.incident_id) {
            this.data = el;
            // this.global.dismissLoading();
          }
        })
      }
    }, err => {
      console.log("res", err)
      this.global.dismissLoading();
    });
  }

}
