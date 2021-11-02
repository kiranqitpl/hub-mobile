(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_add-form_add-form_module_ts"],{

/***/ 93377:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-form/add-form-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFormPageRoutingModule": function() { return /* binding */ AddFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-form.page */ 39625);




const routes = [
    {
        path: '',
        component: _add_form_page__WEBPACK_IMPORTED_MODULE_0__.AddFormPage
    }
];
let AddFormPageRoutingModule = class AddFormPageRoutingModule {
};
AddFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddFormPageRoutingModule);



/***/ }),

/***/ 88584:
/*!***************************************************!*\
  !*** ./src/app/pages/add-form/add-form.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFormPageModule": function() { return /* binding */ AddFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-form-routing.module */ 93377);
/* harmony import */ var _add_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-form.page */ 39625);







let AddFormPageModule = class AddFormPageModule {
};
AddFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddFormPageRoutingModule
        ],
        declarations: [_add_form_page__WEBPACK_IMPORTED_MODULE_1__.AddFormPage]
    })
], AddFormPageModule);



/***/ }),

/***/ 39625:
/*!*************************************************!*\
  !*** ./src/app/pages/add-form/add-form.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFormPage": function() { return /* binding */ AddFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-form.page.html */ 1609);
/* harmony import */ var _add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-form.page.scss */ 52223);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/managers/managers.page */ 58127);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 67871);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global.service */ 97465);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 31531);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);











let AddFormPage = class AddFormPage {
    constructor(nav, modal, camera, actionSheetController, file, global, base64, platform) {
        this.nav = nav;
        this.modal = modal;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.global = global;
        this.base64 = base64;
        this.platform = platform;
        this.data = [];
        this.selected = 'Incident';
        this.image3Uri = '';
        this.drugTestImageUri = '';
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
        this.drugTest = '';
        this.drugImage = '';
        this.formCount = '1';
        this.injuredPerson = '';
        this.todayDate = new Date();
        this.returnToNormalDuties = '';
        this.alternativeDuties = '';
        this.injuryCheckBox = [];
        this.itemsArray = [1];
        this.emergencySpill = '';
        this.itsecurityCheckbox = [];
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
                chemical_photo: this.imagePath3,
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
            immediateTreatment: '',
            fullNameOfInjuredPerson: '',
            gender: '',
            dateOfBirth: '',
            injury_value: [],
            returnToNormalDuties: '',
            returnToAlernateDuties: null,
            explanation: null,
            other_name: null,
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            partOfBodyInjured: '',
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
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            part_of_body_injured_occured: "",
            was_immediate_treatment: "",
            immediate_treatment_given_explanation: "",
            immediate_treatment_person_name: "",
            immediate_treatment_person_number: "",
            partOfBodyInjured: '',
            immediateTreatment: '',
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
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            part_of_body_injured_occured: "",
            was_immediate_treatment: "",
            immediate_treatment_given_explanation: "",
            immediate_treatment_person_name: "",
            immediate_treatment_person_number: "",
            partOfBodyInjured: '',
            immediateTreatment: '',
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
            immediateTreatment: '',
            immediateTreatmentGivenExplanation: '',
            administeredPersonName: '',
            adminsteredPersonNumber: '',
            fullNameOfInjuredPerson: '',
            part_of_body_injured_occured: "",
            was_immediate_treatment: "",
            immediate_treatment_given_explanation: "",
            immediate_treatment_person_name: "",
            immediate_treatment_person_number: "",
            partOfBodyInjured: '',
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
        this.platformCheck = '';
        //added field
        this.dateOfIncident = "";
        this.timeOfIncident = "";
        this.dateReported = "";
        this.timeReported = "";
        this.wasThereAnyWitnessOfIncident = "";
        this.normalDutiesExplanation = "";
        this.partOfBodyInjured = "";
        this.immediateTreatmentGivenExplanation = "";
        this.immediateTreatmentPersonName = "";
        this.immediateTreatmentPersonNumber = "";
        this.stolenItem = ""; //added
        this.specificSecurityIncident = ""; //added
        this.approximateValueOfStolen = ""; //added
        this.returnToAlternateDuties = "";
        this.returnToDutiesImage = "";
        this.personDetails = [];
        this.croppedImagepath = '';
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50,
        };
        this.witnessList = [];
        this.managerList = [];
        this.superVisorList = [];
        this.shiftTypeList = [];
        this.locationList = [];
        this.url = '';
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("YYYY-MM-DD");
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
                val: 'Intellectual Property Breach',
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
    }
    ngOnInit() {
        this.incedent = localStorage.getItem("incidentType");
        console.log("inient", this.incedent);
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
            // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
            let image = 'data:image/jpeg;base64,' + imageData;
            if (e == 1) {
                this.imagePath = image;
                // let t = this.DataURIToBlob(image);
                // let realData = this.imagePath.split(",")[1];
                this.imageUri = imageData;
            }
            if (e == 2) {
                this.imagePath2 = image;
                let t = this.DataURIToBlob(image);
                this.image2Uri = imageData;
            }
            if (e == 3) {
                this.imagePath3 = image;
                this.image3Uri = imageData;
            }
            if (e == 4) {
                this.imagePath4 = image;
                this.image4Uri = imageData;
            }
            if (e == 5) {
                this.imagePath5 = image;
                this.image5Uri = imageData;
            }
            if (e == 6) {
                this.drugImage = image;
                this.drugTestImageUri = imageData;
            }
            if (e == 7) {
                this.returnToDutiesImage = image;
            }
        }, (err) => {
            console.log("errOf Image ", err);
        });
    }
    ionViewWillEnter() {
        if (!this.platform.is('cordova')) {
            this.platformCheck = 'browser';
        }
        else {
            this.platformCheck = 'cordova';
        }
        this.incedent = localStorage.getItem("incidentType");
        console.log("inient", this.incedent);
        this.global.getDataWithId("api/Witness/getWitnessList").subscribe((res) => {
            if (res) {
                this.witnessList = res.data;
            }
        }, err => {
            console.log(err);
        });
        this.global.getDataWithId("api/Manager/getManagerList").subscribe((res) => {
            if (res) {
                this.managerList = res.data;
            }
        }, err => {
            console.log(err);
        });
        this.global.getDataWithId("api/Supervisor/getSupervisorList").subscribe((res) => {
            if (res) {
                this.superVisorList = res.data;
            }
        }, err => {
            console.log("Eror", err);
        });
        this.global.getDataWithId("api/Shift/get_shift_typelist").subscribe((res) => {
            if (res) {
                this.shiftTypeList = res.data;
            }
        }, err => {
            console.log("Eror", err);
        });
        this.global.getDataWithId("api/location/getLocation").subscribe((res) => {
            if (res) {
                console.log("res location", res);
                this.locationList = res.data;
            }
        });
    }
    selectImage(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        let localDataStore = {
            incedent: this.incedent,
            whoWitnessedNearThis: this.whoWitnessedNearThis,
            possibleConsequence: this.possibleConsequence,
            classificationChekBox: this.classificationChekBox,
            dateOfIncident: this.dateOfIncident,
            timeOfIncident: this.timeOfIncident,
            dateReported: this.dateReported,
            timeReported: this.timeReported,
            location: this.location,
            addLocation: this.addLocation,
            locationSelection: this.locationSelection,
            shiftType: this.shiftType,
            superVisor: this.superVisor,
            nameOfManager: this.nameOfManager,
            imagePath: this.imagePath,
            descriptionIncident: this.descriptionIncident,
            immediateAction: this.immediateAction,
            wasThereAnyWitnessOfIncident: this.wasThereAnyWitnessOfIncident,
            alcoholTest: this.alcoholTest,
            imagePath2: this.imagePath2,
            drugTest: this.drugTest,
            drugImage: this.drugImage,
            returnToDutiesImage: this.returnToDutiesImage,
            formCount: this.formCount,
            person_one_details: this.person_one_details,
            person_two_details: this.person_two_details,
            person_three_details: this.person_three_details,
            person_four_details: this.person_four_details,
            environmentActionTaken: this.environmentActionTaken,
            chemicalSplit: this.chemicalSplit,
            nameOfChemical: this.nameOfChemical,
            insertPhotoisChecked: this.insertPhotoisChecked,
            imagePath3: this.imagePath3,
            approximateQtyofChemical: this.approximateQtyofChemical,
            emergencySpill: this.emergencySpill,
            reputationCheckBox: this.reputationCheckBox,
            individualReputationDamaged: this.individualReputationDamaged,
            companyReputatonDamaged: this.companyReputatonDamaged,
            nagativeEffetct: this.nagativeEffetct,
            nameOfAnyWitness: this.nameOfAnyWitness,
            possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
            securityRadio: this.securityRadio,
            itsecurityCheckbox: this.itsecurityCheckbox,
            stolenItem: this.stolenItem,
            approximateValueOfStolen: this.approximateValueOfStolen,
            specificSecurityIncident: this.specificSecurityIncident,
            assetDescription: this.assetDescription,
            assetsNumbers: this.assetsNumbers,
            extentOfDamage: this.extentOfDamage,
            imagePath5: this.imagePath5,
            doneDifferently: this.doneDifferently
        };
        localStorage.setItem("addFormDataStore", JSON.stringify(localDataStore));
    }
    saveItemOffline() {
        if (this.person_one_details.returnToNormalDuties === 'Yes') {
            this.person_one_details.returnToAlernateDuties = null;
        }
        this.person_one_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_one_details.injury_value.push(element.val);
            }
        });
        if (this.person_two_details.returnToNormalDuties === 'Yes') {
            this.person_two_details.returnToAlernateDuties = null;
        }
        this.person_two_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_two_details.injury_value.push(element.val);
            }
        });
        if (this.person_three_details.returnToNormalDuties === 'Yes') {
            this.person_three_details.returnToAlernateDuties = null;
        }
        this.person_three_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_three_details.injury_value.push(element.val);
            }
        });
        if (this.person_four_details.returnToNormalDuties === 'Yes') {
            this.person_four_details.returnToAlernateDuties = null;
        }
        this.person_four_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_four_details.injury_value.push(element.val);
            }
        });
        console.log("response");
        this.personDetails.push(this.person_one_details);
        this.personDetails.push(this.person_two_details);
        this.personDetails.push(this.person_three_details);
        this.personDetails.push(this.person_four_details);
        let classiCheckedValue = [];
        let repuCheckedValue = [];
        let it_option_value = [];
        this.itsecurityCheckbox.forEach(element => {
            if (element.isChecked) {
                it_option_value.push(element.val);
            }
        });
        this.classificationChekBox.forEach((el) => {
            if (el.isChecked) {
                classiCheckedValue.push(el.val);
            }
        });
        this.reputationCheckBox.forEach((el) => {
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
        // let requiredData = {
        //   descriptionIncident: this.descriptionIncident,
        //   immediateAction: this.immediateAction,
        //   environmentActionTaken: this.environmentActionTaken,
        //   nameOfAnyWitness: this.nameOfAnyWitness,
        //   contactOfAnyWitness: this.contactOfAnyWitness,
        //   possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
        //   assetDescription: this.assetDescription,
        //   extentOfDamage: this.extentOfDamage,
        //   doneDifferently: this.doneDifferently
        // };
        // let nonRequirementIncident = {
        //   incidentRadio: this.incedent,
        //   whoWitnessedNearThis: this.whoWitnessedNearThis,
        //   possibleConsequence: this.possibleConsequence
        // }
        let classificationObjectData = {
            ClassificationCheckBoxCollectionData: this.classificationChekBox,
            radioBtnValueofClassficationRadio: this.location,
            dropDownofShiftType: this.shiftType,
            superVisorDropdownValue: this.superVisor,
            addLocation: null,
            locationSelection: null,
            nameOfManager: this.nameOfManager,
            locationRadioValue: this.location
        };
        if (this.location === 'Add Location') {
            classificationObjectData.addLocation = this.addLocation;
        }
        if (this.location === 'Choose Location') {
            classificationObjectData.locationSelection = this.locationSelection;
        }
        let incidentDataObject = {
            image: null,
            alcoholTest: this.alcoholTest
        };
        if (this.insertPhotoisChecked) {
            let imageData = {
                image: this.imagePath2
            };
            incidentDataObject.image = this.imagePath2;
        }
        let environmentalDataColletion = {
            chemicalSplit: this.chemicalSplit,
            nameOfChemical: null,
            image: null,
            approximateQtyofChemical: null,
            emergencySpill: this.emergencySpill
        };
        if (this.chemicalSplit === 'Yes') {
            environmentalDataColletion.nameOfChemical = this.nameOfChemical;
            environmentalDataColletion.image = this.imagePath3;
            environmentalDataColletion.approximateQtyofChemical = this.approximateQtyofChemical;
        }
        let reputationCollectionData = {
            image: this.imagePath4,
            individualReputationDamaged: null,
            companyReputationDamged: null,
            reputationCheckBox: this.reputationCheckBox
        };
        if (this.individualChecked) {
            reputationCollectionData.individualReputationDamaged = this.individualReputationDamaged;
        }
        if (this.companyChecked) {
            reputationCollectionData.companyReputationDamged = this.companyReputatonDamaged;
        }
        let securityCollectionData = {
            securityRadiovalue: this.securityRadio,
            itsecurityCheckbox: null
        };
        if (this.securityRadio == 'IT') {
            securityCollectionData.itsecurityCheckbox = this.itsecurityCheckbox;
        }
        let assetCollectionData = {
            assetNumberRadioValue: this.assetNumber,
            image: this.imagePath5,
            assetsNumbers: null
        };
        if (this.assetNumber == 'Yes') {
            assetCollectionData.assetsNumbers = this.assetsNumbers;
        }
        ;
        if (this.person_one_details.returnToNormalDuties === 'Yes') {
            this.person_one_details.returnToAlernateDuties = null;
        }
        if (this.person_two_details.returnToNormalDuties === 'Yes') {
            this.person_two_details.returnToAlernateDuties = null;
        }
        if (this.person_three_details.returnToNormalDuties === 'Yes') {
            this.person_three_details.returnToAlernateDuties = null;
        }
        if (this.person_four_details.returnToNormalDuties === 'Yes') {
            this.person_four_details.returnToAlernateDuties = null;
        }
        let fd = new FormData();
        fd.append("photography_image", this.imagePath);
        fd.append("reputation_damage_image", this.imagePath4);
        fd.append("extent_damage_image", this.imagePath5);
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
        }
        fd.append("classification_shift_type", this.shiftType);
        fd.append("classification_supervisor", this.superVisor);
        fd.append("classification_manager", this.nameOfManager);
        fd.append("incident_description", this.descriptionIncident);
        fd.append("incident_description_action", this.immediateAction);
        fd.append("reputation_negative_effect", this.nagativeEffetct);
        //incident photo pending from postman and here also 
        fd.append("incident_description_alcohol_test", this.alcoholTest);
        fd.append("injury_persons", this.formCount); //form value
        fd.append("environmental_description", this.environmentActionTaken);
        fd.append("was_a_chemical_split", this.chemicalSplit);
        //checmical split value inner side query
        fd.append("emergency_spill_kit_used", this.emergencySpill);
        fd.append("reputation_option", repuCheckedValue);
        if (this.individualChecked) {
            fd.append("individual_damage_value", this.individualReputationDamaged);
        }
        if (this.companyChecked) {
            fd.append("company_damage_value", this.companyReputatonDamaged);
        }
        fd.append("incident_description_photo", this.imagePath2); // Alcohal Test  images
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
        fd.append("date_of_incident", this.dateOfIncident);
        fd.append("time_of_incident", this.timeOfIncident);
        fd.append("date_reported", this.dateReported);
        fd.append("time_reported", this.timeReported);
        fd.append("was_there_any_witness_of_the_incident", this.wasThereAnyWitnessOfIncident);
        fd.append("alcohol_test_completed", this.alcoholTest);
        fd.append("drug_test_completed", this.drugTest);
        fd.append("part_of_body_injured_occured", this.partOfBodyInjured);
        fd.append("what_has_been_stolen_item", this.stolenItem);
        fd.append("what_is_the_specific_securities_incident", this.specificSecurityIncident);
        fd.append("approximate_value_of_stolen", this.approximateValueOfStolen);
        fd.append('user_id', localStorage.getItem('id'));
        fd.append("return_to_alternate_duties", this.returnToAlternateDuties);
        fd.append("return_to_alternate_duties_image", this.returnToDutiesImage);
        this.global.presentLoading();
        this.global.postData("api/Add_form/submit_incomplete", fd).subscribe((res) => {
            console.log("part of data", res);
            if (res.status) {
                this.global.presentToast(res.message);
                this.global.dismissLoading();
                this.nav.navigateRoot("form-list");
            }
            else {
                this.global.presentToast(res.message);
                this.global.dismissLoading();
            }
        }, err => {
            console.log("err", err);
            this.global.dismissLoading();
        });
    }
    deSelect(i) {
        this.selected = '';
    }
    checkIncident(e) {
        this.incedent = e.detail.value;
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_2__.ManagersPage,
                cssClass: 'managers',
            });
            modal.onDidDismiss().then((res) => {
                var _a;
                if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.full_name) {
                    this.nameOfManager = res.data.full_name;
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
    onSubmit() {
        if (this.person_one_details.returnToNormalDuties === 'Yes') {
            this.person_one_details.returnToAlernateDuties = null;
        }
        this.person_one_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_one_details.injury_value.push(element.val);
            }
        });
        if (this.person_two_details.returnToNormalDuties === 'Yes') {
            this.person_two_details.returnToAlernateDuties = null;
        }
        this.person_two_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_two_details.injury_value.push(element.val);
            }
        });
        if (this.person_three_details.returnToNormalDuties === 'Yes') {
            this.person_three_details.returnToAlernateDuties = null;
        }
        this.person_three_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_three_details.injury_value.push(element.val);
            }
        });
        if (this.person_four_details.returnToNormalDuties === 'Yes') {
            this.person_four_details.returnToAlernateDuties = null;
        }
        this.person_four_details.injurryCheckBox.forEach(element => {
            if (element.isChecked) {
                this.person_four_details.injury_value.push(element.val);
            }
        });
        this.personDetails.push(this.person_one_details);
        this.personDetails.push(this.person_two_details);
        this.personDetails.push(this.person_three_details);
        this.personDetails.push(this.person_four_details);
        let classiCheckedValue = [];
        let repuCheckedValue = [];
        let it_option_value = [];
        this.itsecurityCheckbox.forEach(element => {
            if (element.isChecked) {
                it_option_value.push(element.val);
            }
        });
        this.classificationChekBox.forEach((el) => {
            if (el.isChecked) {
                classiCheckedValue.push(el.val);
            }
        });
        this.reputationCheckBox.forEach((el) => {
            if (el.isChecked) {
                repuCheckedValue.push(el.val);
            }
        });
        if (this.incedent === '') {
            this.global.presentToast("Incident : Incident is Required");
        }
        else if (this.descriptionIncident === '') {
            this.global.presentToast("Incident Description - Please enter Description of incident");
        }
        else if (this.immediateAction === '') {
            this.global.presentToast("Incident Description - Immediate action taken filed is Required");
        }
        else if (this.environmentActionTaken === '') {
            this.global.presentToast("Environmental - Please enter Immediate action taken to minimize Environmental impact");
        }
        else if (this.nameOfAnyWitness === '') {
            this.global.presentToast("Reputation - Please enter name of any witness");
        }
        else if (this.possibleOutcomeOfIncident === '') {
            this.global.presentToast("Reputation - Please enter possible outcome of this incident");
        }
        else if (this.assetDescription === '') {
            this.global.presentToast("Asset - Please enter asset description");
        }
        else if (this.extentOfDamage === '') {
            this.global.presentToast("Asset - Please enter Extent of Damage");
        }
        else if (this.doneDifferently === '') {
            this.global.presentToast("Report - Please enter what could have been done differently");
        }
        else if (this.nameOfManager === '' || this.nameOfManager === "Name of Manager") {
            this.global.presentToast("Classification - Please Select the manager");
        }
        else {
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
            // let requiredData = {
            //   descriptionIncident: this.descriptionIncident,
            //   immediateAction: this.immediateAction,
            //   environmentActionTaken: this.environmentActionTaken,
            //   nameOfAnyWitness: this.nameOfAnyWitness,
            //   contactOfAnyWitness: this.contactOfAnyWitness,
            //   possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
            //   assetDescription: this.assetDescription,
            //   extentOfDamage: this.extentOfDamage,
            //   doneDifferently: this.doneDifferently
            // };
            // let nonRequirementIncident = {
            //   incidentRadio: this.incedent,
            //   whoWitnessedNearThis: this.whoWitnessedNearThis,
            //   possibleConsequence: this.possibleConsequence
            // }
            let classificationObjectData = {
                ClassificationCheckBoxCollectionData: this.classificationChekBox,
                radioBtnValueofClassficationRadio: this.location,
                dropDownofShiftType: this.shiftType,
                superVisorDropdownValue: this.superVisor,
                addLocation: null,
                locationSelection: null,
                nameOfManager: this.nameOfManager,
                locationRadioValue: this.location
            };
            if (this.location === 'Add Location') {
                classificationObjectData.addLocation = this.addLocation;
            }
            if (this.location === 'Choose Location') {
                classificationObjectData.locationSelection = this.locationSelection;
            }
            let incidentDataObject = {
                image: null,
                alcoholTest: this.alcoholTest
            };
            if (this.insertPhotoisChecked) {
                let imageData = {
                    image: this.imagePath2
                };
                incidentDataObject.image = this.imagePath2;
            }
            let environmentalDataColletion = {
                chemicalSplit: this.chemicalSplit,
                nameOfChemical: null,
                image: null,
                approximateQtyofChemical: null,
                emergencySpill: this.emergencySpill
            };
            if (this.chemicalSplit === 'Yes') {
                environmentalDataColletion.nameOfChemical = this.nameOfChemical;
                environmentalDataColletion.image = this.imagePath3;
                environmentalDataColletion.approximateQtyofChemical = this.approximateQtyofChemical;
            }
            let reputationCollectionData = {
                image: this.imagePath4,
                individualReputationDamaged: null,
                companyReputationDamged: null,
                reputationCheckBox: this.reputationCheckBox
            };
            if (this.individualChecked) {
                reputationCollectionData.individualReputationDamaged = this.individualReputationDamaged;
            }
            if (this.companyChecked) {
                reputationCollectionData.companyReputationDamged = this.companyReputatonDamaged;
            }
            let securityCollectionData = {
                securityRadiovalue: this.securityRadio,
                itsecurityCheckbox: null
            };
            if (this.securityRadio == 'IT') {
                securityCollectionData.itsecurityCheckbox = this.itsecurityCheckbox;
            }
            let assetCollectionData = {
                assetNumberRadioValue: this.assetNumber,
                image: this.imagePath5,
                assetsNumbers: null
            };
            if (this.assetNumber == 'Yes') {
                assetCollectionData.assetsNumbers = this.assetsNumbers;
            }
            ;
            if (this.person_one_details.returnToNormalDuties === 'Yes') {
                this.person_one_details.returnToAlernateDuties = null;
            }
            if (this.person_two_details.returnToNormalDuties === 'Yes') {
                this.person_two_details.returnToAlernateDuties = null;
            }
            if (this.person_three_details.returnToNormalDuties === 'Yes') {
                this.person_three_details.returnToAlernateDuties = null;
            }
            if (this.person_four_details.returnToNormalDuties === 'Yes') {
                this.person_four_details.returnToAlernateDuties = null;
            }
            let fd = new FormData();
            //----------------------------------- Incident -----------------------------------// 
            fd.append("incident_value", this.incedent); // required
            fd.append("incident_near_miss", this.whoWitnessedNearThis);
            fd.append("incident_near_miss_other", this.possibleConsequence);
            //----------------------------------- Incident -----------------------------------// 
            //----------------------------------- photography -----------------------------------//
            fd.append("photography_image", this.imagePath);
            //----------------------------------- photography -----------------------------------//
            //----------------------------------- Incident Description -----------------------------------//
            fd.append("incident_description", this.descriptionIncident); //required
            fd.append("incident_description_action", this.immediateAction); //incident photo pending from postman and here also  // required
            fd.append("incident_description_alcohol_test", this.alcoholTest);
            fd.append("alcohol_test_completed", this.alcoholTest);
            fd.append("incident_description_photo", this.imagePath2); // alcohal test image
            fd.append("drug_test_completed", this.drugTest);
            fd.append("was_there_any_witness_of_the_incident", this.wasThereAnyWitnessOfIncident);
            fd.append("return_to_alternate_duties", this.returnToAlternateDuties);
            fd.append("return_to_alternate_duties_image", this.returnToDutiesImage);
            //----------------------------------- Incident Description -----------------------------------//
            //----------------------------------- Classification -----------------------------------//
            fd.append("classification_value", classiCheckedValue.join(','));
            fd.append("date_of_incident", this.dateOfIncident);
            fd.append("time_of_incident", this.timeOfIncident);
            fd.append("date_reported", this.dateReported);
            fd.append("time_reported", this.timeReported);
            fd.append("classification_location_option", this.location);
            if (this.location == 'Add Location') {
                fd.append("classification_location_value", this.addLocation);
            }
            if (this.location == 'Choose Location') {
                fd.append("classification_location_value", this.locationSelection);
            }
            fd.append("classification_shift_type", this.shiftType);
            fd.append("classification_supervisor", this.superVisor);
            fd.append("classification_manager", this.nameOfManager); // required
            //----------------------------------- Classification -----------------------------------//
            //-------------------------------------------Injury ----------------------------------//
            fd.append("injury_persons", this.formCount); //form value
            fd.append("person_details", JSON.stringify(this.personDetails));
            fd.append("part_of_body_injured_occured", this.partOfBodyInjured);
            //-------------------------------------------Injury ----------------------------------//
            //-------------------------------------------Enviornment ----------------------------------//
            fd.append("environmental_description", this.environmentActionTaken); // required
            fd.append("was_a_chemical_split", this.chemicalSplit); //checmical split value inner side query
            fd.append("chemical_details", JSON.stringify(this.checmicalDetails));
            fd.append("emergency_spill_kit_used", this.emergencySpill);
            //-------------------------------------------Enviornment ----------------------------------//
            //-------------------------------------------Reputation ----------------------------------//
            fd.append("reputation_damage_image", this.imagePath4);
            fd.append("reputation_option", repuCheckedValue);
            if (this.individualChecked) {
                fd.append("individual_damage_value", this.individualReputationDamaged);
            }
            if (this.companyChecked) {
                fd.append("company_damage_value", this.companyReputatonDamaged);
            }
            fd.append("name_of_witness", this.nameOfAnyWitness); // required
            fd.append("possible_outcome_incident", this.possibleOutcomeOfIncident); // required
            fd.append("reutation_negative_effect", this.nagativeEffetct);
            //-------------------------------------------Reputation ----------------------------------//
            //----------------------------------- Security-----------------------------------//
            fd.append("security_option", this.securityRadio);
            if (this.securityRadio == 'IT') {
                fd.append("it_option_value", it_option_value.join(',')); // chexkbox and inner value
            }
            fd.append("what_has_been_stolen_item", this.stolenItem);
            fd.append("approximate_value_of_stolen", this.approximateValueOfStolen);
            fd.append("what_is_the_specific_securities_incident", this.specificSecurityIncident);
            //----------------------------------- Security-----------------------------------//
            //-------------------------------------------Asset ----------------------------------//
            fd.append("asset_description", this.assetDescription); // required
            fd.append("asset_has_number", this.assetNumber);
            if (this.assetNumber == 'Yes') {
                fd.append("asset_number", this.assetsNumbers);
            }
            fd.append("extent_of_damage", this.extentOfDamage); // required
            fd.append("extent_damage_image", this.imagePath5);
            //-------------------------------------------Asset ----------------------------------//
            //-------------------------------------------Report ----------------------------------//
            fd.append("report", this.doneDifferently);
            //-------------------------------------------Report ----------------------------------//
            // fd.append("contact_of_witness", this.contactOfAnyWitness);
            fd.append('user_id', localStorage.getItem('id'));
            this.global.presentLoading();
            this.global.postData("api/add_form/submit", fd).subscribe((res) => {
                if (res.status) {
                    this.global.presentToast(res.message);
                    this.nav.navigateRoot("form-list");
                    localStorage.removeItem("addFormDataStore");
                    this.global.dismissLoading();
                }
                else {
                    this.global.presentToast(res.message);
                    this.global.dismissLoading();
                }
            }, err => {
                console.log("err", err);
                this.global.dismissLoading();
            });
        }
    }
    onSelectFile(event, e) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                if (e == 1) {
                    this.imagePath = event.target.result;
                }
                if (e == 2) {
                    this.imagePath2 = event.target.result;
                }
                if (e == 3) {
                    this.imagePath3 = event.target.result;
                }
                if (e == 4) {
                    this.imagePath4 = event.target.result;
                }
                if (e == 5) {
                    this.imagePath5 = event.target.result;
                }
                if (e == 6) {
                    this.drugImage = event.target.result;
                }
                if (e == 7) {
                    this.returnToDutiesImage = event.target.result;
                }
            };
        }
    }
    dateSelect(e, from) {
        if (from == 'incident') {
            this.dateOfIncident = moment__WEBPACK_IMPORTED_MODULE_7__(e.detail.value).format("YYYY-MM-DD");
            this.selectedDate = e.detail.value;
        }
        else {
            this.dateReported = moment__WEBPACK_IMPORTED_MODULE_7__(e.detail.value).format("YYYY-MM-DD");
            this.selectedDateReported = e.detail.value;
        }
    }
    timeSelect(e, from) {
        if (from == 'timeIncident') {
            this.timeOfIncident = moment__WEBPACK_IMPORTED_MODULE_7__(e.detail.value).format("hh:mm A");
            this.selectedTime = e.detail.value;
        }
        else {
            this.selectedTimeReported = e.detail.value;
            // this.timeReported = moment(e.detail.value).format("hh:mm A");
            this.timeReported = moment__WEBPACK_IMPORTED_MODULE_7__(e.detail.value).format("hh:mm A");
        }
    }
    inputChange(e) {
        console.log(e.detail.value);
        let localDataStore = {
            incedent: this.incedent,
            whoWitnessedNearThis: this.whoWitnessedNearThis,
            possibleConsequence: this.possibleConsequence,
            classificationChekBox: this.classificationChekBox,
            dateOfIncident: this.dateOfIncident,
            timeOfIncident: this.timeOfIncident,
            dateReported: this.dateReported,
            timeReported: this.timeReported,
            location: this.location,
            addLocation: this.addLocation,
            locationSelection: this.locationSelection,
            shiftType: this.shiftType,
            superVisor: this.superVisor,
            nameOfManager: this.nameOfManager,
            imagePath: this.imagePath,
            descriptionIncident: this.descriptionIncident,
            immediateAction: this.immediateAction,
            wasThereAnyWitnessOfIncident: this.wasThereAnyWitnessOfIncident,
            alcoholTest: this.alcoholTest,
            imagePath2: this.imagePath2,
            drugTest: this.drugTest,
            drugImage: this.drugImage,
            formCount: this.formCount,
            person_one_details: this.person_one_details,
            person_two_details: this.person_two_details,
            person_three_details: this.person_three_details,
            person_four_details: this.person_four_details,
            environmentActionTaken: this.environmentActionTaken,
            chemicalSplit: this.chemicalSplit,
            nameOfChemical: this.nameOfChemical,
            insertPhotoisChecked: this.insertPhotoisChecked,
            imagePath3: this.imagePath3,
            approximateQtyofChemical: this.approximateQtyofChemical,
            emergencySpill: this.emergencySpill,
            reputationCheckBox: this.reputationCheckBox,
            individualReputationDamaged: this.individualReputationDamaged,
            companyReputatonDamaged: this.companyReputatonDamaged,
            nagativeEffetct: this.nagativeEffetct,
            nameOfAnyWitness: this.nameOfAnyWitness,
            possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
            securityRadio: this.securityRadio,
            itsecurityCheckbox: this.itsecurityCheckbox,
            stolenItem: this.stolenItem,
            approximateValueOfStolen: this.approximateValueOfStolen,
            specificSecurityIncident: this.specificSecurityIncident,
            assetDescription: this.assetDescription,
            assetsNumbers: this.assetsNumbers,
            extentOfDamage: this.extentOfDamage,
            imagePath5: this.imagePath5,
            doneDifferently: e.detail.value
        };
        localStorage.setItem("addFormDataStore", JSON.stringify(localDataStore));
    }
};
AddFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__.Base64 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform }
];
AddFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-form',
        template: _raw_loader_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddFormPage);



/***/ }),

/***/ 52223:
/*!***************************************************!*\
  !*** ./src/app/pages/add-form/add-form.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerStyle {\n  background: white;\n  margin-top: -24px;\n  border-top-left-radius: 32px;\n  height: 30px;\n  border-top-right-radius: 32px;\n  border-bottom: white;\n  border-bottom-width: 0;\n}\n\n.saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\n\n.toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\n\n.back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\n\nion-content ion-label {\n  white-space: normal;\n}\n\nion-content .container {\n  background-color: var(--ion-color-primary-contrast);\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  padding-bottom: 0px;\n}\n\nion-content .container .logo {\n  padding-top: 80px;\n}\n\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\n\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 21px;\n}\n\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: var(--ion-color-primary-contrast);\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\nion-content .container .input-div {\n  margin-top: 25px;\n}\n\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\n\nion-content .btnView {\n  margin-top: 100px;\n}\n\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\n\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n}\n\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\n\nion-content .questionHead {\n  font-family: mon-black;\n}\n\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\n\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\n\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\n\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\n\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n}\n\nion-content ion-radio {\n  margin-right: 7px;\n}\n\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\n\nion-content ion-col {\n  padding: 0;\n}\n\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\n\nion-content .question {\n  font-size: 14px !important;\n}\n\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\n\nion-content ion-select {\n  text-transform: capitalize;\n  width: 100%;\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\n\nion-content ion-input {\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\n\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\n\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\n\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\n\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\n\nion-content .btnSubmit {\n  margin: 0;\n  height: 44px;\n  font-family: \"mon-medium\";\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n\nion-select-option {\n  text-transform: capitalize;\n  font-family: pop-medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLGlCQUFBO0VBQ0osaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNNLGtCQUFBO0VBQ0YsUUFBQTtFQUNBLFNBQUE7QUFFSjs7QUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSUY7O0FBQUU7RUFDRSxtQkFBQTtBQUdKOztBQUFFO0VBQ0UsbURBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBREk7RUFDRSxpQkFBQTtBQUdOOztBQURJO0VBQ0Usd0JBQUE7QUFHTjs7QUFGTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFJUjs7QUFGTTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFJUjs7QUFESTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdOOztBQURJO0VBQ0UsZ0JBQUE7QUFHTjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBRU47O0FBQ0U7RUFDRSxzQkFBQTtBQUNKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUNJO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ047O0FBQU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVSOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ047O0FBRUU7RUFDRSxpQkFBQTtBQUFKOztBQUVFO0VBQ0UsdUNBQUE7QUFBSjs7QUFFRTtFQUNFLFVBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVFO0VBQ0UsZ0NBQUE7QUFBSjs7QUFFRTtFQUNFLDBCQUFBO0FBQUo7O0FBRUU7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO0FBQUo7O0FBQ0k7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO0FBQ047O0FBQU07RUFDRSx1QkFBQTtBQUVSOztBQUdFO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0U7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0FBREo7O0FBR0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtBQURKOztBQUdFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtBQUFGIiwiZmlsZSI6ImFkZC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTdHlsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMnB4O1xuICAgIGJvcmRlci1ib3R0b206IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4uc2F2ZUJ0bntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDMwcHg7XG59XG4udG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMjlweDtcbiAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgZm9udC1zaXplOiAyOXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7ICAgXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAubG9nbyB7XG4gICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICB9XG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW4tYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5pbnB1dC1kaXYge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5idG5WaWV3IHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgfVxuICAucGx1cyB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLmluY2kge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTJweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIHAge1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGNvbG9yOiAjMzEzMTMxO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG4gIC5xdWVzdGlvbkhlYWQge1xuICAgIGZvbnQtZmFtaWx5OiBtb24tYmxhY2s7XG4gIH1cbiAgLmFjdGl2ZUJhY2tncm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBjb2xvcjogIzMxMzEzMTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmhlYWRlclRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMzNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnJhIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICB9XG4gIH1cbiAgaW9uLXJhZGlvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBpb24tY2hlY2tib3gge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgfVxuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGhyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgaW9uLXJhZGlvIHtcbiAgICAtLWNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgfVxuICAucXVlc3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1saXN0IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlbGVjdCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAubGFiZWxDdXN0b21Ecm9wRG93biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cbiAgLmNhbWVyYSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1tZWRpdW07XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuICBpb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgfVxuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5idG5TdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmltZy1yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IHBvcC1tZWRpdW07XG59XG4iXX0= */");

/***/ }),

/***/ 1609:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-form/add-form.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"toolbar\">\n      <ion-text>ADD FORM</ion-text>\n      <ion-buttons class=\"back\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n      <ion-buttons class='saveBtn' (click)=\"saveItemOffline()\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"headerStyle\"></div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <p>ReacIncident report</p>\n  </div>\n  <div class=\"ion-padding-start ion-padding-end\">\n    <div *ngFor=\"let item of data\">\n      <ion-button class=\"inci\" *ngIf=\"selected!==item\" (click)=\"checkDetails(item)\">\n        <p>{{item}}</p>\n        <img class=\"plus\" src=\"./assets/add.png\" />\n      </ion-button>\n      <!-------------------------------------------------Incident---------------------------------------------->\n\n      <div *ngIf=\"selected==item && selected=='Incident'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-radio-group [(ngModel)]=\"incedent\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Actual</ion-label>\n                <ion-radio slot=\"start\" value=\"Actual\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Near Miss</ion-label>\n                <ion-radio slot=\"start\" value=\"Near Miss\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Serious potential incident (SPI)</ion-label>\n                <ion-radio slot=\"start\" value=\"Serious potential incident (SPI)\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"incedent == 'Near Miss'\">\n          <p class=\"question\">Who witnessed the near miss?</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"whoWitnessedNearThis\">\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <p class=\"question\">\n            Possible consequence under different circumstances\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"possibleConsequence\"></ion-input>\n        </div>\n      </div>\n\n      <!-------------------------------------------------Incident---------------------------------------------->\n\n      <!-------------------------------------------------Classification---------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Classification'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-list class=\"ion-no-padding\">\n\n          <ion-row class='ion-no-padding'>\n            <ion-col size=\"6\" *ngFor=\"let entry of classificationChekBox\">\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\n                <ion-label>{{entry.val}}</ion-label>\n                <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- <ion-radio-group (ionChange)=\"onClassificationRadio($event)\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let entry of classificationChekBox\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-radio slot=\"start\" value=\"{{entry.val}}\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group> -->\n\n        </ion-list>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date of Incident</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event,'incident')\"\n            [(ngModel)]=\"selectedDate\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time of Incident</ion-label>\n          <ion-datetime displayFormat=\"hh:mm A\" placeholder=\"Select Time\"\n            (ionChange)=\"timeSelect($event,'timeIncident')\" [(ngModel)]=\"selectedTime\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date Reported</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event,'reported')\"\n            [(ngModel)]=\"selectedDateReported\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time Reported</ion-label>\n          <ion-datetime displayFormat=\"hh:mm A\" placeholder=\"Select Time\"\n            (ionChange)=\"timeSelect($event,'timeReported')\" [(ngModel)]=\"selectedTimeReported\">\n          </ion-datetime>\n        </ion-item>\n        <ion-radio-group [(ngModel)]=\"location\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Add Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Add Location\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Choose Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Choose Location\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"location=='Add Location'\">\n          <p class=\"question\">Add Location</p>\n          <ion-input placeholder=\"Please add the location\" [(ngModel)]=\"addLocation\"></ion-input>\n        </div>\n        <div *ngIf=\"location == 'Choose Location'\">\n          <p class=\"question\">Choose Location</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-select placeholder=\"Select Location\" interface=\"action-sheet\" [(ngModel)]=\"locationSelection\">\n              <ion-select-option value=\"{{item?.location_name}}\" *ngFor=\"let item of locationList\">\n                {{item?.location_name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Shift Type\" interface=\"action-sheet\" [(ngModel)]='shiftType'>\n            <ion-select-option value=\"{{item?.shift_type}}\" *ngFor=\"let item of shiftTypeList\">{{item?.shift_type}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Supervisor\" interface=\"action-sheet\" [(ngModel)]=\"superVisor\">\n            <ion-select-option value=\"{{item?.full_name}}\" *ngFor=\"let item of superVisorList\">{{item?.full_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label class=\"labelCustomDropDown\">{{nameOfManager}}</ion-label>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\" (click)=\"openModal()\">\n              <ion-icon name=\"chevron-down\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </div>\n      <!-------------------------------------------------Classification---------------------------------------------->\n      <!-------------------------------------------------Photography------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Photography'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(1)\">Upload Image</ion-button>\n          <img src=\"{{imagePath}}\" class=\"img-responsive\" *ngIf=\"imagePath!==''\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input type='file' (change)=\"onSelectFile($event,1)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath!==''\"> <br />\n          </div>\n        </div>\n      </div>\n      <!-------------------------------------------------Photography-------------------------------------------------->\n\n\n      <!-------------------------------------------------Incident Description----------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Incident Description'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Description of incident ( note : You must not use any personal details\n          or names)\n        </p>\n        <ion-input placeholder=\"Description of incident\" [(ngModel)]=\"descriptionIncident\"></ion-input>\n        <p class=\"question\">Immediate action taken</p>\n        <ion-input placeholder=\"Immediate action taken\" [(ngModel)]=\"immediateAction\"></ion-input>\n\n        <p class=\"question\">Was there any Witnesses of the incident</p>\n        <ion-input placeholder=\"Witnesses of the incident\" [(ngModel)]=\"wasThereAnyWitnessOfIncident\"></ion-input>\n\n        <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n        <ion-radio-group [(ngModel)]=\"alcoholTest\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Alcohol test completed</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Not Required</ion-label>\n                <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button *ngIf=\"alcoholTest=='Yes'\" class=\"camera\" expand=\"block\" (click)=\"selectImage(2)\">Upload Image\n          </ion-button>\n          <img src=\"{{imagePath2}}\" *ngIf=\"imagePath2!==''\" class=\"img-responsive\" />\n        </div>\n\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input *ngIf=\"alcoholTest=='Yes'\" type='file' (change)=\"onSelectFile($event,2)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath2\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath2!==''\"> <br />\n          </div>\n        </div>\n        <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n\n\n        <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n        <ion-radio-group [(ngModel)]=\"drugTest\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Drug test completed</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Not Required</ion-label>\n                <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button *ngIf=\"drugTest=='Yes'\" class=\"camera\" expand=\"block\" (click)=\"selectImage(6)\">Upload Image\n          </ion-button>\n          <img src=\"{{drugImage}}\" *ngIf=\"drugImage!==''\" class=\"img-responsive\" />\n        </div>\n\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input *ngIf=\"drugTest=='Yes'\" type='file' (change)=\"onSelectFile($event,6)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"drugImage\" height=\"200\" class=\"img-responsive\" *ngIf=\"drugImage!==''\"> <br />\n          </div>\n        </div>\n\n        <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n\n        <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n\n        <ion-radio-group [(ngModel)]=\"returnToAlternateDuties\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Return to Alternate Duties</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Not Required</ion-label>\n                <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-text class=\"mandatoryField\">* If selected yes please take a photo or upload the Certificate of Capacity\n            COC.</ion-text>\n        </ion-radio-group>\n\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button *ngIf=\"returnToAlternateDuties=='Yes'\" class=\"camera\" expand=\"block\" (click)=\"selectImage(7)\">\n            Upload Image\n          </ion-button>\n          <img src=\"{{returnToDutiesImage}}\" *ngIf=\"returnToDutiesImage!==''\" class=\"img-responsive\" />\n        </div>\n\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input *ngIf=\"returnToAlternateDuties == 'Yes'\" type='file' (change)=\"onSelectFile($event,7)\">\n          <div class=\"ion-text-center\" *ngIf=\"returnToDutiesImage !=='' && returnToAlternateDuties == 'Yes' \">\n            <img [src]=\"returnToDutiesImage\" height=\"200\" class=\"img-responsive\"> <br />\n          </div>\n        </div>\n\n        <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n\n      </div>\n      <!-------------------------------------------------Incident Description----------------------------------------->\n\n\n      <!-------------------------------------------------Injury------------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Injury'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n\n        <ion-radio-group [(ngModel)]=\"formCount\" (ionChange)=\"itemsChangeForm($event)\">\n          <ion-row>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>1</ion-label>\n                <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>2</ion-label>\n                <ion-radio slot=\"start\" value=\"2\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>3</ion-label>\n                <ion-radio slot=\"start\" value=\"3\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>4</ion-label>\n                <ion-radio slot=\"start\" value=\"4\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-card *ngIf=\"itemsArray.length>=1\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 1 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_one_details.fullNameOfInjuredPerson\">\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_one_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_one_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\" mode=\"ios\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_one_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n\n          <ion-radio-group [(ngModel)]=\"person_one_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          \n          <div *ngIf=\"person_one_details.returnToNormalDuties === 'No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"normalDutiesExplanation\"> </ion-input>\n          </div>\n\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_one_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n\n          <div *ngIf=\"person_one_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_one_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.partOfBodyInjured\"></ion-input>\n          </div>\n\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_one_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n\n          <div *ngIf=\"person_one_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_one_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n\n          <div *ngIf=\"person_one_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_one_details.administeredPersonName\"></ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_one_details.adminsteredPersonNumber\"></ion-input>\n            </div>\n          </div>\n\n          <img class=\"img-responsive\" src=\"./assets/person.jpg\">\n        </ion-card>\n\n        <ion-card *ngIf=\"itemsArray.length>=2\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 2 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_two_details.fullNameOfInjuredPerson\">\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_two_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_two_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_two_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n          <ion-radio-group [(ngModel)]=\"person_two_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"person_two_details.returnToNormalDuties === 'No'\">\n            <ion-radio-group [(ngModel)]=\"person_two_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_two_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_two_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.partOfBodyInjured\"></ion-input>\n          </div>\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_two_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_two_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_two_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n          <div *ngIf=\"person_two_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_two_details.administeredPersonName\"></ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_two_details.adminsteredPersonNumber\"></ion-input>\n            </div>\n          </div>\n          <img src=\"./assets/person.jpg\" class=\"img-responsive\">\n        </ion-card>\n\n        <ion-card *ngIf=\"itemsArray.length>=3\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 3 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_three_details.fullNameOfInjuredPerson\">\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_three_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_three_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_three_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n          <ion-radio-group [(ngModel)]=\"person_three_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"person_three_details.returnToNormalDuties === 'No'\">\n            <ion-radio-group [(ngModel)]=\"person_three_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_three_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_three_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.partOfBodyInjured\"></ion-input>\n          </div>\n\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_three_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_three_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_three_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n          <div *ngIf=\"person_three_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_three_details.administeredPersonName\">\n              </ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_three_details.adminsteredPersonNumber\"></ion-input>\n            </div>\n          </div>\n          <img src=\"./assets/person.jpg\" class=\"img-responsive\">\n        </ion-card>\n\n        <ion-card *ngIf=\"itemsArray.length>=4\">\n          <div class=\"headerTitle\">\n            <p class=\"questionHead\">Person 4 Details</p>\n          </div>\n          <p class=\"question\">Full Name of Injured Person</p>\n          <ion-item class=\"ra\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\"\n              [(ngModel)]=\"person_four_details.fullNameOfInjuredPerson\">\n              <ion-select-option value=\"{{item?.name_of_witness}}\" *ngFor=\"let item of witnessList\">\n                {{item?.name_of_witness}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div *ngIf='person_four_details.fullNameOfInjuredPerson==\"Other\"'>\n            <p class=\"question\">Full name of Injured Person</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.other_name\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"person_four_details.gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Other\">Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ra\">\n            <ion-label>Date of Birth</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"person_four_details.dateOfBirth\">\n            </ion-datetime>\n          </ion-item>\n          <ion-radio-group [(ngModel)]=\"person_four_details.returnToNormalDuties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Normal Duties</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <div *ngIf=\"person_four_details.returnToNormalDuties === 'No'\">\n            <ion-radio-group [(ngModel)]=\"person_four_details.returnToAlernateDuties\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Return to Alternate Duties</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"person_four_details.returnToAlernateDuties==='No'\">\n            <p class=\"question\">Explanation:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.explanation\"></ion-input>\n          </div>\n          <ion-item class=\"ra\">\n            <ion-label>Initial Injury / IIIness Classification</ion-label>\n          </ion-item>\n          <ion-list class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of person_four_details.injurryCheckBox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <div>\n            <p class=\"question\">Part of body injury occurred:</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.partOfBodyInjured\"></ion-input>\n          </div>\n\n          <div>\n            <ion-radio-group [(ngModel)]=\"person_four_details.immediateTreatment\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Was immediate treatment given;</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </div>\n\n          <div *ngIf=\"person_four_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Explain</p>\n            <ion-input placeholder=\"Enter here\" [(ngModel)]=\"person_four_details.immediateTreatmentGivenExplanation\">\n            </ion-input>\n          </div>\n\n          <div *ngIf=\"person_four_details.immediateTreatment == 'Yes'\">\n            <p class=\"question\">Who administered treatment : </p>\n            <div>\n              <p class=\"question\">Person Name</p>\n              <ion-input placeholder=\"Person Name\" [(ngModel)]=\"person_four_details.administeredPersonName\"></ion-input>\n            </div>\n            <div>\n              <p class=\"question\">Number</p>\n              <ion-input placeholder=\"Person Number\" type=\"tel\"\n                [(ngModel)]=\"person_four_details.adminsteredPersonNumber\"></ion-input>\n            </div>\n          </div>\n\n\n          <img src=\"./assets/person.jpg\" class=\"img-responsive\">\n        </ion-card>\n\n      </div>\n      <!-------------------------------------------------Injury------------------------------------------------------->\n\n      <!-------------------------------------------------Environmental------------------------------------------------>\n      <div *ngIf=\"selected==item && selected=='Environmental'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Immediate action taken to minimize Environmental impact\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"environmentActionTaken\"></ion-input>\n\n        <ion-radio-group [(ngModel)]=\"chemicalSplit\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was a chemical split?</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"chemicalSplit==='Yes'\">\n          <p class=\"question\">\n            Name of chemical\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"nameOfChemical\"></ion-input>\n          <ion-list>\n            <ion-item class=\"ra ion-no-padding\" lines=\"none\">\n              <ion-label>Insert Photo</ion-label>\n              <ion-checkbox slot=\"start\" [(ngModel)]=\"insertPhotoisChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <div *ngIf=\"platformCheck==='cordova'\">\n            <div *ngIf=\"insertPhotoisChecked\">\n              <ion-button *ngIf=\"insertPhotoisChecked\" class=\"camera\" expand=\"block\" (click)=\"selectImage(3)\">Upload\n                Image\n              </ion-button>\n              <img src=\"{{imagePath3}}\" *ngIf=\"imagePath3!==''\" class=\"img-responsive\" />\n            </div>\n          </div>\n          <div *ngIf=\"platformCheck !== 'cordova'\">\n            <input *ngIf=\"insertPhotoisChecked\" type='file' (change)=\"onSelectFile($event,3)\">\n            <div class=\"ion-text-center\">\n              <img [src]=\"imagePath3\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath3!==''\"> <br />\n            </div>\n          </div>\n          <p class=\"question\">\n            Approximate quantity of chemical spilled\n          </p>\n          <ion-input placeholder=\"Enter here\" type=\"tel\" [(ngModel)]=\"approximateQtyofChemical\"></ion-input>\n        </div>\n\n        <ion-radio-group [(ngModel)]=\"emergencySpill\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the emergency spill kit used?</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </div>\n      <!-------------------------------------------------Environmental------------------------------------------------>\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Reputation'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label>Was the reputation damages an individual or Company ?\n          </ion-label>\n        </ion-item>\n        <ion-list class=\"ion-no-padding\">\n          <ion-item *ngFor=\"let entry of reputationCheckBox\" lines=\"none\" class=\"ion-no-padding\">\n            <ion-label>{{entry.val}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\" (ionChange)=\"reputationCheckboxEvent($event,entry)\">\n            </ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <div *ngIf=\"individualChecked\">\n          <p class=\"question\">\n            How has the Individual's reputation been damaged?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"individualReputationDamaged\"></ion-input>\n        </div>\n        <div *ngIf=\"companyChecked\">\n          <p class=\"question\">\n            How has the Company's reputation been damaged?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"companyReputatonDamaged\"></ion-input>\n        </div>\n        <ion-radio-group [(ngModel)]=\"nagativeEffetct\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the negative effect internal or external</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Internal</ion-label>\n                <ion-radio slot=\"start\" value=\"Internal\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>External</ion-label>\n                <ion-radio slot=\"start\" value=\"External\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Both</ion-label>\n                <ion-radio slot=\"start\" value=\"Both\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <p class=\"question\">\n          Name of any witness\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"nameOfAnyWitness\"></ion-input>\n        <!-- \n        <p class=\"question\">\n          Contact of any witness\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"contactOfAnyWitness\"></ion-input> -->\n\n\n        <p class=\"question\">\n          What is the possible outcome of this incident?\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"possibleOutcomeOfIncident\"></ion-input>\n        <!-- <p class=\"question\">\n          Upload evidence of the Reputation damage\n        </p>\n        <div *ngIf=\"platformCheck === 'cordova'\">\n        <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(4)\">Upload Image</ion-button>\n        <img src=\"{{imagePath4}}\" *ngIf=\"imagePath4!==''\" class=\"img-responsive\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input type='file' (change)=\"onSelectFile($event,4)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath4\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath4!==''\"> <br />\n          </div>\n        </div> -->\n      </div>\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n      <!-------------------------------------------------Security----------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Security'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <ion-radio-group [(ngModel)]=\"securityRadio\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>IT</ion-label>\n                <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Theft</ion-label>\n                <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Other</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"securityRadio=='IT'\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>What kind of IT Security Incident ?</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let entry of itsecurityCheckbox\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{entry.val}}</ion-label>\n                  <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n        <div *ngIf=\"securityRadio=='Theft'\">\n          <p class=\"question\">\n            What has been stolen ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"stolenItem\"></ion-input>\n\n          <p class=\"question\">\n            Approximate value of stolen item ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"approximateValueOfStolen\"></ion-input>\n\n          <p class=\"question\">\n            What is the specific Security incident ?\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]='specificSecurityIncident'></ion-input>\n        </div>\n      </div>\n      <!-------------------------------------------------Security----------------------------------------------------->\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n      <div *ngIf=\"selected==item && selected=='Asset'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Asset description\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"assetDescription\"></ion-input>\n        <ion-radio-group [(ngModel)]=\"assetNumber\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Does Asset have a number</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"assetNumber=='Yes'\">\n          <p class=\"question\">\n            Asset Number\n          </p>\n          <ion-input placeholder=\"Enter here\" type=\"tel\" [(ngModel)]=\"assetsNumbers\"></ion-input>\n        </div>\n        <p class=\"question\">\n          Extent of Damage\n        </p>\n        <ion-input placeholder=\"Extent of Damage\" [(ngModel)]=\"extentOfDamage\"></ion-input>\n        <p class=\"question\">\n          Upload photo of damage\n        </p>\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(5)\">Upload Image</ion-button>\n          <img src=\"{{imagePath5}}\" *ngIf=\"imagePath5!==''\" class=\"img-responsive\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input type='file' (change)=\"onSelectFile($event,5)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath5\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath5!==''\"> <br />\n          </div>\n        </div>\n      </div>\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n      <!-------------------------------------------------Report------------------------------------------------------->\n\n      <div *ngIf=\"selected==item && selected=='Report'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{item}}</p>\n          <img (click)=\"deSelect(item)\" class=\"plus\" src=\"./assets/minus.png\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          What could have done differently?\n        </p>\n        <ion-input placeholder=\"Enter here\" [(ngModel)]=\"doneDifferently\" (ionChange)=\"inputChange($event)\"></ion-input>\n      </div>\n      <!-------------------------------------------------Report------------------------------------------------------->\n    </div>\n  </div>\n  <ion-button (click)=\"onSubmit()\" expand=\"full\" class=\"btnSubmit\">SUBMIT</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-form_add-form_module_ts-es2015.js.map