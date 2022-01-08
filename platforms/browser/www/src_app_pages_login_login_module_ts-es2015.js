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







// import { HTTP } from '@ionic-native/http/ngx';
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            // HTTP
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast-service/toast.service */ 45311);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);










let LoginPage = class LoginPage {
    constructor(nav, global, formBuilder, toastService, http) {
        this.nav = nav;
        this.global = global;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.http = http;
        this.isSubmitted = false;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imageUrl;
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (this.ionicForm.valid) {
            // this.global.presentLoading();
            const fd = new FormData();
            fd.append("email", this.ionicForm.value.email);
            fd.append("password", this.ionicForm.value.password);
            this.global.postData("user/login", fd).subscribe((res) => {
                console.log('login', res);
                if (res && res.status) {
                    localStorage.setItem("userDetails", JSON.stringify(res.data));
                    localStorage.setItem('token', res.jwtToken);
                    this.nav.navigateRoot('dashboard');
                    // this.global.dismissLoading();
                    this.toastService.toast(res.message, 'success');
                }
                else {
                    // this.global.dismissLoading();
                    this.toastService.toast(res.message, 'danger');
                }
            }, err => {
                // this.global.dismissLoading();
                console.log("errs", err);
            });
            // }
        }
        else {
            console.log("here");
            return false;
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .container ion-item {\n  color: white;\n}\nion-content .container ion-item ion-input {\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFlBQUE7QUFETjtBQUVNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQVIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuY29udGFpbmVyIHtcbiAgICBpb24taXRlbSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Login</ion-text>\n  </div>\n\n  <div class=\"container\">\n\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"3\" size-xl=\"3\"></ion-col>\n      <ion-col size-lg=\"6\" size-md=\"6\"  size-xl=\"6\" size-sm=\"12\" size-xs=\"12\">\n        <div class=\"ion-text-center logo\">\n          <img src=\"{{imageUrl + 'login.png'}}\" />\n        </div>\n        <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n          <div class=\"ion-margin-top ion-margin-bottom \">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label position=\"stacked\">Mail Id</ion-label>\n              <ion-input placeholder=\"Enter Mail Id\" formControlName=\"email\" required type=\"email\"> </ion-input>\n            </ion-item>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n              Email is required.\n            </span>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n              Please provide valid email id.\n            </span>\n\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label position=\"stacked\">Password</ion-label>\n              <ion-input placeholder=\"Enter Password\" formControlName=\"password\" required type=\"password\"> </ion-input>\n            </ion-item>\n\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n              password is required.\n            </span>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n              Password must be at least 6 characters.\n            </span>\n\n          </div>\n          <ion-button class=\"btn\" type=\"submit\">\n            Login\n          </ion-button>\n        </form>\n      </ion-col>\n      <ion-col size-lg=\"3\" size-md=\"3\" size-xl=\"3\"></ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map