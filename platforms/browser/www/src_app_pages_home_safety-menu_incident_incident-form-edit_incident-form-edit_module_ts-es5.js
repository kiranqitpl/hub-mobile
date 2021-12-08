(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_incident_incident-form-edit_incident-form-edit_module_ts"], {
    /***/
    145:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-form-edit/incident-form-edit-routing.module.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IncidentFormEditPageRoutingModule": function IncidentFormEditPageRoutingModule() {
          return (
            /* binding */
            _IncidentFormEditPageRoutingModule
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


      var _incident_form_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./incident-form-edit.page */
      63258);

      var routes = [{
        path: '',
        component: _incident_form_edit_page__WEBPACK_IMPORTED_MODULE_0__.IncidentFormEditPage
      }];

      var _IncidentFormEditPageRoutingModule = function IncidentFormEditPageRoutingModule() {
        _classCallCheck(this, IncidentFormEditPageRoutingModule);
      };

      _IncidentFormEditPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _IncidentFormEditPageRoutingModule);
      /***/
    },

    /***/
    97694:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-form-edit/incident-form-edit.module.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IncidentFormEditPageModule": function IncidentFormEditPageModule() {
          return (
            /* binding */
            _IncidentFormEditPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _incident_form_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./incident-form-edit-routing.module */
      145);
      /* harmony import */


      var _incident_form_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./incident-form-edit.page */
      63258);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _IncidentFormEditPageModule = function IncidentFormEditPageModule() {
        _classCallCheck(this, IncidentFormEditPageModule);
      };

      _IncidentFormEditPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _incident_form_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidentFormEditPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
        declarations: [_incident_form_edit_page__WEBPACK_IMPORTED_MODULE_1__.IncidentFormEditPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _IncidentFormEditPageModule);
      /***/
    },

    /***/
    63258:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-form-edit/incident-form-edit.page.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IncidentFormEditPage": function IncidentFormEditPage() {
          return (
            /* binding */
            _IncidentFormEditPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_incident_form_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./incident-form-edit.page.html */
      4273);
      /* harmony import */


      var _incident_form_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./incident-form-edit.page.scss */
      67619);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      67871);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/loading-service/loading.service */
      80513);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);
      /* harmony import */


      var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/shared-service/shared.service */
      49481);
      /* harmony import */


      var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modals/managers/managers.page */
      58127);
      /* harmony import */


      var src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modals/image-modal/image-modal.page */
      91681);
      /* harmony import */


      var _incident_form_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../incident-form.json */
      79044);

      var _IncidentFormEditPage = /*#__PURE__*/function () {
        //-------------------------------------------------------- JSON DATA -------------------------------------------------------//
        function IncidentFormEditPage(globalService, sharedService, modalController, actionSheetController, camera, fb, nav, platform, activatedRoute, loadingService) {
          _classCallCheck(this, IncidentFormEditPage);

          this.globalService = globalService;
          this.sharedService = sharedService;
          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.camera = camera;
          this.fb = fb;
          this.nav = nav;
          this.platform = platform;
          this.activatedRoute = activatedRoute;
          this.loadingService = loadingService;
          this.imagePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imageUrl;
          this.pName = 'Add Form';
          this.witnessList = [];
          this.shiftTypeList = [];
          this.superVisorList = [];
          this.locationList = [];
          this.any = [];
          this.employeeList = [];
          this.managerList = [];
          this.selectedTabList = [];
          this.reputationWitnessList = [];
          this.platformCheck = '';
          this.incidentDetails = []; //-------------------------------------------------- Dropdowns variables---------------------------------------------------------------//

          this.incident_near_miss = '';
          this.was_there_any_witness_of_the_incident = '';
          this.classification_supervisor = '';
          this.classification_manager = '';
          this.injured_person_option = '';
          this.immediate_treatment_person_name = '';
          this.name_of_witness = ''; //-------------------------------------------------- Dropdowns variables---------------------------------------------------------------//
          //----------------------------------------------------- Image variables ----------------------------------------------------//

          this.photoGraphy = [];
          this.photoGraphyObject = {};
          this.alcohalImages = [];
          this.alcohalImagesObject = {};
          this.drugTestImages = [];
          this.drugTestImagesObject = {};
          this.alterDutyImages = [];
          this.alterDutyImagesObject = {};
          this.chemicalImages = [];
          this.chemicalImagesObject = {};
          this.damageImages = [];
          this.damageImagesObject = {}; //--------------------------------------------------------- Forms ----------------------------------------------------------//
          //---------------------------------------------------------- Tab -----------------------------------------------------------//

          this.tabList = [{
            "val": "Incident",
            "tabDisable": false
          }, {
            "val": "Photography",
            "tabDisable": true
          }, {
            "val": "Incident Description",
            "tabDisable": true
          }, {
            "val": "Classification",
            "tabDisable": true
          }];
          this.selectedTabItem = 'Incident'; //---------------------------------------------------------- Tab -----------------------------------------------------------//
          //-------------------------------------------------------- JSON DATA -------------------------------------------------------//

          this.classificationList = [{
            "val": "Asset",
            "isChecked": false
          }, {
            "val": "Environmental",
            "isChecked": false
          }, {
            "val": "Injury",
            "isChecked": false
          }, {
            "val": "Report",
            "isChecked": false
          }, {
            "val": "Reputation",
            "isChecked": false
          }, {
            "val": "Security",
            "isChecked": false
          }];
          this.itSecurityList = [{
            "val": "Intrusion",
            "isChecked": false
          }, {
            "val": "Privacy breach",
            "isChecked": false
          }, {
            "val": "Ransom ware",
            "isChecked": false
          }, {
            "val": "Security",
            "isChecked": false
          }];
          this.reputationCheckBox = [{
            "val": "Company",
            "isChecked": false
          }, {
            "val": "Individual",
            "isChecked": false
          }];
          this.departmentEffect = [{
            val: "Dubbo Division",
            isChecked: false
          }, {
            val: "Mudgee Division",
            isChecked: false
          }, {
            val: "Orange Division",
            isChecked: false
          }, {
            val: "Project Services",
            isChecked: false
          }, {
            val: "West Wyalong Division",
            isChecked: false
          }];
          this.injuryList = _incident_form_json__WEBPACK_IMPORTED_MODULE_10__[0].injuryList;
        }

        _createClass(IncidentFormEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.platform.is('cordova')) {
              this.platformCheck = 'browser';
            } else {
              this.platformCheck = 'cordova';
            }

            this.loadShift();
            this.loadLocation();
            this.loadBodyPart();
            this.loadEmployee();
            this.loadWitness();
            this.loadSuperwiser(); // this.findValueInWitness();

            this.incidentForm = this.fb.group({
              incident_value: [''],
              incident_near_miss: [''],
              incident_near_miss_other: ['']
            });
            this.photoGraphyForm = this.fb.group({
              photography_image: [''] // photography image

            });
            this.incidentDesForm = this.fb.group({
              incident_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
              incident_description_action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
              seen_differently: [''],
              was_there_any_witness_of_the_incident: [''],
              incdesc_other_witness_details: this.fb.group({
                incdesc_other_witness_name: [''],
                incdesc_other_witness_mobile_no: [''],
                incdesc_other_witness_email: ['']
              }),
              incident_description_photo: [''],
              incident_description_alcohol_test: [''],
              // alcohol_test_completed: [''],
              alcohol_test_image: [''],
              drug_test_completed: [''],
              drug_test_image: [''],
              return_to_alternate_duties: [''],
              return_to_alternate_duties_image: [''] //return to alternate duties image

            });
            this.classificationForm = this.fb.group({
              classification_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([]),
              date_of_incident: [''],
              time_of_incident: [''],
              date_reported: [''],
              time_reported: [''],
              classification_location_option: [''],
              classification_location_value: [''],
              classification_location_value1: [''],
              // selectLocation: [''],
              classification_shift_type: [''],
              classification_supervisor: [''],
              classification_manager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required] // required field

            });
            this.injuryForm = this.fb.group({
              injury_persons: [''],
              person_details: this.fb.array([])
            });
            this.enviornmentForm = this.fb.group({
              environmental_description: [''],
              was_a_chemical_split: [''],
              chemical_details: this.fb.group({
                chemical_name: [''],
                chemical_photo: [''],
                approximate_quantity: [''],
                insertPhotoCheckBox: [false]
              }),
              emergency_spill_kit_used: [''],
              out_of_split_kit: ['']
            });
            this.reputationDesForm = this.fb.group({
              reputation_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([]),
              individual_damage_value: [''],
              company_damage_value: [''],
              reputation_negative_effect: [''],
              effected_department: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([]),
              external_party: [''],
              name_of_witness: [''],
              other_witness_details: this.fb.group({
                other_witness_name: [''],
                other_witness_mobile_no: [''],
                other_witness_email: ['']
              }),
              possible_outcome_incident: [''] // required field

            });
            this.securityForm = this.fb.group({
              security_option: [''],
              it_option_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([]),
              what_has_been_stolen_item: [''],
              approximate_value_of_stolen: [''],
              what_is_the_specific_securities_incident: ['']
            });
            this.assetDescriptionForm = this.fb.group({
              asset_description: [''],
              asset_has_number: [''],
              asset_number: [''],
              extent_of_damage: [''],
              extent_damage_image: [''] // extent damage image

            });
            this.reportForm = this.fb.group({
              report: ['']
            });
            this.loadIncidentDetails();
          }
        }, {
          key: "loadEmployee",
          value: function loadEmployee() {
            var _this = this;

            this.globalService.getData("user/getallemployee").subscribe(function (res) {
              if (res && res.status && res.data && res.data.length > 0) {
                _this.employeeList = res.data;
              } else {
                _this.employeeList = [];
              }

              _this.employeeList.unshift({
                full_name: "Other",
                employee_id: '0'
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "loadWitness",
          value: function loadWitness() {
            var _this2 = this;

            this.globalService.getData("Witness/getWitnessList").subscribe(function (res) {
              if (res && res.status && res.data && res.data.length > 0) {
                _this2.witnessList = res.data;
              } else {
                _this2.witnessList = [];
              }

              _this2.witnessList.unshift({
                full_name: "Other",
                employee_id: '0'
              });
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "loadMangerList",
          value: function loadMangerList() {
            var _this3 = this;

            this.globalService.getData("Manager/getManagerList").subscribe(function (res) {
              console.log('res', res);

              if (res && res.status && res.data && res.data.length > 0) {
                _this3.managerList = res.data;
              } else {
                _this3.managerList = [];
              }

              _this3.managerList.unshift({
                full_name: "Other",
                employee_id: '0'
              });
            }, function (err) {
              console.log(err);
            });
          } // findValueInWitness() {
          //   let val: boolean = false;
          //   this.reputationWitnessList.find(ele => {
          //     if (ele.name_of_witness != "Other") {
          //       val = true;
          //     }
          //   })
          //   return val;
          // }

        }, {
          key: "loadShift",
          value: function loadShift() {
            var _this4 = this;

            this.globalService.getData("Shift/get_shift_typelist").subscribe(function (res) {
              if (res && res.status && res.data && res.data.length > 0) {
                _this4.shiftTypeList = res.data;
              } else {
                _this4.shiftTypeList = [];
              }
            }, function (err) {
              console.log("Eror", err);
            });
          }
        }, {
          key: "loadSuperwiser",
          value: function loadSuperwiser() {
            var _this5 = this;

            this.globalService.getData("Supervisor/getSupervisorList").subscribe(function (res) {
              if (res && res.status && res.data && res.data.length > 0) {
                _this5.superVisorList = res.data;
              } else {
                _this5.superVisorList = [];
              }
            }, function (err) {
              console.log("Eror", err);
            });
          }
        }, {
          key: "loadLocation",
          value: function loadLocation() {
            var _this6 = this;

            this.globalService.getData("location/getLocation").subscribe(function (res) {
              if (res && res.status && res.data && res.data.length > 0) {
                _this6.locationList = res.data;
              } else {
                _this6.locationList = [];
              }
            }, function (err) {
              console.log("Eror", err);
            });
          }
        }, {
          key: "loadBodyPart",
          value: function loadBodyPart() {
            var _this7 = this;

            this.globalService.getData("Body_part/getbodypart").subscribe(function (res) {
              if (res && res.status && res.data && res.data.length > 0) {
                _this7.bodyPartList = res.data;
              } else {
                _this7.bodyPartList = [];
              }
            }, function (err) {
              console.log("Eror", err);
            });
          }
        }, {
          key: "loadIncidentDetails",
          value: function loadIncidentDetails() {
            var _this8 = this;

            // this.loadingService.presentLoading();
            this.activatedRoute.params.subscribe(function (params) {
              _this8.globalService.getData('add_form/getIncidentFormByID/' + params['incident_id']).subscribe(function (result) {
                console.log('result', result);

                if (result && result['data'] && result['data'][0]) {
                  _this8.incidentDetails = result['data'][0]; //------------------------------------------------------- incidentForm ----------------------------------------------------------//

                  if (_this8.incidentDetails.incident_near_miss != '' || _this8.incidentDetails.incident_near_miss != null) {
                    var incident_near_miss_object;

                    _this8.witnessList.forEach(function (element) {
                      if (element.full_name == _this8.incidentDetails.incident_near_miss) {
                        incident_near_miss_object = element;
                      }
                    });

                    if (incident_near_miss_object != undefined) {
                      _this8.incident_near_miss = incident_near_miss_object;
                    } else {
                      _this8.globalService.getData("Witness/getWitnessList/" + _this8.incidentDetails.incident_near_miss).subscribe(function (res) {
                        console.log('first', res);

                        if (res && res.status && res.data && res.data.length > 0) {
                          _this8.incident_near_miss = res.data[0];
                        }
                      }, function (err) {
                        console.log("Eror", err);
                      });
                    }
                  }

                  _this8.incidentForm.patchValue(_this8.incidentDetails);

                  _this8.onInput('', 'Incident'); //------------------------------------------------------- incidentForm ----------------------------------------------------------//
                  //------------------------------------------------------- PhotographyForm ----------------------------------------------------------//


                  _this8.photoGraphyObject = _this8.photoGraphy = _this8.incidentDetails.photography_image; //------------------------------------------------------- PhotographyForm ----------------------------------------------------------//
                  //------------------------------------------------------- incidentDesForm ----------------------------------------------------------//

                  if (_this8.incidentDetails.was_there_any_witness_of_the_incident != '' || _this8.incidentDetails.was_there_any_witness_of_the_incident != null) {
                    var was_there_any_witness_of_the_incident_object;

                    _this8.witnessList.forEach(function (element) {
                      if (element.full_name == _this8.incidentDetails.was_there_any_witness_of_the_incident) {
                        was_there_any_witness_of_the_incident_object = element;
                      }
                    });

                    if (was_there_any_witness_of_the_incident_object != undefined) {
                      _this8.was_there_any_witness_of_the_incident = was_there_any_witness_of_the_incident_object;
                    } else {
                      _this8.globalService.getData("Witness/getWitnessList/" + _this8.incidentDetails.was_there_any_witness_of_the_incident).subscribe(function (res) {
                        console.log('first', res);

                        if (res && res.status && res.data && res.data.length > 0) {
                          _this8.was_there_any_witness_of_the_incident = res.data[0];
                        }
                      }, function (err) {
                        console.log("Eror", err);
                      });
                    }
                  }

                  _this8.incidentDesForm.patchValue(_this8.incidentDetails);

                  _this8.alcohalImagesObject = _this8.alcohalImages = _this8.incidentDetails.alcohol_test_image;
                  _this8.drugTestImagesObject = _this8.drugTestImages = _this8.incidentDetails.drug_test_image;
                  _this8.alterDutyImagesObject = _this8.alterDutyImages = _this8.incidentDetails.return_to_alternate_duties_image;

                  _this8.onInput('', 'Incident Description'); //------------------------------------------------------- incidentDesForm ----------------------------------------------------------//
                  //------------------------------------------------------- classificationForm ----------------------------------------------------------//


                  var classificationValue = _this8.classificationForm.get('classification_value');

                  _this8.selectedTabList = _this8.incidentDetails['classification_value'].split(',');

                  _this8.classificationList.forEach(function (element) {
                    _this8.selectedTabList.find(function (ele) {
                      if (element.val == ele) {
                        classificationValue.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(ele));
                        element.isChecked = true;
                      }
                    });
                  }); // this.managerList = this.incidentDetails.classification_manager;


                  _this8.classificationForm.controls['date_of_incident'].setValue(_this8.incidentDetails.date_of_incident);

                  _this8.classificationForm.controls['time_of_incident'].setValue(_this8.incidentDetails.time_of_incident);

                  _this8.classificationForm.controls['date_reported'].setValue(_this8.incidentDetails.date_reported);

                  _this8.classificationForm.controls['time_reported'].setValue(_this8.incidentDetails.time_reported);

                  _this8.classificationForm.controls['classification_location_option'].setValue(_this8.incidentDetails.classification_location_option);

                  if (_this8.incidentDetails.classification_location_option == 'Add Location') _this8.classificationForm.controls['classification_location_value'].setValue(_this8.incidentDetails.classification_location_value);
                  if (_this8.incidentDetails.classification_location_option == 'Choose Location') _this8.classificationForm.controls['classification_location_value1'].setValue(_this8.incidentDetails.classification_location_value);

                  _this8.classificationForm.controls['classification_shift_type'].setValue(_this8.incidentDetails.classification_shift_type);

                  if (_this8.incidentDetails.classification_supervisor != '' || _this8.incidentDetails.classification_supervisor != null) {
                    var classification_supervisor_object;

                    _this8.witnessList.forEach(function (element) {
                      if (element.full_name == _this8.incidentDetails.classification_supervisor) {
                        classification_supervisor_object = element;
                      }
                    });

                    if (classification_supervisor_object != undefined) {
                      _this8.classification_supervisor = classification_supervisor_object;
                    } else {
                      _this8.globalService.getData("Supervisor/getSupervisorList/" + _this8.incidentDetails.classification_supervisor).subscribe(function (res) {
                        console.log('first', res);

                        if (res && res.status && res.data && res.data.length > 0) {
                          _this8.classification_supervisor = res.data[0];
                        }
                      }, function (err) {
                        console.log("Eror", err);
                      });
                    }

                    _this8.classificationForm.controls['classification_supervisor'].setValue(_this8.incidentDetails.classification_supervisor);
                  }

                  if (_this8.incidentDetails.classification_manager != '' || _this8.incidentDetails.classification_manager != null) {
                    var classification_manager_object;

                    _this8.witnessList.forEach(function (element) {
                      if (element.full_name == _this8.incidentDetails.classification_manager) {
                        classification_manager_object = element;
                      }
                    });

                    if (classification_manager_object != undefined) {
                      _this8.classification_manager = classification_manager_object;
                    } else {
                      _this8.globalService.getData("Manager/getManagerList/" + _this8.incidentDetails.classification_manager).subscribe(function (res) {
                        console.log('first', res);

                        if (res && res.status && res.data && res.data.length > 0) {
                          _this8.classification_manager = res.data[0];
                        }
                      }, function (err) {
                        console.log("Eror", err);
                      });
                    }

                    _this8.classificationForm.controls['classification_manager'].setValue(_this8.incidentDetails.classification_manager);
                  } //------------------------------------------------------- classificationForm ----------------------------------------------------------//
                  //------------------------------------------------------- assetDescriptionForm ----------------------------------------------------------//


                  _this8.assetDescriptionForm.patchValue(_this8.incidentDetails);

                  _this8.damageImagesObject = _this8.damageImages = _this8.incidentDetails.extent_damage_image; //------------------------------------------------------- assetDescriptionForm ----------------------------------------------------------//
                  //------------------------------------------------------- enviornmentForm ----------------------------------------------------------//

                  _this8.enviornmentForm.patchValue(_this8.incidentDetails);

                  if (_this8.incidentDetails.chemical_details.chemical_photo.length > 0) {
                    _this8.enviornmentForm.controls.chemical_details.value.insertPhotoCheckBox.setValue(true);
                  }

                  _this8.chemicalImages = _this8.chemicalImagesObject = _this8.incidentDetails.chemical_details.chemical_photo; //------------------------------------------------------- enviornmentForm ----------------------------------------------------------//
                  //------------------------------------------------------- injuryForm ----------------------------------------------------------//

                  _this8.injuryForm.controls.injury_persons.setValue(_this8.incidentDetails.injury_persons);

                  if (_this8.incidentDetails.person_details.length > 0) {
                    // for (let i = 0; i <= this.incidentDetails.person_details.length; i++) {
                    //   // this.injuryForm.controls.person_details.patchValue(this.setPersonDetails(this.incidentDetails.person_details));
                    //   // this.injuryPersonDetails.controls[i].patchValue(this.incidentDetails.person_details[i]);
                    // }
                    _this8.injuryForm.setControl('person_details', _this8.setPersonDetails(_this8.incidentDetails.person_details));
                  }

                  console.log('this.injuryForm', _this8.injuryForm); //------------------------------------------------------- injuryForm ----------------------------------------------------------//
                  //------------------------------------------------------- reportForm ----------------------------------------------------------//

                  _this8.reportForm.patchValue(_this8.incidentDetails); //------------------------------------------------------- reportForm ----------------------------------------------------------//
                  //------------------------------------------------------- reputationDesForm ----------------------------------------------------------//


                  var reputation_option = _this8.incidentDetails['reputation_option'].split(',');

                  var reputationOption = _this8.reputationDesForm.get('reputation_option');

                  _this8.reputationCheckBox.forEach(function (element) {
                    reputation_option.find(function (ele) {
                      if (element.val == ele) {
                        reputationOption.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(ele));
                        element.isChecked = true;
                      }
                    });
                  });

                  _this8.reputationDesForm.controls['individual_damage_value'].setValue(_this8.incidentDetails.individual_damage_value);

                  _this8.reputationDesForm.controls['company_damage_value'].setValue(_this8.incidentDetails.company_damage_value);

                  _this8.reputationDesForm.controls['reputation_negative_effect'].setValue(_this8.incidentDetails.reputation_negative_effect);

                  var effected_department = _this8.incidentDetails['effected_department'].split(',');

                  var effectedDepartment = _this8.reputationDesForm.get('effected_department');

                  _this8.departmentEffect.forEach(function (element) {
                    effected_department.find(function (ele) {
                      if (element.val == ele) {
                        effectedDepartment.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(ele));
                        element.isChecked = true;
                      }
                    });
                  });

                  _this8.reputationDesForm.controls['external_party'].setValue(_this8.incidentDetails.external_party);

                  if (_this8.incidentDetails.name_of_witness != '' || _this8.incidentDetails.name_of_witness != null) {
                    var name_of_witness_object;

                    _this8.witnessList.forEach(function (element) {
                      if (element.full_name == _this8.incidentDetails.name_of_witness) {
                        name_of_witness_object = element;
                      }
                    });

                    if (name_of_witness_object != undefined) {
                      _this8.name_of_witness = name_of_witness_object;
                    } else {
                      _this8.globalService.getData("Witness/getWitnessList/" + _this8.incidentDetails.name_of_witness).subscribe(function (res) {
                        console.log('first', res);

                        if (res && res.status && res.data && res.data.length > 0) {
                          _this8.name_of_witness = res.data[0];
                        }
                      }, function (err) {
                        console.log("Eror", err);
                      });
                    }
                  }

                  _this8.reputationDesForm.controls['name_of_witness'].setValue(_this8.incidentDetails.name_of_witness);

                  _this8.reputationDesForm.controls['other_witness_details'].setValue(_this8.incidentDetails.other_witness_details);

                  _this8.reputationDesForm.controls['possible_outcome_incident'].setValue(_this8.incidentDetails.possible_outcome_incident); //------------------------------------------------------- reputationDesForm ----------------------------------------------------------//
                  //------------------------------------------------------- securityForm ----------------------------------------------------------//


                  _this8.securityForm.controls['security_option'].setValue(_this8.incidentDetails.security_option); // this.securityForm.controls['it_option_value'].setValue(this.incidentDetails.it_option_value);


                  _this8.securityForm.controls['what_has_been_stolen_item'].setValue(_this8.incidentDetails.what_has_been_stolen_item);

                  _this8.securityForm.controls['approximate_value_of_stolen'].setValue(_this8.incidentDetails.approximate_value_of_stolen);

                  _this8.securityForm.controls['what_is_the_specific_securities_incident'].setValue(_this8.incidentDetails.what_is_the_specific_securities_incident);

                  var it_option_value = _this8.incidentDetails.it_option_value.split(',');

                  var itOptionValue = _this8.securityForm.get('it_option_value');

                  _this8.itSecurityList.forEach(function (ele) {
                    it_option_value.find(function (element) {
                      if (ele.val == element) {
                        itOptionValue.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(element));
                        ele.isChecked = true;
                      }
                    });
                  }); //------------------------------------------------------- securityForm ----------------------------------------------------------//

                } // this.loadingService.dismissLoading();

              }), function (error) {
                // this.loadingService.dismissLoading();
                console.log(error);
              }; // this.loadingService.dismissLoading();
            }), function (error) {
              // this.loadingService.dismissLoading();
              console.log('param error', error);
            };
          }
        }, {
          key: "setPersonDetails",
          value: function setPersonDetails(person_details) {
            var _this9 = this;

            var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray([]);
            person_details.forEach(function (element) {
              console.log('element', element);
              formArray.push(_this9.fb.group({
                injured_person_option: [element.injured_person_option],
                injured_person_option_id: [element.injured_person_option_id],
                injured_person_option_other_details: _this9.fb.group({
                  injured_person_option_other_name: [element.injured_person_option_other_details.injured_person_option_other_name],
                  injured_person_option_other_mobile_no: [element.injured_person_option_other_details.injured_person_option_other_mobile_no],
                  injured_person_option_other_email: [element.injured_person_option_other_details.injured_person_option_other_email]
                }),
                // injured_person_option_value: [element.injured_person_option_value],   // other person name
                gender: [element.gender],
                date_of_birth: [element.date_of_birth],
                normal_duties: [element.normal_duties],
                normal_duties_explanation: [element.normal_duties_explanation],
                alternate_duties: [element.alternate_duties],
                duties_explanation: [element.duties_explanation],
                initital_injury: [element.initital_injury],
                part_of_body_injured_occured: [element.part_of_body_injured_occured],
                was_immediate_treatment: [element.was_immediate_treatment],
                immediate_treatment_given_explanation: [element.immediate_treatment_given_explanation],
                immediate_treatment_person_name_id: [element.immediate_treatment_person_name_id],
                immediate_treatment_person_name: [element.immediate_treatment_person_name],
                immediate_treatment_person_number: [element.immediate_treatment_person_number]
              }));
            });
            return formArray;
          }
        }, {
          key: "onSelectTabItem",
          value: function onSelectTabItem(i) {
            this.selectedTabItem = i;
          }
        }, {
          key: "onDeSelectTabItem",
          value: function onDeSelectTabItem(i) {
            this.selectedTabItem = '';

            if (i == 'Classification') {
              this.selectedTabList = this.selectedTabList;
            }
          }
        }, {
          key: "onMobileUpload",
          value: function onMobileUpload() {}
        }, {
          key: "onPhotoGraphy",
          value: function onPhotoGraphy(event, type) {
            var _this10 = this;

            // this.photoGraphy = []
            // this.photoGraphyObject = {}
            if (type == 1) {// let data = this.mobileUploadImages();
              // console.log('data', data);
            } else {
              for (var i = 0; i < event.target.files.length; i++) {
                this.sharedService.getBase64(event.target.files[i]).then(function (data) {
                  console.log('onPhotoGraphy', data); // this.convertDataURIToBinary(data);
                  // this.photoGraphyObject[i] = data
                  // this.photoGraphy.push(data);

                  if (_this10.photoGraphy.length <= 0) {
                    _this10.photoGraphy.push(data);
                  } else {
                    _this10.photoGraphy.unshift(data);
                  }
                })["catch"](function (error) {
                  console.log('error', error);
                });
              }
            }
          }
        }, {
          key: "onAlochaolImage",
          value: function onAlochaolImage(event) {
            var _this11 = this;

            // this.alcohalImages = [];
            // this.alcohalImagesObject = {};
            for (var i = 0; i < event.target.files.length; i++) {
              this.sharedService.getBase64(event.target.files[i]).then(function (data) {
                // this.alcohalImagesObject[i] = data
                // this.alcohalImages.push(data);
                if (_this11.alcohalImages.length <= 0) {
                  _this11.alcohalImages.push(data);
                } else {
                  _this11.alcohalImages.unshift(data);
                }
              })["catch"](function (error) {
                console.log('error', error);
              });
            }
          }
        }, {
          key: "onAlcohalTestSelect",
          value: function onAlcohalTestSelect(event) {
            if (event.target.value != 'Yes') {
              this.alcohalImages = []; // this.alcohalImagesObject = {};
            }
          }
        }, {
          key: "onDrugTestImage",
          value: function onDrugTestImage(event) {
            var _this12 = this;

            // this.drugTestImages = [];
            // this.drugTestImagesObject = {};
            for (var i = 0; i < event.target.files.length; i++) {
              this.sharedService.getBase64(event.target.files[i]).then(function (data) {
                // let blobImage = this.convertDataURIToBinary(data);
                // this.drugTestImagesObject[i] = data
                // this.drugTestImages.push(data);
                if (_this12.drugTestImages.length <= 0) {
                  _this12.drugTestImages.push(data);
                } else {
                  _this12.drugTestImages.unshift(data);
                }
              })["catch"](function (error) {
                console.log('error', error);
              });
            }
          }
        }, {
          key: "onDrugTestSelect",
          value: function onDrugTestSelect(event) {
            if (event.target.value != 'Yes') {
              this.drugTestImages = []; // this.drugTestImagesObject = {};
            }
          }
        }, {
          key: "onReturnToDutyImage",
          value: function onReturnToDutyImage(event) {
            var _this13 = this;

            // this.alterDutyImagesObject = {};
            // this.alterDutyImages = [];
            for (var i = 0; i < event.target.files.length; i++) {
              this.sharedService.getBase64(event.target.files[i]).then(function (data) {
                // this.alterDutyImagesObject[i] = data
                // this.alterDutyImages.push(data);
                if (_this13.alterDutyImages.length <= 0) {
                  _this13.alterDutyImages.push(data);
                } else {
                  _this13.alterDutyImages.unshift(data);
                }
              })["catch"](function (error) {
                console.log('error', error);
              });
            }
          }
        }, {
          key: "onReturnToDutySelect",
          value: function onReturnToDutySelect(event) {
            if (event.target.value != 'Yes') {
              this.alterDutyImages = []; // this.alterDutyImagesObject = {};
            }
          }
        }, {
          key: "onSelectDamageImage",
          value: function onSelectDamageImage(event) {
            var _this14 = this;

            // this.damageImages = [];
            // this.damageImagesObject = {};
            for (var i = 0; i < event.target.files.length; i++) {
              this.sharedService.getBase64(event.target.files[i]).then(function (data) {
                // this.damageImagesObject[i] = data
                // this.damageImages.push(data);
                if (_this14.damageImages.length <= 0) {
                  _this14.damageImages.push(data);
                } else {
                  _this14.damageImages.unshift(data);
                }
              })["catch"](function (error) {
                console.log('error', error);
              });
            }
          }
        }, {
          key: "onChemicalImageSelect",
          value: function onChemicalImageSelect(event) {
            var _this15 = this;

            // this.chemicalImages = [];
            // this.chemicalImagesObject = {};
            for (var i = 0; i < event.target.files.length; i++) {
              this.sharedService.getBase64(event.target.files[i]).then(function (data) {
                // this.chemicalImagesObject[i] = data
                // this.chemicalImages.push(data);
                if (_this15.chemicalImages.length <= 0) {
                  _this15.chemicalImages.push(data);
                } else {
                  _this15.chemicalImages.unshift(data);
                }
              })["catch"](function (error) {
                console.log('error', error);
              });
            }

            this.enviornmentForm.get('chemical_details').value.chemical_photo = this.chemicalImagesObject;
          }
        }, {
          key: "onInsertImageSelect",
          value: function onInsertImageSelect(event) {
            if (!event.detail.checked) {
              this.chemicalImages = []; // this.chemicalImagesObject = {};
            }
          }
        }, {
          key: "onImageDelete",
          value: function onImageDelete(index, tabName) {
            console.log('index', index);
            console.log('tabName', tabName);

            if (tabName == 'Photography') {
              this.photoGraphy.splice(index, 1);
            }

            if (tabName == 'Alcohal Test') {
              this.alcohalImages.splice(index, 1);
            }

            if (tabName == 'Drug Test') {
              this.drugTestImages.splice(index, 1);
            }

            if (tabName == 'Return to Alternate Duties') {
              this.alterDutyImages.splice(index, 1);
            }

            if (tabName == 'Asset') {
              this.damageImages.splice(index, 1);
            }

            if (tabName == 'Chemical Image') {
              this.chemicalImages.splice(index, 1);
            }
          }
        }, {
          key: "onOpenIncidentModal",
          value: function onOpenIncidentModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this16 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('onOpenIncidentModal');
                      _context.next = 3;
                      return this.modalController.create({
                        component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_8__.ManagersPage,
                        componentProps: {
                          "list": this.witnessList,
                          "header": 'Witness List'
                        },
                        cssClass: 'managers'
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (res) {
                        if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                          _this16.incidentForm.controls['incident_near_miss'].setValue(res.data.full_name);

                          _this16.incident_near_miss = res.data;
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onOpenIncDesModal",
          value: function onOpenIncDesModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this17 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('onOpenIncidentModal');
                      _context2.next = 3;
                      return this.modalController.create({
                        component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_8__.ManagersPage,
                        componentProps: {
                          "list": this.witnessList,
                          "header": 'Witness List'
                        },
                        cssClass: 'managers'
                      });

                    case 3:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (res) {
                        if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                          _this17.incidentDesForm.controls['was_there_any_witness_of_the_incident'].setValue(res.data.full_name);

                          _this17.was_there_any_witness_of_the_incident = res.data;
                        }
                      });
                      _context2.next = 7;
                      return modal.present();

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onOpenClassiModal",
          value: function onOpenClassiModal(headerName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this18 = this;

              var list, modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('onOpenIncidentModal');
                      list = [];

                      if (headerName == 'Supervisor List') {
                        list = this.superVisorList;
                      }

                      if (headerName == 'Manager List') {
                        list = this.employeeList;
                      }

                      _context3.next = 6;
                      return this.modalController.create({
                        component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_8__.ManagersPage,
                        componentProps: {
                          "list": list,
                          "header": headerName
                        },
                        cssClass: 'managers'
                      });

                    case 6:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (res) {
                        if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                          if (headerName == 'Supervisor List') {
                            _this18.classificationForm.controls['classification_supervisor'].setValue(res.data.full_name);

                            _this18.classification_supervisor = res.data;
                          } else if (headerName == 'Manager List') {
                            _this18.classificationForm.controls['classification_manager'].setValue(res.data.full_name);

                            _this18.classification_manager = res.data;
                          }
                        }
                      });
                      _context3.next = 10;
                      return modal.present();

                    case 10:
                      return _context3.abrupt("return", _context3.sent);

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onOpenInjuryModal",
          value: function onOpenInjuryModal(field, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this19 = this;

              var modal, data;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_8__.ManagersPage,
                        componentProps: {
                          "list": this.employeeList,
                          "header": 'Employee List'
                        },
                        cssClass: 'managers'
                      });

                    case 2:
                      modal = _context4.sent;

                      if (this.injuryPersonDetails.value[index].injured_person_option != '' && this.injuryPersonDetails.value[index].injured_person_option != 'Other') {
                        data = {
                          injured_person_option_other_details: {
                            injured_person_option_other_name: '',
                            injured_person_option_other_mobile_no: '',
                            injured_person_option_other_email: ''
                          }
                        };
                        this.injuryPersonDetails.controls[index].patchValue(data);
                      }

                      modal.onDidDismiss().then(function (res) {
                        if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                          if (field == 'Injured person') {
                            var _data = {
                              injured_person_option: res.data.full_name,
                              injured_person_option_id: res.data.employee_id
                            };

                            _this19.injuryPersonDetails.controls[index].patchValue(_data);
                          }

                          if (field == 'Injured administered') {
                            var _data2 = {
                              immediate_treatment_person_name: res.data.full_name,
                              immediate_treatment_person_name_id: res.data.employee_id,
                              immediate_treatment_person_number: res.data.emp_work_email && res.data.emp_work_email != '' ? res.data.emp_work_email : res.data.emp_mobile
                            };

                            _this19.injuryPersonDetails.controls[index].patchValue(_data2);
                          }
                        }
                      });
                      _context4.next = 7;
                      return modal.present();

                    case 7:
                      return _context4.abrupt("return", _context4.sent);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onOpenReputationModal",
          value: function onOpenReputationModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this20 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_8__.ManagersPage,
                        componentProps: {
                          "list": this.witnessList,
                          "header": 'Witness List'
                        },
                        cssClass: 'managers'
                      });

                    case 2:
                      modal = _context5.sent;
                      modal.onDidDismiss().then(function (res) {
                        if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                          _this20.reputationDesForm.controls['name_of_witness'].setValue(res.data.full_name);

                          _this20.name_of_witness = res.data;
                          console.log(' this.name_of_witness', _this20.name_of_witness);
                          console.log(' this.name_of_witness', _this20.name_of_witness.employee_id);
                        }
                      });
                      _context5.next = 6;
                      return modal.present();

                    case 6:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "onOpenPreview",
          value: function onOpenPreview(img) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_9__.ImageModalPage,
                        cssClass: 'transparent-modal',
                        componentProps: {
                          img: img
                        }
                      });

                    case 2:
                      modal = _context6.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } //------------------------------------------------------ Modals------------------------------------------------------------------//

        }, {
          key: "validation",
          value: function validation() {
            var enviornmental = false;
            var reputation = false;
            var assets = false;
            var report = false;
            this.classificationForm.value['classification_value'].find(function (ele) {
              if (ele == 'Environmental') {
                enviornmental = true;
              }

              if (ele == 'Reputation') {
                reputation = true;
              }

              if (ele == 'Asset') {
                assets = true;
              }

              if (ele == 'Report') {
                report = true;
              }
            });

            if (this.incidentForm.value['incident_value'] === '' || this.incidentForm.value['incident_value'] == null) {
              this.globalService.presentToast("Incident : Incident is Required");
            } else if (this.incidentDesForm.value['incident_description'] === '' || this.incidentDesForm.value['incident_description'] == null) {
              this.globalService.presentToast("Incident Description - Please enter Description of incident");
            } else if (this.incidentDesForm.value['incident_description_action'] === '' || this.incidentDesForm.value['incident_description_action'] == null) {
              this.globalService.presentToast("Incident Description - Immediate action taken filed is Required");
            } else if (this.classificationForm.value['classification_manager'] == '' || this.classificationForm.value['classification_manager'] == null) {
              this.globalService.presentToast("Classification - Please Select the manager");
            } else if ((this.enviornmentForm.value['environmental_description'] === '' || this.enviornmentForm.value['environmental_description'] == null) && enviornmental) {
              this.globalService.presentToast("Environmental - Please enter Immediate action taken to minimize Environmental impact");
            } else if ((this.reputationDesForm.value['name_of_witness'] === '' || this.reputationDesForm.value['name_of_witness'] == null || this.reputationDesForm.value['name_of_witness'] == undefined) && reputation) {
              this.globalService.presentToast("Reputation - Please enter name of any witness");
            } else if ((this.reputationDesForm.value['name_of_witness'] == '' || this.reputationDesForm.value['name_of_witness'] == null) && reputation) {
              this.globalService.presentToast("Reputation - Please enter witness name.");
            } else if (this.reputationDesForm.value['name_of_witness'] == 'Other' && (this.reputationDesForm.value['other_witness_details'].other_witness_name == '' || this.reputationDesForm.value['other_witness_details'].other_witness_name == null || this.reputationDesForm.value['other_witness_details'].other_witness_name == undefined) && reputation) {
              this.globalService.presentToast("Reputation - Please enter other witness name.");
            } else if (this.reputationDesForm.value['name_of_witness'] == 'Other' && (this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == '' || this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == null || this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == undefined) && reputation) {
              this.globalService.presentToast("Reputation - Please enter other witness mobile no.");
            } else if (this.reputationDesForm.value['name_of_witness'] == 'Other' && (this.reputationDesForm.value['other_witness_details'].other_witness_email == '' || this.reputationDesForm.value['other_witness_details'].other_witness_email == null || this.reputationDesForm.value['other_witness_details'].other_witness_email == undefined) && reputation) {
              this.globalService.presentToast("Reputation - Please enter other witness email.");
            } else if ((this.reputationDesForm.value['possible_outcome_incident'] === '' || this.reputationDesForm.value['possible_outcome_incident'] == null) && reputation) {
              this.globalService.presentToast("Reputation - Please enter possible outcome of this incident");
            } else if ((this.assetDescriptionForm.value['asset_description'] === '' || this.assetDescriptionForm.value['asset_description'] == null) && assets) {
              this.globalService.presentToast("Asset - Please enter asset description");
            } else if ((this.assetDescriptionForm.value['extent_of_damage'] === '' || this.assetDescriptionForm.value['extent_of_damage'] == null) && assets) {
              this.globalService.presentToast("Asset - Please enter Extent of Damage");
            } else if ((this.reportForm.value['report'] === '' || this.reportForm.value['report'] == null) && report) {
              this.globalService.presentToast("Report - Please enter what could have been done differently");
            } else {
              return true;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(val) {
            var _this21 = this;

            // console.log('incidentForm', this.incidentForm.value);
            // console.log('photoGraphyForm', this.photoGraphyForm.value);
            // console.log('incidentDesForm', this.incidentDesForm.value);
            // console.log('classificationForm', this.classificationForm.value);
            // console.log('assetDescriptionForm', this.assetDescriptionForm.value)
            // console.log('enviornmentForm', this.enviornmentForm.value);
            // console.log('injuryForm', this.injuryForm.value);
            // console.log('reportForm', this.reportForm.value);
            // console.log('reputationDesForm', this.reputationDesForm.value);
            // console.log('securityForm', this.securityForm.value);
            console.log('this.incident_near_miss.employee_id ', this.incident_near_miss.employee_id);
            console.log('this.was_there_any_witness_of_the_incident.employee_id ', this.was_there_any_witness_of_the_incident.employee_id);
            console.log('this.classification_supervisor.employee_id ', this.classification_supervisor.employee_id);
            console.log('this.classification_manager.employee_id ', this.classification_manager.employee_id);
            console.log('this.name_of_witness.employee_id ', this.name_of_witness.employee_id);
            console.log(' this.classification_manager', this.classification_manager);

            if (this.photoGraphy.length > 0) {
              this.photoGraphyObject = Object.assign({}, this.photoGraphy);
            }

            if (this.alcohalImages.length > 0) {
              this.alcohalImagesObject = Object.assign({}, this.alcohalImages);
            }

            if (this.drugTestImages.length > 0) {
              this.drugTestImagesObject = Object.assign({}, this.drugTestImages);
            }

            if (this.alterDutyImages.length > 0) {
              this.alterDutyImagesObject = Object.assign({}, this.alterDutyImages);
            }

            if (this.damageImages.length > 0) {
              this.damageImagesObject = Object.assign({}, this.damageImages);
            }

            if (this.chemicalImages.length > 0) {
              this.chemicalImagesObject = Object.assign({}, this.chemicalImages);
            }

            var userDetails = JSON.parse(localStorage.getItem('userDetails'));
            var validation = false;

            if (val == 'submit') {
              validation = this.validation();
            }

            if (val == 'submit' && validation || val == 'incomplete_submit' && validation == false) {
              var fd = new FormData(); //----------------------------------------------- Incident ---------------------------------------------------------------// 

              fd.append("incident_value", this.incidentForm.value['incident_value'] ? this.incidentForm.value['incident_value'] : ''); // required
              // fd.append("incident_near_miss", this.incidentForm.value['incident_near_miss'] ? this.incidentForm.value['incident_near_miss'] : '');

              fd.append("incident_near_miss", this.incident_near_miss && this.incident_near_miss.employee_id ? this.incident_near_miss.employee_id : '');
              fd.append("incident_near_miss_other", this.incidentForm.value['incident_near_miss_other'] ? this.incidentForm.value['incident_near_miss_other'] : ''); //----------------------------------------------- Incident ---------------------------------------------------------------// 
              //---------------------------------------------- photography -------------------------------------------------------------//

              fd.append("photography_image", this.photoGraphyObject ? JSON.stringify(this.photoGraphyObject) : ''); //---------------------------------------------- photography --------------------------------------------------------------//
              //--------------------------------------------- Incident Description ------------------------------------------------------//

              fd.append("incident_description", this.incidentDesForm.value['incident_description'] ? this.incidentDesForm.value['incident_description'] : ''); //required

              fd.append("incident_description_action", this.incidentDesForm.value['incident_description_action'] ? this.incidentDesForm.value['incident_description_action'] : ''); //incident photo pending from postman and here also  // required

              fd.append("incident_description_alcohol_test", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
              fd.append("alcohol_test_completed", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
              fd.append("drug_test_completed", this.incidentDesForm.value['drug_test_completed'] ? this.incidentDesForm.value['drug_test_completed'] : '');
              fd.append("seen_differently", this.incidentDesForm.value['seen_differently'] ? this.incidentDesForm.value['seen_differently'] : '');
              fd.append("was_there_any_witness_of_the_incident", this.was_there_any_witness_of_the_incident && this.was_there_any_witness_of_the_incident.employee_id ? this.was_there_any_witness_of_the_incident.employee_id : ''); // fd.append("was_there_any_witness_of_the_incident", this.incidentDesForm.value['was_there_any_witness_of_the_incident']);

              fd.append("incdesc_other_witness_details", JSON.stringify(this.incidentDesForm.value['incdesc_other_witness_details']));
              fd.append("return_to_alternate_duties", this.incidentDesForm.value['return_to_alternate_duties']);
              fd.append("alcohol_test_image", JSON.stringify(this.alcohalImagesObject)); // alcohal test image

              fd.append("drug_test_image", JSON.stringify(this.drugTestImagesObject)); // drug_test_image

              fd.append("return_to_alternate_duties_image", JSON.stringify(this.alterDutyImagesObject)); // return_to_alternate_duties_image 
              //----------------------------------------------- Incident Description -----------------------------------------------------//
              //----------------------------------------------- Classification -----------------------------------------------------------//

              console.log('time_of_incident', this.classificationForm.value['time_of_incident']);
              console.log('time_reported', this.classificationForm.value['time_reported']);
              fd.append("classification_value", this.classificationForm.value['classification_value'].join(','));
              fd.append("date_of_incident", this.classificationForm.value['date_of_incident']);
              fd.append("time_of_incident", this.classificationForm.value['time_of_incident'] != '' ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.classificationForm.value['time_of_incident']).format('HH:mm:ss') : '');
              fd.append("date_reported", this.classificationForm.value['date_reported']);
              fd.append("time_reported", this.classificationForm.value['time_reported'] != '' ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.classificationForm.value['time_reported']).format('HH:mm:ss') : '');
              fd.append("classification_location_option", this.classificationForm.value['classification_location_option']);

              if (this.classificationForm.value['classification_location_option'] == 'Add Location') {
                fd.append("classification_location_value", this.classificationForm.value['classification_location_value']);
              }

              if (this.classificationForm.value['classification_location_option'] == 'Choose Location') {
                fd.append("classification_location_value", this.classificationForm.value['classification_location_value1']);
              }

              fd.append("classification_shift_type", this.classificationForm.value['classification_shift_type']);
              fd.append("classification_supervisor", this.classification_supervisor && this.classification_supervisor.employee_id ? this.classification_supervisor.employee_id : ''); // fd.append("classification_supervisor", this.classificationForm.value['classification_supervisor']);
              // fd.append("classification_manager", this.classificationForm.value['classification_manager']);        // required

              fd.append("classification_manager", this.classification_manager && this.classification_manager.employee_id ? this.classification_manager.employee_id : ''); //--------------------------------------------------- Classification ---------------------------------------------------------//
              //----------------------------------------------------- Injury ---------------------------------------------------------------//

              fd.append("injury_persons", this.injuryForm.value['injury_persons']); // form value

              fd.append("person_details", JSON.stringify(this.injuryForm.value['person_details'])); //------------------------------------------------------ Injury ---------------------------------------------------------------//
              //------------------------------------------------------ Enviornment ----------------------------------------------------------//

              fd.append("environmental_description", this.enviornmentForm.value['environmental_description']); // required

              fd.append("was_a_chemical_split", this.enviornmentForm.value['was_a_chemical_split']); // chemical split value inner side query

              fd.append("chemical_details", JSON.stringify(this.enviornmentForm.value['chemical_details'])); // data with image

              fd.append("emergency_spill_kit_used", this.enviornmentForm.value['emergency_spill_kit_used']);
              fd.append("out_of_split_kit", this.enviornmentForm.value['out_of_split_kit']); //------------------------------------------------------ Enviornment -----------------------------------------------------------//
              //------------------------------------------------------ Reputation -------------------------------------------------------------// 

              fd.append("reputation_option", this.reputationDesForm.value['reputation_option']);
              fd.append("individual_damage_value", this.reputationDesForm.value['individual_damage_value']);
              fd.append("company_damage_value", this.reputationDesForm.value['company_damage_value']);
              fd.append("reputation_negative_effect", this.reputationDesForm.value['reputation_negative_effect']);
              fd.append("effected_department", this.reputationDesForm.value['effected_department']);
              fd.append("external_party", this.reputationDesForm.value['external_party']); // fd.append("name_of_witness", this.reputationDesForm.value['name_of_witness']);

              fd.append("name_of_witness", this.name_of_witness && this.name_of_witness.employee_id ? this.name_of_witness.employee_id : '');
              fd.append("other_witness_details", JSON.stringify(this.reputationDesForm.value['other_witness_details']));
              fd.append("possible_outcome_incident", this.reputationDesForm.value['possible_outcome_incident']); // required
              //--------------------------------------------------------- Reputation -----------------------------------------------------------//
              //--------------------------------------------------------- Security -------------------------------------------------------------//

              fd.append("security_option", this.securityForm.value['security_option']);

              if (this.securityForm.value['security_option'] == 'IT') {
                fd.append("it_option_value", this.securityForm.value['it_option_value'].join(',')); // chexkbox and inner value
              }

              fd.append("what_has_been_stolen_item", this.securityForm.value['what_has_been_stolen_item']);
              fd.append("approximate_value_of_stolen", this.securityForm.value['approximate_value_of_stolen']);
              fd.append("what_is_the_specific_securities_incident", this.securityForm.value['what_is_the_specific_securities_incident']); //---------------------------------------------------------- Security--------------------------------------------------------------//
              //---------------------------------------------------------- Asset ----------------------------------------------------------------//

              fd.append("asset_description", this.assetDescriptionForm.value['asset_description']); // required

              fd.append("asset_has_number", this.assetDescriptionForm.value['asset_has_number']);

              if (this.assetDescriptionForm.value['asset_has_number'] == 'Yes') {
                fd.append("asset_number", this.assetDescriptionForm.value['asset_number']);
              }

              fd.append("extent_of_damage", this.assetDescriptionForm.value['extent_of_damage']); // required

              fd.append("extent_damage_image", JSON.stringify(this.damageImagesObject)); // extent_damage_image
              //---------------------------------------------------------- Asset -----------------------------------------------------------------//
              //--------------------------------------------------------  Report -----------------------------------------------------------------//

              fd.append("report", this.reportForm.value['report']); //--------------------------------------------------------- Report ------------------------------------------------------------------//

              fd.append('id', this.incidentDetails.id);
              fd.append('user_id', userDetails.id);
              var url = val == 'submit' ? "add_form/submit" : 'Add_form/submit_incomplete';
              this.globalService.postData(url, fd).subscribe(function (res) {
                // this.globalService.presentLoading();
                if (res.status) {
                  _this21.globalService.presentToast(res.message);

                  _this21.nav.navigateRoot("incident-form-list");
                } else {
                  _this21.globalService.presentToast(res.message);
                } // this.globalService.dismissLoading();

              }, function (err) {
                console.log("err", err); // this.globalService.dismissLoading();
              });
            }
          }
        }, {
          key: "onClassificationChange",
          value: function onClassificationChange(event) {
            var formArray = this.classificationForm.get('classification_value');

            if (event.target.checked) {
              formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(event.target.value));
              this.classificationList.find(function (ele) {
                if (ele.val == event.target.value) {
                  ele.isChecked = true;
                }
              });
            } else {
              var i = 0;
              formArray.controls.forEach(function (ctrl) {
                if (ctrl.value == event.target.value) {
                  formArray.removeAt(i);
                  return;
                }

                i++;
              });
              this.classificationList.find(function (ele) {
                if (ele.val == event.target.value) {
                  ele.isChecked = false;
                }
              });
            }

            this.selectedTabList = formArray.value;
            console.log('  this.selectedTabList ', this.selectedTabList);
          }
        }, {
          key: "onSecurityOption",
          value: function onSecurityOption(evt) {
            if (evt.detail.value == 'IT') {
              this.securityForm.controls['what_has_been_stolen_item'].reset();
              this.securityForm.controls['approximate_value_of_stolen'].reset();
              this.securityForm.controls['what_is_the_specific_securities_incident'].reset();
            } else if (evt.detail.value == 'Theft') {
              this.itSecurityList.find(function (ele) {
                ele.isChecked = false;
              });
              this.securityForm.controls['what_is_the_specific_securities_incident'].reset();
            } else if (evt.detail.value == 'Other') {
              this.itSecurityList.find(function (ele) {
                ele.isChecked = false;
              });
              this.securityForm.controls['what_has_been_stolen_item'].reset();
              this.securityForm.controls['approximate_value_of_stolen'].reset();
            }
          }
        }, {
          key: "onSecurityItOption",
          value: function onSecurityItOption(event) {
            console.log('event', event);
            var formArray = this.securityForm.get('it_option_value');

            if (event.target.checked) {
              formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(event.target.value));
              this.itSecurityList.find(function (ele) {
                if (ele.val == event.target.value) {
                  ele.isChecked = true;
                }
              });
            } else {
              var i = 0;
              formArray.controls.forEach(function (ctrl) {
                if (ctrl.value == event.target.value) {
                  formArray.removeAt(i);
                  return;
                }

                i++;
              });
              this.itSecurityList.find(function (ele) {
                if (ele.val == event.target.value) {
                  ele.isChecked = false;
                }
              });
            }

            console.log('itSecurityList', this.itSecurityList);
            console.log('securityForm', this.securityForm);
          }
        }, {
          key: "onReputationDamagesCheckBox",
          value: function onReputationDamagesCheckBox(event) {
            var formArray = this.reputationDesForm.get('reputation_option');

            if (event.target.checked) {
              formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(event.target.value));
              this.reputationCheckBox.find(function (ele) {
                if (ele.val == event.target.value) {
                  ele.isChecked = true;
                }
              });
            } else {
              var i = 0;
              formArray.controls.forEach(function (ctrl) {
                if (ctrl.value == event.target.value) {
                  formArray.removeAt(i);
                  return;
                }

                i++;
              });
              this.reputationCheckBox.find(function (ele) {
                if (ele.val == event.target.value) {
                  ele.isChecked = false;
                }
              });
            }
          }
        }, {
          key: "onInput",
          value: function onInput(evt, val) {
            var _this22 = this;

            this.tabList.find(function (ele) {
              if (val == 'Incident' && _this22.incidentForm.valid) {
                if (ele.val != 'Classification') {
                  ele.tabDisable = false;
                }
              } else if (val == 'Incident Description' && _this22.incidentDesForm.valid) {
                ele.tabDisable = false;
              } else {
                if (val == 'Incident Description' && _this22.incidentDesForm.invalid && ele.val == 'Classification') {
                  ele.tabDisable = true;
                  _this22.selectedTabList = [];

                  _this22.classificationForm.reset();

                  _this22.injuryForm.reset();

                  _this22.enviornmentForm.reset();

                  _this22.reputationDesForm.reset();

                  _this22.securityForm.reset();

                  _this22.assetDescriptionForm.reset();

                  _this22.reportForm.reset();
                }
              }
            });

            if (evt && evt.detail && evt.detail.value && evt.detail.value != 'Near Miss') {
              this.incidentForm.controls['incident_near_miss'].setValue('');
              this.incidentForm.controls['incident_near_miss_other'].setValue('');
            }
          }
        }, {
          key: "injuryPersonDetails",
          get: function get() {
            return this.injuryForm.get("person_details");
          }
        }, {
          key: "injuryPersonKeys",
          value: function injuryPersonKeys() {
            return this.fb.group({
              injured_person_option: [''],
              injured_person_option_id: [''],
              injured_person_option_other_details: this.fb.group({
                injured_person_option_other_name: [''],
                injured_person_option_other_mobile_no: [''],
                injured_person_option_other_email: ['']
              }),
              // injured_person_option_value: [''],  // other person name
              gender: [''],
              date_of_birth: [''],
              normal_duties: [''],
              normal_duties_explanation: [''],
              alternate_duties: [''],
              duties_explanation: [''],
              initital_injury: [''],
              part_of_body_injured_occured: [],
              was_immediate_treatment: [''],
              immediate_treatment_given_explanation: [''],
              immediate_treatment_person_name: [''],
              immediate_treatment_person_name_id: [''],
              immediate_treatment_person_number: ['']
            });
          }
        }, {
          key: "onAddMultiplePersonDetails",
          value: function onAddMultiplePersonDetails(event) {
            var no = 0;

            if (this.injuryForm.value["person_details"].length != 0) {
              no = parseInt(this.injuryForm.value['injury_persons']) - this.injuryForm.value["person_details"].length;
            } else {
              no = this.injuryForm.value['injury_persons'];
            } // if (no == 0) {
            //   console.log(1);
            //   this.injuryPersonDetails.push(this.injuryPersonKeys());
            // } else 


            if (no > 0) {
              for (var i = 1; i <= no; i++) {
                this.injuryPersonDetails.push(this.injuryPersonKeys());
              }
            } else if (no < 0) {
              for (var _i = 1; _i <= Math.abs(no); _i++) {
                this.injuryPersonDetails.controls.pop();
                this.injuryForm.value["person_details"].pop();
              }
            }
          }
        }, {
          key: "onRepoNegativeEffect",
          value: function onRepoNegativeEffect(evt) {
            if (evt.detail.value == "Internal") {
              this.reputationDesForm.controls['external_party'].setValue('');
            } else if (evt.detail.value == "External") {
              this.reputationDesForm.controls['effected_department'].setValue('');
            }
          }
        }, {
          key: "onDepartmentEffectCheckBox",
          value: function onDepartmentEffectCheckBox(event) {
            var formArray = this.reputationDesForm.get('effected_department');

            if (event.detail.checked) {
              formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(event.detail.value));
              this.departmentEffect.find(function (ele) {
                console.log('departmentEffect ele', ele);

                if (ele.val == event.detail.value) {
                  console.log('here1');
                  ele.isChecked = event.detail.checked;
                }
              });
            } else {
              var i = 0;
              formArray.controls.forEach(function (ctrl) {
                if (ctrl.value == event.detail.value) {
                  formArray.removeAt(i);
                  return;
                }

                i++;
              });
              this.departmentEffect.find(function (ele) {
                if (ele.val == event.detail.value) {
                  ele.isChecked = false;
                }
              });
            }

            console.log('this.departmentEffect', this.departmentEffect);
            console.log('this.reputationDesForm', this.reputationDesForm);
          }
        }, {
          key: "onWitnessChange",
          value: function onWitnessChange(event) {
            if (event.detail.value != 'Other') {
              this.reputationDesForm.controls['other_witness_details'].reset();
            } else {
              this.reputationDesForm.value['other_witness_details'].employee_id = 0;
            }
          }
        }, {
          key: "onEmpChange",
          value: function onEmpChange(event, index) {
            var _this23 = this;

            console.log('event', event, index);
            this.employeeList.filter(function (ele) {
              if (ele.full_name == event.detail.value) {
                console.log('ele', ele);
                console.log('this.injuryForm', _this23.injuryForm.controls['person_details']); // console.log('this.injuryForm 1', this.injuryForm.value['person_details'][index]['immediate_treatment_person_number'].setValue(ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email));
                // this.injuryForm.value['person_details'][index].immediate_treatment_person_number = ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email;

                _this23.injuryForm.value['person_details'][index]['emp_id'] = ele.employee_id;
                _this23.injuryForm.controls['person_details'][index]['immediate_treatment_person_number'] = ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email;
              }
            });
            console.log(' this.injuryForm.value', this.injuryForm.value['person_details'][index]);
          }
        }, {
          key: "onAdministeredPerson",
          value: function onAdministeredPerson(event, index) {
            var _this24 = this;

            this.injuryForm.controls['person_details'].value[index]['immediate_treatment_person_number'] = '';
            this.employeeList.filter(function (ele) {
              if (ele.employee_id == event.detail.value) {
                console.log('ele', ele);
                _this24.injuryForm.controls['person_details'].value[index]['immediate_treatment_person_number'] = ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email; // this.injuryForm.value['person_details'].controls[index]['immediate_treatment_person_number'].setValue(ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email);
              }
            });
            console.log(' this.injuryForm.value', this.injuryForm.value['person_details']);
          }
        }, {
          key: "onIncDesWitnessChange",
          value: function onIncDesWitnessChange(event) {
            if (event.detail.value != 0) {
              this.incidentDesForm.controls['incdesc_other_witness_details'].reset();
            }
          }
        }]);

        return IncidentFormEditPage;
      }();

      _IncidentFormEditPage.ctorParameters = function () {
        return [{
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_6__.GlobalService
        }, {
          type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController
        }, {
          type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }];
      };

      _IncidentFormEditPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-incident-form-edit',
        template: _raw_loader_incident_form_edit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_incident_form_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _IncidentFormEditPage);
      /***/
    },

    /***/
    67619:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-form-edit/incident-form-edit.page.scss ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .incident {\n  font-family: \"mon-bold\";\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .incident p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .incident img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n  font-family: \"mon-bold\";\n}\nion-content .activeBackground p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .questionHead {\n  font-family: \"mon-bold\";\n  font-size: 20px !important;\n}\nion-content .ra {\n  text-transform: capitalize;\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 15px;\n  color: var(--black-color);\n}\nion-content .other_witness {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 18px !important;\n}\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\nion-content .camera {\n  margin-top: 16px;\n}\nion-content .img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LWZvcm0tZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUFKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUNOO0FBR0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUVJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBTjtBQUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQU47QUFDTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ1I7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUFGSjtBQUtFO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBSUk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUZOO0FBTUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFKSjtBQU9FO0VBQ0UsaUJBQUE7QUFMSjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVNFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUEoiLCJmaWxlIjoiaW5jaWRlbnQtZm9ybS1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuc2F2ZUJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMzBweDtcclxuICB9XHJcbiAgLnBsdXMge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxuICAuaW5jaWRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBwIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3RpdmVCYWNrZ3JvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyVGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMzNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucXVlc3Rpb25IZWFkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yYSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vdGhlcl93aXRuZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGFiZWxDdXN0b21Ecm9wRG93biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICB9XHJcblxyXG4gIC5jYW1lcmEge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbiAgLmltZy1yZXNwb25zaXZlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    4273:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/incident/incident-form-edit/incident-form-edit.page.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Edit Incident Form</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"nav.back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class='saveBtn' (click)=\"onSubmit('incomplete_submit')\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div class=\"container\">\n    <p>ReacIncident report</p>\n  </div>\n\n  <div class=\"ion-padding-start ion-padding-end\">\n    <div *ngFor=\"let tabItem of tabList\">\n      <ion-button class=\"incident\" *ngIf=\"selectedTabItem != tabItem.val\" (click)=\"onSelectTabItem(tabItem.val)\"\n        [disabled]=\"tabItem.tabDisable\">\n        <p>{{tabItem.val}} </p>\n        <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n      </ion-button>\n\n      <!------------------------------------------------------------- Incident -------------------------------------------------------------->\n      <div *ngIf=\"selectedTabItem==tabItem.val && selectedTabItem =='Incident'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val}}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div [formGroup]=\"incidentForm\">\n          <ion-radio-group formControlName=\"incident_value\" (ionChange)=\"onInput($event,'Incident')\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Actual</ion-label>\n                  <ion-radio slot=\"start\" value=\"Actual\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Near Miss</ion-label>\n                  <ion-radio slot=\"start\" value=\"Near Miss\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Serious potential incident (SPI)</ion-label>\n                  <ion-radio slot=\"start\" value=\"Serious potential incident (SPI)\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"incidentForm.value['incident_value'] == 'Near Miss'\">\n            <p class=\"question\">Who witnessed the near miss ? :</p>\n\n            <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenIncidentModal()\">\n              <!-- <ion-label>{{managerName}}</ion-label> -->\n              <ion-input placeholder=\"Please select who witnessed the near miss\" formControlName=\"incident_near_miss\">\n              </ion-input>\n              <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                <ion-button class=\"ion-no-padding ion-no-margin\">\n                  <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n\n            <!-- <ion-item class=\"ra\" lines=\"none\">\n              <ion-select placeholder=\"Please select who witnessed the near miss\" interface=\"action-sheet\"\n                formControlName=\"incident_near_miss\">\n                <ion-select-option value=\"{{witnesskeys?.employee_id}}\" *ngFor=\"let witnesskeys of witnessList\">\n                  {{witnesskeys?.full_name}}</ion-select-option>\n              </ion-select>\n            </ion-item> -->\n\n            <p class=\"question\">\n              Possible consequence under different circumstances :\n            </p>\n            <ion-input placeholder=\"Please enter possible consequence under different circumstances\"\n              formControlName=\"incident_near_miss_other\"></ion-input>\n          </div>\n        </div>\n      </div>\n      <!------------------------------------------------------------- Incident -------------------------------------------------------------->\n\n      <!------------------------------------------------------------ Photography ------------------------------------------------------------>\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Photography'\" class=\"activeBackground\"\n        [formGroup]=\"photoGraphyForm\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"onPhotoGraphy($event, 1)\">Upload Image</ion-button>\n        </div>\n        <div *ngIf=\"platformCheck === 'browser'\">\n          <input type='file' value=\"photography_image\" multiple (change)=\"onPhotoGraphy($event, 2)\">\n          <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"photoGraphy.length > 0\">\n            <ion-slide *ngFor=\"let photography_image of photoGraphy\">\n              <img [src]=\"photography_image\" tappable (click)=\"onOpenPreview(photography_image)\">\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <!------------------------------------------------------------ Photography ------------------------------------------------------------>\n\n\n      <!-------------------------------------------------------- Incident Description ------------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Incident Description'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div [formGroup]=\"incidentDesForm\">\n          <p class=\"question\">\n            Description of incident :\n          </p>\n          <ion-text class=\"mandatoryField\">( Note : You must not use any personal details or names)</ion-text>\n          <ion-input placeholder=\"Please enter description of incident\" formControlName=\"incident_description\"\n            (ionChange)=\"onInput($event,'Incident Description')\"></ion-input>\n          <p class=\"question\">Immediate action taken : </p>\n          <ion-input placeholder=\"Please enter immediate action taken\" formControlName=\"incident_description_action\"\n            (ionChange)=\"onInput($event,'Incident Description')\"></ion-input>\n\n          <p class=\"question\">What could have been done differently ? :</p>\n          <ion-input placeholder=\"Please enter what could have been done differently\"\n            formControlName=\"seen_differently\">\n          </ion-input>\n\n          <p class=\"question\">Was there any Witnesses of the incident ? :</p>\n\n          <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenIncDesModal('Incident Description', 'Witness List')\">\n            <ion-input placeholder=\"Please select witness\" formControlName=\"was_there_any_witness_of_the_incident\">\n            </ion-input>\n            <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n              <ion-button class=\"ion-no-padding ion-no-margin\">\n                <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <!-- <ion-select placeholder=\"Please select witness\" interface=\"action-sheet\"\n                formControlName=\"was_there_any_witness_of_the_incident\" (ionChange)=\"onIncDesWitnessChange($event)\">\n                <ion-select-option value=\"{{witnesskeys?.employee_id}}\" *ngFor=\"let witnesskeys of witnessList\">\n                  {{witnesskeys?.full_name}}</ion-select-option>\n              </ion-select> -->\n          </ion-item>\n\n          <div *ngIf=\"incidentDesForm.value['was_there_any_witness_of_the_incident'] == 'Other'\"\n            formGroupName='incdesc_other_witness_details'>\n            <p class=\"other_witness\"> Other Witness Details </p>\n            <p class=\"question\">\n              Name :\n            </p>\n            <ion-input placeholder=\"Please enter Other Witness Name\" formControlName=\"incdesc_other_witness_name\">\n            </ion-input>\n            <p class=\"question\">\n              Mobile No :\n            </p>\n            <ion-input type=\"tel\" placeholder=\"Please enter Other Witness Mobile No \"\n              formControlName=\"incdesc_other_witness_mobile_no\">\n            </ion-input>\n            <p class=\"question\">\n              Email id :\n            </p>\n            <ion-input type=\"email\" placeholder=\"Please enter Other Witness Email\"\n              formControlName=\"incdesc_other_witness_email\">\n            </ion-input>\n          </div>\n\n\n          <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n          <ion-radio-group formControlName=\"incident_description_alcohol_test\"\n            (ionChange)=\"onAlcohalTestSelect($event)\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Alcohol test completed :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\">\n            <div *ngIf=\"platformCheck === 'cordova'\">\n              <ion-button *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\" class=\"camera\"\n                expand=\"block\" (click)=\"selectImage(2)\">Upload Image\n              </ion-button>\n              <img src=\"\" *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\"\n                class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"incident_description_photo\" multiple (change)=\"onAlochaolImage($event)\">\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"alcohalImages.length > 0\">\n                <ion-slide *ngFor=\"let alcohalImage of alcohalImages\">\n                  <img [src]=\"alcohalImage\" tappable (click)=\"onOpenPreview(alcohalImage)\">\n                </ion-slide>\n              </ion-slides>\n            </div>\n          </div>\n          <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n\n\n          <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n          <ion-radio-group formControlName=\"drug_test_completed\" (ionChange)=\"onDrugTestSelect($event)\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Drug test completed :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\">\n            <div *ngIf=\"platformCheck === 'cordova'\">\n              <ion-button *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" class=\"camera\" expand=\"block\"\n                (click)=\"selectImage(6)\">Upload Image\n              </ion-button>\n              <img src=\"\" *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"drug_test_image\" multiple (change)=\"onDrugTestImage($event)\">\n\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"drugTestImages.length > 0\">\n                <ion-slide *ngFor=\"let drugTestImage of drugTestImages\">\n                  <img [src]=\"drugTestImage\" tappable (click)=\"onOpenPreview(drugTestImage)\">\n                </ion-slide>\n              </ion-slides>\n              <!-- <div class=\"ion-text-center\" *ngIf=\"drugTestImages.length > 0\">\n                <div *ngFor=\"let drugTestImage of drugTestImages\">\n                  <img [src]=\"drugTestImage\" height=\"100\" class=\"img-responsive\"> <br />\n                </div>\n              </div> -->\n            </div>\n          </div>\n\n          <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n\n          <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n\n          <ion-radio-group formControlName=\"return_to_alternate_duties\" (ionChange)=\"onReturnToDutySelect($event)\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Alternate Duties :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"incidentDesForm.value['return_to_alternate_duties']=='Yes'\">\n            <ion-text class=\"mandatoryField\">* Please take a photo or upload the Cerificate of Copacity (COC).\n            </ion-text>\n            <div *ngIf=\" platformCheck==='cordova'\">\n              <ion-button *ngIf=\" returnToAlternateDuties=='Yes'\" class=\" camera\" expand=\"block\"\n                (click)=\"selectImage(7)\">\n                Upload Image\n              </ion-button>\n              <img src=\"\" *ngIf=\"incidentDesForm.value['return_to_alternate_duties']=='Yes'\" class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"return_to_alternate_duties_image\" multiple class=\"uploadFile\"\n                (change)=\"onReturnToDutyImage($event)\">\n\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"alterDutyImages.length > 0\">\n                <ion-slide *ngFor=\"let returnToAlterDutyImage of alterDutyImages\">\n                  <img [src]=\"returnToAlterDutyImage\" tappable (click)=\"onOpenPreview(returnToAlterDutyImage)\">\n                </ion-slide>\n              </ion-slides>\n            </div>\n\n          </div>\n          <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n        </div>\n      </div>\n\n      <!------------------------------------------------------- Incident Description -------------------------------------------------------->\n\n\n      <!--------------------------------------------------------- Classification ------------------------------------------------------------>\n\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem =='Classification'\" [formGroup]='classificationForm'\n        class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-row class='ion-no-padding'>\n          <ion-col size=\"6\" *ngFor=\"let classificationValue of classificationList; let i=index\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>{{classificationValue.val}}</ion-label>\n              <ion-checkbox slot=\"start\" [value]=\"classificationValue.val\" [checked]=\"classificationValue.isChecked\"\n                (ionChange)=\"onClassificationChange($event)\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <!-- <ion-item class=\"ra\" lines=\"none\"> -->\n        <p class=\"question\">Date of Incident :</p>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Please select date of incident\"\n          formControlName=\"date_of_incident\">\n        </ion-datetime>\n        <!-- </ion-item> -->\n\n        <!-- <ion-item class=\"ra\" lines=\"none\"> -->\n        <p class=\"question\">Time of Incident :</p>\n        <ion-datetime displayFormat=\"HH:mm:ss\" placeholder=\"Please select time of incident\"\n          formControlName=\"time_of_incident\">\n        </ion-datetime>\n        <!-- </ion-item> -->\n\n        <!-- <ion-item class=\"ra\" lines=\"none\"> -->\n        <p class=\"question\">Date Reported :</p>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Please select reported date\"\n          formControlName=\"date_reported\">\n        </ion-datetime>\n        <!-- </ion-item> -->\n\n        <!-- <ion-item class=\"ra\" lines=\"none\"> -->\n        <p class=\"question\">Time Reported :</p>\n        <ion-datetime displayFormat=\"HH:mm:ss\" placeholder=\"Please select reported time\"\n          formControlName=\"time_reported\">\n        </ion-datetime>\n        <!-- </ion-item> -->\n\n        <ion-radio-group formControlName=\"classification_location_option\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Add Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Add Location\">\n                </ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Choose Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Choose Location\">\n                </ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"classificationForm.value['classification_location_option'] =='Add Location'\">\n          <p class=\"question\">Add Location :</p>\n          <ion-input placeholder=\"Please enter location\" formControlName=\"classification_location_value\">\n          </ion-input>\n        </div>\n\n        <div *ngIf=\"classificationForm.value['classification_location_option'] == 'Choose Location'\">\n          <p class=\"question\">Choose Location :</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-select placeholder=\"Please select location\" interface=\"action-sheet\"\n              formControlName=\"classification_location_value1\">\n              <ion-select-option value=\"{{locationListItem?.location_name}}\"\n                *ngFor=\"let locationListItem of locationList\">\n                {{locationListItem?.location_name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <!-- <ion-item class=\"ra\" lines=\"none\"> -->\n        <p class=\"question\">Shift :</p>\n        <ion-select placeholder=\"Shift Type\" interface=\"action-sheet\" formControlName=\"classification_shift_type\">\n          <ion-select-option value=\"{{shiftItem?.shift_type}}\" *ngFor=\"let shiftItem of shiftTypeList\">\n            {{shiftItem?.shift_type}}\n          </ion-select-option>\n        </ion-select>\n        <!-- </ion-item> -->\n\n        <p class=\"question\">Supervisor :</p>\n        <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenClassiModal('Supervisor List')\">\n          <ion-input placeholder=\"Please select supervisor\" formControlName=\"classification_supervisor\">\n          </ion-input>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\">\n              <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <!-- <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Supervisor\" interface=\"action-sheet\" formControlName=\"classification_supervisor\">\n            <ion-select-option value=\"{{superVisorItem?.employee_id}}\" *ngFor=\"let superVisorItem of superVisorList\">\n              {{superVisorItem?.full_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item> -->\n\n        <p class=\"question\">Manger :</p>\n        <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenClassiModal('Manager List')\">\n          <ion-input placeholder=\"Please select manager\" formControlName=\"classification_manager\">\n          </ion-input>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\">\n              <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <!-- <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenModal()\">\n          <ion-label class=\"labelCustomDropDown\">{{managerList}}</ion-label>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\">\n              <ion-icon name=\"chevron-down\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item> -->\n\n      </div>\n\n      <!---------------------------------------------------------- Classification ----------------------------------------------------------->\n    </div>\n\n    <!-------------------------------------------------------- Classification Sub Tab ------------------------------------------------------->\n\n    <div *ngFor=\"let classification of selectedTabList; let i = index\">\n      <ion-button class=\"incident\" *ngIf=\"selectedTabItem != classification\" (click)=\"onSelectTabItem(classification)\">\n        <p>{{classification}} </p>\n        <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n      </ion-button>\n\n\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n\n      <div *ngIf=\" selectedTabItem == classification && classification =='Asset'\" class=\"activeBackground\"\n        [formGroup]=\"assetDescriptionForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Asset description :\n        </p>\n        <ion-input placeholder=\"Please enter asset description\" formControlName=\"asset_description\"></ion-input>\n        <ion-radio-group formControlName=\"asset_has_number\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Does Asset have a number ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"assetDescriptionForm.value['asset_has_number']=='Yes'\">\n          <p class=\"question\">\n            Asset Number :\n          </p>\n          <ion-input placeholder=\"Please enter asset number\" type=\"tel\" formControlName=\"asset_number\"></ion-input>\n        </div>\n        <p class=\"question\">\n          Extent of Damage :\n        </p>\n        <ion-input placeholder=\"Please enter extent of damage\" formControlName=\"extent_of_damage\"></ion-input>\n\n        <div *ngIf=\"platformCheck==='cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(3)\">Upload photo of damage</ion-button>\n          <img src=\"\" *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\" class=\"img-responsive\" />\n        </div>\n\n        <div *ngIf=\"platformCheck === 'browser'\">\n          <p class=\"question\">\n            Upload photo of damage :\n          </p>\n          <input type='file' value=\"extent_damage_image\" multiple (change)=\"onSelectDamageImage($event)\">\n          <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"damageImages.length > 0\">\n            <ion-slide *ngFor=\"let damageImage of damageImages\">\n              <img [src]=\"damageImage\" tappable (click)=\"onOpenPreview(damageImage)\">\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n      <!-------------------------------------------------Environmental------------------------------------------------>\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Environmental'\" class=\"activeBackground\"\n        [formGroup]=\"enviornmentForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <p class=\"question\">\n          Immediate action taken to minimize Environmental impact ? :\n        </p>\n        <ion-input placeholder=\"Please enter immediate action taken to minimize environmental impact\"\n          formControlName='environmental_description'></ion-input>\n\n        <ion-radio-group formControlName=\"was_a_chemical_split\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was a chemical split ? :</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"enviornmentForm.value['was_a_chemical_split']==='Yes'\" formGroupName=\"chemical_details\">\n\n          <p class=\"question\">\n            Name of chemical :\n          </p>\n          <ion-input placeholder=\"Please enter name of chemical\" formControlName=\"chemical_name\"></ion-input>\n\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Insert Photo </ion-label>\n            <ion-checkbox slot=\"start\" [value]=\"insertPhotoCheckBox\" formControlName=\"insertPhotoCheckBox\"\n              (ionChange)=\"onInsertImageSelect($event)\">\n            </ion-checkbox>\n          </ion-item>\n\n\n          <div *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\">\n            <div *ngIf=\"platformCheck==='cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(3)\">Upload Image</ion-button>\n              <img src=\"\" *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\"\n                class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"chemical_photo\" multiple (change)=\"onChemicalImageSelect($event)\">\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"chemicalImages.length > 0\">\n                <ion-slide *ngFor=\"let chemicalImage of chemicalImages\">\n                  <img [src]=\"chemicalImage\" tappable (click)=\"onOpenPreview(chemicalImage)\">\n                </ion-slide>\n              </ion-slides>\n            </div>\n          </div>\n\n          <p class=\"question\">Approximate quantity of chemical spilled :</p>\n          <ion-input placeholder=\"Enter here\" type=\"tel\" formControlName=\"approximate_quantity\">\n          </ion-input>\n        </div>\n\n        <ion-radio-group formControlName='emergency_spill_kit_used'>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the emergency spill kit used ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"enviornmentForm.value['emergency_spill_kit_used'] == 'Yes'\">\n          <p class=\" question\">\n            What was used out of the chemical spill kit ? :\n          </p>\n          <ion-input placeholder=\"Please enter what was used out of the chemical spill kit ?\"\n            formControlName=\"out_of_split_kit\"></ion-input>\n        </div>\n      </div>\n\n      <!-------------------------------------------------Environmental------------------------------------------------>\n\n      <!-------------------------------------------------Injury------------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Injury'\" class=\"activeBackground\"\n        [formGroup]=\"injuryForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <p class=\"question\">Number of Injured Person's :</p>\n        <ion-select placeholder=\"Please select Injured Person\" interface=\"action-sheet\" formControlName=\"injury_persons\"\n          (ionChange)=\"onAddMultiplePersonDetails($event)\">\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n          <ion-select-option value=\"3\">3</ion-select-option>\n          <ion-select-option value=\"4\">4</ion-select-option>\n        </ion-select>\n\n        <div formArrayName=\"person_details\" *ngFor=\"let personDetails of injuryPersonDetails.controls; let j = index \">\n          <ion-card>\n            <p class=\"questionHead\">Person {{(j+1)}} Details</p>\n\n            <div [formGroupName]=\"j\">\n              <p class=\"question\">Injured Person Name :</p>\n              <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenInjuryModal('Injured person', j)\">\n                <ion-input placeholder=\"Please select Injured Person Name\" formControlName=\"injured_person_option\">\n                </ion-input>\n                <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                  <ion-button class=\"ion-no-padding ion-no-margin\">\n                    <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-item>\n\n              <!-- <ion-select placeholder=\"Please select Injured Person Name\" interface=\"action-sheet\"\n                formControlName=\"injured_person_option\">\n                <ion-select-option value=\"{{witnessName?.employee_id}}\" *ngFor=\"let witnessName of witnessList\">\n                  {{witnessName?.full_name}}\n                </ion-select-option>\n              </ion-select> -->\n\n              <div *ngIf='injuryForm.value[\"person_details\"][j].injured_person_option==\"Other\"'\n                formGroupName='injured_person_option_other_details'>\n\n                <p class=\"other_witness\"> Other Person Details </p>\n\n                <p class=\"question\">\n                  Name :\n                </p>\n                <ion-input placeholder=\"Please enter other person name\"\n                  formControlName=\"injured_person_option_other_name\">\n                </ion-input>\n\n                <p class=\"question\">\n                  Mobile No :\n                </p>\n                <ion-input type=\"tel\" placeholder=\"Please enter other person mobile no \"\n                  formControlName=\"injured_person_option_other_mobile_no\">\n                </ion-input>\n\n                <p class=\"question\">\n                  Email id :\n                </p>\n                <ion-input type=\"email\" placeholder=\"Please enter other person email\"\n                  formControlName=\"injured_person_option_other_email\">\n                </ion-input>\n\n              </div>\n\n              <!-- <div *ngIf='injuryForm.value[\"person_details\"][j].injured_person_option==\"Other\"'>\n                <p class=\"question\">Full Name of Injured Person :</p>\n                <ion-input placeholder=\"Please enter full name of injured person\"\n                  formControlName=\"injured_person_option_value\">\n                </ion-input>\n              </div> -->\n\n\n              <p class=\"question\">Gender :</p>\n              <ion-select placeholder=\"Please select gender\" interface=\"action-sheet\" formControlName=\"gender\">\n                <ion-select-option value=\"Male\">Male</ion-select-option>\n                <ion-select-option value=\"Female\">Female</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n              </ion-select>\n\n              <p class=\"question\">Date of Birth :</p>\n              <ion-datetime placeholder=\"Please select date of birth\" displayFormat=\"DD/MM/YYYY\"\n                formControlName=\"date_of_birth\">\n              </ion-datetime>\n\n              <ion-radio-group formControlName=\"normal_duties\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Return to Normal Duties :</ion-label>\n                </ion-item>\n                <ion-row class=\"ion-no-padding\">\n                  <ion-col size=\"6\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].normal_duties == 'No'\">\n                <p class=\"question\">Explanation :</p>\n                <ion-input placeholder=\"Please enter explanation\" formControlName=\"normal_duties_explanation\">\n                </ion-input>\n              </div>\n\n              <div>\n                <ion-radio-group formControlName=\"alternate_duties\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Return to Alternate Duties :</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Yes</ion-label>\n                        <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>No</ion-label>\n                        <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-radio-group>\n              </div>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].alternate_duties ==='No'\">\n                <p class=\"question\">Explanation :</p>\n                <ion-input placeholder=\"Please enter explanation\" formControlName=\"duties_explanation\"></ion-input>\n              </div>\n\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Initial Injury / IIIness Classification :</ion-label>\n              </ion-item>\n\n              <ion-radio-group formControlName=\"initital_injury\">\n                <ion-row>\n                  <ion-col size=\"6\" *ngFor=\"let injuryKeys of injuryList;\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>{{injuryKeys.val}}</ion-label>\n                      <ion-radio slot=\"start\" value=\"{{injuryKeys.val}}\">\n                      </ion-radio>\n                    </ion-item>\n                    <ion-text class=\"mandatoryField\"\n                      *ngIf=\"injuryKeys.val  == injuryForm.value['person_details'][j].initital_injury\">\n                      {{injuryKeys.desc}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <!-- <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Male'\" class=\"img-responsive\"\n                src=\"{{imagePath+'Male_Silhouette.png'}}\" usemap=\"#map_example\">\n              <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Female'\" class=\"img-responsive\"\n                src=\"{{imagePath+'Female_Silhouette.png'}}\" usemap=\"#map_example\"> -->\n              <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Male'\"\n                src=\"{{imagePath+'Male_Silhouette.png'}}\" usemap=\"#map_example\" (click)=\"onImageClick($event)\">\n              <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Female'\"\n                src=\"{{imagePath+'Female_Silhouette.png'}}\" usemap=\"#map_example\" (click)=\"onImageClick($event)\">\n\n\n              <!-- <div id=\"image_map\">\n\n             <map name=\"map_example\"> <area href=\"https://facebook.com\" alt=\"Facebook\" target=\"_blank\" shape=poly\n                 coords=\"30,100, 140,50, 290,220, 180,280\">\n\n               <area href=\"https://en.wikipedia.org/wiki/Social_media\" target=\"_blank\"\n                 alt=\"Wikipedia Social Media Article\" shape=poly coords=\"190,75, 200,60, 495,60, 495,165, 275,165\">\n\n             </map>\n\n             <img src=\"../../wp-content/uploads/image_map_example_shapes.png\" alt=\"image map example\" width=500\n               height=332 usemap=\"#map_example\">\n\n           </div> -->\n\n              <p class=\"question\">Part of body injured :</p>\n              <ion-select multiple=\"true\" cancelText=\"Cancel\" okText=\"Ok\" formControlName=\"part_of_body_injured_occured\"\n                placeholder=\"Select Part of body injured\">\n                <ion-select-option value=\"{{bodyPartsVal.name}}\" *ngFor=\"let bodyPartsVal of bodyPartList\">\n                  {{bodyPartsVal.name}}</ion-select-option>\n              </ion-select>\n\n\n              <div>\n                <ion-radio-group formControlName=\"was_immediate_treatment\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Was immediate treatment given ? :</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Yes</ion-label>\n                        <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>No</ion-label>\n                        <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-radio-group>\n              </div>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].was_immediate_treatment == 'Yes'\">\n                <p class=\"question\">What treatment was given ? :</p>\n                <ion-input placeholder=\"Please enter what treatment was given \"\n                  formControlName=\"immediate_treatment_given_explanation\">\n                </ion-input>\n\n                <p class=\"question\">Who administered treatment ? : </p>\n\n                <p class=\"question\">Person Name :</p>\n                <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenInjuryModal('Injured administered', j)\">\n                  <ion-input placeholder=\"Please select person\" formControlName=\"immediate_treatment_person_name\">\n                  </ion-input>\n                  <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                    <ion-button class=\"ion-no-padding ion-no-margin\">\n                      <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                </ion-item>\n                <!-- <ion-select placeholder=\"Select Person Name\" interface=\"action-sheet\"\n                  formControlName=\"immediate_treatment_person_name\" (ionChange)=\"onAdministeredPerson($event, j)\">\n                  <ion-select-option value=\"{{employeeListValue?.employee_id}}\"\n                    *ngFor=\"let employeeListValue of employeeList\">\n                    {{employeeListValue?.full_name}}</ion-select-option>\n                </ion-select> -->\n                <!-- <ion-input placeholder=\"Please enter Person Name\" formControlName=\"immediate_treatment_person_name\">\n                </ion-input> -->\n\n                <p class=\"question\">Contact Details :</p>\n                <ion-input placeholder=\"Please enter mobile no or email id\" type=\"tel\"\n                  formControlName=\"immediate_treatment_person_number\">\n                </ion-input>\n              </div>\n            </div>\n          </ion-card>\n        </div>\n      </div>\n\n      <!-------------------------------------------------Injury------------------------------------------------------->\n\n\n      <!-------------------------------------------------Report------------------------------------------------------->\n      <div *ngIf=\" selectedTabItem == classification && classification =='Report'\" class=\"activeBackground\"\n        [formGroup]=\"reportForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          What could have done differently ? :\n        </p>\n        <ion-input placeholder=\"Please enter what could have done differently\" formControlName='report'></ion-input>\n      </div>\n      <!-------------------------------------------------Report------------------------------------------------------->\n\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Reputation'\" class=\"activeBackground\"\n        [formGroup]=\"reputationDesForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label>Was the reputation damages an individual or Company ? :\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let reputationCheckBoxItem of reputationCheckBox\" lines=\"none\" class=\"ion-no-padding ra\">\n          <ion-label>{{reputationCheckBoxItem.val}}</ion-label>\n          <ion-checkbox slot=\"end\" (ionChange)=\"onReputationDamagesCheckBox($event)\"\n            [value]=\"reputationCheckBoxItem.val\" [checked]=\"reputationCheckBoxItem.isChecked\">\n          </ion-checkbox>\n        </ion-item>\n\n        <div\n          *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Individual' || reputationDesForm.value['reputation_option'][1] == 'Individual'\">\n          <p class=\"question\">\n            How has the Individual's reputation been damaged ? :\n          </p>\n          <ion-input placeholder=\"Please enter how has the individual's reputation been damaged\"\n            formControlName=\"individual_damage_value\"></ion-input>\n        </div>\n        <div\n          *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Company' || reputationDesForm.value['reputation_option'][1] =='Company'\">\n          <p class=\"question\">\n            How has the Company's reputation been damaged ? :\n          </p>\n          <ion-input placeholder=\"Please enter how has the compnay's reputation been damaged\"\n            formControlName=\"company_damage_value\"></ion-input>\n        </div>\n\n        <ion-radio-group formControlName=\"reputation_negative_effect\" (ionChange)=\"onRepoNegativeEffect($event)\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the negative effect internal or external ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Internal</ion-label>\n                <ion-radio slot=\"start\" value=\"Internal\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>External</ion-label>\n                <ion-radio slot=\"start\" value=\"External\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Both</ion-label>\n                <ion-radio slot=\"start\" value=\"Both\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div\n          *ngIf=\"(reputationDesForm.value['reputation_negative_effect'] == 'Internal') || (reputationDesForm.value['reputation_negative_effect'] == 'Both') \">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>What Department was effected ? :</ion-label>\n          </ion-item>\n\n          <ion-item *ngFor=\"let departmentEffectVal of departmentEffect\" lines=\"none\" class=\"ra ion-no-padding\">\n            <ion-label>{{departmentEffectVal.val}}</ion-label>\n            <ion-checkbox slot=\"end\" (ionChange)=\"onDepartmentEffectCheckBox($event)\" [value]=\"departmentEffectVal.val\"\n              [checked]=\"departmentEffectVal.isChecked\">\n            </ion-checkbox>\n          </ion-item>\n        </div>\n\n        <div\n          *ngIf=\"(reputationDesForm.value['reputation_negative_effect'] == 'External') || (reputationDesForm.value['reputation_negative_effect'] == 'Both') \">\n          <p class=\"question\">\n            Who is the external party ? :\n          </p>\n          <ion-input placeholder=\"Please enter who is the external party\" formControlName=\"external_party\"></ion-input>\n        </div>\n\n        <p class=\"question\">Name of witness :</p>\n        <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenReputationModal()\">\n          <ion-input placeholder=\"Please select witness\" formControlName=\"name_of_witness\">\n          </ion-input>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\">\n              <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <!-- <ion-select placeholder=\"Select Witness\" interface=\"action-sheet\" formControlName=\"name_of_witness\"\n          (ionChange)=\"onWitnessChange($event)\">\n          <ion-select-option value=\"{{witnesskeys?.employee_id}}\" *ngFor=\"let witnesskeys of witnessList\">\n            {{witnesskeys?.full_name}}</ion-select-option>\n        </ion-select> -->\n\n        <div *ngIf=\"reputationDesForm.value['name_of_witness'] == 'Other'\" formGroupName='other_witness_details'>\n          <p class=\"other_witness\"> Other Witness Details </p>\n          <p class=\"question\">\n            Name :\n          </p>\n          <ion-input placeholder=\"Please enter Other Witness Name\" formControlName=\"other_witness_name\"></ion-input>\n          <p class=\"question\">\n            Mobile No :\n          </p>\n          <ion-input type=\"tel\" placeholder=\"Please enter Other Witness Mobile No \"\n            formControlName=\"other_witness_mobile_no\">\n          </ion-input>\n          <p class=\"question\">\n            Email id :\n          </p>\n          <ion-input type=\"email\" placeholder=\"Please enter Other Witness Email\" formControlName=\"other_witness_email\">\n          </ion-input>\n        </div>\n        <p class=\"question\">\n          What is the possible outcome of this incident ? :\n        </p>\n        <ion-input placeholder=\"Please enter  what is the possible outcome of this incident\"\n          formControlName=\"possible_outcome_incident\"></ion-input>\n      </div>\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n\n      <!-------------------------------------------------Security----------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Security'\" class=\"activeBackground\"\n        [formGroup]=\"securityForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <ion-radio-group formControlName=\"security_option\" (ionChange)=\"onSecurityOption($event)\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>IT</ion-label>\n                <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Theft</ion-label>\n                <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Other</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"securityForm.value['security_option']=='IT'\">\n\n          <ion-item class=\"ra ion-no-padding\" lines=\"none\">\n            <ion-label>What kind of IT Security Incident ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let itSecurityItem of itSecurityList\">\n              <ion-item lines=\"none\" class=\"ra ion-no-padding\">\n                <ion-label>{{itSecurityItem.val}}</ion-label>\n                <ion-checkbox slot=\"start\" [value]=\"itSecurityItem.val\" [checked]=\"itSecurityItem.isChecked\"\n                  (ionChange)=\"onSecurityItOption($event)\"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </div>\n        <div *ngIf=\"securityForm.value['security_option']=='Theft'\">\n          <p class=\"question\">\n            What has been stolen ? :\n          </p>\n          <ion-input placeholder=\"Please enter what has been stolen\" formControlName=\"what_has_been_stolen_item\">\n          </ion-input>\n          <p class=\"question\">\n            Approximate value of stolen item ? :\n          </p>\n          <ion-input placeholder=\"Please enter approximate value of stolen item\"\n            formControlName=\"approximate_value_of_stolen\"></ion-input>\n        </div>\n\n        <div *ngIf=\"securityForm.value['security_option']=='Other'\">\n          <p class=\"question\">\n            What is the Security incident ? :\n          </p>\n          <ion-input placeholder=\"Please enter what is the Security incident\"\n            formControlName=\"what_is_the_specific_securities_incident\"></ion-input>\n        </div>\n      </div>\n      <!-------------------------------------------------Security----------------------------------------------------->\n\n    </div>\n\n    <!-------------------------------------------------------- Classification Sub Tab ------------------------------------------------------->\n  </div>\n  <div class=\"container\">\n    <ion-button (click)=\"onSubmit('submit')\" class=\"btn\">Update</ion-button>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_incident_incident-form-edit_incident-form-edit_module_ts-es5.js.map