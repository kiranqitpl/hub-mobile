(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_incident_incident-details_incident-details_module_ts"], {
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
    61005:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-details/incident-details-routing.module.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IncidentDetailsPageRoutingModule": function IncidentDetailsPageRoutingModule() {
          return (
            /* binding */
            _IncidentDetailsPageRoutingModule
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


      var _incident_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./incident-details.page */
      28719);

      var routes = [{
        path: '',
        component: _incident_details_page__WEBPACK_IMPORTED_MODULE_0__.IncidentDetailsPage
      }];

      var _IncidentDetailsPageRoutingModule = function IncidentDetailsPageRoutingModule() {
        _classCallCheck(this, IncidentDetailsPageRoutingModule);
      };

      _IncidentDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _IncidentDetailsPageRoutingModule);
      /***/
    },

    /***/
    22641:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-details/incident-details.module.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IncidentDetailsPageModule": function IncidentDetailsPageModule() {
          return (
            /* binding */
            _IncidentDetailsPageModule
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


      var _incident_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./incident-details-routing.module */
      61005);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);
      /* harmony import */


      var _incident_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./incident-details.page */
      28719);

      var _IncidentDetailsPageModule = function IncidentDetailsPageModule() {
        _classCallCheck(this, IncidentDetailsPageModule);
      };

      _IncidentDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _incident_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidentDetailsPageRoutingModule],
        declarations: [_incident_details_page__WEBPACK_IMPORTED_MODULE_2__.IncidentDetailsPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent]
      })], _IncidentDetailsPageModule);
      /***/
    },

    /***/
    28719:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-details/incident-details.page.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IncidentDetailsPage": function IncidentDetailsPage() {
          return (
            /* binding */
            _IncidentDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_incident_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./incident-details.page.html */
      1997);
      /* harmony import */


      var _incident_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./incident-details.page.scss */
      54580);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/image-modal/image-modal.page */
      91681);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);

      var _IncidentDetailsPage = /*#__PURE__*/function () {
        function IncidentDetailsPage(global, activatedRoute, modalController, changeDetectorRef) {
          _classCallCheck(this, IncidentDetailsPage);

          this.global = global;
          this.activatedRoute = activatedRoute;
          this.modalController = modalController;
          this.changeDetectorRef = changeDetectorRef;
          this.pName = 'Incident Details';
          this.incidentDetails = [];
          this.classificationList = [];
          this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true
          };
        }

        _createClass(IncidentDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            this.global.presentLoading();
            this.activatedRoute.params.subscribe(function (params) {
              _this.global.getData1('add_form/getIncidentFormByID/' + params['incident_id']).subscribe(function (result) {
                console.log('result', result);

                if (result && result['data'] && result['data'][0]) {
                  _this.incidentDetails = result['data'][0];
                  _this.classificationList = _this.incidentDetails['classification_value'].split(',');

                  _this.global.dismissLoading();
                }

                _this.global.dismissLoading();
              }), function (error) {
                _this.global.dismissLoading();

                console.log(error);
              };

              _this.global.dismissLoading();
            }), function (error) {
              _this.global.dismissLoading();

              console.log('param error', error);
            };
          }
        }, {
          key: "onOpenPreview",
          value: function onOpenPreview(img) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_modals_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_2__.ImageModalPage,
                        cssClass: 'transparent-modal',
                        componentProps: {
                          img: img
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return IncidentDetailsPage;
      }();

      _IncidentDetailsPage.ctorParameters = function () {
        return [{
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
        }];
      };

      _IncidentDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-incident-details',
        template: _raw_loader_incident_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_incident_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _IncidentDetailsPage);
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
    54580:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/incident/incident-details/incident-details.page.scss ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNpZGVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
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
    1997:
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/incident/incident-details/incident-details.page.html ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n\n  <div class=\"ion-padding-start ion-padding-end container\">\n    <!-- <div class=\"activeBackground\"> -->\n    <!----------------------------------------------------------- Incident Detalis ---------------------------------------------------->\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Incident </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"question\">Incident :</p>\n        <p class=\"value\">{{incidentDetails?.incident_value}}</p>\n        <ion-item *ngIf=\"incidentDetails?.incident_value == 'Near Miss'\" lines=\"none\">\n          <ion-row>\n            <ion-col>\n              <p class=\"question\">Who witnessed the near miss ? :</p>\n              <p class=\"value\">{{incidentDetails?.incident_near_miss}}</p>\n              <p class=\"question\">Possible consequence under different circumstances :</p>\n              <p class=\"value\">{{incidentDetails?.incident_near_miss_other}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <!----------------------------------------------------------- Incident Detalis ---------------------------------------------------->\n\n    <!------------------------------------------------------------ Photography -------------------------------------------------------->\n    <ion-card\n      *ngIf=\"incidentDetails && incidentDetails['photography_image'] && incidentDetails['photography_image'].length && incidentDetails['photography_image'].length > 0\">\n      <ion-card-header>\n        <ion-card-title>\n          Photography\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\">\n          <ion-slide *ngFor=\"let photography_image of incidentDetails['photography_image']\">\n            <img [src]=\"photography_image\" tappable (click)=\"onOpenPreview(photography_image)\">\n          </ion-slide>\n        </ion-slides>\n      </ion-card-content>\n    </ion-card>\n    <!------------------------------------------------------------ Photography -------------------------------------------------------->\n\n    <!----------------------------------------------------------- Incident Description ------------------------------------------------>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          Incident Description\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"question\">Description of incident :</p>\n        <p class=\"value\">{{incidentDetails?.incident_description}}</p>\n        <p class=\"question\">Immediate action taken :</p>\n        <p class=\"value\">{{incidentDetails?.incident_description_action}}</p>\n        <p class=\"question\">What could have been done differently ? :</p>\n        <p class=\"value\">{{incidentDetails?.seen_differently}}</p>\n        <p class=\"question\">Was there any Witnesses of the incident ? :</p>\n        <p class=\"value\">{{incidentDetails?.was_there_any_witness_of_the_incident}}</p>\n\n\n        <div *ngIf=\"incidentDetails?.incident_description_alcohol_test != '' \">\n          <p class=\"question\">Alcohol test completed :</p>\n          <p class=\"value\">{{incidentDetails?.incident_description_alcohol_test}}</p>\n          <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n            *ngIf=\"incidentDetails['alcohol_test_image'] && incidentDetails['alcohol_test_image'].length > 0\">\n            <ion-slide *ngFor=\"let alcohol_test_image of incidentDetails['alcohol_test_image']\">\n              <img [src]=\"alcohol_test_image\" tappable (click)=\"onOpenPreview(alcohol_test_image)\">\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <div *ngIf=\"incidentDetails?.drug_test_completed !='' \">\n          <p class=\"question\">Drug test completed :</p>\n          <p class=\"value\">{{incidentDetails?.drug_test_completed}}</p>\n          <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n            *ngIf=\"incidentDetails['drug_test_image'] && incidentDetails['drug_test_image'].length > 0\">\n            <ion-slide *ngFor=\"let drug_test_image of incidentDetails['drug_test_image']\">\n              <img [src]=\"drug_test_image\" tappable (click)=\"onOpenPreview(drug_test_image)\">\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <div *ngIf=\"incidentDetails?.return_to_alternate_duties!==''\">\n          <p class=\"question\">Return to Alternate Duties :</p>\n          <p class=\"value\">{{incidentDetails?.return_to_alternate_duties}}</p>\n          <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n            *ngIf=\"incidentDetails['return_to_alternate_duties_image'] && incidentDetails['return_to_alternate_duties_image'].length > 0\">\n            <ion-slide\n              *ngFor=\"let return_to_alternate_duties_image of incidentDetails['return_to_alternate_duties_image']\">\n              <img [src]=\"return_to_alternate_duties_image\" tappable\n                (click)=\"onOpenPreview(return_to_alternate_duties_image)\">\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <!----------------------------------------------------------- Incident Description ------------------------------------------------>\n\n    <!------------------------------------------------------------- Classification ---------------------------------------------------->\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          Classification\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"question\">Classification :</p>\n        <ion-row class='ion-no-padding'>\n          <ion-col size=\"6\" *ngFor=\"let classificationValue of classificationList; let i=index\">\n            <ion-item lines=\"none\" class=\"ion-no-padding\">\n              <p class=\"value\">{{classificationValue}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <p class=\"question\">Date of Incident :</p>\n        <p class=\"value\">{{incidentDetails['date_of_incident'] }}</p>\n\n        <p class=\"question\">Time Of Incident :</p>\n        <p class=\"value\">{{incidentDetails['time_of_incident']}}</p>\n\n        <p class=\"question\">Date Reported :</p>\n        <p class=\"value\">{{incidentDetails['date_reported'] }}</p>\n\n        <p class=\"question\">Time Reported :</p>\n        <p class=\"value\">{{incidentDetails['time_reported'] }}</p>\n\n        <p class=\"question\">Location Type :</p>\n        <p class=\"value\">{{incidentDetails['classification_location_option'] }}</p>\n\n        <p class=\"value\">{{incidentDetails['classification_location_value'] }}</p>\n\n        <!-- <ion-text *ngIf=\"incidentDetails['classification_location_option']  == 'Add Location'\" class=\"regularTexrt\">\n          {{incidentDetails['classification_location_value']}}</ion-text>\n        <ion-text *ngIf=\"incidentDetails['classification_location_option']  == 'Choose Location'\" class=\"regularTexrt\">\n          {{incidentDetails['classification_location_value']}}</ion-text> -->\n\n        <p class=\"question\">Shift Type :</p>\n        <p class=\"value\">{{incidentDetails['classification_shift_type'] }}</p>\n\n        <p class=\"question\">Supervisor :</p>\n        <p class=\"value\">{{incidentDetails['classification_supervisor'] }}</p>\n\n        <p class=\"question\">Name of Manager :</p>\n        <p class=\"value\">{{incidentDetails['classification_manager']}}</p>\n      </ion-card-content>\n    </ion-card>\n    <!------------------------------------------------------------- Classification ---------------------------------------------------->\n\n    <div *ngFor=\"let classificationValue of classificationList; let i=index\">\n      <!------------------------------------------------------------- Injury ------------------------------------------------------------>\n      <ion-card *ngIf=\"classificationValue == 'Injury'\">\n        <ion-card-header>\n          <ion-card-title>\n            Injury\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-card *ngFor=\"let personDetails of incidentDetails['person_details']; let i=index\">\n            <ion-card-header>\n              <ion-card-title>\n                Person {{(i+1)}} Details\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <p class=\"question\">Full Name of Injured Person :</p>\n              <p class=\"value\">{{personDetails['injured_person_option'] }}</p>\n              <p class=\"value\" *ngIf=\"personDetails['injured_person_option_value'] == 'Other' \">\n                {{personDetails['injured_person_option_value'] }}</p>\n\n              <p class=\"question\">Gender :</p>\n              <p class=\"value\">{{personDetails['gender'] }}</p>\n\n              <p class=\"question\">Date of Birth :</p>\n              <p class=\"value\">{{personDetails['date_of_birth'] }}</p>\n\n              <p class=\"question\">Return to Normal Duties :</p>\n              <p class=\"value\">{{personDetails['normal_duties'] }}</p>\n\n              <ion-item lines=\"none\"\n                *ngIf=\"personDetails['normal_duties_explanation'] != ''  && personDetails['normal_duties_explanation'] != null\">\n                <ion-row>\n                  <ion-col>\n                    <p class=\"question\">Explanation :</p>\n                    <p class=\"value\">{{personDetails['normal_duties_explanation'] }}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n\n              <p class=\"question\">Return to Alternate Duties :</p>\n              <p class=\"value\">{{personDetails['alternate_duties'] }}</p>\n\n              <ion-item lines=\"none\"\n                *ngIf=\"personDetails['duties_explanation'] != '' && personDetails['duties_explanation'] != null\">\n                <ion-row>\n                  <ion-col>\n                    <p class=\"question\">Explanation :</p>\n                    <p class=\"value\">{{personDetails['duties_explanation'] }}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n\n              <p class=\"question\">Initial Injury / IIIness Classification :</p>\n              <p class=\"value\">{{personDetails['initital_injury'] }}</p>\n\n              <p class=\"question\">Part of body injured :</p>\n              <p class=\"value\" *ngFor=\"let injuryPart of personDetails['part_of_body_injured_occured']\">{{injuryPart}}\n              </p>\n\n              <p class=\"question\">Was immediate treatment given ? :</p>\n              <p class=\"value\">{{personDetails['was_immediate_treatment'] }}</p>\n\n              <ion-item *ngIf=\"personDetails['was_immediate_treatment'] == ''\" lines=\"none\">\n                <ion-row>\n                  <p class=\"question\">What treatment was given ? :</p>\n                  <p class=\"value\">{{personDetails['immediate_treatment_given_explanation'] }}</p>\n\n                  <p class=\"question\">Who administered treatment ? :</p>\n                  <p class=\"question\">Person Name</p>\n                  <p class=\"value\">{{personDetails['immediate_treatment_person_name'] }}</p>\n\n                  <p class=\"question\">Contact Details :</p>\n                  <p class=\"value\">{{personDetails['immediate_treatment_person_number'] }}</p>\n                </ion-row>\n              </ion-item>\n\n            </ion-card-content>\n          </ion-card>\n        </ion-card-content>\n      </ion-card>\n      <!------------------------------------------------------------ Injury ------------------------------------------------------------->\n      <!----------------------------------------------------------- Environmental ------------------------------------------------------->\n      <ion-card *ngIf=\"classificationValue == 'Environmental'\">\n        <ion-card-header>\n          <ion-card-title>\n            Environmental\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n\n          <p class=\"question\">Immediate action taken to minimize Environment impact :</p>\n          <p class=\"value\">{{incidentDetails['environmental_description']}}</p>\n\n          <p class=\"question\">Was a chemical split ? :</p>\n          <p class=\"value\">{{incidentDetails['was_a_chemical_split']}}</p>\n\n\n          <ion-item *ngIf=\"incidentDetails['was_a_chemical_split']==='Yes'\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <p class=\"question\">Name of chemical :</p>\n                <p class=\"value\">{{incidentDetails['chemical_details'].chemical_name}}</p>\n\n                <p class=\"question\">Insert Photo :</p>\n\n                <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n                  *ngIf=\"incidentDetails['chemical_details'] && incidentDetails['chemical_details'].chemical_photo && incidentDetails['chemical_details'].chemical_photo.length > 0\">\n                  <ion-slide *ngFor=\"let chemical_photo of incidentDetails['chemical_details'].chemical_photo\">\n                    <img [src]=\"chemical_photo\" tappable (click)=\"onOpenPreview(chemical_photo)\">\n                  </ion-slide>\n                </ion-slides>\n\n                <p class=\"question\">Approximate quantity of chemical spilled :</p>\n                <p class=\"value\">{{incidentDetails['chemical_details'].approximate_quantity}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <p class=\"question\">Was the emergency spill kit used ? :</p>\n          <p class=\"value\">{{incidentDetails['emergency_spill_kit_used']}}</p>\n\n          <ion-item *ngIf=\"incidentDetails['emergency_spill_kit_used']==='Yes'\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <p class=\" question\"> What was used out of the chemical spill kit ? :</p>\n                <p class=\"value\">{{incidentDetails['out_of_split_kit']}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n        </ion-card-content>\n      </ion-card>\n      <!----------------------------------------------------------- Environmental -------------------------------------------------------->\n\n      <!----------------------------------------------------------- Reputation ----------------------------------------------------------->\n      <ion-card *ngIf=\"classificationValue == 'Reputation'\">\n        <ion-card-header>\n          <ion-card-title>\n            Reputation\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n\n          <p class=\"question\">Was the reputation damages an individual or Company ? :</p>\n          <p class=\"value\">{{incidentDetails['reputation_option']}}</p>\n\n          <ion-item lines=\"none\"\n            *ngIf=\"incidentDetails['individual_damage_value'] == 'Individual' || incidentDetails['company_damage_value'] == 'Company'\">\n\n            <p class=\"question\">Reputation damages type : </p>\n            <ion-row>\n              <ion-col>\n                <p class=\"question\" *ngIf=\"incidentDetails['individual_damage_value'] == 'Individual' \">How has the\n                  Individual's reputation been damaged ? :</p>\n                <p class=\"value\">{{incidentDetails['individual_damage_value']}}</p>\n\n                <p class=\"question\" *ngIf=\"incidentDetails['company_damage_value'] == 'Company' \">How has the\n                  Company's reputation been damaged ? :</p>\n                <p class=\"value\">{{incidentDetails['company_damage_value']}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <p class=\"question\">Was the negative effect internal or external ? :</p>\n          <p class=\"value\">{{incidentDetails['reputation_negative_effect']}}</p>\n\n          <ion-item *ngIf=\"incidentDetails['effected_department'] != '' || incidentDetails['external_party'] != ''\"\n            lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <div *ngIf=\"incidentDetails['effected_department'] != ''\">\n                  <p class=\"question\">What Department was effected ? :</p>\n                  <p class=\"value\">{{incidentDetails['effected_department']}}</p>\n                </div>\n                <div *ngIf=\"incidentDetails['external_party'] != ''\">\n                  <p class=\"question\">Who is the external party ? :</p>\n                  <p class=\"value\">{{incidentDetails['external_party']}}</p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <p class=\"question\">Name of any witness :</p>\n          <p class=\"value\">{{incidentDetails['name_of_witness']}}</p>\n\n          <ion-item *ngIf=\"incidentDetails['name_of_witness'] == 'Other'\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <div>\n                  <p class=\"question\">Name :</p>\n                  <p class=\"value\">{{incidentDetails['other_witness_details'].other_witness_name}}</p>\n                </div>\n                <div>\n                  <p class=\"question\">Mobile No :</p>\n                  <p class=\"value\">{{incidentDetails['other_witness_details'].other_witness_mobile_no}}</p>\n                </div>\n                <div>\n                  <p class=\"question\">Email id :</p>\n                  <p class=\"value\">{{incidentDetails['other_witness_details'].other_witness_email}}</p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <p class=\"question\">What is the possible outcome of this incident ? :</p>\n          <p class=\"value\">{{incidentDetails['possible_outcome_incident']}}</p>\n\n        </ion-card-content>\n      </ion-card>\n      <!----------------------------------------------------------- Reputation ----------------------------------------------------------->\n      <!----------------------------------------------------------- Security ------------------------------------------------------------->\n      <ion-card *ngIf=\"classificationValue == 'Security'\">\n        <ion-card-header>\n          <ion-card-title>\n            Security\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p class=\"question\">Security :</p>\n          <p class=\"value\">{{incidentDetails['security_option']}}</p>\n\n          <ion-item *ngIf=\"incidentDetails['security_option'] == 'IT'\">\n            <ion-row>\n              <ion-col>\n                <p class=\"question\">What kind of IT Security Incident ? :</p>\n                <p class=\"value\">{{incidentDetails['it_option_value']}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <ion-item *ngIf=\"incidentDetails['security_option'] == 'Theft'\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <div>\n                  <p class=\"question\"> What has been stolen ? :</p>\n                  <p class=\"value\">{{incidentDetails['what_has_been_stolen_item']}}</p>\n                </div>\n                <div>\n                  <p class=\"question\">Approximate value of stolen item ? :</p>\n                  <p class=\"value\">{{incidentDetails['approximate_value_of_stolen']}}</p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <ion-item *ngIf=\"incidentDetails['security_option'] == 'Other'\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <p class=\"question\"> What is the Security incident ? :</p>\n                <p class=\"value\">{{incidentDetails['what_is_the_specific_securities_incident']}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n        </ion-card-content>\n      </ion-card>\n      <!----------------------------------------------------------- Security ------------------------------------------------------------->\n\n      <!----------------------------------------------------------- Assets --------------------------------------------------------------->\n      <ion-card *ngIf=\"classificationValue == 'Asset'\">\n        <ion-card-header>\n          <ion-card-title>\n            Assets\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p class=\"question\">Asset description :</p>\n          <p class=\"value\">{{incidentDetails['asset_description']}}</p>\n\n          <p class=\"question\">Does Asset have a number ? :</p>\n          <p class=\"value\">{{incidentDetails['asset_has_number']}}</p>\n\n          <ion-item *ngIf=\"incidentDetails['asset_has_number']=='Yes'\" lines=\"none\">\n            <ion-row>\n              <ion-col>\n                <p class=\"question\"> Asset Number :</p>\n                <p class=\"value\">{{incidentDetails['asset_number']}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <p class=\"question\">Extent of Damage :</p>\n          <p class=\"value\">{{incidentDetails['extent_of_damage']}}</p>\n\n          <div *ngIf=\"incidentDetails['extent_damage_image'] && incidentDetails['extent_damage_image'].length > 0\">\n            <p class=\"question\">Upload photo of damage :</p>\n            <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\">\n              <ion-slide *ngFor=\"let extent_damage_image of incidentDetails['extent_damage_image']\">\n                <img [src]=\"extent_damage_image\" tappable (click)=\"onOpenPreview(extent_damage_image)\">\n              </ion-slide>\n            </ion-slides>\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n      <!----------------------------------------------------------- Assets --------------------------------------------------------------->\n\n      <!----------------------------------------------------------- Report --------------------------------------------------------------->\n      <ion-card *ngIf=\"classificationValue == 'Report'\">\n        <ion-card-header>\n          <ion-card-title>\n            Report\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p class=\"question\"> What could have done differently ? :</p>\n          <p class=\"value\">{{incidentDetails['report']}}</p>\n        </ion-card-content>\n      </ion-card>\n      <!----------------------------------------------------------- Report --------------------------------------------------------------->\n    </div>\n  </div>\n  <!-- </div> -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_incident_incident-details_incident-details_module_ts-es5.js.map