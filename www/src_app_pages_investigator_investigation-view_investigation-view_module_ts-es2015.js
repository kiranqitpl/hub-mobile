(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_investigator_investigation-view_investigation-view_module_ts"],{

/***/ 49858:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/investigator/investigation-view/investigation-view-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestigationViewPageRoutingModule": function() { return /* binding */ InvestigationViewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _investigation_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investigation-view.page */ 7805);




const routes = [
    {
        path: '',
        component: _investigation_view_page__WEBPACK_IMPORTED_MODULE_0__.InvestigationViewPage
    }
];
let InvestigationViewPageRoutingModule = class InvestigationViewPageRoutingModule {
};
InvestigationViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvestigationViewPageRoutingModule);



/***/ }),

/***/ 67078:
/*!************************************************************************************!*\
  !*** ./src/app/pages/investigator/investigation-view/investigation-view.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestigationViewPageModule": function() { return /* binding */ InvestigationViewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _investigation_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investigation-view-routing.module */ 49858);
/* harmony import */ var _investigation_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investigation-view.page */ 7805);







// import { HeaderComponent } from 'src/app/shared-component/header/header.component';
let InvestigationViewPageModule = class InvestigationViewPageModule {
};
InvestigationViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _investigation_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvestigationViewPageRoutingModule
        ],
        declarations: [
            _investigation_view_page__WEBPACK_IMPORTED_MODULE_1__.InvestigationViewPage,
            // HeaderComponent
        ]
    })
], InvestigationViewPageModule);



/***/ }),

/***/ 7805:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/investigator/investigation-view/investigation-view.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestigationViewPage": function() { return /* binding */ InvestigationViewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_investigation_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./investigation-view.page.html */ 36110);
/* harmony import */ var _investigation_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investigation-view.page.scss */ 93439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global-service/global.service */ 89985);







let InvestigationViewPage = class InvestigationViewPage {
    constructor(nav, activatedRoute, globalService) {
        this.nav = nav;
        this.activatedRoute = activatedRoute;
        this.globalService = globalService;
        this.pName = "Investigation";
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        // this.globalService.presentLoading();
        this.activatedRoute.params.subscribe((params) => {
            this.globalService.getData('investigator/getInvestigationFormByID/' + params['investigation_id']).subscribe(result => {
                if (result['status']) {
                    this.data = result['data'][0];
                }
                else {
                    console.log("error");
                }
                // this.globalService.dismissLoading();
            }), error => {
                // this.globalService.dismissLoading();
                console.log("error", error);
            };
            // this.globalService.dismissLoading();
        });
    }
    goBack() {
        this.nav.back();
    }
};
InvestigationViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
InvestigationViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-investigation-view',
        template: _raw_loader_investigation_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_investigation_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvestigationViewPage);



/***/ }),

/***/ 93439:
/*!************************************************************************************!*\
  !*** ./src/app/pages/investigator/investigation-view/investigation-view.page.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .headerTitle {\n  font-family: \"mon-bold\";\n  font-size: 17px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdGlnYXRpb24tdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiaW52ZXN0aWdhdGlvbi12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmhlYWRlclRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 36110:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/investigator/investigation-view/investigation-view.page.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- <app-header [pageName]=\"pName\"></app-header> -->\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-content>\n        <!-- <div class=\"ion-padding-start ion-padding-end \"> -->\n\n          <div class=\"headerTitle\">\n           Investigation team members\n          </div>\n          <p class=\"question\">Name</p>\n          <p class=\"value\">{{data?.investigator_name}}</p>\n\n          <p class=\"question\">Date Investigation Commenced</p>\n          <p class=\"value\">{{data?.date_investigation_commenced}}</p>\n          <p class=\"question\">Reportable Incident - Statutory Body</p>\n          <p class=\"value\">{{data?.reportable_incident}}</p>\n          <hr />\n          <div class=\"headerTitle\">\n            Sequence of events\n          </div>\n          <p class=\"question\">Pre Incident Contributing Events</p>\n          <p class=\"value\">{{data?.pre_incident_contributing_events}}</p>\n\n          <p class=\"question\">Post Incident Events</p>\n          <p class=\"value\">{{data?.post_incident_events}}</p>\n\n          <p class=\"question\">Other Contributing Event Factors</p>\n          <p class=\"value\">{{data?.other_contributing_event_factors}}</p>\n\n          <p class=\"question\">Critical Controls Applicable For Task</p>\n          <p class=\"value\">{{data?.critical_controls_applicable_for_task}}</p>\n\n          <hr />\n          <div class=\"headerTitle\">\n            Investigators Initial Findings (Event Factors)\n          </div>\n\n          <p class=\"question\">Workplace Conditions</p>\n          <p class=\"value\">{{data?.workplace_conditions}}</p>\n\n          <p class=\"question\">Work and People Practices</p>\n          <p class=\"value\">{{data?.work_and_people_practices}}</p>\n\n          <p class=\"question\">Employee Competence</p>\n          <p class=\"value\">{{data?.employee_competence}}</p>\n\n          <p class=\"question\">Experience</p>\n          <p class=\"value\">{{data?.experience}}</p>\n\n          <p class=\"question\">Plant, Equipment Or Tooling Involve In Incident</p>\n          <p class=\"value\">{{data?.plant_equipment_or_tooling_involve_in_incident}}</p>\n\n          <p class=\"question\">Relevant Documentation</p>\n          <p class=\"value\">{{data?.relevant_documentation}}</p>\n\n          <p class=\"question\">Environmental Related Factors</p>\n          <p class=\"value\">{{data?.environmental_related_factors}}</p>\n\n          <p class=\"question\">Critical control Defence Failure / Absent / Non-Compliance</p>\n          <p class=\"value\">{{data?.critical_control_defence_failure_absent_non_compliance}}</p>\n          <hr />\n\n          <div class=\"headerTitle\">\n            Immediate Cause Analysis\n          </div>\n          <p class=\"question\">What Substandard Acts / Practices And Conditions Caused or Could Cause the Incident</p>\n          <p class=\"value\">{{data?.what_substandard_acts_practices_and_conditions_caused_or_could}}</p>\n          <p class=\"question\">What Systems / Personal Factors Caused or Could Cause The Incident</p>\n          <p class=\"value\">{{data?.what_systems_personal_factors_caused_or_could_cause_the_incident}} </p>\n          <hr />\n          <div class=\"headerTitle\">\n            Investigation Team Conclusion of Incident Causes\n          </div>\n          <p class=\"question\">Root Cause</p>\n          <p class=\"value\">{{data?.root_cause}}</p>\n          <p class=\"question\">Key Learnings</p>\n          <p class=\"value\">{{data?.key_earnings}}</p>\n\n          <p class=\"question\">Comments</p>\n          <p class=\"value\">{{data?.comments}}</p>\n\n          <p class=\"question\">Is a Safety, Environmental or Quality Alert Required?</p>\n          <p class=\"value\">{{data?.is_a_safety_environmental_or_quality_alert_required}}</p>\n\n          <hr />\n          <div class=\"headerTitle\">\n            Additional Investigation\n          </div>\n          <p class=\"question\">Additional Investigation Required</p>\n          <p class=\"value\">{{data?.additional_investigation_required}}</p>\n\n          <p class=\"question\">Type</p>\n          <p class=\"value\">{{data?.type}}</p>\n          <hr />\n        <!-- </div> -->\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_investigator_investigation-view_investigation-view_module_ts-es2015.js.map