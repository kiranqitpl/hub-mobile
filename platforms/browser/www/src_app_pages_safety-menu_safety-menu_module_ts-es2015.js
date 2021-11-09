(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_safety-menu_safety-menu_module_ts"],{

/***/ 89071:
/*!*****************************************************************!*\
  !*** ./src/app/pages/safety-menu/safety-menu-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMenuPageRoutingModule": function() { return /* binding */ SafetyMenuPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-menu.page */ 285);




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

/***/ 71764:
/*!*********************************************************!*\
  !*** ./src/app/pages/safety-menu/safety-menu.module.ts ***!
  \*********************************************************/
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
/* harmony import */ var _safety_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-menu-routing.module */ 89071);
/* harmony import */ var _safety_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-menu.page */ 285);
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

/***/ 285:
/*!*******************************************************!*\
  !*** ./src/app/pages/safety-menu/safety-menu.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMenuPage": function() { return /* binding */ SafetyMenuPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-menu.page.html */ 2409);
/* harmony import */ var _safety_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-menu.page.scss */ 22568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global.service */ 97465);





let SafetyMenuPage = class SafetyMenuPage {
    constructor(globalService) {
        this.globalService = globalService;
        this._menu = [
            {
                menuName: "Incident", route: "/add-form"
            },
            {
                menuName: "Hazard Report", route: "#"
            },
            {
                menuName: "SBO", route: "#"
            },
            // {
            //   menuName: "Previous Form", route: "/form-list"
            // },
            // {
            //   menuName: "Notification", route: "#"
            // },
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
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
SafetyMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-safety-menu',
        template: _raw_loader_safety_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyMenuPage);



/***/ }),

/***/ 22568:
/*!*********************************************************!*\
  !*** ./src/app/pages/safety-menu/safety-menu.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".getSpace {\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmV0eS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic2FmZXR5LW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldFNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufSJdfQ== */");

/***/ }),

/***/ 2409:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/safety-menu/safety-menu.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <div class=\"btnView\">\n      <ion-button class=\"login-btn\" *ngFor=\"let item of _menu\" [routerLink]=\"item.route\">\n        {{item.menuName}}\n      </ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_safety-menu_safety-menu_module_ts-es2015.js.map