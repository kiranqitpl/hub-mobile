(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-bd3570"], {
    /***/
    91681:
    /*!********************************************************!*\
      !*** ./src/app/modals/image-modal/image-modal.page.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageModalPage": function ImageModalPage() {
          return (
            /* binding */
            _ImageModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_image_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./image-modal.page.html */
      41556);
      /* harmony import */


      var _image_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-modal.page.scss */
      4521);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ImageModalPage = /*#__PURE__*/function () {
        function ImageModalPage(modalController) {
          _classCallCheck(this, ImageModalPage);

          this.modalController = modalController;
          this.sliderOpts = {
            zoom: true
          };
        }

        _createClass(ImageModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('img', this.img);
            console.log('slides', this.slides);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.slides.update();
          }
        }, {
          key: "zoom",
          value: function zoom(zoomIn) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var slider, zoom;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.slides.getSwiper();

                    case 2:
                      slider = _context.sent;
                      zoom = slider.zoom;
                      zoomIn ? zoom["in"]() : zoom.out();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }]);

        return ImageModalPage;
      }();

      _ImageModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }];
      };

      _ImageModalPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides]
        }],
        img: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['img']
        }]
      };
      _ImageModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-modal',
        template: _raw_loader_image_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_image_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImageModalPage);
      /***/
    },

    /***/
    58127:
    /*!**************************************************!*\
      !*** ./src/app/modals/managers/managers.page.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManagersPage": function ManagersPage() {
          return (
            /* binding */
            _ManagersPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_managers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./managers.page.html */
      72329);
      /* harmony import */


      var _managers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./managers.page.scss */
      80248);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/global-service/global.service */
      89985);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      26215);

      var _ManagersPage = /*#__PURE__*/function () {
        function ManagersPage(modal, global) {
          _classCallCheck(this, ManagersPage);

          this.modal = modal;
          this.global = global;
          this.newList = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        }

        _createClass(ManagersPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // console.log('get list in modal', this.list);
            this.newList.next(this.list);
          }
        }, {
          key: "onSearch",
          value: function onSearch(event) {
            var _this = this;

            var value = false;
            this.list.forEach(function (element) {
              if (element.full_name == _this.term) {
                value = true;
              }
            });

            if (value == false && event != '') {
              this.global.getData("user/getallemployee/" + event.detail.value).subscribe(function (res) {
                if (res && res.data && res.data.length > 0) {
                  res.data.unshift({
                    full_name: "Other",
                    employee_id: '0'
                  });

                  _this.newList.next(res.data);
                } else {
                  _this.newList.next(_this.list);
                }
              }, function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "close",
          value: function close(item) {
            this.modal.dismiss(item);
          }
        }]);

        return ManagersPage;
      }();

      _ManagersPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }, {
          type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }];
      };

      _ManagersPage.propDecorators = {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['header']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['list']
        }]
      };
      _ManagersPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-managers',
        template: _raw_loader_managers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_managers_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ManagersPage);
      /***/
    },

    /***/
    80513:
    /*!*************************************************************!*\
      !*** ./src/app/services/loading-service/loading.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
        }

        _createClass(LoadingService, [{
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoadingService);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var images, actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheetController.create({
                        header: 'Select Image source',
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            return images = _this2.pickImage(_this2.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            return images = _this2.pickImage(_this2.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var options;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('sourceType', sourceType);
                      options = {
                        quality: 100,
                        sourceType: sourceType,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE
                      };
                      _context5.next = 4;
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
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
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
          type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__.Camera
        }];
      };

      _SharedService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _SharedService);
      /***/
    },

    /***/
    4521:
    /*!**********************************************************!*\
      !*** ./src/app/modals/image-modal/image-modal.page.scss ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: transparent;\n}\n\nion-footer {\n  margin-bottom: 10px;\n}\n\nion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImltYWdlLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    80248:
    /*!****************************************************!*\
      !*** ./src/app/modals/managers/managers.page.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-input {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkE7RUFDRSx1QkFBQTtBQXZCRiIsImZpbGUiOiJtYW5hZ2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVyIHtcbi8vICAgaW9uLXRpdGxlIHtcbi8vICAgICBmb250LWZhbWlseTogbW9uLWJvbGQ7XG4vLyAgIH1cbi8vIH1cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgaW9uLWl0ZW0ge1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuLy8gICAgIGlvbi1sYWJlbCB7XG4vLyAgICAgICBmb250LWZhbWlseTogJ21vbi1tZWRpdW0nO1xuLy8gICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlvbi1pbnB1dHtcblxuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXdoaXRlLWNvbG9yKTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnbW9uLW1lZGl1bSc7XG4vLyAgICAgaGVpZ2h0OiA1MnB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDE4cHg7XG5cbi8vICAgfVxuLy8gfVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    41556:
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/image-modal/image-modal.page.html ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <ion-slides [options]=\"sliderOpts\">\n    <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [src]=\"img\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n \n<ion-footer>\n  <ion-row>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button (click)=\"zoom(false)\" fill=\"clear\">\n        <ion-icon name=\"remove\" slot=\"start\"></ion-icon>\n        out\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button (click)=\"close()\" fill=\"clear\">\n        <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n        close\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button (click)=\"zoom(true)\" fill=\"clear\">\n        <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n        in\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    },

    /***/
    72329:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/managers/managers.page.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{header}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-input placeholder=\"Search\" [(ngModel)]=\"term\" (ionChange)=\"onSearch($event)\"></ion-input>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item button class=\"ion-no-padding\" lines=\"none\" (click)=\"close(item)\"\n      *ngFor=\"let item of  newList.value |filter:term\">\n      <ion-label>{{item?.full_name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    79044:
    /*!********************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-form.json ***!
      \********************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = JSON.parse('[{"injuryList":[{"val":"FAI","isChecked":false,"desc":"FAI: First Aid injury, an injury that requires a single first aid treatment and a follow-up visit for subsequent observation involving on minor injuries which do not ordinarily require medical care, and for which the person would typically return immediately to their normal activities"},{"val":"MTI","isChecked":false,"desc":"MTI: Medical Treatment Injury, an injury or disease that resulted in a certain level of treatment (not first aid treatment) given by a physician or medical personnel under standing orders of a physician."},{"val":"ADI","isChecked":false,"desc":"ADI: Alternative Duties Injury, temporary duties , identified as in Hort Enterprises Alternative Duties Within the Workplace HE-WHS-FRM-0036, that are required when an injured worker is unable to return to their normal duties."},{"val":"LTI","isChecked":false,"desc":"LTI: Lost Time Injury, an injury that results in a day or more lost from work."},{"val":"PII","isChecked":false,"desc":"PII: Permanent Impairment Injury, the permanent impact an injury has on a person\'s functioning."},{"val":"Fatality","isChecked":false,"desc":"Fatality: Fatality, a person who dies as a result from an injury."}]}]');
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-bd3570-es5.js.map