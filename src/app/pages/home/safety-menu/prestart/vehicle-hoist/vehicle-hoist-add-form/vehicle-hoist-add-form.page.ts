import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import moment from 'moment';


@Component({
  selector: 'app-vehicle-hoist-add-form',
  templateUrl: './vehicle-hoist-add-form.page.html',
  styleUrls: ['./vehicle-hoist-add-form.page.scss'],
})
export class VehicleHoistAddFormPage implements OnInit {

  pName: String = 'Vehicle Hoist'
  vehicleHoistForm: FormGroup;
  logedInUserDetails: any = '';
  showMsg: boolean = false;


  constructor(
    private alertCtrl: AlertController,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private navCtrl: NavController,
    private fb: FormBuilder,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.logedInUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.vehicleHoistForm = this.fb.group({
      vehicle_host_no: ['', Validators.required],
      trained: ['', Validators.required],
      inspection_certificate: ['', Validators.required],
      maintenance_instructions: ['', Validators.required],
      data_plate: ['', Validators.required],
      safty_devices: ['', Validators.required],
      locks_latches: ['', Validators.required],
      rubber_pad: ['', Validators.required],
      safty_gaurds: ['', Validators.required],
      hydraulic_connections: ['', Validators.required],
      chain_cable_connection: ['', Validators.required],
      frayed_cables: ['', Validators.required],
      snap_rings: ['', Validators.required],
      bolts_nuts: ['', Validators.required],
      electrical_switch: ['', Validators.required],
      hoist_work_area: ['', Validators.required],
      anchor_bolts: ['', Validators.required],
      swing_arm: ['', Validators.required],
      hoist_controls: ['', Validators.required],
    })
  }

  async alert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-msg',
      header: 'Alert Message',
      backdropDismiss: false,
      message: 'STOP you can cannot conduct a prestart on this piece of equipment until you have been trained and deemed competent, you must see your supervisor.',
      buttons: [{
        text: 'Ok',
        role: 'Ok',
        handler: () => {
          this.navCtrl.back();
        }
      }]
    });
    await alert.present();
  }

  onTrainedHoist(event) {
    if (event.detail.value == 'No') {
      this.alert();
    }
  }

  onSubmit() {
    this.loadingService.presentLoading();
    let formData = {};
    formData = this.vehicleHoistForm.value;
    formData['user_name'] = this.logedInUserDetails.name;
    formData['date'] = moment().format('YYYY-MM-DD');
    formData['time'] = moment().format('HH:mm:ss');
    this.globalService.postData('prestart_vehicle/add_prestart_vehicle', formData).subscribe(result => {
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

  onHoistControlChange() {
    let count: number = 0;
    Object.values(this.vehicleHoistForm.value).forEach(key => {
      if (key == 'Faulty') {
        count++;
      }
    });

    if (count > 0) {
      this.showMsg = true;
    } else {
      this.showMsg = false;
    }

    console.log('count', count);
  }

}
