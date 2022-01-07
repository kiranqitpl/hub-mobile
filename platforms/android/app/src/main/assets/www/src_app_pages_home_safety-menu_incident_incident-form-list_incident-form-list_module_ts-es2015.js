(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_incident_incident-form-list_incident-form-list_module_ts"],{

/***/ 44230:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form-list/incident-form-list-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormListPageRoutingModule": function() { return /* binding */ IncidentFormListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incident_form_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-form-list.page */ 66016);




const routes = [
    {
        path: '',
        component: _incident_form_list_page__WEBPACK_IMPORTED_MODULE_0__.IncidentFormListPage
    }
];
let IncidentFormListPageRoutingModule = class IncidentFormListPageRoutingModule {
};
IncidentFormListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncidentFormListPageRoutingModule);



/***/ }),

/***/ 33606:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form-list/incident-form-list.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormListPageModule": function() { return /* binding */ IncidentFormListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incident_form_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-form-list-routing.module */ 44230);
/* harmony import */ var _incident_form_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-form-list.page */ 66016);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 72533);










let IncidentFormListPageModule = class IncidentFormListPageModule {
};
IncidentFormListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _incident_form_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidentFormListPageRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [
            _incident_form_list_page__WEBPACK_IMPORTED_MODULE_1__.IncidentFormListPage,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], IncidentFormListPageModule);



/***/ }),

/***/ 66016:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form-list/incident-form-list.page.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormListPage": function() { return /* binding */ IncidentFormListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incident_form_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incident-form-list.page.html */ 26905);
/* harmony import */ var _incident_form_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-form-list.page.scss */ 71492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading-service/loading.service */ 80513);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared-service/shared.service */ 49481);









let IncidentFormListPage = class IncidentFormListPage {
    constructor(nav, global, loadingService, sharedService) {
        this.nav = nav;
        this.global = global;
        this.loadingService = loadingService;
        this.sharedService = sharedService;
        this.pName = 'Submitted Forms';
        this.allSubmittedFormlist = [];
        this.newList = [];
        this.listOfUsers = [];
        this.size = 10;
        this.totalElements = 0;
        // totalPages: number = 0;
        this.pageNumber = 0;
        this.offset = 0;
    }
    ngOnInit() {
        this.onResize(window);
        // this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
        this.setValueOnLoadData();
    }
    onResize(event) {
        this.getScreenWidth = this.sharedService.resize(event);
        // this.getScreenWidth = event.innerWidth ? event.innerWidth : event.target.innerWidth;
    }
    setValueOnLoadData() {
        let screen = this.getScreenWidth < 1080 ? 'mobile' : 'web';
        if (screen == 'mobile') {
            this.loadData('', 1, screen);
        }
        else {
            let object = {
                count: 60,
                limit: 10,
                offset: 0,
                pageSize: 10,
            };
            this.loadData(object, '', screen);
        }
    }
    loadData(event, pageNo, screen) {
        if (screen == 'mobile') {
            this.pageNumber = event == 'newList' ? ++pageNo : pageNo;
        }
        if (screen == 'web') {
            this.pageNumber = (event.offset + 1);
            this.offset = event.offset;
        }
        if (this.pageNumber != 0) {
            // this.loadingService.presentLoading();
            this.global.getData('add_form/get/?page_no=' + this.pageNumber).subscribe((result) => {
                if (result && result.data && result.data.mforms_add_form && result.data.mforms_add_form.length > 0) {
                    result.data.mforms_add_form.sort(function (a, b) {
                        let keyA = new Date(a.Date), keyB = new Date(b.Date);
                        if (keyA > keyB)
                            return -1;
                        if (keyA < keyB)
                            return 1;
                        return 0;
                    });
                    result.data.mforms_add_form.forEach((el) => {
                        if (el.Form == 'mforms_add_form') {
                            el.Form = 'Incident';
                        }
                        else if (el.Form == 'mforms_telehandler') {
                            el.Form = 'Telehandler Prestarts';
                        }
                        else if (el.Form == 'mforms_crane') {
                            el.Form = 'Crane Prestarts';
                        }
                        else if (el.Form == 'mforms_prestart_vehicle_hoist') {
                            el.Form = 'Vehicle Hoist Prestarts';
                        }
                        el.Date = moment__WEBPACK_IMPORTED_MODULE_4___default()(el.Date).format("DD-MM-YYYY hh:mm");
                        // el.Date = moment(el.Date, "YYYY-MM-DD HH:m:ss").format("DD-MM-YYYY hh:mm:ss");
                        el.Status = (el.Status == 0 ? 'In progress' : (el.Status == 1 ? 'Completed' : (el.Status == 2 ? 'Cancel' : '')));
                    });
                    // this.totalPages = result.total_pages;
                    this.totalElements = result.row_count;
                    if (screen == 'mobile') {
                        if (this.allSubmittedFormlist.length == 0) {
                            this.allSubmittedFormlist = result.data.mforms_add_form;
                        }
                        else {
                            this.newList = this.allSubmittedFormlist;
                            this.allSubmittedFormlist = this.newList.concat(result.data.mforms_add_form);
                        }
                    }
                    if (screen == 'web') {
                        this.allSubmittedFormlist = result.data.mforms_add_form;
                    }
                    // console.log(' this.allSubmittedFormlist ', this.allSubmittedFormlist);
                }
                // this.loadingService.dismissLoading();
            }, err => {
                // this.loadingService.dismissLoading();
                console.log(err);
            });
        }
    }
    onGoToEdit(rowData) {
        if (rowData && rowData.Form == 'Incident') {
            this.nav.navigateRoot("/home/safety-menu/incident-form-edit/" + rowData.Id);
        }
        else if (rowData && rowData.Form == 'Telehandler Prestarts') {
            this.nav.navigateRoot("/home/safety-menu/telehandler-add-form/" + rowData.Id);
        }
        else if (rowData && rowData.Form == 'Crane Prestarts') {
            this.nav.navigateRoot("/home/safety-menu/crane-add-form/" + rowData.Id);
        }
        else if (rowData && rowData.Form == 'Vehicle Hoist Prestarts') {
            this.nav.navigateRoot("/home/safety-menu/vehicle-hoist-add-form/" + rowData.Id);
        }
    }
    onGoToDetails(rowData) {
        if (rowData && rowData.Form == 'Incident') {
            this.nav.navigateRoot("/home/safety-menu/incident-details/" + rowData.Id);
        }
        else if (rowData && rowData.Form == 'Telehandler Prestarts') {
            this.nav.navigateRoot("/home/safety-menu/telehandler-view-detail/" + rowData.Id);
        }
        else if (rowData && rowData.Form == 'Crane Prestarts') {
            this.nav.navigateRoot("/home/safety-menu/crane-view-detail/" + rowData.Id);
        }
        else if (rowData && rowData.Form == 'Vehicle Hoist Prestarts') {
            this.nav.navigateRoot("/home/safety-menu/vehicle-host-view-detail/" + rowData.Id);
        }
    }
};
IncidentFormListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService }
];
IncidentFormListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-incident-form-list',
        template: _raw_loader_incident_form_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incident_form_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener)('window:resize', ['$event'])
], IncidentFormListPage);



/***/ }),

/***/ 80513:
/*!*************************************************************!*\
  !*** ./src/app/services/loading-service/loading.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
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
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 71492:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form-list/incident-form-list.page.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-disabled {\n  color: grey;\n}\n\n.item-option {\n  background: white;\n  color: #1c6afe !important;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LWZvcm0tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImluY2lkZW50LWZvcm0tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLml0ZW0tb3B0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMxYzZhZmUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 26905:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/incident/incident-form-list/incident-form-list.page.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content (window:resize)=\"onResize($event)\">\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n    <ion-list *ngIf=\"getScreenWidth < 768\">\n      <ion-card *ngFor=\"let rowData of allSubmittedFormlist; let i = index\">\n        <ion-item-sliding>\n          <ion-item lines=\"none\">\n            <ion-label>\n\n              <!-- <ion-row>\n                <ion-col size=\"auto\">\n                  <ion-label>Sr. No :</ion-label>\n                </ion-col>\n                <ion-col>\n                  <p class=\"value\">\n                    {{(i+1)}}\n                  </p>\n                </ion-col>\n              </ion-row> -->\n\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <h2>Form :</h2>\n                </ion-col>\n                <ion-col>\n                  <ion-text color=\"primary\">\n                   <b>{{rowData.Form}}</b> \n                  </ion-text>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <ion-label>Date :</ion-label>\n                </ion-col>\n                <ion-col>\n                  <p class=\"value\">\n                    {{rowData.Date}}\n                  </p>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <ion-label>Name :</ion-label>\n                </ion-col>\n                <ion-col>\n                  <p class=\"value\"> {{rowData.Name}}</p>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <ion-label>Delegated :</ion-label>\n                </ion-col>\n                <ion-col>\n                  <p class=\"value\"> {{rowData.Delegate}}</p>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"auto\">\n                  <ion-label>Status :</ion-label>\n                </ion-col>\n                <ion-col>\n                  <b class=\"value\" *ngIf=\"rowData.Status == 'Completed'\">\n                    <ion-text color=\"success\">{{rowData.Status}}</ion-text>\n                  </b>\n                  <b class=\"value\" *ngIf=\"rowData.Status == 'In progress'\">\n                    <ion-text color=\"warning\">{{rowData.Status}}</ion-text>\n                  </b>\n                  <b class=\"value\" *ngIf=\"rowData.Status == 'Cancel'\">\n                    <ion-text color=\"danger\">{{rowData.Status}}</ion-text>\n                  </b>\n                </ion-col>\n              </ion-row>\n            </ion-label>\n          </ion-item>\n\n          <ion-item-options side=\"end\">\n            <ion-item-option class=\"item-option\" (click)=\"onGoToDetails(rowData)\" title=\"View\">\n              <ion-icon slot=\"icon-only\" name=\"eye-outline\" style=\"pointer-events:none\"></ion-icon>\n            </ion-item-option>\n\n            <ion-item-option class=\"item-option\" (click)=\"onGoToEdit(rowData)\" title=\"Edit\">\n              <ion-icon slot=\"icon-only\" name=\"create-outline\" style=\"pointer-events:none\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-card>\n\n      <span *ngIf=\" totalElements != ((pageNumber - 1) * (size + 1))\">\n        <div *ngIf=\"allSubmittedFormlist.length > 0\" class=\"ion-margin-top ion-text-center\">\n          <a href=\"javascript:void(0)\" (click)=\"loadData('newList', pageNumber, 'mobile')\">Load More </a>\n        </div>\n      </span>\n    </ion-list>\n\n    <ngx-datatable class=\"material\" [rows]=\"allSubmittedFormlist\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n      [footerHeight]=\"50\" rowHeight=\"auto\" [externalPaging]=\"true\" [count]=\"totalElements\" [offset]=\"offset\"\n      [limit]=\"size\" (page)=\"loadData($event, '','web')\" *ngIf=\"getScreenWidth >= 768\">\n\n      <ngx-datatable-column name=\"Sr.No\" [minWidth]=\"5\" [resizeable]=\"true\">\n        <ng-template let-rowIndex=\"rowIndex\" let-value=\"rows\" ngx-datatable-cell-template>{{ (pageNumber - 1) * size +\n          rowIndex +1 }}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Form\" prop=\"Form\" [minWidth]=\"100\" [resizeable]=\"true\">\n        <ng-template let-value=\"value\" ngx-datatable-cell-template let-row=\"row\">\n          <ion-text color=\"primary\">{{value}}</ion-text>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Date\" prop=\"Date\" [minWidth]=\"50\" [resizeable]=\"true\">\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Name\" prop=\"Name\" [minWidth]=\"50\" [resizeable]=\"true\">\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Delegated\" prop=\"Delegate\" [minWidth]=\"50\" [resizeable]=\"true\">\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Status\" prop=\"Status\" [minWidth]=\"50\" [resizeable]=\"true\">\n        <ng-template let-value=\"value\" ngx-datatable-cell-template let-row=\"row\">\n          <ion-text color=\"success\" *ngIf=\"value == 'Completed'\">{{value}}</ion-text>\n          <ion-text color=\"warning\" *ngIf=\"value == 'In progress'\">{{value}}</ion-text>\n          <ion-text color=\"danger\" *ngIf=\"value == 'Cancel'\">{{value}}</ion-text>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column [minWidth]=\"20\" [resizeable]=\"true\" prop=\"Id\">\n        <ng-template let-column=\"column\" ngx-datatable-header-template>View</ng-template>\n        <ng-template let-value=\"value\" ngx-datatable-cell-template let-row=\"row\">\n          <span title=\"View\" (click)=\"onGoToDetails(row)\">\n            <ion-icon class=\"view\" slot=\"icon-only\" name=\"eye-outline\" style=\"pointer-events:none\"></ion-icon>\n          </span>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column [minWidth]=\"20\" [resizeable]=\"true\" prop=\"Id\">\n        <ng-template let-column=\"column\" ngx-datatable-header-template>Edit</ng-template>\n        <ng-template let-value=\"value\" ngx-datatable-cell-template let-row=\"row\">\n          <span title=\"Edit\" (click)=\"onGoToEdit(row)\">\n            <ion-icon class=\"view\" slot=\"icon-only\" name=\"create-outline\" style=\"pointer-events:none\">\n            </ion-icon>\n          </span>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <div class=\"d-flex justify-content-center\">\n        <pagination-controls previousLabel=\"Prev\" nextLabel=\"Next\" (pageChange)=\"loadData($event, '', 'web')\">\n        </pagination-controls>\n      </div>\n    </ngx-datatable>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_incident_incident-form-list_incident-form-list_module_ts-es2015.js.map