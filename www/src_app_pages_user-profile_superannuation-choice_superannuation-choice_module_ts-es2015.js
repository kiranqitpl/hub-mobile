(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_user-profile_superannuation-choice_superannuation-choice_module_ts"],{

/***/ 97742:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperannuationChoicePageRoutingModule": function() { return /* binding */ SuperannuationChoicePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _superannuation_choice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superannuation-choice.page */ 11606);




const routes = [
    {
        path: '',
        component: _superannuation_choice_page__WEBPACK_IMPORTED_MODULE_0__.SuperannuationChoicePage
    }
];
let SuperannuationChoicePageRoutingModule = class SuperannuationChoicePageRoutingModule {
};
SuperannuationChoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuperannuationChoicePageRoutingModule);



/***/ }),

/***/ 97519:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperannuationChoicePageModule": function() { return /* binding */ SuperannuationChoicePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _superannuation_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superannuation-choice-routing.module */ 97742);
/* harmony import */ var _superannuation_choice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superannuation-choice.page */ 11606);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let SuperannuationChoicePageModule = class SuperannuationChoicePageModule {
};
SuperannuationChoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _superannuation_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuperannuationChoicePageRoutingModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_superannuation_choice_page__WEBPACK_IMPORTED_MODULE_1__.SuperannuationChoicePage]
    })
], SuperannuationChoicePageModule);



/***/ }),

/***/ 11606:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice.page.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperannuationChoicePage": function() { return /* binding */ SuperannuationChoicePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_superannuation_choice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./superannuation-choice.page.html */ 76342);
/* harmony import */ var _superannuation_choice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superannuation-choice.page.scss */ 36385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);






let SuperannuationChoicePage = class SuperannuationChoicePage {
    constructor(fb, globalService) {
        this.fb = fb;
        this.globalService = globalService;
        this.pName = 'Superannuation Choice';
        this.paidTo = '';
    }
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
        });
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
        };
        console.log('data', data);
        this.globalService.postData('OnboardingSuperannuation/saveOnboarding', data).subscribe(res => {
            console.log('jjjj', res);
        });
    }
};
SuperannuationChoicePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
SuperannuationChoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-superannuation-choice',
        template: _raw_loader_superannuation_choice_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_superannuation_choice_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SuperannuationChoicePage);



/***/ }),

/***/ 36385:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice.page.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcmFubnVhdGlvbi1jaG9pY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 76342:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/superannuation-choice/superannuation-choice.page.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n    <ion-row>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n      <ion-col size-xl=\"6\" size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size-xs=\"12\" [formGroup]=\"superannuation\">\n\n        <ion-card>\n\n          <ion-radio-group formControlName=\"super_contribution\" >\n            <ion-item lines=\"none\" size=\"12\">\n              <ion-label class=\"ion-text-wrap\">I request all of my future super contributions to be paid to :\n              </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">The APRA fund or retirement saving account (RSA) I nominate\n                  </ion-label>\n                  <ion-radio slot=\"start\" value=\"RSA\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">The self-managed super fund (SMSF) I nominate</ion-label>\n                  <ion-radio slot=\"start\" value=\"SMSF\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">The super fund nominated by my emploper</ion-label>\n                  <ion-radio slot=\"start\" value=\"emploper\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <ion-item class=\"ion-text-wrap text-val\">\n            Your name and tax file number will be collected from other forms.\n          </ion-item>\n\n        </ion-card>\n\n        <ion-card>\n\n          <div *ngIf=\"superannuation.value['super_contribution']== 'RSA'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label class=\"lable-text\"> Fund ABN</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Fund ABN\" formControlName=\"rsa_fund_abn\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Fund Name</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Fund Name\" formControlName=\"rsa_fund_name\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Fund Address</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-textarea placeholder=\"Please enter Fund Address\" formControlName=\"rsa_fund_address\"></ion-textarea>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Suburb/Town </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Suburb/Town\" formControlName=\"rsa_suburb\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> State</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter State\" formControlName=\"rsa_state\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Postcode</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Postcode\" formControlName=\"rsa_postcode\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Fund Phone</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input inputmode=\"tel\" placeholder=\"Please enter Fund Phone\" formControlName=\"rsa_fund_phone\">\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Unique Superannuation Identifier (USI)</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Unique Superannuation Identifier\" formControlName=\"rsa_usi\">\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Your Account Name (if applicable)</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Your Account Name\" formControlName=\"rsa_account_no\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Your Member Number (if applicable)</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Your Member Number\" formControlName=\"rsa_member_number\">\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Attach Compliance Letter</ion-label>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <ion-label class=\"ion-text-wrap mandatoryField\">* You need to attach a letter from your\n                  fund stating that they are a complying fund and that they will\n                  accept contributions from your employer. Correct information about your super fund is needed for your\n                  employer to pay super contributions. Your super fund will provide this upon request.\n                </ion-label>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <ion-input type=\"file\" formControlName=\"rsa_attach_compliance_letter\"></ion-input>\n              </ion-col>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n\n          </div>\n\n          <div *ngIf=\"superannuation.value['super_contribution'] == 'SMSF'\">\n\n            <!-- <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label class=\"heading\">\n                    Nominating your RSA fund\n                  </ion-label>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-label class=\"ion-text-wrap text-val\">\n                    You will need current details from your APRA regulated fund or RSA to complete this item.\n                  </ion-label>\n                </ion-col>\n              </ion-row> -->\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label class=\"lable-text\"> Fund ABN</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Fund ABN\" formControlName=\"smsf_fund_abn\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Fund Name</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Fund Name\" formControlName=\"smsf_fund_name\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Fund Address</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-textarea placeholder=\"Please enter Fund Address\" formControlName=\"smsf_fund_address\">\n                </ion-textarea>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Suburb/Town </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Suburb/Town\" formControlName=\"smsf_suburb\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> State</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter State\" formControlName=\"smsf_state\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label> Postcode</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Postcode\" formControlName=\"smsf_postcode\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Fund Phone</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input inputmode=\"tel\" placeholder=\"Please enter Fund Phone\" formControlName=\"smsf_fund_phone\">\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Fund electronic service address (ESA)</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Fund electronic service address (ESA)\" formControlName=\"smsf_esa\">\n                </ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>BSB Code(please include all six numbers)</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter BSB Code\" formControlName=\"smsf_bsb_code\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Account Number</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Account Number\" formControlName=\"smsf_account_no\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label class=\"ion-text-wrap mandatoryField\">* You need to attach a document confirming SMSF is an\n                  ATO\n                  regulated super fund. You can located and print a copy of the compliance status for your SMSF by\n                  searching using the ABN or fund name in the Super Fund Lookup service at\n                  <ion-router-link href=\"https://superfundlookup.gov.au/\" target=\"_blank\" class=\"underline\">\n                    https://superfundlookup.gov.au/</ion-router-link>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label class=\"ion-text-wrap mandatoryField\">* If you are the turstee, or a director of the\n                  corporate\n                  trustee you can confirm that your SMSF will accpet contribution from your employer by making the\n                  following declaration :\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-label> Attach ATO Compliance Document</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input type=\"file\" formControlName=\"smsf_attach_compliance_doc\"></ion-input>\n              </ion-col>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n\n            <ion-radio-group formControlName=\"smsf_trustee\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">I am the trustee, or a director of the corporate trustee of the\n                      SMSF\n                      and I declare that the SMSF will accept contributions from my employer.\n                    </ion-label>\n                    <ion-radio slot=\"start\" value=\"RSA\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">I am neither the trustee nor a director of the corporte trustee\n                      of\n                      the SMSF.</ion-label>\n                    <ion-radio slot=\"start\" value=\"SMSF\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-row>\n\n              <ion-col size=\"12\">\n                <ion-label class=\"ion-text-wrap mandatoryField\">* If you are the trustee, or a director of the\n                  corporate\n                  trustee of the SMSF, then you must attach a letter from the trustee confirming that the fund will\n                  accept\n                  contributions from your employer.\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-label>Attach Confirmation Letter</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input type=\"file\" formControlName=\"smsf_attatch_confir_letter\"></ion-input>\n              </ion-col>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"superannuation.value['super_contribution'] == 'emploper'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label class=\"lable-text\">Super Fund Name</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Super Fund Name\" formControlName=\"employee_fund_name\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Unique Superannuation Identifire (USI)</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Unique Superannuation Identifire (USI)\"\n                  formControlName=\"employee_usi\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Phone (for the product disclosure statement for this\n                  fund)</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input placeholder=\"Please enter Phone\" formControlName=\"employee_phone\"></ion-input>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Super Fund Website Address</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-input type=\"url\" placeholder=\"Please enter Super Fund Website Address\"\n                  formControlName=\"employee_fund_weburl\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox color=\"primary\" formControlName=\"completed\"></ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              I have completed this form.\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button (click)=\"onSubmit()\" class=\"btn\">SUBMIT</ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n\n      </ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-profile_superannuation-choice_superannuation-choice_module_ts-es2015.js.map