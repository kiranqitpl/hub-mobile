import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global-service/global.service';

@Component({
  selector: 'app-investigation-view',
  templateUrl: './investigation-view.page.html',
  styleUrls: ['./investigation-view.page.scss'],
})
export class InvestigationViewPage implements OnInit {

  data: any;
  pName: String = "Investigation";

  constructor(private nav: NavController,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    // this.globalService.presentLoading();
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.globalService.getData('investigator/getInvestigationFormByID/' + params['investigation_id']).subscribe(result => {
          if (result['status']) {
            this.data = result['data'][0];
          } else {
            console.log("error");
          }
          // this.globalService.dismissLoading();
        }), error => {
          // this.globalService.dismissLoading();
          console.log("error", error);
        }
        // this.globalService.dismissLoading();
      })

  }

  goBack() {
    this.nav.back();
  }

}
