(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global.service */ 97465);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);







let LoginPage = class LoginPage {
    constructor(nav, global, formBuilder) {
        this.nav = nav;
        this.global = global;
        this.formBuilder = formBuilder;
        this.email = '';
        this.password = '';
        this.isSubmitted = false;
        this.ionicForm = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
                ]
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
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
        this.isSubmitted = true;
        if (this.ionicForm.valid) {
            // if (this.platform.is("cordova")) {
            //   this.global.presentLoading();
            // }
            // this.global.presentLoading();
            const fd = new FormData();
            fd.append("email", this.ionicForm.value.email);
            fd.append("password", this.ionicForm.value.password);
            this.global.postData("api/user/login", fd).subscribe((res) => {
                var _a, _b;
                if (res.status) {
                    localStorage.setItem("email", res.data.email);
                    localStorage.setItem("role", res.data.role);
                    localStorage.setItem("id", (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.id);
                    localStorage.setItem("name", (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.full_name);
                    // if (res.data.role == this.global.user) {
                    //   this.nav.navigateRoot('dashboard')
                    // } else {
                    this.nav.navigateRoot('home');
                    // }
                    // this.nav.navigateRoot('dashboard')
                    // this.global.presentToast(res.message);
                }
                else {
                    this.global.presentToast(res.message);
                }
                // this.global.dismissLoading();
            }, err => {
                // this.global.dismissLoading();
                console.log("errs", err);
            });
        }
        else {
            return false;
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 97465:
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": function() { return /* binding */ GlobalService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let GlobalService = class GlobalService {
    constructor(toastController, http, loadingController) {
        this.toastController = toastController;
        this.http = http;
        this.loadingController = loadingController;
        this.baseUrl = 'https://mforms-api-devel.horts.com.au/';
        // https://mforms-api-devel.horts.com.au/
        this.baseUrl1 = 'https://mforms-api-devel.horts.com.au/api/';
        //Role 
        this.user = "31";
        this.gm = "32";
        this.investigator = "33";
        this.manager = "34";
        this.supervisior = "35";
        this.formType_user = 1;
        this.formType_investigator = 2;
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                mode: "ios",
                color: "dark"
            });
            toast.present();
        });
    }
    toast(msg, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                // mode: "ios",
                color: type,
                animated: true,
            });
            toast.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...'
            });
            yield loading.present();
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
    setHeader() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
        header.set("Access-Control-Allow-Origin", "*");
        header.set("Content-Type", "application/json");
        header.set("Access-Control-Allow-Headers", "*");
        header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
        header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        if (localStorage.getItem("token") && localStorage.getItem("token") != "") {
            header.set("token", localStorage.getItem("token"));
        }
        return header;
    }
    getData(url) {
        let headers = this.setHeader();
        return this.http.get(this.baseUrl + url, { headers: headers });
    }
    postData(url, data) {
        let headers = this.setHeader();
        return this.http.post(this.baseUrl + url, data, { headers: headers });
    }
    postDataWithId(url, data) {
        let headers = this.setHeader();
        return this.http.post(this.baseUrl + url, data, { headers: headers });
    }
    getDataWithId(url) {
        let headers = this.setHeader();
        return this.http.get(this.baseUrl + url, { headers: headers });
    }
    postData1(url, data) {
        let headers = this.setHeader();
        return this.http.post(this.baseUrl1 + url, data, { headers: headers });
    }
    getData1(url) {
        let headers = this.setHeader();
        return this.http.get(this.baseUrl1 + url, { headers: headers });
        // return this.http.get(this.baseUrl1 + url, { headers: headers }).pipe(
        //   map((response) => {
        //     console.log('response', response);
        //     if (!response['status']) {
        //       throw new Error('Value expected!');
        //     }
        //     response;
        //   }),
        //   catchError(() => of())
        // );
    }
};
GlobalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController }
];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 21px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 44px;\n  overflow: hidden;\n  margin-top: 13px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .error {\n  font-family: \"mon-medium\";\n  color: red;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0FBQ047QUFDSTtFQUNFLHdCQUFBO0FBQ047QUFBTTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRVI7QUFBTTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUNJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC50b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnbW9uLWJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzJweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAubG9nbyB7XG4gICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtb24tbWVkaXVtJztcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgfVxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtb24tbWVkaXVtJztcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dpbi1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgZm9udC1mYW1pbHk6ICdtb24tYm9sZCc7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgfVxuICAgIC5pbnB1dC1kaXYge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG4gIH1cbiAgLmVycm9yIHtcbiAgICBmb250LWZhbWlseTogJ21vbi1tZWRpdW0nO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>login</ion-text>\n  </div>\n  <div class=\"container\">\n    <div class=\"ion-text-center logo ion-padding-top\">\n      <img src=\"./assets/login.png\" />\n    </div>\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <div class=\"ion-margin-top ion-margin-bottom input-div\">\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-label position=\"stacked\">Mail Id</ion-label>\n          <ion-input placeholder=\"Enter Mail Id\" formControlName=\"email\" required type=\"email\"> </ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n          Email is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n          Please provide valid email id.\n        </span>\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input placeholder=\"Enter Password\" formControlName=\"password\" required type=\"password\"> </ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n          password is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n          Password must be at least 6 characters.\n        </span>\n      </div>\n      <ion-button class=\"login-btn\" type=\"submit\">\n        Login\n      </ion-button>\n    </form>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map