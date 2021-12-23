(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_safety-menu_module_ts"],{

/***/ 57393:
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMenuPageRoutingModule": function() { return /* binding */ SafetyMenuPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-menu.page */ 74532);




const routes = [
    {
        path: '',
        component: _safety_menu_page__WEBPACK_IMPORTED_MODULE_0__.SafetyMenuPage
    },
    {
        path: 'prestart-dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_safety-menu_prestart_prestart-dashboard_prestart-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/prestart-dashboard/prestart-dashboard.module */ 8492)).then(m => m.PrestartDashboardPageModule)
    },
    {
        path: 'incident-form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-bd3570"), __webpack_require__.e("src_app_pages_home_safety-menu_incident_incident-form_incident-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./incident/incident-form/incident-form.module */ 96394)).then(m => m.IncidentFormPageModule)
    },
    {
        path: 'incident-form-edit/:incident_id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-bd3570"), __webpack_require__.e("src_app_pages_home_safety-menu_incident_incident-form-edit_incident-form-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./incident/incident-form-edit/incident-form-edit.module */ 97694)).then(m => m.IncidentFormEditPageModule)
    },
    {
        path: 'incident-details/:incident_id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_safety-menu_incident_incident-details_incident-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./incident/incident-details/incident-details.module */ 22641)).then(m => m.IncidentDetailsPageModule)
    },
    {
        path: 'telehandler-add-form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_safety-menu_prestart_telehandler_telehandler-add-form_telehandler-add-form-b0535c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/telehandler/telehandler-add-form/telehandler-add-form.module */ 4459)).then(m => m.TelehandlerAddFormPageModule)
    },
    {
        path: 'telehandler-add-form/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_safety-menu_prestart_telehandler_telehandler-add-form_telehandler-add-form-b0535c")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/telehandler/telehandler-add-form/telehandler-add-form.module */ 4459)).then(m => m.TelehandlerAddFormPageModule)
    },
    {
        path: 'telehandler-view-detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_safety-menu_prestart_telehandler_telehandler-view-detail_telehandler-view--8e57a8").then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/telehandler/telehandler-view-detail/telehandler-view-detail.module */ 75656)).then(m => m.TelehandlerViewDetailPageModule)
    },
    {
        path: 'crane-add-form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_safety-menu_prestart_crane_crane-add-form_crane-add-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/crane/crane-add-form/crane-add-form.module */ 96614)).then(m => m.CraneAddFormPageModule)
    },
    {
        path: 'crane-add-form/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_safety-menu_prestart_crane_crane-add-form_crane-add-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/crane/crane-add-form/crane-add-form.module */ 96614)).then(m => m.CraneAddFormPageModule)
    },
    {
        path: 'crane-view-detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_safety-menu_prestart_crane_crane-view-detail_crane-view-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/crane/crane-view-detail/crane-view-detail.module */ 35718)).then(m => m.CraneViewDetailPageModule)
    },
    {
        path: 'vehicle-hoist-add-form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-hoist-add-form_vehicle-hoist-ad-634e0e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.module */ 79496)).then(m => m.VehicleHoistAddFormPageModule)
    },
    {
        path: 'vehicle-hoist-add-form/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-hoist-add-form_vehicle-hoist-ad-634e0e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.module */ 79496)).then(m => m.VehicleHoistAddFormPageModule)
    },
    {
        path: 'vehicle-host-view-detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-host-view-detail_vehicle-host-v-1b091b").then(__webpack_require__.bind(__webpack_require__, /*! ./prestart/vehicle-hoist/vehicle-host-view-detail/vehicle-host-view-detail.module */ 89304)).then(m => m.VehicleHostViewDetailPageModule)
    },
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

/***/ 37050:
/*!**************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu.module.ts ***!
  \**************************************************************/
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
/* harmony import */ var _safety_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-menu-routing.module */ 57393);
/* harmony import */ var _safety_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-menu.page */ 74532);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let SafetyMenuPageModule = class SafetyMenuPageModule {
};
SafetyMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _safety_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyMenuPageRoutingModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [
            _safety_menu_page__WEBPACK_IMPORTED_MODULE_1__.SafetyMenuPage,
        ],
    })
], SafetyMenuPageModule);



/***/ }),

/***/ 74532:
/*!************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMenuPage": function() { return /* binding */ SafetyMenuPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-menu.page.html */ 59843);
/* harmony import */ var _safety_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-menu.page.scss */ 30208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SafetyMenuPage = class SafetyMenuPage {
    constructor() {
        this.menu = [
            {
                menuName: "Prestart", route: "/home/safety-menu/prestart-dashboard"
            },
            {
                menuName: "Incident", route: "/home/safety-menu/incident-form"
            },
            {
                menuName: "Hazard Report", route: "#"
            },
            {
                menuName: "SBO", route: "#"
            },
        ];
        this.pName = "Safety";
    }
    ngOnInit() { }
};
SafetyMenuPage.ctorParameters = () => [];
SafetyMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-safety-menu',
        template: _raw_loader_safety_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyMenuPage);



/***/ }),

/***/ 30208:
/*!**************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/safety-menu.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".getSpace {\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmV0eS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic2FmZXR5LW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldFNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufSJdfQ== */");

/***/ }),

/***/ 59843:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/safety-menu.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xl=\"6\" size-xs=\"12\">\n        <div class=\"btnView\">\n          <ion-button class=\"btn\" *ngFor=\"let item of menu\" [routerLink]=\"item.route\">\n            {{item.menuName}}\n          </ion-button>\n        </div>\n      </ion-col>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_safety-menu_module_ts-es2015.js.map