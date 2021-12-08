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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 67871);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast-service/toast.service */ 45311);
/* harmony import */ var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading-service/loading.service */ 80513);
/* harmony import */ var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-service/shared.service */ 49481);
/* harmony import */ var src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/image-modal/image-modal.page */ 91681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79765);














let TelehandlerAddFormPage = class TelehandlerAddFormPage {
    constructor(fb, globalService, toastService, nav, loadingService, modalController, sharedService, actionSheetController, camera) {
        this.fb = fb;
        this.globalService = globalService;
        this.toastService = toastService;
        this.nav = nav;
        this.loadingService = loadingService;
        this.modalController = modalController;
        this.sharedService = sharedService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.pName = 'Telehandler';
        this.isSubmitted = false;
        this.dataPlateImage = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngOnInit() {
        this.teleHandlerForm = this.fb.group({
            telehandler_number: [''],
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
            dash_gauges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            dash_gauges_comment: [''],
            dash_gauges_image: [''],
            operational_controls: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            operational_controls_comment: [''],
            operational_controls_image: [''],
            fluid_leaks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            fluid_leaks_comment: [''],
            fluid_leaks_image: [''],
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
    pickImage(sourceType, tabName) {
        console.log('second');
        this.loadingService.presentLoading();
        let image;
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        console.log('options', options);
        this.camera.getPicture(options).then((imageData) => {
            console.log('thrid', imageData);
            this.sharedService.getBase64(imageData).then(data => {
                image = data;
            });
            console.log('fourth ', image);
            image = imageData;
            image = 'data:image/jpeg;base64,' + imageData;
            if (tabName == 'DataPlateImage') {
                console.log('fourth', image);
                // this.dataPlateImage = image;
                this.teleHandlerForm.controls['data_plate_image'].setValue(image);
                console.log('DataPlateImage', this.teleHandlerForm.value['data_plate_image']);
            }
            this.loadingService.dismissLoading();
        }, (err) => {
            console.log('error');
            this.loadingService.dismissLoading();
            console.log("errOf Image ", err);
        });
    }
    mobileUploads(tabName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
    onDataPlateImage(event, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // this.loadingService.presentLoading();
            console.log('event 1', event);
            console.log('event 2', event.target.files);
            // // console.log('event 3', event.target.files[0]);
            console.log('type', type);
            if (type == 1) {
                this.mobileUploads('DataPlateImage');
                // await this.sharedService.mobileUploadImages().then(result => {
                //   console.log('data', result);
                //   this.teleHandlerForm.controls['data_plate_image'].setValue(result);
                //   this.loadingService.dismissLoading();
                // })
                // const actionSheet = await this.actionSheetController.create({
                //   header: 'Select Image source',
                //   buttons: [
                //     {
                //       text: 'Load from Library',
                //       handler: () => {
                //         // this.pickImage(0, tabName);
                //         const options: CameraOptions = {
                //           quality: 100,
                //           destinationType: this.camera.DestinationType.DATA_URL,
                //           sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                //           encodingType: this.camera.EncodingType.JPEG,
                //           mediaType: this.camera.MediaType.PICTURE,
                //           // quality: 100,
                //           // sourceType: sourceType,
                //           // destinationType: this.camera.DestinationType.DATA_URL,
                //           // encodingType: this.camera.EncodingType.JPEG,
                //           // mediaType: this.camera.MediaType.PICTURE,
                //         };
                //         let image: any;
                //         console.log('options', options);
                //         this.camera.getPicture(options).then((imageData) => {
                //           console.log('thrid', imageData);
                //           this.sharedService.getBase64(imageData).then(data => {
                //             image = data;
                //           })
                //           console.log('fourth ', image);
                //           image = imageData;
                //           image = 'data:image/jpeg;base64,' + imageData;
                //           // if (tabName == 'DataPlateImage') {
                //           console.log('fourth', image);
                //           this.dataPlateImage = image;
                //           this.teleHandlerForm.controls['data_plate_image'].setValue(image);
                //           console.log('DataPlateImage', this.teleHandlerForm.value['data_plate_image']);
                //           // }
                //           this.loadingService.dismissLoading();
                //         },
                //           (err) => {
                //             console.log('error');
                //             this.loadingService.dismissLoading();
                //             console.log("errOf Image ", err)
                //           }
                //         );
                //       },
                //     },
                //     {
                //       text: 'Use Camera',
                //       handler: () => {
                //         // this.pickImage(1, tabName);
                //       },
                //     },
                //     {
                //       text: 'Cancel',
                //       role: 'cancel',
                //     },
                //   ],
                // });
                // await actionSheet.present();
            }
            else {
                this.sharedService.getBase64(event.target.files[0]).then(data => {
                    this.teleHandlerForm.controls['data_plate_image'].setValue(data);
                    this.loadingService.dismissLoading();
                }).catch(error => {
                    console.log('error', error);
                    // this.loadingService.dismissLoading();
                });
            }
        });
    }
    onSubmit() {
        // this.loadingService.presentLoading();
        this.isSubmitted = true;
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
                    console.log('result', result);
                    if (result && result['status']) {
                        this.toastService.toast(result['message'], 'success');
                        this.nav.back();
                    }
                    else {
                        this.toastService.toast(result['message'], 'danger');
                    }
                });
                // this.loadingService.dismissLoading();
            }
            else {
                // this.loadingService.dismissLoading();
                return false;
            }
        }
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
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera }
];
TelehandlerAddFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
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
                // destinationType: 1,
                encodingType: 1,
                mediaType: 0,
                // encodingType: this.camera.EncodingType.JPEG,
                // mediaType: this.camera.MediaType.PICTURE,
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\" [formGroup]=\"teleHandlerForm\">\n\n    <ion-card>\n\n      <ion-grid>\n        <ion-row>\n          <ion-label> Telehandler Number : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-input placeholder=\"Please enter value\" formControlName=\"telehandler_number\"></ion-input>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row>\n          <ion-label> Hour / Meter :</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-input placeholder=\"Please enter value\" formControlName=\"hour_meter\"></ion-input>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"data_plate\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label>Data plate attached and legible : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <div *ngIf=\"errorControls.data_plate.value && errorControls.data_plate.value =='Faulty'\">\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"data_plate_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.data_plate_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <!-- <div *ngIf=\"globalService.platform === 'cordova'\"> -->\n          <ion-button class=\"camera\" expand=\"block\" (click)=\"onDataPlateImage($event, 1)\">Upload Image</ion-button>\n          <!-- </div>\n\n          <div *ngIf=\"globalService.platform === 'browser'\"> -->\n          <ion-input type=\"file\" formControlName=\"data_plate_image\" (change)=\"onDataPlateImage($event, 2)\">\n          </ion-input>\n          <!-- </div> -->\n        </ion-row>\n\n        <!-- <img [src]=\"teleHandlerForm.value['data_plate_image']\" tappable\n        (click)=\"onOpenPreview(teleHandlerForm.value['data_plate_image'])\"> -->\n\n        {{teleHandlerForm.value['data_plate_image'] }}\n        <!-- <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\" *ngIf=\"teleHandlerForm.value['data_plate_image'] !=''\">\n           <ion-slide *ngFor=\"let photographyImage of photoGraphy; let i = index\"> -->\n        <ion-slide>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <img [src]=\"teleHandlerForm.value['data_plate_image']\" tappable\n                  (click)=\"onOpenPreview(teleHandlerForm.value['data_plate_image'])\">\n              </ion-col>\n              <ion-col size=\"1\">\n                <p class=\"question\">\n                  <ion-icon name=\"close\" (click)=\"onImageDelete('Photography')\"></ion-icon>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-slide>\n        </ion-slides>\n\n      </div>\n\n      <ion-radio-group formControlName=\"engine_oil\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label> Engine Oil Level :</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <div *ngIf=\"errorControls.engine_oil.value  && errorControls.engine_oil.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"engine_oil_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.engine_oil_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"engine_oil_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"hydraulic_oil\">\n        <ion-row>\n          <ion-col size=\"12\">\n            Hydraulic Oil :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <div *ngIf=\"errorControls.hydraulic_oil.value && errorControls.hydraulic_oil.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"hydraulic_oil_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.hydraulic_oil_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"hydraulic_oil_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"fuel_level\">\n        <ion-row>\n          <ion-col size=\"12\">\n            Fuel Level :\n          </ion-col>\n          <ion-col size-md=\"6\" size-lg=\"4\">\n            <ion-item lines=\"none\">\n              <ion-label> Full</ion-label>\n              <ion-radio slot=\"start\" value=\"Full\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size-md=\"6\" size-lg=\"4\">\n            <ion-item lines=\"none\">\n              <ion-label>Half</ion-label>\n              <ion-radio slot=\"start\" value=\"Half\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size-md=\"6\" size-lg=\"4\">\n            <ion-item lines=\"none\">\n              <ion-label>Empty</ion-label>\n              <ion-radio slot=\"start\" value=\"Empty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-radio-group formControlName=\"equipment_inspect\">\n        <ion-row>\n          <ion-col size=\"12\">\n            Verify Equipment Inspections are Current :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <div *ngIf=\"errorControls.equipment_inspect.value && errorControls.equipment_inspect.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"equipment_inspect_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"isSubmitted && errorControls.equipment_inspect_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"equipment_inspect_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"coolant_level\">\n        <ion-row>\n          <ion-col size=\"12\">\n            Coolant Level :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <div *ngIf=\"errorControls.coolant_level.value && errorControls.coolant_level.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"coolant_level_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.coolant_level_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"coolant_level_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"belts_and_hoses\">\n        <ion-row>\n          <ion-col size=\"12\">\n            Belts and Hoses :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <div *ngIf=\"errorControls.belts_and_hoses.value && errorControls.belts_and_hoses.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"belts_and_hoses_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.belts_and_hoses_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"belts_and_hoses_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"wheels_tyres\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <span class=\"error\">* </span> Wheels, Tyres and nuts :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.wheels_tyres.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"errorControls.wheels_tyres.value && errorControls.wheels_tyres.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"wheels_tyres_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"errorControls.wheels_tyres_comment && errorControls.wheels_tyres_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"wheels_tyres_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"fire_extinguisher\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <span class=\"error\">* </span> Fire-Extinguisher :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fire_extinguisher.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"errorControls.fire_extinguisher.value && errorControls.fire_extinguisher.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"fire_extinguisher_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"isSubmitted && errorControls.fire_extinguisher_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"fire_extinguisher_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"fuel_flash\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <span class=\"error\">* </span> Fuel Flash Screen: in Place :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fuel_flash.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.fuel_flash.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"fuel_flash_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"errorControls.fuel_flash_comment && errorControls.fuel_flash_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"fuel_flash_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"hydraulics_functional\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <span class=\"error\">* </span> Hydraulics Functional and No Leaks :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.hydraulics_functional.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.hydraulics_functional.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"hydraulics_functional_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"isSubmitted && errorControls.hydraulics_functional_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"hydraulics_functional_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-radio-group formControlName=\"lift_arms\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <span class=\"error\">* </span> Boom, Lift Arms, Extending Structure :\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label> Ok</ion-label>\n              <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>Faulty</ion-label>\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.lift_arms.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.lift_arms.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"lift_arms_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.lift_arms_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"lift_arms_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        In place / Correctly Tensioned\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"chain_hose\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Chain and Hose Guards :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.chain_hose.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.chain_hose.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"chain_hose_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.chain_hose_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"chain_hose_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col> In place</ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"cap_bolts\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Mast Cap Bolts :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.cap_bolts.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.cap_bolts.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"cap_bolts_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.cap_bolts_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"cap_bolts_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">In place and secure</ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"safety_stops\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Safety Stops and Latches :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.safety_stops.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.safety_stops.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"safety_stops_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.safety_stops_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"safety_stops_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\"> In place</ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"forks\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Forks :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.forks.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.forks.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"forks_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.forks_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"forks_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\"> Condition / Tips Even</ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"overhead_guards\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Overhead Guards :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.overhead_guards.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.overhead_guards.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"overhead_guards_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.overhead_guards_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"overhead_guards_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          In place / Condition\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"counterweight\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Counterweight / Counterweight bolts :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.counterweight.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.counterweight.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"counterweight_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.counterweight_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"counterweight_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Condition / Leaks\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"engine_bay_components\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Engine Bay Components :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.engine_bay_components.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.engine_bay_components.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"engine_bay_components_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"isSubmitted && errorControls.engine_bay_components_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"engine_bay_components_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Operating\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"horn\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Horn :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.horn.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.horn.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"horn_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.horn_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"horn_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"audible\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Audible, Visual Warning Devices :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.audible.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.audible.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"audible_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.audible_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"audible_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"headlights\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Headlights :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.headlights.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.headlights.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"headlights_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.headlights_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"headlights_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"turn_signals\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Turn Signals :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.turn_signals.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.turn_signals.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"turn_signals_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.turn_signals_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"turn_signals_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"warning_brake_lights\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Warning / Brake Lights :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.warning_brake_lights.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.warning_brake_lights.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"warning_brake_lights_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"isSubmitted && errorControls.warning_brake_lights_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"warning_brake_lights_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"foot_brake\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Foot Brake :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.foot_brake.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.foot_brake.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"foot_brake_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.foot_brake_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"foot_brake_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Pedal Holds / Smooth Stop\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"parking_brake\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Parking Brake :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.parking_brake.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.parking_brake.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"parking_brake_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.parking_brake_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"parking_brake_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Holds against Accelerator\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"clutch_gear_shift\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Clutch / Gear Shift :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.clutch_gear_shift.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.clutch_gear_shift.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"clutch_gear_shift_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"isSubmitted && errorControls.clutch_gear_shift_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"clutch_gear_shift_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Smooth operation\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"engine_noise\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Engine Noise :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.engine_noise.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.engine_noise.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"engine_noise_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.engine_noise_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"engine_noise_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Sounds Normal\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"dash_gauges\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Dash Gauges :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.dash_gauges.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.dash_gauges.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"dash_gauges_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.dash_gauges_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"dash_gauges_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"operational_controls\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> Operational Controls :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.operational_controls.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.operational_controls.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"operational_controls_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\"\n          *ngIf=\"isSubmitted && errorControls.operational_controls_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"operational_controls_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Smooth operation\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"fluid_leaks\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span>Fluid Leaks :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fluid_leaks.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.fluid_leaks.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"fluid_leaks_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.fluid_leaks_comment.value  == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"fluid_leaks_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          Under truck and Near Hoses\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-radio-group formControlName=\"first_aid_kit\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span> First Aid Kit :\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label> Ok</ion-label>\n                <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label>Faulty</ion-label>\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.first_aid_kit.errors?.required\">\n        Please select value.\n      </ion-item>\n\n      <div *ngIf=\"isSubmitted && errorControls.first_aid_kit.value =='Faulty'\">\n        <ion-row>\n          <ion-item lines=\"none\">\n            <span class=\"error\">* </span>\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"first_aid_kit_comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-item lines=\"none\" class=\"error\" *ngIf=\"isSubmitted && errorControls.first_aid_kit_comment.value == ''\">\n          Please enter comment.\n        </ion-item>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Upload Image :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-input type=\"file\" formControlName=\"first_aid_kit_image\"></ion-input>\n        </ion-row>\n      </div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"comment\">\n          </ion-textarea>\n        </ion-row>\n      </ion-grid>\n\n      <ion-button class=\"btn\" (click)=\"onSubmit()\">SUBMIT</ion-button>\n    </ion-card>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_telehandler_telehandler-add-form_telehandler-add-form-b0535c-es2015.js.map