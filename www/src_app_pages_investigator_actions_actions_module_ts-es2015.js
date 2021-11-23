(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_investigator_actions_actions_module_ts"],{

/***/ 48325:
/*!**********************************************************************!*\
  !*** ./src/app/pages/investigator/actions/actions-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPageRoutingModule": function() { return /* binding */ ActionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.page */ 40390);




const routes = [
    {
        path: '',
        component: _actions_page__WEBPACK_IMPORTED_MODULE_0__.ActionsPage
    }
];
let ActionsPageRoutingModule = class ActionsPageRoutingModule {
};
ActionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActionsPageRoutingModule);



/***/ }),

/***/ 99230:
/*!**************************************************************!*\
  !*** ./src/app/pages/investigator/actions/actions.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPageModule": function() { return /* binding */ ActionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions-routing.module */ 48325);
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.page */ 40390);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let ActionsPageModule = class ActionsPageModule {
};
ActionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionsPageRoutingModule
        ],
        declarations: [
            _actions_page__WEBPACK_IMPORTED_MODULE_1__.ActionsPage,
            src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ]
    })
], ActionsPageModule);



/***/ }),

/***/ 40390:
/*!************************************************************!*\
  !*** ./src/app/pages/investigator/actions/actions.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPage": function() { return /* binding */ ActionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_actions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./actions.page.html */ 20251);
/* harmony import */ var _actions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.page.scss */ 34398);
/* harmony import */ var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global-service/global.service */ 89985);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading-service/loading.service */ 80513);








let ActionsPage = class ActionsPage {
    //------------------------------------------------------------ Form Variables ---------------------------------------------------------------//
    constructor(nav, global, loadingService) {
        this.nav = nav;
        this.global = global;
        this.loadingService = loadingService;
        this.pName = "Actions";
        this.data = [];
        //------------------------------------------------------------ Form Variables ---------------------------------------------------------------//
        this.description_of_required_action = '';
        this.priority = '';
        this.expected_completion = '';
        this.loggedInUser = '';
    }
    ngOnInit() {
        this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
        let d = JSON.parse(localStorage.getItem("singleView"));
        this.incident_id = d.id;
        this.loadEmp();
    }
    loadEmp() {
        this.loadingService.presentLoading();
        this.global.getData("user/getAllUser").subscribe((result) => {
            if (result && result.data) {
                this.data = result.data;
            }
            this.loadingService.dismissLoading();
            console.log('this.data ', this.data);
        }, err => {
            this.loadingService.dismissLoading();
            console.log(err);
        });
    }
    ionViewWillEnter() {
        let isOpenFrom = localStorage.getItem("isActionsForm");
        this.isFrom = isOpenFrom;
        if (isOpenFrom == 'edit') {
            let d = JSON.parse(localStorage.getItem("singleView"));
            // this.incident_id = d.id;
            // this.global.presentLoading();
            console.log('  this.incident_id ', this.incident_id);
            this.global.getData("Investigator/getInvestigationAction/" + this.loggedInUser['id']).subscribe((res) => {
                var _a;
                console.log('getInvestigationAction 1', res);
                if (res) {
                    (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.forEach((el) => {
                        console.log('getInvestigationAction 2', el);
                        if (el.incident_id == this.incident_id) {
                            console.log('here');
                            this.description_of_required_action = el.description_of_required_action;
                            // this.user_name = el.user_name;
                            this.user_name = el.user_id;
                            this.priority = el.priority;
                            this.expected_completion = el.expected_completion;
                            this.id = el.id;
                            // this.global.dismissLoading();
                            console.log(' this.id ', this.id);
                        }
                    });
                }
            }, err => {
                console.log("res", err);
                // this.global.dismissLoading();
            });
        }
    }
    goBack() {
        this.nav.back();
    }
    selectUser(e) {
        this.data.forEach((el) => {
            if (el.employee_id == e.detail.value) {
                this.user_id = el.full_name;
            }
        });
    }
    dateSelect(e) {
        this.expected_completion = moment__WEBPACK_IMPORTED_MODULE_3___default()(e.detail.value).format("YYYY-MM-DD");
    }
    onSubmit() {
        let userDetails = JSON.parse(localStorage.getItem("userDetails"));
        if (this.description_of_required_action == '') {
            this.global.presentToast("Please enter description of required action");
        }
        else if (this.user_name == '') {
            this.global.presentToast("Please Select User");
        }
        else if (this.priority == '') {
            this.global.presentToast("Please select the priority");
        }
        else if (this.expected_completion == '') {
            this.global.presentToast("Please enter expected completion");
        }
        else {
            this.global.presentLoading();
            const fd = new FormData();
            if (this.isFrom == 'edit')
                fd.append("id", this.id);
            fd.append("incident_id", this.incident_id);
            fd.append('user_id', this.user_name);
            fd.append("user_name", this.user_id);
            fd.append("priority", this.priority);
            fd.append("expected_completion", this.expected_completion);
            fd.append("description_of_required_action", this.description_of_required_action);
            fd.append("investigator_id", userDetails.id);
            this.global.postData("Investigator/InvestigationAction", fd).subscribe((res) => {
                if (res.status) {
                    this.global.presentToast(res.message);
                    this.global.dismissLoading();
                    this.nav.back();
                }
                else {
                    this.global.dismissLoading();
                }
            }, err => {
                console.log(err);
                this.global.dismissLoading();
            });
        }
    }
};
ActionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
ActionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-actions',
        template: _raw_loader_actions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActionsPage);



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

/***/ 34398:
/*!**************************************************************!*\
  !*** ./src/app/pages/investigator/actions/actions.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 20251:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/investigator/actions/actions.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-content>\n        <div class=\"ion-padding-start ion-padding-end \">\n          <p class=\"question\">\n            Description of Required Action\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"description_of_required_action\"></ion-input>\n\n          <p class=\"question\">Allocated to</p>\n          <ion-item class=\"ra ion-no-margin ion-no-padding\" lines=\"none\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"user_name\"\n              (ionChange)=\"selectUser($event)\">\n              <ion-select-option value=\"{{item?.employee_id}}\" *ngFor=\"let item of data\">\n                <p>{{item?.full_name}}</p>\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <p class=\"question\">Priority</p>\n          <ion-radio-group [(ngModel)]=\"priority\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"4\" class=\"ion-no-padding\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Minor</ion-label>\n                  <ion-radio slot=\"start\" value=\"Minor\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\" class=\"ion-no-padding\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Major</ion-label>\n                  <ion-radio slot=\"start\" value=\"Major\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <p class=\"question\">Expected completion</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event)\"\n              [(ngModel)]=\"expected_completion\">\n            </ion-datetime>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-button class=\"btn\" type=\"submit\" (click)=\"onSubmit()\" *ngIf=\"isFrom=='add'\">\n      SUBMIT\n    </ion-button>\n    <ion-button class=\"btn\" type=\"submit\" (click)=\"onSubmit()\" *ngIf=\"isFrom=='edit'\">\n      UPDATE\n    </ion-button>\n\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_investigator_actions_actions_module_ts-es2015.js.map