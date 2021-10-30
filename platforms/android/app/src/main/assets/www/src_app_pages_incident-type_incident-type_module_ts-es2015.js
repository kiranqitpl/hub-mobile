(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_incident-type_incident-type_module_ts"],{

/***/ 82916:
/*!*********************************************************************!*\
  !*** ./src/app/pages/incident-type/incident-type-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentTypePageRoutingModule": function() { return /* binding */ IncidentTypePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incident_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-type.page */ 14574);




const routes = [
    {
        path: '',
        component: _incident_type_page__WEBPACK_IMPORTED_MODULE_0__.IncidentTypePage
    }
];
let IncidentTypePageRoutingModule = class IncidentTypePageRoutingModule {
};
IncidentTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncidentTypePageRoutingModule);



/***/ }),

/***/ 52347:
/*!*************************************************************!*\
  !*** ./src/app/pages/incident-type/incident-type.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentTypePageModule": function() { return /* binding */ IncidentTypePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incident_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-type-routing.module */ 82916);
/* harmony import */ var _incident_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-type.page */ 14574);







let IncidentTypePageModule = class IncidentTypePageModule {
};
IncidentTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _incident_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidentTypePageRoutingModule
        ],
        declarations: [_incident_type_page__WEBPACK_IMPORTED_MODULE_1__.IncidentTypePage]
    })
], IncidentTypePageModule);



/***/ }),

/***/ 14574:
/*!***********************************************************!*\
  !*** ./src/app/pages/incident-type/incident-type.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentTypePage": function() { return /* binding */ IncidentTypePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incident_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incident-type.page.html */ 63468);
/* harmony import */ var _incident_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-type.page.scss */ 4740);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/global.service */ 97465);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);






let IncidentTypePage = class IncidentTypePage {
    constructor(nav, global) {
        this.nav = nav;
        this.global = global;
        this.data = [];
        this.data = ["Actual", "Near Miss", "Serious potential incident (SPI)"];
    }
    ionViewWillEnter() {
    }
    goBack() {
        this.nav.back();
    }
    ngOnInit() {
    }
    logout() {
        localStorage.clear();
        this.nav.navigateRoot("login");
    }
    next(item) {
        localStorage.setItem("incidentType", item);
        this.nav.navigateForward("add-form");
    }
};
IncidentTypePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
IncidentTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-incident-type',
        template: _raw_loader_incident_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incident_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncidentTypePage);



/***/ }),

/***/ 4740:
/*!*************************************************************!*\
  !*** ./src/app/pages/incident-type/incident-type.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 21px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content .logout {\n  position: absolute;\n  right: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content .btnView {\n  margin-top: 40px;\n}\nion-content .addForm {\n  align-items: center;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px;\n  border: 2px dashed #c3c3c3;\n  border-radius: 20px;\n  margin: 7px;\n  margin-top: 65px;\n}\nion-content .addF {\n  font-family: \"mon-bold\";\n  font-size: 17px;\n  text-transform: capitalize;\n  color: var(--black-color);\n}\nion-content .logouts {\n  margin-top: 80px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUNJO0VBQ0Usd0JBQUE7QUFDTjtBQUFNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFFUjtBQUFNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBRUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUVFO0VBQ0ksbUJBQUE7RUFDRixrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVFO0VBQ0ksMkJBQUE7QUFBTiIsImZpbGUiOiJpbmNpZGVudC10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLnRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgLmxvZ28ge1xuICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgfVxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxvZ2luLWJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5pbnB1dC1kaXYge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG4gIH1cbiAgLmJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMjlweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbiAgfVxuICAubG9nb3V0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gIH1cbiAgLmJ0blZpZXd7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICAuYWRkRm9ybXtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2MzYzNjMztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogN3B4O1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gIH1cbiAgLmFkZEZ7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgfVxuICAubG9nb3V0c3tcbiAgICAgIG1hcmdpbi10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 63468:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incident-type/incident-type.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Choice of Incident</ion-text>\n    <ion-buttons class='back'>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class=\"logout\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"container\">\n    <div class=\"btnView\">\n      <ion-button class=\"login-btn\" *ngFor=\"let item of data\" (click)=\"next(item)\">\n        {{item}}\n      </ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_incident-type_incident-type_module_ts-es2015.js.map