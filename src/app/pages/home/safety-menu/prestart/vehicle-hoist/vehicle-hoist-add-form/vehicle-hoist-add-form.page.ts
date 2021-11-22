import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  isSubmitted: boolean = false;
  cursorFocus: any


  constructor(
    private alertCtrl: AlertController,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private navCtrl: NavController,
    private fb: FormBuilder,
    private globalService: GlobalService,
    public elementRef: ElementRef

  ) { }

  // getYPosition(e: Event): number {
  //   console.log('getYPosition', e);
  //   return (e.target as Element).scrollTop;
  // }

  ngOnInit() {
    this.logedInUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.vehicleHoistForm = this.fb.group({

      vehicle_host_no: ['', Validators.required],
      trained: ['', Validators.required],

      inspection_certificate: ['', Validators.required],
      inspection_certificate_comment: [''],

      maintenance_instructions: ['', Validators.required],
      maintenance_instructions_comment: [''],

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
    })

    // this.scrollToBottom();
  }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  @ViewChild('scrollMe', {
    static: true
  })  private myScrollContainer: ElementRef;


  scrollToBottom(): void {

    this.myScrollContainer.nativeElement.scrollTo(0,this.myScrollContainer.nativeElement.scrollHeight);

    //   this.myScrollContainer.nativeElement.scroll({
    //     top: this.myScrollContainer.nativeElement.scrollHeight,
    //     left: 0,
    //     behavior: 'smooth'
    //  });

    console.log('this.myScrollContainer.nativeElement', this.myScrollContainer.nativeElement);
    // try {
    //   this.myScrollContainer.nativeElement.scrollToBottom = this.myScrollContainer.nativeElement.scrollHeight;
    // } catch (err) {
    //   console.log('err', err);
    // }
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

  onValueChange(event, type) {
    // this.scrollToBottom();

    if (type == 'inspection_certificate' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['inspection_certificate_comment'].reset();
    } else if (type == 'maintenance_instructions' && event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['maintenance_instructions_comment'].reset();
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

  onSubmit() {
    this.isSubmitted = true;
    if (this.vehicleHoistForm.valid) {

      if (this.vehicleHoistForm.value['inspection_certificate'] == 'Faulty' && this.vehicleHoistForm.value['inspection_certificate_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['maintenance_instructions'] == 'Faulty' && this.vehicleHoistForm.value['maintenance_instructions_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['data_plate'] == 'Faulty' && this.vehicleHoistForm.value['data_plate_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['safty_devices'] == 'Faulty' && this.vehicleHoistForm.value['safty_devices_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['locks_latches'] == 'Faulty' && this.vehicleHoistForm.value['locks_latches_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['rubber_pad'] == 'Faulty' && this.vehicleHoistForm.value['rubber_pad_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['safty_gaurds'] == 'Faulty' && this.vehicleHoistForm.value['safty_gaurds_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['hydraulic_connections'] == 'Faulty' && this.vehicleHoistForm.value['hydraulic_connections_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['chain_cable_connection'] == 'Faulty' && this.vehicleHoistForm.value['chain_cable_connection_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['frayed_cables'] == 'Faulty' && this.vehicleHoistForm.value['frayed_cables_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['snap_rings'] == 'Faulty' && this.vehicleHoistForm.value['snap_rings_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['bolts_nuts'] == 'Faulty' && this.vehicleHoistForm.value['bolts_nuts_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['electrical_switch'] == 'Faulty' && this.vehicleHoistForm.value['electrical_switch_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['hoist_work_area'] == 'Faulty' && this.vehicleHoistForm.value['hoist_work_area_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['anchor_bolts'] == 'Faulty' && this.vehicleHoistForm.value['anchor_bolts_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['swing_arm'] == 'Faulty' && this.vehicleHoistForm.value['swing_arm_comment'] == '') {
        return;
      } else if (this.vehicleHoistForm.value['hoist_controls'] == 'Faulty' && this.vehicleHoistForm.value['hoist_controls_comment'] == '') {
        return;
      } else {
        this.loadingService.presentLoading();
        let formData = {};
        formData = this.vehicleHoistForm.value;
        formData['user_name'] = this.logedInUserDetails.name;
        formData['date'] = moment().format('YYYY-MM-DD');
        formData['time'] = moment().format('HH:mm:ss');
        let val = { 'formData': formData };

        console.log('typeof', typeof (val));

        this.globalService.postData('prestart_vehicle/add_prestart_vehicle', val).subscribe(result => {
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
    } else {
      console.log('Enter data in form');
      // for (let key in this.vehicleHoistForm.controls) {
      //   if (this.vehicleHoistForm.controls.hasOwnProperty(key)) {
      //     let control: FormControl = <FormControl>this.vehicleHoistForm.controls[key];
      //     console.log('control', control);
      //     if () {
      //     } else {
      //     }
      //   }
      // }
    }
  }

  onHoistControlChange(event) {
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
    if (event.detail.value == 'OK') {
      this.vehicleHoistForm.controls['hoist_controls_comment'].reset();
    }
  }

}
