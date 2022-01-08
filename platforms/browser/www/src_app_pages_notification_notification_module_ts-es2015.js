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
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [
            _notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage,
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.page.html */ 92291);
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss */ 44088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
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
        this.loggedInUser = '';
        this.size = 10;
        this.totalElements = 0;
        // totalPages: number = 0;
        this.pageNumber = 0;
        this.offset = 0;
    }
    ngOnInit() {
        this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
        this.onNotificationLoad();
        // this.setValueOnLoadData();
    }
    // setValueOnLoadData() {
    //   // let screen = this.getScreenWidth < 1080 ? 'mobile' : 'web'
    //   // if (screen == 'mobile') {
    //   //   this.loadData('', 1, screen);
    //   // } else {
    //   let object = {
    //     count: 60,
    //     limit: 10,
    //     offset: 0,
    //     pageSize: 10,
    //   }
    //   this.onNotificationLoad(object, '', screen);
    //   // }
    // }
    //----------------------------------- Load Notification Data ---------------------------------------------------------// 
    // onNotificationLoad(event, pageNo, screen) {
    onNotificationLoad() {
        // console.log('this.loggedInUser', this.loggedInUser, this.loggedInUser['id']);
        // this.pageNumber = (event.offset + 1);
        // this.offset = event.offset
        this.globalService.presentLoading();
        // this.globalService.getData('notification/getNotificationList/?page_no=' + this.pageNumber).subscribe((result: any) => {
        this.globalService.getData('notification/getNotificationList/' + this.loggedInUser['id']).subscribe(result => {
            console.log('result', result);
            if (result && result['row_count'] > 0) {
                this.notificationData = result['data'];
                this.totalElements = result['row_count'];
            }
            else {
                this.notificationData = [];
            }
            console.log('this.notificationData ', this.notificationData);
            this.globalService.dismissLoading();
        }), error => {
            this.globalService.dismissLoading();
            console.log('error', error);
        };
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
            let formData = new FormData();
            // console.log('this.notificationId', this.notificationId);
            formData.append("id", JSON.stringify(this.notificationId));
            this.globalService.postData('notification/deleteNotificationByNotificationID', formData).subscribe(result => {
                if (result && result['status']) {
                    this.onNotificationLoad();
                    // this.setValueOnLoadData();
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
            this.nav.navigateRoot("/home/safety-menu/incident-details/" + formId);
        }
        else if (formType == this.globalService.formType_investigator) {
            this.nav.navigateForward('investigation-view/' + formId);
        }
        if (isSeen == 0) {
            this.globalService.getData('notification/changeNotificationSeen/' + rowID).
                subscribe(result => {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationPage);



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
/* harmony import */ var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-service/global.service */ 89985);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);





let SharedService = class SharedService {
    //------------------------------------------------------------------ Global Variable -------------------------------------------------------//
    constructor(globalService, actionSheetController, camera) {
        this.globalService = globalService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.notViewNotiCount = 0;
        //------------------------------------------------------------------ Global Variable -------------------------------------------------------//
        this.prestartMenu = [
            {
                menuName: 'LV', route: '#', favorite: false, position_in_list: 1
            },
            {
                menuName: 'Forklift', route: '#', favorite: false, position_in_list: 2
            },
            {
                menuName: 'Telehandler', route: '/home/safety-menu/telehandler-add-form', favorite: false, position_in_list: 3
            },
            {
                menuName: 'Crane', route: '/home/safety-menu/crane-add-form', favorite: false, position_in_list: 4
            },
            {
                menuName: 'Vehicle Hoist', route: '/home/safety-menu/vehicle-hoist-add-form', favorite: false, position_in_list: 5
            },
        ];
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
    resize(event) {
        return event.innerWidth ? event.innerWidth : event.target.innerWidth;
    }
};
SharedService.ctorParameters = () => [
    { type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__.Camera }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n    <ion-row *ngIf=\"notificationData.length > 0\">\n      <ion-col size=\"10\"></ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"trash\" (click)=\"onDelete()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let notification of notificationData; let i=index;\">\n      <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\">\n      </ion-col>\n      <ion-col size-lg=\"1\" size-md=\"1\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\">\n        <ion-checkbox (ionChange)=\"onDeleteDataSelect(notification.id)\"></ion-checkbox>\n      </ion-col>\n      <ion-col size-lg=\"7\" size-md=\"7\" size-sm=\"6\" size-xl=\"6\" size-xs=\"6\"\n        (click)=\"onNotificationDetaliPage(notification.id,notification.form_id,notification.form_type, notification.is_seen)\">\n        {{notification.message}}\n      </ion-col>\n      <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\"></ion-col>\n    </ion-row>\n\n<!-- \n    <ngx-datatable class=\"material\" [rows]=\"notificationData\" [headerHeight]=\"50\"\n      [footerHeight]=\"50\" rowHeight=\"auto\" [externalPaging]=\"true\" [count]=\"totalElements\" [offset]=\"offset\"\n      [limit]=\"size\" (page)=\"onNotificationLoad($event, '','web')\">\n\n      <ngx-datatable-column [minWidth]=\"10\" [resizeable]=\"true\" prop=\"id\">\n        <ng-template let-value=\"value\" ngx-datatable-cell-template let-row=\"row\">\n          <ion-checkbox (ionChange)=\"onDeleteDataSelect(value)\"></ion-checkbox>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column prop=\"message\" [minWidth]=\"50\" [resizeable]=\"true\">\n        <ng-template let-value=\"value\" ngx-datatable-cell-template let-row=\"row\">\n          <span title=\"Edit\" (click)=\"onNotificationDetaliPage(row)\">\n           {{value}}\n          </span>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <div class=\"d-flex justify-content-center\">\n        <pagination-controls previousLabel=\"Prev\" nextLabel=\"Next\" (pageChange)=\"loadData($event, '', 'web')\">\n        </pagination-controls>\n      </div>\n\n    </ngx-datatable> -->\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification_notification_module_ts-es2015.js.map