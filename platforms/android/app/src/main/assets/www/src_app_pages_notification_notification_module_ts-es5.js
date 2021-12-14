(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_notification_notification_module_ts"], {
    /***/
    54863:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/notification/notification-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageRoutingModule": function NotificationPageRoutingModule() {
          return (
            /* binding */
            _NotificationPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification.page */
      95259);

      var routes = [{
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
      }];

      var _NotificationPageRoutingModule = function NotificationPageRoutingModule() {
        _classCallCheck(this, NotificationPageRoutingModule);
      };

      _NotificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotificationPageRoutingModule);
      /***/
    },

    /***/
    89770:
    /*!***********************************************************!*\
      !*** ./src/app/pages/notification/notification.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageModule": function NotificationPageModule() {
          return (
            /* binding */
            _NotificationPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification-routing.module */
      54863);
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page */
      95259);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _NotificationPageModule = function NotificationPageModule() {
        _classCallCheck(this, NotificationPageModule);
      };

      _NotificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _NotificationPageModule);
      /***/
    },

    /***/
    95259:
    /*!*********************************************************!*\
      !*** ./src/app/pages/notification/notification.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPage": function NotificationPage() {
          return (
            /* binding */
            _NotificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./notification.page.html */
      92291);
      /* harmony import */


      var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page.scss */
      44088);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/global-service/global.service */
      89985);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared-service/shared.service */
      49481);

      var _NotificationPage = /*#__PURE__*/function () {
        function NotificationPage(nav, globalService, sharedService) {
          _classCallCheck(this, NotificationPage);

          this.nav = nav;
          this.globalService = globalService;
          this.sharedService = sharedService;
          this.pName = "Notifications";
          this.type = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.allType;
          this.notificationId = [];
          this.notificationData = '';
          this.loggedInUser = '';
        }

        _createClass(NotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
            this.onNotificationLoad();
          } //----------------------------------- Load Notification Data ---------------------------------------------------------// 

        }, {
          key: "onNotificationLoad",
          value: function onNotificationLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log('this.loggedInUser', this.loggedInUser, this.loggedInUser['id']);
                      this.globalService.presentLoading();
                      this.globalService.getData('notification/getNotificationList/' + this.loggedInUser['id']).subscribe(function (result) {
                        console.log('result', result);

                        if (result && result['row_count'] > 0) {
                          _this.notificationData = result['data'];
                        } else {
                          _this.notificationData = [];
                        }

                        console.log('this.notificationData ', _this.notificationData);

                        _this.globalService.dismissLoading();
                      }), function (error) {
                        _this.globalService.dismissLoading();

                        console.log('error', error);
                      };

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //----------------------------------- Load Notification Data ---------------------------------------------------------//
          //----------------------------------- Delete Notification ---------------------------------------------------------//

        }, {
          key: "filterArrayData",
          value: function filterArrayData(rowId) {
            var data = [];
            data['result'] = false;
            this.notificationId.filter(function (ele, i) {
              if (ele == rowId) {
                data['result'] = true;
                data['index'] = i;
              }
            });
            return data;
          }
        }, {
          key: "onDeleteDataSelect",
          value: function onDeleteDataSelect(rowId) {
            var val = this.filterArrayData(rowId);

            if (val['result']) {
              this.notificationId.splice(val['index'], 1);
            } else {
              this.notificationId.push(rowId);
            }
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this2 = this;

            if (this.notificationId.length != 0) {
              this.globalService.presentLoading();
              var formData = new FormData(); // console.log('this.notificationId', this.notificationId);

              formData.append("id", JSON.stringify(this.notificationId));
              this.globalService.postData('notification/deleteNotificationByNotificationID', formData).subscribe(function (result) {
                if (result && result['status']) {
                  _this2.onNotificationLoad();
                }

                _this2.globalService.presentToast(result['message']);

                _this2.globalService.dismissLoading();
              }), function (error) {
                _this2.globalService.dismissLoading();

                console.log('error', error);
              };
            }
          } //----------------------------------- Delete Notification ---------------------------------------------------------//
          //----------------------------------- Re-direct on detail page --------------------------------------------------------//

        }, {
          key: "onNotificationDetaliPage",
          value: function onNotificationDetaliPage(rowID, formId, formType, isSeen) {
            var _this3 = this;

            if (formType == this.globalService.formType_user) {
              this.nav.navigateRoot("/home/safety-menu/incident-details/" + formId);
            } else if (formType == this.globalService.formType_investigator) {
              this.nav.navigateForward('investigation-view/' + formId);
            }

            if (isSeen == 0) {
              this.globalService.getData('notification/changeNotificationSeen/' + rowID).subscribe(function (result) {
                if (result['status']) {
                  _this3.sharedService.notViewNotiCount = _this3.sharedService.notViewNotiCount != 0 ? _this3.sharedService.notViewNotiCount - 1 : 0;
                }
              }), function (error) {
                console.log("error", error);
              };
            }
          }
        }]);

        return NotificationPage;
      }();

      _NotificationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService
        }];
      };

      _NotificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotificationPage);
      /***/
    },

    /***/
    49481:
    /*!***********************************************************!*\
      !*** ./src/app/services/shared-service/shared.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* binding */
            _SharedService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _global_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../global-service/global.service */
      89985);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);

      var _SharedService = /*#__PURE__*/function () {
        function SharedService(globalService, actionSheetController, camera) {
          _classCallCheck(this, SharedService);

          this.globalService = globalService;
          this.actionSheetController = actionSheetController;
          this.camera = camera;
          this.notViewNotiCount = 0;
        }

        _createClass(SharedService, [{
          key: "getBase64",
          value: function getBase64(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.onerror = function (error) {
                return reject(error);
              };
            });
          } // fileToBase64 = (file) => {
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

        }, {
          key: "mobileUploadImages",
          value: function mobileUploadImages() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var images, actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionSheetController.create({
                        header: 'Select Image source',
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            return images = _this4.pickImage(_this4.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            return images = _this4.pickImage(_this4.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context2.sent;
                      _context2.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('sourceType', sourceType);
                      options = {
                        quality: 100,
                        sourceType: sourceType,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE
                      };
                      _context3.next = 4;
                      return this.camera.getPicture(options).then(function (imageData) {
                        console.log('imageData', imageData); // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);

                        // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
                        var image = 'data:image/jpeg;base64,' + imageData;
                        console.log('pickImage', image);
                        return image;
                      }, function (err) {
                        console.log("errOf Image ", err);
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return SharedService;
      }();

      _SharedService.ctorParameters = function () {
        return [{
          type: _global_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__.Camera
        }];
      };

      _SharedService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _SharedService);
      /***/
    },

    /***/
    44088:
    /*!***********************************************************!*\
      !*** ./src/app/pages/notification/notification.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    92291:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size=\"10\">\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"trash\" (click)=\"onDelete()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let notification of notificationData; let i=index;\">\n      <ion-col size=\"2\">\n        <ion-checkbox (ionChange)=\"onDeleteDataSelect(notification.id)\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"10\"\n        (click)=\"onNotificationDetaliPage(notification.id,notification.form_id,notification.form_type, notification.is_seen)\">\n        {{notification.message}}\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_notification_notification_module_ts-es5.js.map