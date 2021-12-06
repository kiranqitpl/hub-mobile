import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-crane-view-detail',
  templateUrl: './crane-view-detail.page.html',
  styleUrls: ['./crane-view-detail.page.scss'],
})
export class CraneViewDetailPage implements OnInit {

  pName: String = 'Crane Details';
  craneData = [];

  constructor(
    private globalService: GlobalService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.globalService.getData('add_form/getSingleData?table_name=crane&id=' + params['id']).subscribe(result => {
          if (result && result['data'] && result['data'][0]) {
            this.craneData = result['data'][0];
          }
          // this.loadingService.dismissLoading();
        }), error => {
          // this.loadingService.dismissLoading();
          console.log(error);
        }
        // this.loadingService.dismissLoading();
      }
    ), error => {
      // this.loadingService.dismissLoading()
      console.log('param error', error)
    }
  }

}
