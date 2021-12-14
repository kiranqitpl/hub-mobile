(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_telehandler_telehandler-view-detail_telehandler-view--8e57a8"], {
    /***/
    37510:
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-view-detail/telehandler-view-detail-routing.module.ts ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TelehandlerViewDetailPageRoutingModule": function TelehandlerViewDetailPageRoutingModule() {
          return (
            /* binding */
            _TelehandlerViewDetailPageRoutingModule
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


      var _telehandler_view_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./telehandler-view-detail.page */
      90583);

      var routes = [{
        path: '',
        component: _telehandler_view_detail_page__WEBPACK_IMPORTED_MODULE_0__.TelehandlerViewDetailPage
      }];

      var _TelehandlerViewDetailPageRoutingModule = function TelehandlerViewDetailPageRoutingModule() {
        _classCallCheck(this, TelehandlerViewDetailPageRoutingModule);
      };

      _TelehandlerViewDetailPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TelehandlerViewDetailPageRoutingModule);
      /***/
    },

    /***/
    75656:
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-view-detail/telehandler-view-detail.module.ts ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TelehandlerViewDetailPageModule": function TelehandlerViewDetailPageModule() {
          return (
            /* binding */
            _TelehandlerViewDetailPageModule
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


      var _telehandler_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./telehandler-view-detail-routing.module */
      37510);
      /* harmony import */


      var _telehandler_view_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./telehandler-view-detail.page */
      90583);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _TelehandlerViewDetailPageModule = function TelehandlerViewDetailPageModule() {
        _classCallCheck(this, TelehandlerViewDetailPageModule);
      };

      _TelehandlerViewDetailPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _telehandler_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.TelehandlerViewDetailPageRoutingModule],
        declarations: [_telehandler_view_detail_page__WEBPACK_IMPORTED_MODULE_1__.TelehandlerViewDetailPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _TelehandlerViewDetailPageModule);
      /***/
    },

    /***/
    90583:
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-view-detail/telehandler-view-detail.page.ts ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TelehandlerViewDetailPage": function TelehandlerViewDetailPage() {
          return (
            /* binding */
            _TelehandlerViewDetailPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_telehandler_view_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./telehandler-view-detail.page.html */
      87860);
      /* harmony import */


      var _telehandler_view_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./telehandler-view-detail.page.scss */
      51430);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _TelehandlerViewDetailPage = /*#__PURE__*/function () {
        function TelehandlerViewDetailPage(globalService, activatedRoute) {
          _classCallCheck(this, TelehandlerViewDetailPage);

          this.globalService = globalService;
          this.activatedRoute = activatedRoute;
          this.pName = 'Telehandler Form Details';
          this.teleHandler = [];
        }

        _createClass(TelehandlerViewDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.globalService.getData('add_form/getSingleData?table_name=telehandler&id=' + params['id']).subscribe(function (result) {
                console.log('result', result);

                if (result && result['data'] && result['data'][0]) {
                  _this.teleHandler = result['data'][0];
                }

                console.log(' this.teleHandler', _this.teleHandler); // this.loadingService.dismissLoading();
              }), function (error) {
                // this.loadingService.dismissLoading();
                console.log(error);
              }; // this.loadingService.dismissLoading();
            }), function (error) {
              // this.loadingService.dismissLoading()
              console.log('param error', error);
            };
          }
        }]);

        return TelehandlerViewDetailPage;
      }();

      _TelehandlerViewDetailPage.ctorParameters = function () {
        return [{
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _TelehandlerViewDetailPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-telehandler-view-detail',
        template: _raw_loader_telehandler_view_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_telehandler_view_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TelehandlerViewDetailPage);
      /***/
    },

    /***/
    51430:
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-view-detail/telehandler-view-detail.page.scss ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlaGFuZGxlci12aWV3LWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    87860:
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/telehandler/telehandler-view-detail/telehandler-view-detail.page.html ***!
      \*************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-content>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>Verification of Competency :</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">{{teleHandler['competency']}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>Telehandler Number :</ion-label>\n          </ion-col>\n          <ion-col size=\"6\"> {{teleHandler['telehandler_number']}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>Hour / Meter :</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">{{teleHandler['hour_meter']}}</ion-col>\n        </ion-row>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Data plate attached and legible :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.data_plate}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler.data_plate == 'Faulty'\">\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.data_plate_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"teleHandler['data_plate_image'] == ''\">\n              <ion-col size=\"6\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-grid *ngIf=\"teleHandler['data_plate_image'] != ''\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-label>Images : </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\">\n                    <ion-slide>\n                      <img [src]=\"teleHandler['data_plate_image']\" tappable (click)=\"onOpenPreview(data_plate_image)\">\n                    </ion-slide>\n                  </ion-slides>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Engine Oil Level :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler['engine_oil']}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['engine_oil'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler['engine_oil_comment']}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-slides [options]=\"sliderOpts\" class=\"preview-slides\"\n                  *ngIf=\"teleHandler['engine_oil_image'] && teleHandler['engine_oil_image'].length && teleHandler['engine_oil_image'].length > 0\">\n                  <ion-slide *ngFor=\"let engine_oil_image of incidentDetails['engine_oil_image']\">\n                    <img [src]=\"engine_oil_image\" tappable (click)=\"onOpenPreview(engine_oil_image)\">\n                  </ion-slide>\n                </ion-slides>\n              </ion-col>\n              <ion-col size=\"12\" *ngIf=\"teleHandler['engine_oil_image'] == ''\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-grid>\n\n        <ion-grid lines=\" none\">\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Hydraulic Oil :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler['hydraulic_oil']}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['hydraulic_oil'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler['hydraulic_oil_comment']}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Fuel Level :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler['fuel_level']}}</ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Verify Equipment Inspections are Current :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler['equipment_inspect']}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['equipment_inspect'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler['equipment_inspect_comment']}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Coolant Level :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler['coolant_level']}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['coolant_level'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler['coolant_level_comment']}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Belts and Hoses :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.belts_and_hoses}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['belts_and_hoses'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.belts_and_hoses_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Wheels, Tyres and nuts :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.wheels_tyres}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['wheels_tyres'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.wheels_tyres_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Fire-Extinguisher :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.fire_extinguisher}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['fire_extinguisher'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.fire_extinguisher_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Fuel Flash Screen: in Place :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.fuel_flash}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['fuel_flash'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.fuel_flash_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Hydraulics Functional and No Leaks :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.hydraulics_functional}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['hydraulics_functional'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.hydraulics_functional_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Boom, Lift Arms, Extending Structure :</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.lift_arms}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['lift_arms'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Comment : </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.lift_arms_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Images : </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-text>No Images found.</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>In place / Correctly Tensioned </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>\n                <ion-text>\n                  Chain and Hose Guards :\n                </ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.chain_hose}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['chain_hose'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text>\n                  <ion-label>Comment : </ion-label>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.chain_hose_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-text>\n                  <ion-label>Images : </ion-label>\n                </ion-text>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    No Images found\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>In place </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>\n                <ion-text>\n                  Mast Cap Bolts :\n                </ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.cap_bolts}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['cap_bolts'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text>\n                  <ion-label>Comment : </ion-label>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.cap_bolts_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-text>\n                  <ion-label>Images : </ion-label>\n                </ion-text>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    No Images found\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>In place and secure </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>\n                <ion-text>\n                  Safety Stops and Latches :\n                </ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.safety_stops}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['safety_stops'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text>\n                  <ion-label>Comment : </ion-label>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.safety_stops_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-text>\n                  <ion-label>Images : </ion-label>\n                </ion-text>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    No Images found\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>In place </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>\n                <ion-text>\n                  Forks :\n                </ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.forks}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['forks'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text>\n                  <ion-label>Comment : </ion-label>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.forks_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-text>\n                  <ion-label>Images : </ion-label>\n                </ion-text>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>No Images found</ion-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Condition / Tips Even</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>\n                <ion-text>\n                  Overhead Guards :\n                </ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.overhead_guards}}</ion-col>\n          </ion-row>\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['overhead_guards'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text>\n                  <ion-label>Comment : </ion-label>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.overhead_guards_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-text>\n                  <ion-label>Images : </ion-label>\n                </ion-text>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    No Images found\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>In place / Condition</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>\n                <ion-text>\n                  Counterweight / Counterweight bolts :\n                </ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.counterweight}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['counterweight'] == 'Faulty'\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text>\n                  <ion-label>Comment : </ion-label>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.counterweight_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-text>\n                  <ion-label>Images : </ion-label>\n                </ion-text>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    No Images found\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Condition / Leaks</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>\n                <ion-text>\n                  Engine Bay Components :\n                </ion-text>\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"6\">{{teleHandler.engine_bay_components}}</ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\" *ngIf=\"teleHandler['engine_bay_components'] == 'Faulty'\">\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text>\n                  <ion-label>Comment : </ion-label>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{teleHandler.engine_bay_components_comment}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-text>\n                  <ion-label>Images : </ion-label>\n                </ion-text>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    No Images found\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"12\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Operating</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\">\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Horn :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.horn}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['horn'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.horn_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n\n          <ion-grid lines=\"none\">\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Audible, Visual Warning Devices :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.audible}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['audible'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.audible_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n\n          <ion-grid lines=\"none\">\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Headlights :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.headlights}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['headlights'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.headlights_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ion-grid>\n\n          <ion-grid lines=\"none\">\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Turn Signals :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.turn_signals}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['turn_signals'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.turn_signals_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n\n          <ion-grid lines=\"none\">\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Warning / Brake Lights :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.warning_brake_lights}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['warning_brake_lights'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.warning_brake_lights_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ion-grid>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Foot Brake :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.foot_brake}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['foot_brake'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.foot_brake_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Pedal Holds / Smooth Stop</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Parking Brake :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.parking_brake}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['parking_brake'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.parking_brake_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Holds against Accelerator</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Clutch / Gear Shift :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.clutch_gear_shift}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['clutch_gear_shift'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.clutch_gear_shift_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Smooth operation</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Engine Noise :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.engine_noise}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['engine_noise'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.engine_noise_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Fluid Leaks :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.fluid_leaks}}</ion-col>\n            </ion-row>\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['fluid_leaks'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.fluid_leaks_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"12\">\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Sounds Normal</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Dash Gauges :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.dash_gauges}}</ion-col>\n            </ion-row>\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['dash_gauges'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.dash_gauges_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    Operational Controls :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.operational_controls}}</ion-col>\n            </ion-row>\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['operational_controls'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.operational_controls_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>Under truck and Near Hoses</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-grid lines=\"none\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>\n                  <ion-text>\n                    First Aid Kit :\n                  </ion-text>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{teleHandler.first_aid_kit}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"teleHandler['first_aid_kit'] == 'Faulty'\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-text>\n                    <ion-label>Comment : </ion-label>\n                  </ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{teleHandler.first_aid_kit_comment}}</ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-text>\n                    <ion-label>Images : </ion-label>\n                  </ion-text>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <ion-text>\n                      No Images found\n                    </ion-text>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"12\">\n                </ion-col>\n              </ion-row>\n              \n            </ion-grid>\n          </ion-grid>\n        </ion-grid>\n\n        <ion-grid lines=\"none\">\n          <ion-row>\n            <ion-label>Comment : </ion-label>\n          </ion-row>\n          <ion-row>\n            {{teleHandler.comment}}\n          </ion-row>\n        </ion-grid>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_telehandler_telehandler-view-detail_telehandler-view--8e57a8-es5.js.map