
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

  pName: String = 'Superannuation Choice';
  paidTo: String = '';
  superannuation: FormGroup;
  isSubmitted: boolean = false;
  userDetails: {};
  super_contribution: String = 'RSA';
  rsaAttachLetter = [];

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
      // super_contribution: ['RSA'],

      rsa_fund_abn: [''],
      rsa_fund_name: ['', Validators.pattern(environment.alphabet)],
      rsa_fund_address: [''],
      rsa_suburb: [''],
      rsa_state: ['', Validators.pattern(environment.alphabet)],
      rsa_postcode: ['', Validators.pattern(environment.numeric)],
      rsa_fund_phone: ['', Validators.pattern(environment.numeric)],
      rsa_usi: [''],
      rsa_account_no: ['', Validators.pattern(environment.alphabet)],
      rsa_member_number: ['', Validators.pattern(environment.numeric)],
      rsa_attach_compliance_letter: [''],

      smsf_fund_abn: [''],
      smsf_fund_name: ['', Validators.pattern(environment.alphabet)],
      smsf_fund_address: [''],
      smsf_suburb: ['', Validators.pattern(environment.alphabet)],
      smsf_state: ['', Validators.pattern(environment.alphabet)],
      smsf_postcode: ['', Validators.pattern(environment.numeric)],
      smsf_fund_phone: ['', Validators.pattern(environment.numeric)],
      smsf_esa: [''],
      smsf_bsb_code: [''],
      smsf_account_no: ['', Validators.pattern(environment.numeric)],
      smsf_attach_compliance_doc: [''],
      smsf_trustee: [''],
      smsf_attatch_confir_letter: [''],

      employee_fund_name: ['', Validators.pattern(environment.alphabet)],
      employee_usi: [''],
      employee_phone: ['', Validators.pattern(environment.numeric)],
      employee_fund_weburl: [''],

      completed: [false],
    });

    this.onLoadData();
  }

  onFormSelection(event) {
    this.superannuation.reset();
  }


  onLoadData() {
    this.globalService.getData('OnboardingSuperannuation/getSuperannuation/' + this.userDetails['id']).subscribe(result => {
      console.log('result', result);
    })
  }

  onSubmit() {
    if (
      (this.super_contribution == 'RSA' && this.superannuation.value['rsa_fund_abn'] == '') ||
      (this.super_contribution == 'SMSF' && this.superannuation.value['smsf_fund_abn'] == '') ||
      (this.super_contribution == 'emploper' && this.superannuation.value['employee_fund_name'] == '')
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
      this.superannuation.value['rsa_attach_compliance_letter'] = this.rsaAttachLetter.length > 0 ? this.rsaAttachLetter : [];

      let data = {
        formData: this.superannuation.value
      }
      this.globalService.postData('OnboardingSuperannuation/saveSuperannuation', data).subscribe(result => {
        if (result && result['status']) {
          this.navCtrl.back();
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

  onDocPreview(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.sharedService.getBase64(event.target.files[0]).then(data => {
        console.log('data', data);
        if (this.rsaAttachLetter.length <= 0) {
          this.rsaAttachLetter.push(data);
        } else {
          this.rsaAttachLetter.unshift(data);
        }
      })
    }
  }


}
