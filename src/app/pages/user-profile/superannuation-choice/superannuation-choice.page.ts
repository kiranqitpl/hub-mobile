
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-superannuation-choice',
  templateUrl: './superannuation-choice.page.html',
  styleUrls: ['./superannuation-choice.page.scss'],
})
export class SuperannuationChoicePage implements OnInit {

  pName: String = '';
  paidTo: String = '';
  isSubmitted: boolean = false;
  userDetails: {};
  super_contribution: string;
  attachLetter: any = '';
  superannuation: FormGroup;
  edit: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    public navCtrl: NavController,
    private toastService: ToastService,
    private sharedService: SharedService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {

    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));

    this.superannuation = this.fb.group({
      fund_abn: [''],                                                       // RSA SMSF
      fund_name: ['', Validators.pattern(environment.alphabet)],            // RSA SMSF EMPLOYER
      fund_address: [''],                                                   // RSA SMSF
      fund_sub_urb: [''],                                                   // RSA SMSF
      fund_state: ['', Validators.pattern(environment.alphabet)],           // RSA SMSF
      fund_postcode: ['', Validators.pattern(environment.numeric)],         // RSA SMSF
      fund_phone: ['', Validators.pattern(environment.numeric)],            // RSA SMSF EMPLOYER
      fund_usi: [''],                                                       // RSA EMPLOYER
      fund_account_name: ['', Validators.pattern(environment.alphabet)],    // RSA
      fund_member_number: ['', Validators.pattern(environment.numeric)],    // RSA
      fund_attachment: [''],                                               // RSA SMSF
      fund_esa: [''],                                                       // SMSF
      fund_bsb_code: ['', [Validators.pattern(environment.numeric), Validators.minLength(6), Validators.maxLength(6)]],  // SMSF                                           // SMSF
      fund_account_no: ['', Validators.pattern(environment.numeric)],   // SMSF
      fund_trustee: [''],                                                   // SMSF
      fund_attachment_confirm_letter: [''],                                 // SMSF
      fund_web_url: ['', Validators.pattern(environment.url)],              // EMPLOYER

      completed: [false],
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

  onSubmit() {
    if (
      (this.super_contribution == 'RSA' || this.super_contribution == 'EMPLOYER' || this.super_contribution == 'SMSF') &&
      this.superannuation.value['rsa_fund_abn'] == ''
    ) {
      this.isSubmitted = true;
      return;
    }

    if (this.superannuation.valid && this.superannuation.value['completed'] == true) {
      this.loadingService.presentLoading();
      this.isSubmitted = false;
      this.superannuation.value['super_contribution'] = this.super_contribution;
      this.superannuation.value['guid'] = '5DFFF608-B771-48AC-8C78-DE22A161BFB3';
      this.superannuation.value['type'] = 'dyn';
      this.superannuation.value['code'] = 'form_Superannuation';
      this.superannuation.value['user_id'] = this.userDetails['id'];
      this.superannuation.value['fund_attachment'] = this.attachLetter.length > 0 ? this.attachLetter : '';

      let data = {
        formData: this.superannuation.value
      }
      this.globalService.postData('OnboardingSuperannuation/saveSuperannuation', data).subscribe(result => {
        if (result && result['status']) {
          // this.navCtrl.back();
          this.toastService.toast(result['message'], 'success');
        } else {
          this.toastService.toast(result['message'], 'danger');
        }
        this.loadingService.dismissLoading();
      }, error => {
        console.log('error', error);
        this.loadingService.dismissLoading();
      })
    } else {
      this.isSubmitted = true;
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
      this.superannuation.controls['fund_attachment'].reset();
      this.superannuation.controls['fund_esa'].reset();
      this.superannuation.controls['fund_bsb_code'].reset();
      this.superannuation.controls['fund_account_no'].reset();
      this.superannuation.controls['fund_trustee'].reset();
      this.superannuation.controls['fund_attachment_confirm_letter'].reset();
    }
  }

  onDocPreview(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.sharedService.getBase64(event.target.files[0]).then(data => {
        this.attachLetter = data
        // if (this.attachLetter.length <= 0) {
        //   this.attachLetter.push(data);
        // } else {
        //   this.attachLetter.unshift(data);
        // }
      })
    }
  }


}
