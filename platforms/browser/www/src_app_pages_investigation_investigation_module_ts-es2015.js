(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_investigation_investigation_module_ts"],{

/***/ 69441:
/*!*********************************************************************!*\
  !*** ./src/app/pages/investigation/investigation-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestigationPageRoutingModule": function() { return /* binding */ InvestigationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _investigation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investigation.page */ 92334);




const routes = [
    {
        path: '',
        component: _investigation_page__WEBPACK_IMPORTED_MODULE_0__.InvestigationPage
    }
];
let InvestigationPageRoutingModule = class InvestigationPageRoutingModule {
};
InvestigationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvestigationPageRoutingModule);



/***/ }),

/***/ 87804:
/*!*************************************************************!*\
  !*** ./src/app/pages/investigation/investigation.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestigationPageModule": function() { return /* binding */ InvestigationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _investigation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investigation-routing.module */ 69441);
/* harmony import */ var _investigation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investigation.page */ 92334);







let InvestigationPageModule = class InvestigationPageModule {
};
InvestigationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _investigation_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvestigationPageRoutingModule
        ],
        declarations: [_investigation_page__WEBPACK_IMPORTED_MODULE_1__.InvestigationPage]
    })
], InvestigationPageModule);



/***/ }),

/***/ 92334:
/*!***********************************************************!*\
  !*** ./src/app/pages/investigation/investigation.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestigationPage": function() { return /* binding */ InvestigationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_investigation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./investigation.page.html */ 7737);
/* harmony import */ var _investigation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investigation.page.scss */ 19445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 97465);







let InvestigationPage = class InvestigationPage {
    constructor(nav, global) {
        this.nav = nav;
        this.global = global;
        this.data = [];
        this.selected = 'Investigation team members';
        this.incident_id = "";
        this.name = "";
        this.date_investigation_commenced = "";
        this.reportable_incident = "";
        this.pre_incident_contributing_events = "";
        this.impact_contact_events = "";
        this.post_incident_events = "";
        this.other_contributing_event_factors = "";
        this.critical_controls_applicable_for_task = "";
        this.workplace_conditions = "";
        this.work_and_people_practices = "";
        this.employee_competence = "";
        this.experience = "";
        this.plant_equipment_or_tooling_involve_in_incident = "";
        this.relevant_documentation = "";
        this.environmental_related_factors = "";
        this.critical_control_defence_failure_absent_non_compliance = "";
        this.what_substandard_acts_practices_and_conditions_caused_or_could = "";
        this.what_systems_personal_factors_caused_or_could_cause_the_incident = "";
        this.root_cause = "";
        this.key_earnings = "";
        this.comments = "";
        this.isFrom = "";
        this.is_a_safety_environmental_or_quality_alert_required = "";
        this.additional_investigation_required = "";
        this.type = "";
        this.investigatorId = "";
        this.names = [];
        this.listOfUsers = [];
        this.reputationCheckBox = [
            {
                val: "Safety",
                isChecked: false
            },
            {
                val: "Environmental",
                isChecked: false
            },
            {
                val: "Quality",
                isChecked: false
            },
            {
                val: "N/A",
                isChecked: false
            }
        ];
    }
    ngOnInit() {
        this.data = [
            'Investigation team members',
            'Sequence of events',
            'Investigators Initial Findings (Event Factors)',
            'Immediate Cause Analysis',
            'Investigation Team Conclusion of Incident Causes',
            'Additional Investigation'
        ];
    }
    ionViewWillEnter() {
        var _a, _b;
        let d = JSON.parse(localStorage.getItem("singleView"));
        this.incident_id = d.id;
        this.global.getData("api/Investigator/getInvestigator").subscribe((res) => {
            if (res) {
                this.listOfUsers = res.data;
            }
            else {
                console.log("response of get investigator api", res);
            }
        }, err => {
            console.log(err);
        });
        this.isFrom = localStorage.getItem("isInvestigationFrom");
        if (this.isFrom == 'edit') {
            this.investigatorId = d.investigation_details.id;
            let investigatorDetails = d.investigation_details;
            this.selectedName = investigatorDetails.name;
            this.additional_investigation_required = investigatorDetails.additional_investigation_required;
            if (investigatorDetails.comments !== undefined && investigatorDetails.comments !== 'undefined') {
                this.comments = investigatorDetails.comments;
            }
            if (investigatorDetails.critical_control_defence_failure_absent_non_compliance !== undefined && investigatorDetails.critical_control_defence_failure_absent_non_compliance !== 'undefined') {
                this.critical_control_defence_failure_absent_non_compliance = investigatorDetails.critical_control_defence_failure_absent_non_compliance;
            }
            if (investigatorDetails.critical_controls_applicable_for_task !== undefined && investigatorDetails.critical_controls_applicable_for_task !== 'undefined') {
                this.critical_controls_applicable_for_task = investigatorDetails.critical_controls_applicable_for_task;
            }
            this.date_investigation_commenced = investigatorDetails.date_investigation_commenced;
            this.impact_contact_events = investigatorDetails.impact_contact_events;
            let chekBoxDetails = (_a = investigatorDetails === null || investigatorDetails === void 0 ? void 0 : investigatorDetails.is_a_safety_environmental_or_quality_alert_required) === null || _a === void 0 ? void 0 : _a.split(",");
            this.reputationCheckBox.forEach((el) => {
                chekBoxDetails.forEach((ele) => {
                    if (el.val == ele) {
                        el.isChecked = true;
                    }
                });
            });
            if (investigatorDetails.key_earnings !== undefined && investigatorDetails.key_earnings !== 'undefined') {
                this.key_earnings = investigatorDetails.key_earnings;
            }
            if ((investigatorDetails === null || investigatorDetails === void 0 ? void 0 : investigatorDetails.name) !== null) {
                this.selectedName = (_b = investigatorDetails === null || investigatorDetails === void 0 ? void 0 : investigatorDetails.name[0]) === null || _b === void 0 ? void 0 : _b.investigator_name;
            }
            if (investigatorDetails.other_contributing_event_factors !== undefined && investigatorDetails.other_contributing_event_factors !== 'undefined') {
                this.other_contributing_event_factors = investigatorDetails.other_contributing_event_factors;
            }
            //pre_incident_contributing_events
            if (investigatorDetails.pre_incident_contributing_events !== undefined && investigatorDetails.pre_incident_contributing_events !== 'undefined') {
                this.pre_incident_contributing_events = investigatorDetails.pre_incident_contributing_events;
            }
            if (investigatorDetails.workplace_conditions !== undefined && investigatorDetails.workplace_conditions !== 'undefined') {
                this.workplace_conditions = investigatorDetails.workplace_conditions;
            }
            if (investigatorDetails.work_and_people_practices !== undefined && investigatorDetails.work_and_people_practices !== 'undefined') {
                this.work_and_people_practices = investigatorDetails.work_and_people_practices;
            }
            if (investigatorDetails.employee_competence !== undefined && investigatorDetails.employee_competence !== 'undefined') {
                this.employee_competence = investigatorDetails.employee_competence;
            }
            if (investigatorDetails.experience !== undefined && investigatorDetails.experience !== 'undefined') {
                this.experience = investigatorDetails.experience;
            }
            if (investigatorDetails.plant_equipment_or_tooling_involve_in_incident !== undefined && investigatorDetails.plant_equipment_or_tooling_involve_in_incident !== 'undefined') {
                this.plant_equipment_or_tooling_involve_in_incident = investigatorDetails.plant_equipment_or_tooling_involve_in_incident;
            }
            if (investigatorDetails.relevant_documentation !== undefined && investigatorDetails.relevant_documentation !== 'undefined') {
                this.relevant_documentation = investigatorDetails.relevant_documentation;
            }
            if (investigatorDetails.environmental_related_factors !== undefined && investigatorDetails.environmental_related_factors !== 'undefined') {
                this.environmental_related_factors = investigatorDetails.environmental_related_factors;
            }
            if (investigatorDetails.critical_control_defence_failure_absent_non_compliance !== undefined && investigatorDetails.critical_control_defence_failure_absent_non_compliance !== 'undefined') {
                this.critical_control_defence_failure_absent_non_compliance = investigatorDetails.critical_control_defence_failure_absent_non_compliance;
            }
            if (investigatorDetails.what_substandard_acts_practices_and_conditions_caused_or_could !== undefined && investigatorDetails.what_substandard_acts_practices_and_conditions_caused_or_could !== 'undefined') {
                this.what_substandard_acts_practices_and_conditions_caused_or_could = investigatorDetails.what_substandard_acts_practices_and_conditions_caused_or_could;
            }
            if (investigatorDetails.post_incident_events !== undefined && investigatorDetails.post_incident_events !== 'undefined') {
                this.post_incident_events = investigatorDetails.post_incident_events;
            }
            this.reportable_incident = investigatorDetails.reportable_incident;
            if (investigatorDetails.root_cause !== undefined && investigatorDetails.root_cause !== 'undefined') {
                this.root_cause = investigatorDetails.root_cause;
            }
            this.type = investigatorDetails.type;
            if (investigatorDetails.what_systems_personal_factors_caused_or_could_cause_the_incident !== undefined && investigatorDetails.what_systems_personal_factors_caused_or_could_cause_the_incident !== 'undefined') {
                this.what_systems_personal_factors_caused_or_could_cause_the_incident = investigatorDetails.what_systems_personal_factors_caused_or_could_cause_the_incident;
            }
        }
    }
    checkDetails(i) {
        this.selected = i;
        if (this.isFrom == 'add') {
            let localDataStore = {
                name: this.selectedName,
                date_investigation_commenced: this.date_investigation_commenced,
                reportable_incident: this.reportable_incident,
                pre_incident_contributing_events: this.pre_incident_contributing_events,
                post_incident_events: this.post_incident_events,
                other_contributing_event_factors: this.other_contributing_event_factors,
                critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
                workplace_conditions: this.workplace_conditions,
                work_and_people_practices: this.work_and_people_practices,
                employee_competence: this.employee_competence,
                experience: this.experience,
                plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
                relevant_documentation: this.relevant_documentation,
                environmental_related_factors: this.environmental_related_factors,
                critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
                what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
                what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
                key_earnings: this.key_earnings,
                comments: this.comments,
                reputationCheckBox: this.reputationCheckBox,
                additional_investigation_required: this.additional_investigation_required,
                type: this.type,
                id: this.incident_id
            };
            localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore));
        }
    }
    additionalRadio(event) {
        this.additional_investigation_required = event.detail.value;
        if (this.isFrom == 'add') {
            let localDataStore = {
                name: this.selectedName,
                date_investigation_commenced: this.date_investigation_commenced,
                reportable_incident: this.reportable_incident,
                pre_incident_contributing_events: this.pre_incident_contributing_events,
                post_incident_events: this.post_incident_events,
                other_contributing_event_factors: this.other_contributing_event_factors,
                critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
                workplace_conditions: this.workplace_conditions,
                work_and_people_practices: this.work_and_people_practices,
                employee_competence: this.employee_competence,
                experience: this.experience,
                plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
                relevant_documentation: this.relevant_documentation,
                environmental_related_factors: this.environmental_related_factors,
                critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
                what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
                what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
                key_earnings: this.key_earnings,
                comments: this.comments,
                reputationCheckBox: this.reputationCheckBox,
                additional_investigation_required: this.additional_investigation_required,
                type: this.type,
                id: this.incident_id
            };
            localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore));
        }
    }
    typeSelect(e) {
        if (this.isFrom == 'add') {
            let localDataStore = {
                name: this.selectedName,
                date_investigation_commenced: this.date_investigation_commenced,
                reportable_incident: this.reportable_incident,
                pre_incident_contributing_events: this.pre_incident_contributing_events,
                post_incident_events: this.post_incident_events,
                other_contributing_event_factors: this.other_contributing_event_factors,
                critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
                workplace_conditions: this.workplace_conditions,
                work_and_people_practices: this.work_and_people_practices,
                employee_competence: this.employee_competence,
                experience: this.experience,
                plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
                relevant_documentation: this.relevant_documentation,
                environmental_related_factors: this.environmental_related_factors,
                critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
                what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
                what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
                key_earnings: this.key_earnings,
                comments: this.comments,
                reputationCheckBox: this.reputationCheckBox,
                additional_investigation_required: this.additional_investigation_required,
                type: this.type,
                id: this.incident_id
            };
            localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore));
        }
    }
    deSelect(i) {
        this.selected = '';
    }
    dateSelect(e) {
        moment__WEBPACK_IMPORTED_MODULE_2__(e.detail.value).format("YYYY-MM-DD");
        this.date_investigation_commenced = moment__WEBPACK_IMPORTED_MODULE_2__(e.detail.value).format("YYYY-MM-DD");
    }
    selectedValue(e) {
        this.listOfUsers.forEach((ele) => {
            if (ele.full_name == e.detail.value) {
                let data = {
                    user_id: ele.id,
                    user_name: ele.full_name
                };
                this.selectedName = ele.full_name;
                this.names.push(data);
            }
        });
    }
    selectChekbox(e) {
        if (this.isFrom == 'add') {
            let localDataStore = {
                name: this.selectedName,
                date_investigation_commenced: this.date_investigation_commenced,
                reportable_incident: this.reportable_incident,
                pre_incident_contributing_events: this.pre_incident_contributing_events,
                post_incident_events: this.post_incident_events,
                other_contributing_event_factors: this.other_contributing_event_factors,
                critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
                workplace_conditions: this.workplace_conditions,
                work_and_people_practices: this.work_and_people_practices,
                employee_competence: this.employee_competence,
                experience: this.experience,
                plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
                relevant_documentation: this.relevant_documentation,
                environmental_related_factors: this.environmental_related_factors,
                critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
                what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
                what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
                key_earnings: this.key_earnings,
                comments: this.comments,
                reputationCheckBox: this.reputationCheckBox,
                additional_investigation_required: this.additional_investigation_required,
                type: this.type,
                id: this.incident_id
            };
            localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore));
        }
    }
    onSubmit() {
        let ar = [];
        this.reputationCheckBox.forEach((e) => {
            if (e.isChecked) {
                ar.push(e.val);
            }
        });
        this.listOfUsers.forEach((ele) => {
            if (ele.full_name == this.selectedName) {
                let data = {
                    user_id: ele.id,
                    user_name: ele.full_name
                };
                this.selectedName = ele.full_name;
                this.names.push(data);
            }
        });
        this.is_a_safety_environmental_or_quality_alert_required = ar;
        this.name = [{ user_id: 100, user_name: 'Deepak' }, { user_id: 101, user_name: 'Gaurav' }];
        const fd = new FormData();
        if (this.isFrom == 'edit') {
            fd.append("id", this.investigatorId);
        }
        fd.append("incident_id", this.incident_id);
        fd.append("name", JSON.stringify(this.names));
        fd.append("date_investigation_commenced", this.date_investigation_commenced);
        fd.append("reportable_incident", this.reportable_incident);
        fd.append("pre_incident_contributing_events", this.pre_incident_contributing_events);
        fd.append("post_incident_events", this.post_incident_events);
        fd.append("other_contributing_event_factors", this.other_contributing_event_factors);
        fd.append("critical_controls_applicable_for_task", this.critical_controls_applicable_for_task);
        fd.append("workplace_conditions", this.workplace_conditions);
        fd.append("work_and_people_practices", this.work_and_people_practices);
        fd.append("employee_competence", this.employee_competence);
        fd.append("experience", this.experience);
        fd.append("plant_equipment_or_tooling_involve_in_incident", this.plant_equipment_or_tooling_involve_in_incident);
        fd.append("relevant_documentation", this.relevant_documentation);
        fd.append("environmental_related_factors", this.environmental_related_factors);
        fd.append("critical_control_defence_failure_absent_non_compliance", this.critical_control_defence_failure_absent_non_compliance);
        fd.append("what_substandard_acts_practices_and_conditions_caused_or_could", this.what_substandard_acts_practices_and_conditions_caused_or_could);
        fd.append("what_systems_personal_factors_caused_or_could_cause_the_incident", this.what_systems_personal_factors_caused_or_could_cause_the_incident);
        fd.append("root_cause", this.root_cause);
        fd.append("key_earnings", this.key_earnings);
        fd.append('comments', this.comments);
        fd.append("is_a_safety_environmental_or_quality_alert_required", this.is_a_safety_environmental_or_quality_alert_required);
        fd.append("additional_investigation_required", this.additional_investigation_required);
        fd.append("type", this.type);
        fd.append("investigator_id", localStorage.getItem("id"));
        console.log('onSubmit', fd);
        this.global.presentLoading();
        let addUrl = 'api/Investigator/submitInvestigation';
        let editUrl = 'api/Investigator/submitInvestigation';
        let url = this.isFrom == 'edit' ? editUrl : addUrl;
        this.global.postData(url, fd).subscribe((res) => {
            if (res.status) {
                this.global.presentToast(res.message);
                localStorage.removeItem("investigationLocalStorage");
                this.nav.navigateRoot("form-list");
            }
            else {
                this.global.presentToast("Something went wrong");
            }
            this.global.dismissLoading();
        }, err => {
            console.log("err", err);
            this.global.dismissLoading();
        });
    }
    saveItemOffline() {
        let ar = [];
        this.reputationCheckBox.forEach((e) => {
            if (e.isChecked) {
                ar.push(e.val);
            }
        });
        this.is_a_safety_environmental_or_quality_alert_required = ar;
        this.name = [{ user_id: 100, user_name: 'Deepak' }, { user_id: 101, user_name: 'Gaurav' }];
        this.listOfUsers.forEach((ele) => {
            if (ele.full_name == this.selectedName) {
                let data = {
                    user_id: ele.id,
                    user_name: ele.full_name
                };
                this.selectedName = ele.full_name;
                this.names.push(data);
            }
        });
        const fd = new FormData();
        if (this.isFrom == 'edit') {
            fd.append("id", this.investigatorId);
        }
        fd.append("incident_id", this.incident_id);
        fd.append("name", JSON.stringify(this.names));
        fd.append("date_investigation_commenced", this.date_investigation_commenced);
        fd.append("reportable_incident", this.reportable_incident);
        fd.append("pre_incident_contributing_events", this.pre_incident_contributing_events);
        fd.append("post_incident_events", this.post_incident_events);
        fd.append("other_contributing_event_factors", this.other_contributing_event_factors);
        fd.append("critical_controls_applicable_for_task", this.critical_controls_applicable_for_task);
        fd.append("workplace_conditions", this.workplace_conditions);
        fd.append("work_and_people_practices", this.work_and_people_practices);
        fd.append("employee_competence", this.employee_competence);
        fd.append("experience", this.experience);
        fd.append("plant_equipment_or_tooling_involve_in_incident", this.plant_equipment_or_tooling_involve_in_incident);
        fd.append("relevant_documentation", this.relevant_documentation);
        fd.append("environmental_related_factors", this.environmental_related_factors);
        fd.append("critical_control_defence_failure_absent_non_compliance", this.critical_control_defence_failure_absent_non_compliance);
        fd.append("what_substandard_acts_practices_and_conditions_caused_or_could", this.what_substandard_acts_practices_and_conditions_caused_or_could);
        fd.append("what_systems_personal_factors_caused_or_could_cause_the_incident", this.what_systems_personal_factors_caused_or_could_cause_the_incident);
        fd.append("root_cause", this.root_cause);
        fd.append("key_earnings", this.key_earnings);
        fd.append('comments', this.comments);
        fd.append("is_a_safety_environmental_or_quality_alert_required", this.is_a_safety_environmental_or_quality_alert_required);
        fd.append("additional_investigation_required", this.additional_investigation_required);
        fd.append("type", this.type);
        fd.append("investigator_id", localStorage.getItem("id"));
        console.log('saveItemOffline', fd);
        this.global.presentLoading();
        let addUrl = 'api/Investigator/submitInvestigation_incomplete';
        let editUrl = 'api/Investigator/submitInvestigation_incomplete';
        let url = this.isFrom == 'edit' ? editUrl : addUrl;
        this.global.postData(url, fd).subscribe((res) => {
            if (res.status) {
                this.global.presentToast(res.message);
                localStorage.removeItem("investigationLocalStorage");
                this.nav.navigateRoot("form-list");
            }
            else {
                this.global.presentToast("Something went wrong");
            }
            this.global.dismissLoading();
        }, err => {
            console.log("err", err);
            this.global.dismissLoading();
        });
    }
};
InvestigationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService }
];
InvestigationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-investigation',
        template: _raw_loader_investigation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_investigation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvestigationPage);



/***/ }),

/***/ 19445:
/*!*************************************************************!*\
  !*** ./src/app/pages/investigation/investigation.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerStyle {\n  background: white;\n  margin-top: -24px;\n  border-top-left-radius: 32px;\n  height: 30px;\n  border-top-right-radius: 32px;\n  border-bottom: white;\n  border-bottom-width: 0;\n}\n\n.saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\n\n.toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\n\n.back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\n\nion-content ion-label {\n  white-space: normal;\n}\n\nion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\n\nion-content .container {\n  background-color: var(--ion-color-primary-contrast);\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n  padding-bottom: 0px;\n}\n\nion-content .container .logo {\n  padding-top: 80px;\n}\n\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\n\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 16px;\n}\n\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: var(--ion-color-primary-contrast);\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\nion-content .container .input-div {\n  margin-top: 25px;\n}\n\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\n\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\n\nion-content .btnView {\n  margin-top: 100px;\n}\n\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\n\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 7px;\n  color: #313131;\n  font-size: 16px;\n}\n\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\n\nion-content .questionHead {\n  font-family: mon-black;\n}\n\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\n\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\n\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\n\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\n\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n}\n\nion-content ion-radio {\n  margin-right: 7px;\n}\n\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\n\nion-content ion-col {\n  padding: 0;\n}\n\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\n\nion-content ion-radio ion-label {\n  font-size: 18px;\n}\n\nion-content .question {\n  font-size: 14px !important;\n}\n\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\n\nion-content ion-select {\n  width: 100%;\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\n\nion-content ion-input {\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\n\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\n\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\n\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\n\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\n\nion-content .btnSubmit {\n  margin: 0;\n  height: 44px;\n  font-family: \"mon-medium\";\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdGlnYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsaUJBQUE7RUFDSixpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ00sa0JBQUE7RUFDRixRQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFERTtFQUNFLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZFO0VBQ0UsbURBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFISTtFQUNFLGlCQUFBO0FBS047O0FBSEk7RUFDRSx3QkFBQTtBQUtOOztBQUpNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQU1SOztBQUpNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQU1SOztBQUhJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBS047O0FBSEk7RUFDRSxnQkFBQTtBQUtOOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsaUJBQUE7QUFJSjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUhJO0VBQ0UsdUJBQUE7RUFDRiwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFISTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFLTjs7QUFGRTtFQUNFLHNCQUFBO0FBSUo7O0FBRkU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxhQUFBO0FBR0o7O0FBRkk7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSU47O0FBRkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJTjs7QUFITTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS1I7O0FBREU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUZJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFJTjs7QUFERTtFQUNFLGlCQUFBO0FBR0o7O0FBREU7RUFDRSx1Q0FBQTtBQUdKOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQURFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxnQ0FBQTtBQUdKOztBQUZJO0VBQ0UsZUFBQTtBQUlOOztBQURFO0VBQ0UsMEJBQUE7QUFHSjs7QUFERTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUFHSjs7QUFGSTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUFJTjs7QUFITTtFQUNFLHVCQUFBO0FBS1I7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFRTtFQUNFLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtBQUFKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDTSxTQUFBO0VBQ0osWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6ImludmVzdGlnYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclN0eWxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbi5zYXZlQnRue1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzBweDtcbn1cbi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICBmb250LXNpemU6IDE5cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAyOXB4O1xuICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICBmb250LXNpemU6IDI5cHg7XG59XG5pb24tY29udGVudCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuICAudG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzJweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMnB4O1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLmxvZ28ge1xuICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxvZ2luLWJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDIzcHg7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuaW5wdXQtZGl2IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG4gIC5iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuYnRuVmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbiAgLnBsdXMge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5pbmNpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA3cHg7XG4gICAgY29sb3I6ICMzMTMxMzE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG4gIC5xdWVzdGlvbkhlYWQge1xuICAgIGZvbnQtZmFtaWx5OiBtb24tYmxhY2s7XG4gIH1cbiAgLmFjdGl2ZUJhY2tncm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBjb2xvcjogIzMxMzEzMTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmhlYWRlclRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMzNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnJhIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICB9XG4gIH1cbiAgaW9uLXJhZGlvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBpb24tY2hlY2tib3gge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgfVxuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGhyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgaW9uLXJhZGlvIHtcbiAgICAtLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICBpb24tbGFiZWx7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG4gIC5xdWVzdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogbW9uLW1lZGl1bTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcblxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAubGFiZWxDdXN0b21Ecm9wRG93biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cbiAgLmNhbWVyYSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW07XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuICBpb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgfVxuICBpb24tY2FyZHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmJ0blN1Ym1pdHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBmb250LWZhbWlseTogJ21vbi1tZWRpdW0nO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmltZy1yZXNwb25zaXZle1xuICAgIGhlaWdodDoyMDBweDtcbiAgICB3aWR0aDoyNTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ 7737:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/investigation/investigation.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"toolbar\">\n      <ion-text>INVESTIGATION</ion-text>\n      <ion-buttons class=\"back\">\n        <ion-button (click)=\"nav.back()\">\n          <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons class='saveBtn' (click)=\"saveItemOffline()\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"headerStyle\"></div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>  \n  <div class=\"container\">\n  <div>\n    <div *ngFor=\"let item of data\">\n      <ion-button class=\"inci\" *ngIf=\"selected!==item\" (click)=\"checkDetails(item)\">\n        <p>{{item | slice:0:25}}\n          <ion-text *ngIf=\"item.length >= 25\">..</ion-text>\n        </p>\n        <img class=\"plus\" src=\"./assets/add.png\" />\n      </ion-button>\n      <div *ngIf=\"selected==item && selected=='Investigation team members'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">Name</p>\n        <ion-item class=\"ra\" lines=\"none\" *ngIf=\"isFrom=='edit'\">\n          <ion-select placeholder=\"{{selectedName ? selectedName : 'Select One'}}\" interface=\"action-sheet\" (ionChange)=\"selectedValue($event)\"  value={{selectedName}}>\n            <ion-select-option value=\"{{item.full_name}}\" *ngFor=\"let item of listOfUsers\">\n              {{item.full_name}} {{item.email}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\" *ngIf=\"isFrom!=='edit'\">\n          <ion-select placeholder=\"Select One\" interface=\"action-sheet\" (ionChange)=\"selectedValue($event)\"\n            value={{selectedName}}>\n            <ion-select-option value=\"{{item.full_name}}\" *ngFor=\"let item of listOfUsers\">\n              {{item.full_name}} {{item.email}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <p class=\"question\">Date Investigation Commenced</p>\n      <ion-item class=\"ra\" lines=\"none\">\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event,'incident')\" [(ngModel)]=\"date_investigation_commenced\">\n        </ion-datetime>\n      </ion-item>\n      <p class=\"question\">Reportable Incident – Statutory Body</p>\n      <ion-radio-group [(ngModel)]=\"reportable_incident\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Yes</ion-label>\n              <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>No</ion-label>\n              <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      </div>\n      <div *ngIf=\"selected==item && selected=='Sequence of events'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Pre incident contributing events\n        </p>\n        <ion-input placeholder=\"Pre incident contributing events\" [(ngModel)]=\"pre_incident_contributing_events\"></ion-input>\n\n        <p class=\"question\">\n          Post incident events\n        </p>\n        <ion-input placeholder=\"Post incident events\" [(ngModel)]=\"post_incident_events\"></ion-input>\n        <p class=\"question\">\n          Other contributing event factors\n        </p>\n        <ion-input placeholder=\"Other contributing event factors\" [(ngModel)]=\"other_contributing_event_factors\"></ion-input>\n        <p class=\"question\">\n          Critical controls applicable for task\n        </p>        \n        <ion-input placeholder=\"Critical controls applicable for task\" [(ngModel)]=\"critical_controls_applicable_for_task\"></ion-input>\n      </div>\n      <div *ngIf=\"selected==item && selected=='Investigators Initial Findings (Event Factors)'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Workplace conditions\n        </p>\n        <ion-input placeholder=\"Workplace conditions\" [(ngModel)]=\"workplace_conditions\"></ion-input>\n        <p class=\"question\">\n          Work and People practices\n        </p>\n        <ion-input placeholder=\"Work and People practices\" [(ngModel)]=\"work_and_people_practices\"></ion-input>\n        <p class=\"question\">\n          Employee competence\n        </p>\n        <ion-input placeholder=\"Employee competence\" [(ngModel)]=\"employee_competence\"></ion-input>\n        <p class=\"question\">\n          Experience\n        </p>\n        <ion-input placeholder=\"Experience\" [(ngModel)]=\"experience\"></ion-input>\n        <p class=\"question\">\n          Plant, Equipment or Tooling involve in incident;\n        </p>\n        <ion-input placeholder=\"Plant, Equipment or Tooling involve in incident;\" [(ngModel)]=\"plant_equipment_or_tooling_involve_in_incident\"></ion-input>\n        <p class=\"question\">\n          Relevant Documentation\n        </p>\n        <ion-input placeholder=\"Relevant Documentation\" [(ngModel)]=\"relevant_documentation\"></ion-input>\n        <p class=\"question\">\n          Environmental related factors\n        </p>\n        <ion-input placeholder=\"Environmental related factors\" [(ngModel)]=\"environmental_related_factors\"></ion-input>\n        <p class=\"question\">\n          Critical Control Defence Failure / Absent / Non-Compliance\n          </p>\n          <ion-input placeholder=\"Critical Control Defence Failure / Absent / Non-Compliance\" [(ngModel)]=\"critical_control_defence_failure_absent_non_compliance\"></ion-input>\n      </div>\n      <div *ngIf=\"selected==item && selected=='Immediate Cause Analysis'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          What substandard acts / practices and conditions caused or could cause the incident\n        </p>\n        <ion-input placeholder=\"What substandard acts / practices and conditions caused or could cause the incident\" [(ngModel)]=\"what_substandard_acts_practices_and_conditions_caused_or_could\"></ion-input>\n        <p class=\"question\">\n          What systems / personal factors caused or could cause the incident\n        </p>\n        <ion-input placeholder=\"What systems / personal factors caused or could cause the incident\"\n          [(ngModel)]=\"what_systems_personal_factors_caused_or_could_cause_the_incident\"></ion-input>\n      </div>\n      <div *ngIf=\"selected==item && selected=='Investigation Team Conclusion of Incident Causes'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n      <p class=\"question\">\n        Root Cause\n      </p>\n      <ion-input placeholder=\"Root Cause\" [(ngModel)]=\"root_cause\"></ion-input>\n        <p class=\"question\">\n          Key Learnings\n        </p>\n        <ion-input placeholder=\"Key Learnings\"\n          [(ngModel)]=\"key_earnings\"></ion-input>        \n          <p class=\"question\">\n            Comments\n          </p>\n          <ion-input placeholder=\"Comments\" [(ngModel)]=\"comments\"></ion-input>\n          <p class=\"question\">Is a Safety, Environmental or Quality Alert required?</p>\n        <ion-list class=\"ion-no-padding\">\n          <ion-item *ngFor=\"let entry of reputationCheckBox\" lines=\"none\" class=\"ion-no-padding\">\n            <ion-label>{{entry.val}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\" (ionChange)=\"selectChekbox($event)\">\n            </ion-checkbox>\n          </ion-item>\n        </ion-list>\n         </div>\n      <div *ngIf=\"selected==item && selected=='Security'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-radio-group [(ngModel)]=\"securityRadio\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>IT</ion-label>\n                <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Theft</ion-label>\n                <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Other</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"securityRadio=='IT'\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>What kind of IT Security Incident ?</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of itsecurityCheckbox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n        <div *ngIf=\"securityRadio=='Theft'\">\n          <p class=\"question\">\n            What has been stolen ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"stolenItem\"></ion-input>\n\n          <p class=\"question\">\n            Approximate value of stolen item ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"approximateValueOfStolen\"></ion-input>\n\n          <p class=\"question\">\n            What is the specific Security incident ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]='specificSecurityIncident'></ion-input>\n        </div>\n      </div>\n      <div *ngIf=\"selected==item && selected=='Additional Investigation'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Additional Investigation Required\n        </p>\n        <ion-radio-group [(ngModel)]=\"additional_investigation_required\" (ionChange)=\"additionalRadio($event)\">\n          <ion-row class=\"ion-no-padding\" >\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <p class=\"question\">\n          Type\n        </p>\n        <ion-radio-group [(ngModel)]=\"type\" (ionChange)=\"typeSelect($event)\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Client</ion-label>\n                <ion-radio slot=\"start\" value=\"Client\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>General Manager</ion-label>\n                <ion-radio slot=\"start\" value=\"General Manager\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>WHSEQ Department</ion-label>\n                <ion-radio slot=\"start\" value=\"WHSEQ Department\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </div>   \n    </div>\n  </div>\n  </div>\n  <ion-button (click)=\"onSubmit()\" expand=\"full\" class=\"btnSubmit\" *ngIf=\"isFrom=='edit'\">UPDATE</ion-button>\n  <ion-button (click)=\"onSubmit()\" expand=\"full\" class=\"btnSubmit\" *ngIf=\"isFrom=='add'\">ADD</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_investigation_investigation_module_ts-es2015.js.map