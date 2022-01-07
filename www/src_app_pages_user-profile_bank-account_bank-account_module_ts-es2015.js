(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_user-profile_bank-account_bank-account_module_ts"],{

/***/ 2496:
/*!********************************************************************************!*\
  !*** ./src/app/pages/user-profile/bank-account/bank-account-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankAccountPageRoutingModule": function() { return /* binding */ BankAccountPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _bank_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account.page */ 55431);




const routes = [
    {
        path: '',
        component: _bank_account_page__WEBPACK_IMPORTED_MODULE_0__.BankAccountPage
    }
];
let BankAccountPageRoutingModule = class BankAccountPageRoutingModule {
};
BankAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BankAccountPageRoutingModule);



/***/ }),

/***/ 42779:
/*!************************************************************************!*\
  !*** ./src/app/pages/user-profile/bank-account/bank-account.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankAccountPageModule": function() { return /* binding */ BankAccountPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _bank_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account-routing.module */ 2496);
/* harmony import */ var _bank_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-account.page */ 55431);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let BankAccountPageModule = class BankAccountPageModule {
};
BankAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _bank_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankAccountPageRoutingModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [_bank_account_page__WEBPACK_IMPORTED_MODULE_1__.BankAccountPage]
    })
], BankAccountPageModule);



/***/ }),

/***/ 55431:
/*!**********************************************************************!*\
  !*** ./src/app/pages/user-profile/bank-account/bank-account.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankAccountPage": function() { return /* binding */ BankAccountPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bank_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bank-account.page.html */ 99228);
/* harmony import */ var _bank_account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-account.page.scss */ 57698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let BankAccountPage = class BankAccountPage {
    constructor() {
        this.pName = 'Employee Bank Account Details';
    }
    ngOnInit() {
    }
};
BankAccountPage.ctorParameters = () => [];
BankAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bank-account',
        template: _raw_loader_bank_account_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bank_account_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BankAccountPage);



/***/ }),

/***/ 57698:
/*!************************************************************************!*\
  !*** ./src/app/pages/user-profile/bank-account/bank-account.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n  text-align: center;\n  border-style: double;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmstYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImJhbmstYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */");

/***/ }),

/***/ 99228:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/bank-account/bank-account.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size-xl=\"3\" size-lg=\"3\" size-md=\"3\"> </ion-col>\n      <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Date</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-datetime placeholder=\"Please select date\"></ion-datetime>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Bank</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter bank name\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Bank Branch</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter bank branch\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>BSB Number</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter BSB number\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Account Number</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter account number\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Account Name</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter account Name\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Amount</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter amount\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"heading\">\n              If you have a 2nd Bank Account you would like to split your wage into\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Bank</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter bank name\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Bank Branch</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter bank branch\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>BSB Number</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter BSB number\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Account Number</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter account number\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Account Name</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter account Name\"></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label>Amount</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter amount\"></ion-input>\n            </ion-col>\n\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button class=\"btn\">SUBMIT</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"3\" size-md=\"3\"> </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-profile_bank-account_bank-account_module_ts-es2015.js.map