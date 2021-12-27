(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_user-profile_user-profile_module_ts"],{

/***/ 23376:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePageRoutingModule": function() { return /* binding */ UserProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.page */ 41553);




const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_0__.UserProfilePage
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_user-profile_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 41495)).then(m => m.ProfilePageModule)
    },
    {
        path: 'superannuation-choice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_user-profile_superannuation-choice_superannuation-choice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./superannuation-choice/superannuation-choice.module */ 97519)).then(m => m.SuperannuationChoicePageModule)
    }
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ 71749:
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePageModule": function() { return /* binding */ UserProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile-routing.module */ 23376);
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.page */ 41553);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserProfilePageRoutingModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_1__.UserProfilePage]
    })
], UserProfilePageModule);



/***/ }),

/***/ 41553:
/*!*********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePage": function() { return /* binding */ UserProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-profile.page.html */ 37844);
/* harmony import */ var _user_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.page.scss */ 68531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let UserProfilePage = class UserProfilePage {
    constructor() {
        this.pName = 'Profile';
        this.userMenu = [
            {
                menuName: 'Bank Account Details', route: '#'
            },
            {
                menuName: 'Clothing Issue', route: '#'
            },
            {
                menuName: 'Medical Questionnaire', route: '#'
            },
            {
                menuName: 'Personal Details', route: '/user-profile/profile'
            },
            {
                menuName: 'Authority to Release Personal Information', route: '#'
            },
            {
                menuName: 'Prescription Medication', route: '#'
            },
            {
                menuName: 'Superannuation Choice', route: '/user-profile/superannuation-choice'
            },
            {
                menuName: 'Tax File Number', route: '#'
            },
            {
                menuName: 'Assigned Licenses', route: '#'
            },
            {
                menuName: 'Other Forms', route: '#'
            },
            {
                menuName: 'HORTS Induction', route: '#'
            },
            {
                menuName: 'Position Description', route: '#'
            },
        ];
    }
    ngOnInit() {
    }
};
UserProfilePage.ctorParameters = () => [];
UserProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserProfilePage);



/***/ }),

/***/ 68531:
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 37844:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xl=\"6\" size-xs=\"12\">\n        <div class=\"btnView\">\n          <ion-button class=\"btn\" *ngFor=\"let tabVal of userMenu\" [routerLink]=\"tabVal.route\">\n            <span class=\"ion-text-wrap\">\n              {{tabVal.menuName}}\n            </span>\n          </ion-button>\n        </div>\n      </ion-col>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-profile_user-profile_module_ts-es2015.js.map