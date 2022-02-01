import { Component, ElementRef, OnInit, ViewChild ,ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-medical-questionnaire',
  templateUrl: './medical-questionnaire.page.html',
  styleUrls: ['./medical-questionnaire.page.scss'],
})
export class MedicalQuestionnairePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('target') myScrollContainer: ElementRef;

  pName: String = 'Medical Questionnaire';

  form_percent: number = 0;
  form_percent_val: number = 0;

  received_treatment = [
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
    // private loadingService: LoadingService,
    private toastService: ToastService,
    public nav: NavController,
    private sharedService: SharedService,
    private cd :ChangeDetectorRef) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.medicalForm = this.fb.group({
      received_treatment: [''],
      received_treatment_details: [''],
      injury_time_off: [''],
      currently_treated: [''],
      taking_medication: [''],
      seen_doctor: [''],
      personal_protective_equipment: [''],
      affected_Heights: [''],
      suffer_from_allergies: [''],
      excessive_noise: [''],
      hazardous_chemicals: [''],
      health_problems: [''],
      workers_compensation_claim: [''],
      workers_compensation_claim_in_the_past: [''],
      pre_existing_injuries: [''],
      last_tetanus_injection: [''],
      medical_advice_details: [''],
      manufacturing: [''],
      normal_working_hours: [''],
      shift_work: [''],
      right_to_work_in_australia: [''],
      criminal_offence: [''],
      work_performanc: [''],
      miscellaneous_details: ['']
    })

    this.onLoadData();
  }

  ngAfterViewInit() {
    // setTimeout(() => {
      
    //   this.onLoadData();
    // }, 0);

    this.cd.detectChanges();
  }

  onLoadData() {
    // this.loadingService.presentLoading();
    this.globalService.getData('OnboardingSuperannuation/getEmployeeMedicalQuestionnair/' + this.userDetails['id']).subscribe(result => {
      if (result && result['status'] && result['data'] && result['data'][0]) {
        this.edit = true;
        this.pName = 'Edit Medical Questionnaire';
        if (result['data'][0]['received_treatment'] && result['data'][0]['received_treatment'].length && result['data'][0]['received_treatment'].length > 0) {
          for (let i = 0; i < result['data'][0]['received_treatment'].length; i++) {
            this.receivedCheckBoxTreatment(result['data'][0]['received_treatment'][i]);
            // }
            // for (let i = 0; i < result['data'][0]['received_treatment'].length; i++) {
            this.receivedTreatment.push(result['data'][0]['received_treatment'][i]);
          }
        }
        this.medicalForm.patchValue(result['data'][0]);
      } else {
        this.edit = false;
        this.pName = 'Medical Questionnaire';
      }
      this.onProgressBar('');
      // this.loadingService.dismissLoading();
    }, error => {
      // this.loadingService.dismissLoading();
      console.log('error', error);
    })
  }

  receivedCheckBoxTreatment(value) {
    this.received_treatment.find((ele, index) => {
      if (ele.name == value) {
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
    this.medicalForm.controls['received_treatment'].setValue(this.receivedTreatment.length > 0 ? this.receivedTreatment : '');
  }

  onSubmit(complete_status) {
    this.isSubmitted = true;
    if (this.medicalForm.valid) {
      // this.loadingService.presentLoading();
      let formData = this.medicalForm.value;
      formData['user_id'] = this.userDetails['id'];
      formData['complete_status'] = complete_status;
      this.globalService.postData('OnboardingSuperannuation/saveEmployeeMedicalQuestionnair', { formData: formData }).subscribe(result => {
        if (result && result['status']) {
          // this.navCtrl.back();
          this.medicalForm.reset();
          this.onLoadData();
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

  onProgressBar(event) {
    this.sharedService.autoScroll(this.content, this.myScrollContainer);
    // this.content.scrollToPoint(0, this.myScrollContainer.nativeElement.scrollHeight, 6000);
    let formControlList = [];
    Object.keys(this.medicalForm.controls).map(ele => formControlList.push(ele));
    let data = this.sharedService.progressBar(formControlList, this.medicalForm);
    this.form_percent = data['form_percent'];
    this.form_percent_val = data['form_percent_val'];
  }

}
