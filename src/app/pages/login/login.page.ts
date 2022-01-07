import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'
import { GlobalService } from 'src/app/services/global-service/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpHeaders } from '@angular/common/http';

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
    private toastService: ToastService,
    private http: HTTP
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
      // this.global.presentLoading();
      const fd = new FormData();
      fd.append("email", this.ionicForm.value.email);
      fd.append("password", this.ionicForm.value.password);
      this.global.postData("user/login", fd).subscribe((res: any) => {
        console.log('login', res);
        if (res && res.status) {
          localStorage.setItem("userDetails", JSON.stringify(res.data));
          localStorage.setItem('token', res.jwtToken);
          this.nav.navigateRoot('dashboard')
          // this.global.dismissLoading();
          this.toastService.toast(res.message, 'success');
        } else {
          // this.global.dismissLoading();
          this.toastService.toast(res.message, 'danger');
        }
      }, err => {
        // this.global.dismissLoading();
        console.log("errs", err)
      })
      // }
    } else {
      console.log("here")
      return false
    }
  }
}
