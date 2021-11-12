import { GlobalService } from '../../../services/global-service/global.service';
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
  constructor(private nav: NavController, private global: GlobalService) { }

  ngOnInit() {
    let d = JSON.parse(localStorage.getItem("singleView"));
    this.incident_id = d.id;
    this.global.presentLoading();
    this.global.getData("api/Investigator/getInvestigationAction").subscribe((res: any) => {
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
