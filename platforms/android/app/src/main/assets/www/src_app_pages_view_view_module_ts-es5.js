(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_view_view_module_ts"], {
    /***/
    92047:
    /*!***************************************************!*\
      !*** ./src/app/pages/view/view-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPageRoutingModule": function ViewPageRoutingModule() {
          return (
            /* binding */
            _ViewPageRoutingModule
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


      var _view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view.page */
      29014);

      var routes = [{
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
      }];

      var _ViewPageRoutingModule = function ViewPageRoutingModule() {
        _classCallCheck(this, ViewPageRoutingModule);
      };

      _ViewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ViewPageRoutingModule);
      /***/
    },

    /***/
    89760:
    /*!*******************************************!*\
      !*** ./src/app/pages/view/view.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPageModule": function ViewPageModule() {
          return (
            /* binding */
            _ViewPageModule
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


      var _view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view-routing.module */
      92047);
      /* harmony import */


      var _view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view.page */
      29014);

      var _ViewPageModule = function ViewPageModule() {
        _classCallCheck(this, ViewPageModule);
      };

      _ViewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPageRoutingModule],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_1__.ViewPage]
      })], _ViewPageModule);
      /***/
    },

    /***/
    29014:
    /*!*****************************************!*\
      !*** ./src/app/pages/view/view.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPage": function ViewPage() {
          return (
            /* binding */
            _ViewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./view.page.html */
      17616);
      /* harmony import */


      var _view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view.page.scss */
      17466);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/managers/managers.page */
      58127);
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      67871);
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/global.service */
      97465);

      var _ViewPage = /*#__PURE__*/function () {
        function ViewPage(nav, modal, camera, actionSheetController, global, activatedRoute) {
          _classCallCheck(this, ViewPage);

          this.nav = nav;
          this.modal = modal;
          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.global = global;
          this.activatedRoute = activatedRoute;
          this.data = ['Incident', 'Classification', 'Photography', 'Incident Description', 'Injury', 'Environmental', 'Reputation', 'Security', 'Asset', 'Report'];
          this.itsecurityCheckbox = [{
            val: 'Intrusion',
            isChecked: false
          }, {
            val: 'Ransom ware',
            isChecked: false
          }, {
            val: 'Privacy breach',
            isChecked: false
          }, {
            val: 'Intellectual',
            isChecked: false
          }];
          this.classificationChekBox = [{
            val: 'Injury',
            isChecked: false
          }, {
            val: 'Environmental',
            isChecked: false
          }, {
            val: 'Reputation',
            isChecked: false
          }, {
            val: 'Security',
            isChecked: false
          }, {
            val: 'Asset',
            isChecked: false
          }, {
            val: 'Report only',
            isChecked: false
          }];
          this.injuryCheckBox = [{
            val: 'FAI',
            isChecked: false
          }, {
            val: 'MTI',
            isChecked: false
          }, {
            val: 'ADI',
            isChecked: false
          }, {
            val: 'LTL',
            isChecked: false
          }, {
            val: 'Head',
            isChecked: false
          }, {
            val: 'Limbs',
            isChecked: false
          }, {
            val: 'Torso',
            isChecked: false
          }];
          this.reputationCheckBox = [{
            val: 'Individual',
            isChecked: false
          }, {
            val: 'Company',
            isChecked: false
          }];
          this.person_Array = [];
          this.image3Uri = '';
          this.imagePath = '';
          this.imagePath2 = '';
          this.imagePath3 = '';
          this.chemicalSplit = '';
          this.imagePath4 = '';
          this.imagePath5 = '';
          this.incedent = '';
          this.location = '';
          this.insertPhotoisChecked = false;
          this.nameOfManager = 'Name of Manager';
          this.alcoholTest = '';
          this.formCount = '1';
          this.injuredPerson = '';
          this.todayDate = new Date();
          this.returnToNormalDuties = '';
          this.alternativeDuties = '';
          this.itemsArray = [1];
          this.emergencySpill = '';
          this.possibleConsequence = '';
          this.addLocation = '';
          this.descriptionIncident = '';
          this.immediateAction = '';
          this.injuredPersons = '';
          this.explanationAlterative = '';
          this.environmentActionTaken = '';
          this.nameOfChemical = '';
          this.approximateQtyofChemical = '';
          this.individualReputationDamaged = '';
          this.companyReputatonDamaged = '';
          this.nameOfAnyWitness = '';
          this.contactOfAnyWitness = '';
          this.possibleOutcomeOfIncident = '';
          this.assetDescription = '';
          this.assetsNumbers = '';
          this.extentOfDamage = '';
          this.doneDifferently = '';
          this.whoWitnessedNearThis = '';
          this.shiftType = '';
          this.superVisor = '';
          this.locationSelection = '';
          this.checmicalDetails = [{
            approximate_quantity: this.approximateQtyofChemical,
            chemical_name: this.nameOfChemical,
            chemical_photo: this.image3Uri
          }];
          this.personDetails = [];
          this.person_one_details = {
            alternate_duties: '',
            date_of_birth: '',
            duties_explanation: '',
            initital_injury: [],
            injured_person_option: '',
            injured_person_option_value: '',
            normal_duties: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: null,
            explanation: null,
            other_name: null,
            injurryCheckBox: [{
              val: 'FAI',
              isChecked: false
            }, {
              val: 'MTI',
              isChecked: false
            }, {
              val: 'ADI',
              isChecked: false
            }, {
              val: 'LTL',
              isChecked: false
            }, {
              val: 'Head',
              isChecked: false
            }, {
              val: 'Limbs',
              isChecked: false
            }, {
              val: 'Torso',
              isChecked: false
            }]
          };
          this.person_two_details = {
            alternate_duties: '',
            date_of_birth: '',
            duties_explanation: '',
            initital_injury: [],
            injured_person_option: '',
            injured_person_option_value: '',
            normal_duties: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: null,
            explanation: null,
            other_name: null,
            injurryCheckBox: [{
              val: 'FAI',
              isChecked: false
            }, {
              val: 'MTI',
              isChecked: false
            }, {
              val: 'ADI',
              isChecked: false
            }, {
              val: 'LTL',
              isChecked: false
            }, {
              val: 'Head',
              isChecked: false
            }, {
              val: 'Limbs',
              isChecked: false
            }, {
              val: 'Torso',
              isChecked: false
            }]
          };
          this.person_three_details = {
            alternate_duties: '',
            date_of_birth: '',
            duties_explanation: '',
            initital_injury: [],
            injured_person_option: '',
            injured_person_option_value: '',
            normal_duties: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: null,
            explanation: null,
            other_name: null,
            injurryCheckBox: [{
              val: 'FAI',
              isChecked: false
            }, {
              val: 'MTI',
              isChecked: false
            }, {
              val: 'ADI',
              isChecked: false
            }, {
              val: 'LTL',
              isChecked: false
            }, {
              val: 'Head',
              isChecked: false
            }, {
              val: 'Limbs',
              isChecked: false
            }, {
              val: 'Torso',
              isChecked: false
            }]
          };
          this.person_four_details = {
            alternate_duties: '',
            date_of_birth: '',
            duties_explanation: '',
            initital_injury: [],
            injured_person_option: '',
            injured_person_option_value: '',
            normal_duties: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: null,
            explanation: null,
            other_name: null,
            injurryCheckBox: [{
              val: 'FAI',
              isChecked: false
            }, {
              val: 'MTI',
              isChecked: false
            }, {
              val: 'ADI',
              isChecked: false
            }, {
              val: 'LTL',
              isChecked: false
            }, {
              val: 'Head',
              isChecked: false
            }, {
              val: 'Limbs',
              isChecked: false
            }, {
              val: 'Torso',
              isChecked: false
            }]
          };
          this.o1 = [];
          this.o2 = [];
          this.o3 = [];
          this.o4 = [];
          this.o5 = [];
          this.croppedImagepath = '';
          this.isLoading = false;
          this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
          };
        }

        _createClass(ViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            // let data = JSON.parse(localStorage.getItem('singleView'));
            this.global.presentLoading();
            var data = "";
            this.activatedRoute.params.subscribe(function (params) {
              // console.log(params['incident_id']);
              _this.global.getData('api/add_form/getIncidentFormByID/' + params['form_id']).subscribe(function (result) {
                data = result['data'][0];

                if (data != "") {
                  _this.what_has_been_stolen_item = data['what_has_been_stolen_item'];
                  _this.approximate_value_of_stolen = data['approximate_value_of_stolen'];
                  _this.dateReported = data['date_reported'];
                  _this.dateOfIncident = data['date_of_incident'];
                  _this.timeOfIncident = data['time_of_incident'];
                  _this.timeReported = data['time_reported'];
                  _this.what_is_the_specific_securities_incident = data['what_is_the_specific_securities_incident'];
                  _this.drugTest = data['drug_test_completed'];
                  _this.timeReported = data['time_reported'];
                  _this.id = data['id'];
                  _this.incedent = data['incident_value'];
                  _this.whoWitnessedNearThis = data['incident_near_miss'];
                  _this.possibleConsequence = data['incident_near_miss_other'];
                  var classification_value = data['classification_value'].split(",");
                  _this.classificationChekBox = classification_value;
                  _this.location = data['classification_location_option'];

                  if (_this.location == 'Add Location') {
                    _this.addLocation = data['classification_location_value'];
                  }

                  if (_this.location == 'Choose Location') {
                    _this.locationSelection = data['classification_location_value'];
                  }

                  _this.shiftType = data['classification_shift_type'];
                  _this.superVisor = data['classification_supervisor'];
                  _this.nameOfManager = data['classification_manager'];
                  _this.imagePath = data['photography_image'];
                  _this.descriptionIncident = data['incident_description'];
                  _this.immediateAction = data['incident_description_action'];

                  if (data['incident_description_photo'] !== '') {
                    if (data['incident_description_photo'] !== "undefined") {
                      _this.insertPhotoisChecked = true;
                      _this.imagePath2 = data['incident_description_photo'];
                    }
                  }

                  _this.alcoholTest = data['incident_description_alcohol_test'];
                  _this.formCount = data['injury_persons'];

                  if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 1) {
                    _this.itemsArray = [1];
                  }

                  if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 2) {
                    _this.itemsArray = [1, 2];
                  }

                  if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 3) {
                    _this.itemsArray = [1, 2, 3];
                  }

                  if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 4) {
                    _this.itemsArray = [1, 2, 3, 4];
                  }

                  if (data && data['person_details'] && data['person_details'][0] && data['person_details'][0]['alternate_duties']) {
                    _this.person_one_details = {
                      alternate_duties: data['person_details'][0]['alternate_duties'],
                      date_of_birth: data['person_details'][0]['date_of_birth'],
                      duties_explanation: data['person_details'][0]['duties_explanation'],
                      injured_person_option: data['person_details'][0]['injured_person_option'],
                      injured_person_option_value: data['person_details'][0]['injured_person_option_value'],
                      normal_duties: data['person_details'][0]['normal_duties'],
                      fullNameOfInjuredPerson: data['person_details'][0]['injured_person_option'],
                      gender: data['person_details'][0]['gender'],
                      dateOfBirth: data['person_details'][0]['date_of_birth'],
                      returnToNormalDuties: data['person_details'][0]['normal_duties'],
                      returnToAlernateDuties: data['person_details'][0]['alternate_duties'],
                      explanation: data['person_details'][0]['duties_explanation'],
                      other_name: data['person_details'][0]['injured_person_option_value'],
                      //aded
                      part_of_body_injured_occured: data['person_details'][0]['part_of_body_injured_occured'],
                      was_immediate_treatment: data['person_details'][0]['was_immediate_treatment'],
                      immediate_treatment_given_explanation: data['person_details'][0]['immediate_treatment_given_explanation'],
                      immediate_treatment_person_name: data['person_details'][0]['immediate_treatment_person_name'],
                      immediate_treatment_person_number: data['person_details'][0]['immediate_treatment_person_number'],
                      initital_injury: [],
                      injury_value: [],
                      injurryCheckBox: [{
                        val: 'FAI',
                        isChecked: false
                      }, {
                        val: 'MTI',
                        isChecked: false
                      }, {
                        val: 'ADI',
                        isChecked: false
                      }, {
                        val: 'LTL',
                        isChecked: false
                      }, {
                        val: 'Head',
                        isChecked: false
                      }, {
                        val: 'Limbs',
                        isChecked: false
                      }, {
                        val: 'Torso',
                        isChecked: false
                      }]
                    };
                    var one = data['person_details'][0]['initital_injury'].split(",");

                    _this.person_one_details.injurryCheckBox.forEach(function (el) {
                      one.forEach(function (ele) {
                        if (el.val == ele) {
                          el.isChecked = true;

                          _this.o1.push(el);
                        }
                      });
                    });
                  }

                  if (data && data['person_details'] && data['person_details'][1] && data['person_details'][1]['alternate_duties']) {
                    _this.person_two_details = {
                      alternate_duties: data['person_details'][1]['alternate_duties'],
                      date_of_birth: data['person_details'][1]['date_of_birth'],
                      duties_explanation: data['person_details'][1]['duties_explanation'],
                      injured_person_option: data['person_details'][1]['injured_person_option'],
                      injured_person_option_value: data['person_details'][1]['injured_person_option_value'],
                      normal_duties: data['person_details'][1]['normal_duties'],
                      fullNameOfInjuredPerson: data['person_details'][1]['injured_person_option'],
                      gender: data['person_details'][1]['gender'],
                      dateOfBirth: data['person_details'][1]['date_of_birth'],
                      returnToNormalDuties: data['person_details'][1]['normal_duties'],
                      returnToAlernateDuties: data['person_details'][1]['alternate_duties'],
                      explanation: data['person_details'][1]['duties_explanation'],
                      other_name: data['person_details'][1]['injured_person_option_value'],
                      part_of_body_injured_occured: data['person_details'][1]['part_of_body_injured_occured'],
                      was_immediate_treatment: data['person_details'][1]['was_immediate_treatment'],
                      immediate_treatment_given_explanation: data['person_details'][1]['immediate_treatment_given_explanation'],
                      immediate_treatment_person_name: data['person_details'][1]['immediate_treatment_person_name'],
                      immediate_treatment_person_number: data['person_details'][1]['immediate_treatment_person_number'],
                      initital_injury: [],
                      injury_value: [],
                      injurryCheckBox: [{
                        val: 'FAI',
                        isChecked: false
                      }, {
                        val: 'MTI',
                        isChecked: false
                      }, {
                        val: 'ADI',
                        isChecked: false
                      }, {
                        val: 'LTL',
                        isChecked: false
                      }, {
                        val: 'Head',
                        isChecked: false
                      }, {
                        val: 'Limbs',
                        isChecked: false
                      }, {
                        val: 'Torso',
                        isChecked: false
                      }]
                    };
                    var two = data['person_details'][1]['initital_injury'].split(",");

                    _this.person_one_details.injurryCheckBox.forEach(function (el) {
                      two.forEach(function (ele) {
                        if (el.val == ele) {
                          el.isChecked = true;

                          _this.o2.push(el);
                        }
                      });
                    });
                  }

                  if (data && data['person_details'] && data['person_details'][2] && data['person_details'][2]['alternate_duties']) {
                    _this.person_three_details = {
                      alternate_duties: data['person_details'][2]['alternate_duties'],
                      date_of_birth: data['person_details'][2]['date_of_birth'],
                      duties_explanation: data['person_details'][2]['duties_explanation'],
                      injured_person_option: data['person_details'][2]['injured_person_option'],
                      injured_person_option_value: data['person_details'][2]['altinjured_person_option_valueernate_duties'],
                      normal_duties: data['person_details'][2]['normal_duties'],
                      fullNameOfInjuredPerson: data['person_details'][2]['injured_person_option'],
                      gender: data['person_details'][2]['gender'],
                      dateOfBirth: data['person_details'][2]['date_of_birth'],
                      returnToNormalDuties: data['person_details'][2]['normal_duties'],
                      returnToAlernateDuties: data['person_details'][2]['alternate_duties'],
                      explanation: data['person_details'][2]['duties_explanation'],
                      other_name: data['person_details'][2]['injured_person_option_value'],
                      part_of_body_injured_occured: data['person_details'][2]['part_of_body_injured_occured'],
                      was_immediate_treatment: data['person_details'][2]['was_immediate_treatment'],
                      immediate_treatment_given_explanation: data['person_details'][2]['immediate_treatment_given_explanation'],
                      immediate_treatment_person_name: data['person_details'][2]['immediate_treatment_person_name'],
                      immediate_treatment_person_number: data['person_details'][2]['immediate_treatment_person_number'],
                      initital_injury: [],
                      injury_value: [],
                      injurryCheckBox: [{
                        val: 'FAI',
                        isChecked: false
                      }, {
                        val: 'MTI',
                        isChecked: false
                      }, {
                        val: 'ADI',
                        isChecked: false
                      }, {
                        val: 'LTL',
                        isChecked: false
                      }, {
                        val: 'Head',
                        isChecked: false
                      }, {
                        val: 'Limbs',
                        isChecked: false
                      }, {
                        val: 'Torso',
                        isChecked: false
                      }]
                    };
                    var three = data['person_details'][2]['initital_injury'].split(",");

                    _this.person_three_details.injurryCheckBox.forEach(function (el) {
                      three.forEach(function (ele) {
                        if (el.val == ele) {
                          el.isChecked = true;

                          _this.o3.push(el);
                        }
                      });
                    });
                  }

                  if (data && data['person_details'] && data['person_details'][3] && data['person_details'][3]['alternate_duties']) {
                    _this.person_four_details = {
                      alternate_duties: data['person_details'][3]['alternate_duties'],
                      date_of_birth: data['person_details'][3]['date_of_birth'],
                      duties_explanation: data['person_details'][3]['duties_explanation'],
                      injured_person_option: data['person_details'][3]['injured_person_option'],
                      injured_person_option_value: data['person_details'][3]['injured_person_option_value'],
                      normal_duties: data['person_details'][3]['normal_duties'],
                      fullNameOfInjuredPerson: data['person_details'][3]['injured_person_option'],
                      gender: data['person_details'][3]['gender'],
                      dateOfBirth: data['person_details'][3]['date_of_birth'],
                      returnToNormalDuties: data['person_details'][3]['normal_duties'],
                      returnToAlernateDuties: data['person_details'][3]['alternate_duties'],
                      explanation: data['person_details'][3]['duties_explanation'],
                      other_name: data['person_details'][3]['injured_person_option_value'],
                      part_of_body_injured_occured: data['person_details'][3]['part_of_body_injured_occured'],
                      was_immediate_treatment: data['person_details'][3]['was_immediate_treatment'],
                      immediate_treatment_given_explanation: data['person_details'][3]['immediate_treatment_given_explanation'],
                      immediate_treatment_person_name: data['person_details'][3]['immediate_treatment_person_name'],
                      immediate_treatment_person_number: data['person_details'][3]['immediate_treatment_person_number'],
                      initital_injury: [],
                      injury_value: [],
                      injurryCheckBox: [{
                        val: 'FAI',
                        isChecked: false
                      }, {
                        val: 'MTI',
                        isChecked: false
                      }, {
                        val: 'ADI',
                        isChecked: false
                      }, {
                        val: 'LTL',
                        isChecked: false
                      }, {
                        val: 'Head',
                        isChecked: false
                      }, {
                        val: 'Limbs',
                        isChecked: false
                      }, {
                        val: 'Torso',
                        isChecked: false
                      }]
                    };
                    var four = data['person_details'][3]['initital_injury'].split(",");

                    _this.person_four_details.injurryCheckBox.forEach(function (el) {
                      four.forEach(function (ele) {
                        if (el.val == ele) {
                          el.isChecked = true;

                          _this.o4.push(el);
                        }
                      });
                    });
                  }

                  _this.environmentActionTaken = data['environmental_description'];
                  _this.chemicalSplit = data['was_a_chemical_split'];
                  _this.nameOfChemical = data['chemical_details.chemical_name'];
                  _this.approximateQtyofChemical = data['chemical_details.approximate_quantity'];

                  if (data && data['chemical_details'] && data['chemical_details'].chemical_photo !== '') {
                    _this.insertPhotoisChecked = true;
                    _this.imagePath3 = data['chemical_details'].chemical_photo;
                  }

                  _this.emergencySpill = data['emergency_spill_kit_used'];
                  var reputationValue = data['reputation_option'].split(',');

                  _this.reputationCheckBox.forEach(function (res) {
                    reputationValue.forEach(function (eleme) {
                      if (res.val === eleme) {
                        res.isChecked = true;

                        if (res.val == 'Individual') {
                          _this.individualChecked = true;
                        }

                        if (res.val == 'Company') {
                          _this.companyChecked = true;
                        }
                      }
                    });
                  });

                  if (_this.formCount == "1") {
                    _this.person_Array.push(_this.person_one_details);
                  }

                  if (_this.formCount == "2") {
                    _this.person_Array.push(_this.person_one_details);

                    _this.person_Array.push(_this.person_two_details);
                  }

                  if (_this.formCount == "3") {
                    _this.person_Array.push(_this.person_one_details);

                    _this.person_Array.push(_this.person_two_details);

                    _this.person_Array.push(_this.person_three_details);
                  }

                  if (_this.formCount == "4") {
                    _this.person_Array.push(_this.person_one_details);

                    _this.person_Array.push(_this.person_two_details);

                    _this.person_Array.push(_this.person_three_details);

                    _this.person_Array.push(_this.person_four_details);
                  }

                  if (_this.individualChecked) {
                    _this.individualReputationDamaged = data['individual_damage_value'];
                  }

                  if (_this.companyChecked) {
                    _this.companyReputatonDamaged = data['company_damage_value'];
                  }

                  _this.nagativeEffetct = data['reputation_negative_effect'];
                  _this.nameOfAnyWitness = data['name_of_witness'];
                  _this.contactOfAnyWitness = data['contact_of_witness'];
                  _this.possibleOutcomeOfIncident = data['possible_outcome_incident'];

                  if (data['reputation_damage_image'] !== '') {
                    _this.imagePath4 = data['reputation_damage_image'];
                  }

                  _this.securityRadio = data['security_option'];

                  if (_this.securityRadio == 'IT') {
                    var t = data['it_option_value'].split(",");

                    _this.itsecurityCheckbox.forEach(function (itsecurity) {
                      t.forEach(function (ts) {
                        if (itsecurity.val == ts) {
                          itsecurity.isChecked = true;
                        }
                      });
                    });
                  }

                  _this.assetDescription = data['asset_description'];
                  _this.assetNumber = data['asset_has_number'];
                  _this.assetsNumbers = data['asset_number'];
                  _this.extentOfDamage = data['extent_of_damage'];

                  if (data['extent_damage_image'] !== '') {
                    _this.imagePath5 = data['extent_damage_image'];
                  }

                  _this.doneDifferently = data['report'];
                } else {
                  console.log("error");
                }

                _this.global.dismissLoading();
              }), function (error) {
                _this.global.dismissLoading();

                console.log(error);
              };
            });
          }
        }, {
          key: "itemsChangeForm",
          value: function itemsChangeForm(e) {
            var ee = JSON.parse(e.detail.value);

            if (ee == 1) {
              this.itemsArray = [1];
            }

            if (ee == 2) {
              this.itemsArray = [1, 2];
            }

            if (ee == 3) {
              this.itemsArray = [1, 2, 3];
            }

            if (ee == 4) {
              this.itemsArray = [1, 2, 3, 4];
            }
          }
        }, {
          key: "reputationCheckboxEvent",
          value: function reputationCheckboxEvent(e, entry) {
            var _this2 = this;

            this.reputationCheckBox.forEach(function (element) {
              if (element.val === 'Individual') {
                _this2.individualChecked = element.isChecked;
              } else if (element.val === 'Company') {
                _this2.companyChecked = element.isChecked;
              }
            });
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType, e) {
            var _this3 = this;

            var options = {
              quality: 100,
              sourceType: sourceType,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // this.croppedImagePath = 'data:image/jpeg;base64,' + imageData;
              var file = _this3.DataURIToBlob('data:image/jpeg;base64,' + imageData);

              if (e == 1) {
                _this3.imagePath = 'data:image/jpeg;base64,' + imageData;

                var t = _this3.DataURIToBlob('data:image/jpeg;base64,' + imageData);

                var realData = _this3.imagePath.split(",")[1];

                var blob = _this3.b64toBlob(realData, 'image/jpeg');

                _this3.imageUri = imageData;
              }

              if (e == 2) {
                _this3.imagePath2 = 'data:image/jpeg;base64,' + imageData;

                var _t = _this3.DataURIToBlob('data:image/jpeg;base64,' + imageData);

                _this3.image2Uri = imageData;
              }

              if (e == 3) {
                _this3.imagePath3 = 'data:image/jpeg;base64,' + imageData;
                _this3.image3Uri = imageData;
              }

              if (e == 4) {
                _this3.imagePath4 = 'data:image/jpeg;base64,' + imageData;
                _this3.image4Uri = imageData;
              }

              if (e == 5) {
                _this3.imagePath5 = 'data:image/jpeg;base64,' + imageData;
                _this3.image5Uri = imageData;
              }
            }, function (err) {
              // Handle error
              console.log("errOf Image ", err);
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Select Image source',
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            _this4.pickImage(_this4.camera.PictureSourceType.PHOTOLIBRARY, e);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            _this4.pickImage(_this4.camera.PictureSourceType.CAMERA, e);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.nav.back();
          }
        }, {
          key: "goNext",
          value: function goNext() {
            this.nav.navigateForward('dashboard');
          }
        }, {
          key: "checkDetails",
          value: function checkDetails(i) {
            this.selected = i;
          }
        }, {
          key: "deSelect",
          value: function deSelect(i) {
            this.selected = '';
          }
        }, {
          key: "checkIncident",
          value: function checkIncident(e) {
            this.incedent = e.detail.value;
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modal.create({
                        component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_2__.ManagersPage,
                        cssClass: 'managers'
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (res) {
                        var _a;

                        if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.name) {
                          _this5.nameOfManager = res.data.name;
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "DataURIToBlob",
          value: function DataURIToBlob(dataURI) {
            var splitDataURI = dataURI.split(',');
            var byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
            var mimeString = splitDataURI[0].split(':')[1].split(';')[0];
            var ia = new Uint8Array(byteString.length);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {
              type: mimeString
            });
          }
        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }]);

        return ViewPage;
      }();

      _ViewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }];
      };

      _ViewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view',
        template: _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ViewPage);
      /***/
    },

    /***/
    97465:
    /*!********************************************!*\
      !*** ./src/app/services/global.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalService": function GlobalService() {
          return (
            /* binding */
            _GlobalService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _GlobalService = /*#__PURE__*/function () {
        function GlobalService(toastController, http, loadingController) {
          _classCallCheck(this, GlobalService);

          this.toastController = toastController;
          this.http = http;
          this.loadingController = loadingController;
          this.baseUrl = 'https://mforms-api-devel.horts.com.au/'; // https://mforms-api-devel.horts.com.au/
          //Role 

          this.user = "31";
          this.gm = "32";
          this.investigator = "33";
          this.manager = "34";
          this.supervisior = "35";
          this.formType_user = 1;
          this.formType_investigator = 2;
        }

        _createClass(GlobalService, [{
          key: "presentToast",
          value: function presentToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        mode: "ios",
                        color: "dark"
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "toast",
          value: function toast(msg, type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        // mode: "ios",
                        color: type,
                        animated: true
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "setHeader",
          value: function setHeader() {
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'apikey': 'as*37486a*()HGY'
            });
            header.set("Access-Control-Allow-Origin", "*");
            header.set("Content-Type", "application/json");
            header.set("Access-Control-Allow-Headers", "*");
            header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
            header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

            if (localStorage.getItem("token") && localStorage.getItem("token") != "") {
              header.set("token", localStorage.getItem("token"));
            }

            return header;
          }
        }, {
          key: "getData",
          value: function getData(url) {
            // let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
            // header.set("Access-Control-Allow-Origin", "*");
            // header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
            // header.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            var headers = this.setHeader();
            return this.http.get(this.baseUrl + url, {
              headers: headers
            });
          }
        }, {
          key: "postData",
          value: function postData(url, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'apikey': 'as*37486a*()HGY'
            });
            headers.set("Access-Control-Allow-Origin", "*");
            headers.set("Content-Type", "application/json");
            headers.set("Access-Control-Allow-headerss", "*");
            headers.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
            headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
            console.log('headers', headers); // let headers = this.setHeader();

            return this.http.post(this.baseUrl + url, data, {
              headers: headers
            });
          }
        }, {
          key: "postDataWithId",
          value: function postDataWithId(url, data) {
            // let header = new HttpHeaders();
            // header.set("token", localStorage.getItem("token"));
            var headers = this.setHeader();
            return this.http.post(this.baseUrl + url, data, {
              headers: headers
            });
          }
        }, {
          key: "getDataWithId",
          value: function getDataWithId(url) {
            // let header = new HttpHeaders();
            // header.set("token", localStorage.getItem("token"));
            // header.set("apikey", "as*37486a*()HGY")
            var headers = this.setHeader();
            return this.http.get(this.baseUrl + url, {
              headers: headers
            });
          }
        }]);

        return GlobalService;
      }();

      _GlobalService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
        }];
      };

      _GlobalService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _GlobalService);
      /***/
    },

    /***/
    17466:
    /*!*******************************************!*\
      !*** ./src/app/pages/view/view.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-label {\n  white-space: normal;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 18px;\n}\nion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n  padding-bottom: 0px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 18px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .btnView {\n  margin-top: 100px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .questionHead {\n  font-family: mon-black;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n}\nion-content ion-radio {\n  margin-right: 7px;\n}\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\nion-content ion-col {\n  padding: 0;\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\nion-content .question {\n  font-size: 14px !important;\n}\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\nion-content ion-select {\n  width: 100%;\n  background: white;\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\nion-content ion-input {\n  background: white;\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\n.regularTexrt {\n  text-transform: capitalize;\n  margin-left: 33px;\n}\n.value {\n  font-family: mon-medium !important;\n  font-size: 16px !important;\n  color: gray !important;\n  margin-top: -10px !important;\n}\n.head {\n  font-family: mon-medium !important;\n  font-size: 18px !important;\n  color: black !important;\n}\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQyx5QkFBQTtFQUVHLHlCQUFBO0VBQ0EsZUFBQTtBQURSO0FBR0U7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBREo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFFSTtFQUNFLHdCQUFBO0FBQU47QUFDTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFDUjtBQUNNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FBR0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBREo7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdFO0VBQ0UsaUJBQUE7QUFESjtBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBREo7QUFHRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUFOO0FBR0U7RUFDRSxzQkFBQTtBQURKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxhQUFBO0FBRko7QUFHSTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRE47QUFFTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQVI7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRE47QUFJRTtFQUNFLGlCQUFBO0FBRko7QUFJRTtFQUNFLHVDQUFBO0FBRko7QUFJRTtFQUNFLFVBQUE7QUFGSjtBQUlFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUNFLGdDQUFBO0FBRko7QUFJRTtFQUNFLDBCQUFBO0FBRko7QUFJRTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUFGSjtBQUdJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtBQUROO0FBRU07RUFDRSx1QkFBQTtBQUFSO0FBS0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0FBTEo7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0U7RUFDRSxpQkFBQTtBQUxKO0FBT0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPRTtFQUNFLHlCQUFBO0FBTEo7QUFPRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUE7RUFFSSwwQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFVQTtFQUNJLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBUEo7QUFTQTtFQUNNLGtDQUFBO0VBQ0YsMEJBQUE7RUFDQSx1QkFBQTtBQU5KO0FBUUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQUxKIiwiZmlsZSI6InZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tbGFiZWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAudG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzJweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC5sb2dvIHtcbiAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dpbi1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuaW5wdXQtZGl2IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG4gIC5iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuYnRuVmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbiAgLnBsdXMge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5pbmNpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBjb2xvcjogIzMxMzEzMTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuICAucXVlc3Rpb25IZWFkIHtcbiAgICBmb250LWZhbWlseTogbW9uLWJsYWNrO1xuICB9XG4gIC5hY3RpdmVCYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgY29sb3I6ICMzMTMxMzE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oZWFkZXJUaXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDMzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5yYSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgfVxuICB9XG4gIGlvbi1yYWRpbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIH1cbiAgaW9uLWNoZWNrYm94IHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBociB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIGlvbi1yYWRpbyB7XG4gICAgLS1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIH1cbiAgLnF1ZXN0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG5cbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICB9XG4gIGlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAubGFiZWxDdXN0b21Ecm9wRG93biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cbiAgLmNhbWVyYSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW07XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuICBpb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgfVxuICBpb24tY2FyZHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn1cbi5yZWd1bGFyVGV4cnR7XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tbGVmdDogMzNweDtcblxufVxuXG4udmFsdWV7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG4uaGVhZHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4uaW1nLXJlc3BvbnNpdmV7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIHdpZHRoOjI1MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    17616:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view/view.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Details</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"container\">\n    <div class=\"ion-margin-top ion-margin-bottom\">\n      <p>Incident Report</p>\n    </div>\n\n    <div class=\"activeBackground\">\n      <!---------------------------------------Incident Detalis----------------------------------->\n      <div class=\"headerTitle\">\n        <p>Incident</p>\n      </div>\n      <ion-radio-group value=\"Actual\">\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-radio value=\"Actual\" checked></ion-radio>\n          <ion-label>{{incedent}}</ion-label>\n        </ion-item>\n      </ion-radio-group>\n      <hr/>\n      <!---------------------------------------Incident Detalis----------------------------------->\n\n      <!---------------------------------------Classification----------------------------------->\n      <div class=\"headerTitle\">\n        <p>Classification</p>\n      </div>\n      <ion-row class=\"ion-no-padding\" *ngIf=\"classificationChekBox.length > 0\">\n        <ion-col size=\"6\" *ngFor=\"let entry of classificationChekBox\">\n          <ion-item class=\"ion-no-padding ra\" lines=\"none\" *ngIf=\"entry!==''\">\n            <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n            <ion-label>{{entry}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <p class=\"question\">Date of Incident</p>\n      <p class=\"question\">{{dateOfIncident}}</p>\n\n      <p class=\"question\">Time Of Incident</p>\n      <p class=\"question\">{{timeOfIncident}}</p>\n\n      <p class=\"question\">Date Reported</p>\n      <p class=\"question\">{{dateReported}}</p>\n\n      <p class=\"question\">Time Reported</p>\n      <p class=\"question\">{{timeReported}}</p>\n\n      <div *ngIf=\"location!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>{{location}}</ion-label>\n        </ion-item>\n      </div>\n      <ion-text *ngIf=\"location == 'Add Location'\" class=\"regularTexrt\">{{addLocation}}</ion-text>\n      <ion-text *ngIf=\"location == 'Choose Location'\" class=\"regularTexrt\">{{locationSelection}}</ion-text>\n      <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"6\" *ngIf=\"shiftType!==''\">\n          <p class=\"head\">Shift Type</p>\n          <p class=\"value\">{{shiftType}}</p>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"superVisor!==''\">\n          <p class=\"head\">Supervisor</p>\n          <p class=\"value\">{{superVisor}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"12\">\n          <p class=\"head\">Name of Manager</p>\n          <p class=\"value\">{{nameOfManager}}</p>\n        </ion-col>\n      </ion-row>\n      <hr/>\n      <!---------------------------------------Classification----------------------------------->\n     \n      <!---------------------------------------Photography----------------------------------->\n      <div *ngIf=\"imagePath !==''\">\n        <div class=\"headerTitle\">\n          <p>Photography</p>\n        </div>\n        <div class=\"ion-text-center\" *ngIf=\"imagePath !==''\">\n          <img src=\"{{imagePath}}\" class=\"img-responsive\">\n        </div>\n        <div *ngIf=\"imagePath ==''\">\n          <h6 class=\"ion-text-center ion-no-margin\">No Img Found</h6>\n        </div>\n        <hr />\n      </div>\n      <!---------------------------------------Photography----------------------------------->\n\n      <!---------------------------------------Incident Description----------------------------------->\n      <div class=\"headerTitle\">\n        <p>Incident Description</p>\n      </div>\n      <p class=\"question\">Description of incident (note: You must not use any personal details or names)</p>\n      <p class=\"value\">{{descriptionIncident}}</p>\n      <p class=\"question\">Immediate action taken</p>\n      <p class=\"value\">{{immediateAction}}</p>\n      <ion-row class=\"ion-no-padding\" *ngIf=\"insertPhotoisChecked\">\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n            <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n            <ion-label>Insert Photo</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div class=\"ion-text-center\" *ngIf=\"insertPhotoisChecked\">\n        <img src=\"{{imagePath2}}\" class=\"img-responsive\">\n      </div>\n      <div *ngIf=\"alcoholTest!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Alcohol test completed</ion-label>\n        </ion-item>\n        <ion-text class=\"regularTexrt\">{{alcoholTest}}</ion-text>\n      </div>\n      <div *ngIf=\"drugTest!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Drug test completed</ion-label>\n        </ion-item>\n      </div>\n      <ion-text class=\"regularTexrt\">{{drugTest}}</ion-text>\n      <hr />\n      <!---------------------------------------Incident Description----------------------------------->\n\n      <!---------------------------------------------Injury-------------------------------------------->\n\n      <div class=\"headerTitle\">\n        <p>Injury</p>\n      </div>\n      <div *ngFor=\"let item of person_Array;let i = index\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <p class=\"question\">Person {{i+1}} Details</p>\n          <div *ngIf=\"item?.fullNameOfInjuredPerson\">\n            <p class=\"question\">Full name of Injured person</p>\n            <p class=\"value\">{{item?.fullNameOfInjuredPerson}}</p>\n          </div>\n          <ion-row class=\"ion-no-padding ion-no-margin\">\n            <ion-col size=\"6\" class=\"ion-no-padding\" *ngIf=\"item?.gender !==''\">\n              <p class=\"question\">Gender</p>\n              <p class=\"value\">{{item?.gender}}</p>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\" *ngIf=\"item?.dateOfBirth !==''\">\n              <p class=\"question\">Date of Birth</p>\n              <p class=\"value\">{{item?.dateOfBirth|date}}</p>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=\"item?.returnToNormalDuties !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.returnToNormalDuties}}</p>\n          </div>\n          <div *ngIf=\"item?.alternate_duties !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Return to Alternate Duties</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.alternate_duties}}</p>\n          </div>\n          <div *ngIf=\"item?.part_of_body_injured_occured !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Part of Body Injured Occured</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.part_of_body_injured_occured}}</p>\n          </div>\n\n          <div *ngIf=\"item?.was_immediate_treatment !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Was Immediate Treatment Given</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.was_immediate_treatment}}</p>\n          </div>\n\n\n          <div *ngIf=\"item?.immediate_treatment_given_explanation !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Immediate Treatment Given Explanation</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.immediate_treatment_given_explanation}}</p>\n          </div>\n\n          <div *ngIf=\"item?.immediate_treatment_person_name !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Immediate Treatment Person_name</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.immediate_treatment_person_name}}</p>\n          </div>\n\n          <div *ngIf=\"item?.immediate_treatment_person_number !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Immediate Treatment Person Number</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.immediate_treatment_person_number}}</p>\n          </div>\n          <div *ngIf=\"item?.injurryCheckBox.length>0\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n              <ion-label>Initial Injury/illness classification</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\" *ngFor=\"let i of item?.injurryCheckBox\">\n              <ion-text *ngIf=\"i.isChecked\">{{i.val}},</ion-text>\n            </p>\n          </div>\n          <hr />\n        </ion-card>\n      </div>\n      <hr />\n      <!---------------------------------------------Injury-------------------------------------------->\n\n      <!---------------------------------------------Environmental-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Environmental</p>\n      </div>\n      <p class=\"question\">Immediate action taken to minimize Environment impact</p>\n      <p class=\"value\">{{environmentActionTaken}}</p>\n      <div *ngIf=\"chemicalSplit!==''\">\n        <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the chemical split?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value ion-margin-top\">\n          {{chemicalSplit}}\n        </p>\n      </div>\n      <div *ngIf=\"nameOfChemical!==''\">\n        <p class=\"question\">Name of chemical</p>\n        <p class=\"value\">{{nameOfChemical}}</p>\n      </div>\n      <div *ngIf=\"approximateQtyofChemical\">\n        <p class=\"question\">Approximate Qty of Chemical</p>\n        <p class=\"value\">{{approximateQtyofChemical}}</p>\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"insertPhotoisChecked\">\n        <div *ngIf=\"imagePath3 !== '' \">\n          <img src=\"{{imagePath3}}\" class=\"img-responsive\">\n        </div>\n      </div>\n      <div *ngIf=\"emergencySpill!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the emergency spill kit used ?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value \">{{emergencySpill}}</p>\n      </div>\n      <hr />\n      <!---------------------------------------------Environmental-------------------------------------------->\n\n      <!---------------------------------------------Reputation-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Reputation</p>\n      </div>\n      <div *ngIf=\"individualChecked\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the reputation damages an individual or Company</ion-label>\n        </ion-item>\n      </div>\n      <p class=\"regularTexrt value\" *ngIf=\"individualChecked\">Individual</p>\n      <p class=\"regularTexrt value\" *ngIf=\"companyChecked\">Company</p>\n      <div *ngIf=\"individualChecked\">\n        <p class=\"question\">How has the Individual's reputation been damaged?</p>\n        <p class=\"value\">{{individualReputationDamaged}}</p>\n      </div>\n      <div *ngIf=\"companyChecked\">\n        <p class=\"question\">How has the Company reputation been damaged?</p>\n        <p class=\"value\">{{companyReputatonDamaged}}</p>\n      </div>\n\n      <div *ngIf=\"nagativeEffetct !==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the nagative effect internal or external</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value \">{{nagativeEffetct}}</p>\n      </div>\n      <p class=\"question\">Name of any witness</p>\n      <p class=\"value\">{{nameOfAnyWitness}}</p>\n      <!-- <p class=\"question\">Contact of any witness</p>\n      <p class=\"value\">{{contactOfAnyWitness}}</p> -->\n      <p class=\"question\" *ngIf=\"possibleOutcomeOfIncident !== ''\">What is the possible outcome of this incident ?</p>\n      <p class=\"value\">{{possibleOutcomeOfIncident}}</p>\n      <p class=\"question\" *ngIf=\"imagePath4 !==''\">Upload evidence of the reputation damage</p>\n      <div class=\"ion-text-center\" *ngIf=\"imagePath4 !==''\">\n        <img src=\"{{imagePath4}}\" class=\"img-responsive\">\n      </div>\n      <hr/>\n      <!---------------------------------------------Reputation-------------------------------------------->\n\n      <!---------------------------------------------Security-------------------------------------------->\n\n      <div class=\"headerTitle\" *ngIf=\"securityRadio!=='' && securityRadio!=='undefined'\">\n        <p>Security</p>\n      </div>\n      <div *ngIf=\"securityRadio!=='' && securityRadio!=='undefined'\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>{{securityRadio}}</ion-label>\n        </ion-item>\n      </div>\n      <div *ngIf=\"securityRadio =='Theft'\">\n        <p class=\"question\">What Has Been Stolen Item ? </p>\n        <p class=\"value\">{{what_has_been_stolen_item}}</p>\n\n        <p class=\"question\">What Is the specific Securities Incident ?</p>\n        <p class=\"value\">{{what_is_the_specific_securities_incident}}</p>\n        <div>\n          <p class=\"question\">Approximate value of stolen item</p>\n          <p class=\"value\">{{approximate_value_of_stolen}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"securityRadio=='IT'\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>What kind of IT security incident?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value ion-margin-top\" *ngFor=\"let i of itsecurityCheckbox\">\n          <ion-text *ngIf=\"i.isChecked\">{{i.val}},</ion-text>\n        </p>\n      </div>\n      <hr />\n      <!---------------------------------------------Security-------------------------------------------->\n\n      <!---------------------------------------------Asset-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Asset</p>\n      </div>\n      <p class=\"question\">Asset Description</p>\n      <p class=\"value\">{{assetDescription}}</p>\n      <div *ngIf=\"assetNumber=='' && assetNumber=='undefined'\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Does asset have a member?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value\">{{assetNumber}}</p>\n      </div>\n      <div *ngIf=\"assetNumber=='Yes'\">\n        <p class=\"question\">Asset Number</p>\n        <p class=\"value\">{{assetsNumbers}}</p>\n      </div>\n      <p class=\"question\" *ngIf=\"imagePath5!==''\">Upload photo of damage</p>\n      <div class=\"ion-text-center\" *ngIf=\"imagePath5 !==''\">\n        <img src=\"{{imagePath5}}\" class=\"img-responsive\">\n      </div>\n      <hr/>\n      <!---------------------------------------------Asset-------------------------------------------->\n\n      <!---------------------------------------------Report-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Report</p>\n      </div>\n      <p class=\"question\">What could have been done differently?</p>\n      <p class=\"value\">{{doneDifferently}}</p>\n      <!---------------------------------------------Report-------------------------------------------->\n\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_view_view_module_ts-es5.js.map