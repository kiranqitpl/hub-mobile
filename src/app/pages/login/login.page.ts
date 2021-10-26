import { Component, OnInit } from '@angular/core'
import { NavController, Platform } from '@ionic/angular'
import { GlobalService } from 'src/app/services/global.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email: any = ''
  password: any = ''
  ionicForm: FormGroup
  isSubmitted = false
  constructor(
    private nav: NavController,
    private global: GlobalService,
    public formBuilder: FormBuilder,
    // public platform: Platform
  ) {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get errorControl() {
    return this.ionicForm.controls
  }

  ngOnInit() { }

  // goNext() {
  //   if (this.email === '') {
  //     this.global.presentToast('Email is Required')
  //   } else if (this.password === '') {
  //     this.global.presentToast('Password is Required')
  //   }
  //   this.nav.navigateForward('home')
  // }

  submitForm() {
    this.isSubmitted = true
    if (this.ionicForm.valid) {
      // if (this.platform.is("cordova")) {
      //   this.global.presentLoading();
      // }
      // this.global.presentLoading();
      const fd = new FormData();
      fd.append("email", this.ionicForm.value.email);
      fd.append("password", this.ionicForm.value.password);

      this.global.postData("api/user/login", fd).subscribe((res: any) => {
        if (res.status) {
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("role", res.data.role);
          localStorage.setItem("id", res?.data?.id)
          localStorage.setItem("name", res?.data?.full_name)

          // if (res.data.role == this.global.user) {
          //   this.nav.navigateRoot('dashboard')
          // } else {
            this.nav.navigateRoot('home')
          // }

          // this.nav.navigateRoot('dashboard')
          // this.global.presentToast(res.message);
        } else {
          this.global.presentToast(res.message);
        }
        // this.global.dismissLoading();
      }, err => {
        // this.global.dismissLoading();
        console.log("errs", err)
      })
    } else {
      return false
    }
  }
}
