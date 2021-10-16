import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigation-view',
  templateUrl: './investigation-view.page.html',
  styleUrls: ['./investigation-view.page.scss'],
})
export class InvestigationViewPage implements OnInit {
  data:any;
  constructor(private nav:NavController) { }

  ngOnInit() {
  }



  goBack(){
    this.nav.back();
  }

  ionViewWillEnter(){
    let d = JSON.parse(localStorage.getItem("singleView"));
    this.data = d.investigation_details;
  }

}
