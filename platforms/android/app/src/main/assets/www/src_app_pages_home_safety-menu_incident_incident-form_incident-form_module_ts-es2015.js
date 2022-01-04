(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_incident_incident-form_incident-form_module_ts"],{

/***/ 97190:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form/incident-form-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormPageRoutingModule": function() { return /* binding */ IncidentFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incident_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-form.page */ 81009);




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

/***/ 96394:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form/incident-form.module.ts ***!
  \***************************************************************************************/
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
/* harmony import */ var _incident_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incident-form-routing.module */ 97190);
/* harmony import */ var _incident_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-form.page */ 81009);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let IncidentFormPageModule = class IncidentFormPageModule {
};
IncidentFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _incident_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidentFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [_incident_form_page__WEBPACK_IMPORTED_MODULE_1__.IncidentFormPage,
            // HeaderComponent
        ]
    })
], IncidentFormPageModule);



/***/ }),

/***/ 81009:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form/incident-form.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentFormPage": function() { return /* binding */ IncidentFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incident_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incident-form.page.html */ 2572);
/* harmony import */ var _incident_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-form.page.scss */ 42382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/managers/managers.page */ 58127);
/* harmony import */ var src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/image-modal/image-modal.page */ 91681);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared-service/shared.service */ 49481);
/* harmony import */ var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loading-service/loading.service */ 80513);
/* harmony import */ var _incident_form_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../incident-form.json */ 79044);















let IncidentFormPage = class IncidentFormPage {
    //-------------------------------------------------------- JSON DATA -------------------------------------------------------//
    constructor(globalService, sharedService, modalController, actionSheetController, camera, fb, nav, loadingService) {
        this.globalService = globalService;
        this.sharedService = sharedService;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.fb = fb;
        this.nav = nav;
        this.loadingService = loadingService;
        this.imagePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imageUrl;
        this.pName = 'Add Form';
        this.form_percent = 0;
        this.form_percent_val = 0;
        this.witnessList = [];
        this.superVisorList = [];
        this.employeeList = [];
        this.managerList = [];
        this.shiftTypeList = [];
        this.locationList = [];
        this.bodyPartList = [];
        //-------------------------------------------------- Dropdowns variables---------------------------------------------------------------//
        this.incident_near_miss = '';
        this.was_there_any_witness_of_the_incident = '';
        this.classification_supervisor = '';
        this.classification_manager = '';
        this.injured_person_option = '';
        this.immediate_treatment_person_name = '';
        this.name_of_witness = '';
        //-------------------------------------------------- Dropdowns variables---------------------------------------------------------------//
        this.selectedTabList = [];
        this.platformCheck = '';
        this.nearMissEmpId = '';
        //------------------------------------------------------- Image variables ------------------------------------------------------------//
        this.photoGraphy = new Array();
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
        this.damageImagesObject = {};
        //--------------------------------------------------------- Forms ----------------------------------------------------------//
        //---------------------------------------------------------- Tab -----------------------------------------------------------//
        this.tabList = [
            {
                val: "Incident",
                tabDisable: false
            },
            {
                val: "Photography",
                tabDisable: true
            },
            {
                val: "Incident Description",
                tabDisable: true
            },
            {
                val: "Classification",
                tabDisable: true
            }
        ];
        this.selectedTabItem = 'Incident';
        //---------------------------------------------------------- Tab -----------------------------------------------------------//
        //-------------------------------------------------------- JSON DATA -------------------------------------------------------//
        this.classificationList = [
            {
                val: "Asset",
                isChecked: false
            },
            {
                val: "Environmental",
                isChecked: false
            },
            {
                val: "Injury",
                isChecked: false
            },
            {
                val: "Report",
                isChecked: false
            },
            {
                val: "Reputation",
                isChecked: false
            },
            {
                val: "Security",
                isChecked: false
            }
        ];
        this.itSecurityList = [
            {
                val: "Intrusion",
                isChecked: false
            },
            {
                val: "Privacy breach",
                isChecked: false
            },
            {
                val: "Ransom ware",
                isChecked: false
            },
            {
                val: "Security",
                isChecked: false
            }
        ];
        this.reputationCheckBox = [
            {
                val: "Company",
                isChecked: false
            },
            {
                val: "Individual",
                isChecked: false
            }
        ];
        this.departmentEffect = [
            {
                val: "Dubbo Division",
                isChecked: false
            },
            {
                val: "Mudgee Division",
                isChecked: false
            },
            {
                val: "Orange Division",
                isChecked: false
            },
            {
                val: "Project Services",
                isChecked: false
            },
            {
                val: "West Wyalong Division",
                isChecked: false
            }
        ];
        this.injuryList = _incident_form_json__WEBPACK_IMPORTED_MODULE_9__[0].injuryList;
    }
    ngOnInit() {
        this.loadShift();
        this.loadLocation();
        this.loadBodyPart();
        this.loadEmployee();
        this.loadWitness();
        this.loadSuperwiser();
        // this.findValueInWitness();
        this.incidentForm = this.fb.group({
            incident_value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            incident_near_miss: [''],
            incident_near_miss_other: [''],
        });
        this.photoGraphyForm = this.fb.group({
            photography_image: [''], // photography image
        });
        this.incidentDesForm = this.fb.group({
            incident_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            incident_description_action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            seen_differently: [''],
            was_there_any_witness_of_the_incident: [''],
            incdesc_other_witness_details: this.fb.group({
                incdesc_other_witness_name: [''],
                incdesc_other_witness_mobile_no: [''],
                incdesc_other_witness_email: ['']
            }),
            // incident_description_photo: [''],                      // incident description images
            // alcohol_test_completed: [''],
            incident_description_alcohol_test: [''],
            alcohol_test_image: [''],
            drug_test_completed: [''],
            drug_test_image: [''],
            return_to_alternate_duties: [''],
            return_to_alternate_duties_image: [''] // return to alternate duties image
        });
        this.classificationForm = this.fb.group({
            classification_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([]),
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
            classification_supervisor_other_details: this.fb.group({
                classification_supervisor_other_name: [''],
                classification_supervisor_other_mobile_no: [''],
                classification_supervisor_other_email: ['']
            }),
            classification_manager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            classification_manager_other_details: this.fb.group({
                classification_manager_other_name: [''],
                classification_manager_other_mobile_no: [''],
                classification_manager_other_email: ['']
            }),
        });
        this.assetDescriptionForm = this.fb.group({
            asset_description: [''],
            asset_has_number: [''],
            asset_number: [''],
            extent_of_damage: [''],
            extent_damage_image: [''] // extent damage image
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
            emergency_spill_kit_used: [''],
            out_of_split_kit: ['']
        });
        this.injuryForm = this.fb.group({
            injury_persons: [''],
            person_details: this.fb.array([]),
        });
        this.reportForm = this.fb.group({
            report: ['']
        });
        this.reputationDesForm = this.fb.group({
            reputation_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([]),
            individual_damage_value: [''],
            company_damage_value: [''],
            reputation_negative_effect: [''],
            effected_department: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([]),
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
            it_option_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([]),
            what_has_been_stolen_item: [''],
            approximate_value_of_stolen: [''],
            what_is_the_specific_securities_incident: [''],
        });
    }
    loadEmployee() {
        this.globalService.getData("user/getallemployee").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.employeeList = res.data;
            }
            else {
                this.employeeList = [];
            }
            this.employeeList.unshift({ full_name: "Other", employee_id: '0' });
        }, err => {
            console.log(err);
        });
    }
    loadWitness() {
        this.globalService.getData("Witness/getWitnessList").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.witnessList = res.data;
            }
            else {
                this.witnessList = [];
            }
            this.witnessList.unshift({ full_name: "Other", employee_id: '0' });
        }, err => {
            console.log(err);
        });
    }
    loadSuperwiser() {
        this.globalService.getData("Supervisor/getSupervisorList").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.superVisorList = res.data;
            }
            else {
                this.superVisorList = [];
            }
            this.superVisorList.unshift({ full_name: "Other", employee_id: '0' });
        }, err => {
            console.log("Eror", err);
        });
    }
    loadMangerList() {
        this.globalService.getData("Manager/getManagerList").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.managerList = res.data;
            }
            else {
                this.managerList = [];
            }
            this.managerList.unshift({ full_name: "Other", employee_id: '0' });
        }, err => {
            console.log(err);
        });
    }
    loadShift() {
        this.globalService.getData("Shift/get_shift_typelist").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.shiftTypeList = res.data;
            }
            else {
                this.shiftTypeList = [];
            }
        }, err => {
            console.log("Eror", err);
        });
    }
    loadLocation() {
        this.globalService.getData("location/getLocation").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.locationList = res.data;
            }
            else {
                this.locationList = [];
            }
        }, err => {
            console.log("Eror", err);
        });
    }
    loadBodyPart() {
        this.globalService.getData("Body_part/getbodypart").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.bodyPartList = res.data;
            }
            else {
                this.bodyPartList = [];
            }
        }, err => {
            console.log("Eror", err);
        });
    }
    onSelectTabItem(i) {
        this.selectedTabItem = i;
    }
    onDeSelectTabItem(i) {
        this.selectedTabItem = '';
        if (i == 'Classification') {
            this.selectedTabList = this.selectedTabList;
        }
    }
    //----------------------------------------------------------- Images ----------------------------------------------------------------------//
    pickImage(sourceType, tabName) {
        this.loadingService.presentLoading();
        let image;
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            image = 'data:image/jpeg;base64,' + imageData;
            if (image != '' || image != undefined) {
                if (tabName == 'PhotoGraphy') {
                    if (this.photoGraphy.length < 0) {
                        this.photoGraphy.push(image);
                    }
                    else {
                        this.photoGraphy.unshift(image);
                    }
                }
                if (tabName == 'Alcohol') {
                    if (this.alcohalImages.length < 0) {
                        this.alcohalImages.push(image);
                    }
                    else {
                        this.alcohalImages.unshift(image);
                    }
                }
                if (tabName == 'Drug') {
                    if (this.drugTestImages.length < 0) {
                        this.drugTestImages.push(image);
                    }
                    else {
                        this.drugTestImages.unshift(image);
                    }
                }
                if (tabName == 'ReturnToAlternateDuty') {
                    if (this.alterDutyImages.length < 0) {
                        this.alterDutyImages.push(image);
                    }
                    else {
                        this.alterDutyImages.unshift(image);
                    }
                }
                if (tabName == 'ChemicalImage') {
                    if (this.chemicalImages.length < 0) {
                        this.chemicalImages.push(image);
                    }
                    else {
                        this.chemicalImages.unshift(image);
                    }
                }
                if (tabName == 'DamageImage') {
                    if (this.damageImages.length < 0) {
                        this.damageImages.push(image);
                    }
                    else {
                        this.damageImages.unshift(image);
                    }
                }
                this.onProgressBar('', '');
                this.loadingService.dismissLoading();
            }
            else {
                console.log('Error in image processing.');
                this.loadingService.dismissLoading();
            }
        }, (err) => {
            this.loadingService.dismissLoading();
            console.log("errOf Image ", err);
        });
    }
    mobileUploads(tabName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, tabName);
                        },
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA, tabName);
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
    onPhotoGraphy(event, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (type == 1) {
                this.mobileUploads('PhotoGraphy');
            }
            else if (type == 2) {
                for (let i = 0; i < event.target.files.length; i++) {
                    this.sharedService.getBase64(event.target.files[i]).then(data => {
                        if (this.photoGraphy.length <= 0) {
                            this.photoGraphy.push(data);
                        }
                        else {
                            this.photoGraphy.unshift(data);
                        }
                        this.photoGraphyForm.controls['photography_image'].setValue(this.photoGraphy);
                        this.onProgressBar('', '');
                    }).catch(error => {
                        console.log('error', error);
                    });
                }
            }
        });
    }
    onAlcoholImage(event, type) {
        if (type == 1) {
            this.mobileUploads('Alcohol');
        }
        else if (type == 2) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.sharedService.getBase64(event.target.files[i]).then(data => {
                    if (this.alcohalImages.length <= 0) {
                        this.alcohalImages.push(data);
                    }
                    else {
                        this.alcohalImages.unshift(data);
                    }
                    this.incidentDesForm.controls['alcohol_test_image'].setValue(this.alcohalImages);
                    this.onProgressBar('', '');
                }).catch(error => {
                    console.log('error', error);
                });
            }
        }
    }
    onAlcohalTestSelect(event) {
        if (event.target.value != 'Yes') {
            this.alcohalImages = [];
        }
    }
    onDrugTestImage(event, type) {
        if (type == 1) {
            this.mobileUploads('Drug');
        }
        else if (type == 2) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.sharedService.getBase64(event.target.files[i]).then(data => {
                    if (this.drugTestImages.length <= 0) {
                        this.drugTestImages.push(data);
                    }
                    else {
                        this.drugTestImages.unshift(data);
                    }
                    this.incidentDesForm.controls['drug_test_image'].setValue(this.drugTestImages);
                    this.onProgressBar('', '');
                }).catch(error => {
                    console.log('error', error);
                });
            }
        }
    }
    onDrugTestSelect(event) {
        if (event.target.value != 'Yes') {
            this.drugTestImages = [];
        }
    }
    onReturnToDutyImage(event, type) {
        if (type == 1) {
            this.mobileUploads('ReturnToAlternateDuty');
        }
        else if (type == 2) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.sharedService.getBase64(event.target.files[i]).then(data => {
                    if (this.alterDutyImages.length <= 0) {
                        this.alterDutyImages.push(data);
                    }
                    else {
                        this.alterDutyImages.unshift(data);
                    }
                    this.incidentDesForm.controls['return_to_alternate_duties_image'].setValue(this.alterDutyImages);
                    this.onProgressBar('', '');
                }).catch(error => {
                    console.log('error', error);
                });
            }
        }
    }
    onReturnToDutySelect(event) {
        if (event.target.value != 'Yes') {
            this.alterDutyImages = [];
        }
    }
    onChemicalImageSelect(event, type) {
        if (type == 1) {
            this.mobileUploads('ChemicalImage');
        }
        else if (type == 2) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.sharedService.getBase64(event.target.files[i]).then(data => {
                    if (this.chemicalImages.length <= 0) {
                        this.chemicalImages.push(data);
                    }
                    else {
                        this.chemicalImages.unshift(data);
                    }
                    let image = {
                        chemical_photo: this.chemicalImages
                    };
                    this.enviornmentForm.controls['chemical_details'].patchValue(image);
                    this.onProgressBar('', '');
                    // this.enviornmentForm.get('chemical_details').value.chemical_photo = this.chemicalImagesObject;
                }).catch(error => {
                    console.log('error', error);
                });
            }
        }
    }
    onInsertImageSelect(event) {
        if (!event.detail.checked) {
            this.chemicalImages = [];
        }
    }
    onSelectDamageImage(event, type) {
        if (type == 1) {
            this.mobileUploads('DamageImage');
        }
        else if (type == 2) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.sharedService.getBase64(event.target.files[i]).then(data => {
                    if (this.damageImages.length <= 0) {
                        this.damageImages.push(data);
                    }
                    else {
                        this.damageImages.unshift(data);
                    }
                    this.assetDescriptionForm.controls['extent_damage_image'].setValue(this.damageImages);
                    this.onProgressBar('', '');
                }).catch(error => {
                    console.log('error', error);
                });
            }
        }
    }
    onImageDelete(index, variableName) {
        this[variableName].splice(index, 1);
        this.onProgressBar('', '');
    }
    //----------------------------------------------------------- Images ----------------------------------------------------------------------//
    //----------------------------------------------------------- Modals ----------------------------------------------------------------------//
    onOpenIncidentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('this.witnessList', this.witnessList);
            const modal = yield this.modalController.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_4__.ManagersPage,
                componentProps: {
                    "list": this.witnessList,
                    "header": 'Witness List'
                },
                cssClass: 'managers',
            });
            modal.onDidDismiss().then((res) => {
                console.log('onDidDismiss', res);
                if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                    this.incidentForm.controls['incident_near_miss'].setValue(res.data.full_name);
                    this.incident_near_miss = res.data;
                }
            });
            return yield modal.present();
        });
    }
    onOpenIncDesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_4__.ManagersPage,
                componentProps: {
                    "list": this.witnessList,
                    "header": 'Witness List'
                },
                cssClass: 'managers',
            });
            modal.onDidDismiss().then((res) => {
                if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                    this.incidentDesForm.controls['was_there_any_witness_of_the_incident'].setValue(res.data.full_name);
                    this.was_there_any_witness_of_the_incident = res.data;
                }
            });
            return yield modal.present();
        });
    }
    onOpenClassiModal(headerName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let list = [];
            if (headerName == 'Supervisor List') {
                list = this.superVisorList;
            }
            if (headerName == 'Manager List') {
                list = this.employeeList;
            }
            const modal = yield this.modalController.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_4__.ManagersPage,
                componentProps: {
                    "list": list,
                    "header": headerName
                },
                cssClass: 'managers',
            });
            modal.onDidDismiss().then((res) => {
                if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                    if (headerName == 'Supervisor List') {
                        this.classificationForm.controls['classification_supervisor'].setValue(res.data.full_name);
                        this.classification_supervisor = res.data;
                        if (res.data.full_name != 'Other') {
                            let data = {
                                classification_supervisor_other_name: '',
                                classification_supervisor_other_mobile_no: '',
                                classification_supervisor_other_email: ''
                            };
                            this.classificationForm.controls['classification_supervisor_other_details'].patchValue(data);
                        }
                    }
                    else if (headerName == 'Manager List') {
                        this.classificationForm.controls['classification_manager'].setValue(res.data.full_name);
                        this.classification_manager = res.data;
                        if (res.data.full_name != 'Other') {
                            let data = {
                                classification_manager_other_name: '',
                                classification_manager_other_mobile_no: '',
                                classification_manager_other_email: ''
                            };
                            this.classificationForm.controls['classification_manager_other_details'].patchValue(data);
                        }
                    }
                }
            });
            return yield modal.present();
        });
    }
    onOpenInjuryModal(field, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_4__.ManagersPage,
                componentProps: {
                    "list": this.employeeList,
                    "header": 'Employee List'
                },
                cssClass: 'managers',
            });
            if (this.injuryPersonDetails.value[index].injured_person_option != '' &&
                this.injuryPersonDetails.value[index].injured_person_option != 'Other') {
                let data = {
                    injured_person_option_other_details: {
                        injured_person_option_other_name: '',
                        injured_person_option_other_mobile_no: '',
                        injured_person_option_other_email: ''
                    }
                };
                this.injuryPersonDetails.controls[index].patchValue(data);
            }
            modal.onDidDismiss().then((res) => {
                if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                    if (field == 'Injured person') {
                        let data = {
                            injured_person_option: res.data.full_name,
                            injured_person_option_id: res.data.employee_id,
                        };
                        this.injuryPersonDetails.controls[index].patchValue(data);
                    }
                    if (field == 'Injured administered') {
                        let data = {
                            immediate_treatment_person_name: res.data.full_name,
                            immediate_treatment_person_name_id: res.data.employee_id,
                            // immediate_treatment_person_number: res.data.emp_work_email && res.data.emp_work_email != '' ? res.data.emp_work_email : res.data.emp_mobile
                            immediate_treatment_other_person_detail: {
                                immediate_treatment_person_number: res.data.emp_mobile,
                                immediate_treatment_other_email: res.data.emp_work_email ? res.data.emp_work_email : res.data.emp_oth_email
                            }
                        };
                        this.injuryPersonDetails.controls[index].patchValue(data);
                    }
                }
            });
            return yield modal.present();
        });
    }
    onOpenReputationModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_4__.ManagersPage,
                componentProps: {
                    "list": this.witnessList,
                    "header": 'Witness List'
                },
                cssClass: 'managers',
            });
            modal.onDidDismiss().then((res) => {
                if (res && (res === null || res === void 0 ? void 0 : res.data)) {
                    this.reputationDesForm.controls['name_of_witness'].setValue(res.data.full_name);
                    this.name_of_witness = res.data;
                }
            });
            return yield modal.present();
        });
    }
    onOpenPreview(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_5__.ImageModalPage,
                cssClass: 'transparent-modal',
                componentProps: {
                    img
                }
            });
            modal.present();
        });
    }
    //------------------------------------------------------------ Modals ---------------------------------------------------------------------//
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
        // console.log('photoGraphyForm', this.photoGraphyForm.value);
        // console.log('incidentDesForm', this.incidentDesForm.value);
        // console.log('classificationForm', this.classificationForm.value);
        // console.log('assetDescriptionForm', this.assetDescriptionForm.value)
        // console.log('enviornmentForm', this.enviornmentForm.value);
        // console.log('injuryForm', this.injuryForm.value);
        // console.log('reportForm', this.reportForm.value);
        // console.log('reputationDesForm', this.reputationDesForm.value);
        // console.log('securityForm', this.securityForm.value);
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
        let userDetails = JSON.parse(localStorage.getItem('userDetails'));
        let validation = false;
        if (val == 'submit') {
            validation = this.validation();
        }
        if ((val == 'submit' && validation) || (val == 'incomplete_submit' && validation == false)) {
            let fd = new FormData();
            //---------------------------------------------------------- Incident ---------------------------------------------------------------------// 
            fd.append("incident_value", this.incidentForm.value['incident_value'] ? this.incidentForm.value['incident_value'] : ''); // required
            fd.append("incident_near_miss", this.incidentForm.value['incident_near_miss'] ? this.incidentForm.value['incident_near_miss'] : '');
            // fd.append("incident_near_miss", this.incident_near_miss && this.incident_near_miss.employee_id ? this.incident_near_miss.employee_id : '');
            fd.append("incident_near_miss_other", this.incidentForm.value['incident_near_miss_other'] ? this.incidentForm.value['incident_near_miss_other'] : '');
            //----------------------------------------------------------- Incident --------------------------------------------------------------------// 
            //---------------------------------------------------------- photography ------------------------------------------------------------------//
            fd.append("photography_image", JSON.stringify(this.photoGraphyObject));
            //---------------------------------------------------------- photography ------------------------------------------------------------------//
            //---------------------------------------------------- Incident Description ---------------------------------------------------------------//
            fd.append("incident_description", this.incidentDesForm.value['incident_description'] ? this.incidentDesForm.value['incident_description'] : ''); //required
            fd.append("incident_description_action", this.incidentDesForm.value['incident_description_action'] ? this.incidentDesForm.value['incident_description_action'] : ''); //incident photo pending from postman and here also  // required
            fd.append("incident_description_alcohol_test", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
            fd.append("alcohol_test_completed", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
            fd.append("drug_test_completed", this.incidentDesForm.value['drug_test_completed'] ? this.incidentDesForm.value['drug_test_completed'] : '');
            fd.append("seen_differently", this.incidentDesForm.value['seen_differently'] ? this.incidentDesForm.value['seen_differently'] : '');
            fd.append("was_there_any_witness_of_the_incident", this.was_there_any_witness_of_the_incident && this.was_there_any_witness_of_the_incident.employee_id ? this.was_there_any_witness_of_the_incident.employee_id : '');
            // fd.append("was_there_any_witness_of_the_incident", this.incidentDesForm.value['was_there_any_witness_of_the_incident']);
            fd.append("incdesc_other_witness_details", JSON.stringify(this.incidentDesForm.value['incdesc_other_witness_details']));
            fd.append("return_to_alternate_duties", this.incidentDesForm.value['return_to_alternate_duties'] ? this.incidentDesForm.value['return_to_alternate_duties'] : '');
            fd.append("alcohol_test_image", JSON.stringify(this.alcohalImagesObject)); // alcohal test image
            fd.append("drug_test_image", JSON.stringify(this.drugTestImagesObject)); // drug_test_image
            fd.append("return_to_alternate_duties_image", JSON.stringify(this.alterDutyImagesObject)); // return_to_alternate_duties_image 
            //---------------------------------------------------- Incident Description ---------------------------------------------------------------//
            //-------------------------------------------------------- Classification -----------------------------------------------------------------//
            fd.append("classification_value", this.classificationForm.value['classification_value'].length > 0 ? this.classificationForm.value['classification_value'].join(',') : '');
            fd.append("date_of_incident", this.classificationForm.value['date_of_incident'] ? this.classificationForm.value['date_of_incident'] : '');
            fd.append("time_of_incident", this.classificationForm.value['time_of_incident'] ? this.classificationForm.value['time_of_incident'] : '');
            fd.append("date_reported", this.classificationForm.value['date_reported'] ? this.classificationForm.value['date_reported'] : '');
            fd.append("time_reported", this.classificationForm.value['time_reported'] ? this.classificationForm.value['time_reported'] : '');
            fd.append("classification_location_option", this.classificationForm.value['classification_location_option'] ? this.classificationForm.value['classification_location_option'] : '');
            if (this.classificationForm.value['classification_location_option'] == 'Add Location') {
                fd.append("classification_location_value", this.classificationForm.value['classification_location_value'] ? this.classificationForm.value['classification_location_value'] : '');
            }
            if (this.classificationForm.value['classification_location_option'] == 'Choose Location') {
                fd.append("classification_location_value", this.classificationForm.value['classification_location_value1'] ? this.classificationForm.value['classification_location_value1'] : '');
            }
            fd.append("classification_shift_type", this.classificationForm.value['classification_shift_type'] ? this.classificationForm.value['classification_shift_type'] : '');
            fd.append("classification_supervisor", this.classification_supervisor && this.classification_supervisor.employee_id ? this.classification_supervisor.employee_id : '');
            fd.append("classification_supervisor_other_details", JSON.stringify(this.classificationForm.value['classification_supervisor_other_details']));
            // fd.append("classification_supervisor", this.classificationForm.value['classification_supervisor']);
            // fd.append("classification_manager", this.classificationForm.value['classification_manager']);        // required
            fd.append("classification_manager", this.classification_manager && this.classification_manager.employee_id ? this.classification_manager.employee_id : '');
            fd.append("classification_manager_other_details", JSON.stringify(this.classificationForm.value['classification_manager_other_details']));
            //----------------------------------------------------------- Classification ---------------------------------------------------------------//
            //------------------------------------------------------------- Injury ---------------------------------------------------------------------//
            fd.append("injury_persons", this.injuryForm.value['injury_persons'] ? this.injuryForm.value['injury_persons'] : ''); // form value  
            fd.append("person_details", JSON.stringify(this.injuryForm.value['person_details']));
            //------------------------------------------------------------- Injury ---------------------------------------------------------------------//
            //----------------------------------------------------------- Enviornment ------------------------------------------------------------------//
            fd.append("environmental_description", this.enviornmentForm.value['environmental_description'] ? this.enviornmentForm.value['environmental_description'] : ''); // required
            fd.append("was_a_chemical_split", this.enviornmentForm.value['was_a_chemical_split'] ? this.enviornmentForm.value['was_a_chemical_split'] : ''); // chemical split value inner side query
            fd.append("chemical_details", JSON.stringify(this.enviornmentForm.value['chemical_details'])); // data with image
            fd.append("emergency_spill_kit_used", this.enviornmentForm.value['emergency_spill_kit_used'] ? this.enviornmentForm.value['emergency_spill_kit_used'] : '');
            fd.append("out_of_split_kit", this.enviornmentForm.value['out_of_split_kit'] ? this.enviornmentForm.value['out_of_split_kit'] : '');
            //------------------------------------------------------------ Enviornment ----------------------------------------------------------------//
            //------------------------------------------------------------- Reputation ----------------------------------------------------------------// 
            fd.append("reputation_option", this.reputationDesForm.value['reputation_option'] ? this.reputationDesForm.value['reputation_option'] : '');
            fd.append("individual_damage_value", this.reputationDesForm.value['individual_damage_value'] ? this.reputationDesForm.value['individual_damage_value'] : '');
            fd.append("company_damage_value", this.reputationDesForm.value['company_damage_value'] ? this.reputationDesForm.value['company_damage_value'] : '');
            fd.append("reputation_negative_effect", this.reputationDesForm.value['reputation_negative_effect'] ? this.reputationDesForm.value['reputation_negative_effect'] : '');
            fd.append("effected_department", this.reputationDesForm.value['effected_department'] ? this.reputationDesForm.value['effected_department'] : '');
            fd.append("external_party", this.reputationDesForm.value['external_party'] ? this.reputationDesForm.value['external_party'] : '');
            // fd.append("name_of_witness", this.reputationDesForm.value['name_of_witness']);
            fd.append("name_of_witness", this.name_of_witness && this.name_of_witness.employee_id ? this.name_of_witness.employee_id : '');
            fd.append("other_witness_details", JSON.stringify(this.reputationDesForm.value['other_witness_details']));
            fd.append("possible_outcome_incident", this.reputationDesForm.value['possible_outcome_incident'] ? this.reputationDesForm.value['possible_outcome_incident'] : ''); // required
            //-------------------------------------------------------------- Reputation ---------------------------------------------------------------//
            //--------------------------------------------------------------- Security ----------------------------------------------------------------//
            fd.append("security_option", this.securityForm.value['security_option'] ? this.securityForm.value['security_option'] : '');
            if (this.securityForm.value['security_option'] == 'IT') {
                fd.append("it_option_value", this.securityForm.value['it_option_value'].length > 0 ? this.securityForm.value['it_option_value'].join(',') : ''); // chexkbox and inner value
            }
            fd.append("what_has_been_stolen_item", this.securityForm.value['what_has_been_stolen_item'] ? this.securityForm.value['what_has_been_stolen_item'] : '');
            fd.append("approximate_value_of_stolen", this.securityForm.value['approximate_value_of_stolen'] ? this.securityForm.value['approximate_value_of_stolen'] : '');
            fd.append("what_is_the_specific_securities_incident", this.securityForm.value['what_is_the_specific_securities_incident'] ? this.securityForm.value['what_is_the_specific_securities_incident'] : '');
            //---------------------------------------------------------------- Security----------------------------------------------------------------//
            //----------------------------------------------------------------- Asset ----------------------------------------------------------------//
            fd.append("asset_description", this.assetDescriptionForm.value['asset_description'] ? this.assetDescriptionForm.value['asset_description'] : ''); // required
            fd.append("asset_has_number", this.assetDescriptionForm.value['asset_has_number'] ? this.assetDescriptionForm.value['asset_has_number'] : '');
            if (this.assetDescriptionForm.value['asset_has_number'] == 'Yes') {
                fd.append("asset_number", this.assetDescriptionForm.value['asset_number'] ? this.assetDescriptionForm.value['asset_number'] : '');
            }
            fd.append("extent_of_damage", this.assetDescriptionForm.value['extent_of_damage'] ? this.assetDescriptionForm.value['extent_of_damage'] : ''); // required
            fd.append("extent_damage_image", JSON.stringify(this.damageImagesObject)); // extent_damage_image
            //----------------------------------------------------------------- Asset -----------------------------------------------------------------//
            //---------------------------------------------------------------- Report -----------------------------------------------------------------//
            fd.append("report", this.reportForm.value['report'] ? this.reportForm.value['report'] : '');
            //---------------------------------------------------------------- Report -----------------------------------------------------------------//
            fd.append('user_id', userDetails.id);
            let url = (val == 'submit' ? "add_form/submit" : 'Add_form/submit_incomplete');
            this.globalService.postData(url, fd).subscribe((res) => {
                // this.globalService.presentLoading();
                if (res.status) {
                    this.globalService.presentToast(res.message);
                    this.nav.navigateRoot("incident-form-list");
                }
                else {
                    this.globalService.presentToast(res.message);
                }
                // this.globalService.dismissLoading();
            }, err => {
                console.log("err", err);
                // this.globalService.dismissLoading();
            });
        }
    }
    onClassificationChange(event) {
        const formArray = this.classificationForm.get('classification_value');
        if (event.detail.checked) {
            if (event.detail.value == 'Asset') {
                this.assetDescriptionForm.reset();
            }
            if (event.detail.value == 'Environmental') {
                this.enviornmentForm.reset();
            }
            if (event.detail.value == 'Injury') {
                this.injuryForm.reset();
                for (let i = 0; i < this.injuryPersonDetails.length; i++) {
                    this.injuryPersonDetails.removeAt(i);
                }
            }
            if (event.detail.value == 'Report') {
                this.reputationDesForm.reset();
            }
            if (event.detail.value == 'Reputation') {
                this.reportForm.reset();
            }
            if (event.detail.value == 'Security') {
                this.securityForm.reset();
            }
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(event.detail.value));
            this.classificationList.find(ele => {
                if (ele.val == event.detail.value) {
                    ele.isChecked = true;
                }
            });
        }
        else {
            let i = 0;
            formArray.controls.forEach((ctrl) => {
                if (ctrl.value == event.detail.value) {
                    formArray.removeAt(i);
                    return;
                }
                i++;
            });
            this.classificationList.find(ele => {
                if (ele.val == event.detail.value) {
                    ele.isChecked = false;
                }
            });
        }
        this.selectedTabList = formArray.value;
    }
    onSecurityOption(evt) {
        if (evt.detail.value == 'IT') {
            this.securityForm.controls['what_has_been_stolen_item'].reset();
            this.securityForm.controls['approximate_value_of_stolen'].reset();
            this.securityForm.controls['what_is_the_specific_securities_incident'].reset();
        }
        else if (evt.detail.value == 'Theft') {
            this.itSecurityList.find(ele => {
                ele.isChecked = false;
            });
            this.securityForm.controls['what_is_the_specific_securities_incident'].reset();
        }
        else if (evt.detail.value == 'Other') {
            this.itSecurityList.find(ele => {
                ele.isChecked = false;
            });
            this.securityForm.controls['what_has_been_stolen_item'].reset();
            this.securityForm.controls['approximate_value_of_stolen'].reset();
        }
    }
    onSecurityItOption(event) {
        const formArray = this.securityForm.get('it_option_value');
        if (event.target.checked) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(event.target.value));
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
        if (event.detail.checked) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(event.detail.value));
            this.reputationCheckBox.find(ele => {
                if (ele.val == event.detail.value) {
                    ele.isChecked = event.detail.checked;
                }
            });
        }
        else {
            let i = 0;
            formArray.controls.forEach((ctrl) => {
                if (ctrl.value == event.detail.value) {
                    formArray.removeAt(i);
                    return;
                }
                i++;
            });
            this.reputationCheckBox.find(ele => {
                if (ele.val == event.detail.value) {
                    ele.isChecked = false;
                }
            });
        }
        this.onProgressBar('', '');
    }
    onDepartmentEffectCheckBox(event) {
        const formArray = this.reputationDesForm.get('effected_department');
        if (event.detail.checked) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(event.detail.value));
            this.departmentEffect.find(ele => {
                if (ele.val == event.detail.value) {
                    ele.isChecked = event.detail.checked;
                }
            });
        }
        else {
            let i = 0;
            formArray.controls.forEach((ctrl) => {
                if (ctrl.value == event.detail.value) {
                    formArray.removeAt(i);
                    return;
                }
                i++;
            });
            this.departmentEffect.find(ele => {
                if (ele.val == event.detail.value) {
                    ele.isChecked = false;
                }
            });
        }
        this.onProgressBar('', '');
    }
    onInput(evt, val) {
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
            this.onProgressBar('', '');
        });
        if (val == 'Incident' && evt && evt.detail && evt.detail.value && evt.detail.value != 'Near Miss') {
            this.incidentForm.controls['incident_near_miss'].setValue('');
            this.incidentForm.controls['incident_near_miss_other'].setValue('');
        }
    }
    get injuryPersonDetails() {
        return this.injuryForm.get("person_details");
    }
    injuryPersonKeys() {
        return this.fb.group({
            injured_person_option: [''],
            injured_person_option_id: [''],
            injured_person_option_other_details: this.fb.group({
                injured_person_option_other_name: [''],
                injured_person_option_other_mobile_no: [''],
                injured_person_option_other_email: ['']
            }),
            gender: [''],
            date_of_birth: [''],
            normal_duties: [''],
            normal_duties_explanation: [''],
            alternate_duties: [''],
            duties_explanation: [''],
            initital_injury: [''],
            part_of_body_injured_occured: [],
            was_immediate_treatment: [''],
            was_immediate_treatment_comment: [''],
            immediate_treatment_given_explanation: [''],
            immediate_treatment_person_name: [''],
            immediate_treatment_person_name_id: [''],
            immediate_treatment_other_person_detail: this.fb.group({
                immediate_treatment_other_name: [''],
                immediate_treatment_person_number: [''],
                immediate_treatment_other_email: ['']
            }),
        });
    }
    onAddMultiplePersonDetails(event) {
        let no = 0;
        if (this.injuryForm.value["person_details"].length != 0) {
            no = (parseInt(this.injuryForm.value['injury_persons']) - this.injuryForm.value["person_details"].length);
        }
        else {
            no = this.injuryForm.value['injury_persons'];
        }
        if (no > 0) {
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
    }
    onRepoNegativeEffect(evt) {
        if (evt.detail.value == "Internal") {
            this.reputationDesForm.controls['external_party'].setValue('');
        }
        else if (evt.detail.value == "External") {
            this.reputationDesForm.controls['effected_department'].setValue('');
        }
        this.onProgressBar('', '');
    }
    onWitnessChange(event) {
        if (event.detail.value != 'Other') {
            this.reputationDesForm.controls['other_witness_details'].reset();
        }
    }
    onAdministeredPerson(event, index) {
        this.employeeList.filter(ele => {
            if (ele.employee_id == event.detail.value) {
                this.injuryForm.controls['person_details'].value[index]['immediate_treatment_person_number'] = ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email;
            }
        });
    }
    onIncDesWitnessChange(event) {
        if (event.detail.value != 0) {
            this.incidentDesForm.controls['incdesc_other_witness_details'].reset();
        }
    }
    onProgressBar(event, tabName) {
        let count = 0;
        let formControlKeys = [];
        let formControlValue = [];
        //----------------------------------------------------------- Incident Form -------------------------------------------------------------//  
        Object.keys(this.incidentForm.controls).map(ele => formControlKeys.push(ele));
        Object.values(this.incidentForm.value).map(ele => formControlValue.push(ele));
        if (this.incidentForm.valid) {
            if (this.incidentForm.value['incident_value'] && this.incidentForm.value['incident_value'] != 'Near Miss') {
                for (var i = 0; i < formControlKeys.length; i++) {
                    if (formControlKeys[i] === 'incident_near_miss') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                    if (formControlKeys[i] === 'incident_near_miss_other') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                }
            }
            //----------------------------------------------------------- Incident Form ------------------------------------------------------------//  
            //----------------------------------------------------------- PhotoGraphy Form ---------------------------------------------------------//  
            Object.keys(this.photoGraphyForm.controls).map(ele => formControlKeys.push(ele));
            Object.values(this.photoGraphyForm.value).map(ele => formControlValue.push(ele));
            //----------------------------------------------------------- PhotoGraphy Form ---------------------------------------------------------//  
            //----------------------------------------------------------- Incident Desc Form -------------------------------------------------------//  
            Object.keys(this.incidentDesForm.controls).map(ele => formControlKeys.push(ele));
            Object.values(this.incidentDesForm.value).map(ele => formControlValue.push(ele));
            for (var i = 0; i <= formControlKeys.length; i++) {
                if (formControlKeys[i] === 'incdesc_other_witness_details') {
                    formControlKeys.splice(i, 1);
                    formControlValue.splice(i, 1);
                }
                if ((this.incidentDesForm.value['incident_description_alcohol_test'] == '' ||
                    this.incidentDesForm.value['incident_description_alcohol_test'] != 'Yes') && formControlKeys[i] === 'alcohol_test_image') {
                    formControlKeys.splice(i, 1);
                    formControlValue.splice(i, 1);
                }
                if ((this.incidentDesForm.value['drug_test_completed'] == '' || this.incidentDesForm.value['drug_test_completed'] != 'Yes') &&
                    formControlKeys[i] === 'drug_test_image') {
                    formControlKeys.splice(i, 1);
                    formControlValue.splice(i, 1);
                }
                if ((this.incidentDesForm.value['return_to_alternate_duties'] == '' ||
                    this.incidentDesForm.value['return_to_alternate_duties'] != 'Yes') && formControlKeys[i] === 'return_to_alternate_duties_image') {
                    formControlKeys.splice(i, 1);
                    formControlValue.splice(i, 1);
                }
            }
            if (this.incidentDesForm.value['was_there_any_witness_of_the_incident'] == 'Other') {
                formControlKeys.push('incdesc_other_witness_name');
                formControlValue.push(this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_name != undefined ? this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_name : '');
                formControlKeys.push('incdesc_other_witness_mobile_no');
                formControlValue.push(this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_mobile_no != undefined ? this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_mobile_no : '');
                formControlKeys.push('incdesc_other_witness_email');
                formControlValue.push(this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_email != undefined ? this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_email : '');
            }
            //--------------------------------------------------------- Incident Desc Form  -------------------------------------------------------//  
            if (this.incidentDesForm.valid) {
                //------------------------------------------- ----------- Classification Form -------------------------------------------------------//  
                Object.keys(this.classificationForm.value).map(ele => formControlKeys.push(ele));
                Object.values(this.classificationForm.value).map(ele => formControlValue.push(ele));
                for (var i = 0; i < formControlKeys.length; i++) {
                    if (formControlKeys[i] === 'classification_supervisor_other_details') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                    if (formControlKeys[i] === 'classification_manager_other_details') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                    if (formControlKeys[i] === 'classification_location_value') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                    if (formControlKeys[i] === 'classification_location_value1') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                }
                if (this.classificationForm.value['classification_location_option'] == 'Add Location') {
                    formControlKeys.push('classification_location_value');
                    formControlValue.push(this.classificationForm.value['classification_location_value']);
                }
                else if (this.classificationForm.value['classification_location_option'] == 'Choose Location') {
                    formControlKeys.push('classification_location_value1');
                    formControlValue.push(this.classificationForm.value['classification_location_value1']);
                }
                if (this.classificationForm.value['classification_supervisor'] == 'Other') {
                    formControlKeys.push('classification_supervisor_other_name');
                    formControlValue.push(this.classificationForm.value['classification_supervisor_other_details'].classification_supervisor_other_name);
                    formControlKeys.push('classification_supervisor_other_mobile_no');
                    formControlValue.push(this.classificationForm.value['classification_supervisor_other_details'].classification_supervisor_other_mobile_no);
                    formControlKeys.push('classification_supervisor_other_email');
                    formControlValue.push(this.classificationForm.value['classification_supervisor_other_details'].classification_supervisor_other_email);
                }
                if (this.classificationForm.value['classification_manager'] == 'Other') {
                    formControlKeys.push('classification_manager_other_name');
                    formControlValue.push(this.classificationForm.value['classification_manager_other_details'].classification_manager_other_name);
                    formControlKeys.push('classification_manager_other_mobile_no');
                    formControlValue.push(this.classificationForm.value['classification_manager_other_details'].classification_manager_other_mobile_no);
                    formControlKeys.push('classification_manager_other_email');
                    formControlValue.push(this.classificationForm.value['classification_manager_other_details'].classification_manager_other_email);
                }
                //------------------------------------------------------- Classification Form -------------------------------------------------------//  
                this.classificationList.forEach(element => {
                    if (element.val == 'Asset' && element.isChecked) {
                        Object.keys(this.assetDescriptionForm.controls).map(ele => formControlKeys.push(ele));
                        Object.values(this.assetDescriptionForm.value).map(ele => formControlValue.push(ele));
                    }
                    if (element.val == 'Environmental' && element.isChecked) {
                        Object.keys(this.enviornmentForm.controls).map(ele => formControlKeys.push(ele));
                        Object.values(this.enviornmentForm.value).map(ele => formControlValue.push(ele));
                    }
                    if (element.val == 'Injury' && element.isChecked) {
                        formControlKeys.push('injury_persons');
                        formControlValue.push(this.injuryForm.value['injury_persons']);
                    }
                    if (element.val == "Report" && element.isChecked) {
                        Object.keys(this.reportForm.controls).map(ele => formControlKeys.push(ele));
                        Object.values(this.reportForm.value).map(ele => formControlValue.push(ele));
                    }
                    //--------------------------------------------------- Reputation Des Form -----------------------------------------------------------//  
                    if (element.val == "Reputation" && element.isChecked) {
                        formControlKeys.push('reputation_option');
                        formControlValue.push(this.reputationDesForm.value['reputation_option']);
                        formControlKeys.push('reputation_negative_effect');
                        formControlValue.push(this.reputationDesForm.value['reputation_negative_effect']);
                        formControlKeys.push('name_of_witness');
                        formControlValue.push(this.reputationDesForm.value['name_of_witness']);
                        formControlKeys.push('possible_outcome_incident');
                        formControlValue.push(this.reputationDesForm.value['possible_outcome_incident']);
                        if (this.reputationDesForm.value['reputation_option'] && this.reputationDesForm.value['reputation_option'].length > 0) {
                            if (this.reputationDesForm.value['reputation_option'][0] == "Company" ||
                                this.reputationDesForm.value['reputation_option'][1] == "Company") {
                                formControlKeys.push('company_damage_value');
                                formControlValue.push(this.reputationDesForm.value['company_damage_value']);
                            }
                            if (this.reputationDesForm.value['reputation_option'][0] == "Individual" ||
                                this.reputationDesForm.value['reputation_option'][1] == "Individual") {
                                formControlKeys.push('individual_damage_value');
                                formControlValue.push(this.reputationDesForm.value['individual_damage_value']);
                            }
                        }
                        if (this.reputationDesForm.value['reputation_negative_effect'] != '' &&
                            this.reputationDesForm.value['reputation_negative_effect'] == 'Internal') {
                            formControlKeys.push('effected_department');
                            formControlValue.push(this.reputationDesForm.value['effected_department']);
                        }
                        else if (this.reputationDesForm.value['reputation_negative_effect'] != '' &&
                            this.reputationDesForm.value['reputation_negative_effect'] == "External") {
                            formControlKeys.push('external_party');
                            formControlValue.push(this.reputationDesForm.value['external_party']);
                        }
                        else if (this.reputationDesForm.value['reputation_negative_effect'] == 'Both') {
                            formControlKeys.push('effected_department');
                            formControlValue.push(this.reputationDesForm.value['effected_department']);
                            formControlKeys.push('external_party');
                            formControlValue.push(this.reputationDesForm.value['external_party']);
                        }
                        if (this.reputationDesForm.value['name_of_witness'] == 'Other') {
                            formControlKeys.push('other_witness_name');
                            formControlValue.push(this.reputationDesForm.value['other_witness_details'].other_witness_name);
                            formControlKeys.push('other_witness_mobile_no');
                            formControlValue.push(this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no);
                            formControlKeys.push('other_witness_email');
                            formControlValue.push(this.reputationDesForm.value['other_witness_details'].other_witness_email);
                        }
                    }
                    //----------------------------------------------- Reputation Des Form ---------------------------------------------------------------//
                    if (element.val == "Security" && element.isChecked) {
                        //--------------------------------------------------- Security Form ----------------------------------------------------------------//  
                        formControlKeys.push('security_option');
                        formControlValue.push(this.securityForm.value['security_option']);
                        if (this.securityForm.value['security_option'] == 'IT') {
                            formControlKeys.push('it_option_value');
                            formControlValue.push(this.securityForm.value['it_option_value']);
                        }
                        if (this.securityForm.value['security_option'] == 'Theft') {
                            formControlKeys.push('what_has_been_stolen_item');
                            formControlValue.push(this.securityForm.value['what_has_been_stolen_item']);
                            formControlKeys.push('approximate_value_of_stolen');
                            formControlValue.push(this.securityForm.value['approximate_value_of_stolen']);
                        }
                        if (this.securityForm.value['security_option'] == 'Other') {
                            formControlKeys.push('what_is_the_specific_securities_incident');
                            formControlValue.push(this.securityForm.value['what_is_the_specific_securities_incident']);
                        }
                        //---------------------------------------------------- Security Form ----------------------------------------------------------------//  
                    }
                });
                for (var i = 0; i < formControlKeys.length; i++) {
                    //----------------------------------------------------- Asset Form ----------------------------------------------------------------//  
                    if (this.assetDescriptionForm.value['asset_has_number'] != 'Yes') {
                        if (formControlKeys[i] === 'asset_number') {
                            formControlKeys.splice(i, 1);
                            formControlValue.splice(i, 1);
                        }
                    }
                    //---------------------------------------------------- Asset Form -----------------------------------------------------------------//  
                    //------------------------------------------------- Enviornment Form --------------------------------------------------------------//  
                    if (formControlKeys[i] === 'chemical_details') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                    if (formControlKeys[i] === 'out_of_split_kit') {
                        formControlKeys.splice(i, 1);
                        formControlValue.splice(i, 1);
                    }
                }
                if (this.enviornmentForm.value['was_a_chemical_split'] == 'Yes') {
                    formControlKeys.push('chemical_name');
                    formControlValue.push(this.enviornmentForm.value['chemical_details'].chemical_name);
                    formControlKeys.push('approximate_quantity');
                    formControlValue.push(this.enviornmentForm.value['chemical_details'].approximate_quantity);
                    if (this.enviornmentForm.value['chemical_details'].insertPhotoCheckBox) {
                        formControlKeys.push('chemical_photo');
                        formControlValue.push(this.enviornmentForm.value['chemical_details'].chemical_photo);
                    }
                }
                if (this.enviornmentForm.value['emergency_spill_kit_used'] == 'Yes') {
                    formControlKeys.push('out_of_split_kit');
                    formControlValue.push(this.enviornmentForm.value['out_of_split_kit']);
                }
                //---------------------------------------------------- Enviornment Form -------------------------------------------------------------// 
                //------------------------------------------------------- Injury Form ---------------------------------------------------------------// 
                if (this.injuryForm.value['injury_persons'] != '' && this.injuryForm.value['injury_persons'] != null) {
                    for (let i = 0; i < this.injuryForm.value['injury_persons']; i++) {
                        Object.keys(this.injuryForm.value['person_details'][i]).forEach((ele, j) => {
                            if (ele != 'injured_person_option_id' && ele != 'injured_person_option_other_details' &&
                                ele != 'normal_duties_explanation' && ele != 'duties_explanation' &&
                                ele != 'immediate_treatment_person_name_id' && ele != 'immediate_treatment_given_explanation' &&
                                ele != 'immediate_treatment_person_name' && ele != 'immediate_treatment_other_person_detail' &&
                                ele != 'was_immediate_treatment_comment') {
                                formControlKeys.push(ele + '_' + i);
                                formControlValue.push(Object.values(this.injuryForm.value['person_details'][i])[j]);
                            }
                            if (ele == 'injured_person_option' && this.injuryForm.value['person_details'][i].injured_person_option == 'Other') {
                                formControlKeys.push('injured_person_option_other_name' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i]['injured_person_option_other_details'].injured_person_option_other_name);
                                formControlKeys.push('injured_person_option_other_mobile_no' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i]['injured_person_option_other_details'].injured_person_option_other_mobile_no);
                                formControlKeys.push('injured_person_option_other_email' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i]['injured_person_option_other_details'].injured_person_option_other_email);
                            }
                            if (ele == 'normal_duties' && this.injuryForm.value['person_details'][i].normal_duties == 'No') {
                                formControlKeys.push('normal_duties_explanation' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i]['normal_duties_explanation']);
                            }
                            if (ele == 'alternate_duties' && this.injuryForm.value['person_details'][i].alternate_duties == 'No') {
                                formControlKeys.push('duties_explanation' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i]['duties_explanation']);
                            }
                            if (ele == 'was_immediate_treatment' && this.injuryForm.value['person_details'][i].was_immediate_treatment == 'Yes') {
                                formControlKeys.push('immediate_treatment_given_explanation' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i].immediate_treatment_given_explanation);
                                formControlKeys.push('immediate_treatment_person_name' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i].immediate_treatment_person_name);
                                if (this.injuryForm.value['person_details'][i]['immediate_treatment_person_name'] == 'Other') {
                                    formControlKeys.push('immediate_treatment_other_name' + '_' + i);
                                    formControlValue.push(this.injuryForm.value['person_details'][i]['immediate_treatment_other_person_detail'].immediate_treatment_other_name);
                                }
                                formControlKeys.push('immediate_treatment_person_number' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i]['immediate_treatment_other_person_detail'].immediate_treatment_person_number);
                                formControlKeys.push('immediate_treatment_other_email' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i]['immediate_treatment_other_person_detail'].immediate_treatment_other_email);
                            }
                            if (ele == 'was_immediate_treatment' && this.injuryForm.value['person_details'][i].was_immediate_treatment == 'No') {
                                formControlKeys.push('was_immediate_treatment_comment' + '_' + i);
                                formControlValue.push(this.injuryForm.value['person_details'][i].was_immediate_treatment_comment);
                            }
                        });
                    }
                }
                //------------------------------------------------------- Injury Form ---------------------------------------------------------------//    
            }
        }
        formControlKeys.forEach((key, index) => {
            if (formControlValue[index] != '' && formControlValue[index] != null && formControlValue[index] != undefined &&
                formControlValue[index].length > 0) {
                count = ++count;
            }
        });
        this.form_percent = ((1 / formControlKeys.length) * count);
        this.form_percent_val = parseInt((((1 / formControlKeys.length) * count) * 100).toFixed());
        // console.log('this.form_percent_val 0 ', (((1 / formControlKeys.length) * count) * 100).toFixed());
        // console.log('this.form_percent_val 1', this.form_percent_val);
        // console.log('this.form_percent 2', this.form_percent);
    }
    onImmediateTreatment(event, index) {
        if (event.detail.value == 'Yes') {
            let data = {
                was_immediate_treatment_comment: ''
            };
            this.injuryPersonDetails.controls[index].patchValue(data);
        }
        if (event.detail.value == 'No') {
            let data = {
                immediate_treatment_given_explanation: '',
                immediate_treatment_person_name: '',
                immediate_treatment_person_name_id: '',
                immediate_treatment_other_person_detail: {
                    immediate_treatment_other_name: '',
                    immediate_treatment_person_number: '',
                    immediate_treatment_other_email: ''
                }
            };
            this.injuryPersonDetails.controls[index].patchValue(data);
        }
    }
    onImageClick(bodypartname) {
        console.log('bodypartname', bodypartname);
        // return false;
    }
};
IncidentFormPage.ctorParameters = () => [
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_6__.GlobalService },
    { type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService }
];
IncidentFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-incident-form',
        template: _raw_loader_incident_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incident_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncidentFormPage);



/***/ }),

/***/ 42382:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form/incident-form.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .incident {\n  font-family: \"mon-bold\";\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .incident p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .incident img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n  font-family: \"mon-bold\";\n  color: #313131;\n}\nion-content .activeBackground p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .questionHead {\n  font-family: \"mon-bold\";\n  font-size: 20px !important;\n}\nion-content .ra {\n  text-transform: capitalize;\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 15px;\n  color: var(--black-color);\n}\nion-content .btn-icon {\n  color: grey;\n  height: 12px;\n  width: 14px;\n}\nion-content .other_witness {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 18px !important;\n}\nion-content .camera {\n  margin-top: 16px;\n}\nion-content .img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\nion-content .active area {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDTjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQURKO0FBRUk7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUlFO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtBQUZKO0FBS0U7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFJSTtFQUVFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSE47QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxKO0FBUUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFOSjtBQWFFO0VBQ0UsZ0JBQUE7QUFYSjtBQWNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWVFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBYko7QUFxQkU7RUFDRSxVQUFBO0FBbkJKIiwiZmlsZSI6ImluY2lkZW50LWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5zYXZlQnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gIH1cclxuICAucGx1cyB7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5pbmNpZGVudCB7XHJcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZUJhY2tncm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XHJcbiAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlclRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnF1ZXN0aW9uSGVhZCB7XHJcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucmEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLy8gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4taWNvbiB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLm90aGVyX3dpdG5lc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vIC5sYWJlbEN1c3RvbURyb3BEb3duIHtcclxuICAvLyAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLmNhbWVyYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmltZy1yZXNwb25zaXZlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIC8vIGFyZWE6Zm9jdXMge1xyXG4gIC8vICAgb3BhY2l0eTogMTtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAvLyB9XHJcblxyXG4gIC5hY3RpdmUgYXJlYSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2572:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/incident/incident-form/incident-form.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"toolbar\">\n    <ion-text>Incident Form</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"nav.back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class='saveBtn' (click)=\"onSubmit('incomplete_submit')\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\" size-sm=\"12\" size-xs=\"12\">\n        <p class=\"question\">ReacIncident report</p>\n      </ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row>\n    <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n    <ion-col size-xl=\"6\" size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size-xs=\"12\">\n      <div class=\"ion-padding-start ion-padding-end\">\n\n        <div class=\"activeBackground\">\n          <!-- <div class=\"progress-bar\"> -->\n          <ion-row>\n            <ion-col size-xl=\"10\" size-lg=\"10\" size-md=\"10\" size-sm=\"9\" size-xs=\"9\">\n              Form progress bar\n            </ion-col>\n            <ion-col size-xl=\"2\" size-lg=\"2\" size-md=\"2\" size-sm=\"3\" size-xs=\"3\">\n              {{form_percent_val}}{{'%'}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-progress-bar [value]=\"form_percent\"></ion-progress-bar>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <!-- </div> -->\n        <div *ngFor=\" let tabItem of tabList\">\n          <ion-button class=\"incident\" *ngIf=\"selectedTabItem != tabItem.val\" (click)=\"onSelectTabItem(tabItem.val)\"\n            [disabled]=\"tabItem.tabDisable\">\n            <p>{{tabItem.val}}</p>\n            <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n          </ion-button>\n\n          <!--------------------------------------------------------- Incident ------------------------------------------------------------------->\n          <div *ngIf=\"selectedTabItem==tabItem.val && selectedTabItem =='Incident'\" class=\"activeBackground\">\n            <div class=\"headerTitle\">\n              <p>{{tabItem.val}}</p>\n              <img (click)=\"onDeSelectTabItem(tabItem.val)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n            <div [formGroup]=\"incidentForm\" (ionChange)=\"onProgressBar($event, 'Incident')\">\n              <ion-radio-group formControlName=\"incident_value\" (ionChange)=\"onInput($event,'Incident')\">\n                <ion-row>\n                  <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Actual</ion-label>\n                      <ion-radio slot=\"start\" value=\"Actual\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Near Miss</ion-label>\n                      <ion-radio slot=\"start\" value=\"Near Miss\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label class=\"ion-text-wrap\">Serious potential incident (SPI)</ion-label>\n                      <ion-radio slot=\"start\" value=\"Serious potential incident (SPI)\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <div *ngIf=\"incidentForm.value['incident_value'] == 'Near Miss'\">\n                <p class=\"question\">Who witnessed the near miss ? :</p>\n\n                <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenIncidentModal()\">\n                  <ion-input placeholder=\"Please select who witnessed the near miss\"\n                    formControlName=\"incident_near_miss\">\n                  </ion-input>\n                  <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                    <ion-button class=\"ion-no-padding ion-no-margin\">\n                      <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                </ion-item>\n\n                <!-- <ion-row (click)=\"onOpenIncidentModal()\">\n                    <ion-col size=\"12\">\n                      <p class=\"question\">Who witnessed the near miss ? :</p>\n                    </ion-col>\n                    <ion-col size=\"11\">\n                      <ion-input placeholder=\"Please select who witnessed the near miss\"\n                        formControlName=\"incident_near_miss\">\n                      </ion-input>\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                    </ion-col>\n                  </ion-row> -->\n\n                <p class=\"question\">\n                  Possible consequence under different circumstances :\n                </p>\n                <ion-input placeholder=\"Please enter possible consequence under different circumstances\"\n                  formControlName=\"incident_near_miss_other\"></ion-input>\n              </div>\n            </div>\n          </div>\n          <!--------------------------------------------------------- Incident ------------------------------------------------------------------->\n\n          <!-------------------------------------------------------- Photography ----------------------------------------------------------------->\n          <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Photography'\" class=\"activeBackground\"\n            [formGroup]=\"photoGraphyForm\" (ionChange)=\"onProgressBar($event, 'Photography')\">\n            <div class=\"headerTitle\">\n              <p>{{tabItem.val }}</p>\n              <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n            <ion-row>\n              <ion-col size=\"12\">\n                <div *ngIf=\"globalService.platform === 'cordova'\">\n                  <ion-button class=\"camera\" expand=\"block\" (click)=\"onPhotoGraphy($event, 1)\">Upload Image\n                  </ion-button>\n                </div>\n                <div *ngIf=\"globalService.platform === 'browser'\">\n                  <input type='file' value=\"photography_image\" multiple (change)=\"onPhotoGraphy($event, 2)\">\n                </div>\n              </ion-col>\n            </ion-row>\n\n            <ion-slides class=\"preview-slides\" *ngIf=\"photoGraphy.length > 0\">\n              <ion-slide *ngFor=\"let photographyImage of photoGraphy; let i = index\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"photographyImage\" tappable (click)=\"onOpenPreview(photographyImage)\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onImageDelete(i, 'photoGraphy')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n          <!-------------------------------------------------------- Photography ----------------------------------------------------------------->\n\n\n          <!----------------------------------------------------- Incident Description ----------------------------------------------------------->\n\n          <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Incident Description'\" class=\"activeBackground\"\n            (ionChange)=\"onProgressBar($event, 'Incident Description')\">\n            <div class=\"headerTitle\">\n              <p>{{tabItem.val }}</p>\n              <img (click)=\"onDeSelectTabItem(tabItem.val)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n            <div [formGroup]=\"incidentDesForm\">\n              <p class=\"question\">\n                Description of incident :\n              </p>\n              <ion-text class=\"mandatoryField\">( Note : You must not use any personal details or names)</ion-text>\n              <ion-input placeholder=\"Please enter description of incident\" formControlName=\"incident_description\"\n                (ionChange)=\"onInput($event,'Incident Description')\"></ion-input>\n              <p class=\"question\">Immediate action taken : </p>\n              <ion-input placeholder=\"Please enter immediate action taken\" formControlName=\"incident_description_action\"\n                (ionChange)=\"onInput($event,'Incident Description')\">\n              </ion-input>\n\n              <p class=\"question\">What could have been done differently ? :</p>\n              <ion-input placeholder=\"Please enter what could have been done differently\"\n                formControlName=\"seen_differently\">\n              </ion-input>\n\n              <p class=\"question\">Was there any Witnesses of the incident ? :</p>\n              <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenIncDesModal()\">\n                <ion-input placeholder=\"Please select witness\" formControlName=\"was_there_any_witness_of_the_incident\">\n                </ion-input>\n                <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                  <ion-button class=\"ion-no-padding ion-no-margin\">\n                    <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-item>\n\n              <div *ngIf=\"incidentDesForm.value['was_there_any_witness_of_the_incident'] == 'Other'\"\n                formGroupName='incdesc_other_witness_details'>\n                <p class=\"other_witness\"> Other Witness Details </p>\n                <p class=\"question\">\n                  Name :\n                </p>\n                <ion-input placeholder=\"Please enter Other Witness Name\" formControlName=\"incdesc_other_witness_name\">\n                </ion-input>\n                <p class=\"question\">\n                  Mobile No :\n                </p>\n                <ion-input type=\"tel\" placeholder=\"Please enter Other Witness Mobile No \"\n                  formControlName=\"incdesc_other_witness_mobile_no\">\n                </ion-input>\n                <p class=\"question\">\n                  Email id :\n                </p>\n                <ion-input type=\"email\" placeholder=\"Please enter Other Witness Email\"\n                  formControlName=\"incdesc_other_witness_email\">\n                </ion-input>\n              </div>\n\n              <!-- <ion-input placeholder=\"Please enter witnesses of the incident\"\n            formControlName=\"was_there_any_witness_of_the_incident\">\n          </ion-input> -->\n\n              <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n\n              <ion-radio-group formControlName=\"incident_description_alcohol_test\"\n                (ionChange)=\"onAlcohalTestSelect($event)\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Alcohol test completed :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Not Required</ion-label>\n                      <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <div *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\">\n\n                <div *ngIf=\"globalService.platform === 'cordova'\">\n                  <ion-button class=\"camera\" expand=\"block\" (click)=\"onAlcoholImage($event, 1)\">Upload Image\n                  </ion-button>\n                </div>\n                <div *ngIf=\"globalService.platform === 'browser'\">\n                  <input type='file' value=\"alcohol_test_image\" multiple (change)=\"onAlcoholImage($event, 2)\">\n                </div>\n\n                <ion-slides class=\"preview-slides\" *ngIf=\"alcohalImages.length > 0\">\n                  <ion-slide *ngFor=\"let alcohalImage of alcohalImages; let i = index\">\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"11\">\n                          <img [src]=\"alcohalImage\" tappable (click)=\"onOpenPreview(alcohalImage)\">\n                        </ion-col>\n                        <ion-col size=\"1\">\n                          <p class=\"question\">\n                            <ion-icon name=\"close\" (click)=\"onImageDelete(i ,'alcohalImages')\"></ion-icon>\n                          </p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-slide>\n                </ion-slides>\n              </div>\n\n\n              <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n\n\n              <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n              <ion-radio-group formControlName=\"drug_test_completed\" (ionChange)=\"onDrugTestSelect($event)\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Drug test completed :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Not Required</ion-label>\n                      <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <div *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\">\n\n                <div *ngIf=\"globalService.platform === 'cordova'\">\n                  <ion-button *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" class=\"camera\" expand=\"block\"\n                    (click)=\"onDrugTestImage($event, 1)\">Upload Image\n                  </ion-button>\n                </div>\n\n                <div *ngIf=\"globalService.platform === 'browser'\">\n                  <input type='file' value=\"drug_test_image\" multiple (change)=\"onDrugTestImage($event, 2)\">\n                </div>\n\n                <ion-slides class=\"preview-slides\" *ngIf=\"drugTestImages.length > 0\">\n                  <ion-slide *ngFor=\"let drugTestImage of drugTestImages; let i = index\">\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"11\">\n                          <img [src]=\"drugTestImage\" tappable (click)=\"onOpenPreview(drugTestImage)\">\n                        </ion-col>\n                        <ion-col size=\"1\">\n                          <p class=\"question\">\n                            <ion-icon name=\"close\" (click)=\"onImageDelete(i,'drugTestImages')\"></ion-icon>\n                          </p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-slide>\n                </ion-slides>\n\n              </div>\n\n              <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n\n              <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n\n              <ion-radio-group formControlName=\"return_to_alternate_duties\" (ionChange)=\"onReturnToDutySelect($event)\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Return to Alternate Duties :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-md=\"6\" size-lg=\"4\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Not Required</ion-label>\n                      <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <div *ngIf=\"incidentDesForm.value['return_to_alternate_duties'] == 'Yes'\">\n\n                <ion-text class=\"mandatoryField\">* Please take a photo or upload the Cerificate of Copacity (COC).\n                </ion-text>\n\n                <div *ngIf=\"globalService.platform === 'cordova'\">\n                  <ion-button class=\" camera\" expand=\"block\" (click)=\"onReturnToDutyImage($event, 1)\">Upload Image\n                  </ion-button>\n                </div>\n\n                <div *ngIf=\"globalService.platform === 'browser'\">\n                  <input type='file' value=\"return_to_alternate_duties_image\" multiple\n                    (change)=\"onReturnToDutyImage($event, 2)\" class=\"uploadFile\">\n                </div>\n\n                <ion-slides class=\"preview-slides\" *ngIf=\"alterDutyImages.length > 0\">\n                  <ion-slide *ngFor=\"let returnToAlterDutyImage of alterDutyImages; let i=index\">\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"11\">\n                          <img [src]=\"returnToAlterDutyImage\" tappable (click)=\"onOpenPreview(returnToAlterDutyImage)\">\n                        </ion-col>\n                        <ion-col size=\"1\">\n                          <p class=\"question\">\n                            <ion-icon name=\"close\" (click)=\"onImageDelete(i,'alterDutyImages')\"></ion-icon>\n                          </p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-slide>\n                </ion-slides>\n              </div>\n\n              <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n            </div>\n          </div>\n\n          <!----------------------------------------------------- Incident Description ----------------------------------------------------------->\n\n\n          <!----------------------------------------------------- Classification ----------------------------------------------------------------->\n\n          <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem =='Classification'\"\n            [formGroup]='classificationForm' class=\"activeBackground\"\n            (ionChange)=\"onProgressBar($event, 'Classification')\">\n            <div class=\"headerTitle\">\n              <p>{{tabItem.val }}</p>\n              <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n            <ion-row class='ion-no-padding'>\n              <ion-col size=\"6\" *ngFor=\"let classificationValue of classificationList; let i=index\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">{{classificationValue.val}}</ion-label>\n                  <ion-checkbox slot=\"start\" [value]=\"classificationValue.val\" [checked]=\"classificationValue.isChecked\"\n                    (ionChange)=\"onClassificationChange($event)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <p class=\"question\">Date of Incident :</p>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Please select date of incident\" value=\"\"\n              formControlName=\"date_of_incident\" min=\"2000\">\n            </ion-datetime>\n\n            <p class=\"question\">Time of Incident :</p>\n            <ion-datetime displayFormat=\"HH:mm:ss\" placeholder=\"Please select time of incident\" value=\"\"\n              formControlName=\"time_of_incident\">\n            </ion-datetime>\n\n            <p class=\"question\">Date Reported :</p>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Please select reported date\" value=\"\"\n              formControlName=\"date_reported\" min=\"2000\">\n            </ion-datetime>\n\n            <p class=\"question\">Time Reported :</p>\n            <ion-datetime displayFormat=\"HH:mm:ss\" placeholder=\"Please select reported time\" value=\"\"\n              formControlName=\"time_reported\">\n            </ion-datetime>\n\n            <ion-radio-group formControlName=\"classification_location_option\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Add Location</ion-label>\n                    <ion-radio slot=\"start\" value=\"Add Location\">\n                    </ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Choose Location</ion-label>\n                    <ion-radio slot=\"start\" value=\"Choose Location\">\n                    </ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <div *ngIf=\"classificationForm.value['classification_location_option'] =='Add Location'\">\n              <p class=\"question\">Add Location :</p>\n              <ion-input placeholder=\"Please enter location\" formControlName=\"classification_location_value\">\n              </ion-input>\n            </div>\n\n            <div *ngIf=\"classificationForm.value['classification_location_option'] == 'Choose Location'\">\n              <p class=\"question\">Choose Location :</p>\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-select placeholder=\"Please select location\" interface=\"action-sheet\"\n                  formControlName=\"classification_location_value1\">\n                  <ion-select-option value=\"{{locationListItem?.location_name}}\"\n                    *ngFor=\"let locationListItem of locationList\">\n                    {{locationListItem?.location_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <p class=\"question\">Shift :</p>\n            <ion-select placeholder=\"Please select shift Type\" interface=\"action-sheet\"\n              formControlName=\"classification_shift_type\">\n              <ion-select-option value=\"{{shiftItem?.shift_type}}\" *ngFor=\"let shiftItem of shiftTypeList\">\n                {{shiftItem?.shift_type}}\n              </ion-select-option>\n            </ion-select>\n\n            <p class=\"question\">Supervisor :</p>\n            <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenClassiModal('Supervisor List')\">\n              <ion-input placeholder=\"Please select supervisor\" formControlName=\"classification_supervisor\">\n              </ion-input>\n              <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                <ion-button class=\"ion-no-padding ion-no-margin\">\n                  <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n\n            <div *ngIf='classificationForm.value[\"classification_supervisor\"] == \"Other\"'\n              formGroupName='classification_supervisor_other_details'>\n              <p class=\"other_witness\"> Other Person Details </p>\n              <p class=\"question\">Name :</p>\n              <ion-input placeholder=\"Please enter other person name\"\n                formControlName=\"classification_supervisor_other_name\">\n              </ion-input>\n\n              <p class=\"question\"> Mobile No :</p>\n              <ion-input type=\"tel\" placeholder=\"Please enter other person mobile no \"\n                formControlName=\"classification_supervisor_other_mobile_no\">\n              </ion-input>\n\n              <p class=\"question\">Email id :</p>\n              <ion-input type=\"email\" placeholder=\"Please enter other person email\"\n                formControlName=\"classification_supervisor_other_email\">\n              </ion-input>\n            </div>\n\n            <!-- <ion-select placeholder=\"Please select supervisor\" interface=\"action-sheet\"\n          formControlName=\"classification_supervisor\">\n          <ion-select-option value=\"{{superVisorItem?.employee_id}}\" *ngFor=\"let superVisorItem of superVisorList\">\n            {{superVisorItem?.full_name}}\n          </ion-select-option>\n        </ion-select> -->\n            <!-- </ion-item> -->\n\n            <p class=\"question\">Manger :</p>\n            <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenClassiModal('Manager List')\">\n              <ion-input placeholder=\"Please select manager\" formControlName=\"classification_manager\">\n              </ion-input>\n              <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                <ion-button class=\"ion-no-padding ion-no-margin\">\n                  <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n\n            <div *ngIf=\"classificationForm.value['classification_manager'] == 'Other'\"\n              formGroupName='classification_manager_other_details'>\n              <p class=\"other_witness\"> Other Witness Details </p>\n              <p class=\"question\">\n                Name :\n              </p>\n              <ion-input placeholder=\"Please enter Other Witness Name\"\n                formControlName=\"classification_manager_other_name\">\n              </ion-input>\n              <p class=\"question\">\n                Mobile No :\n              </p>\n              <ion-input type=\"tel\" placeholder=\"Please enter Other Witness Mobile No \"\n                formControlName=\"classification_manager_other_mobile_no\">\n              </ion-input>\n              <p class=\"question\">\n                Email id :\n              </p>\n              <ion-input type=\"email\" placeholder=\"Please enter Other Witness Email\"\n                formControlName=\"classification_manager_other_email\">\n              </ion-input>\n            </div>\n\n          </div>\n\n          <!----------------------------------------------------- Classification ----------------------------------------------------------------->\n        </div>\n\n        <!---------------------------------------------------- Classification Sub Tab ------------------------------------------------------------>\n\n        <div *ngFor=\"let classification of selectedTabList; let i = index\">\n\n          <ion-button class=\"incident\" *ngIf=\"selectedTabItem != classification\"\n            (click)=\"onSelectTabItem(classification)\">\n            <p>{{classification}}</p>\n            <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n          </ion-button>\n\n          <!------------------------------------------------------- Asset ------------------------------------------------------------------------>\n\n          <div *ngIf=\" selectedTabItem == classification && classification =='Asset'\" class=\"activeBackground\"\n            [formGroup]=\"assetDescriptionForm\" (ionChange)=\"onProgressBar($event, 'Asset')\">\n            <div class=\"headerTitle\">\n              <p>{{classification}}</p>\n              <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n            <p class=\"question\">\n              Asset description :\n            </p>\n            <ion-input placeholder=\"Please enter asset description\" formControlName=\"asset_description\"></ion-input>\n            <ion-radio-group formControlName=\"asset_has_number\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Does Asset have a number ? :</ion-label>\n              </ion-item>\n              <ion-row class=\"ion-no-padding\">\n                <ion-col size=\"6\" class=\"ion-no-padding\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\" class=\"ion-no-padding\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n            <div *ngIf=\"assetDescriptionForm.value['asset_has_number']=='Yes'\">\n              <p class=\"question\">\n                Asset Number :\n              </p>\n              <ion-input placeholder=\"Please enter asset number\" type=\"tel\" formControlName=\"asset_number\">\n              </ion-input>\n            </div>\n            <p class=\"question\">\n              Extent of Damage :\n            </p>\n            <ion-input placeholder=\"Please enter extent of damage\" formControlName=\"extent_of_damage\"></ion-input>\n\n            <div *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectDamageImage($event, 1)\">Upload photo of\n                damage\n              </ion-button>\n            </div>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <input type='file' value=\"extent_damage_image\" multiple (change)=\"onSelectDamageImage($event, 2)\">\n            </div>\n\n            <ion-slides class=\"preview-slides\" *ngIf=\"damageImages.length > 0\">\n              <ion-slide *ngFor=\"let damageImage of damageImages; let i = index\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"damageImage\" tappable (click)=\"onOpenPreview(damageImage)\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onImageDelete(i, 'damageImages')\">\n                        </ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n          <!------------------------------------------------------- Asset ------------------------------------------------------------------------>\n\n          <!----------------------------------------------------- Environmental ------------------------------------------------------------------>\n\n          <div *ngIf=\"selectedTabItem == classification && classification =='Environmental'\" class=\"activeBackground\"\n            [formGroup]=\"enviornmentForm\" (ionChange)=\"onProgressBar($event, 'Environmental')\">\n            <div class=\"headerTitle\">\n              <p>{{classification}}</p>\n              <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n\n            <p class=\"question\">\n              Immediate action taken to minimize Environmental impact ? :\n            </p>\n            <ion-input placeholder=\"Please enter immediate action taken to minimize environmental impact\"\n              formControlName='environmental_description'></ion-input>\n\n            <ion-radio-group formControlName=\"was_a_chemical_split\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Was a chemical split ? :</ion-label>\n              </ion-item>\n              <ion-row>\n                <ion-col size=\"6\" class=\"ion-no-padding\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\" class=\"ion-no-padding\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <div *ngIf=\"enviornmentForm.value['was_a_chemical_split']==='Yes'\" formGroupName=\"chemical_details\">\n              <p class=\"question\">\n                Name of chemical :\n              </p>\n              <ion-input placeholder=\"Please enter name of chemical\" formControlName=\"chemical_name\"></ion-input>\n\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Insert Photo </ion-label>\n                <ion-checkbox slot=\"start\" formControlName=\"insertPhotoCheckBox\"\n                  (ionChange)=\"onInsertImageSelect($event)\">\n                </ion-checkbox>\n              </ion-item>\n\n\n              <div *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\">\n\n                <div *ngIf=\"globalService.platform === 'cordova'\">\n                  <ion-button class=\"camera\" expand=\"block\" (click)=\"onChemicalImageSelect($event, 1)\">Upload Image\n                  </ion-button>\n                </div>\n\n                <div *ngIf=\"globalService.platform === 'browser'\">\n                  <input type='file' value=\"chemical_photo\" multiple (change)=\"onChemicalImageSelect($event, 2)\">\n                </div>\n\n                <ion-slides class=\"preview-slides\" *ngIf=\"chemicalImages.length > 0\">\n                  <ion-slide *ngFor=\"let chemicalImage of chemicalImages ; let i = index\">\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"11\">\n                          <img [src]=\"chemicalImage\" tappable (click)=\"onOpenPreview(chemicalImage)\">\n                        </ion-col>\n                        <ion-col size=\"1\">\n                          <p class=\"question\">\n                            <ion-icon name=\"close\" (click)=\"onImageDelete(i,'chemicalImages')\">\n                            </ion-icon>\n                          </p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-slide>\n                </ion-slides>\n              </div>\n\n              <p class=\"question\">\n                Approximate quantity of chemical spilled :\n              </p>\n\n              <ion-input placeholder=\"Please enter approximate qunatity of chemical spilled\" type=\"tel\"\n                formControlName=\"approximate_quantity\">\n              </ion-input>\n\n            </div>\n\n            <ion-radio-group formControlName='emergency_spill_kit_used'>\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Was the emergency spill kit used ? :</ion-label>\n              </ion-item>\n              <ion-row class=\"ion-no-padding\">\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n            <div *ngIf=\"enviornmentForm.value['emergency_spill_kit_used'] == 'Yes'\">\n              <p class=\" question\">\n                What was used out of the chemical spill kit ? :\n              </p>\n              <ion-input placeholder=\"Please enter what was used out of the chemical spill kit ?\"\n                formControlName=\"out_of_split_kit\"></ion-input>\n            </div>\n          </div>\n\n          <!----------------------------------------------------- Environmental ------------------------------------------------------------------>\n\n          <!-------------------------------------------------------- Injury ----------------------------------------------------------------------->\n\n          <div *ngIf=\"selectedTabItem == classification && classification =='Injury'\" class=\"activeBackground\"\n            [formGroup]=\"injuryForm\" (ionChange)=\"onProgressBar($event, 'Injury')\">\n            <div class=\"headerTitle\">\n              <p>{{classification}}</p>\n              <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n\n            <p class=\"question\">Number of Injured Person's :</p>\n            <ion-select placeholder=\"Please select Injured Person\" interface=\"action-sheet\"\n              formControlName=\"injury_persons\" (ionChange)=\"onAddMultiplePersonDetails($event)\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n              <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n\n            <div formArrayName=\"person_details\"\n              *ngFor=\"let personDetails of injuryPersonDetails.controls; let j = index\">\n\n              <ion-card>\n                <p class=\"questionHead\">Person {{(j+1)}} Details</p>\n                <div [formGroupName]=\"j\">\n                  <p class=\"question\">Injured Person Name :</p>\n                  <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenInjuryModal('Injured person', j)\">\n                    <ion-input placeholder=\"Please select Injured Person Name\" formControlName=\"injured_person_option\">\n                    </ion-input>\n                    <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                      <ion-button class=\"ion-no-padding ion-no-margin\">\n                        <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-item>\n                  <div *ngIf='injuryForm.value[\"person_details\"][j].injured_person_option==\"Other\"'\n                    formGroupName='injured_person_option_other_details'>\n                    <p class=\"other_witness\"> Other Person Details </p>\n                    <p class=\"question\">Name :</p>\n                    <ion-input placeholder=\"Please enter other person name\"\n                      formControlName=\"injured_person_option_other_name\">\n                    </ion-input>\n\n                    <p class=\"question\"> Mobile No :</p>\n                    <ion-input type=\"tel\" placeholder=\"Please enter other person mobile no \"\n                      formControlName=\"injured_person_option_other_mobile_no\">\n                    </ion-input>\n\n                    <p class=\"question\">Email id :</p>\n                    <ion-input type=\"email\" placeholder=\"Please enter other person email\"\n                      formControlName=\"injured_person_option_other_email\">\n                    </ion-input>\n                  </div>\n\n                  <!-- <div *ngIf='injuryForm.value[\"person_details\"][j].injured_person_option==\"Other\"'>\n                <p class=\"question\">Full Name of Injured Person :</p>\n                <ion-input placeholder=\"Please enter full name of injured person\"\n                  formControlName=\"injured_person_option_value\">\n                </ion-input>\n              </div> -->\n\n                  <p class=\"question\">Gender :</p>\n                  <ion-select placeholder=\"Please select gender\" interface=\"action-sheet\" formControlName=\"gender\">\n                    <ion-select-option value=\"Male\">Male</ion-select-option>\n                    <ion-select-option value=\"Female\">Female</ion-select-option>\n                    <ion-select-option value=\"Other\">Other</ion-select-option>\n                  </ion-select>\n\n                  <p class=\"question\">Date of Birth :</p>\n                  <ion-datetime placeholder=\"Please select date of birth\" displayFormat=\"DD/MM/YYYY\"\n                    formControlName=\"date_of_birth\">\n                  </ion-datetime>\n\n                  <ion-radio-group formControlName=\"normal_duties\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Return to Normal Duties :</ion-label>\n                    </ion-item>\n                    <ion-row class=\"ion-no-padding\">\n                      <ion-col size=\"6\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label>Yes</ion-label>\n                          <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size=\"6\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label>No</ion-label>\n                          <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-radio-group>\n\n                  <div *ngIf=\"injuryForm.value['person_details'][j].normal_duties == 'No'\">\n                    <p class=\"question\">Explanation :</p>\n                    <ion-input placeholder=\"Please enter explanation\" formControlName=\"normal_duties_explanation\">\n                    </ion-input>\n                  </div>\n\n                  <ion-radio-group formControlName=\"alternate_duties\">\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label>Return to Alternate Duties :</ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size=\"6\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label>Yes</ion-label>\n                          <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size=\"6\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label>No</ion-label>\n                          <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-radio-group>\n\n                  <div *ngIf=\"injuryForm.value['person_details'][j].alternate_duties ==='No'\">\n                    <p class=\"question\">Explanation :</p>\n                    <ion-input placeholder=\"Please enter explanation\" formControlName=\"duties_explanation\">\n                    </ion-input>\n                  </div>\n\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">Initial Injury / IIIness Classification :</ion-label>\n                  </ion-item>\n\n                  <ion-radio-group formControlName=\"initital_injury\">\n                    <ion-row>\n                      <ion-col size=\"6\" *ngFor=\"let injuryKeys of injuryList;\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label class=\"ion-text-wrap\">{{injuryKeys.val}}</ion-label>\n                          <ion-radio slot=\"start\" value=\"{{injuryKeys.val}}\">\n                          </ion-radio>\n                        </ion-item>\n                        <ion-text class=\"mandatoryField ion-text-wrap\"\n                          *ngIf=\"injuryKeys.val  == injuryForm.value['person_details'][j].initital_injury\">\n                          {{injuryKeys.desc}}</ion-text>\n                      </ion-col>\n                    </ion-row>\n                  </ion-radio-group>\n\n                  <!-- <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Male'\"\n                src=\"{{imagePath+'Male_Silhouette.png'}}\" usemap=\"#image-map\" (click)=\"onImageClick($event)\">\n\n              <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Female'\"\n                src=\"{{imagePath+'Female_Silhouette.png'}}\" usemap=\"#image-map\" (click)=\"onImageClick($event)\"> -->\n\n                  <ion-grid *ngIf=\"injuryForm.value['person_details'][j].gender ==='Male'\">\n                    <img src=\"{{imagePath+'Male_Silhouette.png'}}\" usemap=\"#image-map\">\n\n                    <map name=\"image-map\">\n                      <area target=\"_self\" alt=\"Head\" title=\"Head\" href=\"javascript:void(0)\" coords=\"68,11,20\"\n                        shape=\"circle\" (click)=\"onImageClick('Head')\">\n                      <area target=\"_self\" alt=\"Face\" title=\"Face\" href=\"javascript:void(0)\" coords=\"69,20,33\"\n                        shape=\"circle\" (click)=\"onImageClick('Face')\">\n                      <area target=\"_self\" alt=\"Neck\" title=\"Neck\" href=\"javascript:void(0)\" coords=\"72,48,16\"\n                        shape=\"circle\" (click)=\"onImageClick('Neck')\">\n                      <area target=\"_self\" alt=\"Left Shoulder\" title=\"Left Shoulder\" href=\"javascript:void(0)\"\n                        coords=\"50,64,22\" shape=\"circle\" (click)=\"onImageClick('Left Shoulder')\">\n                      <area target=\"_self\" alt=\"Right Shoulder\" title=\"Right Shoulder\" href=\"javascript:void(0)\"\n                        coords=\"90,53,21\" shape=\"circle\" (click)=\"onImageClick('Right Shoulder')\">\n                      <area target=\"_self\" alt=\"Left hand\" title=\"Left hand\" coords=\"68,97,73\" shape=\"circle\"\n                        (click)=\"onImageClick('Left hand')\">\n                      <area target=\"_self\" alt=\"Right hand\" title=\"Right hand\" href=\"javascript:void(0)\"\n                        coords=\"107,68,79\" shape=\"circle\" (click)=\"onImageClick('Right hand')\">\n                      <area target=\"_self\" alt=\"Left palm\" title=\"Left palm\" href=\"javascript:void(0)\"\n                        coords=\"20,154,17\" shape=\"circle\" (click)=\"onImageClick('Left palm')\">\n                      <area target=\"_self\" alt=\"Left hand finger\" title=\"Left hand finger\" href=\"javascript:void(0)\"\n                        coords=\"14,169,12\" shape=\"circle\" (click)=\"onImageClick('Left hand finger')\">\n                      <area target=\"_self\" alt=\"Left hand thumb\" title=\"Left hand thumb\" href=\"javascript:void(0)\"\n                        coords=\"8,157,9\" shape=\"circle\" (click)=\"onImageClick('Left hand thumb')\">\n                      <area target=\"_self\" alt=\"Right hand palm\" title=\"Right hand palm\" href=\"javascript:void(0)\"\n                        coords=\"130,150,17\" shape=\"circle\" (click)=\"onImageClick('Right hand palm')\">\n                      <area target=\"_self\" alt=\"Right hand finger\" title=\"Right hand finger\" href=\"javascript:void(0)\"\n                        coords=\"133,168,16\" shape=\"circle\" (click)=\"onImageClick('Right hand finger')\">\n                      <area target=\"_self\" alt=\"Right hand thumb\" title=\"Right hand thumb\" href=\"javascript:void(0)\"\n                        coords=\"144,155,6\" shape=\"circle\" (click)=\"onImageClick('Right hand thumb')\">\n                      <area target=\"_self\" alt=\"Upper Abdomen\" title=\"Upper Abdomen\" href=\"javascript:void(0)\"\n                        coords=\"62,120,37\" shape=\"circle\" (click)=\"onImageClick('Upper Abdomen')\">\n                      <area target=\"_self\" alt=\"Lower Abdomen\" title=\"Lower Abdomen\" href=\"javascript:void(0)\"\n                        coords=\"53,132,48\" shape=\"circle\" (click)=\"onImageClick('Lower Abdomen')\">\n                      <area target=\"_self\" alt=\"Left Thigh\" title=\"Left Thigh\" href=\"javascript:void(0)\"\n                        coords=\"49,154,66\" shape=\"circle\" (click)=\"onImageClick('Left Thigh')\">\n                      <area target=\"_self\" alt=\"Right Thigh\" title=\"Right Thigh\" href=\"javascript:void(0)\"\n                        coords=\"102,153,55\" shape=\"circle\" (click)=\"onImageClick('Right Thigh')\">\n                      <area target=\"_self\" alt=\"Left Knee\" title=\"Left Knee\" href=\"javascript:void(0)\"\n                        coords=\"62,225,12\" shape=\"circle\" (click)=\"onImageClick('Left Knee')\">\n                      <area target=\"_self\" alt=\"Right Knee\" title=\"Right Knee\" href=\"javascript:void(0)\"\n                        coords=\"81,223,16\" shape=\"circle\" (click)=\"onImageClick('Right Knee')\">\n                      <area target=\"_self\" alt=\"Left Lower leg\" title=\"Left Lower leg\" href=\"javascript:void(0)\"\n                        coords=\"61,236,52\" shape=\"circle\" (click)=\"onImageClick('Left Lower leg')\">\n                      <area target=\"_self\" alt=\"Right Lower leg\" title=\"Right Lower leg\" href=\"javascript:void(0)\"\n                        coords=\"98,231,55\" shape=\"circle\" (click)=\"onImageClick('Right Lower leg')\">\n                      <area target=\"_self\" alt=\"Left Foot\" title=\"Left Foot\" href=\"javascript:void(0)\"\n                        coords=\"69,293,21\" shape=\"circle\" (click)=\"onImageClick('Left Foot')\">\n                      <area target=\"_self\" alt=\"Right Foot\" title=\"Right Foot\" href=\"javascript:void(0)\"\n                        coords=\"86,295,19\" shape=\"circle\" (click)=\"onImageClick('Right Foot')\">\n                      <area target=\"_self\" alt=\"Spin\" title=\"Spin\" href=\"javascript:void(0)\" coords=\"261,55,75\"\n                        shape=\"circle\" (click)=\"onImageClick('Spin')\">\n                    </map>\n                  </ion-grid>\n\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <p class=\"question\">Part of body injured :</p>\n                  </ion-item>\n                  <ion-select multiple=\"true\" cancelText=\"Cancel\" okText=\"Ok\"\n                    formControlName=\"part_of_body_injured_occured\" placeholder=\"Select Part of body injured\">\n                    <ion-select-option value=\"{{bodyPartsVal.name}}\" *ngFor=\"let bodyPartsVal of bodyPartList\">\n                      {{bodyPartsVal.name}}</ion-select-option>\n                  </ion-select>\n\n                  <ion-radio-group formControlName=\"was_immediate_treatment\"\n                    (ionChange)=\"onImmediateTreatment($event, j)\">\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label class=\"ion-text-wrap\">Was immediate treatment given ? :</ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size=\"6\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label>Yes</ion-label>\n                          <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size=\"6\">\n                        <ion-item class=\"ra\" lines=\"none\">\n                          <ion-label>No</ion-label>\n                          <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-radio-group>\n\n                  <div *ngIf=\"injuryForm.value['person_details'][j].was_immediate_treatment == 'Yes'\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <p class=\"question\">What treatment was given ? :</p>\n                    </ion-item>\n                    <ion-input placeholder=\"Please enter what treatment was given \"\n                      formControlName=\"immediate_treatment_given_explanation\">\n                    </ion-input>\n\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <p class=\"question\">Who administered treatment ? : </p>\n                    </ion-item>\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <p class=\"question\">Person Name :</p>\n                    </ion-item>\n\n                    <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenInjuryModal('Injured administered', j)\">\n                      <ion-input placeholder=\"Please select person\" formControlName=\"immediate_treatment_person_name\">\n                      </ion-input>\n                      <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                        <ion-button class=\"ion-no-padding ion-no-margin\">\n                          <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-buttons>\n                    </ion-item>\n\n                    <div *ngIf='injuryForm.value[\"person_details\"][j].immediate_treatment_person_name==\"Other\"'\n                      formGroupName='immediate_treatment_other_person_detail'>\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <p class=\"other_witness\"> Other Person Details </p>\n                      </ion-item>\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <p class=\"question\">Name :</p>\n                      </ion-item>\n                      <ion-input placeholder=\"Please enter other person name\"\n                        formControlName=\"immediate_treatment_other_name\">\n                      </ion-input>\n                    </div>\n\n                    <div formGroupName='immediate_treatment_other_person_detail'>\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <p class=\"question\"> Mobile No :</p>\n                      </ion-item>\n                      <ion-input type=\"tel\" placeholder=\"Please enter other person mobile no \"\n                        formControlName=\"immediate_treatment_person_number\">\n                      </ion-input>\n\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <p class=\"question\">Email id :</p>\n                      </ion-item>\n                      <ion-input type=\"email\" placeholder=\"Please enter other person email\"\n                        formControlName=\"immediate_treatment_other_email\">\n                      </ion-input>\n                    </div>\n\n                    <!-- <p class=\"question\">Contact Details :</p>\n                <ion-input placeholder=\"Please enter mobile no or email id\"\n                  formControlName=\"immediate_treatment_person_number\">\n                </ion-input> -->\n\n                  </div>\n\n                  <div *ngIf=\"injuryForm.value['person_details'][j].was_immediate_treatment == 'No'\">\n                    <ion-row>\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <span class=\"error\">* </span>\n                        <ion-label> Explain why immediate treatment was not given : </ion-label>\n                      </ion-item>\n                    </ion-row>\n                    <ion-row>\n                      <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\"\n                        formControlName=\"was_immediate_treatment_comment\">\n                      </ion-textarea>\n                    </ion-row>\n                  </div>\n                </div>\n              </ion-card>\n            </div>\n          </div>\n\n          <!------------------------------------------------------- Injury ----------------------------------------------------------------------->\n\n          <!------------------------------------------------------  Report ----------------------------------------------------------------------->\n\n          <div *ngIf=\" selectedTabItem == classification && classification =='Report'\" class=\"activeBackground\"\n            [formGroup]=\"reportForm\" (ionChange)=\"onProgressBar($event, 'Report')\">\n            <div class=\"headerTitle\">\n              <p>{{classification}}</p>\n              <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n            <p class=\"question\">\n              What could have done differently ? :\n            </p>\n            <ion-input placeholder=\"Please enter what could have done differently\" formControlName='report'>\n            </ion-input>\n          </div>\n          <!------------------------------------------------------- Report ----------------------------------------------------------------------->\n\n          <!------------------------------------------------------ Reputation -------------------------------------------------------------------->\n\n          <div *ngIf=\"selectedTabItem == classification && classification =='Reputation'\" class=\"activeBackground\"\n            [formGroup]=\"reputationDesForm\" (ionChange)=\"onProgressBar($event, 'Reputation')\">\n            <div class=\"headerTitle\">\n              <p>{{classification}}</p>\n              <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label class=\"ion-text-wrap\">Was the reputation damages an individual or Company ? :\n              </ion-label>\n            </ion-item>\n\n            <ion-item *ngFor=\"let reputationCheckBoxItem of reputationCheckBox\" lines=\"none\" class=\"ion-no-padding ra\">\n              <ion-label>{{reputationCheckBoxItem.val}}</ion-label>\n              <ion-checkbox slot=\"end\" (ionChange)=\"onReputationDamagesCheckBox($event)\"\n                [value]=\"reputationCheckBoxItem.val\" [checked]=\"reputationCheckBoxItem.isChecked\">\n              </ion-checkbox>\n            </ion-item>\n\n            <div\n              *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Individual' || reputationDesForm.value['reputation_option'][1] == 'Individual'\">\n              <p class=\"question\">\n                How has the Individual's reputation been damaged ? :\n              </p>\n              <ion-input placeholder=\"Please enter how has the individual's reputation been damaged\"\n                formControlName=\"individual_damage_value\"></ion-input>\n            </div>\n\n            <div\n              *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Company' || reputationDesForm.value['reputation_option'][1] =='Company'\">\n              <p class=\"question\">\n                How has the Company's reputation been damaged ? :\n              </p>\n              <ion-input placeholder=\"Please enter how has the compnay's reputation been damaged\"\n                formControlName=\"company_damage_value\"></ion-input>\n            </div>\n\n            <ion-radio-group formControlName=\"reputation_negative_effect\" (ionChange)=\"onRepoNegativeEffect($event)\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label class=\"ion-text-wrap\">Was the negative effect internal or external ? :</ion-label>\n              </ion-item>\n              <ion-row class=\"ion-no-padding\">\n                <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size-xs=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Internal</ion-label>\n                    <ion-radio slot=\"start\" value=\"Internal\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size-xs=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>External</ion-label>\n                    <ion-radio slot=\"start\" value=\"External\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size-xs=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Both</ion-label>\n                    <ion-radio slot=\"start\" value=\"Both\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <div\n              *ngIf=\"(reputationDesForm.value['reputation_negative_effect'] == 'Internal') || (reputationDesForm.value['reputation_negative_effect'] == 'Both') \">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>What Department was effected ? :</ion-label>\n              </ion-item>\n\n              <ion-item *ngFor=\"let departmentEffectVal of departmentEffect\" lines=\"none\" class=\"ra ion-no-padding\">\n                <ion-label>{{departmentEffectVal.val}}</ion-label>\n                <ion-checkbox slot=\"end\" (ionChange)=\"onDepartmentEffectCheckBox($event)\"\n                  [value]=\"departmentEffectVal.val\" [checked]=\"departmentEffectVal.isChecked\">\n                </ion-checkbox>\n              </ion-item>\n            </div>\n\n            <div\n              *ngIf=\"(reputationDesForm.value['reputation_negative_effect'] == 'External') || (reputationDesForm.value['reputation_negative_effect'] == 'Both') \">\n              <p class=\"question\">\n                Who is the external party ? :\n              </p>\n              <ion-input placeholder=\"Please enter who is the external party\" formControlName=\"external_party\">\n              </ion-input>\n            </div>\n\n            <p class=\"question\">\n              Name of witness :\n            </p>\n\n            <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenReputationModal()\">\n              <ion-input placeholder=\"Please select witness\" formControlName=\"name_of_witness\">\n              </ion-input>\n              <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n                <ion-button class=\"ion-no-padding ion-no-margin\">\n                  <ion-icon class=\"btn-icon\" name=\"caret-down-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n\n            <div *ngIf=\"reputationDesForm.value['name_of_witness'] == 'Other'\" formGroupName='other_witness_details'>\n              <p class=\"other_witness\"> Other Witness Details </p>\n              <p class=\"question\">\n                Name :\n              </p>\n              <ion-input placeholder=\"Please enter Other Witness Name\" formControlName=\"other_witness_name\">\n              </ion-input>\n              <p class=\"question\">\n                Mobile No :\n              </p>\n              <ion-input type=\"tel\" placeholder=\"Please enter Other Witness Mobile No \"\n                formControlName=\"other_witness_mobile_no\">\n              </ion-input>\n              <p class=\"question\">\n                Email id :\n              </p>\n              <ion-input type=\"email\" placeholder=\"Please enter Other Witness Email\"\n                formControlName=\"other_witness_email\">\n              </ion-input>\n            </div>\n            <p class=\"question\">\n              What is the possible outcome of this incident ? :\n            </p>\n            <ion-input placeholder=\"Please enter  what is the possible outcome of this incident\"\n              formControlName=\"possible_outcome_incident\"></ion-input>\n          </div>\n          <!------------------------------------------------------ Reputation -------------------------------------------------------------------->\n\n          <!------------------------------------------------------ Security ---------------------------------------------------------------------->\n\n          <div *ngIf=\"selectedTabItem == classification && classification =='Security'\" class=\"activeBackground\"\n            [formGroup]=\"securityForm\" (ionChange)=\"onProgressBar($event, 'Security')\">\n            <div class=\"headerTitle\">\n              <p>{{classification}}</p>\n              <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n            </div>\n            <hr />\n\n            <ion-radio-group formControlName=\"security_option\" (ionChange)=\"onSecurityOption($event)\">\n              <ion-row class=\"ion-no-padding\">\n                <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>IT</ion-label>\n                    <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Theft</ion-label>\n                    <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size-xl=\"4\" size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                  <ion-item class=\"ra\" lines=\"none\">\n                    <ion-label>Other</ion-label>\n                    <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <div *ngIf=\"securityForm.value['security_option']=='IT'\">\n\n              <ion-item class=\"ra ion-no-padding\" lines=\"none\">\n                <ion-label>What kind of IT Security Incident ? :</ion-label>\n              </ion-item>\n              <ion-row class=\"ion-no-padding\">\n                <ion-col size=\"6\" class=\"ion-no-padding \" *ngFor=\"let itSecurityItem of itSecurityList\">\n                  <ion-item lines=\"none\" class=\"ra ion-no-padding\">\n                    <ion-label class=\"ion-text-wrap\">{{itSecurityItem.val}}</ion-label>\n                    <ion-checkbox slot=\"start\" [value]=\"itSecurityItem.val\" [checked]=\"itSecurityItem.isChecked\"\n                      (ionChange)=\"onSecurityItOption($event)\"></ion-checkbox>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div *ngIf=\"securityForm.value['security_option']=='Theft'\">\n              <p class=\"question\">\n                What has been stolen ? :\n              </p>\n              <ion-input placeholder=\"Please enter what has been stolen\" formControlName=\"what_has_been_stolen_item\">\n              </ion-input>\n              <p class=\"question\">\n                Approximate value of stolen item ? :\n              </p>\n              <ion-input placeholder=\"Please enter approximate value of stolen item\"\n                formControlName=\"approximate_value_of_stolen\"></ion-input>\n            </div>\n\n            <div *ngIf=\"securityForm.value['security_option']=='Other'\">\n              <p class=\"question\">\n                What is the Security incident ? :\n              </p>\n              <ion-input placeholder=\"Please enter what is the Security incident\"\n                formControlName=\"what_is_the_specific_securities_incident\"></ion-input>\n            </div>\n          </div>\n          <!------------------------------------------------------ Security ---------------------------------------------------------------------->\n\n        </div>\n\n        <!----------------------------------------------------- Classification Sub Tab ----------------------------------------------------------->\n      </div>\n\n      <div class=\"container\">\n        <ion-button (click)=\"onSubmit('submit')\" class=\"btn\">SUBMIT</ion-button>\n      </div>\n\n    </ion-col>\n    <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_incident_incident-form_incident-form_module_ts-es2015.js.map