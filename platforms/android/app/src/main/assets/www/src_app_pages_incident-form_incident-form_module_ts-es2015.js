(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_incident-form_incident-form_module_ts"],{

/***/ 53036:
/*!*********************************************************************!*\
  !*** ./src/app/pages/incident-form/incident-form-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormPageRoutingModule": function() { return /* binding */ IncidentFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incident_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-form.page */ 98132);




const routes = [
    {
        path: '',
        component: _incident_form_page__WEBPACK_IMPORTED_MODULE_0__.IncidentFormPage
    }
];
let IncidentFormPageRoutingModule = class IncidentFormPageRoutingModule {
};
IncidentFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncidentFormPageRoutingModule);



/***/ }),

/***/ 66501:
/*!*************************************************************!*\
  !*** ./src/app/pages/incident-form/incident-form.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormPageModule": function() { return /* binding */ IncidentFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incident_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-form-routing.module */ 53036);
/* harmony import */ var _incident_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-form.page */ 98132);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let IncidentFormPageModule = class IncidentFormPageModule {
};
IncidentFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _incident_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidentFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_incident_form_page__WEBPACK_IMPORTED_MODULE_1__.IncidentFormPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
    })
], IncidentFormPageModule);



/***/ }),

/***/ 98132:
/*!***********************************************************!*\
  !*** ./src/app/pages/incident-form/incident-form.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormPage": function() { return /* binding */ IncidentFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incident_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incident-form.page.html */ 73294);
/* harmony import */ var _incident_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-form.page.scss */ 63830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 67871);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ 97465);
/* harmony import */ var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared-service/shared.service */ 49481);
/* harmony import */ var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/managers/managers.page */ 58127);












let IncidentFormPage = class IncidentFormPage {
    constructor(globalService, sharedService, modal, actionSheetController, camera, fb, nav) {
        this.globalService = globalService;
        this.sharedService = sharedService;
        this.modal = modal;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.fb = fb;
        this.nav = nav;
        this.imagePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imageUrl;
        this.pName = 'Add Form';
        this.witnessList = [];
        this.shiftTypeList = [];
        this.superVisorList = [];
        this.locationList = [];
        this.managerList = 'Name of Manager';
        this.selectedTabList = [];
        this.itemsArray = [1];
        this.reputationWitnessList = [];
        //-------------------------------------- Forms ----------------------------------------------------//
        //-------------------------------------- Tab ----------------------------------------------------//
        this.tabList = [
            {
                val: 'Incident',
                tabDisable: false,
            },
            {
                val: 'Photography',
                tabDisable: true,
            },
            {
                val: 'Incident Description',
                tabDisable: true,
            },
            {
                val: 'Classification',
                tabDisable: true,
            },
        ];
        this.selectedTabItem = 'Incident';
        //-------------------------------------- Tab ----------------------------------------------------//
        this.classificationList = [
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
                val: 'Report',
                isChecked: false,
            },
        ];
        this.itSecurityList = [
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
        this.injuryList = 
        // [
        // {
        //   id: '',
        //   list: 
        [
            {
                val: 'FAI',
                isChecked: false,
                desc: 'FAI: First Aid injury, an injury that requires a single first aid treatment and a follow-up visit for subsequent observation involving on minor injuries which do not ordinarily require medical care, and for which the person would typically return immediately to their normal activities'
            },
            {
                val: 'MTI',
                isChecked: false,
                desc: 'MTI: Medical Treatment Injury, an injury or disease that resulted in a certain level of treatment (not first aid treatment) given by a physician or medical personnel under standing orders of a physician.'
            },
            {
                val: 'ADI',
                isChecked: false,
                desc: 'ADI: Alternative Duties Injury, temporary duties , identified as in Hort Enterprises Alternative Duties Within the Workplace HE-WHS-FRM-0036, that are required when an injured worker is unable to return to their normal duties.'
            },
            {
                val: 'LTL',
                isChecked: false,
                desc: 'LTI: Lost Time Injury, an injury that results in a day or more lost from work.'
            },
            {
                val: 'PII',
                isChecked: false,
                desc: 'PII: Permanent Impairment Injury, the permanent impact an injury has on a person"s functioning.'
            },
            {
                val: 'Fatality',
                isChecked: false,
                desc: "Fatality: Fatality, a person who dies as a result from an injury.",
            }
            // {
            //   val: 'Head',
            //   isChecked: false,
            // },
            // {
            //   val: 'Limbs',
            //   isChecked: false,
            // },
            // {
            //   val: 'Torso',
            //   isChecked: false,
            // },
            // ]
            // }
        ];
    }
    ngOnInit() {
        console.log('cordovaPlateform', this.globalService.cordovaPlateform);
        this.loadWitness();
        this.loadShift();
        this.loadSuperwiser();
        this.loadLocation();
        this.findValueInWitness();
        this.incidentForm = this.fb.group({
            incident_value: [''],
            incident_near_miss: [''],
            incident_near_miss_other: [''],
        });
        this.photoGraphyForm = this.fb.group({
            photography_image: ['']
        });
        this.incidentDesForm = this.fb.group({
            incident_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            incident_description_action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            seen_differently: [''],
            was_there_any_witness_of_the_incident: [''],
            incident_description_alcohol_test: [''],
            // alcohol_test_completed: [''],
            incident_description_photo: [''],
            drug_test_completed: [''],
            return_to_alternate_duties: [''],
            return_to_alternate_duties_image: ['']
        });
        this.classificationForm = this.fb.group({
            classification_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]),
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
            classification_manager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // required field
        });
        this.injuryForm = this.fb.group({
            injury_persons: [''],
            person_details: this.fb.array([]),
            // person_details: this.fb.group([]),
            // part_of_body_injured_occured: [''],
        });
        this.enviornmentForm = this.fb.group({
            environmental_description: [''],
            was_a_chemical_split: [''],
            chemical_details: this.fb.group({
                chemical_name: [''],
                chemical_photo: [''],
                approximate_quantity: [''],
                insertPhotoCheckBox: [false],
            }),
            //chemical photo insert checkbox
            emergency_spill_kit_used: [''],
        });
        this.reputationDesForm = this.fb.group({
            reputation_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]),
            individual_damage_value: [''],
            company_damage_value: [''],
            reputation_damage_image: [''],
            reutation_negative_effect: [''],
            effected_department: [''],
            external_party: [''],
            name_of_witness: [''],
            other_witness_details: this.fb.group({
                other_witness_name: [''],
                other_witness_mobile_no: [''],
                other_witness_email: ['']
            }),
            possible_outcome_incident: [''], // required field
        });
        this.securityForm = this.fb.group({
            security_option: [''],
            it_option_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]),
            what_has_been_stolen_item: [''],
            approximate_value_of_stolen: [''],
            what_is_the_specific_securities_incident: [''],
        });
        this.assetDescriptionForm = this.fb.group({
            asset_description: [''],
            asset_has_number: [''],
            asset_number: [''],
            extent_of_damage: [''],
            extent_damage_image: ['']
        });
        this.reportForm = this.fb.group({
            report: ['']
        });
    }
    loadWitness() {
        this.globalService.getData1("Witness/getWitnessList").subscribe((res) => {
            if (res.status) {
                // console.log('loadWitness', res.data);
                this.witnessList = res.data;
                this.reputationWitnessList = this.witnessList;
                let data = this.findValueInWitness();
                if (data) {
                    this.reputationWitnessList.push({ contact_of_witness: "", name_of_witness: "Other" });
                }
            }
        }, err => {
            console.log(err);
        });
    }
    findValueInWitness() {
        let val = false;
        this.reputationWitnessList.find(ele => {
            if (ele.name_of_witness != "Other") {
                val = true;
            }
        });
        return val;
    }
    loadShift() {
        this.globalService.getData1("Shift/get_shift_typelist").subscribe((res) => {
            if (res && res.status) {
                this.shiftTypeList = res.data;
            }
        }, err => {
            console.log("Eror", err);
        });
    }
    loadSuperwiser() {
        this.globalService.getData1("Supervisor/getSupervisorList").subscribe((res) => {
            if (res) {
                this.superVisorList = res.data;
            }
        }, err => {
            console.log("Eror", err);
        });
    }
    loadLocation() {
        this.globalService.getData1("location/getLocation").subscribe((res) => {
            if (res) {
                // console.log("res location", res);
                this.locationList = res.data;
            }
        }, err => {
            console.log("Eror", err);
        });
    }
    onSelectTabItem(i) {
        // console.log('onSelectTabItem', i);
        this.selectedTabItem = i;
        // console.log('  this.selectedTabItem', this.selectedTabItem);
    }
    onDeSelectTabItem(i) {
        this.selectedTabItem = '';
        if (i == 'Classification') {
            this.selectedTabList = this.selectedTabList;
        }
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
            // if (e == 1) {
            //   this.imagePath = image;
            //   // let t = this.DataURIToBlob(image);
            //   // let realData = this.imagePath.split(",")[1];
            //   this.imageUri = imageData;
            // }
            // if (e == 2) {
            //   this.imagePath2 = image;
            //   let t = this.DataURIToBlob(image);
            //   this.image2Uri = imageData;
            // }
            // if (e == 3) {
            //   this.imagePath3 = image;
            //   this.image3Uri = imageData
            // }
            // if (e == 4) {
            //   this.imagePath4 = image;
            //   this.image4Uri = imageData
            // }
            // if (e == 5) {
            //   this.imagePath5 = image;
            //   this.image5Uri = imageData
            // }
            // if (e == 6) {
            //   this.drugImage = image;
            //   this.drugTestImageUri = imageData
            // }
            // if (e == 7) {
            //   this.returnToDutiesImage = image;
            // }
        }, (err) => {
            console.log("errOf Image ", err);
        });
    }
    onOpenModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_6__.ManagersPage,
                cssClass: 'managers',
            });
            modal.onDidDismiss().then((res) => {
                var _a;
                if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.full_name) {
                    this.managerList = res.data.full_name;
                    this.classificationForm.controls.classification_manager.setValue(res.data.full_name);
                }
            });
            return yield modal.present();
        });
    }
    validation() {
        let enviornmental = false;
        let reputation = false;
        let assets = false;
        let report = false;
        this.classificationForm.value['classification_value'].find(ele => {
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
        }
        else if (this.incidentDesForm.value['incident_description'] === '' || this.incidentDesForm.value['incident_description'] == null) {
            this.globalService.presentToast("Incident Description - Please enter Description of incident");
        }
        else if (this.incidentDesForm.value['incident_description_action'] === '' || this.incidentDesForm.value['incident_description_action'] == null) {
            this.globalService.presentToast("Incident Description - Immediate action taken filed is Required");
        }
        else if (this.classificationForm.value['classification_manager'] == '' || this.classificationForm.value['classification_manager'] == null) {
            this.globalService.presentToast("Classification - Please Select the manager");
        }
        else if ((this.enviornmentForm.value['environmental_description'] === '' || this.enviornmentForm.value['environmental_description'] == null) && enviornmental) {
            this.globalService.presentToast("Environmental - Please enter Immediate action taken to minimize Environmental impact");
        }
        else if ((this.reputationDesForm.value['name_of_witness'] === '' || this.reputationDesForm.value['name_of_witness'] == null || this.reputationDesForm.value['name_of_witness'] == undefined) && reputation) {
            this.globalService.presentToast("Reputation - Please enter name of any witness");
        }
        else if ((this.reputationDesForm.value['name_of_witness'] == '' ||
            this.reputationDesForm.value['name_of_witness'] == null) && reputation) {
            this.globalService.presentToast("Reputation - Please enter witness name.");
        }
        else if (this.reputationDesForm.value['name_of_witness'] == 'Other' &&
            (this.reputationDesForm.value['other_witness_details'].other_witness_name == '' ||
                this.reputationDesForm.value['other_witness_details'].other_witness_name == null ||
                this.reputationDesForm.value['other_witness_details'].other_witness_name == undefined) && reputation) {
            this.globalService.presentToast("Reputation - Please enter other witness name.");
        }
        else if (this.reputationDesForm.value['name_of_witness'] == 'Other' &&
            (this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == '' ||
                this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == null ||
                this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == undefined)
            && reputation) {
            this.globalService.presentToast("Reputation - Please enter other witness mobile no.");
        }
        else if (this.reputationDesForm.value['name_of_witness'] == 'Other' &&
            (this.reputationDesForm.value['other_witness_details'].other_witness_email == '' ||
                this.reputationDesForm.value['other_witness_details'].other_witness_email == null ||
                this.reputationDesForm.value['other_witness_details'].other_witness_email == undefined)
            && reputation) {
            this.globalService.presentToast("Reputation - Please enter other witness email.");
        }
        else if ((this.reputationDesForm.value['possible_outcome_incident'] === '' ||
            this.reputationDesForm.value['possible_outcome_incident'] == null)
            && reputation) {
            this.globalService.presentToast("Reputation - Please enter possible outcome of this incident");
        }
        else if ((this.assetDescriptionForm.value['asset_description'] === '' || this.assetDescriptionForm.value['asset_description'] == null) && assets) {
            this.globalService.presentToast("Asset - Please enter asset description");
        }
        else if ((this.assetDescriptionForm.value['extent_of_damage'] === '' || this.assetDescriptionForm.value['extent_of_damage'] == null) && assets) {
            this.globalService.presentToast("Asset - Please enter Extent of Damage");
        }
        else if ((this.reportForm.value['report'] === '' || this.reportForm.value['report'] == null) && report) {
            this.globalService.presentToast("Report - Please enter what could have been done differently");
        }
        else {
            return true;
        }
    }
    onSubmit(val) {
        // console.log('incidentForm', this.incidentForm.value);
        // console.log('incidentDesForm', this.incidentDesForm.value);
        // console.log('classificationForm', this.classificationForm.value);
        // console.log('injuryForm', this.injuryForm.value);
        // console.log('enviornmentForm', this.enviornmentForm.value);
        // console.log('reputationDesForm', this.reputationDesForm.value);
        // console.log('securityForm', this.securityForm.value);
        // console.log('assetDescriptionForm', this.assetDescriptionForm.value)
        // console.log('reportForm', this.reportForm.value);
        // console.log('injuryForm', this.injuryForm.value);
        let validation = false;
        if (val == 'submit') {
            validation = this.validation();
        }
        if ((val == 'submit' && validation) || (val == 'incomplete_submit' && validation == false)) {
            let fd = new FormData();
            //----------------------------------- Incident -----------------------------------// 
            fd.append("incident_value", this.incidentForm.value['incident_value']); // required
            fd.append("incident_near_miss", this.incidentForm.value['incident_near_miss']);
            fd.append("incident_near_miss_other", this.incidentForm.value['incident_near_miss_other']);
            //----------------------------------- Incident -----------------------------------// 
            //----------------------------------- photography -----------------------------------//
            fd.append("photography_image", this.imagePath);
            //----------------------------------- photography -----------------------------------//
            //----------------------------------- Incident Description -----------------------------------//
            fd.append("incident_description", this.incidentDesForm.value['incident_description']); //required
            fd.append("incident_description_action", this.incidentDesForm.value['incident_description_action']); //incident photo pending from postman and here also  // required
            fd.append("incident_description_alcohol_test", this.incidentDesForm.value['incident_description_alcohol_test']);
            fd.append("alcohol_test_completed", this.incidentDesForm.value['incident_description_alcohol_test']);
            fd.append("incident_description_photo", this.incidentDesForm.value['incident_description_photo']); // alcohal test image
            fd.append("drug_test_completed", this.incidentDesForm.value['drug_test_completed']);
            fd.append("seen_differently", this.incidentDesForm.value['seen_differently']);
            fd.append("was_there_any_witness_of_the_incident", this.incidentDesForm.value['was_there_any_witness_of_the_incident']);
            fd.append("return_to_alternate_duties", this.incidentDesForm.value['return_to_alternate_duties']);
            fd.append("return_to_alternate_duties_image", this.incidentDesForm.value['return_to_alternate_duties_image']);
            //----------------------------------- Incident Description -----------------------------------//
            //----------------------------------- Classification -----------------------------------//
            fd.append("classification_value", this.classificationForm.value['classification_value'].join(','));
            fd.append("date_of_incident", this.classificationForm.value['date_of_incident']);
            fd.append("time_of_incident", this.classificationForm.value['time_of_incident']);
            fd.append("date_reported", this.classificationForm.value['date_reported']);
            fd.append("time_reported", this.classificationForm.value['time_reported']);
            fd.append("classification_location_option", this.classificationForm.value['classification_location_option']);
            if (this.classificationForm.value['classification_location_option'] == 'Add Location') {
                fd.append("classification_location_value", this.classificationForm.value['classification_location_value']);
            }
            if (this.classificationForm.value['classification_location_option'] == 'Choose Location') {
                fd.append("classification_location_value", this.classificationForm.value['classification_location_value1']);
            }
            fd.append("classification_shift_type", this.classificationForm.value['classification_shift_type']);
            fd.append("classification_supervisor", this.classificationForm.value['classification_supervisor']);
            fd.append("classification_manager", this.classificationForm.value['classification_manager']); // required
            //----------------------------------- Classification -----------------------------------//
            //-------------------------------------------Injury ----------------------------------//
            fd.append("injury_persons", this.injuryForm.value['injury_persons']); //form value
            fd.append("person_details", JSON.stringify(this.injuryForm.value['person_details']));
            // fd.append("part_of_body_injured_occured", this.injuryForm.value['part_of_body_injured_occured']);
            //-------------------------------------------Injury ----------------------------------//
            //-------------------------------------------Enviornment ----------------------------------//
            fd.append("environmental_description", this.enviornmentForm.value['environmental_description']); // required
            fd.append("was_a_chemical_split", this.enviornmentForm.value['was_a_chemical_split']); //checmical split value inner side query
            fd.append("chemical_details", JSON.stringify(this.enviornmentForm.value['chemical_details']));
            fd.append("emergency_spill_kit_used", this.enviornmentForm.value['emergency_spill_kit_used']);
            //-------------------------------------------Enviornment ----------------------------------//
            //-------------------------------------------Reputation ----------------------------------// 
            fd.append("reputation_option", this.reputationDesForm.value['reputation_option']);
            fd.append("individual_damage_value", this.reputationDesForm.value['individual_damage_value']);
            fd.append("company_damage_value", this.reputationDesForm.value['company_damage_value']);
            fd.append("reputation_damage_image", '');
            fd.append("reutation_negative_effect", this.reputationDesForm.value['reutation_negative_effect']);
            fd.append("effected_department", this.reputationDesForm.value['effected_department']);
            fd.append("external_party", this.reputationDesForm.value['external_party']);
            fd.append("name_of_witness", this.reputationDesForm.value['name_of_witness']);
            fd.append("other_witness_details", JSON.stringify(this.reputationDesForm.value['other_witness_details']));
            fd.append("possible_outcome_incident", this.reputationDesForm.value['possible_outcome_incident']); // required
            //-------------------------------------------Reputation ----------------------------------//
            //----------------------------------- Security-----------------------------------/
            fd.append("security_option", this.securityForm.value['security_option']);
            if (this.securityForm.value['security_option'] == 'IT') {
                fd.append("it_option_value", this.securityForm.value['it_option_value'].join(',')); // chexkbox and inner value
            }
            fd.append("what_has_been_stolen_item", this.securityForm.value['what_has_been_stolen_item']);
            fd.append("approximate_value_of_stolen", this.securityForm.value['approximate_value_of_stolen']);
            fd.append("what_is_the_specific_securities_incident", this.securityForm.value['what_is_the_specific_securities_incident']);
            //----------------------------------- Security-----------------------------------//
            //-------------------------------------------Asset ----------------------------------//
            fd.append("asset_description", this.assetDescriptionForm.value['asset_description']); // required
            fd.append("asset_has_number", this.assetDescriptionForm.value['asset_has_number']);
            if (this.assetDescriptionForm.value['asset_has_number'] == 'Yes') {
                fd.append("asset_number", this.assetDescriptionForm.value['asset_number']);
            }
            fd.append("extent_of_damage", this.assetDescriptionForm.value['extent_of_damage']); // required
            fd.append("extent_damage_image", this.assetDescriptionForm.value['extent_damage_image']);
            //-------------------------------------------Asset ----------------------------------//
            //-------------------------------------------Report ----------------------------------//
            fd.append("report", this.reportForm.value['report']);
            //-------------------------------------------Report ----------------------------------//
            // fd.append("contact_of_witness", this.contactOfAnyWitness);
            fd.append('user_id', localStorage.getItem('id'));
            let url = (val == 'submit' ? "add_form/submit" : 'Add_form/submit_incomplete');
            this.globalService.postData1(url, fd).subscribe((res) => {
                // this.globalService.presentLoading();
                // console.log("part of data", res)
                if (res.status) {
                    this.globalService.presentToast(res.message);
                    this.nav.navigateRoot("form-list");
                }
                else {
                    this.globalService.presentToast(res.message);
                }
                // this.globalService.dismissLoading();
            }, err => {
                console.log("err", err);
                this.globalService.dismissLoading();
            });
        }
    }
    onClassificationChange(event) {
        const formArray = this.classificationForm.get('classification_value');
        if (event.target.checked) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(event.target.value));
            this.classificationList.find(ele => {
                if (ele.val == event.target.value) {
                    ele.isChecked = true;
                }
            });
        }
        else {
            let i = 0;
            formArray.controls.forEach((ctrl) => {
                if (ctrl.value == event.target.value) {
                    formArray.removeAt(i);
                    return;
                }
                i++;
            });
            this.classificationList.find(ele => {
                if (ele.val == event.target.value) {
                    ele.isChecked = false;
                }
            });
        }
        this.selectedTabList = formArray.value;
        // console.log('formArray.value', this.selectedTabList);
    }
    onInitialInjuryChange(event, personalDetailIndex, injueyListIndex) {
        // for (var j = 0; j <= this.injuryForm.value['person_details'].length; j++) {
        //   if (event.target.checked) {
        //     if (j == personalDetailIndex) {
        //       this.injuryForm.value['person_details'][personalDetailIndex]['initital_injury'].push(event.target.value);
        //     }
        //   } else {
        //     if (j == personalDetailIndex) {
        //       this.injuryForm.value['person_details'][personalDetailIndex]['initital_injury'].forEach((ele, k) => {
        //         if (ele == event.target.value) {
        //           this.injuryForm.value['person_details'][personalDetailIndex]['initital_injury'].splice(k, 1);
        //           return;
        //         }
        //       });
        //     }
        //   }
        // }
    }
    onSecurityItOption(event) {
        const formArray = this.securityForm.get('it_option_value');
        if (event.target.checked) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(event.target.value));
            this.itSecurityList.find(ele => {
                if (ele.val == event.target.value) {
                    ele.isChecked = true;
                }
            });
        }
        else {
            let i = 0;
            formArray.controls.forEach((ctrl) => {
                if (ctrl.value == event.target.value) {
                    formArray.removeAt(i);
                    return;
                }
                i++;
            });
            this.itSecurityList.find(ele => {
                if (ele.val == event.target.value) {
                    ele.isChecked = false;
                }
            });
        }
    }
    onReputationDamagesCheckBox(event) {
        const formArray = this.reputationDesForm.get('reputation_option');
        if (event.target.checked) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(event.target.value));
            this.reputationCheckBox.find(ele => {
                if (ele.val == event.target.value) {
                    ele.isChecked = true;
                }
            });
        }
        else {
            let i = 0;
            formArray.controls.forEach((ctrl) => {
                if (ctrl.value == event.target.value) {
                    formArray.removeAt(i);
                    return;
                }
                i++;
            });
            this.reputationCheckBox.find(ele => {
                if (ele.val == event.target.value) {
                    ele.isChecked = false;
                }
            });
        }
    }
    onInput(val) {
        this.tabList.find(ele => {
            if (val == 'Incident' && this.incidentForm.valid) {
                if (ele.val != 'Classification') {
                    ele.tabDisable = false;
                }
            }
            else if (val == 'Incident Description' && this.incidentDesForm.valid) {
                ele.tabDisable = false;
            }
            else {
                if ((val == 'Incident Description' && this.incidentDesForm.invalid) && ele.val == 'Classification') {
                    ele.tabDisable = true;
                    this.selectedTabList = [];
                    this.classificationForm.reset();
                    this.injuryForm.reset();
                    this.enviornmentForm.reset();
                    this.reputationDesForm.reset();
                    this.securityForm.reset();
                    this.assetDescriptionForm.reset();
                    this.reportForm.reset();
                }
            }
        });
        if (val == 'Incident' && this.incidentForm.value['incident_value'] != 'Near Miss') {
            this.incidentRadio();
        }
    }
    incidentRadio() {
        this.incidentForm.controls['incident_near_miss'].setValue('');
        this.incidentForm.controls['incident_near_miss_other'].setValue('');
    }
    get injuryPersonDetails() {
        return this.injuryForm.get("person_details");
    }
    injuryPersonKeys() {
        return this.fb.group({
            injured_person_option: [''],
            injured_person_option_value: [''],
            gender: [''],
            date_of_birth: [''],
            normal_duties: [''],
            normal_duties_explanation: [''],
            alternate_duties: [''],
            duties_explanation: [''],
            // initital_injury: new FormArray([]),
            initital_injury: [''],
            part_of_body_injured_occured: [],
            was_immediate_treatment: [''],
            immediate_treatment_given_explanation: [''],
            immediate_treatment_person_name: [''],
            immediate_treatment_person_number: [''],
        });
    }
    onAddMultiplePersonDetails() {
        let no = 0;
        if (this.injuryForm.value["person_details"].length != 0) {
            no = (this.injuryForm.value['injury_persons'] - this.injuryForm.value["person_details"].length);
        }
        if (no == 0) {
            this.injuryPersonDetails.push(this.injuryPersonKeys());
        }
        else if (no > 0) {
            for (let i = 1; i <= no; i++) {
                this.injuryPersonDetails.push(this.injuryPersonKeys());
            }
        }
        else if (no < 0) {
            for (let i = 1; i <= Math.abs(no); i++) {
                this.injuryPersonDetails.controls.pop();
                this.injuryForm.value["person_details"].pop();
            }
        }
        // console.log(this.injuryPersonDetails);
        // console.log('person_details2', this.injuryForm.value["person_details"]);
    }
};
IncidentFormPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService },
    { type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController }
];
IncidentFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-incident-form',
        template: _raw_loader_incident_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incident_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncidentFormPage);



/***/ }),

/***/ 63830:
/*!*************************************************************!*\
  !*** ./src/app/pages/incident-form/incident-form.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerStyle {\n  background: white;\n  margin-top: -24px;\n  border-top-left-radius: 32px;\n  height: 30px;\n  border-top-right-radius: 32px;\n  border-bottom: white;\n  border-bottom-width: 0;\n}\n\n.saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\n\n.toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\n\n.back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\n\nion-content ion-label {\n  white-space: normal;\n}\n\nion-content .container {\n  background-color: var(--ion-color-primary-contrast);\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  padding-bottom: 0px;\n}\n\nion-content .container .logo {\n  padding-top: 80px;\n}\n\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\n\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 21px;\n}\n\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: var(--ion-color-primary-contrast);\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\nion-content .container .input-div {\n  margin-top: 25px;\n}\n\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\n\nion-content .btnView {\n  margin-top: 100px;\n}\n\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\n\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n}\n\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\n\nion-content .questionHead {\n  font-family: mon-black;\n}\n\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\n\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\n\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\n\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\n\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n}\n\nion-content ion-radio {\n  margin-right: 7px;\n}\n\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\n\nion-content ion-col {\n  padding: 0;\n}\n\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\n\nion-content .question {\n  font-size: 14px !important;\n}\n\nion-content .other_witness {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 18px !important;\n}\n\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\n\nion-content ion-select {\n  text-transform: capitalize;\n  width: 100%;\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\n\nion-content ion-input {\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\n\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\n\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\n\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\n\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\n\nion-content .btnSubmit {\n  margin: 0;\n  height: 44px;\n  font-family: \"mon-medium\";\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n\nion-select-option {\n  text-transform: capitalize;\n  font-family: pop-medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBQUU7RUFDRSxtREFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUNFLGlCQUFBO0FBR047O0FBREk7RUFDRSx3QkFBQTtBQUdOOztBQUZNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUlSOztBQUZNO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUlSOztBQURJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR047O0FBREk7RUFDRSxnQkFBQTtBQUdOOztBQUNFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFTjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFTjs7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBQ0k7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ047O0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFBTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRVI7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUNJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDTjs7QUFFRTtFQUNFLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSx1Q0FBQTtBQUFKOztBQUVFO0VBQ0UsVUFBQTtBQUFKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSxnQ0FBQTtBQUFKOztBQUVFO0VBQ0UsMEJBQUE7QUFBSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUVFO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUNJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtBQUNOOztBQUFNO0VBQ0UsdUJBQUE7QUFFUjs7QUFHRTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdFO0VBQ0UsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtBQURKOztBQUdFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdFO0VBQ0UseUJBQUE7QUFESjs7QUFHRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7QUFBRiIsImZpbGUiOiJpbmNpZGVudC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJTdHlsZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG4uc2F2ZUJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMzBweDtcclxufVxyXG4udG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAyOXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ2luLWJ0biB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWRpdiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5idG5WaWV3IHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICAucGx1cyB7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5pbmNpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnF1ZXN0aW9uSGVhZCB7XHJcbiAgICBmb250LWZhbWlseTogbW9uLWJsYWNrO1xyXG4gIH1cclxuICAuYWN0aXZlQmFja2dyb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlclRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmEge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tcmFkaW8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgfVxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XHJcbiAgfVxyXG4gIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgaHIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBpb24tcmFkaW8ge1xyXG4gICAgLS1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XHJcbiAgfVxyXG4gIC5xdWVzdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm90aGVyX3dpdG5lc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5sYWJlbEN1c3RvbURyb3BEb3duIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuICAuY2FtZXJhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcclxuICB9XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAuYnRuU3VibWl0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4uaW1nLXJlc3BvbnNpdmUge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5pb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IHBvcC1tZWRpdW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 73294:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incident-form/incident-form.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"toolbar\">\n      <ion-text>ADD FORM</ion-text>\n      <ion-buttons class=\"back\">\n        <ion-button (click)=\"nav.back()\">\n          <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons class='saveBtn' (click)=\"onSubmit('incomplete_submit')\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n    <div class=\"headerStyle\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <app-header [pageName]=pName></app-header> -->\n  <div class=\"container\">\n    <p>ReacIncident report</p>\n  </div>\n\n  <div class=\"ion-padding-start ion-padding-end\">\n    <div *ngFor=\"let tabItem of tabList\">\n      <ion-button class=\"inci\" *ngIf=\"selectedTabItem != tabItem.val\" (click)=\"onSelectTabItem(tabItem.val)\"\n        [disabled]=\"tabItem.tabDisable\">\n        <p>{{tabItem.val}} </p>\n        <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n      </ion-button>\n\n      <!-------------------------------------------------Incident---------------------------------------------->\n      <div *ngIf=\"selectedTabItem==tabItem.val && selectedTabItem =='Incident'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val}}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div [formGroup]=\"incidentForm\">\n          <ion-radio-group formControlName=\"incident_value\" (ionChange)=\"onInput('Incident')\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Actual</ion-label>\n                  <ion-radio slot=\"start\" value=\"Actual\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Near Miss</ion-label>\n                  <ion-radio slot=\"start\" value=\"Near Miss\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Serious potential incident (SPI)</ion-label>\n                  <ion-radio slot=\"start\" value=\"Serious potential incident (SPI)\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- <div> -->\n          <div *ngIf=\"incidentForm.value['incident_value'] == 'Near Miss'\">\n            <p class=\"question\">Who witnessed the near miss?</p>\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-select placeholder=\"Select One\" formControlName=\"incident_near_miss\">\n                <ion-select-option value=\"{{witnesskeys?.name_of_witness}}\" *ngFor=\"let witnesskeys of witnessList\">\n                  {{witnesskeys?.name_of_witness}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <p class=\"question\">\n              Possible consequence under different circumstances\n            </p>\n            <ion-input placeholder=\"Enter here\" formControlName=\"incident_near_miss_other\"></ion-input>\n          </div>\n        </div>\n      </div>\n      <!-------------------------------------------------Incident---------------------------------------------->\n\n      <!-------------------------------------------------Photography------------------------------------------------->\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Photography'\" class=\"activeBackground\"\n        [formGroup]=\"photoGraphyForm\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div *ngIf=\"globalService.cordovaPlateform\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(1)\">Upload Image</ion-button>\n          <!-- <img src=\"{{imagePath}}\" class=\"img-responsive\" *ngIf=\"imagePath!==''\" /> -->\n        </div>\n        <div *ngIf=\"!globalService.cordovaPlateform\">\n          <input type='file' (change)=\"onSelectFile($event,1)\" formControlName=\"photography_image\">\n          <div class=\"ion-text-center\">\n            <!-- <img [src]=\"imagePath\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath!==''\"> <br /> -->\n          </div>\n        </div>\n      </div>\n      <!-------------------------------------------------Photography-------------------------------------------------->\n\n\n      <!-------------------------------------------------Incident Description----------------------------------------->\n\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Incident Description'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div [formGroup]=\"incidentDesForm\">\n          <p class=\"question\">\n            Description of incident ( note : You must not use any personal details or names)\n          </p>\n          <ion-input placeholder=\"Description of incident\" formControlName=\"incident_description\"\n            (ionChange)=\"onInput('Incident Description')\"></ion-input>\n\n\n          <p class=\"question\">Immediate action taken</p>\n          <ion-input placeholder=\"Immediate action taken\" formControlName=\"incident_description_action\"\n            (ionChange)=\"onInput('Incident Description')\"></ion-input>\n\n          <p class=\"question\">What could have been done differently?</p>\n          <ion-input placeholder=\"What could have been done differently?\" formControlName=\"seen_differently\">\n          </ion-input>\n\n          <p class=\"question\">Was there any Witnesses of the incident</p>\n          <ion-input placeholder=\"Witnesses of the incident\" formControlName=\"was_there_any_witness_of_the_incident\">\n          </ion-input>\n\n          <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n          <ion-radio-group formControlName=\"incident_description_alcohol_test\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Alcohol test completed</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"platformCheck === 'cordova'\">\n            <ion-button *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\" class=\"camera\"\n              expand=\"block\" (click)=\"selectImage(2)\">Upload Image\n            </ion-button>\n            <img src=\"\" *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\"\n              class=\"img-responsive\" />\n          </div>\n\n          <div *ngIf=\"platformCheck !== 'cordova'\">\n            <input *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\" type='file'\n              (change)=\"onSelectFile($event,2)\">\n            <div class=\"ion-text-center\">\n              <img [src]=\"\" height=\"200\" class=\"img-responsive\"\n                *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\">\n              <br />\n            </div>\n          </div>\n          <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n\n\n          <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n          <ion-radio-group formControlName=\"drug_test_completed\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Drug test completed</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"platformCheck === 'cordova'\">\n            <ion-button *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" class=\"camera\" expand=\"block\"\n              (click)=\"selectImage(6)\">Upload Image\n            </ion-button>\n            <img src=\"\" *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" class=\"img-responsive\" />\n          </div>\n\n          <div *ngIf=\"platformCheck !== 'cordova'\">\n            <input *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" type='file'\n              (change)=\"onSelectFile($event,6)\">\n            <div class=\"ion-text-center\">\n              <img [src]=\"\" height=\"200\" class=\"img-responsive\"\n                *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\">\n              <br />\n            </div>\n          </div>\n\n          <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n\n          <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n\n          <ion-radio-group formControlName=\"return_to_alternate_duties\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Alternate Duties</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-text class=\"mandatoryField\">* If selected yes please take a photo or upload the Certificate of Capacity\n              COC.</ion-text>\n          </ion-radio-group>\n          <div *ngIf=\"platformCheck === 'cordova'\">\n            <ion-button *ngIf=\"returnToAlternateDuties=='Yes'\" class=\"camera\" expand=\"block\" (click)=\"selectImage(7)\">\n              Upload Image\n            </ion-button>\n            <img src=\"\" *ngIf=\"incidentDesForm.value['return_to_alternate_duties']=='Yes'\" class=\"img-responsive\" />\n          </div>\n\n          <div *ngIf=\"platformCheck !== 'cordova'\">\n            <input *ngIf=\"incidentDesForm.value['return_to_alternate_duties']=='Yes'\" type='file'\n              (change)=\"onSelectFile($event,7)\">\n            <div class=\"ion-text-center\" *ngIf=\" incidentDesForm.value['return_to_alternate_duties']=='Yes' \">\n              <img [src]=\"\" height=\"200\" class=\"img-responsive\"> <br />\n            </div>\n          </div>\n          <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n        </div>\n      </div>\n\n      <!-------------------------------------------------Incident Description----------------------------------------->\n\n\n      <!-------------------------------------------------Classification---------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem =='Classification'\" [formGroup]='classificationForm'\n        class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-list class=\"ion-no-padding\">\n          <ion-row class='ion-no-padding'>\n            <ion-col size=\"6\" *ngFor=\"let classificationValue of classificationList; let i=index\">\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\n                <ion-label>{{classificationValue.val}}</ion-label>\n                <ion-checkbox slot=\"start\" [value]=\"classificationValue.val\" [checked]=\"classificationValue.isChecked\"\n                  (ionChange)=\"onClassificationChange($event)\"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date of Incident</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" formControlName=\"date_of_incident\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time of Incident</ion-label>\n          <ion-datetime displayFormat=\"hh:mm A\" placeholder=\"Select Time\" formControlName=\"time_of_incident\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date Reported</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" formControlName=\"date_reported\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time Reported</ion-label>\n          <ion-datetime displayFormat=\"hh:mm A\" placeholder=\"Select Time\" formControlName=\"time_reported\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-radio-group formControlName=\"classification_location_option\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Add Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Add Location\">\n                </ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Choose Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Choose Location\">\n                </ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"classificationForm.value['classification_location_option'] =='Add Location'\">\n          <p class=\"question\">Add Location</p>\n          <ion-input placeholder=\"Please add the location\" formControlName=\"classification_location_value\"></ion-input>\n        </div>\n\n        <div *ngIf=\"classificationForm.value['classification_location_option'] == 'Choose Location'\">\n          <p class=\"question\">Choose Location</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-select placeholder=\"Select Location\" interface=\"action-sheet\"\n              formControlName=\"classification_location_value1\">\n              <ion-select-option value=\"{{locationListItem?.location_name}}\"\n                *ngFor=\"let locationListItem of locationList\">\n                {{locationListItem?.location_name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Shift Type\" interface=\"action-sheet\" formControlName=\"classification_shift_type\">\n            <ion-select-option value=\"{{shiftItem?.shift_type}}\" *ngFor=\"let shiftItem of shiftTypeList\">\n              {{shiftItem?.shift_type}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Supervisor\" interface=\"action-sheet\" formControlName=\"classification_supervisor\">\n            <ion-select-option value=\"{{superVisorItem?.full_name}}\" *ngFor=\"let superVisorItem of superVisorList\">\n              {{superVisorItem?.full_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label class=\"labelCustomDropDown\">{{managerList}}</ion-label>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\" (click)=\"onOpenModal()\">\n              <ion-icon name=\"chevron-down\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </div>\n\n      <!-------------------------------------------------Classification---------------------------------------------->\n    </div>\n\n    <!-------------------------------------------------Classification Sub Tab---------------------------------------------->\n\n    <div *ngFor=\"let classification of selectedTabList; let i = index\">\n      <ion-button class=\"inci\" *ngIf=\"selectedTabItem != classification\" (click)=\"onSelectTabItem(classification)\">\n        <p>{{classification}} </p>\n        <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n      </ion-button>\n\n      <!-------------------------------------------------Injury------------------------------------------------------->\n      <!-- <div *ngIf=\"selectedTabItem==tabItem && selectedTabItem=='Injury'\" class=\"activeBackground\"> -->\n      <div *ngIf=\"selectedTabItem == classification && classification =='Injury'\" class=\"activeBackground\"\n        [formGroup]=\"injuryForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-radio-group formControlName=\"injury_persons\" (ionChange)=\"onAddMultiplePersonDetails()\">\n          <ion-row>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>1</ion-label>\n                <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>2</ion-label>\n                <ion-radio slot=\"start\" value=\"2\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>3</ion-label>\n                <ion-radio slot=\"start\" value=\"3\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>4</ion-label>\n                <ion-radio slot=\"start\" value=\"4\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div formArrayName=\"person_details\" *ngFor=\"let personDetails of injuryPersonDetails.controls; let j = index \">\n          <ion-card>\n            <div class=\"headerTitle\">\n              <p class=\"questionHead\">Person {{(j+1)}} Details</p>\n            </div>\n            <div [formGroupName]=\"j\">\n              <p class=\"question\">Full Name of Injured Person</p>\n              <ion-item class=\"ra\">\n                <ion-select placeholder=\"Select One\" interface=\"action-sheet\" formControlName=\"injured_person_option\">\n                  <ion-select-option value=\"{{witnessName?.name_of_witness}}\" *ngFor=\"let witnessName of witnessList\">\n                    {{witnessName?.name_of_witness}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <div *ngIf='injuryForm.value[\"person_details\"][j].injured_person_option==\"Other\"'>\n                <p class=\"question\">Full name of Injured Person</p>\n                <ion-input placeholder=\"Enter here\" formControlName=\"injured_person_option_value\">\n                </ion-input>\n              </div>\n\n              <ion-item class=\"ra\">\n                <ion-label>Gender</ion-label>\n                <ion-select placeholder=\"Select One\" interface=\"action-sheet\" formControlName=\"gender\">\n                  <ion-select-option value=\"Male\">Male</ion-select-option>\n                  <ion-select-option value=\"Female\">Female</ion-select-option>\n                  <ion-select-option value=\"Other\">Other</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item class=\"ion-no-padding ra\" mode=\"ios\">\n                <ion-label>Date of Birth</ion-label>\n                <ion-datetime displayFormat=\"MM/DD/YYYY\" formControlName=\"date_of_birth\">\n                </ion-datetime>\n              </ion-item>\n\n              <ion-radio-group formControlName=\"normal_duties\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Return to Normal Duties</ion-label>\n                </ion-item>\n                <ion-row class=\"ion-no-padding\">\n                  <ion-col size=\"6\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].normal_duties == 'No'\">\n                <p class=\"question\">Explanation:</p>\n                <ion-input placeholder=\"Enter here\" formControlName=\"normal_duties_explanation\"> </ion-input>\n              </div>\n\n              <div>\n                <ion-radio-group formControlName=\"alternate_duties\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Return to Alternate Duties</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Yes</ion-label>\n                        <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>No</ion-label>\n                        <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-radio-group>\n              </div>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].alternate_duties ==='No'\">\n                <p class=\"question\">Explanation:</p>\n                <ion-input placeholder=\"Enter here\" formControlName=\"duties_explanation\"></ion-input>\n              </div>\n\n              <ion-item class=\"ra\">\n                <ion-label>Initial Injury / IIIness Classification</ion-label>\n              </ion-item>\n\n\n\n              <ion-radio-group formControlName=\"initital_injury\">\n                <ion-row>\n                  <ion-col size=\"6\" *ngFor=\"let injuryKeys of injuryList;\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>{{injuryKeys.val}}</ion-label>\n                      <ion-radio slot=\"start\" value=\"{{injuryKeys.val}}\">\n                      </ion-radio>\n                    </ion-item>\n                    <ion-text class=\"mandatoryField\"\n                      *ngIf=\"injuryKeys.val  == injuryForm.value['person_details'][j].initital_injury\">\n                      {{injuryKeys.desc}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <div>\n                <p class=\"question\">Part of body injured:</p>\n                <ion-input placeholder=\"Enter here\" formControlName=\"part_of_body_injured_occured\">\n                </ion-input>\n              </div>\n\n              <div>\n                <ion-radio-group formControlName=\"was_immediate_treatment\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Was immediate treatment given;</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Yes</ion-label>\n                        <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>No</ion-label>\n                        <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-radio-group>\n              </div>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].was_immediate_treatment == 'Yes'\">\n                <p class=\"question\">What treatment was given?</p>\n                <ion-input placeholder=\"Enter here\" formControlName=\"immediate_treatment_given_explanation\">\n                </ion-input>\n              </div>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].was_immediate_treatment == 'Yes'\">\n                <p class=\"question\">Who administered treatment : </p>\n                <div>\n                  <p class=\"question\">Person Name</p>\n                  <ion-input placeholder=\"Person Name\" formControlName=\"immediate_treatment_person_name\">\n                  </ion-input>\n                </div>\n\n                <div>\n                  <p class=\"question\">Contact Details</p>\n                  <ion-input placeholder=\"Please enter mobile no or email id\" type=\"tel\"\n                    formControlName=\"immediate_treatment_person_number\">\n                  </ion-input>\n                </div>\n              </div>\n\n            </div>\n            <img class=\"img-responsive\" src=\"./assets/person.jpg\">\n          </ion-card>\n        </div>\n      </div>\n\n      <!-------------------------------------------------Injury------------------------------------------------------->\n\n      <!-------------------------------------------------Environmental------------------------------------------------>\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Environmental'\" class=\"activeBackground\"\n        [formGroup]=\"enviornmentForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <p class=\"question\">\n          Immediate action taken to minimize Environmental impact\n        </p>\n        <ion-input placeholder=\"Enter here\" formControlName='environmental_description'></ion-input>\n\n        <ion-radio-group formControlName=\"was_a_chemical_split\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was a chemical split?</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"enviornmentForm.value['was_a_chemical_split']==='Yes'\" formGroupName=\"chemical_details\">\n          <p class=\"question\">\n            Name of chemical\n          </p>\n          <ion-input placeholder=\"Enter here\" formControlName=\"chemical_name\"></ion-input>\n          <ion-list>\n            <ion-item class=\"ra ion-no-padding\" lines=\"none\">\n              <ion-label>Insert Photo</ion-label>\n              <!-- <ion-checkbox slot=\"start\" [checked]='insertPhotoCheckBox' [value]=\"insertPhotoCheckBox\"\n                formControlName=\"insertPhotoCheckBox\" (ionChange)=\"onChemicalCheckBox($event)\">\n              </ion-checkbox> -->\n              <ion-checkbox slot=\"start\" [value]=\"insertPhotoCheckBox\" formControlName=\"insertPhotoCheckBox\">\n              </ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <div *ngIf=\"platformCheck==='cordova'\">\n            <div *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(3)\">Upload\n                Image\n              </ion-button>\n              <img src=\"\" *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\"\n                class=\"img-responsive\" />\n            </div>\n          </div>\n          <div *ngIf=\"platformCheck !== 'cordova'\">\n            <input *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\" type='file'\n              (change)=\"onSelectFile($event,3)\">\n            <div class=\"ion-text-center\">\n              <img [src]=\"\" height=\"200\" class=\"img-responsive\" *ngIf=\"\"> <br />\n            </div>\n          </div>\n          <p class=\"question\">\n            Approximate quantity of chemical spilled\n          </p>\n          <ion-input placeholder=\"Enter here\" type=\"tel\" formControlName=\"approximate_quantity\">\n          </ion-input>\n        </div>\n\n        <ion-radio-group formControlName='emergency_spill_kit_used'>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the emergency spill kit used?</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </div>\n      <!-------------------------------------------------Environmental------------------------------------------------>\n\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Reputation'\" class=\"activeBackground\"\n        [formGroup]=\"reputationDesForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label>Was the reputation damages an individual or Company ?\n          </ion-label>\n        </ion-item>\n        <ion-list class=\"ion-no-padding\">\n          <ion-item *ngFor=\"let reputationCheckBoxItem of reputationCheckBox\" lines=\"none\" class=\"ion-no-padding\">\n            <ion-label>{{reputationCheckBoxItem.val}}</ion-label>\n            <ion-checkbox slot=\"end\" (ionChange)=\"onReputationDamagesCheckBox($event)\"\n              [value]=\"reputationCheckBoxItem.val\" [checked]=\"reputationCheckBoxItem.isChecked\">\n            </ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <div\n          *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Individual' || reputationDesForm.value['reputation_option'][1] == 'Individual'\">\n          <p class=\"question\">\n            How has the Individual's reputation been damaged?\n          </p>\n          <ion-input placeholder=\"Enter here\" formControlName=\"individual_damage_value\"></ion-input>\n        </div>\n        <div\n          *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Company' || reputationDesForm.value['reputation_option'][1] =='Company'\">\n          <p class=\"question\">\n            How has the Company's reputation been damaged?\n          </p>\n          <ion-input placeholder=\"Enter here\" formControlName=\"company_damage_value\"></ion-input>\n        </div>\n\n        <ion-radio-group formControlName=\"reutation_negative_effect\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the negative effect internal or external</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Internal</ion-label>\n                <ion-radio slot=\"start\" value=\"Internal\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>External</ion-label>\n                <ion-radio slot=\"start\" value=\"External\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Both</ion-label>\n                <ion-radio slot=\"start\" value=\"Both\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"effected_department\"\n          *ngIf=\"(reputationDesForm.value['reutation_negative_effect'] == 'Internal') || (reputationDesForm.value['reutation_negative_effect'] == 'Both') \">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>What Department was effected?</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Orange Division</ion-label>\n                <ion-radio slot=\"start\" value=\"Orange Division\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Project Services</ion-label>\n                <ion-radio slot=\"start\" value=\"Project Services\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Mudgee Division</ion-label>\n                <ion-radio slot=\"start\" value=\"Mudgee Division\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>West Wyalong Division</ion-label>\n                <ion-radio slot=\"start\" value=\"West Wyalong Division\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div\n          *ngIf=\"(reputationDesForm.value['reutation_negative_effect'] == 'External') || (reputationDesForm.value['reutation_negative_effect'] == 'Both') \">\n          <p class=\"question\">\n            Who is the external party?\n          </p>\n          <ion-input placeholder=\"Enter here\" formControlName=\"external_party\"></ion-input>\n        </div>\n\n        <p class=\"question\">\n          Name of any witness\n        </p>\n        <!-- <ion-input placeholder=\"Enter here\" formControlName=\"name_of_witness\"></ion-input> -->\n        <ion-select placeholder=\"Select One\" interface=\"action-sheet\" formControlName=\"name_of_witness\">\n          <ion-select-option value=\"{{reputationWitnessValue?.name_of_witness}}\"\n            *ngFor=\"let reputationWitnessValue of reputationWitnessList\">\n            {{reputationWitnessValue?.name_of_witness}}</ion-select-option>\n        </ion-select>\n\n        <div *ngIf=\"reputationDesForm.value['name_of_witness'] == 'Other'\" formGroupName='other_witness_details'>\n          <p class=\"other_witness\"> Other Witness Details </p>\n          <p class=\"question\">\n            Name\n          </p>\n          <ion-input placeholder=\"Enter Other Witness Name\" formControlName=\"other_witness_name\"></ion-input>\n          <p class=\"question\">\n            Mobile No\n          </p>\n          <ion-input type=\"tel\" placeholder=\"Enter Other Witness Mobile No \" formControlName=\"other_witness_mobile_no\">\n          </ion-input>\n\n          <p class=\"question\">\n            Email id\n          </p>\n          <ion-input type=\"email\" placeholder=\"Enter Other Witness Email\" formControlName=\"other_witness_email\">\n          </ion-input>\n        </div>\n\n        <p class=\"question\">\n          What is the possible outcome of this incident?\n        </p>\n        <ion-input placeholder=\"Enter here\" formControlName=\"possible_outcome_incident\"></ion-input>\n\n      </div>\n      <!-------------------------------------------------Reputation--------------------------------------------------->\n\n      <!-------------------------------------------------Security----------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Security'\" class=\"activeBackground\"\n        [formGroup]=\"securityForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <ion-radio-group formControlName=\"security_option\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>IT</ion-label>\n                <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Theft</ion-label>\n                <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Other</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"securityForm.value['security_option']=='IT'\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>What kind of IT Security Incident ?</ion-label>\n            </ion-item>\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let itSecurityItem of itSecurityList\">\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\n                  <ion-label>{{itSecurityItem.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [value]=\"itSecurityItem.val\" [checked]=\"itSecurityItem.isChecked\"\n                    (ionChange)=\"onSecurityItOption($event)\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n        <div *ngIf=\"securityForm.value['security_option']=='Theft'\">\n          <p class=\"question\">\n            What has been stolen ?\n          </p>\n          <ion-input placeholder=\"Enter here\" formControlName=\"what_has_been_stolen_item\"></ion-input>\n          <p class=\"question\">\n            Approximate value of stolen item ?\n          </p>\n          <ion-input placeholder=\"Enter here\" formControlName=\"approximate_value_of_stolen\"></ion-input>\n        </div>\n\n        <div *ngIf=\"securityForm.value['security_option']=='Other'\">\n          <p class=\"question\">\n            What is the Security incident ?\n          </p>\n          <ion-input placeholder=\"Enter here\" formControlName=\"what_is_the_specific_securities_incident\"></ion-input>\n        </div>\n      </div>\n      <!-------------------------------------------------Security----------------------------------------------------->\n\n\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n      <!-- <div *ngIf=\"selectedTabItem==tabItem && selectedTabItem=='Asset'\" class=\"activeBackground\"> -->\n      <div *ngIf=\" selectedTabItem == classification && classification =='Asset'\" class=\"activeBackground\"\n        [formGroup]=\"assetDescriptionForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Asset description\n        </p>\n        <ion-input placeholder=\"Enter here\" formControlName=\"asset_description\"></ion-input>\n        <ion-radio-group formControlName=\"asset_has_number\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Does Asset have a number</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"assetDescriptionForm.value['asset_has_number']=='Yes'\">\n          <p class=\"question\">\n            Asset Number\n          </p>\n          <ion-input placeholder=\"Enter here\" type=\"tel\" formControlName=\"asset_number\"></ion-input>\n        </div>\n        <p class=\"question\">\n          Extent of Damage\n        </p>\n        <ion-input placeholder=\"Extent of Damage\" formControlName=\"extent_of_damage\"></ion-input>\n        <p class=\"question\">\n          Upload photo of damage\n        </p>\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(5)\">Upload Image</ion-button>\n          <img src=\"{{imagePath5}}\" *ngIf=\"imagePath5!==''\" class=\"img-responsive\" />\n        </div>\n        <div *ngIf=\"platformCheck !== 'cordova'\">\n          <input type='file' (change)=\"onSelectFile($event,5)\">\n          <div class=\"ion-text-center\">\n            <img [src]=\"imagePath5\" height=\"200\" class=\"img-responsive\" *ngIf=\"imagePath5!==''\"> <br />\n          </div>\n        </div>\n      </div>\n      <!-------------------------------------------------Asset-------------------------------------------------------->\n\n      <!-------------------------------------------------Report------------------------------------------------------->\n      <!-- <div *ngIf=\"selectedTabItem==tabItem && selectedTabItem=='Report'\" class=\"activeBackground\"> -->\n      <div *ngIf=\" selectedTabItem == classification && classification =='Report'\" class=\"activeBackground\"\n        [formGroup]=\"reportForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          What could have done differently?\n        </p>\n        <ion-input placeholder=\"Enter here\" formControlName='report'></ion-input>\n      </div>\n      <!-------------------------------------------------Report------------------------------------------------------->\n\n    </div>\n\n    <!-------------------------------------------------Classification Sub Tab---------------------------------------------->\n  </div>\n\n  <ion-button (click)=\"onSubmit('submit')\" expand=\"full\" class=\"btnSubmit\">SUBMIT</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_incident-form_incident-form_module_ts-es2015.js.map