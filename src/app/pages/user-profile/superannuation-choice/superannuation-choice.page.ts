
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global-service/global.service';

@Component({
  selector: 'app-superannuation-choice',
  templateUrl: './superannuation-choice.page.html',
  styleUrls: ['./superannuation-choice.page.scss'],
})
export class SuperannuationChoicePage implements OnInit {

  pName: String = 'Superannuation Choice';
  paidTo: String = '';
  superannuation: FormGroup;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService
  ) { }

  ngOnInit() {

    this.superannuation = this.fb.group({
      super_contribution: ['RSA'],

      rsa_fund_abn: [''],
      rsa_fund_name: [''],
      rsa_fund_address: [''],
      rsa_suburb: [''],
      rsa_state: [''],
      rsa_postcode: [''],
      rsa_fund_phone: [''],
      rsa_usi: [''],
      rsa_account_no: [''],
      rsa_member_number: [''],
      rsa_attach_compliance_letter: [''],

      smsf_fund_abn: [''],
      smsf_fund_name: [''],
      smsf_fund_address: [''],
      smsf_suburb: [''],
      smsf_state: [''],
      smsf_postcode: [''],
      smsf_fund_phone: [''],
      smsf_esa: [''],
      smsf_bsb_code: [''],
      smsf_account_no: [''],
      smsf_attach_compliance_doc: [''],
      smsf_trustee: [''],
      smsf_attatch_confir_letter: [''],

      employee_fund_name: [''],
      employee_usi: [''],
      employee_phone: [''],
      employee_fund_weburl: [''],

      completed: [''],
    })
  }

  // onSuperContri(event) {
  //   console.log('onSuperContri', event);
  //   this.superannuation.controls['super_contribution'].setValue(event.detail.value);
  //   console.log('this.superannuation.controls',this.superannuation.value['super_contribution']);
  // }


  onSubmit() {
    console.log(this.superannuation.value);
    this.superannuation.value['guid'] = '5DFFF608-B771-48AC-8C78-DE22A161BFB3';
    this.superannuation.value['type'] = 'dyn';
    this.superannuation.value['code'] = 'form_Superannuation';

    let data = {
      formData: {
        'guid': '5DFFF608-B771-48AC-8C78-DE22A161BFB3',
        'type': 'dyn',
        'code': 'form_Superannuation',
        'smsf_account_no': this.superannuation.value['smsf_account_no']
      }
    }
    console.log('data', data);
    this.globalService.postData('OnboardingSuperannuation/saveOnboarding', data).subscribe(res => {
      console.log('jjjj', res);
    })

  }

}
