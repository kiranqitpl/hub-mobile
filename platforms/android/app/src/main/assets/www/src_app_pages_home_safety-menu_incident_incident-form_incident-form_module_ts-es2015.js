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
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 67871);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-service/shared.service */ 49481);
/* harmony import */ var src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/managers/managers.page */ 58127);
/* harmony import */ var src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/image-modal/image-modal.page */ 91681);
/* harmony import */ var _incident_form_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../incident-form.json */ 79044);















let IncidentFormPage = class IncidentFormPage {
    //-------------------------------------------------------- JSON DATA -------------------------------------------------------//
    constructor(globalService, sharedService, modalController, actionSheetController, camera, fb, nav, platform) {
        this.globalService = globalService;
        this.sharedService = sharedService;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.fb = fb;
        this.nav = nav;
        this.platform = platform;
        this.imagePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imageUrl;
        this.pName = 'Add Form';
        this.witnessList = [];
        this.shiftTypeList = [];
        this.superVisorList = [];
        this.locationList = [];
        this.bodyPartList = [];
        this.employeeList = [];
        this.managerList = 'Name of Manager';
        this.selectedTabList = [];
        this.reputationWitnessList = [];
        this.platformCheck = '';
        //----------------------------------------------------- Image variables ----------------------------------------------------//
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
        // console.log('IncidentJson', IncidentJson);
        if (!this.platform.is('cordova')) {
            this.platformCheck = 'browser';
        }
        else {
            this.platformCheck = 'cordova';
        }
        this.loadEmployee();
        this.loadWitness();
        this.loadShift();
        this.loadSuperwiser();
        this.loadLocation();
        // this.findValueInWitness();
        this.loadBodyPart();
        this.incidentForm = this.fb.group({
            incident_value: [''],
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
            incident_description_alcohol_test: [''],
            // alcohol_test_completed: [''],
            incident_description_photo: [''],
            alcohol_test_image: [''],
            drug_test_completed: [''],
            drug_test_image: [''],
            return_to_alternate_duties: [''],
            return_to_alternate_duties_image: [''] //return to alternate duties image
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
            classification_manager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required] // required field
        });
        this.injuryForm = this.fb.group({
            injury_persons: [''],
            person_details: this.fb.array([]),
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
        this.reputationDesForm = this.fb.group({
            reputation_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([]),
            individual_damage_value: [''],
            company_damage_value: [''],
            reputation_negative_effect: [''],
            effected_department: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([]),
            external_party: [''],
            name_of_witness: [''],
            other_witness_details: this.fb.group({
                employee_id: [''],
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
    }
    loadEmployee() {
        this.globalService.getData1("user/getallemployee").subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.employeeList = res.data;
                this.employeeList.push({ full_name: "Other" });
            }
            else {
                this.employeeList = [];
            }
        }, err => {
            console.log(err);
        });
    }
    loadWitness() {
        this.globalService.getData1("Witness/getWitnessList").subscribe((res) => {
            if (res && res.data && res.data.length > 0) {
                this.witnessList = res.data;
                this.witnessList.push({ full_name: "Other", employee_id: '0' });
            }
            else {
                this.witnessList = [];
            }
        }, err => {
            console.log(err);
        });
    }
    // findValueInWitness() {
    //   let val: boolean = false;
    //   this.reputationWitnessList.find(ele => {
    //     if (ele.name_of_witness != "Other") {
    //       val = true;
    //     }
    //   })
    //   return val;
    // }
    loadShift() {
        this.globalService.getData1("Shift/get_shift_typelist").subscribe((res) => {
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
    loadSuperwiser() {
        this.globalService.getData1("Supervisor/getSupervisorList").subscribe((res) => {
            if (res && res.status && res.data && res.data.length > 0) {
                this.superVisorList = res.data;
            }
            else {
                this.superVisorList = [];
            }
        }, err => {
            console.log("Eror", err);
        });
    }
    loadLocation() {
        this.globalService.getData1("location/getLocation").subscribe((res) => {
            console.log('getLocation', res);
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
        this.globalService.getData1("Body_part/getbodypart").subscribe((res) => {
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
    onMobileUpload() {
    }
    onPhotoGraphy(event, type) {
        if (type == 1) {
            // let data = this.mobileUploadImages();
            // console.log('data', data);
        }
        else {
            for (let i = 0; i < event.target.files.length; i++) {
                this.sharedService.getBase64(event.target.files[i]).then(data => {
                    this.photoGraphyObject[i] = data;
                    if (this.photoGraphy.length <= 0) {
                        this.photoGraphy.push(data);
                    }
                    else {
                        this.photoGraphy.unshift(data);
                    }
                }).catch(error => {
                    console.log('error', error);
                });
            }
        }
    }
    onAlochaolImage(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            this.sharedService.getBase64(event.target.files[i]).then(data => {
                // this.alcohalImagesObject[i] = data
                if (this.alcohalImages.length <= 0) {
                    this.alcohalImages.push(data);
                }
                else {
                    this.alcohalImages.unshift(data);
                }
            }).catch(error => {
                console.log('error', error);
            });
        }
    }
    onAlcohalTestSelect(event) {
        if (event.target.value != 'Yes') {
            this.alcohalImages = [];
        }
    }
    onDrugTestImage(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            this.sharedService.getBase64(event.target.files[i]).then(data => {
                // let blobImage = this.convertDataURIToBinary(data);
                // this.drugTestImagesObject[i] = data
                // this.drugTestImages.push(data);
                if (this.drugTestImages.length <= 0) {
                    this.drugTestImages.push(data);
                }
                else {
                    this.drugTestImages.unshift(data);
                }
            }).catch(error => {
                console.log('error', error);
            });
        }
    }
    onDrugTestSelect(event) {
        if (event.target.value != 'Yes') {
            this.drugTestImages = [];
        }
    }
    onReturnToDutyImage(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            this.sharedService.getBase64(event.target.files[i]).then(data => {
                // this.alterDutyImagesObject[i] = data
                // this.alterDutyImages.push(data);
                if (this.alterDutyImages.length <= 0) {
                    this.alterDutyImages.push(data);
                }
                else {
                    this.alterDutyImages.unshift(data);
                }
            }).catch(error => {
                console.log('error', error);
            });
        }
    }
    onReturnToDutySelect(event) {
        if (event.target.value != 'Yes') {
            this.alterDutyImages = [];
        }
    }
    onChemicalImageSelect(event) {
        console.log('onChemicalImageSelect 1', event);
        for (let i = 0; i < event.target.files.length; i++) {
            this.sharedService.getBase64(event.target.files[i]).then(data => {
                console.log('onChemicalImageSelect 2', data);
                if (this.chemicalImages.length <= 0) {
                    this.chemicalImages.push(data);
                }
                else {
                    this.chemicalImages.unshift(data);
                }
            }).catch(error => {
                console.log('error', error);
            });
        }
        this.enviornmentForm.get('chemical_details').value.chemical_photo = this.chemicalImagesObject;
    }
    onInsertImageSelect(event) {
        if (!event.detail.checked) {
            this.chemicalImages = [];
        }
    }
    onSelectDamageImage(event) {
        // this.damageImages = [];
        // this.damageImagesObject = {};
        for (let i = 0; i < event.target.files.length; i++) {
            this.sharedService.getBase64(event.target.files[i]).then(data => {
                // this.damageImagesObject[i] = data
                // this.damageImages.push(data);
                if (this.damageImages.length <= 0) {
                    this.damageImages.push(data);
                }
                else {
                    this.damageImages.unshift(data);
                }
            }).catch(error => {
                console.log('error', error);
            });
        }
    }
    onOpenModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_managers_managers_page__WEBPACK_IMPORTED_MODULE_7__.ManagersPage,
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
    onOpenPreview(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__.ImageModalPage,
                cssClass: 'transparent-modal',
                componentProps: {
                    img
                }
            });
            modal.present();
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
        // console.log('incidentForm', this.photoGraphyForm.value);
        // console.log('incidentDesForm', this.incidentDesForm.value);
        console.log('classificationForm', this.classificationForm.value);
        // console.log('injuryForm', this.injuryForm.value);
        // console.log('enviornmentForm', this.enviornmentForm.value);
        console.log('reputationDesForm', this.reputationDesForm.value);
        // console.log('securityForm', this.securityForm.value);
        // console.log('assetDescriptionForm', this.assetDescriptionForm.value)
        // console.log('reportForm', this.reportForm.value);
        // console.log('injuryForm', this.injuryForm.value);
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
        let validation = false;
        if (val == 'submit') {
            validation = this.validation();
        }
        if ((val == 'submit' && validation) || (val == 'incomplete_submit' && validation == false)) {
            let fd = new FormData();
            //----------------------------------------------- Incident ---------------------------------------------------------------// 
            fd.append("incident_value", this.incidentForm.value['incident_value'] ? this.incidentForm.value['incident_value'] : ''); // required
            fd.append("incident_near_miss", this.incidentForm.value['incident_near_miss'] ? this.incidentForm.value['incident_near_miss'] : '');
            fd.append("incident_near_miss_other", this.incidentForm.value['incident_near_miss_other'] ? this.incidentForm.value['incident_near_miss_other'] : '');
            //----------------------------------------------- Incident ---------------------------------------------------------------// 
            //---------------------------------------------- photography -------------------------------------------------------------//
            fd.append("photography_image", this.photoGraphyObject ? JSON.stringify(this.photoGraphyObject) : '');
            //---------------------------------------------- photography --------------------------------------------------------------//
            //--------------------------------------------- Incident Description ------------------------------------------------------//
            fd.append("incident_description", this.incidentDesForm.value['incident_description'] ? this.incidentDesForm.value['incident_description'] : ''); //required
            fd.append("incident_description_action", this.incidentDesForm.value['incident_description_action'] ? this.incidentDesForm.value['incident_description_action'] : ''); //incident photo pending from postman and here also  // required
            fd.append("incident_description_alcohol_test", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
            fd.append("alcohol_test_completed", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
            fd.append("drug_test_completed", this.incidentDesForm.value['drug_test_completed'] ? this.incidentDesForm.value['drug_test_completed'] : '');
            fd.append("seen_differently", this.incidentDesForm.value['seen_differently'] ? this.incidentDesForm.value['seen_differently'] : '');
            fd.append("was_there_any_witness_of_the_incident", this.incidentDesForm.value['was_there_any_witness_of_the_incident']);
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
            fd.append("time_of_incident", this.classificationForm.value['time_of_incident'] != '' ? moment__WEBPACK_IMPORTED_MODULE_3___default()(this.classificationForm.value['time_of_incident']).format('HH:mm:ss') : '');
            fd.append("date_reported", this.classificationForm.value['date_reported']);
            fd.append("time_reported", this.classificationForm.value['time_reported'] != '' ? moment__WEBPACK_IMPORTED_MODULE_3___default()(this.classificationForm.value['time_reported']).format('HH:mm:ss') : '');
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
            //--------------------------------------------------- Classification ---------------------------------------------------------//
            //----------------------------------------------------- Injury ---------------------------------------------------------------//
            fd.append("injury_persons", this.injuryForm.value['injury_persons']); // form value
            fd.append("person_details", JSON.stringify(this.injuryForm.value['person_details']));
            //------------------------------------------------------ Injury ---------------------------------------------------------------//
            //------------------------------------------------------ Enviornment ----------------------------------------------------------//
            fd.append("environmental_description", this.enviornmentForm.value['environmental_description']); // required
            fd.append("was_a_chemical_split", this.enviornmentForm.value['was_a_chemical_split']); // chemical split value inner side query
            fd.append("chemical_details", JSON.stringify(this.enviornmentForm.value['chemical_details'])); // data with image
            fd.append("emergency_spill_kit_used", this.enviornmentForm.value['emergency_spill_kit_used']);
            fd.append("out_of_split_kit", this.enviornmentForm.value['out_of_split_kit']);
            //------------------------------------------------------ Enviornment -----------------------------------------------------------//
            //------------------------------------------------------ Reputation -------------------------------------------------------------// 
            fd.append("reputation_option", this.reputationDesForm.value['reputation_option']);
            fd.append("individual_damage_value", this.reputationDesForm.value['individual_damage_value']);
            fd.append("company_damage_value", this.reputationDesForm.value['company_damage_value']);
            fd.append("reputation_negative_effect", this.reputationDesForm.value['reputation_negative_effect']);
            fd.append("effected_department", this.reputationDesForm.value['effected_department']);
            fd.append("external_party", this.reputationDesForm.value['external_party']);
            fd.append("name_of_witness", this.reputationDesForm.value['name_of_witness']);
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
            fd.append("what_is_the_specific_securities_incident", this.securityForm.value['what_is_the_specific_securities_incident']);
            //---------------------------------------------------------- Security--------------------------------------------------------------//
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
            fd.append("report", this.reportForm.value['report']);
            //--------------------------------------------------------- Report ------------------------------------------------------------------//
            fd.append('user_id', localStorage.getItem('id'));
            let url = (val == 'submit' ? "add_form/submit" : 'Add_form/submit_incomplete');
            this.globalService.postData1(url, fd).subscribe((res) => {
                // this.globalService.presentLoading();
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
                // this.globalService.dismissLoading();
            });
        }
    }
    onClassificationChange(event) {
        const formArray = this.classificationForm.get('classification_value');
        if (event.target.checked) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(event.target.value));
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
        });
        if (evt && evt.detail && evt.detail.value && evt.detail.value != 'Near Miss') {
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
            injured_person_option_value: [''],
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
            immediate_treatment_person_number: [''],
        });
    }
    onAddMultiplePersonDetails(event) {
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
    }
    onRepoNegativeEffect(evt) {
        if (evt.detail.value == "Internal") {
            this.reputationDesForm.controls['external_party'].setValue('');
        }
        else if (evt.detail.value == "External") {
            this.reputationDesForm.controls['effected_department'].setValue('');
        }
    }
    onWitnessChange(event) {
        if (event.detail.value != 'Other') {
            this.reputationDesForm.controls['other_witness_details'].reset();
        }
        else {
            this.reputationDesForm.value['other_witness_details'].employee_id = 0;
        }
    }
    onImageDelete(index, tabName) {
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
    onImageClick(event) {
        console.log('event', event);
        // console.log(document.getElementById("pointer_div").offsetLeft);
        // // console.log(document.getElementById("pointer_div").offsetTop);
        // let pos_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("pointer_div").offsetLeft;
        // let pos_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("pointer_div").offsetTop;
        let pos_x = event.pageX;
        let pos_y = event.pageY;
        console.log('pos_x', pos_x);
        console.log('pos_y', pos_y);
        this.selected = [pos_x, pos_y];
        console.log(JSON.stringify(this.selected));
        // console.log(typeof(JSON.parse(this.selected) ));
        // $('.map').maphilight();
        console.log('  this.selected ', this.selected);
    }
    isActive(val) {
        console.log('isActive', val);
        return JSON.stringify(this.selected) == val;
    }
};
IncidentFormPage.ctorParameters = () => [
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService },
    { type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform }
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .saveBtn {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .incident {\n  font-family: \"mon-bold\";\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .incident p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .incident img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n  font-family: \"mon-bold\";\n}\nion-content .activeBackground p {\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .questionHead {\n  font-family: \"mon-bold\";\n  font-size: 20px !important;\n}\nion-content .ra {\n  text-transform: capitalize;\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 15px;\n  color: var(--black-color);\n}\nion-content .other_witness {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 18px !important;\n}\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\nion-content .camera {\n  margin-top: 16px;\n}\nion-content .img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\nion-content .active area {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDTjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBREo7QUFFSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQU47QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNSO0FBSUU7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FBRko7QUFLRTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUlJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFGTjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBSko7QUFPRTtFQUNFLGlCQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVJKO0FBZ0JFO0VBQWEsVUFBQTtBQWJmIiwiZmlsZSI6ImluY2lkZW50LWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5zYXZlQnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gIH1cclxuICAucGx1cyB7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG4gIC5pbmNpZGVudCB7XHJcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZUJhY2tncm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XHJcbiAgICBwIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXJUaXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAzM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5xdWVzdGlvbkhlYWQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJhIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm90aGVyX3dpdG5lc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sYWJlbEN1c3RvbURyb3BEb3duIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbWVyYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuaW1nLXJlc3BvbnNpdmUge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLy8gYXJlYTpmb2N1cyB7XHJcbiAgLy8gICBvcGFjaXR5OiAxO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIC8vIH1cclxuXHJcbiAgLmFjdGl2ZSBhcmVhe2NvbG9yOnJlZDt9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2572:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/incident/incident-form/incident-form.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Incident Form</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"nav.back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class='saveBtn' (click)=\"onSubmit('incomplete_submit')\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div class=\"container\">\n    <p class=\"question\">ReacIncident report</p>\n  </div>\n\n  <div class=\"ion-padding-start ion-padding-end\">\n    <div *ngFor=\"let tabItem of tabList\">\n      <ion-button class=\"incident\" *ngIf=\"selectedTabItem != tabItem.val\" (click)=\"onSelectTabItem(tabItem.val)\"\n        [disabled]=\"tabItem.tabDisable\">\n        <p>{{tabItem.val}} </p>\n        <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n      </ion-button>\n\n      <!--------------------------------------------------------- Incident ------------------------------------------------------------------->\n      <div *ngIf=\"selectedTabItem==tabItem.val && selectedTabItem =='Incident'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val}}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div [formGroup]=\"incidentForm\">\n          <ion-radio-group formControlName=\"incident_value\" (ionChange)=\"onInput($event,'Incident')\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Actual</ion-label>\n                  <ion-radio slot=\"start\" value=\"Actual\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Near Miss</ion-label>\n                  <ion-radio slot=\"start\" value=\"Near Miss\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Serious potential incident (SPI)</ion-label>\n                  <ion-radio slot=\"start\" value=\"Serious potential incident (SPI)\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"incidentForm.value['incident_value'] == 'Near Miss'\">\n            <p class=\"question\">Who witnessed the near miss ? :</p>\n\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-select placeholder=\"Please select who witnessed the near miss\" interface=\"action-sheet\"\n                formControlName=\"incident_near_miss\">\n                <ion-select-option value=\"{{witnesskeys?.full_name}}\" *ngFor=\"let witnesskeys of witnessList\">\n                  {{witnesskeys?.full_name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <p class=\"question\">\n              Possible consequence under different circumstances :\n            </p>\n            <ion-input placeholder=\"Please enter possible consequence under different circumstances\"\n              formControlName=\"incident_near_miss_other\"></ion-input>\n          </div>\n        </div>\n      </div>\n      <!--------------------------------------------------------- Incident ------------------------------------------------------------------->\n\n      <!-------------------------------------------------------- Photography ----------------------------------------------------------------->\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Photography'\" class=\"activeBackground\"\n        [formGroup]=\"photoGraphyForm\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div *ngIf=\"platformCheck === 'cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"onPhotoGraphy($event, 1)\">Upload Image</ion-button>\n          <!-- <img src=\"{{imagePath}}\" class=\"img-responsive\" *ngIf=\"imagePath!==''\" /> -->\n        </div>\n        <div *ngIf=\"platformCheck === 'browser'\">\n          <input type='file' value=\"photography_image\" multiple (change)=\"onPhotoGraphy($event, 2)\">\n          <!-- <div class=\"ion-text-center\" *ngIf=\"photoGraphy.length > 0\">\n            <div *ngFor=\"let photographyImages of photoGraphy\">\n              <img [src]=\"photographyImages\" height=\"100\" class=\"img-responsive\"> <br />\n            </div>\n          </div> -->\n          <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"photoGraphy.length > 0\">\n            <ion-slide *ngFor=\"let photographyImage of photoGraphy; let i = index\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"11\">\n                    <img [src]=\"photographyImage\" tappable (click)=\"onOpenPreview(photographyImage)\">\n                  </ion-col>\n                  <ion-col size=\"1\">\n                    <p class=\"question\">\n                      <ion-icon name=\"close\" (click)=\"onImageDelete(i, 'Photography')\"></ion-icon>\n                    </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <!-------------------------------------------------------- Photography ----------------------------------------------------------------->\n\n\n      <!----------------------------------------------------- Incident Description ----------------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem=='Incident Description'\" class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <div [formGroup]=\"incidentDesForm\">\n          <p class=\"question\">\n            Description of incident :\n          </p>\n          <ion-text class=\"mandatoryField\">( Note : You must not use any personal details or names)</ion-text>\n          <ion-input placeholder=\"Please enter description of incident\" formControlName=\"incident_description\"\n            (ionChange)=\"onInput($event,'Incident Description')\"></ion-input>\n          <p class=\"question\">Immediate action taken : </p>\n          <ion-input placeholder=\"Please enter immediate action taken\" formControlName=\"incident_description_action\"\n            (ionChange)=\"onInput($event,'Incident Description')\"></ion-input>\n\n          <p class=\"question\">What could have been done differently ? :</p>\n          <ion-input placeholder=\"Please enter what could have been done differently\"\n            formControlName=\"seen_differently\">\n          </ion-input>\n\n          <p class=\"question\">Was there any Witnesses of the incident ? :</p>\n          <ion-input placeholder=\"Please enter witnesses of the incident\"\n            formControlName=\"was_there_any_witness_of_the_incident\">\n          </ion-input>\n\n          <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n          <ion-radio-group formControlName=\"incident_description_alcohol_test\"\n            (ionChange)=\"onAlcohalTestSelect($event)\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Alcohol test completed :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\">\n            <div *ngIf=\"platformCheck === 'cordova'\">\n              <ion-button *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\" class=\"camera\"\n                expand=\"block\" (click)=\"selectImage(2)\">Upload Image\n              </ion-button>\n              <img src=\"\" *ngIf=\"incidentDesForm.value['incident_description_alcohol_test']=='Yes'\"\n                class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"incident_description_photo\" multiple (change)=\"onAlochaolImage($event)\">\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"alcohalImages.length > 0\">\n                <ion-slide *ngFor=\"let alcohalImage of alcohalImages; let i = index\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"11\">\n                        <img [src]=\"alcohalImage\" tappable (click)=\"onOpenPreview(alcohalImage)\">\n                      </ion-col>\n                      <ion-col size=\"1\">\n                        <p class=\"question\">\n                          \n                          <ion-icon name=\"close\" (click)=\"onImageDelete(i ,'Alcohal Test')\"></ion-icon>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-slide>\n              </ion-slides>\n            </div>\n          </div>\n          <!----------------------------------------------- Alcohal Test -------------------------------------------------------->\n\n\n          <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n          <ion-radio-group formControlName=\"drug_test_completed\" (ionChange)=\"onDrugTestSelect($event)\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Drug test completed :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\">\n            <div *ngIf=\"platformCheck === 'cordova'\">\n              <ion-button *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" class=\"camera\" expand=\"block\"\n                (click)=\"selectImage(6)\">Upload Image\n              </ion-button>\n              <img src=\"\" *ngIf=\"incidentDesForm.value['drug_test_completed']=='Yes'\" class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"drug_test_image\" multiple (change)=\"onDrugTestImage($event)\">\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"drugTestImages.length > 0\">\n                <ion-slide *ngFor=\"let drugTestImage of drugTestImages; let i = index\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"11\">\n                        <img [src]=\"drugTestImage\" tappable (click)=\"onOpenPreview(drugTestImage)\">\n                      </ion-col>\n                      <ion-col size=\"1\">\n                        <p class=\"question\">\n                          \n                          <ion-icon name=\"close\" (click)=\"onImageDelete(i,'Drug Test')\"></ion-icon>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-slide>\n              </ion-slides>\n            </div>\n          </div>\n\n          <!----------------------------------------------- Drug Test -------------------------------------------------------->\n\n\n          <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n\n          <ion-radio-group formControlName=\"return_to_alternate_duties\" (ionChange)=\"onReturnToDutySelect($event)\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>Return to Alternate Duties :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Not Required</ion-label>\n                  <ion-radio slot=\"start\" value=\"Not Required\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"incidentDesForm.value['return_to_alternate_duties'] == 'Yes'\">\n            <ion-text class=\"mandatoryField\">* Please take a photo or upload the Cerificate of Copacity (COC).\n            </ion-text>\n            <div *ngIf=\" platformCheck === 'cordova'\">\n              <ion-button *ngIf=\" returnToAlternateDuties=='Yes'\" class=\" camera\" expand=\"block\"\n                (click)=\"selectImage(7)\">Upload Image</ion-button>\n              <img src=\"\" *ngIf=\"incidentDesForm.value['return_to_alternate_duties']=='Yes'\" class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"return_to_alternate_duties_image\" multiple\n                (change)=\"onReturnToDutyImage($event)\" class=\"uploadFile\">\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"alterDutyImages.length > 0\">\n                <ion-slide *ngFor=\"let returnToAlterDutyImage of alterDutyImages; let i=index\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"11\">\n                        <img [src]=\"returnToAlterDutyImage\" tappable (click)=\"onOpenPreview(returnToAlterDutyImage)\">\n                      </ion-col>\n                      <ion-col size=\"1\">\n                        <p class=\"question\">\n                          \n                          <ion-icon name=\"close\" (click)=\"onImageDelete(i,'Return to Alternate Duties')\"></ion-icon>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-slide>\n              </ion-slides>\n            </div>\n\n          </div>\n          <!----------------------------------------------- Return to Alternate Duties -------------------------------------------------------->\n        </div>\n      </div>\n\n      <!----------------------------------------------------- Incident Description ----------------------------------------------------------->\n\n\n      <!----------------------------------------------------- Classification ----------------------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem==tabItem.val  && selectedTabItem =='Classification'\" [formGroup]='classificationForm'\n        class=\"activeBackground\">\n        <div class=\"headerTitle\">\n          <p>{{tabItem.val }}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem.val )\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-row class='ion-no-padding'>\n          <ion-col size=\"6\" *ngFor=\"let classificationValue of classificationList; let i=index\">\n            <ion-item class=\"ra\" lines=\"none\">\n              <ion-label>{{classificationValue.val}}</ion-label>\n              <ion-checkbox slot=\"start\" [value]=\"classificationValue.val\" [checked]=\"classificationValue.isChecked\"\n                (ionChange)=\"onClassificationChange($event)\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date of Incident :</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Please select date of incident\"\n            formControlName=\"date_of_incident\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time of Incident :</ion-label>\n          <ion-datetime displayFormat=\"HH:mm:ss\" placeholder=\"Please select time of incident\"\n            formControlName=\"time_of_incident\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Date Reported :</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Please select reported date\"\n            formControlName=\"date_reported\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label position=\"floating\">Time Reported :</ion-label>\n          <ion-datetime displayFormat=\"HH:mm:ss\" placeholder=\"Please select reported time\"\n            formControlName=\"time_reported\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-radio-group formControlName=\"classification_location_option\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Add Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Add Location\">\n                </ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Choose Location</ion-label>\n                <ion-radio slot=\"start\" value=\"Choose Location\">\n                </ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"classificationForm.value['classification_location_option'] =='Add Location'\">\n          <p class=\"question\">Add Location :</p>\n          <ion-input placeholder=\"Please enter location\" formControlName=\"classification_location_value\">\n          </ion-input>\n        </div>\n\n        <div *ngIf=\"classificationForm.value['classification_location_option'] == 'Choose Location'\">\n          <p class=\"question\">Choose Location :</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-select placeholder=\"Please select location\" interface=\"action-sheet\"\n              formControlName=\"classification_location_value1\">\n              <ion-select-option value=\"{{locationListItem?.location_name}}\"\n                *ngFor=\"let locationListItem of locationList\">\n                {{locationListItem?.location_name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Shift Type\" interface=\"action-sheet\" formControlName=\"classification_shift_type\">\n            <ion-select-option value=\"{{shiftItem?.shift_type}}\" *ngFor=\"let shiftItem of shiftTypeList\">\n              {{shiftItem?.shift_type}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-select placeholder=\"Supervisor\" interface=\"action-sheet\" formControlName=\"classification_supervisor\">\n            <ion-select-option value=\"{{superVisorItem?.full_name}}\" *ngFor=\"let superVisorItem of superVisorList\">\n              {{superVisorItem?.full_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class=\"ra\" lines=\"none\" (click)=\"onOpenModal()\">\n          <ion-label class=\"labelCustomDropDown\">{{managerList}}</ion-label>\n          <ion-buttons slot=\"end\" class=\"ion-no-padding ion-no-margin\">\n            <ion-button class=\"ion-no-padding ion-no-margin\">\n              <ion-icon name=\"chevron-down\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n      </div>\n\n      <!----------------------------------------------------- Classification ----------------------------------------------------------------->\n    </div>\n\n    <!---------------------------------------------------- Classification Sub Tab ------------------------------------------------------------>\n\n    <div *ngFor=\"let classification of selectedTabList; let i = index\">\n      <ion-button class=\"incident\" *ngIf=\"selectedTabItem != classification\" (click)=\"onSelectTabItem(classification)\">\n        <p>{{classification}} </p>\n        <img class=\"plus\" src=\"{{imagePath+'add.png'}}\" />\n      </ion-button>\n\n      <!------------------------------------------------------- Asset ------------------------------------------------------------------------>\n\n      <div *ngIf=\" selectedTabItem == classification && classification =='Asset'\" class=\"activeBackground\"\n        [formGroup]=\"assetDescriptionForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          Asset description :\n        </p>\n        <ion-input placeholder=\"Please enter asset description\" formControlName=\"asset_description\"></ion-input>\n        <ion-radio-group formControlName=\"asset_has_number\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Does Asset have a number ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"assetDescriptionForm.value['asset_has_number']=='Yes'\">\n          <p class=\"question\">\n            Asset Number :\n          </p>\n          <ion-input placeholder=\"Please enter asset number\" type=\"tel\" formControlName=\"asset_number\"></ion-input>\n        </div>\n        <p class=\"question\">\n          Extent of Damage :\n        </p>\n        <ion-input placeholder=\"Please enter extent of damage\" formControlName=\"extent_of_damage\"></ion-input>\n\n        <div *ngIf=\"platformCheck==='cordova'\">\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(3)\">Upload photo of damage</ion-button>\n          <img src=\"\" *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\" class=\"img-responsive\" />\n        </div>\n\n        <div *ngIf=\"platformCheck === 'browser'\">\n          <p class=\"question\">\n            Upload photo of damage :\n          </p>\n          <input type='file' value=\"extent_damage_image\" multiple (change)=\"onSelectDamageImage($event)\">\n          <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"damageImages.length > 0\">\n            <ion-slide *ngFor=\"let damageImage of damageImages; let i = index\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"11\">\n                    <img [src]=\"damageImage\" tappable (click)=\"onOpenPreview(damageImage)\">\n                  </ion-col>\n                  <ion-col size=\"1\">\n                    <p class=\"question\">\n                      \n                      <ion-icon name=\"close\" (click)=\"onImageDelete(i, 'Asset')\">\n                      </ion-icon>\n                    </p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n      <!------------------------------------------------------- Asset ------------------------------------------------------------------------>\n\n      <!----------------------------------------------------- Environmental ------------------------------------------------------------------>\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Environmental'\" class=\"activeBackground\"\n        [formGroup]=\"enviornmentForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <p class=\"question\">\n          Immediate action taken to minimize Environmental impact ? :\n        </p>\n        <ion-input placeholder=\"Please enter immediate action taken to minimize environmental impact\"\n          formControlName='environmental_description'></ion-input>\n\n        <ion-radio-group formControlName=\"was_a_chemical_split\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was a chemical split ? :</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"enviornmentForm.value['was_a_chemical_split']==='Yes'\" formGroupName=\"chemical_details\">\n          <p class=\"question\">\n            Name of chemical :\n          </p>\n          <ion-input placeholder=\"Please enter name of chemical\" formControlName=\"chemical_name\"></ion-input>\n\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Insert Photo </ion-label>\n            <ion-checkbox slot=\"start\" [value]=\"insertPhotoCheckBox\" formControlName=\"insertPhotoCheckBox\"\n              (ionChange)=\"onInsertImageSelect($event)\">\n            </ion-checkbox>\n          </ion-item>\n\n\n          <div *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\">\n            <div *ngIf=\"platformCheck==='cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"selectImage(3)\">Upload Image</ion-button>\n              <img src=\"\" *ngIf=\"enviornmentForm.value['chemical_details'].insertPhotoCheckBox\"\n                class=\"img-responsive\" />\n            </div>\n\n            <div *ngIf=\"platformCheck === 'browser'\">\n              <input type='file' value=\"chemical_photo\" multiple (change)=\"onChemicalImageSelect($event)\">\n              <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"chemicalImages.length > 0\">\n                <ion-slide *ngFor=\"let chemicalImage of chemicalImages ; let i = index\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"11\">\n                        <img [src]=\"chemicalImage\" tappable (click)=\"onOpenPreview(chemicalImage)\">\n                      </ion-col>\n                      <ion-col size=\"1\">\n                        <p class=\"question\">\n                          \n                          <ion-icon name=\"close\" (click)=\"onImageDelete(i,'Chemical Image')\">\n                          </ion-icon>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-slide>\n              </ion-slides>\n            </div>\n          </div>\n\n          <p class=\"question\">\n            Approximate quantity of chemical spilled :\n          </p>\n          <ion-input placeholder=\"Please enter approximate qunatity of chemical spilled\" type=\"tel\"\n            formControlName=\"approximate_quantity\">\n          </ion-input>\n        </div>\n\n        <ion-radio-group formControlName='emergency_spill_kit_used'>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the emergency spill kit used ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Yes</ion-label>\n                <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n        <div *ngIf=\"enviornmentForm.value['emergency_spill_kit_used'] == 'Yes'\">\n          <p class=\" question\">\n            What was used out of the chemical spill kit ? :\n          </p>\n          <ion-input placeholder=\"Please enter what was used out of the chemical spill kit ?\"\n            formControlName=\"out_of_split_kit\"></ion-input>\n        </div>\n      </div>\n\n      <!----------------------------------------------------- Environmental ------------------------------------------------------------------>\n\n      <!-------------------------------------------------------- Injury ----------------------------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Injury'\" class=\"activeBackground\"\n        [formGroup]=\"injuryForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(tabItem)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <p class=\"question\">Number of Injured Person's :</p>\n        <ion-select placeholder=\"Please select Injured Person\" interface=\"action-sheet\" formControlName=\"injury_persons\"\n          (ionChange)=\"onAddMultiplePersonDetails($event)\">\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n          <ion-select-option value=\"3\">3</ion-select-option>\n          <ion-select-option value=\"4\">4</ion-select-option>\n        </ion-select>\n\n        <div formArrayName=\"person_details\" *ngFor=\"let personDetails of injuryPersonDetails.controls; let j = index \">\n          <ion-card>\n            <p class=\"questionHead\">Person {{(j+1)}} Details</p>\n\n            <div [formGroupName]=\"j\">\n              <p class=\"question\">Injured Person Name :</p>\n              <ion-select placeholder=\"Please select Injured Person Name\" interface=\"action-sheet\"\n                formControlName=\"injured_person_option\">\n                <ion-select-option value=\"{{witnessName?.full_name}}\" *ngFor=\"let witnessName of witnessList\">\n                  {{witnessName?.full_name}}\n                </ion-select-option>\n              </ion-select>\n              <!-- </ion-item> -->\n\n              <div *ngIf='injuryForm.value[\"person_details\"][j].injured_person_option==\"Other\"'>\n                <p class=\"question\">Full Name of Injured Person :</p>\n                <ion-input placeholder=\"Please enter full name of injured person\"\n                  formControlName=\"injured_person_option_value\">\n                </ion-input>\n              </div>\n\n              <!-- <ion-item class=\"ra\" lines=\"none\"> -->\n              <p class=\"question\">Gender :</p>\n              <ion-select placeholder=\"Please select gender\" interface=\"action-sheet\" formControlName=\"gender\">\n                <ion-select-option value=\"Male\">Male</ion-select-option>\n                <ion-select-option value=\"Female\">Female</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n              </ion-select>\n              <!-- </ion-item> -->\n\n              <!-- <ion-item class=\"ion-no-padding ra\" lines=\"none\"> -->\n              <p class=\"question\">Date of Birth :</p>\n              <ion-datetime placeholder=\"Please select date of birth\" displayFormat=\"DD/MM/YYYY\"\n                formControlName=\"date_of_birth\">\n              </ion-datetime>\n              <!-- </ion-item> -->\n\n              <ion-radio-group formControlName=\"normal_duties\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Return to Normal Duties :</ion-label>\n                </ion-item>\n                <ion-row class=\"ion-no-padding\">\n                  <ion-col size=\"6\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].normal_duties == 'No'\">\n                <p class=\"question\">Explanation :</p>\n                <ion-input placeholder=\"Please enter explanation\" formControlName=\"normal_duties_explanation\">\n                </ion-input>\n              </div>\n\n              <div>\n                <ion-radio-group formControlName=\"alternate_duties\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Return to Alternate Duties :</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Yes</ion-label>\n                        <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>No</ion-label>\n                        <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-radio-group>\n              </div>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].alternate_duties ==='No'\">\n                <p class=\"question\">Explanation :</p>\n                <ion-input placeholder=\"Please enter explanation\" formControlName=\"duties_explanation\"></ion-input>\n              </div>\n\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Initial Injury / IIIness Classification :</ion-label>\n              </ion-item>\n\n              <ion-radio-group formControlName=\"initital_injury\">\n                <ion-row>\n                  <ion-col size=\"6\" *ngFor=\"let injuryKeys of injuryList;\">\n                    <ion-item class=\"ra\" lines=\"none\">\n                      <ion-label>{{injuryKeys.val}}</ion-label>\n                      <ion-radio slot=\"start\" value=\"{{injuryKeys.val}}\">\n                      </ion-radio>\n                    </ion-item>\n                    <ion-text class=\"mandatoryField\"\n                      *ngIf=\"injuryKeys.val  == injuryForm.value['person_details'][j].initital_injury\">\n                      {{injuryKeys.desc}}</ion-text>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Male'\"\n                src=\"{{imagePath+'Male_Silhouette.png'}}\" usemap=\"#image-map\" (click)=\"onImageClick($event)\">\n\n              <img *ngIf=\"injuryForm.value['person_details'][j].gender ==='Female'\"\n                src=\"{{imagePath+'Female_Silhouette.png'}}\" usemap=\"#image-map\" (click)=\"onImageClick($event)\">\n\n\n              <map name=\"image-map\">\n                <!-- <area target=\"\" href=\"\" alt=\"Head\" title=\"Head\" coords=\"92,375,103,379\" shape=\"rect\"\n                  [ngClass]=\"{active: isActive('92,375,103,379')}\"> -->\n                <area target=\"\" href=\"\" alt=\"Head\" title=\"Head\" coords=\"92,375,103,379\" shape=\"rect\">\n                <area target=\"\" href=\"\" alt=\"Face\" title=\"Face\" coords=\"166,236\" shape=\"rect\">\n                <area target=\"\" href=\"\" alt=\"Left_Hand\" title=\"Left_Hand\" coords=\"110,361\" shape=\"rect\">\n                <area target=\"\" href=\"\" alt=\"Right_Hand\" title=\"Right_Hand\" coords=\"224,355\" shape=\"rect\">\n                <area target=\"\" href=\"\" alt=\"Stomach\" title=\"Stomach\" coords=\"164,361\" shape=\"rect\">\n                <area target=\"\" href=\"\" alt=\"Left_Leg\" title=\"Left_Leg\" coords=\"151,449\" shape=\"rect\">\n                <area target=\"\" href=\"\" alt=\"Right_Leg\" title=\"Right_Leg\" coords=\"185,453\" shape=\"rect\">\n              </map>\n\n              <p class=\"question\">Part of body injured :</p>\n              <ion-select multiple=\"true\" cancelText=\"Cancel\" okText=\"Ok\" formControlName=\"part_of_body_injured_occured\"\n                placeholder=\"Select Part of body injured\">\n                <ion-select-option value=\"{{bodyPartsVal.name}}\" *ngFor=\"let bodyPartsVal of bodyPartList\">\n                  {{bodyPartsVal.name}}</ion-select-option>\n              </ion-select>\n\n              <div>\n                <ion-radio-group formControlName=\"was_immediate_treatment\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Was immediate treatment given ? :</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>Yes</ion-label>\n                        <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item class=\"ra\" lines=\"none\">\n                        <ion-label>No</ion-label>\n                        <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-radio-group>\n              </div>\n\n              <div *ngIf=\"injuryForm.value['person_details'][j].was_immediate_treatment == 'Yes'\">\n                <p class=\"question\">What treatment was given ? :</p>\n                <ion-input placeholder=\"Please enter what treatment was given \"\n                  formControlName=\"immediate_treatment_given_explanation\">\n                </ion-input>\n\n                <p class=\"question\">Who administered treatment ? : </p>\n\n                <p class=\"question\">Person Name :</p>\n                <ion-input placeholder=\"Please enter Person Name\" formControlName=\"immediate_treatment_person_name\">\n                </ion-input>\n\n                <p class=\"question\">Contact Details :</p>\n                <ion-input placeholder=\"Please enter mobile no or email id\" type=\"tel\"\n                  formControlName=\"immediate_treatment_person_number\">\n                </ion-input>\n              </div>\n            </div>\n          </ion-card>\n        </div>\n      </div>\n\n      <!------------------------------------------------------- Injury ----------------------------------------------------------------------->\n\n      <!------------------------------------------------------  Report ----------------------------------------------------------------------->\n\n      <div *ngIf=\" selectedTabItem == classification && classification =='Report'\" class=\"activeBackground\"\n        [formGroup]=\"reportForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <p class=\"question\">\n          What could have done differently ? :\n        </p>\n        <ion-input placeholder=\"Please enter what could have done differently\" formControlName='report'></ion-input>\n      </div>\n      <!------------------------------------------------------- Report ----------------------------------------------------------------------->\n\n      <!------------------------------------------------------ Reputation -------------------------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Reputation'\" class=\"activeBackground\"\n        [formGroup]=\"reputationDesForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n        <ion-item class=\"ra\" lines=\"none\">\n          <ion-label>Was the reputation damages an individual or Company ? :\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let reputationCheckBoxItem of reputationCheckBox\" lines=\"none\" class=\"ion-no-padding ra\">\n          <ion-label>{{reputationCheckBoxItem.val}}</ion-label>\n          <ion-checkbox slot=\"end\" (ionChange)=\"onReputationDamagesCheckBox($event)\"\n            [value]=\"reputationCheckBoxItem.val\" [checked]=\"reputationCheckBoxItem.isChecked\">\n          </ion-checkbox>\n        </ion-item>\n\n        <div\n          *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Individual' || reputationDesForm.value['reputation_option'][1] == 'Individual'\">\n          <p class=\"question\">\n            How has the Individual's reputation been damaged ? :\n          </p>\n          <ion-input placeholder=\"Please enter how has the individual's reputation been damaged\"\n            formControlName=\"individual_damage_value\"></ion-input>\n        </div>\n\n        <div\n          *ngIf=\"reputationDesForm.value['reputation_option'][0] == 'Company' || reputationDesForm.value['reputation_option'][1] =='Company'\">\n          <p class=\"question\">\n            How has the Company's reputation been damaged ? :\n          </p>\n          <ion-input placeholder=\"Please enter how has the compnay's reputation been damaged\"\n            formControlName=\"company_damage_value\"></ion-input>\n        </div>\n\n        <ion-radio-group formControlName=\"reputation_negative_effect\" (ionChange)=\"onRepoNegativeEffect($event)\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Was the negative effect internal or external ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Internal</ion-label>\n                <ion-radio slot=\"start\" value=\"Internal\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>External</ion-label>\n                <ion-radio slot=\"start\" value=\"External\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Both</ion-label>\n                <ion-radio slot=\"start\" value=\"Both\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div\n          *ngIf=\"(reputationDesForm.value['reputation_negative_effect'] == 'Internal') || (reputationDesForm.value['reputation_negative_effect'] == 'Both') \">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>What Department was effected ? :</ion-label>\n          </ion-item>\n\n          <ion-item *ngFor=\"let departmentEffectVal of departmentEffect\" lines=\"none\" class=\"ra ion-no-padding\">\n            <ion-label>{{departmentEffectVal.val}}</ion-label>\n            <ion-checkbox slot=\"end\" (ionChange)=\"onDepartmentEffectCheckBox($event)\" [value]=\"departmentEffectVal.val\"\n              [checked]=\"departmentEffectVal.isChecked\">\n            </ion-checkbox>\n          </ion-item>\n        </div>\n\n        <div\n          *ngIf=\"(reputationDesForm.value['reputation_negative_effect'] == 'External') || (reputationDesForm.value['reputation_negative_effect'] == 'Both') \">\n          <p class=\"question\">\n            Who is the external party ? :\n          </p>\n          <ion-input placeholder=\"Please enter who is the external party\" formControlName=\"external_party\"></ion-input>\n        </div>\n\n        <p class=\"question\">\n          Name of witness :\n        </p>\n\n        <ion-select placeholder=\"Select Witness\" interface=\"action-sheet\" formControlName=\"name_of_witness\"\n          (ionChange)=\"onWitnessChange($event)\">\n          <ion-select-option value=\"{{employeeListValue?.full_name}}\" *ngFor=\"let employeeListValue of employeeList\">\n            {{employeeListValue?.full_name}}</ion-select-option>\n        </ion-select>\n\n        <div *ngIf=\"reputationDesForm.value['name_of_witness'] == 'Other'\" formGroupName='other_witness_details'>\n          <p class=\"other_witness\"> Other Witness Details </p>\n          <p class=\"question\">\n            Name :\n          </p>\n          <ion-input placeholder=\"Please enter Other Witness Name\" formControlName=\"other_witness_name\"></ion-input>\n          <p class=\"question\">\n            Mobile No :\n          </p>\n          <ion-input type=\"tel\" placeholder=\"Please enter Other Witness Mobile No \"\n            formControlName=\"other_witness_mobile_no\">\n          </ion-input>\n          <p class=\"question\">\n            Email id :\n          </p>\n          <ion-input type=\"email\" placeholder=\"Please enter Other Witness Email\" formControlName=\"other_witness_email\">\n          </ion-input>\n        </div>\n        <p class=\"question\">\n          What is the possible outcome of this incident ? :\n        </p>\n        <ion-input placeholder=\"Please enter  what is the possible outcome of this incident\"\n          formControlName=\"possible_outcome_incident\"></ion-input>\n      </div>\n      <!------------------------------------------------------ Reputation -------------------------------------------------------------------->\n\n      <!------------------------------------------------------ Security ---------------------------------------------------------------------->\n\n      <div *ngIf=\"selectedTabItem == classification && classification =='Security'\" class=\"activeBackground\"\n        [formGroup]=\"securityForm\">\n        <div class=\"headerTitle\">\n          <p>{{classification}}</p>\n          <img (click)=\"onDeSelectTabItem(classification)\" class=\"plus\" src=\"{{imagePath+'minus.png'}}\" />\n        </div>\n        <hr />\n\n        <ion-radio-group formControlName=\"security_option\" (ionChange)=\"onSecurityOption($event)\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>IT</ion-label>\n                <ion-radio slot=\"start\" value=\"IT\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Theft</ion-label>\n                <ion-radio slot=\"start\" value=\"Theft\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-item class=\"ra\" lines=\"none\">\n                <ion-label>Other</ion-label>\n                <ion-radio slot=\"start\" value=\"Other\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"securityForm.value['security_option']=='IT'\">\n\n          <ion-item class=\"ra ion-no-padding\" lines=\"none\">\n            <ion-label>What kind of IT Security Incident ? :</ion-label>\n          </ion-item>\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"6\" class=\"ion-no-padding\" *ngFor=\"let itSecurityItem of itSecurityList\">\n              <ion-item lines=\"none\" class=\"ra ion-no-padding\">\n                <ion-label>{{itSecurityItem.val}}</ion-label>\n                <ion-checkbox slot=\"start\" [value]=\"itSecurityItem.val\" [checked]=\"itSecurityItem.isChecked\"\n                  (ionChange)=\"onSecurityItOption($event)\"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </div>\n        <div *ngIf=\"securityForm.value['security_option']=='Theft'\">\n          <p class=\"question\">\n            What has been stolen ? :\n          </p>\n          <ion-input placeholder=\"Please enter what has been stolen\" formControlName=\"what_has_been_stolen_item\">\n          </ion-input>\n          <p class=\"question\">\n            Approximate value of stolen item ? :\n          </p>\n          <ion-input placeholder=\"Please enter approximate value of stolen item\"\n            formControlName=\"approximate_value_of_stolen\"></ion-input>\n        </div>\n\n        <div *ngIf=\"securityForm.value['security_option']=='Other'\">\n          <p class=\"question\">\n            What is the Security incident ? :\n          </p>\n          <ion-input placeholder=\"Please enter what is the Security incident\"\n            formControlName=\"what_is_the_specific_securities_incident\"></ion-input>\n        </div>\n      </div>\n      <!------------------------------------------------------ Security ---------------------------------------------------------------------->\n\n    </div>\n\n    <!----------------------------------------------------- Classification Sub Tab ----------------------------------------------------------->\n  </div>\n\n  <div class=\"container\">\n    <ion-button (click)=\"onSubmit('submit')\" class=\"btn\">SUBMIT</ion-button>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_incident_incident-form_incident-form_module_ts-es2015.js.map