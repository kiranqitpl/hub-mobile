import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, IonContent, IonButton } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { GlobalService } from 'src/app/services/global-service/global.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import moment from 'moment';


@Component({
  selector: 'app-vehicle-hoist-add-form',
  templateUrl: './vehicle-hoist-add-form.page.html',
  styleUrls: ['./vehicle-hoist-add-form.page.scss'],
})

export class VehicleHoistAddFormPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('target') myScrollContainer: ElementRef;

  pName: String = 'Vehicle Hoist'
  vehicleHoistForm: FormGroup;
  showMsg: boolean = false;
  isSubmitted: boolean = false;
  form_percent: number = 0;
  loggedInUser: any;
  vehicleHoistSingleRecord = [];
  url_id = '';

  constructor(
    private loadingService: LoadingService,
    private toastService: ToastService,
    private navCtrl: NavController,
    private fb: FormBuilder,
    private globalService: GlobalService,
    public elementRef: ElementRef,
    public alertService: AlertService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    this.vehicleHoistForm = this.fb.group({

      vehicle_host_no: ['', Validators.required],
      trained: ['', Validators.required],

      inspection_certificate: ['', Validators.required],
      inspection_certificate_comment: [''],

      maintenance_instructions: ['', Validators.required],
      // maintenance_instructions_comment: [''],

      data_plate: ['', Validators.required],
      data_plate_comment: [''],

      safty_devices: ['', Validators.required],
      safty_devices_comment: [''],

      locks_latches: ['', Validators.required],
      locks_latches_comment: [''],

      rubber_pad: ['', Validators.required],
      rubber_pad_comment: [''],

      safty_gaurds: ['', Validators.required],
      safty_gaurds_comment: [''],

      hydraulic_connections: ['', Validators.required],
      hydraulic_connections_comment: [''],

      chain_cable_connection: ['', Validators.required],
      chain_cable_connection_comment: [''],

      frayed_cables: ['', Validators.required],
      frayed_cables_comment: [''],

      snap_rings: ['', Validators.required],
      snap_rings_comment: [''],

      bolts_nuts: ['', Validators.required],
      bolts_nuts_comment: [''],

      electrical_switch: ['', Validators.required],
      electrical_switch_comment: [''],

      hoist_work_area: ['', Validators.required],
      hoist_work_area_comment: [''],

      anchor_bolts: ['', Validators.required],
      anchor_bolts_comment: [''],

      swing_arm: ['', Validators.required],
      swing_arm_comment: [''],

      hoist_controls: ['', Validators.required],
      hoist_controls_comment: [''],

      comment: ['']
    });

    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    this.activatedRoute.params.subscribe((params: Params) => {
      this.url_id = params['id'] != undefined ? params['id'] : '';
      if (this.url_id != '' && this.url_id != undefined) {
        this.loadData(this.url_id);
      }
    })
  }

  onStopContinue(event) {
    if (event.detail.value == 'No') {
      this.alertService.alertWithBack('STOP you can cannot conduct a prestart on this piece of equipment until you have been trained and deemed competent, you must see your supervisor.');
    }
  }

  onValueChange(event, type) {
    // this.content.scrollToBottom(500);

    this.content.scrollByPoint(0, this.myScrollContainer.nativeElement.scrollHeight, 6000)
    if (event.detail.value == 'No') {
      this.onStopContinue(event);
    } else if (type == 'inspection_certificate' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['inspection_certificate_comment'].reset();
    } else if (type == 'maintenance_instructions') {
      // if (event.detail.value == 'Yes') {
      //   this.vehicleHoistForm.controls['maintenance_instructions_comment'].reset();
      // }
      if (event.detail.value == 'No') {
        this.onStopContinue(event);
      }
    } else if (type == 'data_plate' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['data_plate_comment'].reset();
    } else if (type == 'safty_devices' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['safty_devices_comment'].reset();
    } else if (type == 'locks_latches' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['locks_latches_comment'].reset();
    } else if (type == 'rubber_pad' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['rubber_pad_comment'].reset();
    } else if (type == 'safty_gaurds' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['safty_gaurds_comment'].reset();
    } else if (type == 'hydraulic_connections' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['hydraulic_connections_comment'].reset();
    } else if (type == 'chain_cable_connection' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['chain_cable_connection_comment'].reset();
    } else if (type == 'frayed_cables' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['frayed_cables_comment'].reset();
    } else if (type == 'snap_rings' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['snap_rings_comment'].reset();
    } else if (type == 'bolts_nuts' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['bolts_nuts_comment'].reset();
    } else if (type == 'electrical_switch' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['electrical_switch_comment'].reset();
    } else if (type == 'hoist_work_area' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['hoist_work_area_comment'].reset();
    } else if (type == 'anchor_bolts' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['anchor_bolts_comment'].reset();
    } else if (type == 'swing_arm' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['swing_arm_comment'].reset();
    }
  }

  validation() {
    // if (this.vehicleHoistForm.valid) {
    if ((this.vehicleHoistForm.value['inspection_certificate'] == 'Faulty' && this.vehicleHoistForm.value['inspection_certificate_comment'] == '') ||
      (this.vehicleHoistForm.value['maintenance_instructions'] == 'Faulty' && this.vehicleHoistForm.value['maintenance_instructions_comment'] == '') ||
      (this.vehicleHoistForm.value['data_plate'] == 'Faulty' && this.vehicleHoistForm.value['data_plate_comment'] == '') ||
      (this.vehicleHoistForm.value['safty_devices'] == 'Faulty' && this.vehicleHoistForm.value['safty_devices_comment'] == '') ||
      (this.vehicleHoistForm.value['locks_latches'] == 'Faulty' && this.vehicleHoistForm.value['locks_latches_comment'] == '') ||
      (this.vehicleHoistForm.value['rubber_pad'] == 'Faulty' && this.vehicleHoistForm.value['rubber_pad_comment'] == '') ||
      (this.vehicleHoistForm.value['safty_gaurds'] == 'Faulty' && this.vehicleHoistForm.value['safty_gaurds_comment'] == '') ||
      (this.vehicleHoistForm.value['hydraulic_connections'] == 'Faulty' && this.vehicleHoistForm.value['hydraulic_connections_comment'] == '') ||
      (this.vehicleHoistForm.value['chain_cable_connection'] == 'Faulty' && this.vehicleHoistForm.value['chain_cable_connection_comment'] == '') ||
      (this.vehicleHoistForm.value['frayed_cables'] == 'Faulty' && this.vehicleHoistForm.value['frayed_cables_comment'] == '') ||
      (this.vehicleHoistForm.value['snap_rings'] == 'Faulty' && this.vehicleHoistForm.value['snap_rings_comment'] == '') ||
      (this.vehicleHoistForm.value['bolts_nuts'] == 'Faulty' && this.vehicleHoistForm.value['bolts_nuts_comment'] == '') ||
      (this.vehicleHoistForm.value['electrical_switch'] == 'Faulty' && this.vehicleHoistForm.value['electrical_switch_comment'] == '') ||
      (this.vehicleHoistForm.value['hoist_work_area'] == 'Faulty' && this.vehicleHoistForm.value['hoist_work_area_comment'] == '') ||
      (this.vehicleHoistForm.value['anchor_bolts'] == 'Faulty' && this.vehicleHoistForm.value['anchor_bolts_comment'] == '') ||
      (this.vehicleHoistForm.value['swing_arm'] == 'Faulty' && this.vehicleHoistForm.value['swing_arm_comment'] == '') ||
      (this.vehicleHoistForm.value['hoist_controls'] == 'Faulty' && this.vehicleHoistForm.value['hoist_controls_comment'] == '')
    ) {
      this.toastService.toast('Please fill all required fields.', 'danger');
      return;
    }
    // }
  }

  onSubmit(complete_status) {
    this.isSubmitted = true;
    if (complete_status == 1) {
      this.validation();
    } else {
      this.loadingService.presentLoading();
      let formData = {};
      formData = this.vehicleHoistForm.value;
      formData['user_id'] = this.loggedInUser.id;
      formData['complete_status'] = complete_status;

      let data = { formData: formData };
      if (this.url_id != '' && this.url_id != undefined) {
        formData['id'] = this.vehicleHoistSingleRecord['id'];
      }
      this.globalService.postData('prestart_vehicle/add_prestart_vehicle', data).subscribe(result => {
        if (result && result['status']) {
          this.navCtrl.back();
          this.toastService.toast(result['message'], 'success');
        } else {
          this.toastService.toast(result['message'], 'danger');
        }
        this.loadingService.dismissLoading();
      }, error => {
        this.loadingService.dismissLoading();
        console.log('error', error);
      })
    }

  }

  // onSubmit() {
  //   this.isSubmitted = true;
  //   if (
  //     (this.vehicleHoistForm.value['inspection_certificate'] == 'Faulty' && this.vehicleHoistForm.value['inspection_certificate_comment'] == '') ||
  //     (this.vehicleHoistForm.value['maintenance_instructions'] == 'Faulty' && this.vehicleHoistForm.value['maintenance_instructions_comment'] == '') ||
  //     (this.vehicleHoistForm.value['data_plate'] == 'Faulty' && this.vehicleHoistForm.value['data_plate_comment'] == '') ||
  //     (this.vehicleHoistForm.value['safty_devices'] == 'Faulty' && this.vehicleHoistForm.value['safty_devices_comment'] == '') ||
  //     (this.vehicleHoistForm.value['locks_latches'] == 'Faulty' && this.vehicleHoistForm.value['locks_latches_comment'] == '') ||
  //     (this.vehicleHoistForm.value['rubber_pad'] == 'Faulty' && this.vehicleHoistForm.value['rubber_pad_comment'] == '') ||
  //     (this.vehicleHoistForm.value['safty_gaurds'] == 'Faulty' && this.vehicleHoistForm.value['safty_gaurds_comment'] == '') ||
  //     (this.vehicleHoistForm.value['hydraulic_connections'] == 'Faulty' && this.vehicleHoistForm.value['hydraulic_connections_comment'] == '') ||
  //     (this.vehicleHoistForm.value['chain_cable_connection'] == 'Faulty' && this.vehicleHoistForm.value['chain_cable_connection_comment'] == '') ||
  //     (this.vehicleHoistForm.value['frayed_cables'] == 'Faulty' && this.vehicleHoistForm.value['frayed_cables_comment'] == '') ||
  //     (this.vehicleHoistForm.value['snap_rings'] == 'Faulty' && this.vehicleHoistForm.value['snap_rings_comment'] == '') ||
  //     (this.vehicleHoistForm.value['bolts_nuts'] == 'Faulty' && this.vehicleHoistForm.value['bolts_nuts_comment'] == '') ||
  //     (this.vehicleHoistForm.value['electrical_switch'] == 'Faulty' && this.vehicleHoistForm.value['electrical_switch_comment'] == '') ||
  //     (this.vehicleHoistForm.value['hoist_work_area'] == 'Faulty' && this.vehicleHoistForm.value['hoist_work_area_comment'] == '') ||
  //     (this.vehicleHoistForm.value['anchor_bolts'] == 'Faulty' && this.vehicleHoistForm.value['anchor_bolts_comment'] == '') ||
  //     (this.vehicleHoistForm.value['swing_arm'] == 'Faulty' && this.vehicleHoistForm.value['swing_arm_comment'] == '') ||
  //     (this.vehicleHoistForm.value['hoist_controls'] == 'Faulty' && this.vehicleHoistForm.value['hoist_controls_comment'] == '')
  //   ) {
  //     this.toastService.toast('Please fill all required fields.', 'danger');
  //     return;
  //   } else {
  //     this.loadingService.presentLoading();
  //     let formData = {};
  //     formData = this.vehicleHoistForm.value;
  //     formData['user_id'] = this.loggedInUser.id;
  //     let data = { formData: formData };
  //     if (this.url_id != '' && this.url_id != undefined) {
  //       formData['id'] = this.vehicleHoistSingleRecord['id'];
  //     }
  //     this.globalService.postData('prestart_vehicle/add_prestart_vehicle', data).subscribe(result => {
  //       if (result && result['status']) {
  //         this.navCtrl.back();
  //         this.toastService.toast(result['message'], 'success');
  //       } else {
  //         this.toastService.toast(result['message'], 'danger');
  //       }
  //       this.loadingService.dismissLoading();
  //     }, error => {
  //       this.loadingService.dismissLoading();
  //       console.log('error', error);
  //     })
  //   }
  // }

  onHoistControlChange(event) {
    let count: number = 0;
    Object.values(this.vehicleHoistForm.value).forEach(key => {
      if (key == 'Faulty') {
        count++;
      }
    });
    this.showMsg = (count > 0) ? true : false;
    if (event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['hoist_controls_comment'].reset();
    }
  }

  onGoToLink(url) {
    window.open(url, '_blank');
  }

  onProgressBar(event) {
    let count = 0;
    let formControlList = [];
    Object.keys(this.vehicleHoistForm.controls).map(ele => formControlList.push(ele));
    formControlList.forEach(key => {
      if (this.vehicleHoistForm.value[key] && this.vehicleHoistForm.value[key] != '' && this.vehicleHoistForm.value[key] == 'OK') {
        count = (count + 2)
      } else if (this.vehicleHoistForm.value[key] && this.vehicleHoistForm.value[key] != '' && this.vehicleHoistForm.value[key] != 'OK') {
        count = ++count;
      }
    })
    this.form_percent = ((1 / Object.keys(this.vehicleHoistForm.controls).length) * count);
  }

  loadData(id) {
    this.globalService.getData('add_form/getSingleData?table_name=prestart&id=' + id).subscribe(result => {
      if (result && result['data'] && result['data'][0]) {
        this.vehicleHoistSingleRecord = result['data'][0];
        this.vehicleHoistForm.patchValue(this.vehicleHoistSingleRecord);
        this.onProgressBar('');
      }
    }), error => {
      console.log(error);
    }
  }

}
