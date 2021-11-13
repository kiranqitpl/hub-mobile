(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-98cc75"], {
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


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/global-service/global.service */
      89985);

      var _ManagersPage = /*#__PURE__*/function () {
        function ManagersPage(modal, global) {
          _classCallCheck(this, ManagersPage);

          this.modal = modal;
          this.global = global;
        }

        _createClass(ManagersPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.global.getData1("Manager/getManagerList").subscribe(function (res) {
              console.log('res', res);

              if (res) {
                _this.data = res.data;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }];
      };

      _ManagersPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-managers',
        template: _raw_loader_managers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_managers_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ManagersPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

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


      __webpack_exports__["default"] = "ion-header ion-title {\n  font-family: mon-bold;\n}\n\nion-content ion-item {\n  border-bottom: 1px solid #cccccc;\n}\n\nion-content ion-item ion-label {\n  font-family: \"mon-medium\";\n  text-transform: capitalize;\n}\n\nion-content ion-input {\n  background: var(--theme-white-color);\n  border-radius: 15px;\n  font-family: \"mon-medium\";\n  height: 52px;\n  margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7O0FBSUU7RUFDRSxnQ0FBQTtBQURKOztBQUVJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQUFOOztBQUdFO0VBRUUsb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkoiLCJmaWxlIjoibWFuYWdlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1ib2xkO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIGlvbi1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1mYW1pbHk6ICdtb24tbWVkaXVtJztcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxuICBpb24taW5wdXR7XG5cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS13aGl0ZS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LWZhbWlseTogJ21vbi1tZWRpdW0nO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuXG4gIH1cbn1cbiJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>Name of the Managers</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-input placeholder=\"Search manager\" [(ngModel)]=\"term\"></ion-input>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item button class=\"ion-no-padding\" lines=\"none\" (click)=\"close(item)\" *ngFor=\"let item of data|filter:term\">\n      <ion-label>{{item?.full_name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
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
//# sourceMappingURL=default-src_app_modals_image-modal_image-modal_page_ts-src_app_modals_managers_managers_page_-98cc75-es5.js.map