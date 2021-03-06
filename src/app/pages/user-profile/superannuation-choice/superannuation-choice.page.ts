import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-superannuation-choice',
  templateUrl: './superannuation-choice.page.html',
  styleUrls: ['./superannuation-choice.page.scss'],
})
export class SuperannuationChoicePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('target') myScrollContainer: ElementRef;

  pName: String = 'Superannuation Choice';
  paidTo: String = '';
  isSubmitted: boolean = false;
  userDetails: {};
  super_contribution: string;
  superannuation: FormGroup;
  edit: Boolean = false;

  form_percent: number = 0;
  form_percent_val: number = 0;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    public nav: NavController,
    private toastService: ToastService,
    private sharedService: SharedService,
    // private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.superannuation = this.fb.group({
      fund_abn: [''],                                                                                                   // RSA SMSF
      fund_name: ['', Validators.pattern(environment.alphabet)],                                                        // RSA SMSF EMPLOYER
      fund_address: [''],                                                                                               // RSA SMSF
      fund_sub_urb: [''],                                                                                               // RSA SMSF
      fund_state: ['', Validators.pattern(environment.alphabet)],                                                       // RSA SMSF
      fund_postcode: ['', Validators.pattern(environment.numeric)],                                                     // RSA SMSF
      fund_phone: ['', Validators.pattern(environment.numeric)],                                                        // RSA SMSF EMPLOYER
      fund_usi: [''],                                                                                                   // RSA EMPLOYER
      fund_account_name: ['', Validators.pattern(environment.alphabet)],                                                // RSA
      fund_member_number: ['', Validators.pattern(environment.numeric)],                                                // RSA
      fund_attachement: [''],                                                                                            // RSA SMSF
      fund_esa: [''],                                                                                                   // SMSF
      fund_bsb_code: ['', [Validators.pattern(environment.numeric), Validators.minLength(6), Validators.maxLength(6)]], // SMSF                                           // SMSF
      fund_account_no: ['', Validators.pattern(environment.numeric)],                                                   // SMSF
      fund_trustee: [''],                                                                                               // SMSF
      fund_attachment_confirm_letter: [''],                                                                             // SMSF
      fund_web_url: ['', Validators.pattern(environment.url)],                                                          // EMPLOYER
      completed: [false],                                                                                               // RSA SMSF EMPLOYER
    });
    this.onLoadData();
  }

  onLoadData() {
    // this.loadingService.presentLoading();
    this.globalService.getData('OnboardingSuperannuation/getSuperannuation/' + this.userDetails['id']).subscribe(result => {
      if (result && result['status'] && result['data'] && result['data'][0]) {
        this.edit = true;
        this.pName = 'Edit Superannuation Choice';
        this.super_contribution = result['data'][0].super_annuation;
        this.superannuation.patchValue(result['data'][0]);
      } else {
        this.edit = false;
        this.pName = 'Superannuation Choice';
        this.super_contribution = 'RSA';
      }
      // this.loadingService.dismissLoading();
    }, error => {
      // this.loadingService.dismissLoading();
      console.log('error', error);
    })
  }

  onSubmit(complete_status) {
    if (
      (this.super_contribution == 'RSA' || this.super_contribution == 'EMPLOYER' || this.super_contribution == 'SMSF') &&
      this.superannuation.value['rsa_fund_abn'] == ''
    ) {
      return this.isSubmitted = true;
    }

    if (this.superannuation.valid) {
      // this.loadingService.presentLoading();
      this.superannuation.value['super_contribution'] = this.super_contribution;

      let formData = this.superannuation.value;
      formData['guid'] = '5DFFF608-B771-48AC-8C78-DE22A161BFB3';
      formData['type'] = 'dyn';
      formData['code'] = 'form_Superannuation';
      formData['user_id'] = this.userDetails['id'];
      formData['completed'] = complete_status;

      this.globalService.postData('OnboardingSuperannuation/saveSuperannuation', { formData: formData }).subscribe(result => {
        if (result && result['status']) {
          this.superannuation.reset();
          this.onLoadData();
          this.toastService.toast(result['message'], 'success');
        } else {
          this.toastService.toast(result['message'], 'danger');
        }
        // this.loadingService.dismissLoading();
      }, error => {
        console.log('error', error);
        // this.loadingService.dismissLoading();
      })
    }
  }

  onFormSelection(event) {
    // if (this.edit == false) {
    //   this.superannuation.reset();
    // }
    if (this.super_contribution == 'RSA') {
      this.superannuation.controls['fund_esa'].reset();
      this.superannuation.controls['fund_bsb_code'].reset();
      this.superannuation.controls['fund_account_no'].reset();
      this.superannuation.controls['fund_trustee'].reset();
      this.superannuation.controls['fund_attachment_confirm_letter'].reset();
      this.superannuation.controls['fund_web_url'].reset();
    } else if (this.super_contribution == 'SMSF') {
      this.superannuation.controls['fund_usi'].reset();
      this.superannuation.controls['fund_account_name'].reset();
      this.superannuation.controls['fund_member_number'].reset();
      this.superannuation.controls['fund_web_url'].reset();
    } else if (this.super_contribution == 'EMPLOYER') {
      this.superannuation.controls['fund_abn'].reset();
      this.superannuation.controls['fund_address'].reset();
      this.superannuation.controls['fund_sub_urb'].reset();
      this.superannuation.controls['fund_state'].reset();
      this.superannuation.controls['fund_postcode'].reset();
      this.superannuation.controls['fund_account_name'].reset();
      this.superannuation.controls['fund_member_number'].reset();
      this.superannuation.controls['fund_attachement'].reset();
      this.superannuation.controls['fund_esa'].reset();
      this.superannuation.controls['fund_bsb_code'].reset();
      this.superannuation.controls['fund_account_no'].reset();
      this.superannuation.controls['fund_trustee'].reset();
      this.superannuation.controls['fund_attachment_confirm_letter'].reset();
    }
    this.onProgressBar('');
  }

  onDocPreview(event, key) {
    if (event && event.target && event.target.files && event.target.files[0] && event.target.files[0].type) {
      if (event.target.files[0].type == 'application/pdf') {
        this.sharedService.getBase64(event.target.files[0]).then(data => {
          this.superannuation.controls[key].setValue(data);
          this.onProgressBar('');
        })
      } else {
        this.toastService.toast('Please select PDF format document only.', 'danger');
        this.onProgressBar('');
      }
    }
  }

  onDownloadPdf(file, fileName) {
    this.sharedService.downloadPdf(file, fileName);
  }

  onImageDelete(variableName) {
    this.superannuation.controls[variableName].setValue('');
    this.onProgressBar('');
  }

  onProgressBar(event) {
    // this.content.scrollToPoint(0, this.myScrollContainer.nativeElement.scrollHeight, 6000);
    this.sharedService.autoScroll(this.content, this.myScrollContainer);
    let formControlList = [];

    if (this.super_contribution == 'RSA') {
      Object.keys(this.superannuation.controls).map(ele => {
        if (ele != 'fund_esa' && ele != 'fund_bsb_code' && ele != 'fund_account_no' &&
          ele != 'fund_trustee' && ele != 'fund_attachment_confirm_letter' && ele != 'fund_web_url') {
          formControlList.push(ele);
        }
      });
    } else if (this.super_contribution == 'SMSF') {
      Object.keys(this.superannuation.controls).map(ele => {
        if (ele != 'fund_account_name' && ele != 'fund_member_number' && ele != 'fund_web_url' && ele != 'fund_usi') {
          formControlList.push(ele);
        }
      });
    } else if (this.super_contribution == 'EMPLOYER') {
      Object.keys(this.superannuation.controls).map(ele => {                                                                                                  // RSA EMPLOYER                                                                         // SMSF
        if (ele == 'fund_name' || ele == 'fund_phone' || ele == 'fund_usi' ||
          ele == 'fund_web_url' || ele == 'completed') {
          formControlList.push(ele);
        }
      });
    }
    let data = this.sharedService.progressBar(formControlList, this.superannuation);
    this.form_percent = data['form_percent'];
    this.form_percent_val = data['form_percent_val'];
  }
}
