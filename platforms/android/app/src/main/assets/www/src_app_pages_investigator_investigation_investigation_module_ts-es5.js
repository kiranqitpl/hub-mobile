(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_investigator_investigation_investigation_module_ts"], {
    /***/
    93085:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation/investigation-routing.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvestigationPageRoutingModule": function InvestigationPageRoutingModule() {
          return (
            /* binding */
            _InvestigationPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _investigation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./investigation.page */
      28023);

      var routes = [{
        path: '',
        component: _investigation_page__WEBPACK_IMPORTED_MODULE_0__.InvestigationPage
      }];

      var _InvestigationPageRoutingModule = function InvestigationPageRoutingModule() {
        _classCallCheck(this, InvestigationPageRoutingModule);
      };

      _InvestigationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InvestigationPageRoutingModule);
      /***/
    },

    /***/
    70103:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation/investigation.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvestigationPageModule": function InvestigationPageModule() {
          return (
            /* binding */
            _InvestigationPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _investigation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./investigation-routing.module */
      93085);
      /* harmony import */


      var _investigation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./investigation.page */
      28023);

      var _InvestigationPageModule = function InvestigationPageModule() {
        _classCallCheck(this, InvestigationPageModule);
      };

      _InvestigationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _investigation_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvestigationPageRoutingModule],
        declarations: [_investigation_page__WEBPACK_IMPORTED_MODULE_1__.InvestigationPage]
      })], _InvestigationPageModule);
      /***/
    },

    /***/
    28023:
    /*!************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation/investigation.page.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvestigationPage": function InvestigationPage() {
          return (
            /* binding */
            _InvestigationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_investigation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./investigation.page.html */
      37018);
      /* harmony import */


      var _investigation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./investigation.page.scss */
      57125);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _InvestigationPage = /*#__PURE__*/function () {
        function InvestigationPage(nav, global) {
          _classCallCheck(this, InvestigationPage);

          this.nav = nav;
          this.global = global;
          this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imageUrl;
          this.loggedInUser = ''; // data: any = [];

          this.selected = 'Investigation team members';
          this.reputationCheckBox = [{
            val: "Safety",
            isChecked: false
          }, {
            val: "Environmental",
            isChecked: false
          }, {
            val: "Quality",
            isChecked: false
          }, {
            val: "N/A",
            isChecked: false
          }];
          this.data = ['Investigation team members', 'Sequence of events', 'Investigators Initial Findings (Event Factors)', 'Immediate Cause Analysis', 'Investigation Team Conclusion of Incident Causes', 'Additional Investigation'];
          this.listOfUsers = [];
          this.names = [];
        }

        _createClass(InvestigationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            this.global.getData("Investigator/getInvestigator").subscribe(function (res) {
              if (res) {
                _this.listOfUsers = res.data;
              } else {
                console.log("response of get investigator api", res);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _a, _b;

            var d = JSON.parse(localStorage.getItem("singleView"));
            this.incident_id = d.id;
            this.isFrom = localStorage.getItem("isInvestigationFrom");

            if (this.isFrom == 'edit') {
              this.investigatorId = d.investigation_details.id;
              var investigatorDetails = d.investigation_details; // console.log('investigatorDetails', investigatorDetails);
              // this.selectedName = investigatorDetails.name;
              // console.log('this.selectedName', this.selectedName);

              if ((investigatorDetails === null || investigatorDetails === void 0 ? void 0 : investigatorDetails.name) !== null) {
                this.selectedName = (_a = investigatorDetails === null || investigatorDetails === void 0 ? void 0 : investigatorDetails.name[0]) === null || _a === void 0 ? void 0 : _a.investigator_name;
              }

              console.log('this.selectedName ', this.selectedName);
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
              var chekBoxDetails = (_b = investigatorDetails === null || investigatorDetails === void 0 ? void 0 : investigatorDetails.is_a_safety_environmental_or_quality_alert_required) === null || _b === void 0 ? void 0 : _b.split(",");
              this.reputationCheckBox.forEach(function (el) {
                chekBoxDetails.forEach(function (ele) {
                  if (el.val == ele) {
                    el.isChecked = true;
                  }
                });
              });

              if (investigatorDetails.key_earnings !== undefined && investigatorDetails.key_earnings !== 'undefined') {
                this.key_earnings = investigatorDetails.key_earnings;
              }

              if (investigatorDetails.other_contributing_event_factors !== undefined && investigatorDetails.other_contributing_event_factors !== 'undefined') {
                this.other_contributing_event_factors = investigatorDetails.other_contributing_event_factors;
              }

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
        }, {
          key: "selectedValue",
          value: function selectedValue(e) {
            var _this2 = this;

            console.log('selectedValue', e);
            this.listOfUsers.forEach(function (ele) {
              if (ele.employee_id == e.detail.value) {
                var data = {
                  user_id: ele.employee_id,
                  user_name: ele.full_name
                };
                _this2.selectedName = ele.employee_id;

                _this2.names.push(data);
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            var ar = [];
            this.reputationCheckBox.forEach(function (e) {
              if (e.isChecked) {
                ar.push(e.val);
              }
            });
            this.listOfUsers.forEach(function (ele) {
              if (ele.full_name == _this3.selectedName) {
                var data = {
                  user_id: ele.employee_id,
                  user_name: ele.full_name
                };
                _this3.selectedName = ele.employee_id;

                _this3.names.push(data);
              }
            });
            console.log('this.names', this.names);
            this.is_a_safety_environmental_or_quality_alert_required = ar;
            this.name = [{
              user_id: 100,
              user_name: 'Deepak'
            }, {
              user_id: 101,
              user_name: 'Gaurav'
            }];
            var fd = new FormData();

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
            fd.append("investigator_id", this.loggedInUser.id);
            var dataObj = {
              incident_id: this.incident_id,
              name: this.names,
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
              root_cause: this.root_cause,
              key_earnings: this.key_earnings,
              comments: this.comments,
              is_a_safety_environmental_or_quality_alert_required: this.is_a_safety_environmental_or_quality_alert_required,
              additional_investigation_required: this.additional_investigation_required,
              type: this.type
            };
            this.global.presentLoading();
            var addUrl = 'Investigator/submitInvestigation';
            var editUrl = 'Investigator/submitInvestigation';
            var url = this.isFrom == 'edit' ? editUrl : addUrl;
            this.global.postData(url, fd).subscribe(function (res) {
              if (res.status) {
                _this3.global.presentToast(res.message);

                localStorage.removeItem("investigationLocalStorage");

                _this3.nav.navigateRoot("incident-form-list");
              } else {
                _this3.global.presentToast("Something went wrong");
              }

              _this3.global.dismissLoading();
            }, function (err) {
              console.log("err", err);

              _this3.global.dismissLoading();
            });
          }
        }, {
          key: "saveItemOffline",
          value: function saveItemOffline() {
            var _this4 = this;

            var ar = [];
            this.reputationCheckBox.forEach(function (e) {
              if (e.isChecked) {
                ar.push(e.val);
              }
            });
            this.is_a_safety_environmental_or_quality_alert_required = ar;
            this.name = [{
              user_id: 100,
              user_name: 'Deepak'
            }, {
              user_id: 101,
              user_name: 'Gaurav'
            }];
            this.listOfUsers.forEach(function (ele) {
              if (ele.employee_id == _this4.selectedName) {
                var data = {
                  user_id: ele.employee_id,
                  user_name: ele.full_name
                };
                _this4.selectedName = ele.employee_id;

                _this4.names.push(data);
              }
            });
            var fd = new FormData();

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
            var dataObj = {
              incident_id: this.incident_id,
              name: this.names,
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
              root_cause: this.root_cause,
              key_earnings: this.key_earnings,
              comments: this.comments,
              is_a_safety_environmental_or_quality_alert_required: this.is_a_safety_environmental_or_quality_alert_required,
              additional_investigation_required: this.additional_investigation_required,
              type: this.type
            };
            this.global.presentLoading();
            var addUrl = 'Investigator/submitInvestigation_incomplete';
            var editUrl = 'Investigator/submitInvestigation_incomplete';
            var url = this.isFrom == 'edit' ? editUrl : addUrl;
            this.global.postData(url, fd).subscribe(function (res) {
              if (res.status) {
                _this4.global.presentToast(res.message);

                localStorage.removeItem("investigationLocalStorage");

                _this4.nav.navigateRoot("incident-form-list");
              } else {
                _this4.global.presentToast("Something went wrong");
              }

              _this4.global.dismissLoading();
            }, function (err) {
              console.log("err", err);

              _this4.global.dismissLoading();
            });
          }
        }, {
          key: "selectChekbox",
          value: function selectChekbox(e) {
            if (this.isFrom == 'add') {
              var localDataStore = {
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
        }, {
          key: "checkDetails",
          value: function checkDetails(i) {
            this.selected = i;

            if (this.isFrom == 'add') {
              var localDataStore = {
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
        }, {
          key: "additionalRadio",
          value: function additionalRadio(event) {
            this.additional_investigation_required = event.detail.value;

            if (this.isFrom == 'add') {
              var localDataStore = {
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
        }, {
          key: "typeSelect",
          value: function typeSelect(e) {
            if (this.isFrom == 'add') {
              var localDataStore = {
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
        }, {
          key: "deSelect",
          value: function deSelect(i) {
            this.selected = '';
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.nav.back();
          }
        }, {
          key: "dateSelect",
          value: function dateSelect(e) {
            moment__WEBPACK_IMPORTED_MODULE_2___default()(e.detail.value).format("YYYY-MM-DD");
            this.date_investigation_commenced = moment__WEBPACK_IMPORTED_MODULE_2___default()(e.detail.value).format("YYYY-MM-DD");
          }
        }]);

        return InvestigationPage;
      }();

      _InvestigationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService
        }];
      };

      _InvestigationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-investigation',
        template: _raw_loader_investigation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_investigation_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InvestigationPage);
      /***/
    },

    /***/
    57125:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation/investigation.page.scss ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .incident {\n  font-family: \"mon-bold\";\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .incident p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .incident img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n  font-family: \"mon-bold\";\n}\nion-content .activeBackground p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .ra {\n  text-transform: capitalize;\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 15px;\n  color: var(--black-color);\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdGlnYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDTjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBREo7QUFFSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNSO0FBSUU7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRE47QUFJRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6ImludmVzdGlnYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuc2F2ZUJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzBweDtcbiAgfVxuICAucGx1cyB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLmluY2lkZW50IHtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTJweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIHAge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgY29sb3I6ICMzMTMxMzE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLmFjdGl2ZUJhY2tncm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBwIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGNvbG9yOiAjMzEzMTMxO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuaGVhZGVyVGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAzM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yYSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgfVxuICB9XG4gIGhyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAuaGVhZGVyU3R5bGUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMnB4O1xuLy8gICAgIGhlaWdodDogMzBweDtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzJweDtcbi8vICAgICBib3JkZXItYm90dG9tOiB3aGl0ZTtcbi8vICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuLy8gfVxuLy8gLnNhdmVCdG57XG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgdG9wOiAzMHB4O1xuLy8gfVxuLy8gLnRvb2xiYXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4vLyAgIHBhZGRpbmc6IDQwcHg7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4vLyAgIGZvbnQtc2l6ZTogMTlweDtcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbi8vIH1cbi8vIC5iYWNrIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBsZWZ0OiAwO1xuLy8gICB0b3A6IDI5cHg7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4vLyAgIGZvbnQtc2l6ZTogMjlweDtcbi8vIH1cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgaW9uLWxhYmVsIHtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICB9XG4vLyAgIC50b29sYmFyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4vLyAgICAgcGFkZGluZzogNDBweDtcbi8vICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuLy8gICAgIGZvbnQtc2l6ZTogMTlweDtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICB9XG4vLyAgIC5jb250YWluZXIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMnB4O1xuLy8gICAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbi8vICAgICAubG9nbyB7XG4vLyAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbi8vICAgICB9XG4vLyAgICAgaW9uLWl0ZW0ge1xuLy8gICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuLy8gICAgICAgaW9uLWxhYmVsIHtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuLy8gICAgICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgICB9XG4vLyAgICAgICBpb24taW5wdXQge1xuLy8gICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbi8vICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbi8vICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbi8vICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuLy8gICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAvLyAuYnRuIHtcbi8vICAgICAvLyAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIC8vICAgYm9yZGVyLXJhZGl1czogMjNweDtcbi8vICAgICAvLyAgIC0tYm9yZGVyLXJhZGl1czogMjNweDtcbi8vICAgICAvLyAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4vLyAgICAgLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuLy8gICAgIC8vICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbi8vICAgICAvLyAgIGhlaWdodDogNTBweDtcbi8vICAgICAvLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgLy8gICBtYXJnaW4tdG9wOiAxM3B4O1xuLy8gICAgIC8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgICAgLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgLy8gICBtYXJnaW4tYm90dG9tOiA4cHg7XG4vLyAgICAgLy8gfVxuLy8gICAgIC5idG4ge1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuLy8gICAgICAgLS1ib3JkZXItcmFkaXVzOiAyM3B4O1xuLy8gICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbi8vICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4vLyAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuLy8gICAgICAgaGVpZ2h0OiA1MHB4O1xuLy8gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4vLyAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbi8vICAgfVxuLy8gICAgIC5pbnB1dC1kaXYge1xuLy8gICAgICAgbWFyZ2luLXRvcDogMjVweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgLmJhY2sge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHRvcDogMjlweDtcbi8vICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuLy8gICAgIGZvbnQtc2l6ZTogMjlweDtcbi8vICAgfVxuLy8gICBwIHtcbi8vICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4vLyAgICAgY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICB9XG4vLyAgIC5idG5WaWV3IHtcbi8vICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbi8vICAgfVxuLy8gICAucGx1cyB7XG4vLyAgICAgaGVpZ2h0OiAxOHB4O1xuLy8gICAgIHdpZHRoOiAxOHB4O1xuLy8gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4vLyAgIH1cbi8vICAgLmluY2kge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICAtLWJhY2tncm91bmQ6ICNlMGUwZTA7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuLy8gICAgIGhlaWdodDogNTJweDtcbi8vICAgICAtLWJvcmRlci1yYWRpdXM6IDMxcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMzFweDtcbi8vICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbi8vICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuLy8gICAgIHAge1xuLy8gICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0b3A6IDdweDtcbi8vICAgICBjb2xvcjogIzMxMzEzMTtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgfVxuLy8gICAgIGltZyB7XG4vLyAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICByaWdodDogMDtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgLnF1ZXN0aW9uSGVhZCB7XG4vLyAgICAgZm9udC1mYW1pbHk6IG1vbi1ibGFjaztcbi8vICAgfVxuLy8gICAuYWN0aXZlQmFja2dyb3VuZCB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbi8vICAgICBwYWRkaW5nOiAxNXB4O1xuLy8gICAgIHAge1xuLy8gICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbi8vICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuLy8gICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbi8vICAgICAgIGNvbG9yOiAjMzEzMTMxO1xuLy8gICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIH1cbi8vICAgICAuaGVhZGVyVGl0bGUge1xuLy8gICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICBpbWcge1xuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgIHJpZ2h0OiAzM3B4O1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICAucmEge1xuLy8gICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuLy8gICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4vLyAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbi8vICAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xuLy8gICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbi8vICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMDtcbi8vICAgICAtLXBhZGRpbmctZW5kOiAwO1xuLy8gICAgIGlvbi1sYWJlbCB7XG4vLyAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4vLyAgICAgICBmb250LXNpemU6IDE3cHg7XG4vLyAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpb24tcmFkaW8ge1xuLy8gICAgIG1hcmdpbi1yaWdodDogN3B4O1xuLy8gICB9XG4vLyAgIGlvbi1jaGVja2JveCB7XG4vLyAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuLy8gICB9XG4vLyAgIGlvbi1jb2wge1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgIH1cbi8vICAgaHIge1xuLy8gICAgIGhlaWdodDogMXB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4vLyAgICAgbWFyZ2luLXRvcDogMHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDBweDtcbi8vICAgfVxuLy8gICBpb24tcmFkaW8ge1xuLy8gICAgIC0tY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuLy8gICAgIGlvbi1sYWJlbHtcbi8vICAgICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgLnF1ZXN0aW9uIHtcbi8vICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbi8vICAgfVxuLy8gICBpb24tbGlzdCB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgICAgaW9uLWl0ZW0ge1xuLy8gICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgICAgIGlvbi1sYWJlbCB7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIGlvbi1zZWxlY3Qge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcblxuLy8gICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbi8vICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuXG4vLyAgICAgLS1wYWRkaW5nLWVuZDogMTVweDtcbi8vICAgfVxuLy8gICBpb24taW5wdXQge1xuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4vLyAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbi8vICAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuLy8gICB9XG4vLyAgIC5sYWJlbEN1c3RvbURyb3BEb3duIHtcbi8vICAgICBtYXJnaW4tbGVmdDogMTJweDtcbi8vICAgfVxuLy8gICAuY2FtZXJhIHtcbi8vICAgICBmb250LWZhbWlseTogbW9uLW1lZGl1bTtcbi8vICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuLy8gICB9XG4vLyAgIGlvbi1kYXRldGltZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuLy8gICB9XG4vLyAgIGlvbi1jYXJke1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBwYWRkaW5nOiAxNnB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbi8vICAgfVxuLy8gICAuYnRuU3VibWl0e1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgaGVpZ2h0OiA0NHB4O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnbW9uLW1lZGl1bSc7XG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICB9XG4vLyB9XG4vLyAuaW1nLXJlc3BvbnNpdmV7XG4vLyAgICAgaGVpZ2h0OjIwMHB4O1xuLy8gICAgIHdpZHRoOjI1MHB4O1xuLy8gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vIH0iXX0= */";
      /***/
    },

    /***/
    37018:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/investigator/investigation/investigation.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content>\n  <div class=\"toolbar\">\n    <ion-text>INVESTIGATION</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"nav.back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class='saveBtn' (click)=\"saveItemOffline()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  \n  <div class=\"container\">\n\n    <div *ngFor=\"let item of data\">\n\n      <ion-button class=\"incident\" *ngIf=\"selected!==item\" (click)=\"checkDetails(item)\">\n        <p>{{item | slice:0:25}}\n          <ion-text *ngIf=\"item.length >= 25\">..</ion-text>\n        </p>\n        <img class=\"plus\" src=\"{{imageUrl +'add.png'}}\" />\n      </ion-button>\n\n      <div *ngIf=\"selected==item && selected=='Investigation team members'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"{{imageUrl +'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">Name </p>\n        <ion-item class=\"ra\" lines=\"none\" *ngIf=\"isFrom=='edit'\">\n        \n          <ion-select placeholder=\"{{selectedName ? selectedName : 'Select One'}}\" interface=\"action-sheet\"\n            (ionChange)=\"selectedValue($event)\" value={{selectedName}}>\n            <ion-select-option value=\"{{item.employee_id}}\" *ngFor=\"let item of listOfUsers\">\n              {{item.full_name}} {{item.email}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\" *ngIf=\"isFrom!=='edit'\">\n          <ion-select placeholder=\"Select One\" interface=\"action-sheet\" (ionChange)=\"selectedValue($event)\"\n            value={{selectedName}}>\n            <ion-select-option value=\"{{item.employee_id}}\" *ngFor=\"let item of listOfUsers\">\n              {{item.full_name}} {{item.email}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <p class=\"question\">Date Investigation Commenced</p>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event,'incident')\"\n            [(ngModel)]=\"date_investigation_commenced\">\n          </ion-datetime>\n        </ion-item>\n        <p class=\"question\">Reportable Incident – Statutory Body</p>\n        <ion-radio-group [(ngModel)]=\"reportable_incident\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </div>\n\n      <div *ngIf=\"selected==item && selected=='Sequence of events'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"{{imageUrl +'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Pre incident contributing events\n        </p>\n        <ion-input placeholder=\"Pre incident contributing events\" [(ngModel)]=\"pre_incident_contributing_events\">\n        </ion-input>\n\n        <p class=\"question\">\n          Post incident events\n        </p>\n        <ion-input placeholder=\"Post incident events\" [(ngModel)]=\"post_incident_events\"></ion-input>\n        <p class=\"question\">\n          Other contributing event factors\n        </p>\n        <ion-input placeholder=\"Other contributing event factors\" [(ngModel)]=\"other_contributing_event_factors\">\n        </ion-input>\n        <p class=\"question\">\n          Critical controls applicable for task\n        </p>\n        <ion-input placeholder=\"Critical controls applicable for task\"\n          [(ngModel)]=\"critical_controls_applicable_for_task\"></ion-input>\n      </div>\n\n      <div *ngIf=\"selected==item && selected=='Investigators Initial Findings (Event Factors)'\"\n        class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"{{imageUrl +'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Workplace conditions\n        </p>\n        <ion-input placeholder=\"Workplace conditions\" [(ngModel)]=\"workplace_conditions\"></ion-input>\n        <p class=\"question\">\n          Work and People practices\n        </p>\n        <ion-input placeholder=\"Work and People practices\" [(ngModel)]=\"work_and_people_practices\"></ion-input>\n        <p class=\"question\">\n          Employee competence\n        </p>\n        <ion-input placeholder=\"Employee competence\" [(ngModel)]=\"employee_competence\"></ion-input>\n        <p class=\"question\">\n          Experience\n        </p>\n        <ion-input placeholder=\"Experience\" [(ngModel)]=\"experience\"></ion-input>\n        <p class=\"question\">\n          Plant, Equipment or Tooling involve in incident;\n        </p>\n        <ion-input placeholder=\"Plant, Equipment or Tooling involve in incident;\"\n          [(ngModel)]=\"plant_equipment_or_tooling_involve_in_incident\"></ion-input>\n        <p class=\"question\">\n          Relevant Documentation\n        </p>\n        <ion-input placeholder=\"Relevant Documentation\" [(ngModel)]=\"relevant_documentation\"></ion-input>\n        <p class=\"question\">\n          Environmental related factors\n        </p>\n        <ion-input placeholder=\"Environmental related factors\" [(ngModel)]=\"environmental_related_factors\"></ion-input>\n        <p class=\"question\">\n          Critical Control Defence Failure / Absent / Non-Compliance\n        </p>\n        <ion-input placeholder=\"Critical Control Defence Failure / Absent / Non-Compliance\"\n          [(ngModel)]=\"critical_control_defence_failure_absent_non_compliance\"></ion-input>\n      </div>\n\n      <div *ngIf=\"selected==item && selected=='Immediate Cause Analysis'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"{{imageUrl +'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          What substandard acts / practices and conditions caused or could cause the incident\n        </p>\n        <ion-input placeholder=\"What substandard acts / practices and conditions caused or could cause the incident\"\n          [(ngModel)]=\"what_substandard_acts_practices_and_conditions_caused_or_could\"></ion-input>\n        <p class=\"question\">\n          What systems / personal factors caused or could cause the incident\n        </p>\n        <ion-input placeholder=\"What systems / personal factors caused or could cause the incident\"\n          [(ngModel)]=\"what_systems_personal_factors_caused_or_could_cause_the_incident\"></ion-input>\n      </div>\n\n      <div *ngIf=\"selected==item && selected=='Investigation Team Conclusion of Incident Causes'\"\n        class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"{{imageUrl +'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Root Cause\n        </p>\n        <ion-input placeholder=\"Root Cause\" [(ngModel)]=\"root_cause\"></ion-input>\n        <p class=\"question\">\n          Key Learnings\n        </p>\n        <ion-input placeholder=\"Key Learnings\" [(ngModel)]=\"key_earnings\"></ion-input>\n        <p class=\"question\">\n          Comments\n        </p>\n        <ion-input placeholder=\"Comments\" [(ngModel)]=\"comments\"></ion-input>\n        <p class=\"question\">Is a Safety, Environmental or Quality Alert required?</p>\n        <ion-item class=\"ra\" *ngFor=\"let entry of reputationCheckBox\" lines=\"none\">\n          <ion-label>{{entry.val}}</ion-label>\n          <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\" (ionChange)=\"selectChekbox($event)\">\n          </ion-checkbox>\n        </ion-item>\n      </div>\n\n      <div *ngIf=\"selected==item && selected=='Security'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"{{imageUrl +'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-radio-group [(ngModel)]=\"securityRadio\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>IT</ion-label>\n                <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Theft</ion-label>\n                <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Other</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"securityRadio=='IT'\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\" class=\"ra\">\n              <ion-label>What kind of IT Security Incident ?</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of itsecurityCheckbox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\" class=\"ra\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n        <div *ngIf=\"securityRadio=='Theft'\">\n          <p class=\"question\">\n            What has been stolen ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"stolenItem\"></ion-input>\n\n          <p class=\"question\">\n            Approximate value of stolen item ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"approximateValueOfStolen\"></ion-input>\n\n          <p class=\"question\">\n            What is the specific Security incident ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]='specificSecurityIncident'></ion-input>\n        </div>\n      </div>\n\n      <div *ngIf=\"selected==item && selected=='Additional Investigation'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"{{imageUrl +'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Additional Investigation Required\n        </p>\n        <ion-radio-group [(ngModel)]=\"additional_investigation_required\" (ionChange)=\"additionalRadio($event)\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <p class=\"question\">\n          Type\n        </p>\n        <ion-radio-group [(ngModel)]=\"type\" (ionChange)=\"typeSelect($event)\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Client</ion-label>\n                <ion-radio slot=\"start\" value=\"Client\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>General Manager</ion-label>\n                <ion-radio slot=\"start\" value=\"General Manager\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>WHSEQ Department</ion-label>\n                <ion-radio slot=\"start\" value=\"WHSEQ Department\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </div>\n\n    </div>\n\n    <ion-button (click)=\"onSubmit()\" class=\"btn\" *ngIf=\"isFrom=='edit'\">UPDATE</ion-button>\n    <ion-button (click)=\"onSubmit()\" class=\"btn\" *ngIf=\"isFrom=='add'\">ADD</ion-button>\n  </div>\n\n</ion-content> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_investigator_investigation_investigation_module_ts-es5.js.map