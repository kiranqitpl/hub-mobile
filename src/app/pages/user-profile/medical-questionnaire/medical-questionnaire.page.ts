import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';

@Component({
  selector: 'app-medical-questionnaire',
  templateUrl: './medical-questionnaire.page.html',
  styleUrls: ['./medical-questionnaire.page.scss'],
})
export class MedicalQuestionnairePage implements OnInit {

  pName: String = 'Medical Questionnaire';

  treatment = [
    {
      id: 'Asthma/Bronchitis',
      name: 'Asthma/Bronchitis',
      isChecked: false
    },
    {
      id: 'Hypertension/Heart Problems',
      name: 'Hypertension/Heart Problems',
      isChecked: false
    },
    {
      id: 'High Blood Pressure',
      name: 'High Blood Pressure',
      isChecked: false
    },
    {
      id: 'Palpitations',
      name: 'Palpitations',
      isChecked: false
    },
    {
      id: 'Stroke',
      name: 'Stroke',
      isChecked: false
    },
    {
      id: 'High Cholesterol',
      name: 'High Cholesterol',
      isChecked: false
    },
    {
      id: 'A-Work Related Injury or Illness',
      name: 'A-Work Related Injury or Illness',
      isChecked: false
    },
    {
      id: 'Lung Problems',
      name: 'Lung Problems',
      isChecked: false
    },
    {
      id: 'Tuberculosis',
      name: 'Tuberculosis',
      isChecked: false
    },
    {
      id: 'Anxiety/Depression',
      name: 'Anxiety/Depression',
      isChecked: false
    },
    {
      id: 'Allergies',
      name: 'Allergies',
      isChecked: false
    },
    {
      id: 'Thyroid Problems',
      name: 'Thyroid Problems',
      isChecked: false
    },
    {
      id: 'Diabetes',
      name: 'Diabetes',
      isChecked: false
    },
    {
      id: 'Cancer or Tumour',
      name: 'Cancer or Tumour',
      isChecked: false
    },
    {
      id: 'Impairment Disability or Handicap or any type',
      name: 'Impairment Disability or Handicap or any type',
      isChecked: false
    },
    {
      id: 'Back Strain Injury',
      name: 'Back Strain Injury',
      isChecked: false
    },
    {
      id: 'Persistent Headaches/Migraines',
      name: 'Persistent Headaches/Migraines',
      isChecked: false
    },
    {
      id: 'Fits/Seizures/Epilepsy/Blackouts',
      name: 'Fits/Seizures/Epilepsy/Blackouts',
      isChecked: false
    },
    {
      id: 'Arthritis/Rheumatism',
      name: 'Arthritis/Rheumatism',
      isChecked: false
    },
    {
      id: 'Joint Problems/Fractures/Broken Bones/Dislocation',
      name: 'Joint Problems/Fractures/Broken Bones/Dislocation',
      isChecked: false
    },
    {
      id: 'Have you ever been Hospitalised',
      name: 'Have you ever been Hospitalised',
      isChecked: false
    },
    {
      id: 'Repetitive Strain Injury/Overuse Syndrome',
      name: 'Repetitive Strain Injury/Overuse Syndrome',
      isChecked: false
    },
    {
      id: 'Have you ever had any Operations',
      name: 'Have you ever had any Operations',
      isChecked: false
    },
    {
      id: 'Hernias/Rupture',
      name: 'Hernias/Rupture',
      isChecked: false
    },
    {
      id: 'Loss of Hearing',
      name: 'Loss of Hearing',
      isChecked: false
    },
    {
      id: 'Visual impairment',
      name: 'Visual impairment',
      isChecked: false
    },
    {
      id: 'Sleep problems',
      name: 'Sleep problems',
      isChecked: false
    },
    {
      id: 'Hay fever',
      name: 'Hay fever',
      isChecked: false
    },
    {
      id: 'Skin disorders/Dermatitis',
      name: 'Skin disorders/Dermatitis',
      isChecked: false
    },
    {
      id: 'Whiplash, Neck Injury',
      name: 'Whiplash, Neck Injury',
      isChecked: false
    },
    {
      id: 'Mental or Nervous Disorder',
      name: 'Mental or Nervous Disorder',
      isChecked: false
    },
    {
      id: 'Back/Neck problems',
      name: 'Back/Neck problems',
      isChecked: false
    },
    {
      id: 'Defect in sight of either eye (not including glasses)',
      name: 'Defect in sight of either eye (not including glasses)',
      isChecked: false
    },
    {
      id: 'Skin Cancer',
      name: 'Skin Cancer',
      isChecked: false
    },
    {
      id: 'Sporting Injuries',
      name: 'Sporting Injuries',
      isChecked: false
    },
    {
      id: 'Blood in urine',
      name: 'Blood in urine',
      isChecked: false
    },
    {
      id: 'Stomach Problems/Ulcers',
      name: 'Stomach Problems/Ulcers',
      isChecked: false
    },
    {
      id: 'Unexplained weight loss',
      name: 'Unexplained weight loss',
      isChecked: false
    },
    {
      id: 'Varicose veins',
      name: 'Varicose veins',
      isChecked: false
    },
    {
      id: 'Difficulty in passing urine',
      name: 'Difficulty in passing urine',
      isChecked: false
    },
    {
      id: 'Bowel problems',
      name: 'Bowel problems',
      isChecked: false
    }
  ];

  isSubmitted: Boolean = false;
  userDetails: {};
  edit: Boolean = false;
  medicalForm: FormGroup;
  receivedTreatment = [];

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.medicalForm = this.fb.group({
      received_treatment: [''],
      received_treatment_details: [''],
      injury_time_off: ['', Validators.required],
      currently_treated: ['', Validators.required],
      taking_medication: ['', Validators.required],
      seen_doctor: ['', Validators.required],
      personal_protective_equipment: ['', Validators.required],
      affected_Heights: ['', Validators.required],
      suffer_from_allergies: ['', Validators.required],
      excessive_noise: ['', Validators.required],
      hazardous_chemicals: ['', Validators.required],
      health_problems: ['', Validators.required],
      workers_compensation_claim: ['', Validators.required],
      workers_compensation_claim_in_the_past: ['', Validators.required],
      pre_existing_injuries: ['', Validators.required],
      last_tetanus_injection: ['', Validators.required],
      medical_advice_details: [''],
      manufacturing: ['', Validators.required],
      normal_working_hours: ['', Validators.required],
      shift_work: ['', Validators.required],
      right_to_work_in_australia: ['', Validators.required],
      criminal_offence: ['', Validators.required],
      work_performanc: ['', Validators.required],
      miscellaneous_details: ['']
    })
    this.onLoadData();
  }

  onLoadData() {
    // this.loadingService.presentLoading();
    this.globalService.getData('OnboardingSuperannuation/getEmployeeMedicalQuestionnair/' + this.userDetails['id']).subscribe(result => {
      if (result && result['status'] && result['data'] && result['data'][0]) {

        this.edit = true;
        this.pName = 'Edit Medical Questionnaire';

        console.log('hhhh', result['data'][0]['received_treatment']);

        // this.receivedTreatment = result['data'][0]['received_treatment'].length > 0 ? result['data'][0]['received_treatment'] : [];

        if (result['data'][0]['received_treatment'] && result['data'][0]['received_treatment'].length && result['data'][0]['received_treatment'].length > 0) {
          for (let i = 0; i < result['data'][0]['received_treatment'].length; i++) {
            this.receivedCheckBoxTreatment(result['data'][0]['received_treatment'][i]);
          }
          for (let i = 0; i < result['data'][0]['received_treatment'].length; i++) {
            this.receivedTreatment.push(result['data'][0]['received_treatment'][i]);
          }
        }

        console.log('this.receivedTreatment', this.receivedTreatment);

        this.medicalForm.controls['received_treatment'].setValue(this.receivedTreatment);
        this.medicalForm.patchValue(result['data'][0]);

      } else {
        this.edit = false;
        this.pName = 'Medical Questionnaire';
      }
      // this.loadingService.dismissLoading();
    }, error => {
      // this.loadingService.dismissLoading();
      console.log('error', error);
    })
  }

  receivedCheckBoxTreatment(value) {
    this.treatment.find((ele, index) => {
      if (ele.name == value ) {
        ele.isChecked = true
      }
    })
  }

  onReceivedTreatment(event) {
    this.receivedCheckBoxTreatment(event.detail.value);
    if (this.receivedTreatment.length <= 0) {
      this.receivedTreatment.push(event.detail.value);
    } else {
      let result = [];
      if (this.receivedTreatment.length > 0) {
        this.receivedTreatment.filter((ele, index) => {
          if (ele == event.detail.value) {
            result['ele'] = ele;
            result['index'] = index;
            return result;
          }
        })
      }

      if (result && result['ele'] && result['ele'] != '') {
        this.receivedTreatment.splice(result['index'], 1);
      } else {
        this.receivedTreatment.push(event.detail.value);
      }
    }
    // console.log('this.receivedTreatment', this.receivedTreatment);
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log('this.medicalForm 1', this.receivedTreatment);
    if (this.medicalForm.valid) {
      // this.loadingService.presentLoading();
      this.medicalForm.value['user_id'] = this.userDetails['id'];
      this.medicalForm.value['received_treatment'] = this.receivedTreatment.length > 0 ? this.receivedTreatment : '';
      // this.medicalForm.value['received_treatment'] ='';
      console.log('this.medicalForm.value', this.medicalForm.value);
      let formData = { formData: this.medicalForm.value };

      console.log('formData',formData);
      this.globalService.postData('OnboardingSuperannuation/saveEmployeeMedicalQuestionnair', formData).subscribe(result => {
        if (result && result['status']) {
          // this.navCtrl.back();
          this.toastService.toast(result['message'], 'success');
        } else {
          this.toastService.toast(result['message'], 'danger');
        }
        // this.loadingService.dismissLoading();
      }, error => {
        // this.loadingService.dismissLoading();
        console.log('error', error);
      })
    }
  }

}
