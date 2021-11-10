import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'
import { GlobalService } from '../../services/global-service/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  
  ionicForm: FormGroup;
  isSubmitted = false;
  imageUrl = environment.imageUrl;


  constructor(
    private nav: NavController,
    private global: GlobalService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) { }

  get errorControl() {
    return this.ionicForm.controls
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  submitForm() {
    this.isSubmitted = true
    if (this.ionicForm.valid) {
      this.global.presentLoading();
      const fd = new FormData();
      fd.append("email", this.ionicForm.value.email);
      fd.append("password", this.ionicForm.value.password);
      this.global.postData1("user/login", fd).subscribe((res: any) => {
        if (res.status) {
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("role", res.data.role);
          localStorage.setItem("id", res?.data?.id);
          localStorage.setItem("name", res?.data?.full_name);
          this.nav.navigateRoot('dashboard')
          this.toastService.toast(res.message, 'success');
        } else {
          this.toastService.toast(res.message, 'danger');
        }
        this.global.dismissLoading();
      }, err => {
        this.global.dismissLoading();
        console.log("errs", err)
      })
    } else {
      return false
    }
  }
}
