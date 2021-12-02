import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';

@Component({
  selector: 'app-crane-add-form',
  templateUrl: './crane-add-form.page.html',
  styleUrls: ['./crane-add-form.page.scss'],
})

export class CraneAddFormPage implements OnInit {

  pName: String = 'Crane';
  craneNoList = [
    {
      id: 'OHC01',
      name: 'OHC01',
    },
    {
      id: 'OHC02',
      name: 'OHC02',
    },
    {
      id: 'OHC03',
      name: 'OHC03',
    },
    {
      id: 'JC01',
      name: 'JC01',
    },
    {
      id: 'JC02',
      name: 'JC02',
    },
    {
      id: 'JC03',
      name: 'JC03',
    },
    {
      id: 'JC04',
      name: 'JC04',
    },
    {
      id: 'JC05',
      name: 'JC05',
    },
    {
      id: 'JC06',
      name: 'JC06',
    }
  ];
  craneForm: FormGroup;

  form_percent: number = 0;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private globalService: GlobalService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.craneForm = this.fb.group({
      crane_number: [''],
      operate_crane: [''],
      swi: [''],
      equipment_isolated: [''],
      inspect_pendant: [''],
      inspect_control_operation: [''],
      directional_swl_sign: [''],
      brakes_operational: [''],
      limit_switches_operational: [''],
      hook: [''],
      hoist_chain_rope: [''],
      mechanically_sound: [''],
      passed_inspection: [''],
      comment: ['']
    })
  }

  onPassedInspection(event) {
    if (event.detail.value == "No") {
      this.alertService.alert('Tag the crane out of service and report any abnormalities immediately to your supervisor.');
    }
  }

  onSubmit() {
    this.loadingService.presentLoading();
    let data = { 'formData': this.craneForm.value }
    this.globalService.postData('crane/submit', data).subscribe(result => {
      if (result && result['status']) {
        this.toastService.toast(result['message'], 'success');
        this.craneForm.reset();
        this.nav.back();
      } else {
        this.toastService.toast(result['message'], 'danger');
      }
      this.loadingService.dismissLoading();
    }, error => {
      this.loadingService.dismissLoading();
      console.log(error);
    })
  }

  onProgressBar(event) {
    let count = 0;
    let formControlList = [];
    Object.keys(this.craneForm.controls).map(ele => formControlList.push(ele));
    formControlList.forEach(key => { 
      if (this.craneForm.value[key] && this.craneForm.value[key] != '') {
        count = ++count;
      }
    })
    this.form_percent = ((1 / Object.keys(this.craneForm.controls).length) * count);
  }

}
