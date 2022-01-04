(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_crane_crane-view-detail_crane-view-detail_module_ts"], {
    /***/
    90555:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-view-detail/crane-view-detail-routing.module.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CraneViewDetailPageRoutingModule": function CraneViewDetailPageRoutingModule() {
          return (
            /* binding */
            _CraneViewDetailPageRoutingModule
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


      var _crane_view_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./crane-view-detail.page */
      1825);

      var routes = [{
        path: '',
        component: _crane_view_detail_page__WEBPACK_IMPORTED_MODULE_0__.CraneViewDetailPage
      }];

      var _CraneViewDetailPageRoutingModule = function CraneViewDetailPageRoutingModule() {
        _classCallCheck(this, CraneViewDetailPageRoutingModule);
      };

      _CraneViewDetailPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CraneViewDetailPageRoutingModule);
      /***/
    },

    /***/
    35718:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-view-detail/crane-view-detail.module.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CraneViewDetailPageModule": function CraneViewDetailPageModule() {
          return (
            /* binding */
            _CraneViewDetailPageModule
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


      var _crane_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./crane-view-detail-routing.module */
      90555);
      /* harmony import */


      var _crane_view_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crane-view-detail.page */
      1825);
      /* harmony import */


      var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-module/shared-module.module */
      69270);

      var _CraneViewDetailPageModule = function CraneViewDetailPageModule() {
        _classCallCheck(this, CraneViewDetailPageModule);
      };

      _CraneViewDetailPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _crane_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.CraneViewDetailPageRoutingModule, src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule],
        declarations: [_crane_view_detail_page__WEBPACK_IMPORTED_MODULE_1__.CraneViewDetailPage // HeaderComponent
        ]
      })], _CraneViewDetailPageModule);
      /***/
    },

    /***/
    1825:
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-view-detail/crane-view-detail.page.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CraneViewDetailPage": function CraneViewDetailPage() {
          return (
            /* binding */
            _CraneViewDetailPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_crane_view_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./crane-view-detail.page.html */
      36320);
      /* harmony import */


      var _crane_view_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crane-view-detail.page.scss */
      73144);
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

      var _CraneViewDetailPage = /*#__PURE__*/function () {
        function CraneViewDetailPage(globalService, activatedRoute) {
          _classCallCheck(this, CraneViewDetailPage);

          this.globalService = globalService;
          this.activatedRoute = activatedRoute;
          this.pName = 'Crane Details';
          this.craneData = [];
        }

        _createClass(CraneViewDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.globalService.getData('add_form/getSingleData?table_name=crane&id=' + params['id']).subscribe(function (result) {
                if (result && result['data'] && result['data'][0]) {
                  _this.craneData = result['data'][0];
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

        return CraneViewDetailPage;
      }();

      _CraneViewDetailPage.ctorParameters = function () {
        return [{
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _CraneViewDetailPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-crane-view-detail',
        template: _raw_loader_crane_view_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crane_view_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CraneViewDetailPage);
      /***/
    },

    /***/
    73144:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-view-detail/crane-view-detail.page.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmFuZS12aWV3LWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    36320:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/crane/crane-view-detail/crane-view-detail.page.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"ion-padding-start ion-padding-end container\">\n\n    <ion-row>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n      <ion-col size-xl=\"6\" size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size-xs=\"12\">\n        <ion-card>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Crane number :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['crane_number']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"8\">\n                <ion-label>Are you fully qualified and trained to operate the crane ? :</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">{{craneData['operate_crane']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"8\">\n                <ion-label>Have you read and understood the relevant SWI for the equipment ? :</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">{{craneData['swi']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Is the equipment isolated ? :</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">{{craneData['equipment_isolated']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Inspect Pendant :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['inspect_pendant']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Inspect Control operation :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['inspect_control_operation']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Directional and SWL sign in place :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['directional_swl_sign']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Limit Switches operational :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['limit_switches_operational']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Hook :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['hook']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Hoist chain/rope :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['hoist_chain_rope']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Mechanically Sound :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['mechanically_sound']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label>Passed Inspection :</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">{{craneData['passed_inspection']}}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-label>Comment :</ion-label>\n            </ion-row>\n            <ion-row>\n              {{craneData['comment']}}\n            </ion-row>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_crane_crane-view-detail_crane-view-detail_module_ts-es5.js.map