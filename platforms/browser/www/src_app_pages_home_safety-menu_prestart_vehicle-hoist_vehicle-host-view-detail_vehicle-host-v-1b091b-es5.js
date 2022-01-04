(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-host-view-detail_vehicle-host-v-1b091b"], {
    /***/
    49608:
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-host-view-detail/vehicle-host-view-detail-routing.module.ts ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleHostViewDetailPageRoutingModule": function VehicleHostViewDetailPageRoutingModule() {
          return (
            /* binding */
            _VehicleHostViewDetailPageRoutingModule
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


      var _vehicle_host_view_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-host-view-detail.page */
      60383);

      var routes = [{
        path: '',
        component: _vehicle_host_view_detail_page__WEBPACK_IMPORTED_MODULE_0__.VehicleHostViewDetailPage
      }];

      var _VehicleHostViewDetailPageRoutingModule = function VehicleHostViewDetailPageRoutingModule() {
        _classCallCheck(this, VehicleHostViewDetailPageRoutingModule);
      };

      _VehicleHostViewDetailPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VehicleHostViewDetailPageRoutingModule);
      /***/
    },

    /***/
    89304:
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-host-view-detail/vehicle-host-view-detail.module.ts ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleHostViewDetailPageModule": function VehicleHostViewDetailPageModule() {
          return (
            /* binding */
            _VehicleHostViewDetailPageModule
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


      var _vehicle_host_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-host-view-detail-routing.module */
      49608);
      /* harmony import */


      var _vehicle_host_view_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vehicle-host-view-detail.page */
      60383);
      /* harmony import */


      var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-module/shared-module.module */
      69270);

      var _VehicleHostViewDetailPageModule = function VehicleHostViewDetailPageModule() {
        _classCallCheck(this, VehicleHostViewDetailPageModule);
      };

      _VehicleHostViewDetailPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _vehicle_host_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleHostViewDetailPageRoutingModule, src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule],
        declarations: [_vehicle_host_view_detail_page__WEBPACK_IMPORTED_MODULE_1__.VehicleHostViewDetailPage]
      })], _VehicleHostViewDetailPageModule);
      /***/
    },

    /***/
    60383:
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-host-view-detail/vehicle-host-view-detail.page.ts ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleHostViewDetailPage": function VehicleHostViewDetailPage() {
          return (
            /* binding */
            _VehicleHostViewDetailPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_vehicle_host_view_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vehicle-host-view-detail.page.html */
      6494);
      /* harmony import */


      var _vehicle_host_view_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vehicle-host-view-detail.page.scss */
      36552);
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

      var _VehicleHostViewDetailPage = /*#__PURE__*/function () {
        function VehicleHostViewDetailPage(globalService, activatedRoute) {
          _classCallCheck(this, VehicleHostViewDetailPage);

          this.globalService = globalService;
          this.activatedRoute = activatedRoute;
          this.pName = 'Vehicle host form details';
          this.vehicleHoist = [];
        }

        _createClass(VehicleHostViewDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.globalService.getData('add_form/getSingleData?table_name=prestart&id=' + params['id']).subscribe(function (result) {
                console.log('vehicleHoist', typeof _this.vehicleHoist);

                if (result && result['data'] && result['data'][0]) {
                  _this.vehicleHoist = result['data'][0];
                } else {
                  _this.vehicleHoist = [];
                } // this.loadingService.dismissLoading();

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

        return VehicleHostViewDetailPage;
      }();

      _VehicleHostViewDetailPage.ctorParameters = function () {
        return [{
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _VehicleHostViewDetailPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-vehicle-host-view-detail',
        template: _raw_loader_vehicle_host_view_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vehicle_host_view_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VehicleHostViewDetailPage);
      /***/
    },

    /***/
    36552:
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-host-view-detail/vehicle-host-view-detail.page.scss ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWhvc3Qtdmlldy1kZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    6494:
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-host-view-detail/vehicle-host-view-detail.page.html ***!
      \*****************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n      <ion-col size-xl=\"6\" size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size-xs=\"12\">\n        <ion-card>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Vehicle Hoist number :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['vehicle_host_no']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Are you trained and competent to operate the vehicle hoist ? :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['trained']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Certificate of inspection (Current) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['inspection_certificate']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['inspection_certificate'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['inspection_certificate_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Have you read and understood the Safe Work Instruction 2 Post Vehicle Hoist (HE-WHS-SWI-008)\n                  :\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['maintenance_instructions']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Data plate, decals (attached/ readable) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['data_plate']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['data_plate'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['data_plate_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Safety devices are operational (including E-stop) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['safty_devices']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['safty_devices'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['safty_devices_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Locks, latches (move freely. Fully engage) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['locks_latches']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['locks_latches'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['locks_latches_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Rubber pads (attached, good condition on all load points) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['rubber_pad']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['rubber_pad'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['rubber_pad_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Safety guards (fitted, secure and operational) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['safty_gaurds']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['safty_gaurds'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['safty_gaurds_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Hydraulic connections, hoses (secure, no leaks) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['hydraulic_connections']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['hydraulic_connections'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['hydraulic_connections_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Chain and cable connections (Bends, cracks, lose links or looseness) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['chain_cable_connection']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['chain_cable_connection'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['chain_cable_connection_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Check for frayed cables(raised and lowered position) :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['frayed_cables']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['frayed_cables'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['frayed_cables_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Check snap rings at all rollers and sheaves :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['snap_rings']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['snap_rings'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['snap_rings_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Check bolts, nuts, screws :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['bolts_nuts']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['bolts_nuts'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['bolts_nuts_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Check wiring and electrical switches for damage :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['electrical_switch']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['electrical_switch'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['electrical_switch_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Hoist and work area is free from grease, oil, corrosive substances, slip and trip hazards :\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['hoist_work_area']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['hoist_work_area'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['hoist_work_area_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Check floor for stress cracks near anchor bolts :\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['anchor_bolts']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['anchor_bolts'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['anchor_bolts_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Check swing arm restraints :\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['swing_arm']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['swing_arm'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['swing_arm_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Test all hoist controls and functions :\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{vehicleHoist['hoist_controls']}}</ion-col>\n            </ion-row>\n\n            <ion-grid lines=\"none\" *ngIf=\"vehicleHoist['hoist_controls'] == 'Faulty'\">\n              <ion-row>\n                <ion-label>Comment : </ion-label>\n              </ion-row>\n              <ion-row>\n                <p class=\"value\">{{vehicleHoist['hoist_controls_comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n            <ion-grid lines=\"none\">\n              <ion-row>\n                <ion-label>Comment :</ion-label>\n              </ion-row>\n            </ion-grid>\n            <ion-grid lines=\"none\">\n              <ion-row>\n                <p class=\"value\"> {{vehicleHoist['comment']}}</p>\n              </ion-row>\n            </ion-grid>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-host-view-detail_vehicle-host-v-1b091b-es5.js.map