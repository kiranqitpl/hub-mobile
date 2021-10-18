(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_view_view_module_ts"],{

/***/ 92047:
/*!***************************************************!*\
  !*** ./src/app/pages/view/view-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageRoutingModule": function() { return /* binding */ ViewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page */ 29014);




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ 89760:
/*!*******************************************!*\
  !*** ./src/app/pages/view/view.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageModule": function() { return /* binding */ ViewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-routing.module */ 92047);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page */ 29014);







let ViewPageModule = class ViewPageModule {
};
ViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPageRoutingModule
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_1__.ViewPage]
    })
], ViewPageModule);



/***/ }),

/***/ 29014:
/*!*****************************************!*\
  !*** ./src/app/pages/view/view.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPage": function() { return /* binding */ ViewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view.page.html */ 17616);
/* harmony import */ var _view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page.scss */ 17466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/managers/managers.page */ 58127);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 67871);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global.service */ 97465);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 31531);











let ViewPage = class ViewPage {
    constructor(nav, modal, camera, actionSheetController, file, global, base64, activatedRoute) {
        this.nav = nav;
        this.modal = modal;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.global = global;
        this.base64 = base64;
        this.activatedRoute = activatedRoute;
        this.data = [
            'Incident',
            'Classification',
            'Photography',
            'Incident Description',
            'Injury',
            'Environmental',
            'Reputation',
            'Security',
            'Asset',
            'Report',
        ];
        this.itsecurityCheckbox = [
            {
                val: 'Intrusion',
                isChecked: false,
            },
            {
                val: 'Ransom ware',
                isChecked: false,
            },
            {
                val: 'Privacy breach',
                isChecked: false,
            },
            {
                val: 'Intellectual',
                isChecked: false,
            },
        ];
        this.classificationChekBox = [
            {
                val: 'Injury',
                isChecked: false,
            },
            {
                val: 'Environmental',
                isChecked: false,
            },
            {
                val: 'Reputation',
                isChecked: false,
            },
            {
                val: 'Security',
                isChecked: false,
            },
            {
                val: 'Asset',
                isChecked: false,
            },
            {
                val: 'Report only',
                isChecked: false,
            },
        ];
        this.injuryCheckBox = [
            {
                val: 'FAI',
                isChecked: false,
            },
            {
                val: 'MTI',
                isChecked: false,
            },
            {
                val: 'ADI',
                isChecked: false,
            },
            {
                val: 'LTL',
                isChecked: false,
            },
            {
                val: 'Head',
                isChecked: false,
            },
            {
                val: 'Limbs',
                isChecked: false,
            },
            {
                val: 'Torso',
                isChecked: false,
            },
        ];
        this.reputationCheckBox = [
            {
                val: 'Individual',
                isChecked: false,
            },
            {
                val: 'Company',
                isChecked: false,
            },
        ];
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
                chemical_photo: this.image3Uri,
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
            injurryCheckBox: [
                {
                    val: 'FAI',
                    isChecked: false,
                },
                {
                    val: 'MTI',
                    isChecked: false,
                },
                {
                    val: 'ADI',
                    isChecked: false,
                },
                {
                    val: 'LTL',
                    isChecked: false,
                },
                {
                    val: 'Head',
                    isChecked: false,
                },
                {
                    val: 'Limbs',
                    isChecked: false,
                },
                {
                    val: 'Torso',
                    isChecked: false,
                },
            ]
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
            injurryCheckBox: [
                {
                    val: 'FAI',
                    isChecked: false,
                },
                {
                    val: 'MTI',
                    isChecked: false,
                },
                {
                    val: 'ADI',
                    isChecked: false,
                },
                {
                    val: 'LTL',
                    isChecked: false,
                },
                {
                    val: 'Head',
                    isChecked: false,
                },
                {
                    val: 'Limbs',
                    isChecked: false,
                },
                {
                    val: 'Torso',
                    isChecked: false,
                },
            ]
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
            injurryCheckBox: [
                {
                    val: 'FAI',
                    isChecked: false,
                },
                {
                    val: 'MTI',
                    isChecked: false,
                },
                {
                    val: 'ADI',
                    isChecked: false,
                },
                {
                    val: 'LTL',
                    isChecked: false,
                },
                {
                    val: 'Head',
                    isChecked: false,
                },
                {
                    val: 'Limbs',
                    isChecked: false,
                },
                {
                    val: 'Torso',
                    isChecked: false,
                },
            ]
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
            injurryCheckBox: [
                {
                    val: 'FAI',
                    isChecked: false,
                },
                {
                    val: 'MTI',
                    isChecked: false,
                },
                {
                    val: 'ADI',
                    isChecked: false,
                },
                {
                    val: 'LTL',
                    isChecked: false,
                },
                {
                    val: 'Head',
                    isChecked: false,
                },
                {
                    val: 'Limbs',
                    isChecked: false,
                },
                {
                    val: 'Torso',
                    isChecked: false,
                },
            ]
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
            quality: 50,
        };
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        // let data = JSON.parse(localStorage.getItem('singleView'));
        this.global.presentLoading();
        let data = "";
        this.activatedRoute.params.subscribe((params) => {
            // console.log(params['incident_id']);
            this.global.getData('api/add_form/getIncidentFormByID/' + params['form_id']).subscribe(result => {
                console.log('ionViewWillEnter', result['data'][0]);
                data = result['data'][0];
                if (data != "") {
                    this.what_has_been_stolen_item = data['what_has_been_stolen_item'];
                    this.approximate_value_of_stolen = data['approximate_value_of_stolen'];
                    this.dateReported = data['date_reported'];
                    this.dateOfIncident = data['date_of_incident'];
                    this.timeOfIncident = data['time_of_incident'];
                    this.timeReported = data['time_reported'];
                    this.what_is_the_specific_securities_incident = data['what_is_the_specific_securities_incident'];
                    this.drugTest = data['drug_test_completed'];
                    this.timeReported = data['time_reported'];
                    this.id = data['id'];
                    this.incedent = data['incident_value'];
                    this.whoWitnessedNearThis = data['incident_near_miss'];
                    this.possibleConsequence = data['incident_near_miss_other'];
                    let classification_value = data['classification_value'].split(",");
                    this.classificationChekBox = classification_value;
                    this.location = data['classification_location_option'];
                    if (this.location == 'Add Location') {
                        this.addLocation = data['classification_location_value'];
                    }
                    if (this.location == 'Choose Location') {
                        this.locationSelection = data['classification_location_value'];
                    }
                    this.shiftType = data['classification_shift_type'];
                    this.superVisor = data['classification_supervisor'];
                    this.nameOfManager = data['classification_manager'];
                    this.imagePath = data['photography_image'];
                    this.descriptionIncident = data['incident_description'];
                    this.immediateAction = data['incident_description_action'];
                    if (data['incident_description_photo'] !== '') {
                        if (data['incident_description_photo'] !== "undefined") {
                            this.insertPhotoisChecked = true;
                            this.imagePath2 = data['incident_description_photo'];
                        }
                    }
                    this.alcoholTest = data['incident_description_alcohol_test'];
                    this.formCount = data['injury_persons'];
                    if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 1) {
                        this.itemsArray = [1];
                    }
                    if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 2) {
                        this.itemsArray = [1, 2];
                    }
                    if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 3) {
                        this.itemsArray = [1, 2, 3];
                    }
                    if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 4) {
                        this.itemsArray = [1, 2, 3, 4];
                    }
                    if (data && data['person_details'] && data['person_details'][0] && data['person_details'][0]['alternate_duties']) {
                        this.person_one_details = {
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
                            injurryCheckBox: [
                                {
                                    val: 'FAI',
                                    isChecked: false,
                                },
                                {
                                    val: 'MTI',
                                    isChecked: false,
                                },
                                {
                                    val: 'ADI',
                                    isChecked: false,
                                },
                                {
                                    val: 'LTL',
                                    isChecked: false,
                                },
                                {
                                    val: 'Head',
                                    isChecked: false,
                                },
                                {
                                    val: 'Limbs',
                                    isChecked: false,
                                },
                                {
                                    val: 'Torso',
                                    isChecked: false,
                                },
                            ]
                        };
                        let one = data['person_details'][0]['initital_injury'].split(",");
                        this.person_one_details.injurryCheckBox.forEach((el) => {
                            one.forEach((ele) => {
                                if (el.val == ele) {
                                    el.isChecked = true;
                                    this.o1.push(el);
                                }
                            });
                        });
                    }
                    if (data && data['person_details'] && data['person_details'][1] && data['person_details'][1]['alternate_duties']) {
                        this.person_two_details = {
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
                            injurryCheckBox: [
                                {
                                    val: 'FAI',
                                    isChecked: false,
                                },
                                {
                                    val: 'MTI',
                                    isChecked: false,
                                },
                                {
                                    val: 'ADI',
                                    isChecked: false,
                                },
                                {
                                    val: 'LTL',
                                    isChecked: false,
                                },
                                {
                                    val: 'Head',
                                    isChecked: false,
                                },
                                {
                                    val: 'Limbs',
                                    isChecked: false,
                                },
                                {
                                    val: 'Torso',
                                    isChecked: false,
                                },
                            ]
                        };
                        let two = data['person_details'][1]['initital_injury'].split(",");
                        this.person_one_details.injurryCheckBox.forEach((el) => {
                            two.forEach((ele) => {
                                if (el.val == ele) {
                                    el.isChecked = true;
                                    this.o2.push(el);
                                }
                            });
                        });
                    }
                    if (data && data['person_details'] && data['person_details'][2] && data['person_details'][2]['alternate_duties']) {
                        this.person_three_details = {
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
                            injurryCheckBox: [
                                {
                                    val: 'FAI',
                                    isChecked: false,
                                },
                                {
                                    val: 'MTI',
                                    isChecked: false,
                                },
                                {
                                    val: 'ADI',
                                    isChecked: false,
                                },
                                {
                                    val: 'LTL',
                                    isChecked: false,
                                },
                                {
                                    val: 'Head',
                                    isChecked: false,
                                },
                                {
                                    val: 'Limbs',
                                    isChecked: false,
                                },
                                {
                                    val: 'Torso',
                                    isChecked: false,
                                },
                            ]
                        };
                        let three = data['person_details'][2]['initital_injury'].split(",");
                        this.person_three_details.injurryCheckBox.forEach((el) => {
                            three.forEach((ele) => {
                                if (el.val == ele) {
                                    el.isChecked = true;
                                    this.o3.push(el);
                                }
                            });
                        });
                    }
                    if (data && data['person_details'] && data['person_details'][3] && data['person_details'][3]['alternate_duties']) {
                        this.person_four_details = {
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
                            injurryCheckBox: [
                                {
                                    val: 'FAI',
                                    isChecked: false,
                                },
                                {
                                    val: 'MTI',
                                    isChecked: false,
                                },
                                {
                                    val: 'ADI',
                                    isChecked: false,
                                },
                                {
                                    val: 'LTL',
                                    isChecked: false,
                                },
                                {
                                    val: 'Head',
                                    isChecked: false,
                                },
                                {
                                    val: 'Limbs',
                                    isChecked: false,
                                },
                                {
                                    val: 'Torso',
                                    isChecked: false,
                                },
                            ]
                        };
                        let four = data['person_details'][3]['initital_injury'].split(",");
                        this.person_four_details.injurryCheckBox.forEach((el) => {
                            four.forEach((ele) => {
                                if (el.val == ele) {
                                    el.isChecked = true;
                                    this.o4.push(el);
                                }
                            });
                        });
                    }
                    this.environmentActionTaken = data['environmental_description'];
                    this.chemicalSplit = data['was_a_chemical_split'];
                    this.nameOfChemical = data['chemical_details.chemical_name'];
                    this.approximateQtyofChemical = data['chemical_details.approximate_quantity'];
                    if (data && data['chemical_details'] && data['chemical_details'].chemical_photo !== '') {
                        this.insertPhotoisChecked = true;
                        this.imagePath3 = data['chemical_details'].chemical_photo;
                    }
                    this.emergencySpill = data['emergency_spill_kit_used'];
                    let reputationValue = data['reputation_option'].split(',');
                    this.reputationCheckBox.forEach((res) => {
                        reputationValue.forEach((eleme) => {
                            if (res.val === eleme) {
                                res.isChecked = true;
                                if (res.val == 'Individual') {
                                    this.individualChecked = true;
                                }
                                if (res.val == 'Company') {
                                    this.companyChecked = true;
                                }
                            }
                        });
                    });
                    if (this.formCount == "1") {
                        this.person_Array.push(this.person_one_details);
                    }
                    if (this.formCount == "2") {
                        this.person_Array.push(this.person_one_details);
                        this.person_Array.push(this.person_two_details);
                    }
                    if (this.formCount == "3") {
                        this.person_Array.push(this.person_one_details);
                        this.person_Array.push(this.person_two_details);
                        this.person_Array.push(this.person_three_details);
                    }
                    if (this.formCount == "4") {
                        this.person_Array.push(this.person_one_details);
                        this.person_Array.push(this.person_two_details);
                        this.person_Array.push(this.person_three_details);
                        this.person_Array.push(this.person_four_details);
                    }
                    if (this.individualChecked) {
                        this.individualReputationDamaged = data['individual_damage_value'];
                    }
                    if (this.companyChecked) {
                        this.companyReputatonDamaged = data['company_damage_value'];
                    }
                    this.nagativeEffetct = data['reputation_negative_effect'];
                    this.nameOfAnyWitness = data['name_of_witness'];
                    this.contactOfAnyWitness = data['contact_of_witness'];
                    this.possibleOutcomeOfIncident = data['possible_outcome_incident'];
                    if (data['reputation_damage_image'] !== '') {
                        this.imagePath4 = data['reputation_damage_image'];
                    }
                    this.securityRadio = data['security_option'];
                    if (this.securityRadio == 'IT') {
                        let t = data['it_option_value'].split(",");
                        this.itsecurityCheckbox.forEach((itsecurity) => {
                            t.forEach((ts) => {
                                if (itsecurity.val == ts) {
                                    itsecurity.isChecked = true;
                                }
                            });
                        });
                    }
                    this.assetDescription = data['asset_description'];
                    this.assetNumber = data['asset_has_number'];
                    this.assetsNumbers = data['asset_number'];
                    this.extentOfDamage = data['extent_of_damage'];
                    if (data['extent_damage_image'] !== '') {
                        this.imagePath5 = data['extent_damage_image'];
                    }
                    this.doneDifferently = data['report'];
                }
                else {
                    console.log("error");
                }
                this.global.dismissLoading();
            }), error => {
                this.global.dismissLoading();
                console.log(error);
            };
        });
    }
    itemsChangeForm(e) {
        let ee = JSON.parse(e.detail.value);
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
    reputationCheckboxEvent(e, entry) {
        this.reputationCheckBox.forEach((element) => {
            if (element.val === 'Individual') {
                this.individualChecked = element.isChecked;
            }
            else if (element.val === 'Company') {
                this.companyChecked = element.isChecked;
            }
        });
    }
    pickImage(sourceType, e) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // this.croppedImagePath = 'data:image/jpeg;base64,' + imageData;
            const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
            if (e == 1) {
                this.imagePath = 'data:image/jpeg;base64,' + imageData;
                let t = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
                let realData = this.imagePath.split(",")[1];
                let blob = this.b64toBlob(realData, 'image/jpeg');
                this.imageUri = imageData;
            }
            if (e == 2) {
                this.imagePath2 = 'data:image/jpeg;base64,' + imageData;
                let t = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
                this.image2Uri = imageData;
            }
            if (e == 3) {
                this.imagePath3 = 'data:image/jpeg;base64,' + imageData;
                this.image3Uri = imageData;
            }
            if (e == 4) {
                this.imagePath4 = 'data:image/jpeg;base64,' + imageData;
                this.image4Uri = imageData;
            }
            if (e == 5) {
                this.imagePath5 = 'data:image/jpeg;base64,' + imageData;
                this.image5Uri = imageData;
            }
        }, (err) => {
            // Handle error
            console.log("errOf Image ", err);
        });
    }
    selectImage(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, e);
                        },
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA, e);
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    goBack() {
        this.nav.back();
    }
    goNext() {
        this.nav.navigateForward('dashboard');
    }
    checkDetails(i) {
        this.selected = i;
    }
    deSelect(i) {
        this.selected = '';
    }
    checkIncident(e) {
        this.incedent = e.detail.value;
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_2__.ManagersPage,
                cssClass: 'managers',
            });
            modal.onDidDismiss().then((res) => {
                var _a;
                if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.name) {
                    this.nameOfManager = res.data.name;
                }
            });
            return yield modal.present();
        });
    }
    DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',');
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i);
        return new Blob([ia], { type: mimeString });
    }
    // onSubmit() {
    //   if (this.person_one_details.returnToNormalDuties === 'Yes') {
    //     this.person_one_details.returnToAlernateDuties = null
    //   }
    //   this.person_one_details.injurryCheckBox.forEach(element => {
    //     if (element.isChecked) {
    //       this.person_one_details.injury_value.push(element.val)
    //     }
    //   });
    //   if (this.person_two_details.returnToNormalDuties === 'Yes') {
    //     this.person_two_details.returnToAlernateDuties = null
    //   }
    //   this.person_two_details.injurryCheckBox.forEach(element => {
    //     if (element.isChecked) {
    //       this.person_two_details.injury_value.push(element.val)
    //     }
    //   });
    //   //3
    //   if (this.person_three_details.returnToNormalDuties === 'Yes') {
    //     this.person_three_details.returnToAlernateDuties = null
    //   }
    //   this.person_three_details.injurryCheckBox.forEach(element => {
    //     if (element.isChecked) {
    //       this.person_three_details.injury_value.push(element.val)
    //     }
    //   });
    //   //4
    //   if (this.person_four_details.returnToNormalDuties === 'Yes') {
    //     this.person_four_details.returnToAlernateDuties = null
    //   }
    //   this.person_four_details.injurryCheckBox.forEach(element => {
    //     if (element.isChecked) {
    //       this.person_four_details.injury_value.push(element.val)
    //     }
    //   });
    //   this.personDetails.push(this.person_one_details);
    //   this.personDetails.push(this.person_two_details);
    //   this.personDetails.push(this.person_three_details);
    //   this.personDetails.push(this.person_four_details);
    //   let classiCheckedValue: any = [];
    //   let repuCheckedValue: any = [];
    //   let it_option_value: any = [];
    //   this.itsecurityCheckbox.forEach(element => {
    //     if (element.isChecked) {
    //       it_option_value.push(element.val)
    //     }
    //   });
    //   this.classificationChekBox.forEach((el: any) => {
    //     if (el.isChecked) {
    //       classiCheckedValue.push(el.val)
    //     }
    //   });
    //   this.reputationCheckBox.forEach((el: any) => {
    //     if (el.isChecked) {
    //       repuCheckedValue.push(el.val)
    //     }
    //   })
    //   if (this.descriptionIncident === '') {
    //     this.global.presentToast("Please enter Description of incident")
    //   } else if (this.immediateAction === '') {
    //     this.global.presentToast("Immediate action taken filed is Required")
    //   } else if (this.environmentActionTaken === '') {
    //     this.global.presentToast("Please enter Immediate action taken to minimize Environmental impact")
    //   } else if (this.nameOfAnyWitness === '') {
    //     this.global.presentToast("Please enter name of any witness")
    //   } else if (this.contactOfAnyWitness === '') {
    //     this.global.presentToast("Please enter contact of any witness")
    //   } else if (this.possibleOutcomeOfIncident === '') {
    //     this.global.presentToast("Please enter possible outcome of this incident")
    //   } else if (this.assetDescription === '') {
    //     this.global.presentToast("Please enter asset description")
    //   } else if (this.extentOfDamage === '') {
    //     this.global.presentToast("Please enter Extent of Damage")
    //   } else if (this.doneDifferently === '') {
    //     this.global.presentToast("Please enter what could have been done differently")
    //   } else if (this.nameOfManager === '') {
    //     this.global.presentToast("Please Select the manager")
    //   } else {
    //     this.person_one_details.alternate_duties = this.person_one_details.returnToAlernateDuties
    //     this.person_one_details.date_of_birth = this.person_one_details.dateOfBirth
    //     this.person_one_details.duties_explanation = this.person_one_details.explanation
    //     this.person_one_details.initital_injury = this.person_one_details.injury_value.join(',')
    //     this.person_one_details.injured_person_option = this.person_one_details.fullNameOfInjuredPerson
    //     this.person_one_details.injured_person_option_value = this.person_one_details.other_name
    //     this.person_one_details.normal_duties = this.person_one_details.returnToNormalDuties;
    //     this.person_two_details.alternate_duties = this.person_two_details.returnToAlernateDuties
    //     this.person_two_details.date_of_birth = this.person_two_details.dateOfBirth
    //     this.person_two_details.duties_explanation = this.person_two_details.explanation
    //     this.person_two_details.initital_injury = this.person_two_details.injury_value.join(',')
    //     this.person_two_details.injured_person_option = this.person_two_details.fullNameOfInjuredPerson
    //     this.person_two_details.injured_person_option_value = this.person_two_details.other_name
    //     this.person_two_details.normal_duties = this.person_two_details.returnToNormalDuties
    //     this.person_three_details.alternate_duties = this.person_three_details.returnToAlernateDuties
    //     this.person_three_details.date_of_birth = this.person_three_details.dateOfBirth
    //     this.person_three_details.duties_explanation = this.person_three_details.explanation
    //     this.person_three_details.initital_injury = this.person_three_details.injury_value.join(',')
    //     this.person_three_details.injured_person_option = this.person_three_details.fullNameOfInjuredPerson
    //     this.person_three_details.injured_person_option_value = this.person_three_details.other_name
    //     this.person_three_details.normal_duties = this.person_three_details.returnToNormalDuties
    //     this.person_four_details.alternate_duties = this.person_four_details.returnToAlernateDuties
    //     this.person_four_details.date_of_birth = this.person_four_details.dateOfBirth
    //     this.person_four_details.duties_explanation = this.person_four_details.explanation
    //     this.person_four_details.initital_injury = this.person_four_details.injury_value.join(',')
    //     this.person_four_details.injured_person_option = this.person_four_details.fullNameOfInjuredPerson
    //     this.person_four_details.injured_person_option_value = this.person_four_details.other_name
    //     this.person_four_details.normal_duties = this.person_four_details.returnToNormalDuties
    //     let requiredData = {
    //       descriptionIncident: this.descriptionIncident,
    //       immediateAction: this.immediateAction,
    //       environmentActionTaken: this.environmentActionTaken,
    //       nameOfAnyWitness: this.nameOfAnyWitness,
    //       contactOfAnyWitness: this.contactOfAnyWitness,
    //       possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
    //       assetDescription: this.assetDescription,
    //       extentOfDamage: this.extentOfDamage,
    //       doneDifferently: this.doneDifferently
    //     };
    //     if (this.incedent == 'Near Miss') {
    //       let nonRequirementIncident = {
    //         incidentRadio: this.incedent,
    //         whoWitnessedNearThis: this.whoWitnessedNearThis,
    //         possibleConsequence: this.possibleConsequence
    //       }
    //     }
    //     let classificationObjectData = {
    //       ClassificationCheckBoxCollectionData: this.classificationChekBox,
    //       radioBtnValueofClassficationRadio: this.location,
    //       dropDownofShiftType: this.shiftType,
    //       superVisorDropdownValue: this.superVisor,
    //       addLocation: null,
    //       locationSelection: null,
    //       nameOfManager: this.nameOfManager,
    //       locationRadioValue: this.location
    //     }
    //     if (this.location === 'Add Location') {
    //       classificationObjectData.addLocation = this.addLocation;
    //     }
    //     if (this.location === 'Choose Location') {
    //       classificationObjectData.locationSelection = this.locationSelection
    //     }
    //     let photoGraphyData = {
    //       image: this.imagePath
    //     }
    //     let incidentDataObject = {
    //       image: null,
    //       alcoholTest: this.alcoholTest
    //     }
    //     if (this.insertPhotoisChecked) {
    //       let imageData = {
    //         image: this.imagePath2
    //       }
    //       incidentDataObject.image = this.imagePath2
    //     }
    //     let environmentalDataColletion = {
    //       chemicalSplit: this.chemicalSplit,
    //       nameOfChemical: null,
    //       image: null,
    //       approximateQtyofChemical: null,
    //       emergencySpill: this.emergencySpill
    //     }
    //     if (this.chemicalSplit === 'Yes') {
    //       environmentalDataColletion.nameOfChemical = this.nameOfChemical;
    //       environmentalDataColletion.image = this.imagePath3;
    //       environmentalDataColletion.approximateQtyofChemical = this.approximateQtyofChemical
    //     }
    //     let reputationCollectionData = {
    //       image: this.imagePath4,
    //       individualReputationDamaged: null,
    //       companyReputationDamged: null,
    //       reputationCheckBox: this.reputationCheckBox
    //     }
    //     if (this.individualChecked) {
    //       reputationCollectionData.individualReputationDamaged = this.individualReputationDamaged
    //     }
    //     if (this.companyChecked) {
    //       reputationCollectionData.companyReputationDamged = this.companyReputatonDamaged
    //     }
    //     let securityCollectionData = {
    //       securityRadiovalue: this.securityRadio,
    //       itsecurityCheckbox: null
    //     }
    //     if (this.securityRadio == 'IT') {
    //       securityCollectionData.itsecurityCheckbox = this.itsecurityCheckbox
    //     }
    //     let assetCollectionData = {
    //       assetNumberRadioValue: this.assetNumber,
    //       image: this.imagePath5,
    //       assetsNumbers: null
    //     }
    //     if (this.assetNumber == 'Yes') {
    //       assetCollectionData.assetsNumbers = this.assetsNumbers
    //     };
    //     //1
    //     if (this.person_one_details.returnToNormalDuties === 'Yes') {
    //       this.person_one_details.returnToAlernateDuties = null
    //     }
    //     //2
    //     if (this.person_two_details.returnToNormalDuties === 'Yes') {
    //       this.person_two_details.returnToAlernateDuties = null
    //     }
    //     //3
    //     if (this.person_three_details.returnToNormalDuties === 'Yes') {
    //       this.person_three_details.returnToAlernateDuties = null
    //     }
    //     //4
    //     if (this.person_four_details.returnToNormalDuties === 'Yes') {
    //       this.person_four_details.returnToAlernateDuties = null
    //     }
    //     if (this.image3Uri !== '') {
    //       this.checmicalDetails.chemical_photo = this.image3Uri
    //     }
    //     let fd = new FormData();
    //     if (this.imageUri !== '') {
    //       fd.append("photography_image", this.imageUri);
    //     }
    //     if (this.image4Uri !== '') {
    //       fd.append("reputation_damage_image", this.image4Uri);
    //     }
    //     if (this.image5Uri !== '') {
    //       fd.append("extent_damage_image", this.image5Uri);
    //     }
    //     fd.append("id", this.id);
    //     fd.append("incident_value", this.incedent);
    //     fd.append("incident_near_miss", this.whoWitnessedNearThis);
    //     fd.append("incident_near_miss_other", this.possibleConsequence);
    //     fd.append("classification_value", classiCheckedValue.join(','));
    //     fd.append("classification_location_option", this.location);
    //     if (this.location == 'Add Location') {
    //       fd.append("classification_location_value", this.addLocation)
    //     }
    //     if (this.location == 'Choose Location') {
    //       fd.append("classification_location_value", this.locationSelection)
    //     }
    //     fd.append("classification_shift_type", this.shiftType);
    //     fd.append("classification_supervisor", this.superVisor);
    //     fd.append("classification_manager", this.nameOfManager);
    //     fd.append("incident_description", this.descriptionIncident);
    //     fd.append("incident_description_action", this.immediateAction);
    //     //incident photo pending from postman and here also 
    //     fd.append("incident_description_alcohol_test", this.alcoholTest);
    //     fd.append("injury_persons", this.formCount);//form value
    //     fd.append("environmental_description", this.environmentActionTaken);
    //     fd.append("was_a_chemical_split", this.chemicalSplit);
    //     //checmical split value inner side query
    //     fd.append("emergency_spill_kit_used", this.emergencySpill);
    //     fd.append("reputation_option", repuCheckedValue);
    //     if (this.individualChecked) {
    //       fd.append("individual_damage_value", this.individualReputationDamaged)
    //     }
    //     if (this.companyChecked) {
    //       fd.append("company_damage_value", this.companyReputatonDamaged)
    //     }
    //     if (this.image2Uri !== '') {
    //       fd.append("incident_description_photo", this.image2Uri)
    //     }
    //     fd.append("reutation_negative_effect", this.nagativeEffetct);
    //     fd.append("name_of_witness", this.nameOfAnyWitness);
    //     fd.append("contact_of_witness", this.contactOfAnyWitness);
    //     fd.append("possible_outcome_incident", this.possibleOutcomeOfIncident);
    //     fd.append("security_option", this.securityRadio);
    //     if (this.securityRadio == 'IT') {
    //       fd.append("it_option_value", it_option_value.join(',')) // chexkbox and inner value
    //     }
    //     fd.append("asset_description", this.assetDescription);
    //     fd.append("asset_has_number", this.assetNumber);
    //     if (this.assetNumber == 'Yes') {
    //       fd.append("asset_number", this.assetsNumbers);
    //     }
    //     fd.append("extent_of_damage", this.extentOfDamage);
    //     fd.append("report", this.doneDifferently);
    //     fd.append("person_details", JSON.stringify(this.personDetails));
    //     fd.append("chemical_details", JSON.stringify(this.checmicalDetails))
    //     this.global.presentLoading();
    //     this.global.postData("api/add_form/submit", fd).subscribe((res: any) => {
    //       if (res.status) {
    //         this.global.presentToast(res.message)
    //         this.nav.navigateForward("home");
    //         this.global.dismissLoading();
    //       } else {
    //         this.global.presentToast(res.message)
    //         this.global.dismissLoading();
    //       }
    //     }, err => {
    //       console.log("err", err);
    //       this.global.dismissLoading();
    //     })
    //   }
    // }
    b64toBlob(b64Data, contentType) {
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
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
};
ViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__.Base64 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
ViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-view',
        template: _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewPage);



/***/ }),

/***/ 97465:
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": function() { return /* binding */ GlobalService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let GlobalService = class GlobalService {
    constructor(toastController, http, loadingController) {
        this.toastController = toastController;
        this.http = http;
        this.loadingController = loadingController;
        this.baseUrl = 'https://mforms-api-devel.horts.com.au/';
        // https://mforms-api-devel.horts.com.au/
        //Role 
        this.user = "31";
        this.gm = "32";
        this.investigator = "33";
        this.manager = "34";
        this.supervisior = "35";
        this.formType_user = 1;
        this.formType_investigator = 2;
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                mode: "ios",
                color: "dark"
            });
            toast.present();
        });
    }
    toast(msg, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                // mode: "ios",
                color: type,
                animated: true,
            });
            toast.present();
        });
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
    setHeader() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
        header.set("Access-Control-Allow-Origin", "*");
        header.set("Content-Type", "application/json");
        header.set("Access-Control-Allow-Headers", "*");
        header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
        header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        if (localStorage.getItem("token")) {
            header.set("token", localStorage.getItem("token"));
        }
        return header;
    }
    getData(url) {
        // let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
        // header.set("Access-Control-Allow-Origin", "*");
        // header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
        // header.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
        let headers = this.setHeader();
        return this.http.get(this.baseUrl + url, { headers: headers });
    }
    postData(url, data) {
        // let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
        // header.set("Access-Control-Allow-Origin", "*");
        // header.set("Content-Type", "application/json");
        // header.set("Access-Control-Allow-Headers", "*")
        // header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
        // header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        let headers = this.setHeader();
        return this.http.post(this.baseUrl + url, data, { headers: headers });
    }
    postDataWithId(url, data) {
        // let header = new HttpHeaders();
        // header.set("token", localStorage.getItem("token"));
        let headers = this.setHeader();
        return this.http.post(this.baseUrl + url, data, { headers: headers });
    }
    getDataWithId(url) {
        // let header = new HttpHeaders();
        // header.set("token", localStorage.getItem("token"));
        // header.set("apikey", "as*37486a*()HGY")
        let headers = this.setHeader();
        return this.http.get(this.baseUrl + url, { headers: headers });
    }
};
GlobalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController }
];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 17466:
/*!*******************************************!*\
  !*** ./src/app/pages/view/view.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-label {\n  white-space: normal;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 18px;\n}\nion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n  padding-bottom: 0px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 18px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .btnView {\n  margin-top: 100px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .questionHead {\n  font-family: mon-black;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n}\nion-content ion-radio {\n  margin-right: 7px;\n}\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\nion-content ion-col {\n  padding: 0;\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\nion-content .question {\n  font-size: 14px !important;\n}\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\nion-content ion-select {\n  width: 100%;\n  background: white;\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\nion-content ion-input {\n  background: white;\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\n.regularTexrt {\n  text-transform: capitalize;\n  margin-left: 33px;\n}\n.value {\n  font-family: mon-medium !important;\n  font-size: 16px !important;\n  color: gray !important;\n  margin-top: -10px !important;\n}\n.head {\n  font-family: mon-medium !important;\n  font-size: 18px !important;\n  color: black !important;\n}\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQyx5QkFBQTtFQUVHLHlCQUFBO0VBQ0EsZUFBQTtBQURSO0FBR0U7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBREo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFFSTtFQUNFLHdCQUFBO0FBQU47QUFDTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFDUjtBQUNNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRUk7RUFDRSxnQkFBQTtBQUFOO0FBR0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBREo7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdFO0VBQ0UsaUJBQUE7QUFESjtBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBREo7QUFHRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUFOO0FBR0U7RUFDRSxzQkFBQTtBQURKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxhQUFBO0FBRko7QUFHSTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRE47QUFFTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQVI7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFHSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRE47QUFJRTtFQUNFLGlCQUFBO0FBRko7QUFJRTtFQUNFLHVDQUFBO0FBRko7QUFJRTtFQUNFLFVBQUE7QUFGSjtBQUlFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUNFLGdDQUFBO0FBRko7QUFJRTtFQUNFLDBCQUFBO0FBRko7QUFJRTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7QUFGSjtBQUdJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtBQUROO0FBRU07RUFDRSx1QkFBQTtBQUFSO0FBS0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0FBTEo7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0U7RUFDRSxpQkFBQTtBQUxKO0FBT0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPRTtFQUNFLHlCQUFBO0FBTEo7QUFPRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUE7RUFFSSwwQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFVQTtFQUNJLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBUEo7QUFTQTtFQUNNLGtDQUFBO0VBQ0YsMEJBQUE7RUFDQSx1QkFBQTtBQU5KO0FBUUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQUxKIiwiZmlsZSI6InZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tbGFiZWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAudG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzJweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC5sb2dvIHtcbiAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dpbi1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuaW5wdXQtZGl2IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG4gIC5iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuYnRuVmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbiAgLnBsdXMge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5pbmNpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBjb2xvcjogIzMxMzEzMTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuICAucXVlc3Rpb25IZWFkIHtcbiAgICBmb250LWZhbWlseTogbW9uLWJsYWNrO1xuICB9XG4gIC5hY3RpdmVCYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgY29sb3I6ICMzMTMxMzE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oZWFkZXJUaXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDMzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5yYSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgfVxuICB9XG4gIGlvbi1yYWRpbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIH1cbiAgaW9uLWNoZWNrYm94IHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBociB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIGlvbi1yYWRpbyB7XG4gICAgLS1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIH1cbiAgLnF1ZXN0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuXG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG5cbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICB9XG4gIGlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAubGFiZWxDdXN0b21Ecm9wRG93biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cbiAgLmNhbWVyYSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW07XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuICBpb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgfVxuICBpb24tY2FyZHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn1cbi5yZWd1bGFyVGV4cnR7XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tbGVmdDogMzNweDtcblxufVxuXG4udmFsdWV7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG4uaGVhZHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4uaW1nLXJlc3BvbnNpdmV7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIHdpZHRoOjI1MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ 17616:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view/view.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Details</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"container\">\n    <div class=\"ion-margin-top ion-margin-bottom\">\n      <p>Incident Report</p>\n    </div>\n\n\n    <div class=\"activeBackground\">\n      <!---------------------------------------Incident Detalis----------------------------------->\n      <div class=\"headerTitle\">\n        <p>Incident</p>\n      </div>\n      <ion-radio-group value=\"Actual\">\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-radio value=\"Actual\" checked></ion-radio>\n          <ion-label>{{incedent}}</ion-label>\n        </ion-item>\n      </ion-radio-group>\n      <hr/>\n      <!---------------------------------------Incident Detalis----------------------------------->\n\n      <!---------------------------------------Classification----------------------------------->\n      <div class=\"headerTitle\">\n        <p>Classification</p>\n      </div>\n      <ion-row class=\"ion-no-padding\" *ngIf=\"classificationChekBox.length > 0\">\n        <ion-col size=\"6\" *ngFor=\"let entry of classificationChekBox\">\n          <ion-item class=\"ion-no-padding ra\" lines=\"none\" *ngIf=\"entry!==''\">\n            <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n            <ion-label>{{entry}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <p class=\"question\">Date of Incident</p>\n      <p class=\"question\">{{dateOfIncident}}</p>\n\n      <p class=\"question\">Time Of Incident</p>\n      <p class=\"question\">{{timeOfIncident}}</p>\n\n      <p class=\"question\">Date Reported</p>\n      <p class=\"question\">{{dateReported}}</p>\n\n      <p class=\"question\">Time Reported</p>\n      <p class=\"question\">{{timeReported}}</p>\n\n      <div *ngIf=\"location!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>{{location}}</ion-label>\n        </ion-item>\n      </div>\n      <ion-text *ngIf=\"location == 'Add Location'\" class=\"regularTexrt\">{{addLocation}}</ion-text>\n      <ion-text *ngIf=\"location == 'Choose Location'\" class=\"regularTexrt\">{{locationSelection}}</ion-text>\n      <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"6\" *ngIf=\"shiftType!==''\">\n          <p class=\"head\">Shift Type</p>\n          <p class=\"value\">{{shiftType}}</p>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"superVisor!==''\">\n          <p class=\"head\">Supervisor</p>\n          <p class=\"value\">{{superVisor}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"12\">\n          <p class=\"head\">Name of Manager</p>\n          <p class=\"value\">{{nameOfManager}}</p>\n        </ion-col>\n      </ion-row>\n      <hr/>\n      <!---------------------------------------Classification----------------------------------->\n     \n      <!---------------------------------------Photography----------------------------------->\n      <div *ngIf=\"imagePath !==''\">\n        <div class=\"headerTitle\">\n          <p>Photography</p>\n        </div>\n        <div class=\"ion-text-center\" *ngIf=\"imagePath !==''\">\n          <img src=\"{{imagePath}}\" class=\"img-responsive\">\n        </div>\n        <div *ngIf=\"imagePath ==''\">\n          <h6 class=\"ion-text-center ion-no-margin\">No Img Found</h6>\n        </div>\n        <hr />\n      </div>\n      <!---------------------------------------Photography----------------------------------->\n\n      <!---------------------------------------Incident Description----------------------------------->\n      <div class=\"headerTitle\">\n        <p>Incident Description</p>\n      </div>\n      <p class=\"question\">Description of incident (note: You must not use any personal details or names)</p>\n      <p class=\"value\">{{descriptionIncident}}</p>\n      <p class=\"question\">Immediate action taken</p>\n      <p class=\"value\">{{immediateAction}}</p>\n      <ion-row class=\"ion-no-padding\" *ngIf=\"insertPhotoisChecked\">\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n            <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n            <ion-label>Insert Photo</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div class=\"ion-text-center\" *ngIf=\"insertPhotoisChecked\">\n        <img src=\"{{imagePath2}}\" class=\"img-responsive\">\n      </div>\n      <div *ngIf=\"alcoholTest!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Alcohol test completed</ion-label>\n        </ion-item>\n        <ion-text class=\"regularTexrt\">{{alcoholTest}}</ion-text>\n      </div>\n      <div *ngIf=\"drugTest!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Drug test completed</ion-label>\n        </ion-item>\n      </div>\n      <ion-text class=\"regularTexrt\">{{drugTest}}</ion-text>\n      <hr />\n      <!---------------------------------------Incident Description----------------------------------->\n\n      <!---------------------------------------------Injury-------------------------------------------->\n\n      <div class=\"headerTitle\">\n        <p>Injury</p>\n      </div>\n      <div *ngFor=\"let item of person_Array;let i = index\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <p class=\"question\">Person {{i+1}} Details</p>\n          <div *ngIf=\"item?.fullNameOfInjuredPerson\">\n            <p class=\"question\">Full name of Injured person</p>\n            <p class=\"value\">{{item?.fullNameOfInjuredPerson}}</p>\n          </div>\n          <ion-row class=\"ion-no-padding ion-no-margin\">\n            <ion-col size=\"6\" class=\"ion-no-padding\" *ngIf=\"item?.gender !==''\">\n              <p class=\"question\">Gender</p>\n              <p class=\"value\">{{item?.gender}}</p>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\" *ngIf=\"item?.dateOfBirth !==''\">\n              <p class=\"question\">Date of Birth</p>\n              <p class=\"value\">{{item?.dateOfBirth|date}}</p>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=\"item?.returnToNormalDuties !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.returnToNormalDuties}}</p>\n          </div>\n          <div *ngIf=\"item?.alternate_duties !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Return to Alternate Duties</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.alternate_duties}}</p>\n          </div>\n          <div *ngIf=\"item?.part_of_body_injured_occured !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Part of Body Injured Occured</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.part_of_body_injured_occured}}</p>\n          </div>\n\n          <div *ngIf=\"item?.was_immediate_treatment !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Was Immediate Treatment Given</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.was_immediate_treatment}}</p>\n          </div>\n\n\n          <div *ngIf=\"item?.immediate_treatment_given_explanation !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Immediate Treatment Given Explanation</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.immediate_treatment_given_explanation}}</p>\n          </div>\n\n          <div *ngIf=\"item?.immediate_treatment_person_name !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Immediate Treatment Person_name</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.immediate_treatment_person_name}}</p>\n          </div>\n\n          <div *ngIf=\"item?.immediate_treatment_person_number !==''\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n              <ion-label>Immediate Treatment Person Number</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\">{{item?.immediate_treatment_person_number}}</p>\n          </div>\n          <div *ngIf=\"item?.injurryCheckBox.length>0\">\n            <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n              <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n              <ion-label>Initial Injury/illness classification</ion-label>\n            </ion-item>\n            <p class=\"regularTexrt value ion-margin-top\" *ngFor=\"let i of item?.injurryCheckBox\">\n              <ion-text *ngIf=\"i.isChecked\">{{i.val}},</ion-text>\n            </p>\n          </div>\n          <hr />\n        </ion-card>\n      </div>\n      <hr />\n      <!---------------------------------------------Injury-------------------------------------------->\n\n      <!---------------------------------------------Environmental-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Environmental</p>\n      </div>\n      <p class=\"question\">Immediate action taken to minimize Environment impact</p>\n      <p class=\"value\">{{environmentActionTaken}}</p>\n      <div *ngIf=\"chemicalSplit!==''\">\n        <ion-item class=\"ion-no-padding ra ion-no-margin\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the chemical split?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value ion-margin-top\">\n          {{chemicalSplit}}\n        </p>\n      </div>\n      <div *ngIf=\"nameOfChemical!==''\">\n        <p class=\"question\">Name of chemical</p>\n        <p class=\"value\">{{nameOfChemical}}</p>\n      </div>\n      <div *ngIf=\"approximateQtyofChemical\">\n        <p class=\"question\">Approximate Qty of Chemical</p>\n        <p class=\"value\">{{approximateQtyofChemical}}</p>\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"insertPhotoisChecked\">\n        <div *ngIf=\"imagePath3 !== '' \">\n          <img src=\"{{imagePath3}}\" class=\"img-responsive\">\n        </div>\n      </div>\n      <div *ngIf=\"emergencySpill!==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the emergency spill kit used ?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value \">{{emergencySpill}}</p>\n      </div>\n      <hr />\n      <!---------------------------------------------Environmental-------------------------------------------->\n\n      <!---------------------------------------------Reputation-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Reputation</p>\n      </div>\n      <div *ngIf=\"individualChecked\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/check.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the reputation damages an individual or Company</ion-label>\n        </ion-item>\n      </div>\n      <p class=\"regularTexrt value\" *ngIf=\"individualChecked\">Individual</p>\n      <p class=\"regularTexrt value\" *ngIf=\"companyChecked\">Company</p>\n      <div *ngIf=\"individualChecked\">\n        <p class=\"question\">How has the Individual's reputation been damaged?</p>\n        <p class=\"value\">{{individualReputationDamaged}}</p>\n      </div>\n      <div *ngIf=\"companyChecked\">\n        <p class=\"question\">How has the Company reputation been damaged?</p>\n        <p class=\"value\">{{companyReputatonDamaged}}</p>\n      </div>\n\n      <div *ngIf=\"nagativeEffetct !==''\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Was the nagative effect internal or external</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value \">{{nagativeEffetct}}</p>\n      </div>\n      <p class=\"question\">Name of any witness</p>\n      <p class=\"value\">{{nameOfAnyWitness}}</p>\n      <!-- <p class=\"question\">Contact of any witness</p>\n      <p class=\"value\">{{contactOfAnyWitness}}</p> -->\n      <p class=\"question\" *ngIf=\"possibleOutcomeOfIncident !== ''\">What is the possible outcome of this incident ?</p>\n      <p class=\"value\">{{possibleOutcomeOfIncident}}</p>\n      <p class=\"question\" *ngIf=\"imagePath4 !==''\">Upload evidence of the reputation damage</p>\n      <div class=\"ion-text-center\" *ngIf=\"imagePath4 !==''\">\n        <img src=\"{{imagePath4}}\" class=\"img-responsive\">\n      </div>\n      <hr/>\n      <!---------------------------------------------Reputation-------------------------------------------->\n\n      <!---------------------------------------------Security-------------------------------------------->\n\n      <div class=\"headerTitle\" *ngIf=\"securityRadio!=='' && securityRadio!=='undefined'\">\n        <p>Security</p>\n      </div>\n      <div *ngIf=\"securityRadio!=='' && securityRadio!=='undefined'\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>{{securityRadio}}</ion-label>\n        </ion-item>\n      </div>\n      <div *ngIf=\"securityRadio =='Theft'\">\n        <p class=\"question\">What Has Been Stolen Item ? </p>\n        <p class=\"value\">{{what_has_been_stolen_item}}</p>\n\n        <p class=\"question\">What Is the specific Securities Incident ?</p>\n        <p class=\"value\">{{what_is_the_specific_securities_incident}}</p>\n        <div>\n          <p class=\"question\">Approximate value of stolen item</p>\n          <p class=\"value\">{{approximate_value_of_stolen}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"securityRadio=='IT'\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>What kind of IT security incident?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value ion-margin-top\" *ngFor=\"let i of itsecurityCheckbox\">\n          <ion-text *ngIf=\"i.isChecked\">{{i.val}},</ion-text>\n        </p>\n      </div>\n      <hr />\n      <!---------------------------------------------Security-------------------------------------------->\n\n      <!---------------------------------------------Asset-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Asset</p>\n      </div>\n      <p class=\"question\">Asset Description</p>\n      <p class=\"value\">{{assetDescription}}</p>\n      <div *ngIf=\"assetNumber=='' && assetNumber=='undefined'\">\n        <ion-item class=\"ion-no-padding ra\" lines=\"none\">\n          <img src=\"./assets/radio.png\" class=\"ion-margin-end\" />\n          <ion-label>Does asset have a member?</ion-label>\n        </ion-item>\n        <p class=\"regularTexrt value\">{{assetNumber}}</p>\n      </div>\n      <div *ngIf=\"assetNumber=='Yes'\">\n        <p class=\"question\">Asset Number</p>\n        <p class=\"value\">{{assetsNumbers}}</p>\n      </div>\n      <p class=\"question\" *ngIf=\"imagePath5!==''\">Upload photo of damage</p>\n      <div class=\"ion-text-center\" *ngIf=\"imagePath5 !==''\">\n        <img src=\"{{imagePath5}}\" class=\"img-responsive\">\n      </div>\n      <hr/>\n      <!---------------------------------------------Asset-------------------------------------------->\n\n      <!---------------------------------------------Report-------------------------------------------->\n      <div class=\"headerTitle\">\n        <p>Report</p>\n      </div>\n      <p class=\"question\">What could have been done differently?</p>\n      <p class=\"value\">{{doneDifferently}}</p>\n      <!---------------------------------------------Report-------------------------------------------->\n\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_view_view_module_ts-es2015.js.map