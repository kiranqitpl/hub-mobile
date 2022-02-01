import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { environment } from 'src/environments/environment';
import { IonContent, NavController } from '@ionic/angular';
import moment from 'moment';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.page.html',
  styleUrls: ['./bank-account.page.scss'],
})
export class BankAccountPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('target') myScrollContainer: ElementRef;

  pName: String = 'Employee Bank Account Details';
  isSubmitted: Boolean = false;
  userDetails: {};
  edit: Boolean = false;
  bankAccountForm: FormGroup;

  form_percent: number = 0;
  form_percent_val: number = 0;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    // private loadingService: LoadingService,
    private toastService: ToastService,
    public nav: NavController,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.bankAccountForm = this.fb.group({
      form_date: [''],
      bank: ['', Validators.pattern(environment.alphabet)],
      branch: ['', Validators.pattern(environment.alphabet)],
      bsb_number: ['', Validators.pattern(environment.numeric)],
      account_number: ['', Validators.pattern(environment.numeric)],
      name: ['', Validators.pattern(environment.alphabet)],
      amount: ['', Validators.pattern(environment.amount)],
      other_bank: ['', [Validators.pattern(environment.alphabet)]],
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
      this.onProgressBar('');
      // this.loadingService.dismissLoading();
    }, error => {
      // this.loadingService.dismissLoading();
      console.log('error', error);
    })
  }

  onSubmit(complete_status) {
    if (this.bankAccountForm.valid) {
      // this.loadingService.presentLoading();
      this.bankAccountForm.controls['form_date'].setValue(this.bankAccountForm.value['form_date'] != '' ? moment(this.bankAccountForm.value['form_date']).format("DD-MM-YYYY") : '');
      let formData = this.bankAccountForm.value;

      formData['user_id'] = this.userDetails['id'];
      formData['complete_status'] = complete_status;

      this.globalService.postData('OnboardingSuperannuation/saveEmployeeBankDetails', { formData: formData }).subscribe(result => {
        if (result && result['status']) {
          // this.navCtrl.back();
          this.bankAccountForm.reset();
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


  onResetForm() {

  }

  onProgressBar(event) {
    this.sharedService.autoScroll(this.content, this.myScrollContainer);
    let formControlList = [];
    Object.keys(this.bankAccountForm.controls).map(ele => formControlList.push(ele));
    let data = this.sharedService.progressBar(formControlList, this.bankAccountForm);
    this.form_percent = data['form_percent'];
    this.form_percent_val = data['form_percent_val'];
  }

}
