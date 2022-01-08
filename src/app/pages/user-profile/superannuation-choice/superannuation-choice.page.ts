
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { environment } from 'src/environments/environment';

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

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    public navCtrl: NavController,
    private toastService: ToastService,
  ) { }

  ngOnInit() {

    this.superannuation = this.fb.group({
      super_contribution: ['RSA'],

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
    })
  }

  // onSuperContri(event) {
  //   console.log('onSuperContri', event);
  //   this.superannuation.controls['super_contribution'].setValue(event.detail.value);
  //   console.log('this.superannuation.controls',this.superannuation.value['super_contribution']);
  // }

  onSubmit() {
    if (this.superannuation.value['super_contribution'] == 'RSA' && this.superannuation.value['rsa_fund_name'] == '') {
      this.isSubmitted = true;
      return;
    }

    if (this.superannuation.valid && this.superannuation.value['completed'] == true) {
      this.isSubmitted = false;
      this.superannuation.value['guid'] = '5DFFF608-B771-48AC-8C78-DE22A161BFB3';
      this.superannuation.value['type'] = 'dyn';
      this.superannuation.value['code'] = 'form_Superannuation';

      let data = {
        // formData: {
        // 'guid': '5DFFF608-B771-48AC-8C78-DE22A161BFB3',
        // 'type': 'dyn',
        // 'code': 'form_Superannuation',
        // 'smsf_account_no': this.superannuation.value['smsf_account_no']
        // }
        formData: this.superannuation.value
      }
      console.log('data', data);
      this.globalService.postData('OnboardingSuperannuation/saveOnboarding', data).subscribe(result => {
        if (result && result['status']) {
          this.navCtrl.back();
          this.toastService.toast(result['message'], 'success');
        } else {
          this.toastService.toast(result['message'], 'danger');
        }
      })
    } else {
      this.isSubmitted = true;
    }
  }


}
