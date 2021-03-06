import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actions-view',
  templateUrl: './actions-view.page.html',
  styleUrls: ['./actions-view.page.scss'],
})
export class ActionsViewPage implements OnInit {
  incident_id: any;
  data:any;
  constructor(private nav:NavController,private global:GlobalService) { }

  ngOnInit() {
    let d = JSON.parse(localStorage.getItem("singleView"));
    this.incident_id = d.id;
    this.global.presentLoading();
    this.global.getData("api/Investigator/getInvestigationAction").subscribe((res:any)=>{
      if(res){
        res?.data?.forEach((el)=>{
          if (el.incident_id==this.incident_id){
            console.log("current element",el)
            this.data = el;
            this.global.dismissLoading();
          }
        })
      }
    },err=>{
      console.log("res",err)
      this.global.dismissLoading();
    });
  }

  goBack() {
    this.nav.back();
  }

}
