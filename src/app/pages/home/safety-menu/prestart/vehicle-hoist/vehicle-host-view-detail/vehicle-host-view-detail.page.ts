import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vehicle-host-view-detail',
  templateUrl: './vehicle-host-view-detail.page.html',
  styleUrls: ['./vehicle-host-view-detail.page.scss'],
})
export class VehicleHostViewDetailPage implements OnInit {

  pName: String = 'Vehicle host form details';
  vehicleHoist = [];

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
        this.globalService.getData('add_form/getSingleData?table_name=prestart&id=' + params['id']).subscribe(result => {
          console.log();
          if (result && result['data'] && result['data'][0]) {
            this.vehicleHoist = result['data'][0];
          }
          console.log('this.vehicleHoist', this.vehicleHoist);
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
