(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-bd3570"],{

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

/***/ 58127:
/*!**************************************************!*\
  !*** ./src/app/modals/managers/managers.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagersPage": function() { return /* binding */ ManagersPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_managers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./managers.page.html */ 72329);
/* harmony import */ var _managers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers.page.scss */ 80248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-service/global.service */ 89985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);







let ManagersPage = class ManagersPage {
    constructor(modal, global) {
        this.modal = modal;
        this.global = global;
        this.newList = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    ionViewWillEnter() { }
    ngOnInit() {
        // console.log('get list in modal', this.list);
        this.newList.next(this.list);
    }
    onSearch(event) {
        let value = false;
        this.list.forEach(element => {
            if (element.full_name == this.term) {
                value = true;
            }
        });
        if (value == false && event != '') {
            this.global.getData("user/getallemployee/" + event.detail.value).subscribe((res) => {
                if (res && res.data && res.data.length > 0) {
                    res.data.unshift({ full_name: "Other", employee_id: '0' });
                    this.newList.next(res.data);
                }
                else {
                    this.newList.next(this.list);
                }
            }, err => {
                console.log(err);
            });
        }
    }
    close(item) {
        this.modal.dismiss(item);
    }
};
ManagersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
ManagersPage.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['header',] }],
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['list',] }]
};
ManagersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-managers',
        template: _raw_loader_managers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_managers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ManagersPage);



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

/***/ 80248:
/*!****************************************************!*\
  !*** ./src/app/modals/managers/managers.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkE7RUFDRSx1QkFBQTtBQXZCRiIsImZpbGUiOiJtYW5hZ2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVyIHtcbi8vICAgaW9uLXRpdGxlIHtcbi8vICAgICBmb250LWZhbWlseTogbW9uLWJvbGQ7XG4vLyAgIH1cbi8vIH1cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgaW9uLWl0ZW0ge1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuLy8gICAgIGlvbi1sYWJlbCB7XG4vLyAgICAgICBmb250LWZhbWlseTogJ21vbi1tZWRpdW0nO1xuLy8gICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlvbi1pbnB1dHtcblxuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXdoaXRlLWNvbG9yKTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnbW9uLW1lZGl1bSc7XG4vLyAgICAgaGVpZ2h0OiA1MnB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDE4cHg7XG5cbi8vICAgfVxuLy8gfVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

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

/***/ 72329:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/managers/managers.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{header}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-input placeholder=\"Search\" [(ngModel)]=\"term\" (ionChange)=\"onSearch($event)\"></ion-input>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item button class=\"ion-no-padding\" lines=\"none\" (click)=\"close(item)\"\n      *ngFor=\"let item of  newList.value |filter:term\">\n      <ion-label>{{item?.full_name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 79044:
/*!********************************************************************!*\
  !*** ./src/app/pages/home/safety-menu/incident/incident-form.json ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"injuryList":[{"val":"FAI","isChecked":false,"desc":"FAI: First Aid injury, an injury that requires a single first aid treatment and a follow-up visit for subsequent observation involving on minor injuries which do not ordinarily require medical care, and for which the person would typically return immediately to their normal activities"},{"val":"MTI","isChecked":false,"desc":"MTI: Medical Treatment Injury, an injury or disease that resulted in a certain level of treatment (not first aid treatment) given by a physician or medical personnel under standing orders of a physician."},{"val":"ADI","isChecked":false,"desc":"ADI: Alternative Duties Injury, temporary duties , identified as in Hort Enterprises Alternative Duties Within the Workplace HE-WHS-FRM-0036, that are required when an injured worker is unable to return to their normal duties."},{"val":"LTI","isChecked":false,"desc":"LTI: Lost Time Injury, an injury that results in a day or more lost from work."},{"val":"PII","isChecked":false,"desc":"PII: Permanent Impairment Injury, the permanent impact an injury has on a person\'s functioning."},{"val":"Fatality","isChecked":false,"desc":"Fatality: Fatality, a person who dies as a result from an injury."}]}]');

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-bd3570-es2015.js.map