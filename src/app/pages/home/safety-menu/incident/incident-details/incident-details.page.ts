import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController, IonSlides } from '@ionic/angular';
import { ImageModalPage } from 'src/app/modals/image-modal/image-modal.page';
import { GlobalService } from 'src/app/services/global-service/global.service';
import * as moment from 'moment';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.page.html',
  styleUrls: ['./incident-details.page.scss'],
})
export class IncidentDetailsPage implements OnInit {

  pName: String = 'Incident Details';
  incidentDetails: any = [];
  classificationList = [];

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };

  constructor(
    private global: GlobalService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.global.presentLoading();
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.global.getData('api/add_form/getIncidentFormByID/' + params['investigation_id']).subscribe(result => {
          console.log('result', result);
          if (result && result['data'] && result['data'][0]) {
            this.incidentDetails = result['data'][0];
            this.classificationList = this.incidentDetails['classification_value'].split(',');
            this.global.dismissLoading();
          }
          this.global.dismissLoading();
        }), error => {
          this.global.dismissLoading();
          console.log(error);
        }
        this.global.dismissLoading();
      }
    ), error => {
      this.global.dismissLoading()
      console.log('param error', error)
    }
  }

  async onOpenPreview(img) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        img
      }
    });
    modal.present();
  }

}
