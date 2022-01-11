import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

// import { FileOpener } from '@ionic-native/file-opener';
// import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';

import { SharedService } from 'src/app/services/shared-service/shared.service';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { ImageModalPage } from 'src/app/modals/image-modal/image-modal.page';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  pName: String = 'Personal Details';
  salutation = [
    {
      id: 'Miss.',
      val: 'Miss.',
    },
    {
      id: 'Mrs.',
      val: 'Mrs.',
    },
    {
      id: 'Mr.',
      val: 'Mr.',
    },
  ];
  gender = [
    {
      id: 'Male',
      val: 'Male',
    },
    {
      id: 'Female',
      val: 'Female',
    },
    {
      id: 'Other',
      val: 'Other',
    },
  ];
  high_risk_licence = [
    {
      id: 'LF - Forklift ',
      val: 'LF - Forklift ',
      isChecked: false
    },
    {
      id: 'RB - Rigging Basic Certification',
      val: 'RB - Rigging Basic Certification',
      isChecked: false
    },
    {
      id: 'DG - Dogging',
      val: 'DG - Dogging',
      isChecked: false
    },

    {
      id: 'CN - Non-Slew Mobile Crane (Over 3 Tonne)',
      val: 'CN - Non-Slew Mobile Crane (Over 3 Tonne)',
      isChecked: false
    },
    {
      id: 'C2 - Slewing Mobile Crane 20t',
      val: 'C2 - Slewing Mobile Crane 20t',
      isChecked: false
    },
    {
      id: 'C6 - Slewing Mobile Crane up to 60t',
      val: 'C6 - Slewing Mobile Crane up to 60t',
      isChecked: false
    },

    {
      id: 'CB - Bridge & Gantry Crane',
      val: 'CB - Bridge & Gantry Crane',
      isChecked: false
    },
    {
      id: 'CV - Vehicle Loading Crane under 10 tonne',
      val: 'CV - Vehicle Loading Crane under 10 tonne',
      isChecked: false
    },
    {
      id: 'SB - Scaffolding Basic',
      val: 'SB - Scaffolding Basic',
      isChecked: false
    },

    {
      id: 'LO - Forklift Order Picking Truck',
      val: 'LO - Forklift Order Picking Truck',
      isChecked: false
    },
    {
      id: 'RI - Rigging Intermediate',
      val: 'RI - Rigging Intermediate',
      isChecked: false
    },
    {
      id: 'SA - Scaffolding Advanced',
      val: 'SA - Scaffolding Advanced',
      isChecked: false
    },

    {
      id: 'RA - Rigging Advanced',
      val: 'RA - Rigging Advanced',
      isChecked: false
    },
    {
      id: 'PB - Concrete Placing Booms',
      val: 'PB - Concrete Placing Booms',
      isChecked: false
    },
    {
      id: 'SI - Scaffolding Intermediate',
      val: 'SI - Scaffolding Intermediate',
      isChecked: false
    },

    {
      id: 'CT - Tower Crane',
      val: 'CT - Tower Crane',
      isChecked: false
    },
    {
      id: 'C0 - Slewing Mobile Crane over 100t',
      val: 'C0 - Slewing Mobile Crane over 100t',
      isChecked: false
    },
    {
      id: 'HM - Materials Hoists',
      val: 'HM - Materials Hoists',
      isChecked: false
    },

    {
      id: 'WP - Elevated Work Platform',
      val: 'WP - Elevated Work Platform',
      isChecked: false
    },
  ];

  userProfileForm: FormGroup;
  highRiskLicences = [];
  riDocs = [];
  isSubmitted: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private sharedService: SharedService,
    private modalController: ModalController,
    // private fileOpener: FileOpener
    // private documentViewer: DocumentViewer
    private loadingService: LoadingService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.userProfileForm = this.fb.group({
      salutation: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.pattern(environment.alphabet)]],
      middel_name: ['', Validators.pattern(environment.alphabet)],
      last_name: ['', Validators.pattern(environment.alphabet)],
      residential_address: [''],
      town: ['', Validators.pattern(environment.alphabet)],
      state: ['', Validators.pattern(environment.alphabet)],
      postcode: ['', Validators.pattern(environment.numeric)],
      dob: [''],
      pob: ['', Validators.pattern(environment.alphabet)],
      mobile_no: ['', Validators.pattern(environment.numeric)],
      email: [''],
      gender: [''],
      usi_number: [''],
      sap_number: [''],
      drivers_licence_number: [''],
      drivers_licence_type: [''],
      kin_name: ['', Validators.pattern(environment.alphabet)],
      kin_relationship: ['', Validators.pattern(environment.alphabet)],
      kin_home_address: [''],
      kin_mobile_no: ['', Validators.pattern(environment.numeric)],
      high_risk_licences: [''],
      other_qualification: [''],

      ri_expiry_date: [''],
      ri_document: [''],

      fire_warden_expiry_date: [''],
      fire_warden_document: [''],

      drivers_licence_C_expiry_date: [''],
      drivers_licence_C_document: [''],
    })
  }

  onHighRiskLicences(event) {
    this.high_risk_licence.find(ele => {
      if (ele.val == event.detail.value) {
        ele.isChecked = true
      }
    })
    this.highRiskLicences.push(event.detail.value);
    this.userProfileForm.controls['high_risk_licences'].setValue(this.highRiskLicences);
  }

  onSelectImage(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[0].type == 'application/pdf') {
        let dataObject = {
          type: 'pdf',
          val: event.target.files[0]
        }
        if (this.riDocs.length <= 0) {
          this.riDocs.push(dataObject);
        } else {
          this.riDocs.unshift(dataObject);
        }
      } else {
        this.sharedService.getBase64(event.target.files[i]).then(
          data => {
            let imageObject = {
              type: 'image',
              val: data
            }
            if (this.riDocs.length <= 0) {
              this.riDocs.push(imageObject);
            } else {
              this.riDocs.unshift(imageObject);
            }
            this.userProfileForm.controls['ri_document'].setValue(this.riDocs);
            // this.onProgressBar('', '');
          }).catch(error => {
            console.log('error', error);
          });
      }
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

  onOpenPdf(val) {
    // const options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }
    // this.documentViewer.viewDocument(val, 'application/pdf', options);
  }

  onImageDelete(index, variableName) {
    this[variableName].splice(index, 1);
    // this.onProgressBar('', '');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.userProfileForm.valid) {

      this.loadingService.presentLoading();
      console.log('userProfileForm', this.userProfileForm.value);
      let formData = { formData: this.userProfileForm.value };
      this.globalService.postData('OnboardingSuperannuation/saveProfileDetails', formData).subscribe(result => {
        if (result && result['status'] && result['data'] && result['data'][0]) {
          // this.edit = true;
          // this.pName = 'Edit Superannuation Choice';
          this.userProfileForm.patchValue(result['data'][0]);
        } else {
          // this.edit = false;
          // this.pName = 'Superannuation Choice';
        }
        this.loadingService.dismissLoading();
      }, error => {
        this.loadingService.dismissLoading();
        console.log('error', error);
      })
      // } else {
      //   this.toastService.toast('Please enter correct values', 'danger')
    }
  }

}
