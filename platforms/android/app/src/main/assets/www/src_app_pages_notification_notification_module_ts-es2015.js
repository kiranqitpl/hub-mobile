(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_notification_notification_module_ts"],{

/***/ 54863:
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": function() { return /* binding */ NotificationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 95259);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 89770:
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": function() { return /* binding */ NotificationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 54863);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 95259);
/* harmony import */ var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-component/header/header.component */ 13998);








let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [
            _notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage,
            src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ]
    })
], NotificationPageModule);



/***/ }),

/***/ 95259:
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": function() { return /* binding */ NotificationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.page.html */ 92291);
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss */ 44088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-service/global.service */ 89985);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared-service/shared.service */ 49481);








let NotificationPage = class NotificationPage {
    constructor(nav, globalService, sharedService) {
        this.nav = nav;
        this.globalService = globalService;
        this.sharedService = sharedService;
        this.pName = "Notifications";
        this.type = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.allType;
        this.notificationId = [];
        this.notificationData = '';
    }
    ngOnInit() {
        this.getUserData();
        this.onNotificationLoad();
    }
    getUserData() {
        this.userId = localStorage.getItem('id');
        this.roleId = localStorage.getItem('role');
    }
    //----------------------------------- Load Notification Data ---------------------------------------------------------// 
    onNotificationLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("type", this.type);
            formData.append("user_id", this.userId);
            // this.notificationData = await this.sharedService.notificationLoad(formData);
            // console.log("this.notificationData ", this.notificationData);
            let url = "";
            if (this.roleId == this.globalService.investigator) {
                url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
            }
            else if (this.roleId == this.globalService.gm) {
                url = 'api/notification/getGMNotificationByGmID';
            }
            if (url != "") {
                // this.globalService.presentLoading();
                this.globalService.postData(url, formData).subscribe(result => {
                    if (result['status']) {
                        this.notificationData = result['data'];
                    }
                    // this.globalService.dismissLoading();
                }), error => {
                    // this.globalService.dismissLoading();
                    console.log('error', error);
                };
            }
            else {
                // this.globalService.dismissLoading();
                console.log("error");
            }
        });
    }
    //----------------------------------- Load Notification Data ---------------------------------------------------------//
    //----------------------------------- Delete Notification ---------------------------------------------------------//
    filterArrayData(rowId) {
        let data = [];
        data['result'] = false;
        this.notificationId.filter((ele, i) => {
            if (ele == rowId) {
                data['result'] = true;
                data['index'] = i;
            }
        });
        return data;
    }
    onDeleteDataSelect(rowId) {
        let val = this.filterArrayData(rowId);
        if (val['result']) {
            this.notificationId.splice(val['index'], 1);
        }
        else {
            this.notificationId.push(rowId);
        }
    }
    onDelete() {
        if (this.notificationId.length != 0) {
            this.globalService.presentLoading();
            let url = 'api/notification/deleteNotificationByNotificationID';
            let formData = new FormData();
            formData.append("id", JSON.stringify(this.notificationId));
            this.globalService.postData(url, formData).subscribe(result => {
                if (result && result['status']) {
                    this.onNotificationLoad();
                }
                this.globalService.presentToast(result['message']);
                this.globalService.dismissLoading();
            }), error => {
                this.globalService.dismissLoading();
                console.log('error', error);
            };
        }
    }
    //----------------------------------- Delete Notification ---------------------------------------------------------//
    //----------------------------------- Re-direct on detail page --------------------------------------------------------//
    onNotificationDetaliPage(rowID, formId, formType, isSeen) {
        if (formType == this.globalService.formType_user) {
            this.nav.navigateForward('view/' + formId);
        }
        else if (formType == this.globalService.formType_investigator) {
            this.nav.navigateForward('investigation-view/' + formId);
        }
        if (isSeen == 0) {
            this.globalService.getData('api/notification/changeNotificationSeen/' + rowID).
                subscribe(result => {
                console.log('result', result);
                if (result['status']) {
                    this.sharedService.notViewNotiCount = this.sharedService.notViewNotiCount != 0 ? (this.sharedService.notViewNotiCount - 1) : 0;
                }
            }), error => {
                console.log("error", error);
            };
        }
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationPage);



/***/ }),

/***/ 89985:
/*!***********************************************************!*\
  !*** ./src/app/services/global-service/global.service.ts ***!
  \***********************************************************/
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
        this.baseUrl1 = 'https://mforms-api-devel.horts.com.au/api/';
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
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('apikey', 'as*37486a*()HGY')
            .set("Access-Control-Allow-Origin", "*")
            .set("Access-Control-Allow-Headers", "*")
            .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
            .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        // if (localStorage.getItem("token") && localStorage.getItem("token") != "")
        //   header.append("token", localStorage.getItem("token"));
        return header;
    }
    getData(url) {
        let headers = this.setHeader();
        return this.http.get(this.baseUrl + url, { headers: headers });
    }
    postData(url, data) {
        let headers = this.setHeader();
        return this.http.post(this.baseUrl + url, data, { headers: headers });
    }
    // --------------------------------------------------New Services ---------------------------------------------//
    postData1(url, data) {
        let headers = this.setHeader();
        return this.http.post(this.baseUrl1 + url, data, { headers: headers });
    }
    getData1(url) {
        let headers = this.setHeader();
        return this.http.get(this.baseUrl1 + url, { headers: headers });
        // return this.http.get(this.baseUrl1 + url, { headers: headers }).pipe(
        //   map((response) => {
        //     console.log('response', response);
        //     if (!response['status']) {
        //       throw new Error('Value expected!');
        //     }
        //     response;
        //   }),
        //   catchError(() => of())
        // );
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

// ---------------------------------------------  New Services --------------------------------------------------//


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
    // notificationLoad(formData) {
    //   let roleId = localStorage.getItem('role');
    //   let url = "";
    //   if (roleId) {
    //     if (roleId == this.globalService.investigator) {
    //       url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
    //     } else if (roleId == this.globalService.gm) {
    //       url = 'api/notification/getGMNotificationByGmID';
    //     }
    //   }
    //   if (url != "") {
    //     new Promise((resolve, reject) => {
    //       this.globalService.postData(url, formData).subscribe(result => {
    //         console.log('notificationLoad', result);
    //         if (result['status']) {
    //           let count: number = 0;
    //           result['data'].forEach(element => {
    //             if (element.is_seen == 0) {
    //               count = count + 1;
    //             }
    //           });
    //           this.notViewNotiCount = count;
    //           return result['data'];
    //         } else {
    //           console.log('error');
    //         }
    //         setTimeout(function () {
    //           resolve("Success!");
    //         });
    //       });
    //     });
    //   }
    // }
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
        console.log('sourceType', sourceType);
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            console.log('imageData', imageData);
            // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
            let image = 'data:image/jpeg;base64,' + imageData;
            return image;
        }, (err) => {
            console.log("errOf Image ", err);
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

/***/ 44088:
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 92291:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size=\"10\">\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"trash\" (click)=\"onDelete()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let notification of notificationData; let i=index;\">\n      <ion-col size=\"2\">\n        <ion-checkbox (ionChange)=\"onDeleteDataSelect(notification.id)\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"10\"\n        (click)=\"onNotificationDetaliPage(notification.id,notification.form_id,notification.form_type, notification.is_seen)\">\n        {{notification.message}}\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification_notification_module_ts-es2015.js.map