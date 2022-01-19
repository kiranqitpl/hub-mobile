import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { IonContent, NavController } from '@ionic/angular';

import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';

@Component({
  selector: 'app-crane-add-form',
  templateUrl: './crane-add-form.page.html',
  styleUrls: ['./crane-add-form.page.scss'],
})

export class CraneAddFormPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('target') myScrollContainer: ElementRef;

  // pName: String = 'Crane';
  craneNoList = [
    {
      id: 'OHC01',
      name: 'OHC01',
    },
    {
      id: 'OHC02',
      name: 'OHC02',
    },
    {
      id: 'OHC03',
      name: 'OHC03',
    },
    {
      id: 'JC01',
      name: 'JC01',
    },
    {
      id: 'JC02',
      name: 'JC02',
    },
    {
      id: 'JC03',
      name: 'JC03',
    },
    {
      id: 'JC04',
      name: 'JC04',
    },
    {
      id: 'JC05',
      name: 'JC05',
    },
    {
      id: 'JC06',
      name: 'JC06',
    }
  ];
  craneForm: FormGroup;
  form_percent: number = 0;
  url_id = '';
  craneData = [];
  loggedInUser: any;
  form_percent_val: number = 0;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    public globalService: GlobalService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    public nav: NavController,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    this.activatedRoute.params.subscribe((params: Params) => {
      this.url_id = params['id'] != undefined ? params['id'] : '';
      if (this.url_id != '' && this.url_id != undefined) {
        this.loadData(this.url_id);
      }
    })

    this.craneForm = this.fb.group({
      crane_number: ['', Validators.required],
      operate_crane: ['', Validators.required],
      swi: ['', Validators.required],
      equipment_isolated: ['', Validators.required],
      inspect_pendant: ['', Validators.required],
      inspect_control_operation: ['', Validators.required],
      directional_swl_sign: ['', Validators.required],
      brakes_operational: ['', Validators.required],
      limit_switches_operational: ['', Validators.required],
      hook: ['', Validators.required],
      hoist_chain_rope: ['', Validators.required],
      mechanically_sound: ['', Validators.required],
      passed_inspection: ['', Validators.required],
      comment: ['']
    })
  }

  onPassedInspection(event) {
    if (event.detail.value == "No") {
      this.alertService.alert('Tag the crane out of service and report any abnormalities immediately to your supervisor.');
    }
  }

  onSubmit(complete_status) {
    this.loadingService.presentLoading();
    let formData = {};
    formData = this.craneForm.value;
    formData['user_id'] = this.loggedInUser.id;
    formData['complete_status'] = complete_status;

    if (this.url_id != '' && this.url_id != undefined) {
      formData['id'] = this.craneData['id'];
    }
    let data = { formData: formData };
    this.globalService.postData('crane/submit', data).subscribe(result => {
      if (result && result['status']) {
        this.toastService.toast(result['message'], 'success');
        this.craneForm.reset();
        this.nav.back();
      } else {
        this.toastService.toast(result['message'], 'danger');
      }
      this.loadingService.dismissLoading();
    }, error => {
      this.loadingService.dismissLoading();
      console.log(error);
    })
  }

  onProgressBar(event) {
    this.content.scrollToPoint(0, this.myScrollContainer.nativeElement.scrollHeight, 6000);
    // let count = 0;
    // let formControlList = [];
    // Object.keys(this.craneForm.controls).map(ele => formControlList.push(ele));
    // formControlList.forEach(key => {
    //   if (this.craneForm.value[key] && this.craneForm.value[key] != '') {
    //     count = ++count;
    //   }
    // })
    // this.form_percent = ((1 / Object.keys(this.craneForm.controls).length) * count);
    // this.form_percent_val = parseInt((((1 / Object.keys(this.craneForm.controls).length) * count) * 100).toFixed());

   let data =  this.sharedService.progressBar(this.craneForm);
   this.form_percent = data['form_percent'];
   this.form_percent_val =  data['form_percent_val'];
  }

  loadData(id) {
    this.globalService.getData('add_form/getSingleData?table_name=crane&id=' + id).subscribe(result => {
      if (result && result['data'] && result['data'][0]) {
        this.craneData = result['data'][0];
        this.craneForm.patchValue(this.craneData);
        this.onProgressBar('');
      }
    }), error => {
      console.log(error);
    }
  }

}
