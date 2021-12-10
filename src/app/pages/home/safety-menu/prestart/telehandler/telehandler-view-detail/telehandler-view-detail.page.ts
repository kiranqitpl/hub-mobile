import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-telehandler-view-detail',
  templateUrl: './telehandler-view-detail.page.html',
  styleUrls: ['./telehandler-view-detail.page.scss'],
})
export class TelehandlerViewDetailPage implements OnInit {

  pName: String = 'Telehandler Form Details';
  teleHandler: any = [];

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
        this.globalService.getData('add_form/getSingleData?table_name=telehandler&id=' + params['id']).subscribe(result => {
          console.log('result', result);
          if (result && result['data'] && result['data'][0]) {
            this.teleHandler = result['data'][0];
          }
          console.log(' this.teleHandler', this.teleHandler);
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
