(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_investigator_actions-view_actions-view_module_ts"],{

/***/ 71192:
/*!********************************************************************************!*\
  !*** ./src/app/pages/investigator/actions-view/actions-view-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsViewPageRoutingModule": function() { return /* binding */ ActionsViewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _actions_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions-view.page */ 63062);




const routes = [
    {
        path: '',
        component: _actions_view_page__WEBPACK_IMPORTED_MODULE_0__.ActionsViewPage
    }
];
let ActionsViewPageRoutingModule = class ActionsViewPageRoutingModule {
};
ActionsViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActionsViewPageRoutingModule);



/***/ }),

/***/ 2852:
/*!************************************************************************!*\
  !*** ./src/app/pages/investigator/actions-view/actions-view.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsViewPageModule": function() { return /* binding */ ActionsViewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _actions_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions-view-routing.module */ 71192);
/* harmony import */ var _actions_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions-view.page */ 63062);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let ActionsViewPageModule = class ActionsViewPageModule {
};
ActionsViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _actions_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionsViewPageRoutingModule
        ],
        declarations: [
            _actions_view_page__WEBPACK_IMPORTED_MODULE_1__.ActionsViewPage,
            src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ]
    })
], ActionsViewPageModule);



/***/ }),

/***/ 63062:
/*!**********************************************************************!*\
  !*** ./src/app/pages/investigator/actions-view/actions-view.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsViewPage": function() { return /* binding */ ActionsViewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_actions_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./actions-view.page.html */ 81640);
/* harmony import */ var _actions_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions-view.page.scss */ 92864);
/* harmony import */ var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global-service/global.service */ 89985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);






let ActionsViewPage = class ActionsViewPage {
    constructor(nav, global) {
        this.nav = nav;
        this.global = global;
        this.pName = 'Actions';
    }
    ngOnInit() {
        let d = JSON.parse(localStorage.getItem("singleView"));
        this.incident_id = d.id;
        this.global.presentLoading();
        this.global.getData("api/Investigator/getInvestigationAction").subscribe((res) => {
            var _a;
            this.global.dismissLoading();
            if (res) {
                (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.forEach((el) => {
                    if (el.incident_id == this.incident_id) {
                        this.data = el;
                        // this.global.dismissLoading();
                    }
                });
            }
        }, err => {
            console.log("res", err);
            this.global.dismissLoading();
        });
    }
};
ActionsViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
ActionsViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-actions-view',
        template: _raw_loader_actions_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actions_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActionsViewPage);



/***/ }),

/***/ 89985:
/*!***********************************************************!*\
  !*** ./src/app/services/global-service/global.service.ts ***!
  \***********************************************************/
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
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('apikey', 'as*37486a*()HGY')
            .set("Access-Control-Allow-Origin", "*")
            .set("Access-Control-Allow-Headers", "*")
            .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
            .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        // if (localStorage.getItem("token") && localStorage.getItem("token") != "")
        //   header.append("token", localStorage.getItem("token"));
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
    // --------------------------------------------------New Services ---------------------------------------------//
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

// ---------------------------------------------  New Services --------------------------------------------------//


/***/ }),

/***/ 92864:
/*!************************************************************************!*\
  !*** ./src/app/pages/investigator/actions-view/actions-view.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb25zLXZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 81640:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/investigator/actions-view/actions-view.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-content>\n        <p class=\"question\">Description of Required Action</p>\n        <p class=\"value\">{{data?.description_of_required_action}}</p>\n\n        <p class=\"question\">Allocated To</p>\n        <p class=\"value\">{{data?.user_name}}</p>\n\n        <p class=\"question\">Priority</p>\n        <p class=\"value\">{{data?.priority}}</p>\n\n        <p class=\"question\">Expected completion</p>\n        <p class=\"value\">{{data?.expected_completion}}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_investigator_actions-view_actions-view_module_ts-es2015.js.map