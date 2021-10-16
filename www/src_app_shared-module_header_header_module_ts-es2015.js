(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_shared-module_header_header_module_ts"],{

/***/ 10812:
/*!***************************************************************!*\
  !*** ./src/app/shared-module/header/header-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPageRoutingModule": function() { return /* binding */ HeaderPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _header_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.page */ 87894);




const routes = [
    {
        path: '',
        component: _header_page__WEBPACK_IMPORTED_MODULE_0__.HeaderPage
    }
];
let HeaderPageRoutingModule = class HeaderPageRoutingModule {
};
HeaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HeaderPageRoutingModule);



/***/ }),

/***/ 73257:
/*!*******************************************************!*\
  !*** ./src/app/shared-module/header/header.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPageModule": function() { return /* binding */ HeaderPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-routing.module */ 10812);
/* harmony import */ var _header_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.page */ 87894);







let HeaderPageModule = class HeaderPageModule {
};
HeaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderPageRoutingModule
        ],
        declarations: [_header_page__WEBPACK_IMPORTED_MODULE_1__.HeaderPage]
    })
], HeaderPageModule);



/***/ }),

/***/ 87894:
/*!*****************************************************!*\
  !*** ./src/app/shared-module/header/header.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPage": function() { return /* binding */ HeaderPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.page.html */ 50238);
/* harmony import */ var _header_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.page.scss */ 80172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let HeaderPage = class HeaderPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.getRout();
    }
    getRout() {
        console.log('activatedRoute', this.activatedRoute);
        console.log('activatedRoute', this.activatedRoute['_routerState'].snapshot.url);
        let rout = this.activatedRoute['_routerState'].snapshot.url;
        console.log('rout', rout.split("/"));
        this.pageName = rout.split("/")['1'];
        console.log('this.pageName', this.pageName);
    }
};
HeaderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
HeaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderPage);



/***/ }),

/***/ 80172:
/*!*******************************************************!*\
  !*** ./src/app/shared-module/header/header.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 50238:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-module/header/header.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar\">\n  <!-- <ion-text>{{pageName}}</ion-text> -->\n  <ion-text>ggggg</ion-text>\n  <ion-buttons class='back' slot=\"end\">\n    <ion-button (click)=\"logout()\">\n      <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_shared-module_header_header_module_ts-es2015.js.map