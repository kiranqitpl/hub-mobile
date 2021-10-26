(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_edit_edit_module_ts"], {
    /***/
    38682:
    /*!***************************************************!*\
      !*** ./src/app/pages/edit/edit-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditPageRoutingModule": function EditPageRoutingModule() {
          return (
            /* binding */
            _EditPageRoutingModule
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


      var _edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit.page */
      87807);

      var routes = [{
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_0__.EditPage
      }];

      var _EditPageRoutingModule = function EditPageRoutingModule() {
        _classCallCheck(this, EditPageRoutingModule);
      };

      _EditPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditPageRoutingModule);
      /***/
    },

    /***/
    98267:
    /*!*******************************************!*\
      !*** ./src/app/pages/edit/edit.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditPageModule": function EditPageModule() {
          return (
            /* binding */
            _EditPageModule
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


      var _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-routing.module */
      38682);
      /* harmony import */


      var _edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit.page */
      87807);

      var _EditPageModule = function EditPageModule() {
        _classCallCheck(this, EditPageModule);
      };

      _EditPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPageRoutingModule],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_1__.EditPage]
      })], _EditPageModule);
      /***/
    },

    /***/
    87807:
    /*!*****************************************!*\
      !*** ./src/app/pages/edit/edit.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditPage": function EditPage() {
          return (
            /* binding */
            _EditPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./edit.page.html */
      1062);
      /* harmony import */


      var _edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit.page.scss */
      47442);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/managers/managers.page */
      58127);
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      67871);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/global.service */
      97465);
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      31531);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

      var _EditPage = /*#__PURE__*/function () {
        function EditPage(nav, modal, camera, actionSheetController, file, global, base64, platform) {
          _classCallCheck(this, EditPage);

          this.nav = nav;
          this.modal = modal;
          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.file = file;
          this.global = global;
          this.base64 = base64;
          this.platform = platform;
          this.stolenItem = '';
          this.approximateValueOfStolen = '';
          this.data = [];
          this.drugTest = "";
          this.selected = "";
          this.imageUri = "";
          this.locationList = [];
          this.image2Uri = "";
          this.image3Uri = '';
          this.wasThereAnyWitnessOfIncident = "";
          this.image4Uri = "";
          this.image5Uri = "";
          this.imagePath = '';
          this.imagePath2 = '';
          this.imagePath3 = '';
          this.chemicalSplit = '';
          this.imagePath4 = '';
          this.imagePath5 = '';
          this.incedent = '';
          this.classificationChekBox = [];
          this.location = '';
          this.insertPhotoisChecked = false;
          this.nameOfManager = 'Name of Manager';
          this.alcoholTest = '';
          this.formCount = '1';
          this.injuredPerson = '';
          this.gender = "";
          this.todayDate = new Date();
          this.returnToNormalDuties = '';
          this.alternativeDuties = '';
          this.injuryCheckBox = [];
          this.securityRadio = "";
          this.itemsArray = [1];
          this.emergencySpill = '';
          this.itsecurityCheckbox = [];
          this.assetNumber = "";
          this.reputationCheckBox = [];
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
            chemical_photo: this.imagePath3
          }];
          this.person_one_details = {
            alternate_duties: '',
            date_of_birth: '',
            duties_explanation: '',
            initital_injury: [],
            injured_person_option: '',
            injured_person_option_value: '',
            normal_duties: '',
            part_of_body_injured_occured: "",
            was_immediate_treatment: "",
            immediate_treatment_given_explanation: "",
            immediate_treatment_person_name: "",
            immediate_treatment_person_number: "",
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            immediateTreatment: '',
            partOfBodyInjured: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: '',
            explanation: '',
            other_name: '',
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
            part_of_body_injured_occured: "",
            was_immediate_treatment: "",
            immediate_treatment_given_explanation: "",
            immediate_treatment_person_name: "",
            immediate_treatment_person_number: "",
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            immediateTreatment: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: '',
            explanation: '',
            other_name: '',
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
          this.nagativeEffetct = "";
          this.person_three_details = {
            alternate_duties: '',
            date_of_birth: '',
            duties_explanation: '',
            initital_injury: [],
            injured_person_option: '',
            injured_person_option_value: '',
            normal_duties: '',
            part_of_body_injured_occured: "",
            was_immediate_treatment: "",
            immediate_treatment_given_explanation: "",
            immediate_treatment_person_name: "",
            immediate_treatment_person_number: "",
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            immediateTreatment: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: '',
            explanation: '',
            other_name: '',
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
            part_of_body_injured_occured: "",
            was_immediate_treatment: "",
            immediate_treatment_given_explanation: "",
            immediate_treatment_person_name: "",
            immediate_treatment_person_number: "",
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            immediateTreatment: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: '',
            explanation: '',
            other_name: '',
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
          this.platformCheck = '';
          this.dateOfIncident = '';
          this.dateReported = '';
          this.timeOfIncident = '';
          this.timeReported = '';
          this.returnToAlternateDuties = "";
          this.returnToDutiesImage = "";
          this.personDetails = [];
          this.witnessList = [];
          this.managerList = [];
          this.superVisorList = [];
          this.shiftTypeList = [];
          this.id = "";
          this.individualChecked = "";
          this.companyChecked = "";
          this.croppedImagepath = '';
          this.isLoading = false;
          this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
          };
          this.url = '';
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
        }

        _createClass(EditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.platform.is('cordova')) {
              this.platformCheck = 'browser';
            } else {
              this.platformCheck = 'cordova';
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.global.getDataWithId("api/Witness/getWitnessList").subscribe(function (res) {
              if (res) {
                _this.witnessList = res.data;
              }
            }, function (err) {
              console.log(err);
            });
            this.global.getDataWithId("api/Manager/getManagerList").subscribe(function (res) {
              if (res) {
                _this.managerList = res.data;
              }
            }, function (err) {
              console.log(err);
            });
            this.global.getDataWithId("api/Supervisor/getSupervisorList").subscribe(function (res) {
              if (res) {
                _this.superVisorList = res.data;
              }
            }, function (err) {
              console.log("Eror", err);
            });
            this.global.getDataWithId("api/Shift/get_shift_typelist").subscribe(function (res) {
              if (res) {
                _this.shiftTypeList = res.data;
              }
            }, function (err) {
              console.log("Eror", err);
            });
            this.global.getDataWithId("api/location/getLocation").subscribe(function (res) {
              if (res) {
                _this.locationList = res.data;
              }
            });
            var data = JSON.parse(localStorage.getItem('singleView'));
            this.drugTest = data.drug_test_completed;
            this.id = data.id;
            this.incedent = data.incident_value;
            this.whoWitnessedNearThis = data.incident_near_miss;
            this.dateReported = data.date_reported;
            this.dateOfIncident = data.date_of_incident;
            this.timeOfIncident = moment__WEBPACK_IMPORTED_MODULE_7__(data.time_of_incident, "HH:mm:ss").format("HH:mm");
            this.timeReported = moment__WEBPACK_IMPORTED_MODULE_7__(data.time_reported, "HH:mm:ss").format("HH:mm");

            if (data.was_there_any_witness_of_the_incident !== '' && data.was_there_any_witness_of_the_incident !== undefined && data.was_there_any_witness_of_the_incident !== 'undefined') {
              this.wasThereAnyWitnessOfIncident = data.was_there_any_witness_of_the_incident;
            }

            this.possibleConsequence = data.incident_near_miss_other;
            var classification_value = data.classification_value.split(",");
            this.classificationChekBox.forEach(function (el) {
              classification_value.forEach(function (ele) {
                if (el.val == ele) {
                  el.isChecked = true;
                }
              });
            });
            this.location = data.classification_location_option;

            if (this.location == 'Add Location') {
              this.addLocation = data.classification_location_value;
            }

            if (this.location == 'Choose Location') {
              this.locationSelection = data.classification_location_value;
            }

            this.shiftType = data.classification_shift_type;
            this.superVisor = data.classification_supervisor;
            this.nameOfManager = data.classification_manager;
            this.imagePath = data.photography_image;
            this.descriptionIncident = data.incident_description;
            this.immediateAction = data.incident_description_action;

            if (data.incident_description_photo !== '') {
              this.insertPhotoisChecked = true;
              this.imagePath2 = data.incident_description_photo;
            }

            this.alcoholTest = data.incident_description_alcohol_test;
            this.formCount = data.injury_persons;

            if (JSON.parse(data.injury_persons) == 1) {
              this.itemsArray = [1];
            }

            if (JSON.parse(data.injury_persons) == 2) {
              this.itemsArray = [1, 2];
            }

            if (JSON.parse(data.injury_persons) == 3) {
              this.itemsArray = [1, 2, 3];
            }

            if (JSON.parse(data.injury_persons) == 4) {
              this.itemsArray = [1, 2, 3, 4];
            }

            this.returnToAlternateDuties = data.return_to_alternate_duties;
            this.returnToDutiesImage = data.return_to_alternate_duties_image;
            this.person_one_details = {
              alternate_duties: data === null || data === void 0 ? void 0 : data.person_details[0].alternate_duties,
              date_of_birth: data === null || data === void 0 ? void 0 : data.person_details[0].date_of_birth,
              duties_explanation: data === null || data === void 0 ? void 0 : data.person_details[0].duties_explanation,
              injured_person_option: data === null || data === void 0 ? void 0 : data.person_details[0].injured_person_option,
              injured_person_option_value: data === null || data === void 0 ? void 0 : data.person_details[0].injured_person_option_value,
              normal_duties: data === null || data === void 0 ? void 0 : data.person_details[0].normal_duties,
              fullNameOfInjuredPerson: data === null || data === void 0 ? void 0 : data.person_details[0].injured_person_option,
              gender: data === null || data === void 0 ? void 0 : data.person_details[0].gender,
              dateOfBirth: data === null || data === void 0 ? void 0 : data.person_details[0].date_of_birth,
              returnToNormalDuties: data === null || data === void 0 ? void 0 : data.person_details[0].normal_duties,
              returnToAlernateDuties: data === null || data === void 0 ? void 0 : data.person_details[0].alternate_duties,
              explanation: data === null || data === void 0 ? void 0 : data.person_details[0].duties_explanation,
              other_name: data === null || data === void 0 ? void 0 : data.person_details[0].injured_person_option_value,
              partOfBodyInjured: data === null || data === void 0 ? void 0 : data.person_details[0].part_of_body_injured_occured,
              immediateTreatment: data === null || data === void 0 ? void 0 : data.person_details[0].was_immediate_treatment,
              immediateTreatmentGivenExplanation: data === null || data === void 0 ? void 0 : data.person_details[0].immediate_treatment_given_explanation,
              administeredPersonName: data === null || data === void 0 ? void 0 : data.person_details[0].immediate_treatment_person_name,
              adminsteredPersonNumber: data === null || data === void 0 ? void 0 : data.person_details[0].immediate_treatment_person_number,
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
            var one = data.person_details[0].initital_injury.split(",");
            this.person_one_details.injurryCheckBox.forEach(function (el) {
              one.forEach(function (ele) {
                if (el.val == ele) {
                  el.isChecked = true;
                }
              });
            });
            this.person_two_details = {
              alternate_duties: data === null || data === void 0 ? void 0 : data.person_details[1].alternate_duties,
              date_of_birth: data === null || data === void 0 ? void 0 : data.person_details[1].date_of_birth,
              duties_explanation: data === null || data === void 0 ? void 0 : data.person_details[1].duties_explanation,
              injured_person_option: data === null || data === void 0 ? void 0 : data.person_details[1].injured_person_option,
              injured_person_option_value: data === null || data === void 0 ? void 0 : data.person_details[1].injured_person_option_value,
              normal_duties: data === null || data === void 0 ? void 0 : data.person_details[1].normal_duties,
              fullNameOfInjuredPerson: data === null || data === void 0 ? void 0 : data.person_details[1].injured_person_option,
              gender: data === null || data === void 0 ? void 0 : data.person_details[1].gender,
              dateOfBirth: data === null || data === void 0 ? void 0 : data.person_details[1].date_of_birth,
              returnToNormalDuties: data === null || data === void 0 ? void 0 : data.person_details[1].normal_duties,
              returnToAlernateDuties: data === null || data === void 0 ? void 0 : data.person_details[1].alternate_duties,
              explanation: data === null || data === void 0 ? void 0 : data.person_details[1].duties_explanation,
              other_name: data === null || data === void 0 ? void 0 : data.person_details[1].injured_person_option_value,
              partOfBodyInjured: data === null || data === void 0 ? void 0 : data.person_details[1].part_of_body_injured_occured,
              immediateTreatment: data === null || data === void 0 ? void 0 : data.person_details[1].was_immediate_treatment,
              immediateTreatmentGivenExplanation: data === null || data === void 0 ? void 0 : data.person_details[1].immediate_treatment_given_explanation,
              administeredPersonName: data === null || data === void 0 ? void 0 : data.person_details[1].immediate_treatment_person_name,
              adminsteredPersonNumber: data === null || data === void 0 ? void 0 : data.person_details[1].immediate_treatment_person_number,
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
            var two = data.person_details[1].initital_injury.split(",");
            this.person_one_details.injurryCheckBox.forEach(function (el) {
              two.forEach(function (ele) {
                if (el.val == ele) {
                  el.isChecked = true;
                }
              });
            }); //3

            this.person_three_details = {
              alternate_duties: data === null || data === void 0 ? void 0 : data.person_details[2].alternate_duties,
              date_of_birth: data === null || data === void 0 ? void 0 : data.person_details[2].date_of_birth,
              duties_explanation: data === null || data === void 0 ? void 0 : data.person_details[2].duties_explanation,
              injured_person_option: data === null || data === void 0 ? void 0 : data.person_details[2].injured_person_option,
              injured_person_option_value: data === null || data === void 0 ? void 0 : data.person_details[2].injured_person_option_value,
              normal_duties: data === null || data === void 0 ? void 0 : data.person_details[2].normal_duties,
              fullNameOfInjuredPerson: data === null || data === void 0 ? void 0 : data.person_details[2].injured_person_option,
              gender: data === null || data === void 0 ? void 0 : data.person_details[2].gender,
              dateOfBirth: data === null || data === void 0 ? void 0 : data.person_details[2].date_of_birth,
              returnToNormalDuties: data === null || data === void 0 ? void 0 : data.person_details[2].normal_duties,
              returnToAlernateDuties: data === null || data === void 0 ? void 0 : data.person_details[2].alternate_duties,
              explanation: data === null || data === void 0 ? void 0 : data.person_details[2].duties_explanation,
              other_name: data === null || data === void 0 ? void 0 : data.person_details[2].injured_person_option_value,
              partOfBodyInjured: data === null || data === void 0 ? void 0 : data.person_details[2].part_of_body_injured_occured,
              immediateTreatment: data === null || data === void 0 ? void 0 : data.person_details[2].was_immediate_treatment,
              immediateTreatmentGivenExplanation: data === null || data === void 0 ? void 0 : data.person_details[2].immediate_treatment_given_explanation,
              administeredPersonName: data === null || data === void 0 ? void 0 : data.person_details[2].immediate_treatment_person_name,
              adminsteredPersonNumber: data === null || data === void 0 ? void 0 : data.person_details[2].immediate_treatment_person_number,
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
            var three = data.person_details[2].initital_injury.split(",");
            this.person_three_details.injurryCheckBox.forEach(function (el) {
              three.forEach(function (ele) {
                if (el.val == ele) {
                  el.isChecked = true;
                }
              });
            });
            this.person_four_details = {
              alternate_duties: data === null || data === void 0 ? void 0 : data.person_details[3].alternate_duties,
              date_of_birth: data === null || data === void 0 ? void 0 : data.person_details[3].date_of_birth,
              duties_explanation: data === null || data === void 0 ? void 0 : data.person_details[3].duties_explanation,
              injured_person_option: data === null || data === void 0 ? void 0 : data.person_details[3].injured_person_option,
              injured_person_option_value: data === null || data === void 0 ? void 0 : data.person_details[3].injured_person_option_value,
              normal_duties: data === null || data === void 0 ? void 0 : data.person_details[3].normal_duties,
              fullNameOfInjuredPerson: data === null || data === void 0 ? void 0 : data.person_details[3].injured_person_option,
              gender: data === null || data === void 0 ? void 0 : data.person_details[3].gender,
              dateOfBirth: data === null || data === void 0 ? void 0 : data.person_details[3].date_of_birth,
              returnToNormalDuties: data === null || data === void 0 ? void 0 : data.person_details[3].normal_duties,
              returnToAlernateDuties: data === null || data === void 0 ? void 0 : data.person_details[3].alternate_duties,
              explanation: data === null || data === void 0 ? void 0 : data.person_details[3].duties_explanation,
              other_name: data === null || data === void 0 ? void 0 : data.person_details[3].injured_person_option_value,
              partOfBodyInjured: data === null || data === void 0 ? void 0 : data.person_details[3].part_of_body_injured_occured,
              immediateTreatment: data === null || data === void 0 ? void 0 : data.person_details[3].was_immediate_treatment,
              immediateTreatmentGivenExplanation: data === null || data === void 0 ? void 0 : data.person_details[3].immediate_treatment_given_explanation,
              administeredPersonName: data === null || data === void 0 ? void 0 : data.person_details[3].immediate_treatment_person_name,
              adminsteredPersonNumber: data === null || data === void 0 ? void 0 : data.person_details[3].immediate_treatment_person_number,
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
            var four = data.person_details[3].initital_injury.split(",");
            this.person_three_details.injurryCheckBox.forEach(function (el) {
              four.forEach(function (ele) {
                if (el.val == ele) {
                  el.isChecked = true;
                }
              });
            });
            this.environmentActionTaken = data.environmental_description;
            this.chemicalSplit = data.was_a_chemical_split;
            this.nameOfChemical = data.chemical_details.chemical_name;
            this.approximateQtyofChemical = data.chemical_details.approximate_quantity;

            if (data.chemical_details.chemical_photo !== '') {
              this.insertPhotoisChecked = true;
              this.imagePath3 = data.chemical_details.chemical_photo;
            }

            this.emergencySpill = data.emergency_spill_kit_used;
            var reputationValue = data.reputation_option.split(',');
            this.reputationCheckBox.forEach(function (res) {
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

            if (this.individualChecked) {
              this.individualReputationDamaged = data.individual_damage_value;
            }

            if (this.companyChecked) {
              this.companyReputatonDamaged = data.company_damage_value;
            }

            this.nagativeEffetct = data.reputation_negative_effect;
            this.nameOfAnyWitness = data.name_of_witness;
            this.contactOfAnyWitness = data.contact_of_witness;
            this.possibleOutcomeOfIncident = data.possible_outcome_incident;

            if (data.reputation_damage_image !== '') {
              this.imagePath4 = data.reputation_damage_image;
            }

            this.securityRadio = data.security_option;

            if (this.securityRadio == 'IT') {
              var t = data.it_option_value.split(",");
              this.itsecurityCheckbox.forEach(function (itsecurity) {
                t.forEach(function (ts) {
                  if (itsecurity.val == ts) {
                    itsecurity.isChecked = true;
                  }
                });
              });
            }

            this.assetDescription = data.asset_description;
            this.assetNumber = data.asset_has_number;
            this.assetsNumbers = data.asset_number;
            this.extentOfDamage = data.extent_of_damage;

            if (data.extent_damage_image !== '') {
              this.imagePath5 = data.extent_damage_image;
            }

            this.doneDifferently = data.report;
            this.stolenItem = data.what_has_been_stolen_item;
            this.approximateValueOfStolen = data.approximate_value_of_stolen;
            this.specificSecurityIncident = data.what_is_the_specific_securities_incident;
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

              if (e == 7) {
                _this3.returnToDutiesImage = 'data:image/jpeg;base64,' + imageData;
                ;
              }
            }, function (err) {
              console.log("errOf Image ", err);
            });
          }
        }, {
          key: "selectImage",
          value: function selectImage(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

                        if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.full_name) {
                          _this5.nameOfManager = res.data.full_name;
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
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            if (this.person_one_details.returnToNormalDuties === 'Yes') {
              this.person_one_details.returnToAlernateDuties = "";
            }

            this.person_one_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this6.person_one_details.injury_value.push(element.val);
              }
            });

            if (this.person_two_details.returnToNormalDuties === 'Yes') {
              this.person_two_details.returnToAlernateDuties = '';
            }

            this.person_two_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this6.person_two_details.injury_value.push(element.val);
              }
            });

            if (this.person_three_details.returnToNormalDuties === 'Yes') {
              this.person_three_details.returnToAlernateDuties = '';
            }

            this.person_three_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this6.person_three_details.injury_value.push(element.val);
              }
            });

            if (this.person_four_details.returnToNormalDuties === 'Yes') {
              this.person_four_details.returnToAlernateDuties = '';
            }

            this.person_four_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this6.person_four_details.injury_value.push(element.val);
              }
            });
            this.personDetails.push(this.person_one_details);
            this.personDetails.push(this.person_two_details);
            this.personDetails.push(this.person_three_details);
            this.personDetails.push(this.person_four_details);
            var classiCheckedValue = [];
            var repuCheckedValue = [];
            var it_option_value = [];
            this.itsecurityCheckbox.forEach(function (element) {
              if (element.isChecked) {
                it_option_value.push(element.val);
              }
            });
            this.classificationChekBox.forEach(function (el) {
              if (el.isChecked) {
                classiCheckedValue.push(el.val);
              }
            });
            this.reputationCheckBox.forEach(function (el) {
              if (el.isChecked) {
                repuCheckedValue.push(el.val);
              }
            });

            if (this.descriptionIncident === '') {
              this.global.presentToast("Please enter Description of incident");
            } else if (this.immediateAction === '') {
              this.global.presentToast("Immediate action taken filed is Required");
            } else if (this.environmentActionTaken === '') {
              this.global.presentToast("Please enter Immediate action taken to minimize Environmental impact");
            } else if (this.nameOfAnyWitness === '') {
              this.global.presentToast("Please enter name of any witness");
            } else if (this.possibleOutcomeOfIncident === '') {
              this.global.presentToast("Please enter possible outcome of this incident");
            } else if (this.assetDescription === '') {
              this.global.presentToast("Please enter asset description");
            } else if (this.extentOfDamage === '') {
              this.global.presentToast("Please enter Extent of Damage");
            } else if (this.doneDifferently === '') {
              this.global.presentToast("Please enter what could have been done differently");
            } else if (this.nameOfManager === '') {
              this.global.presentToast("Please Select the manager");
            } else {
              this.person_one_details.alternate_duties = this.person_one_details.returnToAlernateDuties;
              this.person_one_details.date_of_birth = this.person_one_details.dateOfBirth;
              this.person_one_details.duties_explanation = this.person_one_details.explanation;
              this.person_one_details.initital_injury = this.person_one_details.injury_value.join(',');
              this.person_one_details.injured_person_option = this.person_one_details.fullNameOfInjuredPerson;
              this.person_one_details.injured_person_option_value = this.person_one_details.other_name;
              this.person_one_details.normal_duties = this.person_one_details.returnToNormalDuties;
              this.person_one_details.part_of_body_injured_occured = this.person_one_details.partOfBodyInjured;
              this.person_one_details.was_immediate_treatment = this.person_one_details.immediateTreatment;
              this.person_one_details.immediate_treatment_given_explanation = this.person_one_details.immediateTreatmentGivenExplanation;
              this.person_one_details.immediate_treatment_person_name = this.person_one_details.administeredPersonName;
              this.person_one_details.immediate_treatment_person_number = this.person_one_details.adminsteredPersonNumber;
              this.person_two_details.alternate_duties = this.person_two_details.returnToAlernateDuties;
              this.person_two_details.date_of_birth = this.person_two_details.dateOfBirth;
              this.person_two_details.duties_explanation = this.person_two_details.explanation;
              this.person_two_details.initital_injury = this.person_two_details.injury_value.join(',');
              this.person_two_details.injured_person_option = this.person_two_details.fullNameOfInjuredPerson;
              this.person_two_details.injured_person_option_value = this.person_two_details.other_name;
              this.person_two_details.normal_duties = this.person_two_details.returnToNormalDuties;
              this.person_two_details.part_of_body_injured_occured = this.person_two_details.partOfBodyInjured;
              this.person_two_details.was_immediate_treatment = this.person_two_details.immediateTreatment;
              this.person_two_details.immediate_treatment_given_explanation = this.person_two_details.immediateTreatmentGivenExplanation;
              this.person_two_details.immediate_treatment_person_name = this.person_two_details.administeredPersonName;
              this.person_two_details.immediate_treatment_person_number = this.person_two_details.adminsteredPersonNumber;
              this.person_three_details.alternate_duties = this.person_three_details.returnToAlernateDuties;
              this.person_three_details.date_of_birth = this.person_three_details.dateOfBirth;
              this.person_three_details.duties_explanation = this.person_three_details.explanation;
              this.person_three_details.initital_injury = this.person_three_details.injury_value.join(',');
              this.person_three_details.injured_person_option = this.person_three_details.fullNameOfInjuredPerson;
              this.person_three_details.injured_person_option_value = this.person_three_details.other_name;
              this.person_three_details.normal_duties = this.person_three_details.returnToNormalDuties;
              this.person_three_details.part_of_body_injured_occured = this.person_three_details.partOfBodyInjured;
              this.person_three_details.was_immediate_treatment = this.person_three_details.immediateTreatment;
              this.person_three_details.immediate_treatment_given_explanation = this.person_three_details.immediateTreatmentGivenExplanation;
              this.person_three_details.immediate_treatment_person_name = this.person_three_details.administeredPersonName;
              this.person_three_details.immediate_treatment_person_number = this.person_three_details.adminsteredPersonNumber;
              this.person_four_details.alternate_duties = this.person_four_details.returnToAlernateDuties;
              this.person_four_details.date_of_birth = this.person_four_details.dateOfBirth;
              this.person_four_details.duties_explanation = this.person_four_details.explanation;
              this.person_four_details.initital_injury = this.person_four_details.injury_value.join(',');
              this.person_four_details.injured_person_option = this.person_four_details.fullNameOfInjuredPerson;
              this.person_four_details.injured_person_option_value = this.person_four_details.other_name;
              this.person_four_details.normal_duties = this.person_four_details.returnToNormalDuties;
              this.person_four_details.part_of_body_injured_occured = this.person_four_details.partOfBodyInjured;
              this.person_four_details.was_immediate_treatment = this.person_four_details.immediateTreatment;
              this.person_four_details.immediate_treatment_given_explanation = this.person_four_details.immediateTreatmentGivenExplanation;
              this.person_four_details.immediate_treatment_person_name = this.person_four_details.administeredPersonName;
              this.person_four_details.immediate_treatment_person_number = this.person_four_details.adminsteredPersonNumber;
              var requiredData = {
                descriptionIncident: this.descriptionIncident,
                immediateAction: this.immediateAction,
                environmentActionTaken: this.environmentActionTaken,
                nameOfAnyWitness: this.nameOfAnyWitness,
                contactOfAnyWitness: this.contactOfAnyWitness,
                possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
                assetDescription: this.assetDescription,
                extentOfDamage: this.extentOfDamage,
                doneDifferently: this.doneDifferently
              };

              if (this.incedent == 'Near Miss') {
                var nonRequirementIncident = {
                  incidentRadio: this.incedent,
                  whoWitnessedNearThis: this.whoWitnessedNearThis,
                  possibleConsequence: this.possibleConsequence
                };
              }

              var classificationObjectData = {
                ClassificationCheckBoxCollectionData: this.classificationChekBox,
                radioBtnValueofClassficationRadio: this.location,
                dropDownofShiftType: this.shiftType,
                superVisorDropdownValue: this.superVisor,
                addLocation: '',
                locationSelection: '',
                nameOfManager: this.nameOfManager,
                locationRadioValue: this.location
              };

              if (this.location === 'Add Location') {
                classificationObjectData.addLocation = this.addLocation;
              }

              if (this.location === 'Choose Location') {
                classificationObjectData.locationSelection = this.locationSelection;
              }

              var photoGraphyData = {
                image: this.imagePath
              };
              var incidentDataObject = {
                image: '',
                alcoholTest: this.alcoholTest
              };

              if (this.insertPhotoisChecked) {
                var imageData = {
                  image: this.imagePath2
                };
                incidentDataObject.image = this.imagePath2;
              }

              var environmentalDataColletion = {
                chemicalSplit: this.chemicalSplit,
                nameOfChemical: '',
                image: '',
                approximateQtyofChemical: '',
                emergencySpill: this.emergencySpill
              };

              if (this.chemicalSplit === 'Yes') {
                environmentalDataColletion.nameOfChemical = this.nameOfChemical;
                environmentalDataColletion.image = this.imagePath3;
                environmentalDataColletion.approximateQtyofChemical = this.approximateQtyofChemical;
              }

              var reputationCollectionData = {
                image: this.imagePath4,
                individualReputationDamaged: '',
                companyReputationDamged: '',
                reputationCheckBox: this.reputationCheckBox
              };

              if (this.individualChecked) {
                reputationCollectionData.individualReputationDamaged = this.individualReputationDamaged;
              }

              if (this.companyChecked) {
                reputationCollectionData.companyReputationDamged = this.companyReputatonDamaged;
              }

              var securityCollectionData = {
                securityRadiovalue: this.securityRadio,
                itsecurityCheckbox: ''
              };

              if (this.securityRadio == 'IT') {
                securityCollectionData.itsecurityCheckbox = this.itsecurityCheckbox;
              }

              var assetCollectionData = {
                assetNumberRadioValue: this.assetNumber,
                image: this.imagePath5,
                assetsNumbers: ''
              };

              if (this.assetNumber == 'Yes') {
                assetCollectionData.assetsNumbers = this.assetsNumbers;
              }

              ;

              if (this.person_one_details.returnToNormalDuties === 'Yes') {
                this.person_one_details.returnToAlernateDuties = '';
              }

              if (this.person_two_details.returnToNormalDuties === 'Yes') {
                this.person_two_details.returnToAlernateDuties = '';
              }

              if (this.person_three_details.returnToNormalDuties === 'Yes') {
                this.person_three_details.returnToAlernateDuties = '';
              } //4


              if (this.person_four_details.returnToNormalDuties === 'Yes') {
                this.person_four_details.returnToAlernateDuties = '';
              }

              if (this.image3Uri !== '') {
                this.checmicalDetails.chemical_photo = this.image3Uri;
              }

              var fd = new FormData();

              if (this.imageUri !== '') {
                fd.append("photography_image", this.imagePath);
              }

              if (this.image4Uri !== '') {
                fd.append("reputation_damage_image", this.imagePath4);
              }

              if (this.image5Uri !== '') {
                fd.append("extent_damage_image", this.imagePath5);
              }

              fd.append("id", this.id);
              fd.append("incident_value", this.incedent);
              fd.append("incident_near_miss", this.whoWitnessedNearThis);
              fd.append("incident_near_miss_other", this.possibleConsequence);
              fd.append("classification_value", classiCheckedValue.join(','));
              fd.append("reputation_negative_effect", this.nagativeEffetct);
              fd.append("classification_location_option", this.location);

              if (this.location == 'Add Location') {
                fd.append("classification_location_value", this.addLocation);
              }

              if (this.location == 'Choose Location') {
                fd.append("classification_location_value", this.locationSelection);
              } //extra field added in database


              fd.append("date_of_incident", this.dateOfIncident);
              fd.append("time_of_incident", this.timeOfIncident);
              fd.append("date_reported", this.dateReported);
              fd.append("time_reported", this.timeReported);
              fd.append("alcohol_test_completed", this.alcoholTest);
              fd.append("drug_test_completed", this.drugTest);
              fd.append("what_has_been_stolen_item", this.stolenItem);
              fd.append("what_is_the_specific_securities_incident", this.specificSecurityIncident);
              fd.append("approximate_value_of_stolen", this.approximateValueOfStolen);
              fd.append("classification_shift_type", this.shiftType);
              fd.append("classification_supervisor", this.superVisor);
              fd.append("classification_manager", this.nameOfManager);
              fd.append("incident_description", this.descriptionIncident);
              fd.append("incident_description_action", this.immediateAction); //incident photo pending from postman and here also 

              fd.append("incident_description_alcohol_test", this.alcoholTest);
              fd.append("injury_persons", this.formCount); //form value

              fd.append("environmental_description", this.environmentActionTaken);
              fd.append("was_a_chemical_split", this.chemicalSplit); //checmical split value inner side query

              fd.append("emergency_spill_kit_used", this.emergencySpill);
              fd.append("reputation_option", repuCheckedValue);

              if (this.individualChecked) {
                fd.append("individual_damage_value", this.individualReputationDamaged);
              }

              if (this.companyChecked) {
                fd.append("company_damage_value", this.companyReputatonDamaged);
              }

              if (this.image2Uri !== '') {
                fd.append("incident_description_photo", this.imagePath2);
              }

              fd.append("reutation_negative_effect", this.nagativeEffetct);
              fd.append("name_of_witness", this.nameOfAnyWitness);
              fd.append("contact_of_witness", this.contactOfAnyWitness);
              fd.append("possible_outcome_incident", this.possibleOutcomeOfIncident);
              fd.append("security_option", this.securityRadio);

              if (this.securityRadio == 'IT') {
                fd.append("it_option_value", it_option_value.join(',')); // chexkbox and inner value
              }

              fd.append("asset_description", this.assetDescription);
              fd.append("asset_has_number", this.assetNumber);

              if (this.assetNumber == 'Yes') {
                fd.append("asset_number", this.assetsNumbers);
              }

              fd.append("extent_of_damage", this.extentOfDamage);
              fd.append("report", this.doneDifferently);
              fd.append("person_details", JSON.stringify(this.personDetails));
              fd.append("chemical_details", JSON.stringify(this.checmicalDetails));
              fd.append("return_to_alternate_duties", this.returnToAlternateDuties);
              fd.append("return_to_alternate_duties_image", this.returnToDutiesImage);
              this.global.presentLoading();
              this.global.postData("api/add_form/submit", fd).subscribe(function (res) {
                if (res.status) {
                  _this6.global.presentToast(res.message);

                  _this6.nav.navigateRoot("form-list");

                  _this6.global.dismissLoading();
                } else {
                  _this6.global.presentToast(res.message);

                  _this6.global.dismissLoading();
                }
              }, function (err) {
                _this6.global.dismissLoading();
              });
            }
          }
        }, {
          key: "saveItemOffline",
          value: function saveItemOffline() {
            var _this7 = this;

            if (this.person_one_details.returnToNormalDuties === 'Yes') {
              this.person_one_details.returnToAlernateDuties = '';
            }

            this.person_one_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this7.person_one_details.injury_value.push(element.val);
              }
            });

            if (this.person_two_details.returnToNormalDuties === 'Yes') {
              this.person_two_details.returnToAlernateDuties = '';
            }

            this.person_two_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this7.person_two_details.injury_value.push(element.val);
              }
            });

            if (this.person_three_details.returnToNormalDuties === 'Yes') {
              this.person_three_details.returnToAlernateDuties = '';
            }

            this.person_three_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this7.person_three_details.injury_value.push(element.val);
              }
            });

            if (this.person_four_details.returnToNormalDuties === 'Yes') {
              this.person_four_details.returnToAlernateDuties = '';
            }

            this.person_four_details.injurryCheckBox.forEach(function (element) {
              if (element.isChecked) {
                _this7.person_four_details.injury_value.push(element.val);
              }
            });
            this.personDetails.push(this.person_one_details);
            this.personDetails.push(this.person_two_details);
            this.personDetails.push(this.person_three_details);
            this.personDetails.push(this.person_four_details);
            var classiCheckedValue = [];
            var repuCheckedValue = [];
            var it_option_value = [];
            this.itsecurityCheckbox.forEach(function (element) {
              if (element.isChecked) {
                it_option_value.push(element.val);
              }
            });
            this.classificationChekBox.forEach(function (el) {
              if (el.isChecked) {
                classiCheckedValue.push(el.val);
              }
            });
            this.reputationCheckBox.forEach(function (el) {
              if (el.isChecked) {
                repuCheckedValue.push(el.val);
              }
            });
            this.person_one_details.alternate_duties = this.person_one_details.returnToAlernateDuties;
            this.person_one_details.date_of_birth = this.person_one_details.dateOfBirth;
            this.person_one_details.duties_explanation = this.person_one_details.explanation;
            this.person_one_details.initital_injury = this.person_one_details.injury_value.join(',');
            this.person_one_details.injured_person_option = this.person_one_details.fullNameOfInjuredPerson;
            this.person_one_details.injured_person_option_value = this.person_one_details.other_name;
            this.person_one_details.normal_duties = this.person_one_details.returnToNormalDuties;
            this.person_one_details.part_of_body_injured_occured = this.person_one_details.partOfBodyInjured;
            this.person_one_details.was_immediate_treatment = this.person_one_details.immediateTreatment;
            this.person_one_details.immediate_treatment_given_explanation = this.person_one_details.immediateTreatmentGivenExplanation;
            this.person_one_details.immediate_treatment_person_name = this.person_one_details.administeredPersonName;
            this.person_one_details.immediate_treatment_person_number = this.person_one_details.adminsteredPersonNumber;
            this.person_two_details.alternate_duties = this.person_two_details.returnToAlernateDuties;
            this.person_two_details.date_of_birth = this.person_two_details.dateOfBirth;
            this.person_two_details.duties_explanation = this.person_two_details.explanation;
            this.person_two_details.initital_injury = this.person_two_details.injury_value.join(',');
            this.person_two_details.injured_person_option = this.person_two_details.fullNameOfInjuredPerson;
            this.person_two_details.injured_person_option_value = this.person_two_details.other_name;
            this.person_two_details.normal_duties = this.person_two_details.returnToNormalDuties;
            this.person_two_details.part_of_body_injured_occured = this.person_two_details.partOfBodyInjured;
            this.person_two_details.was_immediate_treatment = this.person_two_details.immediateTreatment;
            this.person_two_details.immediate_treatment_given_explanation = this.person_two_details.immediateTreatmentGivenExplanation;
            this.person_two_details.immediate_treatment_person_name = this.person_two_details.administeredPersonName;
            this.person_two_details.immediate_treatment_person_number = this.person_two_details.adminsteredPersonNumber;
            this.person_three_details.alternate_duties = this.person_three_details.returnToAlernateDuties;
            this.person_three_details.date_of_birth = this.person_three_details.dateOfBirth;
            this.person_three_details.duties_explanation = this.person_three_details.explanation;
            this.person_three_details.initital_injury = this.person_three_details.injury_value.join(',');
            this.person_three_details.injured_person_option = this.person_three_details.fullNameOfInjuredPerson;
            this.person_three_details.injured_person_option_value = this.person_three_details.other_name;
            this.person_three_details.normal_duties = this.person_three_details.returnToNormalDuties;
            this.person_three_details.part_of_body_injured_occured = this.person_three_details.partOfBodyInjured;
            this.person_three_details.was_immediate_treatment = this.person_three_details.immediateTreatment;
            this.person_three_details.immediate_treatment_given_explanation = this.person_three_details.immediateTreatmentGivenExplanation;
            this.person_three_details.immediate_treatment_person_name = this.person_three_details.administeredPersonName;
            this.person_three_details.immediate_treatment_person_number = this.person_three_details.adminsteredPersonNumber;
            this.person_four_details.alternate_duties = this.person_four_details.returnToAlernateDuties;
            this.person_four_details.date_of_birth = this.person_four_details.dateOfBirth;
            this.person_four_details.duties_explanation = this.person_four_details.explanation;
            this.person_four_details.initital_injury = this.person_four_details.injury_value.join(',');
            this.person_four_details.injured_person_option = this.person_four_details.fullNameOfInjuredPerson;
            this.person_four_details.injured_person_option_value = this.person_four_details.other_name;
            this.person_four_details.normal_duties = this.person_four_details.returnToNormalDuties;
            this.person_four_details.part_of_body_injured_occured = this.person_four_details.partOfBodyInjured;
            this.person_four_details.was_immediate_treatment = this.person_four_details.immediateTreatment;
            this.person_four_details.immediate_treatment_given_explanation = this.person_four_details.immediateTreatmentGivenExplanation;
            this.person_four_details.immediate_treatment_person_name = this.person_four_details.administeredPersonName;
            this.person_four_details.immediate_treatment_person_number = this.person_four_details.adminsteredPersonNumber;
            var requiredData = {
              descriptionIncident: this.descriptionIncident,
              immediateAction: this.immediateAction,
              environmentActionTaken: this.environmentActionTaken,
              nameOfAnyWitness: this.nameOfAnyWitness,
              contactOfAnyWitness: this.contactOfAnyWitness,
              possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
              assetDescription: this.assetDescription,
              extentOfDamage: this.extentOfDamage,
              doneDifferently: this.doneDifferently
            };
            var nonRequirementIncident = {
              incidentRadio: this.incedent,
              whoWitnessedNearThis: this.whoWitnessedNearThis,
              possibleConsequence: this.possibleConsequence
            };
            var classificationObjectData = {
              ClassificationCheckBoxCollectionData: this.classificationChekBox,
              radioBtnValueofClassficationRadio: this.location,
              dropDownofShiftType: this.shiftType,
              superVisorDropdownValue: this.superVisor,
              addLocation: '',
              locationSelection: '',
              nameOfManager: this.nameOfManager,
              locationRadioValue: this.location
            };

            if (this.location === 'Add Location') {
              classificationObjectData.addLocation = this.addLocation;
            }

            if (this.location === 'Choose Location') {
              classificationObjectData.locationSelection = this.locationSelection;
            }

            var photoGraphyData = {
              image: this.imagePath
            };
            var incidentDataObject = {
              image: '',
              alcoholTest: this.alcoholTest
            };

            if (this.insertPhotoisChecked) {
              var imageData = {
                image: this.imagePath2
              };
              incidentDataObject.image = this.imagePath2;
            }

            var environmentalDataColletion = {
              chemicalSplit: this.chemicalSplit,
              nameOfChemical: '',
              image: '',
              approximateQtyofChemical: '',
              emergencySpill: this.emergencySpill
            };

            if (this.chemicalSplit === 'Yes') {
              environmentalDataColletion.nameOfChemical = this.nameOfChemical;
              environmentalDataColletion.image = this.imagePath3;
              environmentalDataColletion.approximateQtyofChemical = this.approximateQtyofChemical;
            }

            var reputationCollectionData = {
              image: this.imagePath4,
              individualReputationDamaged: '',
              companyReputationDamged: '',
              reputationCheckBox: this.reputationCheckBox
            };

            if (this.individualChecked) {
              reputationCollectionData.individualReputationDamaged = this.individualReputationDamaged;
            }

            if (this.companyChecked) {
              reputationCollectionData.companyReputationDamged = this.companyReputatonDamaged;
            }

            var securityCollectionData = {
              securityRadiovalue: this.securityRadio,
              itsecurityCheckbox: ''
            };

            if (this.securityRadio == 'IT') {
              securityCollectionData.itsecurityCheckbox = this.itsecurityCheckbox;
            }

            var assetCollectionData = {
              assetNumberRadioValue: this.assetNumber,
              image: this.imagePath5,
              assetsNumbers: ''
            };

            if (this.assetNumber == 'Yes') {
              assetCollectionData.assetsNumbers = this.assetsNumbers;
            }

            ;

            if (this.person_one_details.returnToNormalDuties === 'Yes') {
              this.person_one_details.returnToAlernateDuties = '';
            }

            if (this.person_two_details.returnToNormalDuties === 'Yes') {
              this.person_two_details.returnToAlernateDuties = '';
            }

            if (this.person_three_details.returnToNormalDuties === 'Yes') {
              this.person_three_details.returnToAlernateDuties = '';
            } //4


            if (this.person_four_details.returnToNormalDuties === 'Yes') {
              this.person_four_details.returnToAlernateDuties = '';
            }

            if (this.image3Uri !== '') {
              this.checmicalDetails.chemical_photo = this.image3Uri;
            }

            var fd = new FormData();

            if (this.imageUri !== '') {
              fd.append("photography_image", this.imagePath);
            }

            if (this.image4Uri !== '') {
              fd.append("reputation_damage_image", this.imagePath4);
            }

            if (this.image5Uri !== '') {
              fd.append("extent_damage_image", this.imagePath5);
            }

            fd.append("id", this.id);
            fd.append("incident_value", this.incedent);
            fd.append("incident_near_miss", this.whoWitnessedNearThis);
            fd.append("incident_near_miss_other", this.possibleConsequence);
            fd.append("classification_value", classiCheckedValue.join(','));
            fd.append("classification_location_option", this.location);

            if (this.location == 'Add Location') {
              fd.append("classification_location_value", this.addLocation);
            }

            if (this.location == 'Choose Location') {
              fd.append("classification_location_value", this.locationSelection);
            } //extra field added in database


            fd.append("date_of_incident", this.dateOfIncident);
            fd.append("time_of_incident", this.timeOfIncident);
            fd.append("date_reported", this.dateReported);
            fd.append("time_reported", this.timeReported);
            fd.append("alcohol_test_completed", this.alcoholTest);
            fd.append("drug_test_completed", this.drugTest);
            fd.append("what_has_been_stolen_item", this.stolenItem);
            fd.append("what_is_the_specific_securities_incident", this.specificSecurityIncident);
            fd.append("approximate_value_of_stolen", this.approximateValueOfStolen);
            fd.append("classification_shift_type", this.shiftType);
            fd.append("classification_supervisor", this.superVisor);
            fd.append("classification_manager", this.nameOfManager);
            fd.append("incident_description", this.descriptionIncident);
            fd.append("incident_description_action", this.immediateAction); //incident photo pending from postman and here also 

            fd.append("incident_description_alcohol_test", this.alcoholTest);
            fd.append("injury_persons", this.formCount); //form value

            fd.append("environmental_description", this.environmentActionTaken);
            fd.append("was_a_chemical_split", this.chemicalSplit); //checmical split value inner side query

            fd.append("emergency_spill_kit_used", this.emergencySpill);
            fd.append("reputation_option", repuCheckedValue);

            if (this.individualChecked) {
              fd.append("individual_damage_value", this.individualReputationDamaged);
            }

            if (this.companyChecked) {
              fd.append("company_damage_value", this.companyReputatonDamaged);
            }

            if (this.image2Uri !== '') {
              fd.append("incident_description_photo", this.imagePath2);
            }

            fd.append("reutation_negative_effect", this.nagativeEffetct);
            fd.append("name_of_witness", this.nameOfAnyWitness);
            fd.append("contact_of_witness", this.contactOfAnyWitness);
            fd.append("possible_outcome_incident", this.possibleOutcomeOfIncident);
            fd.append("security_option", this.securityRadio);

            if (this.securityRadio == 'IT') {
              fd.append("it_option_value", it_option_value.join(',')); // chexkbox and inner value
            }

            fd.append("asset_description", this.assetDescription);
            fd.append("asset_has_number", this.assetNumber);

            if (this.assetNumber == 'Yes') {
              fd.append("asset_number", this.assetsNumbers);
            }

            fd.append("extent_of_damage", this.extentOfDamage);
            fd.append("report", this.doneDifferently);
            fd.append("person_details", JSON.stringify(this.personDetails));
            fd.append("chemical_details", JSON.stringify(this.checmicalDetails));
            fd.append("return_to_alternate_duties", this.returnToAlternateDuties);
            fd.append("return_to_alternate_duties_image", this.returnToDutiesImage);
            this.global.presentLoading();
            this.global.postData("api/Add_form/submit_incomplete", fd).subscribe(function (res) {
              if (res.status) {
                _this7.global.presentToast(res.message);

                _this7.nav.navigateRoot("form-list");

                _this7.global.dismissLoading();
              } else {
                _this7.global.presentToast(res.message);

                _this7.global.dismissLoading();
              }
            }, function (err) {
              _this7.global.dismissLoading();
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
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event, e) {
            var _this8 = this;

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                if (e == 1) {
                  _this8.imagePath = event.target.result;
                }

                if (e == 2) {
                  _this8.imagePath2 = event.target.result;
                }

                if (e == 3) {
                  _this8.imagePath3 = event.target.result;
                }

                if (e == 4) {
                  _this8.imagePath4 = event.target.result;
                }

                if (e == 5) {
                  _this8.imagePath5 = event.target.result;
                }

                if (e == 7) {
                  _this8.returnToDutiesImage = event.target.result;
                }
              };
            }
          }
        }, {
          key: "dateSelect",
          value: function dateSelect(e, from) {
            if (from == 'incident') {
              this.dateOfIncident = moment__WEBPACK_IMPORTED_MODULE_7__(e.detail.value).format("YYYY-MM-DD");
            } else {
              this.dateReported = moment__WEBPACK_IMPORTED_MODULE_7__(e.detail.value).format("YYYY-MM-DD");
            }
          }
        }, {
          key: "timeSelect",
          value: function timeSelect(e, from) {
            if (from == 'timeIncident') {
              this.timeOfIncident = e.detail.value;
            } else {
              this.timeReported = e.detail.value;
            }
          }
        }]);

        return EditPage;
      }();

      _EditPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
        }, {
          type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__.Base64
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }];
      };

      _EditPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit',
        template: _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditPage);

      function typeOf(id) {
        throw new Error('Function not implemented.');
      }
      /***/

    },

    /***/
    47442:
    /*!*******************************************!*\
      !*** ./src/app/pages/edit/edit.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerStyle {\n  background: white;\n  margin-top: -24px;\n  border-top-left-radius: 32px;\n  height: 30px;\n  border-top-right-radius: 32px;\n  border-bottom: white;\n  border-bottom-width: 0;\n}\n\n.saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\n\n.toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\n\n.back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\n\nion-content ion-label {\n  white-space: normal;\n}\n\nion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\n\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n  padding-bottom: 0px;\n}\n\nion-content .container .logo {\n  padding-top: 80px;\n}\n\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\n\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 21px;\n}\n\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\nion-content .container .input-div {\n  margin-top: 25px;\n}\n\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\n\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\n\nion-content .btnView {\n  margin-top: 100px;\n}\n\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\n\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n}\n\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\n\nion-content .questionHead {\n  font-family: mon-black;\n}\n\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\n\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\n\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\n\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\n\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n  text-transform: capitalize;\n}\n\nion-content ion-radio {\n  margin-right: 7px;\n}\n\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\n\nion-content ion-col {\n  padding: 0;\n}\n\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\n\nion-content .question {\n  font-size: 14px !important;\n}\n\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\n\nion-content ion-select {\n  width: 100%;\n  background: white;\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\n\nion-content ion-input {\n  background: white;\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\n\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\n\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\n\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\n\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\n\n.btnSubmit {\n  margin: 0;\n  height: 44px;\n  font-family: \"mon-medium\";\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsaUJBQUE7RUFDSixpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ00sa0JBQUE7RUFDRixRQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFERTtFQUNFLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkU7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUhJO0VBQ0UsaUJBQUE7QUFLTjs7QUFISTtFQUNFLHdCQUFBO0FBS047O0FBSk07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBTVI7O0FBSk07RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTVI7O0FBSEk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUtOOztBQUhJO0VBQ0UsZ0JBQUE7QUFLTjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLGlCQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFISTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBS047O0FBSEk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBS047O0FBRkU7RUFDRSxzQkFBQTtBQUlKOztBQUZFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUZJO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlOOztBQUZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSU47O0FBSE07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUtSOztBQURFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFESTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFHTjs7QUFBRTtFQUNFLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSx1Q0FBQTtBQUVKOztBQUFFO0VBQ0UsVUFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQ0FBQTtBQUVKOztBQUFFO0VBQ0UsMEJBQUE7QUFFSjs7QUFBRTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFESTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUFHTjs7QUFGTTtFQUNFLHVCQUFBO0FBSVI7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0FBREo7O0FBR0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtBQURKOztBQUdFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDUSxTQUFBO0VBQ0osWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBREo7O0FBRUc7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclN0eWxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbi5zYXZlQnRue1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzBweDtcbn1cbi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICBmb250LXNpemU6IDE5cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAyOXB4O1xuICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICBmb250LXNpemU6IDI5cHg7XG59XG5pb24tY29udGVudCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuICAudG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzJweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC5sb2dvIHtcbiAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgIH1cbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dpbi1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuaW5wdXQtZGl2IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG4gIC5iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuYnRuVmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbiAgLnBsdXMge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5pbmNpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBjb2xvcjogIzMxMzEzMTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuICAucXVlc3Rpb25IZWFkIHtcbiAgICBmb250LWZhbWlseTogbW9uLWJsYWNrO1xuICB9XG4gIC5hY3RpdmVCYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgY29sb3I6ICMzMTMxMzE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oZWFkZXJUaXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDMzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5yYSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gIH1cbiAgaW9uLXJhZGlvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBpb24tY2hlY2tib3gge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgfVxuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGhyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgaW9uLXJhZGlvIHtcbiAgICAtLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgfVxuICAucXVlc3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1saXN0IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcblxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5sYWJlbEN1c3RvbURyb3BEb3duIHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgfVxuICAuY2FtZXJhIHtcbiAgICBmb250LWZhbWlseTogbW9uLW1lZGl1bTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIGlvbi1kYXRldGltZSB7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICB9XG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuLmJ0blN1Ym1pdHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBmb250LWZhbWlseTogJ21vbi1tZWRpdW0nO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfS5pbWctcmVzcG9uc2l2ZXtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgd2lkdGg6MjUwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    1062:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"toolbar\">\n      <ion-text>EDIT FORM</ion-text>\n      <ion-buttons class=\"back\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n      <ion-buttons class='saveBtn' (click)=\"saveItemOffline()\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"headerStyle\"></div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"container\">\n    <p>Incident Report</p>\n  </div>\n  <div class=\"ion-padding-start ion-padding-end\">\n    <div *ngFor=\"let item of data\">\n      <ion-button class=\"inci\" *ngIf=\"selected!==item\" (click)=\"checkDetails(item)\">\n        <p>{{item}}</p>\n        <img class=\"plus\" src=\"./assets/add.png\" />\n      </ion-button>\n      <div *ngIf=\"selected==item && selected=='Incident'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-radio-group [(ngModel)]=\"incedent\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Actual</ion-label>\n                <ion-radio slot=\"start\" value=\"Actual\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Near Miss</ion-label>\n                <ion-radio slot=\"start\" value=\"Near Miss\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Serious potential incident (SPI)</ion-label>\n                <ion-radio slot=\"start\" value=\"Serious potential incident (SPI)\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"incedent == 'Near Miss'\">\n          <p class=\"question\">Who witnessed the near miss?</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"whoWitnessedNearThis\">\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n          <p class=\"question\">\n            Possible consequence under different circumstances\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"possibleConsequence\"></ion-input>\n        </div>\n      </div>\n\n      <!-------------------------------------------------Classification---------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Classification'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-list class=\"ion-no-padding\">\n          <ion-row class='ion-no-padding'>\n            <ion-col size=\"6\" *ngFor=\"let entry of classificationChekBox\">\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\n                <ion-label>{{entry.val}}</ion-label>\n                <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date of Incident</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event,'incident')\"\n            [(ngModel)]=\"dateOfIncident\">\n          </ion-datetime>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time of Incident</ion-label>\n          <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Select Time\" (ionChange)=\"timeSelect($event,'timeIncident')\"\n            [(ngModel)]=\"timeOfIncident\">\n          </ion-datetime>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date Reported</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event,'reported')\"\n            [(ngModel)]=\"dateReported\">\n          </ion-datetime>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time Reported</ion-label>\n          <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Select Time\" (ionChange)=\"timeSelect($event,'timeReported')\"\n            [(ngModel)]=\"timeReported\">\n          </ion-datetime>\n        </ion-item>\n        <ion-radio-group [(ngModel)]=\"location\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Add Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Add Location\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Choose Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Choose Location\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"location=='Add Location'\">\n          <p class=\"question\">Add Location</p>\n          <ion-input placeholder=\"Please add the location\" [(ngModel)]=\"addLocation\"></ion-input>\n        </div>\n        <div *ngIf=\"location == 'Choose Location'\">\n          <p class=\"question\">Choose Location</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-select placeholder=\"Select Location\" interface=\"action-sheet\" [(ngModel)]=\"locationSelection\">\n              <ion-select-option value=\"{{item?.location_name}}\" *ngFor=\"let item of locationList\">\n                {{item?.location_name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Shift Type\" interface=\"action-sheet\" [(ngModel)]='shiftType'>\n            <ion-select-option value=\"{{item?.shift_type}}\" *ngFor=\"let item of shiftTypeList\">{{item?.shift_type}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Supervisor\" interface=\"action-sheet\" [(ngModel)]=\"superVisor\">\n            <ion-select-option value=\"{{item?.full_name}}\" *ngFor=\"let item of superVisorList\">{{item?.full_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label class=\"labelCustomDropDown\">{{nameOfManager}}</ion-label>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\" (click)=\"openModal()\">\n              <ion-icon name=\"chevron-down\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </div>\n      <!-------------------------------------------------Classification---------------------------------------------->\n      <!-------------------------------------------------Photography------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Photography'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(1)\">Upload Image</ion-button>\n          <img src=\"{{imagePath}}\" class=\"img-responsive\" *ngIf=\"imagePath!==''\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input type='file' (change)=\"onSelectFile($event,1)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath!==''\"> <br />\n          </div>\n        </div>\n      </div>\n\n      <!-------------------------------------------------Photography-------------------------------------------------->\n      <!-------------------------------------------------Incident Description----------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Incident Description'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Description of incident ( note : You must not use any personal details\n          or names)\n        </p>\n        <ion-input placeholder=\"Description of incident\" [(ngModel)]=\"descriptionIncident\"></ion-input>\n        <p class=\"question\">Immediate action taken</p>\n        <ion-input placeholder=\"Immediate action taken\" [(ngModel)]=\"immediateAction\"></ion-input>\n        <p class=\"question\">Was there any Witnesses of the incident</p>\n        <ion-input placeholder=\"Witnesses of the incident\" [(ngModel)]=\"wasThereAnyWitnessOfIncident\"></ion-input>\n       \n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input *ngIf=\"insertPhotoisChecked\" type='file' (change)=\"onSelectFile($event,2)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath2\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath2!==''\"> <br />\n          </div>\n        </div>\n\n        <ion-radio-group [(ngModel)]=\"alcoholTest\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Alcohol test completed</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Not Required</ion-label>\n                <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group [(ngModel)]=\"drugTest\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Drug test completed</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Not Required</ion-label>\n                <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button *ngIf=\"drugTest=='Yes'\" class=\"camera\" expand=\"block\" (click)=\"selectImage(6)\">Upload Image\n          </ion-button>\n          <img src=\"{{drugImage}}\" *ngIf=\"drugImage!=='' && drugImage !== undefined && drugImage !== null\"\n            class=\"img-responsive\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova' \">\n          <input *ngIf=\"drugTest=='Yes'\" type='file' (change)=\"onSelectFile($event,6)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"drugImage\" height=\"200\" class=\"img-responsive\"\n              *ngIf=\"drugImage!=='' && drugImage !== undefined && drugImage !== null\"> <br />\n          </div>\n        </div>\n\n\n        <ion-radio-group [(ngModel)]=\"returnToAlternateDuties\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Return to Alternate Duties</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Not Required</ion-label>\n                <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-text class=\"mandatoryField\">* If selected yes please take a photo or upload the Certificate of Capacity COC.</ion-text>\n        </ion-radio-group>\n\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button *ngIf=\"returnToAlternateDuties=='Yes'\" class=\"camera\" expand=\"block\" (click)=\"selectImage(7)\">Upload Image\n          </ion-button>\n          <img src=\"{{returnToDutiesImage}}\" *ngIf=\"returnToDutiesImage!==''\" class=\"img-responsive\" />\n        </div>\n\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input *ngIf=\"returnToAlternateDuties=='Yes'\" type='file' (change)=\"onSelectFile($event,7)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"returnToDutiesImage\" height=\"200\" class=\"img-responsive\" *ngIf=\"returnToDutiesImage!==''\"> <br />\n          </div>\n        </div>\n\n\n      </div>\n      <!-------------------------------------------------Incident Description----------------------------------------->\n      <!-------------------------------------------------Injury------------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Injury'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-radio-group [(ngModel)]=\"formCount\" (ionChange)=\"itemsChangeForm($event)\">\n          <ion-row>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>1</ion-label>\n                <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>2</ion-label>\n                <ion-radio slot=\"start\" value=\"2\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>3</ion-label>\n                <ion-radio slot=\"start\" value=\"3\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>4</ion-label>\n                <ion-radio slot=\"start\" value=\"4\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <ion-card *ngIf=\"itemsArray.length>=1\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 1 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"{{person_one_details.injured_person_option}}\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_one_details.fullNameOfInjuredPerson\"\n              value={{person_one_details.injured_person_option}}>\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_one_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_one_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\" mode=\"ios\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_one_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n          <ion-radio-group [(ngModel)]=\"person_one_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"person_one_details.returnToNormalDuties === 'No'\">\n            <ion-radio-group [(ngModel)]=\"person_one_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_one_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_one_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.partOfBodyInjured\"></ion-input>\n          </div>\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_one_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_one_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n          <div *ngIf=\"person_one_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_one_details.administeredPersonName\"></ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_one_details.adminsteredPersonNumber\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"ion-text-center\">\n            <img src=\"./assets/person.jpg\" class=\"img-responsive\">\n          </div>\n        </ion-card>\n        <ion-card *ngIf=\"itemsArray.length>=2\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 2 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_two_details.fullNameOfInjuredPerson\">\n\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_two_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_two_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_two_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n          <ion-radio-group [(ngModel)]=\"person_two_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"person_two_details.returnToNormalDuties === 'No'\">\n            <ion-radio-group [(ngModel)]=\"person_two_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_two_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_two_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.partOfBodyInjured\"></ion-input>\n          </div>\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_two_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_two_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n          <div *ngIf=\"person_two_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_two_details.administeredPersonName\"></ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_two_details.adminsteredPersonNumber\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"ion-text-center\">\n            <img src=\"./assets/person.jpg\" class=\"img-responsive\">\n          </div>\n        </ion-card>\n        <ion-card *ngIf=\"itemsArray.length>=3\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 3 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_three_details.fullNameOfInjuredPerson\">\n\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_three_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_three_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_three_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n          <ion-radio-group [(ngModel)]=\"person_three_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"person_three_details.returnToNormalDuties === 'No'\">\n            <ion-radio-group [(ngModel)]=\"person_three_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_three_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_three_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.partOfBodyInjured\"></ion-input>\n          </div>\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_three_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_three_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n          <div *ngIf=\"person_three_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_three_details.administeredPersonName\">\n              </ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_three_details.adminsteredPersonNumber\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"ion-text-center\">\n            <img src=\"./assets/person.jpg\" class=\"img-responsive\">\n          </div>\n        </ion-card>\n        <ion-card *ngIf=\"itemsArray.length>=4\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 4 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_four_details.fullNameOfInjuredPerson\">\n\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_four_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_four_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_four_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n          <ion-radio-group [(ngModel)]=\"person_four_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"person_four_details.returnToNormalDuties === 'No'\">\n            <ion-radio-group [(ngModel)]=\"person_four_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_four_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_four_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.partOfBodyInjured\"></ion-input>\n          </div>\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_four_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_four_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n          <div *ngIf=\"person_four_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_four_details.administeredPersonName\"></ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_four_details.adminsteredPersonNumber\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"ion-text-center\">\n            <img src=\"./assets/person.jpg\" class=\"img-responsive\">\n          </div>\n        </ion-card>\n      </div>\n      <!-------------------------------------------------Injury------------------------------------------------------->\n      <!-------------------------------------------------Environmental------------------------------------------------>\n      <div *ngIf=\"selected==item && selected=='Environmental'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Immediate action taken to minimize Environmental impact\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"environmentActionTaken\"></ion-input>\n        <ion-radio-group [(ngModel)]=\"chemicalSplit\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was a chemical split?</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"chemicalSplit==='Yes'\">\n          <p class=\"question\">\n            Name of chemical\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"nameOfChemical\"></ion-input>\n          <ion-list>\n            <ion-item class=\"ra ion-no-padding\" lines=\"none\">\n              <ion-label>Insert Photo</ion-label>\n              <ion-checkbox slot=\"start\" [(ngModel)]=\"insertPhotoisChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <div *ngIf=\"platformCheck==='cordova'\">\n            <div *ngIf=\"insertPhotoisChecked\">\n              <ion-button *ngIf=\"insertPhotoisChecked\" class=\"camera\" expand=\"block\" (click)=\"selectImage(3)\">Upload\n                Image\n              </ion-button>\n              <img src=\"{{imagePath3}}\" *ngIf=\"imagePath3!==''\" class=\"img-responsive\" />\n            </div>\n          </div>\n          <div *ngIf=\"platformCheck !== 'cordova'\">\n            <input *ngIf=\"insertPhotoisChecked\" type='file' (change)=\"onSelectFile($event,3)\">\n            <div class=\"ion-text-center\">\n              <img [src]=\"imagePath3\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath3!==''\"> <br />\n            </div>\n          </div>\n          <p class=\"question\">\n            Approximate quantity of chemical spilled\n          </p>\n          <ion-input placeholder=\"Enter here\" type=\"tel\" [(ngModel)]=\"approximateQtyofChemical\"></ion-input>\n        </div>\n        <ion-radio-group [(ngModel)]=\"emergencySpill\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the emergency spill kit used?</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </div>\n      <!-------------------------------------------------Environmental------------------------------------------------>\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Reputation'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label>Was the reputation damages an individual or Company ?\n          </ion-label>\n        </ion-item>\n        <ion-list class=\"ion-no-padding\">\n          <ion-item *ngFor=\"let entry of reputationCheckBox\" lines=\"none\" class=\"ion-no-padding\">\n            <ion-label>{{entry.val}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\" (ionChange)=\"reputationCheckboxEvent($event,entry)\">\n            </ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <div *ngIf=\"individualChecked\">\n          <p class=\"question\">\n            How has the Individual's reputation been damaged?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"individualReputationDamaged\"></ion-input>\n        </div>\n        <div *ngIf=\"companyChecked\">\n          <p class=\"question\">\n            How has the Company's reputation been damaged?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"companyReputatonDamaged\"></ion-input>\n        </div>\n        <ion-radio-group [(ngModel)]=\"nagativeEffetct\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the negative effect internal or external</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Internal</ion-label>\n                <ion-radio slot=\"start\" value=\"Internal\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>External</ion-label>\n                <ion-radio slot=\"start\" value=\"External\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Both</ion-label>\n                <ion-radio slot=\"start\" value=\"Both\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <p class=\"question\">\n          Name of any witness\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"nameOfAnyWitness\"></ion-input>\n        <!-- <p class=\"question\">\n          Contact of any witness\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"contactOfAnyWitness\"></ion-input> -->\n        <p class=\"question\">\n          What is the possible outcome of this incident?\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"possibleOutcomeOfIncident\"></ion-input>\n        <!-- <p class=\"question\">\n          Upload evidence of the Reputation damage\n        </p> -->\n        <!-- <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(4)\">Upload Image</ion-button>\n        <img src=\"{{imagePath4}}\" *ngIf=\"imagePath4!==''\" /> -->\n        <!-- <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(4)\">Upload Image</ion-button>\n          <img src=\"{{imagePath4}}\" *ngIf=\"imagePath4!==''\" class=\"img-responsive\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input type='file' (change)=\"onSelectFile($event,4)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath4\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath4!==''\"> <br />\n          </div>\n        </div> -->\n      </div>\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n      <!-------------------------------------------------Security----------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Security'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-radio-group [(ngModel)]=\"securityRadio\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>IT</ion-label>\n                <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Theft</ion-label>\n                <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Other</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"securityRadio=='IT'\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>What kind of IT Security Incident ?</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of itsecurityCheckbox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n        <div *ngIf=\"securityRadio=='Theft'\">\n          <p class=\"question\">\n            What has been stolen ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"stolenItem\"></ion-input>\n          <p class=\"question\">\n            Approximate value of stolen item ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"approximateValueOfStolen\"></ion-input>\n          <p class=\"question\">\n            What is the specific Security incident ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]='specificSecurityIncident'></ion-input>\n        </div>\n      </div>\n      <!-------------------------------------------------Security----------------------------------------------------->\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Asset'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Asset description\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"assetDescription\"></ion-input>\n        <ion-radio-group [(ngModel)]=\"assetNumber\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Does Asset have a number</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"assetNumber=='Yes'\">\n          <p class=\"question\">\n            Asset Number\n          </p>\n          <ion-input placeholder=\"Enter here\" type=\"tel\" [(ngModel)]=\"assetsNumbers\"></ion-input>\n        </div>\n        <p class=\"question\">\n          Extent of Damage\n        </p>\n        <ion-input placeholder=\"Extent of Damage\" [(ngModel)]=\"extentOfDamage\"></ion-input>\n        <p class=\"question\">\n          Upload photo of damage\n        </p>\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(5)\">Upload Image</ion-button>\n          <img src=\"{{imagePath5}}\" *ngIf=\"imagePath5!==''\" class=\"img-responsive\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input type='file' (change)=\"onSelectFile($event,5)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath5\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath5!==''\"> <br />\n          </div>\n        </div>\n      </div>\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n      <!-------------------------------------------------Report------------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Report'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          What could have done differently?\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"doneDifferently\"></ion-input>\n      </div>\n      <!-------------------------------------------------Report------------------------------------------------------->\n    </div>\n  </div>\n\n  <ion-button (click)=\"onSubmit()\" class=\"btnSubmit\" expand=\"full\">UPDATE</ion-button>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_edit_edit_module_ts-es5.js.map