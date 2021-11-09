import { Component, OnInit } from '@angular/core';
// import { AlertService } from 'src/app/services/alert-service/alert.service';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global-service/global.service';
import moment from 'moment';


@Component({
  selector: 'app-vehicle-hoist-add-form',
  templateUrl: './vehicle-hoist-add-form.page.html',
  styleUrls: ['./vehicle-hoist-add-form.page.scss'],
})
export class VehicleHoistAddFormPage implements OnInit {

  pName: String = 'Vehicle Hoist'
  vehicleHoistForm: FormGroup;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private fb: FormBuilder,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
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
      cssClass: 'alert',
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
    console.log('vehicleHoistForm', this.vehicleHoistForm.value);
    let logedInUserName = localStorage.getItem('name');
    let formData = {};
    formData = this.vehicleHoistForm.value;
    formData['user_name'] = logedInUserName;
    formData['date'] = moment().format('YYYY-MM-DD');
    formData['time'] = moment().format('HH:mm:ss')
    console.log('formData', formData);
    // this.globalService.postData1('', formData).subscribe(result => {
    //   console.log('result', result);
    // }, error => {
    //   console.log('error', error);
    // })
  }

}
