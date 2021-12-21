(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_dashboard_favourite-form_favourite-form_module_ts"],{

/***/ 22872:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/favourite-form/favourite-form-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteFormPageRoutingModule": function() { return /* binding */ FavouriteFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _favourite_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite-form.page */ 82522);




const routes = [
    {
        path: '',
        component: _favourite_form_page__WEBPACK_IMPORTED_MODULE_0__.FavouriteFormPage
    }
];
let FavouriteFormPageRoutingModule = class FavouriteFormPageRoutingModule {
};
FavouriteFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouriteFormPageRoutingModule);



/***/ }),

/***/ 94565:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/favourite-form/favourite-form.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteFormPageModule": function() { return /* binding */ FavouriteFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _favourite_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite-form-routing.module */ 22872);
/* harmony import */ var _favourite_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite-form.page */ 82522);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let FavouriteFormPageModule = class FavouriteFormPageModule {
};
FavouriteFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favourite_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouriteFormPageRoutingModule
        ],
        declarations: [
            _favourite_form_page__WEBPACK_IMPORTED_MODULE_1__.FavouriteFormPage,
            src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ]
    })
], FavouriteFormPageModule);



/***/ }),

/***/ 82522:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/favourite-form/favourite-form.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteFormPage": function() { return /* binding */ FavouriteFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_favourite_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favourite-form.page.html */ 47136);
/* harmony import */ var _favourite_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite-form.page.scss */ 71073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast-service/toast.service */ 45311);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let FavouriteFormPage = class FavouriteFormPage {
    constructor(globalService, toastService, nav) {
        this.globalService = globalService;
        this.toastService = toastService;
        this.nav = nav;
        this.pName = "Favourite form";
        this.menuData = [];
        this.updateRowId = '';
    }
    ngOnInit() {
        this.loadFavoriteList();
    }
    loadFavoriteList() {
        this.globalService.getData('PrestartMenu/get_PrestartMenu').subscribe(result => {
            if (result['status']) {
                this.menuData = result['data']['menu'].sort((a, b) => a.favorite_position - b.favorite_position);
                this.updateRowId = result['data'].id;
                console.log('this.menuData', this.menuData);
            }
            else {
                this.menuData = [];
            }
        }, error => {
            console.log(error);
        });
    }
    onRemoveFavorite(tabname, val) {
        this.menuData.filter(ele => {
            if (ele.menuName == tabname) {
                ele.favorite = val;
            }
        });
        this.updateMenu('remove');
    }
    updateMenu(val) {
        let data = {
            formData: {
                "id": this.updateRowId,
                "menu": this.menuData
            }
        };
        this.globalService.postData('PrestartMenu/submit', data).subscribe(result => {
            if (result['status'] && val != '' && val == 'remove') {
                this.toastService.toast('This form is removed from your favorite list.', 'success');
            }
        }, error => {
            console.log(error);
        });
    }
    onRenderItems(event) {
        let draggedItem = this.menuData.splice(event.detail.from, 1)[0];
        this.menuData.splice(event.detail.to, 0, draggedItem);
        event.detail.complete();
        this.menuData.forEach((element, index) => {
            element.favorite_position = index;
        });
        this.menuData.sort((a, b) => a.favorite_position - b.favorite_position);
        this.updateMenu('');
        ;
    }
    onGoToPage(route) {
        console.log('route', route);
        this.nav.navigateForward(route);
    }
};
FavouriteFormPage.ctorParameters = () => [
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
FavouriteFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-favourite-form',
        template: _raw_loader_favourite_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favourite_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavouriteFormPage);



/***/ }),

/***/ 71073:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/favourite-form/favourite-form.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reorder {\n  opacity: 0 !important;\n}\n\n.btn-blue {\n  background: #3880ff;\n  background: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-primary-contrast, #fff);\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: var(--ion-color-primary-contrast);\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n  display: block;\n  line-height: 2.5;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZS1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUFBLDZDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImZhdm91cml0ZS1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW9yZGVyICB7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 47136:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/favourite-form/favourite-form.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n    <ion-reorder-group (ionItemReorder)=\"onRenderItems($event)\" disabled=\"false\">\n      <span *ngFor=\"let tabVal of menuData\">\n        <span class=\"btn-blue\" *ngIf=\"tabVal.favorite == true || tabVal.favorite == 'true'\">\n          <ion-row>\n            <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size-xl=\"4\" size-xs=\"4\" class=\"reorder\">\n              <ion-reorder>\n              </ion-reorder>\n            </ion-col>\n            <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size-xl=\"4\" size-xs=\"4\" [routerLink]=\"tabVal.route\">\n              {{tabVal.menuName}}\n            </ion-col>\n\n            <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size-xl=\"4\" size-xs=\"4\">\n              <span title=\"Remove from favorite\" (click)=\"onRemoveFavorite(tabVal.menuName, false)\">\n                <ion-icon name=\"heart\" class=\"favorite\"></ion-icon>\n              </span>\n            </ion-col>\n          </ion-row>\n        </span>\n      </span>\n    </ion-reorder-group>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_favourite-form_favourite-form_module_ts-es2015.js.map