(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_safety-menu_module_ts"],{

/***/ 57393:
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMenuPageRoutingModule": function() { return /* binding */ SafetyMenuPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-menu.page */ 74532);




const routes = [
    {
        path: '',
        component: _safety_menu_page__WEBPACK_IMPORTED_MODULE_0__.SafetyMenuPage
    }
];
let SafetyMenuPageRoutingModule = class SafetyMenuPageRoutingModule {
};
SafetyMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SafetyMenuPageRoutingModule);



/***/ }),

/***/ 37050:
/*!**************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMenuPageModule": function() { return /* binding */ SafetyMenuPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _safety_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-menu-routing.module */ 57393);
/* harmony import */ var _safety_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-menu.page */ 74532);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let SafetyMenuPageModule = class SafetyMenuPageModule {
};
SafetyMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _safety_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyMenuPageRoutingModule
        ],
        declarations: [_safety_menu_page__WEBPACK_IMPORTED_MODULE_1__.SafetyMenuPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
    })
], SafetyMenuPageModule);



/***/ }),

/***/ 74532:
/*!************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMenuPage": function() { return /* binding */ SafetyMenuPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-menu.page.html */ 59843);
/* harmony import */ var _safety_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-menu.page.scss */ 30208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global-service/global.service */ 89985);





let SafetyMenuPage = class SafetyMenuPage {
    constructor(globalService) {
        this.globalService = globalService;
        this.menu = [
            {
                menuName: "Prestart", route: "/prestart-dashboard"
            },
            {
                menuName: "Incident", route: "/incident-form"
            },
            {
                menuName: "Hazard Report", route: "#"
            },
            {
                menuName: "SBO", route: "#"
            },
        ];
        this.pName = "Safety";
    }
    ngOnInit() {
        this.loginUserRole = localStorage.getItem('role');
    }
    onGoTo() {
    }
};
SafetyMenuPage.ctorParameters = () => [
    { type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
SafetyMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-safety-menu',
        template: _raw_loader_safety_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyMenuPage);



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

/***/ 30208:
/*!**************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".getSpace {\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmV0eS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic2FmZXR5LW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldFNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufSJdfQ== */");

/***/ }),

/***/ 59843:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/safety-menu.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <div class=\"btnView\">\n      <ion-button class=\"btn\" *ngFor=\"let item of menu\" [routerLink]=\"item.route\">\n        {{item.menuName}}\n      </ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_safety-menu_module_ts-es2015.js.map