(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_modals_managers_managers_module_ts"],{

/***/ 44981:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": function() { return /* binding */ Ng2SearchPipeModule; },
/* harmony export */   "Ng2SearchPipe": function() { return /* binding */ Ng2SearchPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ 80310:
/*!************************************************************!*\
  !*** ./src/app/modals/managers/managers-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagersPageRoutingModule": function() { return /* binding */ ManagersPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _managers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers.page */ 58127);




const routes = [
    {
        path: '',
        component: _managers_page__WEBPACK_IMPORTED_MODULE_0__.ManagersPage
    }
];
let ManagersPageRoutingModule = class ManagersPageRoutingModule {
};
ManagersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManagersPageRoutingModule);



/***/ }),

/***/ 45108:
/*!****************************************************!*\
  !*** ./src/app/modals/managers/managers.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagersPageModule": function() { return /* binding */ ManagersPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _managers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers-routing.module */ 80310);
/* harmony import */ var _managers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers.page */ 58127);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 44981);








let ManagersPageModule = class ManagersPageModule {
};
ManagersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _managers_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagersPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_managers_page__WEBPACK_IMPORTED_MODULE_1__.ManagersPage]
    })
], ManagersPageModule);



/***/ }),

/***/ 58127:
/*!**************************************************!*\
  !*** ./src/app/modals/managers/managers.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagersPage": function() { return /* binding */ ManagersPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_managers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./managers.page.html */ 72329);
/* harmony import */ var _managers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers.page.scss */ 80248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-service/global.service */ 89985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);







let ManagersPage = class ManagersPage {
    constructor(modal, global) {
        this.modal = modal;
        this.global = global;
        this.newList = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    ionViewWillEnter() { }
    ngOnInit() {
        // console.log('get list in modal', this.list);
        this.newList.next(this.list);
    }
    onSearch(event) {
        let value = false;
        this.list.forEach(element => {
            if (element.full_name == this.term) {
                value = true;
            }
        });
        if (value == false && event != '') {
            this.newList.next([]);
            this.global.getData("user/getallemployee/?term=" + event.detail.value).subscribe((res) => {
                if (res && res.data && res.data.length > 0) {
                    res.data.unshift({ full_name: "Other", employee_id: '0' });
                    this.newList.next(res.data);
                }
                else {
                    this.newList.next(this.list);
                }
            }, err => {
                console.log(err);
            });
        }
    }
    close(item) {
        this.modal.dismiss(item);
    }
};
ManagersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
ManagersPage.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['header',] }],
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['list',] }]
};
ManagersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-managers',
        template: _raw_loader_managers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_managers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ManagersPage);



/***/ }),

/***/ 80248:
/*!****************************************************!*\
  !*** ./src/app/modals/managers/managers.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkE7RUFDRSx1QkFBQTtBQXZCRiIsImZpbGUiOiJtYW5hZ2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVyIHtcbi8vICAgaW9uLXRpdGxlIHtcbi8vICAgICBmb250LWZhbWlseTogbW9uLWJvbGQ7XG4vLyAgIH1cbi8vIH1cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgaW9uLWl0ZW0ge1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuLy8gICAgIGlvbi1sYWJlbCB7XG4vLyAgICAgICBmb250LWZhbWlseTogJ21vbi1tZWRpdW0nO1xuLy8gICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlvbi1pbnB1dHtcblxuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXdoaXRlLWNvbG9yKTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnbW9uLW1lZGl1bSc7XG4vLyAgICAgaGVpZ2h0OiA1MnB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDE4cHg7XG5cbi8vICAgfVxuLy8gfVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 72329:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/managers/managers.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{header}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-input placeholder=\"Search\" [(ngModel)]=\"term\" (ionChange)=\"onSearch($event)\"></ion-input>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item button class=\"ion-no-padding\" lines=\"none\" (click)=\"close(item)\"\n      *ngFor=\"let item of  newList.value |filter:term\">\n      <ion-label>{{item?.full_name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_modals_managers_managers_module_ts-es2015.js.map