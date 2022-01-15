import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import moment from 'moment';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.page.html',
  styleUrls: ['./bank-account.page.scss'],
})
export class BankAccountPage implements OnInit {

  pName: String = '';
  isSubmitted: Boolean = false;
  userDetails: {};
  edit: Boolean = false;
  bankAccountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.bankAccountForm = this.fb.group({
      form_date: [''],
      bank: ['', [Validators.required, Validators.pattern(environment.alphabet)]],
      branch: ['', Validators.pattern(environment.alphabet)],
      bsb_number: ['', Validators.pattern(environment.numeric)],
      account_number: ['', Validators.pattern(environment.numeric)],
      name: ['', Validators.pattern(environment.alphabet)],
      amount: ['', Validators.pattern(environment.amount)],
      other_bank: ['', [Validators.required, Validators.pattern(environment.alphabet)]],
      other_branch: ['', Validators.pattern(environment.alphabet)],
      other_bsb_number: ['', Validators.pattern(environment.numeric)],
      other_account_number: ['', Validators.pattern(environment.numeric)],
      other_name: ['', Validators.pattern(environment.alphabet)],
      other_amount: ['', Validators.pattern(environment.amount)],
    })
    this.onLoadData();
  }

  onLoadData() {
    // this.loadingService.presentLoading();
    this.globalService.getData('OnboardingSuperannuation/getEmployeeBankDetails/' + this.userDetails['id']).subscribe(result => {
      if (result && result['status'] && result['data'] && result['data'][0]) {
        this.edit = true;
        this.pName = 'Edit Employee Bank Account Details';
        this.bankAccountForm.patchValue(result['data'][0]);
      } else {
        this.edit = false;
        this.pName = 'Employee Bank Account Details';
      }
      // this.loadingService.dismissLoading();
    }, error => {
      // this.loadingService.dismissLoading();
      console.log('error', error);
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.bankAccountForm.valid) {
      // this.loadingService.presentLoading();
      this.bankAccountForm.controls['form_date'].setValue(this.bankAccountForm.value['form_date'] != '' ? moment(this.bankAccountForm.value['form_date']).format("DD-MM-YYYY") : '');
      this.bankAccountForm.value['user_id'] = this.userDetails['id'];
      let formData = { formData: this.bankAccountForm.value };
      this.globalService.postData('OnboardingSuperannuation/saveEmployeeBankDetails', formData).subscribe(result => {
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
