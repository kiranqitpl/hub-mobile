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
        }

        _createClass(NotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
            this.onNotificationLoad();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            this.userId = localStorage.getItem('id');
            this.roleId = localStorage.getItem('role');
          } //----------------------------------- Load Notification Data ---------------------------------------------------------// 

        }, {
          key: "onNotificationLoad",
          value: function onNotificationLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var formData, url;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      formData = new FormData();
                      formData.append("type", this.type);
                      formData.append("user_id", this.userId); // this.notificationData = await this.sharedService.notificationLoad(formData);
                      // console.log("this.notificationData ", this.notificationData);

                      url = "";

                      if (this.roleId == this.globalService.investigator) {
                        url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
                      } else if (this.roleId == this.globalService.gm) {
                        url = 'api/notification/getGMNotificationByGmID';
                      }

                      if (url != "") {
                        // this.globalService.presentLoading();
                        this.globalService.postData(url, formData).subscribe(function (result) {
                          if (result['status']) {
                            _this.notificationData = result['data'];
                          } // this.globalService.dismissLoading();

                        }), function (error) {
                          // this.globalService.dismissLoading();
                          console.log('error', error);
                        };
                      } else {
                        // this.globalService.dismissLoading();
                        console.log("error");
                      }

                    case 6:
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
              var url = 'api/notification/deleteNotificationByNotificationID';
              var formData = new FormData();
              formData.append("id", JSON.stringify(this.notificationId));
              this.globalService.postData(url, formData).subscribe(function (result) {
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
              this.nav.navigateForward('view/' + formId);
            } else if (formType == this.globalService.formType_investigator) {
              this.nav.navigateForward('investigation-view/' + formId);
            }

            if (isSeen == 0) {
              this.globalService.getData('api/notification/changeNotificationSeen/' + rowID).subscribe(function (result) {
                console.log('result', result);

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
    89985:
    /*!***********************************************************!*\
      !*** ./src/app/services/global-service/global.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalService": function GlobalService() {
          return (
            /* binding */
            _GlobalService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _GlobalService = /*#__PURE__*/function () {
        function GlobalService(toastController, http, loadingController) {
          _classCallCheck(this, GlobalService);

          this.toastController = toastController;
          this.http = http;
          this.loadingController = loadingController;
          this.baseUrl = 'https://mforms-api-devel.horts.com.au/';
          this.baseUrl1 = 'https://mforms-api-devel.horts.com.au/api/'; //Role 

          this.user = "31";
          this.gm = "32";
          this.investigator = "33";
          this.manager = "34";
          this.supervisior = "35";
          this.formType_user = 1;
          this.formType_investigator = 2;
        }

        _createClass(GlobalService, [{
          key: "presentToast",
          value: function presentToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        mode: "ios",
                        color: "dark"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "toast",
          value: function toast(msg, type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        // mode: "ios",
                        color: type,
                        animated: true
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setHeader",
          value: function setHeader() {
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('apikey', 'as*37486a*()HGY').set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Headers", "*").set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS").set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); // if (localStorage.getItem("token") && localStorage.getItem("token") != "")
            //   header.append("token", localStorage.getItem("token"));

            return header;
          }
        }, {
          key: "getData",
          value: function getData(url) {
            var headers = this.setHeader();
            return this.http.get(this.baseUrl + url, {
              headers: headers
            });
          }
        }, {
          key: "postData",
          value: function postData(url, data) {
            var headers = this.setHeader();
            return this.http.post(this.baseUrl + url, data, {
              headers: headers
            });
          } // --------------------------------------------------New Services ---------------------------------------------//

        }, {
          key: "postData1",
          value: function postData1(url, data) {
            var headers = this.setHeader();
            return this.http.post(this.baseUrl1 + url, data, {
              headers: headers
            });
          }
        }, {
          key: "getData1",
          value: function getData1(url) {
            var headers = this.setHeader();
            return this.http.get(this.baseUrl1 + url, {
              headers: headers
            }); // return this.http.get(this.baseUrl1 + url, { headers: headers }).pipe(
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
        }]);

        return GlobalService;
      }();

      _GlobalService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
        }];
      };

      _GlobalService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _GlobalService); // ---------------------------------------------  New Services --------------------------------------------------//

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


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      67871);

      var _SharedService = /*#__PURE__*/function () {
        function SharedService(globalService, actionSheetController, camera) {
          _classCallCheck(this, SharedService);

          this.globalService = globalService;
          this.actionSheetController = actionSheetController;
          this.camera = camera;
          this.notViewNotiCount = 0;
        } // notificationLoad(formData) {
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              var images, actionSheet;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
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
                      actionSheet = _context6.sent;
                      _context6.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            console.log('sourceType', sourceType);
            var options = {
              quality: 100,
              sourceType: sourceType,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              console.log('imageData', imageData); // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);

              var image = 'data:image/jpeg;base64,' + imageData;
              return image;
            }, function (err) {
              console.log("errOf Image ", err);
            });
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
          type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__.Camera
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