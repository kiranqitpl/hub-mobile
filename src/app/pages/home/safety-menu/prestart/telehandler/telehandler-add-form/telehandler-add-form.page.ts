import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { NavController } from '@ionic/angular';
import { ActionSheetController, ModalController } from '@ionic/angular';

import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { ImageModalPage } from 'src/app/modals/image-modal/image-modal.page';
import { AlertService } from 'src/app/services/alert-service/alert.service';


@Component({
  selector: 'app-telehandler-add-form',
  templateUrl: './telehandler-add-form.page.html',
  styleUrls: ['./telehandler-add-form.page.scss'],
})
export class TelehandlerAddFormPage implements OnInit {

  pName: String = 'Telehandler'
  teleHandlerForm: FormGroup;
  isSubmitted: boolean = false;
  loggedInUser: any;
  // showMsg: boolean = false;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private toastService: ToastService,
    private nav: NavController,
    private loadingService: LoadingService,
    private modalController: ModalController,
    private sharedService: SharedService,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.teleHandlerForm = this.fb.group({

      competency: [''],
      telehandler_number: ['TH40'],

      hour_meter: [''],

      data_plate: [''],
      data_plate_comment: [''],
      data_plate_image: [''],

      engine_oil: [''],
      engine_oil_comment: [''],
      engine_oil_image: [''],

      hydraulic_oil: [''],
      hydraulic_oil_comment: [''],
      hydraulic_oil_image: [''],

      fuel_level: [''],

      equipment_inspect: [''],
      equipment_inspect_comment: [''],
      equipment_inspect_image: [''],

      coolant_level: [''],
      coolant_level_comment: [''],
      coolant_level_image: [''],

      belts_and_hoses: [''],
      belts_and_hoses_comment: [''],
      belts_and_hoses_image: [''],

      wheels_tyres: ['', Validators.required],
      wheels_tyres_comment: [''],
      wheels_tyres_image: [''],

      fire_extinguisher: ['', Validators.required],
      fire_extinguisher_comment: [''],
      fire_extinguisher_image: [''],

      fuel_flash: ['', Validators.required],
      fuel_flash_comment: [''],
      fuel_flash_image: [''],

      hydraulics_functional: ['', Validators.required],
      hydraulics_functional_comment: [''],
      hydraulics_functional_image: [''],

      lift_arms: ['', Validators.required],
      lift_arms_comment: [''],
      lift_arms_image: [''],

      chain_hose: ['', Validators.required],
      chain_hose_comment: [''],
      chain_hose_image: [''],

      cap_bolts: ['', Validators.required],
      cap_bolts_comment: [''],
      cap_bolts_image: [''],

      safety_stops: ['', Validators.required],
      safety_stops_comment: [''],
      safety_stops_image: [''],

      forks: ['', Validators.required],
      forks_comment: [''],
      forks_image: [''],

      overhead_guards: ['', Validators.required],
      overhead_guards_comment: [''],
      overhead_guards_image: [''],

      counterweight: ['', Validators.required],
      counterweight_comment: [''],
      counterweight_image: [''],

      engine_bay_components: ['', Validators.required],
      engine_bay_components_comment: [''],
      engine_bay_components_image: [''],

      horn: ['', Validators.required],
      horn_comment: [''],
      horn_image: [''],

      audible: ['', Validators.required],
      audible_comment: [''],
      audible_image: [''],

      headlights: ['', Validators.required],
      headlights_comment: [''],
      headlights_image: [''],

      turn_signals: ['', Validators.required],
      turn_signals_comment: [''],
      turn_signals_image: [''],

      warning_brake_lights: ['', Validators.required],
      warning_brake_lights_comment: [''],
      warning_brake_lights_image: [''],

      foot_brake: ['', Validators.required],
      foot_brake_comment: [''],
      foot_brake_image: [''],

      parking_brake: ['', Validators.required],
      parking_brake_comment: [''],
      parking_brake_image: [''],

      clutch_gear_shift: ['', Validators.required],
      clutch_gear_shift_comment: [''],
      clutch_gear_shift_image: [''],

      engine_noise: ['', Validators.required],
      engine_noise_comment: [''],
      engine_noise_image: [''],

      dash_gauges: ['', Validators.required],
      dash_gauges_comment: [''],
      dash_gauges_image: [''],

      operational_controls: ['', Validators.required],
      operational_controls_comment: [''],
      operational_controls_image: [''],

      fluid_leaks: ['', Validators.required],
      fluid_leaks_comment: [''],
      fluid_leaks_image: [''],

      first_aid_kit: ['', Validators.required],
      first_aid_kit_comment: [''],
      first_aid_kit_image: [''],

      comment: [''],
    })
    this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
  }

  get errorControls() {
    return this.teleHandlerForm.controls;
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

  async pickImage(sourceType, rowName) {
    let image: any;
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType == 0 ? this.camera.PictureSourceType.PHOTOLIBRARY : (sourceType == 1 ? this.camera.PictureSourceType.CAMERA : 0),
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      // console.log('imageData', imageData);
      image = imageData != '' ? 'data:image/jpeg;base64,' + imageData : '';
      if (rowName == 'data_plate_image') {
        this.teleHandlerForm.controls['data_plate_image'].setValue(image);
      } else if (rowName == 'engine_oil_image') {
        this.teleHandlerForm.controls['engine_oil_image'].setValue(image);
      } else if (rowName == 'hydraulic_oil_image') {
        this.teleHandlerForm.controls['hydraulic_oil_image'].setValue(image);
      } else if (rowName == 'equipment_inspect_image') {
        this.teleHandlerForm.controls['equipment_inspect_image'].setValue(image);
      } else if (rowName == 'coolant_level_image') {
        this.teleHandlerForm.controls['coolant_level_image'].setValue(image);
      } else if (rowName == 'belts_and_hoses_image') {
        this.teleHandlerForm.controls['belts_and_hoses_image'].setValue(image);
      } else if (rowName == 'wheels_tyres_image') {
        this.teleHandlerForm.controls['wheels_tyres_image'].setValue(image);
      } else if (rowName == 'fire_extinguisher_image') {
        this.teleHandlerForm.controls['fire_extinguisher_image'].setValue(image);
      } else if (rowName == 'fuel_flash_image') {
        this.teleHandlerForm.controls['fuel_flash_image'].setValue(image);
      } else if (rowName == 'hydraulics_functional_image') {
        this.teleHandlerForm.controls['hydraulics_functional_image'].setValue(image);
      } else if (rowName == 'lift_arms_image') {
        this.teleHandlerForm.controls['lift_arms_image'].setValue(image);
      } else if (rowName == 'chain_hose_image') {
        this.teleHandlerForm.controls['chain_hose_image'].setValue(image);
      } else if (rowName == 'cap_bolts_image') {
        this.teleHandlerForm.controls['cap_bolts_image'].setValue(image);
      } else if (rowName == 'safety_stops_image') {
        this.teleHandlerForm.controls['safety_stops_image'].setValue(image);
      } else if (rowName == 'forks_image') {
        this.teleHandlerForm.controls['forks_image'].setValue(image);
      } else if (rowName == 'overhead_guards_image') {
        this.teleHandlerForm.controls['overhead_guards_image'].setValue(image);
      } else if (rowName == 'counterweight_image') {
        this.teleHandlerForm.controls['counterweight_image'].setValue(image);
      } else if (rowName == 'engine_bay_components_image') {
        this.teleHandlerForm.controls['engine_bay_components_image'].setValue(image);
      } else if (rowName == 'horn_image') {
        this.teleHandlerForm.controls['horn_image'].setValue(image);
      } else if (rowName == 'audible_image') {
        this.teleHandlerForm.controls['audible_image'].setValue(image);
      } else if (rowName == 'headlights_image') {
        this.teleHandlerForm.controls['headlights_image'].setValue(image);
      } else if (rowName == 'turn_signals_image') {
        this.teleHandlerForm.controls['turn_signals_image'].setValue(image);
      } else if (rowName == 'warning_brake_lights_image') {
        this.teleHandlerForm.controls['warning_brake_lights_image'].setValue(image);
      } else if (rowName == 'foot_brake_image') {
        this.teleHandlerForm.controls['foot_brake_image'].setValue(image);
      } else if (rowName == 'parking_brake_image') {
        this.teleHandlerForm.controls['parking_brake_image'].setValue(image);
      } else if (rowName == 'clutch_gear_shift_image') {
        this.teleHandlerForm.controls['clutch_gear_shift_image'].setValue(image);
      } else if (rowName == 'engine_noise_image') {
        this.teleHandlerForm.controls['engine_noise_image'].setValue(image);
      } else if (rowName == 'dash_gauges_image') {
        this.teleHandlerForm.controls['dash_gauges_image'].setValue(image);
      } else if (rowName == 'operational_controls_image') {
        this.teleHandlerForm.controls['operational_controls_image'].setValue(image);
      } else if (rowName == 'fluid_leaks_image') {
        this.teleHandlerForm.controls['fluid_leaks_image'].setValue(image);
      } else if (rowName == 'first_aid_kit_image') {
        this.teleHandlerForm.controls['first_aid_kit_image'].setValue(image);
      }
    }, (err) => {
      console.log("errOf Image ", err)
    });

  }

  async mobileUploads(rowName) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, rowName)
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA, rowName);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async onSelectImage(event, type, rowName) {
    if (type == 1) {
      this.mobileUploads(rowName);
    } else {
      this.sharedService.getBase64(event.target.files[0]).then(image => {
        if (rowName == 'data_plate_image') {
          this.teleHandlerForm.controls['data_plate_image'].setValue(image);
        } else if (rowName == 'engine_oil_image') {
          this.teleHandlerForm.controls['engine_oil_image'].setValue(image);
        } else if (rowName == 'hydraulic_oil_image') {
          this.teleHandlerForm.controls['hydraulic_oil_image'].setValue(image);
        } else if (rowName == 'equipment_inspect_image') {
          this.teleHandlerForm.controls['equipment_inspect_image'].setValue(image);
        } else if (rowName == 'coolant_level_image') {
          this.teleHandlerForm.controls['coolant_level_image'].setValue(image);
        } else if (rowName == 'belts_and_hoses_image') {
          this.teleHandlerForm.controls['belts_and_hoses_image'].setValue(image);
        } else if (rowName == 'wheels_tyres_image') {
          this.teleHandlerForm.controls['wheels_tyres_image'].setValue(image);
        } else if (rowName == 'fire_extinguisher_image') {
          this.teleHandlerForm.controls['fire_extinguisher_image'].setValue(image);
        } else if (rowName == 'fuel_flash_image') {
          this.teleHandlerForm.controls['fuel_flash_image'].setValue(image);
        } else if (rowName == 'hydraulics_functional_image') {
          this.teleHandlerForm.controls['hydraulics_functional_image'].setValue(image);
        } else if (rowName == 'lift_arms_image') {
          this.teleHandlerForm.controls['lift_arms_image'].setValue(image);
        } else if (rowName == 'chain_hose_image') {
          this.teleHandlerForm.controls['chain_hose_image'].setValue(image);
        } else if (rowName == 'cap_bolts_image') {
          this.teleHandlerForm.controls['cap_bolts_image'].setValue(image);
        } else if (rowName == 'safety_stops_image') {
          this.teleHandlerForm.controls['safety_stops_image'].setValue(image);
        } else if (rowName == 'forks_image') {
          this.teleHandlerForm.controls['forks_image'].setValue(image);
        } else if (rowName == 'overhead_guards_image') {
          this.teleHandlerForm.controls['overhead_guards_image'].setValue(image);
        } else if (rowName == 'counterweight_image') {
          this.teleHandlerForm.controls['counterweight_image'].setValue(image);
        } else if (rowName == 'engine_bay_components_image') {
          this.teleHandlerForm.controls['engine_bay_components_image'].setValue(image);
        } else if (rowName == 'horn_image') {
          this.teleHandlerForm.controls['horn_image'].setValue(image);
        } else if (rowName == 'audible_image') {
          this.teleHandlerForm.controls['audible_image'].setValue(image);
        } else if (rowName == 'headlights_image') {
          this.teleHandlerForm.controls['headlights_image'].setValue(image);
        } else if (rowName == 'turn_signals_image') {
          this.teleHandlerForm.controls['turn_signals_image'].setValue(image);
        } else if (rowName == 'warning_brake_lights_image') {
          this.teleHandlerForm.controls['warning_brake_lights_image'].setValue(image);
        } else if (rowName == 'foot_brake_image') {
          this.teleHandlerForm.controls['foot_brake_image'].setValue(image);
        } else if (rowName == 'parking_brake_image') {
          this.teleHandlerForm.controls['parking_brake_image'].setValue(image);
        } else if (rowName == 'clutch_gear_shift_image') {
          this.teleHandlerForm.controls['clutch_gear_shift_image'].setValue(image);
        } else if (rowName == 'engine_noise_image') {
          this.teleHandlerForm.controls['engine_noise_image'].setValue(image);
        } else if (rowName == 'dash_gauges_image') {
          this.teleHandlerForm.controls['dash_gauges_image'].setValue(image);
        } else if (rowName == 'operational_controls_image') {
          this.teleHandlerForm.controls['operational_controls_image'].setValue(image);
        } else if (rowName == 'fluid_leaks_image') {
          this.teleHandlerForm.controls['fluid_leaks_image'].setValue(image);
        } else if (rowName == 'first_aid_kit_image') {
          this.teleHandlerForm.controls['first_aid_kit_image'].setValue(image);
        }
      }).catch(error => {
        console.log('error', error);
      });
    }
  }

  onDeleteImage(rowName) {
    if (rowName == 'data_plate_image') {
      this.teleHandlerForm.controls['data_plate_image'].setValue('');
    } else if (rowName == 'engine_oil_image') {
      this.teleHandlerForm.controls['engine_oil_image'].setValue('');
    } else if (rowName == 'hydraulic_oil_image') {
      this.teleHandlerForm.controls['hydraulic_oil_image'].setValue('');
    } else if (rowName == 'equipment_inspect_image') {
      this.teleHandlerForm.controls['equipment_inspect_image'].setValue('');
    } else if (rowName == 'coolant_level_image') {
      this.teleHandlerForm.controls['coolant_level_image'].setValue('');
    } else if (rowName == 'belts_and_hoses_image') {
      this.teleHandlerForm.controls['belts_and_hoses_image'].setValue('');
    } else if (rowName == 'wheels_tyres_image') {
      this.teleHandlerForm.controls['wheels_tyres_image'].setValue('');
    } else if (rowName == 'fire_extinguisher_image') {
      this.teleHandlerForm.controls['fire_extinguisher_image'].setValue('');
    } else if (rowName == 'fuel_flash_image') {
      this.teleHandlerForm.controls['fuel_flash_image'].setValue('');
    } else if (rowName == 'hydraulics_functional_image') {
      this.teleHandlerForm.controls['hydraulics_functional_image'].setValue('');
    } else if (rowName == 'lift_arms_image') {
      this.teleHandlerForm.controls['lift_arms_image'].setValue('');
    } else if (rowName == 'chain_hose_image') {
      this.teleHandlerForm.controls['chain_hose_image'].setValue('');
    } else if (rowName == 'cap_bolts_image') {
      this.teleHandlerForm.controls['cap_bolts_image'].setValue('');
    } else if (rowName == 'safety_stops_image') {
      this.teleHandlerForm.controls['safety_stops_image'].setValue('');
    } else if (rowName == 'forks_image') {
      this.teleHandlerForm.controls['forks_image'].setValue('');
    } else if (rowName == 'overhead_guards_image') {
      this.teleHandlerForm.controls['overhead_guards_image'].setValue('');
    } else if (rowName == 'counterweight_image') {
      this.teleHandlerForm.controls['counterweight_image'].setValue('');
    } else if (rowName == 'engine_bay_components_image') {
      this.teleHandlerForm.controls['engine_bay_components_image'].setValue('');
    } else if (rowName == 'horn_image') {
      this.teleHandlerForm.controls['horn_image'].setValue('');
    } else if (rowName == 'audible_image') {
      this.teleHandlerForm.controls['audible_image'].setValue('');
    } else if (rowName == 'headlights_image') {
      this.teleHandlerForm.controls['headlights_image'].setValue('');
    } else if (rowName == 'turn_signals_image') {
      this.teleHandlerForm.controls['turn_signals_image'].setValue('');
    } else if (rowName == 'warning_brake_lights_image') {
      this.teleHandlerForm.controls['warning_brake_lights_image'].setValue('');
    } else if (rowName == 'foot_brake_image') {
      this.teleHandlerForm.controls['foot_brake_image'].setValue('');
    } else if (rowName == 'parking_brake_image') {
      this.teleHandlerForm.controls['parking_brake_image'].setValue('');
    } else if (rowName == 'clutch_gear_shift_image') {
      this.teleHandlerForm.controls['clutch_gear_shift_image'].setValue('');
    } else if (rowName == 'engine_noise_image') {
      this.teleHandlerForm.controls['engine_noise_image'].setValue('');
    } else if (rowName == 'dash_gauges_image') {
      this.teleHandlerForm.controls['dash_gauges_image'].setValue('');
    } else if (rowName == 'operational_controls_image') {
      this.teleHandlerForm.controls['operational_controls_image'].setValue('');
    } else if (rowName == 'fluid_leaks_image') {
      this.teleHandlerForm.controls['fluid_leaks_image'].setValue('');
    } else if (rowName == 'first_aid_kit_image') {
      this.teleHandlerForm.controls['first_aid_kit_image'].setValue('');
    }
  }

  onSubmit() {
    // this.loadingService.presentLoading();
    this.isSubmitted = true;
    // let count = 0
    // Object.values(this.teleHandlerForm.value).forEach(key => {
    //   if (key == 'Faulty') {
    //     count++;
    //   }
    // });
    // if (count > 0) {
    //   this.showMsg = true;
    // } else {
    //   this.showMsg = false;
    // }
    if ((this.teleHandlerForm.value['data_plate'] == 'Faulty' && this.teleHandlerForm.value['data_plate_comment'] == '') ||
      (this.teleHandlerForm.value['engine_oil'] == 'Faulty' && this.teleHandlerForm.value['engine_oil_comment'] == '') ||
      (this.teleHandlerForm.value['hydraulic_oil'] == 'Faulty' && this.teleHandlerForm.value['hydraulic_oil_comment'] == '') ||
      (this.teleHandlerForm.value['equipment_inspect'] == 'Faulty' && this.teleHandlerForm.value['equipment_inspect_comment'] == '') ||
      (this.teleHandlerForm.value['coolant_level'] == 'Faulty' && this.teleHandlerForm.value['coolant_level_comment'] == '') ||
      (this.teleHandlerForm.value['belts_and_hoses'] == 'Faulty' && this.teleHandlerForm.value['belts_and_hoses_comment'] == '') ||
      (this.teleHandlerForm.value['wheels_tyres'] == 'Faulty' && this.teleHandlerForm.value['wheels_tyres_comment'] == '') ||
      (this.teleHandlerForm.value['fire_extinguisher'] == 'Faulty' && this.teleHandlerForm.value['fire_extinguisher_comment'] == '') ||
      (this.teleHandlerForm.value['fuel_flash'] == 'Faulty' && this.teleHandlerForm.value['fuel_flash_comment'] == '') ||
      (this.teleHandlerForm.value['hydraulics_functional'] == 'Faulty' && this.teleHandlerForm.value['hydraulics_functional_comment'] == '') ||
      (this.teleHandlerForm.value['lift_arms'] == 'Faulty' && this.teleHandlerForm.value['lift_arms_comment'] == '') ||
      (this.teleHandlerForm.value['chain_hose'] == 'Faulty' && this.teleHandlerForm.value['chain_hose_comment'] == '') ||
      (this.teleHandlerForm.value['cap_bolts'] == 'Faulty' && this.teleHandlerForm.value['cap_bolts_comment'] == '') ||
      (this.teleHandlerForm.value['safety_stops'] == 'Faulty' && this.teleHandlerForm.value['safety_stops_comment'] == '') ||
      (this.teleHandlerForm.value['forks'] == 'Faulty' && this.teleHandlerForm.value['forks_comment'] == '') ||
      (this.teleHandlerForm.value['overhead_guards'] == 'Faulty' && this.teleHandlerForm.value['overhead_guards_comment'] == '') ||
      (this.teleHandlerForm.value['counterweight'] == 'Faulty' && this.teleHandlerForm.value['counterweight_comment'] == '') ||
      (this.teleHandlerForm.value['engine_bay'] == 'Faulty' && this.teleHandlerForm.value['engine_bay_components_comment'] == '') ||
      (this.teleHandlerForm.value['horn'] == 'Faulty' && this.teleHandlerForm.value['horn_comment'] == '') ||
      (this.teleHandlerForm.value['audible'] == 'Faulty' && this.teleHandlerForm.value['audible_comment'] == '') ||
      (this.teleHandlerForm.value['headlights'] == 'Faulty' && this.teleHandlerForm.value['headlights_comment'] == '') ||
      (this.teleHandlerForm.value['turn_signals'] == 'Faulty' && this.teleHandlerForm.value['turn_signals_comment'] == '') ||
      (this.teleHandlerForm.value['warning_brake_lights'] == 'Faulty' && this.teleHandlerForm.value['warning_brake_lights_comment'] == '') ||
      (this.teleHandlerForm.value['foot_brake'] == 'Faulty' && this.teleHandlerForm.value['foot_brake_comment'] == '') ||
      (this.teleHandlerForm.value['parking_brake'] == 'Faulty' && this.teleHandlerForm.value['parking_brake_comment'] == '') ||
      (this.teleHandlerForm.value['clutch_gear_shift'] == 'Faulty' && this.teleHandlerForm.value['clutch_gear_shift_comment'] == '') ||
      (this.teleHandlerForm.value['engine_noise'] == 'Faulty' && this.teleHandlerForm.value['engine_noise_comment'] == '') ||
      (this.teleHandlerForm.value['dash_gauges'] == 'Faulty' && this.teleHandlerForm.value['dash_gauges_comment'] == '') ||
      (this.teleHandlerForm.value['operational_controls'] == 'Faulty' && this.teleHandlerForm.value['operational_controls_comment'] == '') ||
      (this.teleHandlerForm.value['fluid_leaks'] == 'Faulty' && this.teleHandlerForm.value['fluid_leaks_comment'] == '') ||
      (this.teleHandlerForm.value['first_aid_kit'] == 'Faulty' && this.teleHandlerForm.value['first_aid_kit_comment'] == '')) {
      // this.loadingService.dismissLoading();
      return;
    } else {
      if (this.teleHandlerForm.valid) {
        let formData = this.teleHandlerForm.value;
        formData['user_id'] = this.loggedInUser.id
        let data = { 'formData': formData };
        this.globalService.postData('Telehandler/submit', data).subscribe(result => {
          console.log('result', result);
          if (result && result['status']) {
            this.toastService.toast(result['message'], 'success');
            this.nav.back();
          } else {
            this.toastService.toast(result['message'], 'danger');
          }
        }, error => {
          console.log('error', error);
        })
        // this.loadingService.dismissLoading();
      } else {
        // this.loadingService.dismissLoading();
        return false;
      }
    }
  }

  onCompetency(event) {
    if (event.detail.value == 'Not completed') {
      this.alertService.alert('STOP do not proceed and see your supervisor to complete a VOC.')
    }
  }

  onFuelLevel(event) {
    if (event.detail.value == 'Empty') {
      this.alertService.alert('Please ensure you fill up the Telehandler prior to use.')
    }
  }

}
