(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_telehandler_telehandler-add-form_telehandler-add-form-b0535c"],{

/***/ 91681:
/*!********************************************************!*\
  !*** ./src/app/modals/image-modal/image-modal.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageModalPage": function() { return /* binding */ ImageModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_image_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-modal.page.html */ 41556);
/* harmony import */ var _image_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-modal.page.scss */ 4521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ImageModalPage = class ImageModalPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.sliderOpts = {
            zoom: true
        };
    }
    ngOnInit() {
        console.log('img', this.img);
        console.log('slides', this.slides);
    }
    ionViewDidEnter() {
        this.slides.update();
    }
    zoom(zoomIn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const slider = yield this.slides.getSwiper();
            const zoom = slider.zoom;
            zoomIn ? zoom.in() : zoom.out();
        });
    }
    close() {
        this.modalController.dismiss();
    }
};
ImageModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ImageModalPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides,] }],
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['img',] }]
};
ImageModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-modal',
        template: _raw_loader_image_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImageModalPage);



/***/ }),

/***/ 43485:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-add-form/telehandler-add-form-routing.module.ts ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelehandlerAddFormPageRoutingModule": function() { return /* binding */ TelehandlerAddFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _telehandler_add_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telehandler-add-form.page */ 23985);




const routes = [
    {
        path: '',
        component: _telehandler_add_form_page__WEBPACK_IMPORTED_MODULE_0__.TelehandlerAddFormPage
    }
];
let TelehandlerAddFormPageRoutingModule = class TelehandlerAddFormPageRoutingModule {
};
TelehandlerAddFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TelehandlerAddFormPageRoutingModule);



/***/ }),

/***/ 4459:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-add-form/telehandler-add-form.module.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelehandlerAddFormPageModule": function() { return /* binding */ TelehandlerAddFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _telehandler_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telehandler-add-form-routing.module */ 43485);
/* harmony import */ var _telehandler_add_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telehandler-add-form.page */ 23985);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let TelehandlerAddFormPageModule = class TelehandlerAddFormPageModule {
};
TelehandlerAddFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _telehandler_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.TelehandlerAddFormPageRoutingModule
        ],
        declarations: [
            _telehandler_add_form_page__WEBPACK_IMPORTED_MODULE_1__.TelehandlerAddFormPage,
            src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ]
    })
], TelehandlerAddFormPageModule);



/***/ }),

/***/ 23985:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-add-form/telehandler-add-form.page.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelehandlerAddFormPage": function() { return /* binding */ TelehandlerAddFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_telehandler_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./telehandler-add-form.page.html */ 34352);
/* harmony import */ var _telehandler_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telehandler-add-form.page.scss */ 21116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 67871);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast-service/toast.service */ 45311);
/* harmony import */ var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading-service/loading.service */ 80513);
/* harmony import */ var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-service/shared.service */ 49481);
/* harmony import */ var src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/image-modal/image-modal.page */ 91681);
/* harmony import */ var src_app_services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert-service/alert.service */ 96022);















let TelehandlerAddFormPage = class TelehandlerAddFormPage {
    // showMsg: boolean = false;
    constructor(fb, globalService, toastService, nav, loadingService, modalController, sharedService, actionSheetController, camera, alertService, activatedRoute) {
        this.fb = fb;
        this.globalService = globalService;
        this.toastService = toastService;
        this.nav = nav;
        this.loadingService = loadingService;
        this.modalController = modalController;
        this.sharedService = sharedService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.alertService = alertService;
        this.activatedRoute = activatedRoute;
        this.pName = 'Telehandler';
        this.isSubmitted = false;
        this.form_percent = 0;
    }
    ngOnInit() {
        this.teleHandlerForm = this.fb.group({
            competency: [''],
            telehandler_number: ['TH40'],
            hour_meter: [''],
            data_plate: [''],
            data_plate_comment: [''],
            data_plate_image: [''],
            engine_oil: [''],
            engine_oil_comment: [''],
            engine_oil_image: [''],
            hydraulic_oil: [''],
            hydraulic_oil_comment: [''],
            hydraulic_oil_image: [''],
            fuel_level: [''],
            equipment_inspect: [''],
            equipment_inspect_comment: [''],
            equipment_inspect_image: [''],
            coolant_level: [''],
            coolant_level_comment: [''],
            coolant_level_image: [''],
            belts_and_hoses: [''],
            belts_and_hoses_comment: [''],
            belts_and_hoses_image: [''],
            wheels_tyres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            wheels_tyres_comment: [''],
            wheels_tyres_image: [''],
            fire_extinguisher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            fire_extinguisher_comment: [''],
            fire_extinguisher_image: [''],
            fuel_flash: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            fuel_flash_comment: [''],
            fuel_flash_image: [''],
            hydraulics_functional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            hydraulics_functional_comment: [''],
            hydraulics_functional_image: [''],
            lift_arms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            lift_arms_comment: [''],
            lift_arms_image: [''],
            chain_hose: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            chain_hose_comment: [''],
            chain_hose_image: [''],
            cap_bolts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            cap_bolts_comment: [''],
            cap_bolts_image: [''],
            safety_stops: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            safety_stops_comment: [''],
            safety_stops_image: [''],
            forks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            forks_comment: [''],
            forks_image: [''],
            overhead_guards: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            overhead_guards_comment: [''],
            overhead_guards_image: [''],
            counterweight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            counterweight_comment: [''],
            counterweight_image: [''],
            engine_bay_components: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            engine_bay_components_comment: [''],
            engine_bay_components_image: [''],
            horn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            horn_comment: [''],
            horn_image: [''],
            audible: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            audible_comment: [''],
            audible_image: [''],
            headlights: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            headlights_comment: [''],
            headlights_image: [''],
            turn_signals: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            turn_signals_comment: [''],
            turn_signals_image: [''],
            warning_brake_lights: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            warning_brake_lights_comment: [''],
            warning_brake_lights_image: [''],
            foot_brake: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            foot_brake_comment: [''],
            foot_brake_image: [''],
            parking_brake: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            parking_brake_comment: [''],
            parking_brake_image: [''],
            clutch_gear_shift: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            clutch_gear_shift_comment: [''],
            clutch_gear_shift_image: [''],
            engine_noise: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            engine_noise_comment: [''],
            engine_noise_image: [''],
            fluid_leaks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            fluid_leaks_comment: [''],
            fluid_leaks_image: [''],
            dash_gauges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            dash_gauges_comment: [''],
            dash_gauges_image: [''],
            operational_controls: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            operational_controls_comment: [''],
            operational_controls_image: [''],
            first_aid_kit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            first_aid_kit_comment: [''],
            first_aid_kit_image: [''],
            comment: [''],
        });
        this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
    }
    get errorControls() {
        return this.teleHandlerForm.controls;
    }
    onOpenPreview(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__.ImageModalPage,
                cssClass: 'transparent-modal',
                componentProps: {
                    img
                }
            });
            modal.present();
        });
    }
    pickImage(sourceType, rowName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let image;
            const options = {
                quality: 100,
                sourceType: sourceType == 0 ? this.camera.PictureSourceType.PHOTOLIBRARY : (sourceType == 1 ? this.camera.PictureSourceType.CAMERA : 0),
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
            };
            this.camera.getPicture(options).then((imageData) => {
                // console.log('imageData', imageData);
                image = imageData != '' ? 'data:image/jpeg;base64,' + imageData : '';
                if (rowName == 'data_plate_image') {
                    this.teleHandlerForm.controls['data_plate_image'].setValue(image);
                }
                else if (rowName == 'engine_oil_image') {
                    this.teleHandlerForm.controls['engine_oil_image'].setValue(image);
                }
                else if (rowName == 'hydraulic_oil_image') {
                    this.teleHandlerForm.controls['hydraulic_oil_image'].setValue(image);
                }
                else if (rowName == 'equipment_inspect_image') {
                    this.teleHandlerForm.controls['equipment_inspect_image'].setValue(image);
                }
                else if (rowName == 'coolant_level_image') {
                    this.teleHandlerForm.controls['coolant_level_image'].setValue(image);
                }
                else if (rowName == 'belts_and_hoses_image') {
                    this.teleHandlerForm.controls['belts_and_hoses_image'].setValue(image);
                }
                else if (rowName == 'wheels_tyres_image') {
                    this.teleHandlerForm.controls['wheels_tyres_image'].setValue(image);
                }
                else if (rowName == 'fire_extinguisher_image') {
                    this.teleHandlerForm.controls['fire_extinguisher_image'].setValue(image);
                }
                else if (rowName == 'fuel_flash_image') {
                    this.teleHandlerForm.controls['fuel_flash_image'].setValue(image);
                }
                else if (rowName == 'hydraulics_functional_image') {
                    this.teleHandlerForm.controls['hydraulics_functional_image'].setValue(image);
                }
                else if (rowName == 'lift_arms_image') {
                    this.teleHandlerForm.controls['lift_arms_image'].setValue(image);
                }
                else if (rowName == 'chain_hose_image') {
                    this.teleHandlerForm.controls['chain_hose_image'].setValue(image);
                }
                else if (rowName == 'cap_bolts_image') {
                    this.teleHandlerForm.controls['cap_bolts_image'].setValue(image);
                }
                else if (rowName == 'safety_stops_image') {
                    this.teleHandlerForm.controls['safety_stops_image'].setValue(image);
                }
                else if (rowName == 'forks_image') {
                    this.teleHandlerForm.controls['forks_image'].setValue(image);
                }
                else if (rowName == 'overhead_guards_image') {
                    this.teleHandlerForm.controls['overhead_guards_image'].setValue(image);
                }
                else if (rowName == 'counterweight_image') {
                    this.teleHandlerForm.controls['counterweight_image'].setValue(image);
                }
                else if (rowName == 'engine_bay_components_image') {
                    this.teleHandlerForm.controls['engine_bay_components_image'].setValue(image);
                }
                else if (rowName == 'horn_image') {
                    this.teleHandlerForm.controls['horn_image'].setValue(image);
                }
                else if (rowName == 'audible_image') {
                    this.teleHandlerForm.controls['audible_image'].setValue(image);
                }
                else if (rowName == 'headlights_image') {
                    this.teleHandlerForm.controls['headlights_image'].setValue(image);
                }
                else if (rowName == 'turn_signals_image') {
                    this.teleHandlerForm.controls['turn_signals_image'].setValue(image);
                }
                else if (rowName == 'warning_brake_lights_image') {
                    this.teleHandlerForm.controls['warning_brake_lights_image'].setValue(image);
                }
                else if (rowName == 'foot_brake_image') {
                    this.teleHandlerForm.controls['foot_brake_image'].setValue(image);
                }
                else if (rowName == 'parking_brake_image') {
                    this.teleHandlerForm.controls['parking_brake_image'].setValue(image);
                }
                else if (rowName == 'clutch_gear_shift_image') {
                    this.teleHandlerForm.controls['clutch_gear_shift_image'].setValue(image);
                }
                else if (rowName == 'engine_noise_image') {
                    this.teleHandlerForm.controls['engine_noise_image'].setValue(image);
                }
                else if (rowName == 'dash_gauges_image') {
                    this.teleHandlerForm.controls['dash_gauges_image'].setValue(image);
                }
                else if (rowName == 'operational_controls_image') {
                    this.teleHandlerForm.controls['operational_controls_image'].setValue(image);
                }
                else if (rowName == 'fluid_leaks_image') {
                    this.teleHandlerForm.controls['fluid_leaks_image'].setValue(image);
                }
                else if (rowName == 'first_aid_kit_image') {
                    this.teleHandlerForm.controls['first_aid_kit_image'].setValue(image);
                }
            }, (err) => {
                console.log("errOf Image ", err);
            });
        });
    }
    mobileUploads(rowName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, rowName);
                        },
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA, rowName);
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
    onSelectImage(event, type, rowName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (type == 1) {
                this.mobileUploads(rowName);
            }
            else {
                this.sharedService.getBase64(event.target.files[0]).then(image => {
                    if (rowName == 'data_plate_image') {
                        this.teleHandlerForm.controls['data_plate_image'].setValue(image);
                        // if (this.teleHandlerForm.value['data_plate_image'].length <= 0) {
                        //   this.teleHandlerForm.controls['data_plate_image'].setValue(image);
                        // } else {
                        //   this.teleHandlerForm.value['data_plate_image'].unshift(image);
                        // }
                        // console.log('data_plate_image', this.teleHandlerForm.value['data_plate_image']);
                    }
                    else if (rowName == 'engine_oil_image') {
                        this.teleHandlerForm.controls['engine_oil_image'].setValue(image);
                    }
                    else if (rowName == 'hydraulic_oil_image') {
                        this.teleHandlerForm.controls['hydraulic_oil_image'].setValue(image);
                    }
                    else if (rowName == 'equipment_inspect_image') {
                        this.teleHandlerForm.controls['equipment_inspect_image'].setValue(image);
                    }
                    else if (rowName == 'coolant_level_image') {
                        this.teleHandlerForm.controls['coolant_level_image'].setValue(image);
                    }
                    else if (rowName == 'belts_and_hoses_image') {
                        this.teleHandlerForm.controls['belts_and_hoses_image'].setValue(image);
                    }
                    else if (rowName == 'wheels_tyres_image') {
                        this.teleHandlerForm.controls['wheels_tyres_image'].setValue(image);
                    }
                    else if (rowName == 'fire_extinguisher_image') {
                        this.teleHandlerForm.controls['fire_extinguisher_image'].setValue(image);
                    }
                    else if (rowName == 'fuel_flash_image') {
                        this.teleHandlerForm.controls['fuel_flash_image'].setValue(image);
                    }
                    else if (rowName == 'hydraulics_functional_image') {
                        this.teleHandlerForm.controls['hydraulics_functional_image'].setValue(image);
                    }
                    else if (rowName == 'lift_arms_image') {
                        this.teleHandlerForm.controls['lift_arms_image'].setValue(image);
                    }
                    else if (rowName == 'chain_hose_image') {
                        this.teleHandlerForm.controls['chain_hose_image'].setValue(image);
                    }
                    else if (rowName == 'cap_bolts_image') {
                        this.teleHandlerForm.controls['cap_bolts_image'].setValue(image);
                    }
                    else if (rowName == 'safety_stops_image') {
                        this.teleHandlerForm.controls['safety_stops_image'].setValue(image);
                    }
                    else if (rowName == 'forks_image') {
                        this.teleHandlerForm.controls['forks_image'].setValue(image);
                    }
                    else if (rowName == 'overhead_guards_image') {
                        this.teleHandlerForm.controls['overhead_guards_image'].setValue(image);
                    }
                    else if (rowName == 'counterweight_image') {
                        this.teleHandlerForm.controls['counterweight_image'].setValue(image);
                    }
                    else if (rowName == 'engine_bay_components_image') {
                        this.teleHandlerForm.controls['engine_bay_components_image'].setValue(image);
                    }
                    else if (rowName == 'horn_image') {
                        this.teleHandlerForm.controls['horn_image'].setValue(image);
                    }
                    else if (rowName == 'audible_image') {
                        this.teleHandlerForm.controls['audible_image'].setValue(image);
                    }
                    else if (rowName == 'headlights_image') {
                        this.teleHandlerForm.controls['headlights_image'].setValue(image);
                    }
                    else if (rowName == 'turn_signals_image') {
                        this.teleHandlerForm.controls['turn_signals_image'].setValue(image);
                    }
                    else if (rowName == 'warning_brake_lights_image') {
                        this.teleHandlerForm.controls['warning_brake_lights_image'].setValue(image);
                    }
                    else if (rowName == 'foot_brake_image') {
                        this.teleHandlerForm.controls['foot_brake_image'].setValue(image);
                    }
                    else if (rowName == 'parking_brake_image') {
                        this.teleHandlerForm.controls['parking_brake_image'].setValue(image);
                    }
                    else if (rowName == 'clutch_gear_shift_image') {
                        this.teleHandlerForm.controls['clutch_gear_shift_image'].setValue(image);
                    }
                    else if (rowName == 'engine_noise_image') {
                        this.teleHandlerForm.controls['engine_noise_image'].setValue(image);
                    }
                    else if (rowName == 'dash_gauges_image') {
                        this.teleHandlerForm.controls['dash_gauges_image'].setValue(image);
                    }
                    else if (rowName == 'operational_controls_image') {
                        this.teleHandlerForm.controls['operational_controls_image'].setValue(image);
                    }
                    else if (rowName == 'fluid_leaks_image') {
                        this.teleHandlerForm.controls['fluid_leaks_image'].setValue(image);
                    }
                    else if (rowName == 'first_aid_kit_image') {
                        this.teleHandlerForm.controls['first_aid_kit_image'].setValue(image);
                    }
                }).catch(error => {
                    console.log('error', error);
                });
            }
        });
    }
    onDeleteImage(rowName) {
        if (rowName == 'data_plate_image') {
            this.teleHandlerForm.controls['data_plate_image'].setValue('');
        }
        else if (rowName == 'engine_oil_image') {
            this.teleHandlerForm.controls['engine_oil_image'].setValue('');
        }
        else if (rowName == 'hydraulic_oil_image') {
            this.teleHandlerForm.controls['hydraulic_oil_image'].setValue('');
        }
        else if (rowName == 'equipment_inspect_image') {
            this.teleHandlerForm.controls['equipment_inspect_image'].setValue('');
        }
        else if (rowName == 'coolant_level_image') {
            this.teleHandlerForm.controls['coolant_level_image'].setValue('');
        }
        else if (rowName == 'belts_and_hoses_image') {
            this.teleHandlerForm.controls['belts_and_hoses_image'].setValue('');
        }
        else if (rowName == 'wheels_tyres_image') {
            this.teleHandlerForm.controls['wheels_tyres_image'].setValue('');
        }
        else if (rowName == 'fire_extinguisher_image') {
            this.teleHandlerForm.controls['fire_extinguisher_image'].setValue('');
        }
        else if (rowName == 'fuel_flash_image') {
            this.teleHandlerForm.controls['fuel_flash_image'].setValue('');
        }
        else if (rowName == 'hydraulics_functional_image') {
            this.teleHandlerForm.controls['hydraulics_functional_image'].setValue('');
        }
        else if (rowName == 'lift_arms_image') {
            this.teleHandlerForm.controls['lift_arms_image'].setValue('');
        }
        else if (rowName == 'chain_hose_image') {
            this.teleHandlerForm.controls['chain_hose_image'].setValue('');
        }
        else if (rowName == 'cap_bolts_image') {
            this.teleHandlerForm.controls['cap_bolts_image'].setValue('');
        }
        else if (rowName == 'safety_stops_image') {
            this.teleHandlerForm.controls['safety_stops_image'].setValue('');
        }
        else if (rowName == 'forks_image') {
            this.teleHandlerForm.controls['forks_image'].setValue('');
        }
        else if (rowName == 'overhead_guards_image') {
            this.teleHandlerForm.controls['overhead_guards_image'].setValue('');
        }
        else if (rowName == 'counterweight_image') {
            this.teleHandlerForm.controls['counterweight_image'].setValue('');
        }
        else if (rowName == 'engine_bay_components_image') {
            this.teleHandlerForm.controls['engine_bay_components_image'].setValue('');
        }
        else if (rowName == 'horn_image') {
            this.teleHandlerForm.controls['horn_image'].setValue('');
        }
        else if (rowName == 'audible_image') {
            this.teleHandlerForm.controls['audible_image'].setValue('');
        }
        else if (rowName == 'headlights_image') {
            this.teleHandlerForm.controls['headlights_image'].setValue('');
        }
        else if (rowName == 'turn_signals_image') {
            this.teleHandlerForm.controls['turn_signals_image'].setValue('');
        }
        else if (rowName == 'warning_brake_lights_image') {
            this.teleHandlerForm.controls['warning_brake_lights_image'].setValue('');
        }
        else if (rowName == 'foot_brake_image') {
            this.teleHandlerForm.controls['foot_brake_image'].setValue('');
        }
        else if (rowName == 'parking_brake_image') {
            this.teleHandlerForm.controls['parking_brake_image'].setValue('');
        }
        else if (rowName == 'clutch_gear_shift_image') {
            this.teleHandlerForm.controls['clutch_gear_shift_image'].setValue('');
        }
        else if (rowName == 'engine_noise_image') {
            this.teleHandlerForm.controls['engine_noise_image'].setValue('');
        }
        else if (rowName == 'dash_gauges_image') {
            this.teleHandlerForm.controls['dash_gauges_image'].setValue('');
        }
        else if (rowName == 'operational_controls_image') {
            this.teleHandlerForm.controls['operational_controls_image'].setValue('');
        }
        else if (rowName == 'fluid_leaks_image') {
            this.teleHandlerForm.controls['fluid_leaks_image'].setValue('');
        }
        else if (rowName == 'first_aid_kit_image') {
            this.teleHandlerForm.controls['first_aid_kit_image'].setValue('');
        }
    }
    onSubmit() {
        // this.loadingService.presentLoading();
        this.isSubmitted = true;
        console.log('this.teleHandlerForm.value', this.teleHandlerForm.value);
        if ((this.teleHandlerForm.value['data_plate'] == 'Faulty' && this.teleHandlerForm.value['data_plate_comment'] == '') ||
            (this.teleHandlerForm.value['engine_oil'] == 'Faulty' && this.teleHandlerForm.value['engine_oil_comment'] == '') ||
            (this.teleHandlerForm.value['hydraulic_oil'] == 'Faulty' && this.teleHandlerForm.value['hydraulic_oil_comment'] == '') ||
            (this.teleHandlerForm.value['equipment_inspect'] == 'Faulty' && this.teleHandlerForm.value['equipment_inspect_comment'] == '') ||
            (this.teleHandlerForm.value['coolant_level'] == 'Faulty' && this.teleHandlerForm.value['coolant_level_comment'] == '') ||
            (this.teleHandlerForm.value['belts_and_hoses'] == 'Faulty' && this.teleHandlerForm.value['belts_and_hoses_comment'] == '') ||
            (this.teleHandlerForm.value['wheels_tyres'] == 'Faulty' && this.teleHandlerForm.value['wheels_tyres_comment'] == '') ||
            (this.teleHandlerForm.value['fire_extinguisher'] == 'Faulty' && this.teleHandlerForm.value['fire_extinguisher_comment'] == '') ||
            (this.teleHandlerForm.value['fuel_flash'] == 'Faulty' && this.teleHandlerForm.value['fuel_flash_comment'] == '') ||
            (this.teleHandlerForm.value['hydraulics_functional'] == 'Faulty' && this.teleHandlerForm.value['hydraulics_functional_comment'] == '') ||
            (this.teleHandlerForm.value['lift_arms'] == 'Faulty' && this.teleHandlerForm.value['lift_arms_comment'] == '') ||
            (this.teleHandlerForm.value['chain_hose'] == 'Faulty' && this.teleHandlerForm.value['chain_hose_comment'] == '') ||
            (this.teleHandlerForm.value['cap_bolts'] == 'Faulty' && this.teleHandlerForm.value['cap_bolts_comment'] == '') ||
            (this.teleHandlerForm.value['safety_stops'] == 'Faulty' && this.teleHandlerForm.value['safety_stops_comment'] == '') ||
            (this.teleHandlerForm.value['forks'] == 'Faulty' && this.teleHandlerForm.value['forks_comment'] == '') ||
            (this.teleHandlerForm.value['overhead_guards'] == 'Faulty' && this.teleHandlerForm.value['overhead_guards_comment'] == '') ||
            (this.teleHandlerForm.value['counterweight'] == 'Faulty' && this.teleHandlerForm.value['counterweight_comment'] == '') ||
            (this.teleHandlerForm.value['engine_bay'] == 'Faulty' && this.teleHandlerForm.value['engine_bay_components_comment'] == '') ||
            (this.teleHandlerForm.value['horn'] == 'Faulty' && this.teleHandlerForm.value['horn_comment'] == '') ||
            (this.teleHandlerForm.value['audible'] == 'Faulty' && this.teleHandlerForm.value['audible_comment'] == '') ||
            (this.teleHandlerForm.value['headlights'] == 'Faulty' && this.teleHandlerForm.value['headlights_comment'] == '') ||
            (this.teleHandlerForm.value['turn_signals'] == 'Faulty' && this.teleHandlerForm.value['turn_signals_comment'] == '') ||
            (this.teleHandlerForm.value['warning_brake_lights'] == 'Faulty' && this.teleHandlerForm.value['warning_brake_lights_comment'] == '') ||
            (this.teleHandlerForm.value['foot_brake'] == 'Faulty' && this.teleHandlerForm.value['foot_brake_comment'] == '') ||
            (this.teleHandlerForm.value['parking_brake'] == 'Faulty' && this.teleHandlerForm.value['parking_brake_comment'] == '') ||
            (this.teleHandlerForm.value['clutch_gear_shift'] == 'Faulty' && this.teleHandlerForm.value['clutch_gear_shift_comment'] == '') ||
            (this.teleHandlerForm.value['engine_noise'] == 'Faulty' && this.teleHandlerForm.value['engine_noise_comment'] == '') ||
            (this.teleHandlerForm.value['dash_gauges'] == 'Faulty' && this.teleHandlerForm.value['dash_gauges_comment'] == '') ||
            (this.teleHandlerForm.value['operational_controls'] == 'Faulty' && this.teleHandlerForm.value['operational_controls_comment'] == '') ||
            (this.teleHandlerForm.value['fluid_leaks'] == 'Faulty' && this.teleHandlerForm.value['fluid_leaks_comment'] == '') ||
            (this.teleHandlerForm.value['first_aid_kit'] == 'Faulty' && this.teleHandlerForm.value['first_aid_kit_comment'] == '')) {
            // this.loadingService.dismissLoading();
            return;
        }
        else {
            if (this.teleHandlerForm.valid) {
                let formData = this.teleHandlerForm.value;
                formData['user_id'] = this.loggedInUser.id;
                let data = { 'formData': formData };
                this.globalService.postData('Telehandler/submit', data).subscribe(result => {
                    if (result && result['status']) {
                        this.toastService.toast(result['message'], 'success');
                        this.nav.back();
                    }
                    else {
                        this.toastService.toast(result['message'], 'danger');
                    }
                }, error => {
                    console.log('error', error);
                });
                // this.loadingService.dismissLoading();
            }
            else {
                // this.loadingService.dismissLoading();
                return false;
            }
        }
    }
    onCompetency(event) {
        if (event.detail.value == 'Not completed') {
            this.alertService.alert('STOP do not proceed and see your supervisor to complete a VOC.');
        }
    }
    onFuelLevel(event) {
        if (event.detail.value == 'Empty') {
            this.alertService.alert('Please ensure you fill up the Telehandler prior to use.');
        }
    }
    onProgressBar(event) {
        let count = 0;
        let formControlList = [];
        Object.keys(this.teleHandlerForm.controls).map(ele => formControlList.push(ele));
        formControlList.forEach(key => {
            if (this.teleHandlerForm.value[key] && this.teleHandlerForm.value[key] != '' && this.teleHandlerForm.value[key] == 'Ok') {
                count = (count + 3);
            }
            else if (this.teleHandlerForm.value[key] && this.teleHandlerForm.value[key] != '' && this.teleHandlerForm.value[key] != 'Ok') {
                count = ++count;
            }
        });
        this.form_percent = ((1 / Object.keys(this.teleHandlerForm.controls).length) * count);
    }
};
TelehandlerAddFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: src_app_services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute }
];
TelehandlerAddFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-telehandler-add-form',
        template: _raw_loader_telehandler_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_telehandler_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TelehandlerAddFormPage);



/***/ }),

/***/ 80513:
/*!*************************************************************!*\
  !*** ./src/app/services/loading-service/loading.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
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
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 49481:
/*!***********************************************************!*\
  !*** ./src/app/services/shared-service/shared.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": function() { return /* binding */ SharedService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _global_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-service/global.service */ 89985);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 67871);





let SharedService = class SharedService {
    constructor(globalService, actionSheetController, camera) {
        this.globalService = globalService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.notViewNotiCount = 0;
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    // fileToBase64 = (file) => {
    //   let image: any;
    //   let reader = new FileReader();
    //   reader.onload = (function (file) {
    //     return function (e) {
    //       image = e.target.result;
    //       this.base64Image = e.target.result;
    //     };
    //   })(file);
    //   reader.readAsDataURL(file);
    // };
    // convertDataURIToBinary(dataURI) {
    //   var BASE64_MARKER = ';base64,';
    //   var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    //   var base64 = dataURI.substring(base64Index);
    //   var raw = window.atob(base64);
    //   var rawLength = raw.length;
    //   var array = new Uint8Array(new ArrayBuffer(rawLength));
    //   for (let i = 0; i < rawLength; i++) {
    //     array[i] = raw.charCodeAt(i);
    //   }
    //   return array;
    // }
    mobileUploadImages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let images;
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            return images = this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        },
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            return images = this.pickImage(this.camera.PictureSourceType.CAMERA);
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
    pickImage(sourceType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log('sourceType', sourceType);
            const options = {
                quality: 100,
                sourceType: sourceType,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                console.log('imageData', imageData);
                // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
                let image = 'data:image/jpeg;base64,' + imageData;
                console.log('pickImage', image);
                return image;
            }, (err) => {
                console.log("errOf Image ", err);
            });
        });
    }
};
SharedService.ctorParameters = () => [
    { type: _global_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__.Camera }
];
SharedService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ 4521:
/*!**********************************************************!*\
  !*** ./src/app/modals/image-modal/image-modal.page.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n}\n\nion-footer {\n  margin-bottom: 10px;\n}\n\nion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImltYWdlLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 21116:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-add-form/telehandler-add-form.page.scss ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlaGFuZGxlci1hZGQtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 41556:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/image-modal/image-modal.page.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-slides [options]=\"sliderOpts\">\n    <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [src]=\"img\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n \n<ion-footer>\n  <ion-row>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button (click)=\"zoom(false)\" fill=\"clear\">\n        <ion-icon name=\"remove\" slot=\"start\"></ion-icon>\n        out\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button (click)=\"close()\" fill=\"clear\">\n        <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n        close\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button (click)=\"zoom(true)\" fill=\"clear\">\n        <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n        in\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ 34352:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-add-form/telehandler-add-form.page.html ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card>\n      <ion-grid class=\"progress-bar\">\n        <ion-row>\n          <ion-col size=\"10.5\">\n            Form progress bar\n          </ion-col>\n          <ion-col size=\"1.5\">\n            {{(form_percent*100) | number : '1.0-0'}}{{'%'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-progress-bar [value]=\"form_percent\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid [formGroup]=\"teleHandlerForm\" (ionChange)=\"onProgressBar($event)\">\n\n        <ion-radio-group formControlName=\"competency\" (ionChange)=\"onCompetency($event)\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Verification of Competency : </ion-label>\n            </ion-col>\n            <ion-col size-md=\"6\" size-lg=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Completed</ion-label>\n                <ion-radio slot=\"start\" value=\"Completed\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size-md=\"6\" size-lg=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Not completed</ion-label>\n                <ion-radio slot=\"start\" value=\"Not completed\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-grid *ngIf=\"teleHandlerForm.value['competency'] != ''\">\n          <ion-row>\n            <ion-label> Telehandler Number : </ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-input placeholder=\"Please enter value\" formControlName=\"telehandler_number\"></ion-input>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid\n          *ngIf=\"(teleHandlerForm.value['competency'] != '' && teleHandlerForm.value['telehandler_number'] != '' )\">\n          <ion-row>\n            <ion-label> Hour / Meter :</ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-input placeholder=\"Please enter value\" formControlName=\"hour_meter\"></ion-input>\n          </ion-row>\n        </ion-grid>\n\n        <div *ngIf=\"teleHandlerForm.value['hour_meter'] != ''\">\n          <ion-radio-group formControlName=\"data_plate\">\n            <ion-row>\n              <ion-col size=\" 12\">\n                <ion-label>Data plate attached and legible : </ion-label>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"errorControls.data_plate.value && errorControls.data_plate.value =='Faulty'\">\n\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"data_plate_comment\">\n              </ion-textarea>\n            </ion-row>\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.data_plate_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'data_plate_image')\">Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"data_plate_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'data_plate_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['data_plate_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['data_plate_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['data_plate_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('data_plate_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['data_plate'] != ''\">\n          <ion-radio-group formControlName=\"engine_oil\">\n            <ion-row>\n              <ion-col size=\" 12\">\n                <ion-label> Engine Oil Level :</ion-label>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"errorControls.engine_oil.value  && errorControls.engine_oil.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"engine_oil_comment\">\n              </ion-textarea>\n            </ion-row>\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.engine_oil_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'engine_oil_image')\">Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"engine_oil_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'engine_oil_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['engine_oil_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['engine_oil_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['engine_oil_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('engine_oil_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['engine_oil'] != ''\">\n          <ion-radio-group formControlName=\"hydraulic_oil\">\n            <ion-row>\n              <ion-col size=\"12\">\n                Hydraulic Oil :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"errorControls.hydraulic_oil.value && errorControls.hydraulic_oil.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"hydraulic_oil_comment\">\n              </ion-textarea>\n            </ion-row>\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.hydraulic_oil_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'hydraulic_oil_image')\">Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"hydraulic_oil_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'hydraulic_oil_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['hydraulic_oil_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['hydraulic_oil_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['hydraulic_oil_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('hydraulic_oil_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['hydraulic_oil'] != ''\">\n          <ion-radio-group formControlName=\"fuel_level\" (ionChange)=\"onFuelLevel($event)\">\n            <ion-row>\n              <ion-col size=\"12\">\n                Fuel Level :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Full</ion-label>\n                  <ion-radio slot=\"start\" value=\"Full\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Half</ion-label>\n                  <ion-radio slot=\"start\" value=\"Half\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Empty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Empty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['fuel_level'] != ''\">\n          <ion-radio-group formControlName=\"equipment_inspect\">\n            <ion-row>\n              <ion-col size=\"12\">\n                Verify Equipment Inspections are Current :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"errorControls.equipment_inspect.value && errorControls.equipment_inspect.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"equipment_inspect_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.equipment_inspect_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'equipment_inspect_image')\">\n                Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"equipment_inspect_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'equipment_inspect_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['equipment_inspect_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['equipment_inspect_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['equipment_inspect_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('equipment_inspect_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['equipment_inspect'] != ''\">\n          <ion-radio-group formControlName=\"coolant_level\">\n            <ion-row>\n              <ion-col size=\"12\">\n                Coolant Level :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"errorControls.coolant_level.value && errorControls.coolant_level.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"coolant_level_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.coolant_level_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'coolant_level_image')\">Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"coolant_level_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'coolant_level_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['coolant_level_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['coolant_level_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['coolant_level_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('coolant_level_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['coolant_level'] != ''\">\n          <ion-radio-group formControlName=\"belts_and_hoses\">\n            <ion-row>\n              <ion-col size=\"12\">\n                Belts and Hoses :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <div *ngIf=\"errorControls.belts_and_hoses.value && errorControls.belts_and_hoses.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"belts_and_hoses_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.belts_and_hoses_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'belts_and_hoses_image')\">\n                Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"belts_and_hoses_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'belts_and_hoses_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['belts_and_hoses_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['belts_and_hoses_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['belts_and_hoses_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('belts_and_hoses_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['belts_and_hoses'] != ''\">\n          <ion-radio-group formControlName=\"wheels_tyres\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Wheels, Tyres and nuts :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.wheels_tyres.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.wheels_tyres.value && errorControls.wheels_tyres.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"wheels_tyres_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.wheels_tyres_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'wheels_tyres_image')\">Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"wheels_tyres_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'wheels_tyres_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['wheels_tyres_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['wheels_tyres_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['wheels_tyres_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('wheels_tyres_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['wheels_tyres'] != ''\">\n          <ion-radio-group formControlName=\"fire_extinguisher\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Fire-Extinguisher :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fire_extinguisher.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.fire_extinguisher.value && errorControls.fire_extinguisher.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"fire_extinguisher_comment\">\n              </ion-textarea>\n            </ion-row>\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.fire_extinguisher_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'fire_extinguisher_image')\">\n                Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"fire_extinguisher_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'fire_extinguisher_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['fire_extinguisher_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['fire_extinguisher_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['fire_extinguisher_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('fire_extinguisher_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['fire_extinguisher'] != ''\">\n          <ion-radio-group formControlName=\"fuel_flash\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Fuel Flash Screen: in Place :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fuel_flash.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.fuel_flash.value && errorControls.fuel_flash.value =='Faulty'\">\n            <ion-row>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"fuel_flash_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fuel_flash_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'fuel_flash_image')\">Upload\n                Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"fuel_flash_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'fuel_flash_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['fuel_flash_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['fuel_flash_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['fuel_flash_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('fuel_flash_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['fuel_flash'] != ''\">\n          <ion-radio-group formControlName=\"hydraulics_functional\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Hydraulics Functional and No Leaks :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <ion-item lines=\"none\" class=\"error\"\n            *ngIf=\"isSubmitted && errorControls.hydraulics_functional.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div\n            *ngIf=\"errorControls.hydraulics_functional.value  && errorControls.hydraulics_functional.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"hydraulics_functional_comment\">\n              </ion-textarea>\n            </ion-row>\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.hydraulics_functional_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\"\n                (click)=\"onSelectImage($event, 1, 'hydraulics_functional_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"hydraulics_functional_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'hydraulics_functional_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['hydraulics_functional_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['hydraulics_functional_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['hydraulics_functional_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('hydraulics_functional_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['hydraulics_functional'] != ''\">\n          <ion-radio-group formControlName=\"lift_arms\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Boom, Lift Arms, Extending Structure :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.lift_arms.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.lift_arms.value && errorControls.lift_arms.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"lift_arms_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.lift_arms_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'lift_arms_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"lift_arms_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'lift_arms_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['lift_arms_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['lift_arms_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['lift_arms_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('lift_arms_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['lift_arms'] != ''\">\n          <ion-row>\n            In place / Correctly Tensioned\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"chain_hose\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Chain and Hose Guards :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.chain_hose.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.chain_hose.value && errorControls.chain_hose.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"chain_hose_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.chain_hose_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'chain_hose_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"chain_hose_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'chain_hose_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['chain_hose_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['chain_hose_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['chain_hose_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('chain_hose_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['chain_hose'] != ''\">\n          <ion-row>\n            <ion-col> In place</ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"cap_bolts\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Mast Cap Bolts :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.cap_bolts.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.cap_bolts.value && errorControls.cap_bolts.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"cap_bolts_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.cap_bolts_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'cap_bolts_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"cap_bolts_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'cap_bolts_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['cap_bolts_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['cap_bolts_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['cap_bolts_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('cap_bolts_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['cap_bolts'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">In place and secure</ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"safety_stops\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Safety Stops and Latches :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.safety_stops.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.safety_stops.value && errorControls.safety_stops.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"safety_stops_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.safety_stops_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'safety_stops_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"safety_stops_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'safety_stops_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['safety_stops_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['safety_stops_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['safety_stops_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('safety_stops_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['safety_stops'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\"> In place</ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"forks\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Forks :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.forks.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.forks.value && errorControls.forks.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"forks_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.forks_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'forks_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"forks_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'forks_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['forks_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['forks_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['forks_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('forks_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['forks'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\"> Condition / Tips Even</ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n\n          <ion-radio-group formControlName=\"overhead_guards\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Overhead Guards :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.overhead_guards.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.overhead_guards.value && errorControls.overhead_guards.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"overhead_guards_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.overhead_guards_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'overhead_guards_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"overhead_guards_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'overhead_guards_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['overhead_guards_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['overhead_guards_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['overhead_guards_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('overhead_guards_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['overhead_guards'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              In place / Condition\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"counterweight\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Counterweight / Counterweight bolts :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.counterweight.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.counterweight.value && errorControls.counterweight.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"counterweight_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.counterweight_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'counterweight_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"counterweight_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'counterweight_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['counterweight_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['counterweight_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['counterweight_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('counterweight_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['counterweight'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Condition / Leaks\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"engine_bay_components\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Engine Bay Components :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\"\n            *ngIf=\"isSubmitted && errorControls.engine_bay_components.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div\n            *ngIf=\"errorControls.engine_bay_components.value && errorControls.engine_bay_components.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"engine_bay_components_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.engine_bay_components_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\"\n                (click)=\"onSelectImage($event, 1, 'engine_bay_components_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"engine_bay_components_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'engine_bay_components_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['engine_bay_components_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['engine_bay_components_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['engine_bay_components_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('engine_bay_components_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['engine_bay_components'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Operating\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"horn\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Horn :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.horn.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.horn.value && errorControls.horn.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"horn_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.horn_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'horn_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"horn_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'horn_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"teleHandlerForm.value['horn_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['horn_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['horn_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('horn_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['horn'] != ''\">\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"audible\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Audible, Visual Warning Devices :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.audible.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.audible.value && errorControls.audible.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"audible_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.audible_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'audible_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"audible_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'audible_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['audible_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['audible_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['audible_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('audible_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['audible'] != ''\">\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"headlights\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Headlights :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.headlights.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.headlights.value && errorControls.headlights.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"headlights_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.headlights_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'headlights_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"headlights_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'headlights_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['headlights_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['headlights_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['headlights_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('headlights_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['headlights'] != ''\">\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"turn_signals\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Turn Signals :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.turn_signals.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.turn_signals.value && errorControls.turn_signals.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"turn_signals_comment\">\n              </ion-textarea>\n            </ion-row>\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.turn_signals_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'turn_signals_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"turn_signals_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'turn_signals_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['turn_signals_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['turn_signals_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['turn_signals_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('turn_signals_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['turn_signals'] != ''\">\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"warning_brake_lights\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Warning / Brake Lights :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\"\n            *ngIf=\"isSubmitted && errorControls.warning_brake_lights.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.warning_brake_lights.value && errorControls.warning_brake_lights.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"warning_brake_lights_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.warning_brake_lights_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\"\n                (click)=\"onSelectImage($event, 1, 'warning_brake_lights_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"warning_brake_lights_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'warning_brake_lights_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['warning_brake_lights_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['warning_brake_lights_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['warning_brake_lights_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('warning_brake_lights_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['warning_brake_lights'] != ''\">\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"foot_brake\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Foot Brake :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.foot_brake.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.foot_brake.value && errorControls.foot_brake.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"foot_brake_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.foot_brake_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'foot_brake_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"foot_brake_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'foot_brake_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['foot_brake_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['foot_brake_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['foot_brake_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('foot_brake_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['foot_brake'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Pedal Holds / Smooth Stop\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"parking_brake\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Parking Brake :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.parking_brake.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.parking_brake.value && errorControls.parking_brake.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"parking_brake_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.parking_brake_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'parking_brake_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"parking_brake_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'parking_brake_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['parking_brake_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['parking_brake_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['parking_brake_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('parking_brake_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['parking_brake'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Holds against Accelerator\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"clutch_gear_shift\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Clutch / Gear Shift :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.clutch_gear_shift.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.clutch_gear_shift.value && errorControls.clutch_gear_shift.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"clutch_gear_shift_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.clutch_gear_shift_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'clutch_gear_shift_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"clutch_gear_shift_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'clutch_gear_shift_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['clutch_gear_shift_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['clutch_gear_shift_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['clutch_gear_shift_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('clutch_gear_shift_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['clutch_gear_shift'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Smooth operation\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"engine_noise\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Engine Noise :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.engine_noise.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.engine_noise.value && errorControls.engine_noise.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"engine_noise_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.engine_noise_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'engine_noise_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"engine_noise_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'engine_noise_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['engine_noise_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['engine_noise_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['engine_noise_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('engine_noise_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['engine_noise'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Sounds Normal\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"dash_gauges\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Dash Gauges :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.dash_gauges.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.dash_gauges.value && errorControls.dash_gauges.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"dash_gauges_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.dash_gauges_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'dash_gauges_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"dash_gauges_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'dash_gauges_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['dash_gauges_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['dash_gauges_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['dash_gauges_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('dash_gauges_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['dash_gauges'] != ''\">\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"operational_controls\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> Operational Controls :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\"\n            *ngIf=\"isSubmitted && errorControls.operational_controls.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.operational_controls.value && errorControls.operational_controls.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"operational_controls_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\"\n              *ngIf=\"isSubmitted && errorControls.operational_controls_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\"\n                (click)=\"onSelectImage($event, 1, 'operational_controls_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"operational_controls_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'operational_controls_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['operational_controls_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['operational_controls_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['operational_controls_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('operational_controls_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['operational_controls'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Smooth operation\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"fluid_leaks\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span>Fluid Leaks :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fluid_leaks.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.fluid_leaks.value && errorControls.fluid_leaks.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"fluid_leaks_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fluid_leaks_comment.value  == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'fluid_leaks_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"fluid_leaks_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'fluid_leaks_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['fluid_leaks_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['fluid_leaks_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['fluid_leaks_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('fluid_leaks_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <div *ngIf=\"teleHandlerForm.value['fluid_leaks'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              Under truck and Near Hoses\n            </ion-col>\n          </ion-row>\n          <!-- <ion-item lines=\"none\"> -->\n          <ion-radio-group formControlName=\"first_aid_kit\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <span class=\"error\">* </span> First Aid Kit :\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"6\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <!-- </ion-item> -->\n          <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.first_aid_kit.errors?.required\">\n            Please select value.\n          </ion-item>\n\n          <div *ngIf=\"errorControls.first_aid_kit.value && errorControls.first_aid_kit.value =='Faulty'\">\n            <ion-row>\n              <span class=\"error\">* </span>\n              <ion-label> Comment : </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"first_aid_kit_comment\">\n              </ion-textarea>\n            </ion-row>\n\n            <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.first_aid_kit_comment.value == ''\">\n              Please enter comment.\n            </ion-item>\n\n            <ion-row *ngIf=\"globalService.platform === 'cordova'\">\n              <ion-button class=\"camera\" expand=\"block\" (click)=\"onSelectImage($event, 1, 'first_aid_kit_image')\">\n                Upload Image\n              </ion-button>\n            </ion-row>\n\n            <div *ngIf=\"globalService.platform === 'browser'\">\n              <ion-row>\n                <ion-item lines=\"none\">\n                  <ion-label> Upload Image :</ion-label>\n                </ion-item>\n              </ion-row>\n              <ion-input type=\"file\" formControlName=\"first_aid_kit_image\" multiple\n                (change)=\"onSelectImage($event, 2, 'first_aid_kit_image')\">\n              </ion-input>\n            </div>\n\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n              *ngIf=\"teleHandlerForm.value['first_aid_kit_image'] !='' \">\n              <ion-slide>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"11\">\n                      <img [src]=\"teleHandlerForm.value['first_aid_kit_image']\" tappable\n                        (click)=\"onOpenPreview(teleHandlerForm.value['first_aid_kit_image'])\">\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <p class=\"question\">\n                        <ion-icon name=\"close\" (click)=\"onDeleteImage('first_aid_kit_image')\"></ion-icon>\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <ion-grid *ngIf=\"teleHandlerForm.value['first_aid_kit'] != ''\">\n          <ion-row>\n            <ion-label>Comment : </ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"comment\">\n            </ion-textarea>\n          </ion-row>\n        </ion-grid>\n\n        <div *ngIf=\"teleHandlerForm.valid\">\n          <p>\n            <ion-text color=\"danger\">By clicking the submit button below you are stating that you have done the safety\n              check on the fork truck to the best of you ability and that all details in this inspection are true and\n              correct at the time of the inspection.</ion-text>\n          </p>\n          <p>\n            <ion-text color=\"tertiary\"> Your name, date and the time the inspection is submitted will also be added to\n              this report.</ion-text>\n          </p>\n        </div>\n\n        <ion-button class=\"btn\" (click)=\"onSubmit()\" [disabled]=\"teleHandlerForm.invalid\">SUBMIT</ion-button>\n        \n      </ion-grid>\n    </ion-card>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_telehandler_telehandler-add-form_telehandler-add-form-b0535c-es2015.js.map