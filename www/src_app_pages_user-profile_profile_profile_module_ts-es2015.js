(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_user-profile_profile_profile_module_ts"],{

/***/ 34452:
/*!**********************************************************************!*\
  !*** ./src/app/pages/user-profile/profile/profile-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 17256);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 41495:
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/profile/profile.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 34452);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 17256);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 17256:
/*!************************************************************!*\
  !*** ./src/app/pages/user-profile/profile/profile.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 41213);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 11435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ProfilePage = class ProfilePage {
    constructor() {
        this.pName = 'Personal Details';
    }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 11435:
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/profile/profile.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 41213:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/profile/profile.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-profile_profile_profile_module_ts-es2015.js.map