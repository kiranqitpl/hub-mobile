(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_crane_crane-add-form_crane-add-form_module_ts"],{

/***/ 82930:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CraneAddFormPageRoutingModule": function() { return /* binding */ CraneAddFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _crane_add_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crane-add-form.page */ 31040);




const routes = [
    {
        path: '',
        component: _crane_add_form_page__WEBPACK_IMPORTED_MODULE_0__.CraneAddFormPage
    }
];
let CraneAddFormPageRoutingModule = class CraneAddFormPageRoutingModule {
};
CraneAddFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CraneAddFormPageRoutingModule);



/***/ }),

/***/ 96614:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CraneAddFormPageModule": function() { return /* binding */ CraneAddFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _crane_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crane-add-form-routing.module */ 82930);
/* harmony import */ var _crane_add_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crane-add-form.page */ 31040);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let CraneAddFormPageModule = class CraneAddFormPageModule {
};
CraneAddFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _crane_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.CraneAddFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [
            _crane_add_form_page__WEBPACK_IMPORTED_MODULE_1__.CraneAddFormPage,
            src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ]
    })
], CraneAddFormPageModule);



/***/ }),

/***/ 31040:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.page.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CraneAddFormPage": function() { return /* binding */ CraneAddFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_crane_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crane-add-form.page.html */ 15044);
/* harmony import */ var _crane_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crane-add-form.page.scss */ 74671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast-service/toast.service */ 45311);
/* harmony import */ var src_app_services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert-service/alert.service */ 96022);
/* harmony import */ var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading-service/loading.service */ 80513);










let CraneAddFormPage = class CraneAddFormPage {
    constructor(fb, alertService, globalService, toastService, loadingService, nav) {
        this.fb = fb;
        this.alertService = alertService;
        this.globalService = globalService;
        this.toastService = toastService;
        this.loadingService = loadingService;
        this.nav = nav;
        this.pName = 'Crane';
        this.craneNoList = [
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
        this.form_percent = 0;
    }
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
        });
    }
    onPassedInspection(event) {
        if (event.detail.value == "No") {
            this.alertService.alert('Tag the crane out of service and report any abnormalities immediately to your supervisor.');
        }
    }
    onSubmit() {
        this.loadingService.presentLoading();
        let data = { 'formData': this.craneForm.value };
        this.globalService.postData('crane/submit', data).subscribe(result => {
            if (result && result['status']) {
                this.toastService.toast(result['message'], 'success');
                this.craneForm.reset();
                this.nav.back();
            }
            else {
                this.toastService.toast(result['message'], 'danger');
            }
            this.loadingService.dismissLoading();
        }, error => {
            this.loadingService.dismissLoading();
            console.log(error);
        });
    }
    onProgressBar(event) {
        let count = 0;
        let formControlList = [];
        Object.keys(this.craneForm.controls).map(ele => formControlList.push(ele));
        formControlList.forEach(key => {
            if (this.craneForm.value[key] && this.craneForm.value[key] != '') {
                count = ++count;
            }
        });
        this.form_percent = ((1 / Object.keys(this.craneForm.controls).length) * count);
    }
};
CraneAddFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
CraneAddFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-crane-add-form',
        template: _raw_loader_crane_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crane_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CraneAddFormPage);



/***/ }),

/***/ 80513:
/*!*************************************************************!*\
  !*** ./src/app/services/loading-service/loading.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
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
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 74671:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.page.scss ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmFuZS1hZGQtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 15044:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.page.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card>\n      <ion-grid class=\"progress-bar\">\n        <ion-row>\n          <ion-col size=\"10.5\">\n            Form progress bar\n          </ion-col>\n          <ion-col size=\"1.5\">\n            {{(form_percent*100) | number : '1.0-0'}}{{'%'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-progress-bar [value]=\"form_percent\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid [formGroup]=\"craneForm\" (ionChange)=\"onProgressBar($event)\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label>Crane number :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-select placeholder=\"Please select crane no.\" interface=\"action-sheet\" formControlName=\"crane_number\">\n              <ion-select-option value=\"{{craneNoKey?.id}}\" *ngFor=\"let craneNoKey of craneNoList\">{{craneNoKey?.name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"operate_crane\">\n            <ion-item lines=\"none\">\n              <ion-label>Are you fully qualified and trained to operate the crane ?</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-text class=\"mandatoryField\">* If you are unsure contact your supervisor. </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"swi\">\n            <ion-item lines=\"none\">\n              <ion-label>Have you read and understood the relevant SWI for the equipment ? </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>No </ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"equipment_isolated\">\n            <ion-item lines=\"none\">\n              <ion-label>Is the equipment isolated ? </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Ensure there are no maintenance, lock-out tags or isolation procedures in\n          place. </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"inspect_pendant\">\n            <ion-item lines=\"none\">\n              <ion-label>Inspect Pendant :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-text class=\"mandatoryField\">* Ensure that you can identify each of the buttons on the pendant and that they\n          move freely without sticking.\n        </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"inspect_control_operation\">\n            <ion-item lines=\"none\">\n              <ion-label> Inspect Control operation :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Activate each directional button on the pendant control and ensure the\n          correct\n          movement.</ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"directional_swl_sign\">\n            <ion-item lines=\"none\">\n              <ion-label> Directional and SWL sign in place : </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Ensure the directional and SWL sign is attached to the crane.</ion-text>\n\n        <div *ngIf=\"craneForm.value['crane_number'] == 'OHC01' || craneForm.value['crane_number'] == 'OHC02'\n      || craneForm.value['crane_number'] == 'OHC03'\">\n          <ion-row>\n            <ion-radio-group formControlName=\"brakes_operational\">\n              <ion-item lines=\"none\">\n                <ion-label> Brakes operational :</ion-label>\n              </ion-item>\n              <ion-row>\n                <ion-col size-md=\"6\" size-lg=\"4\">\n                  <ion-item lines=\"none\">\n                    <ion-label> Ok</ion-label>\n                    <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size-md=\"6\" size-lg=\"4\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Faulty </ion-label>\n                    <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </ion-row>\n          <ion-text class=\"mandatoryField\">* Drive and stop the crane a few times in each direction to check the breaks\n            for adjustment and operation of the crane for the job.</ion-text>\n        </div>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"limit_switches_operational\">\n            <ion-item lines=\"none\">\n              <ion-label> Limit Switches operational :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Test the operation of the working limit switches.</ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"hook\">\n            <ion-item lines=\"none\">\n              <ion-label> Hook :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Check the hook is fitted with a safety catch, make sure it is working\n          correctly.</ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"hoist_chain_rope\">\n            <ion-item lines=\"none\">\n              <ion-label> Hoist chain/rope :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Inspect the hoist chain/ rope is free of kinks, wear, rust or damage.\n        </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"mechanically_sound\">\n            <ion-item lines=\"none\">\n              <ion-label> Mechanically Sound :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Check for any obvious mechanical problems (undue noises, signs of strain or\n          leaking oil).\n        </ion-text>\n\n        <ion-row>\n          <ion-radio-group (ionChange)=\"onPassedInspection($event)\" formControlName=\"passed_inspection\">\n            <ion-item lines=\"none\">\n              <ion-label> Passed Inspection :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>No </ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n      </ion-grid>\n      <ion-button (click)=\"onSubmit()\" class=\"btn\">SUBMIT</ion-button>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_crane_crane-add-form_crane-add-form_module_ts-es2015.js.map