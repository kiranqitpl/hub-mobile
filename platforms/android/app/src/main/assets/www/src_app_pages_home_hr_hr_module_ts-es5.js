(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_hr_hr_module_ts"], {
    /***/
    48649:
    /*!****************************************************!*\
      !*** ./src/app/pages/home/hr/hr-routing.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HrPageRoutingModule": function HrPageRoutingModule() {
          return (
            /* binding */
            _HrPageRoutingModule
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


      var _hr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hr.page */
      1827);

      var routes = [{
        path: '',
        component: _hr_page__WEBPACK_IMPORTED_MODULE_0__.HrPage
      }, {
        path: 'on-boarding',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js-n-ee3579"), __webpack_require__.e("src_app_pages_home_hr_on-boarding_on-boarding_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../hr/on-boarding/on-boarding.module */
          24656)).then(function (m) {
            return m.OnBoardingPageModule;
          });
        }
      }];

      var _HrPageRoutingModule = function HrPageRoutingModule() {
        _classCallCheck(this, HrPageRoutingModule);
      };

      _HrPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HrPageRoutingModule);
      /***/
    },

    /***/
    17330:
    /*!********************************************!*\
      !*** ./src/app/pages/home/hr/hr.module.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HrPageModule": function HrPageModule() {
          return (
            /* binding */
            _HrPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _hr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hr-routing.module */
      48649);
      /* harmony import */


      var _hr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hr.page */
      1827);

      var _HrPageModule = function HrPageModule() {
        _classCallCheck(this, HrPageModule);
      };

      _HrPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _hr_routing_module__WEBPACK_IMPORTED_MODULE_0__.HrPageRoutingModule],
        declarations: [_hr_page__WEBPACK_IMPORTED_MODULE_1__.HrPage]
      })], _HrPageModule);
      /***/
    },

    /***/
    1827:
    /*!******************************************!*\
      !*** ./src/app/pages/home/hr/hr.page.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HrPage": function HrPage() {
          return (
            /* binding */
            _HrPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_hr_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./hr.page.html */
      9721);
      /* harmony import */


      var _hr_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hr.page.scss */
      67898);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HrPage = /*#__PURE__*/function () {
        function HrPage() {
          _classCallCheck(this, HrPage);
        }

        _createClass(HrPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HrPage;
      }();

      _HrPage.ctorParameters = function () {
        return [];
      };

      _HrPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-hr',
        template: _raw_loader_hr_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_hr_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HrPage);
      /***/
    },

    /***/
    67898:
    /*!********************************************!*\
      !*** ./src/app/pages/home/hr/hr.page.scss ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    9721:
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hr/hr.page.html ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>hr</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_hr_hr_module_ts-es5.js.map