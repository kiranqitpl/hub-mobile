(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_prestart-dashboard_prestart-dashboard_module_ts"],{

/***/ 50367:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestartDashboardPageRoutingModule": function() { return /* binding */ PrestartDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestart-dashboard.page */ 15476);




const routes = [
    {
        path: '',
        component: _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PrestartDashboardPage,
    },
    // {
    //   path: 'telehandler',
    //   loadChildren: () => import('../../prestart/telehandler/telehandler.module').then(m => m.TelehandlerPageModule)
    // }
];
let PrestartDashboardPageRoutingModule = class PrestartDashboardPageRoutingModule {
};
PrestartDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrestartDashboardPageRoutingModule);



/***/ }),

/***/ 8492:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestartDashboardPageModule": function() { return /* binding */ PrestartDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _prestart_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestart-dashboard-routing.module */ 50367);
/* harmony import */ var _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestart-dashboard.page */ 15476);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let PrestartDashboardPageModule = class PrestartDashboardPageModule {
};
PrestartDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _prestart_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrestartDashboardPageRoutingModule
        ],
        declarations: [
            _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PrestartDashboardPage,
            src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ]
    })
], PrestartDashboardPageModule);



/***/ }),

/***/ 15476:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestartDashboardPage": function() { return /* binding */ PrestartDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_prestart_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prestart-dashboard.page.html */ 66767);
/* harmony import */ var _prestart_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestart-dashboard.page.scss */ 41209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PrestartDashboardPage = class PrestartDashboardPage {
    constructor() {
        this.pName = 'Prestart';
        this.menu = [
            {
                menuName: 'LV', route: '#'
            },
            {
                menuName: 'Forklift', route: '#'
            },
            {
                menuName: 'Telehandler', route: '/home/safety-menu/telehandler-add-form'
            },
            {
                menuName: 'Crane', route: '/home/safety-menu/crane-add-form'
            },
            {
                menuName: 'Vehicle Hoist', route: '/home/safety-menu/vehicle-hoist-add-form'
            },
        ];
    }
    ngOnInit() {
    }
};
PrestartDashboardPage.ctorParameters = () => [];
PrestartDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prestart-dashboard',
        template: _raw_loader_prestart_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prestart_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrestartDashboardPage);



/***/ }),

/***/ 41209:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzdGFydC1kYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 66767:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-button class=\"btn\" *ngFor=\"let tabVal of menu\" [routerLink]=\"tabVal.route\">\n      {{tabVal.menuName}}\n    </ion-button>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_prestart-dashboard_prestart-dashboard_module_ts-es2015.js.map