(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_hr_on-boarding_on-boarding_module_ts"], {
    /***/
    44665:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/home/hr/on-boarding/on-boarding-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnBoardingPageRoutingModule": function OnBoardingPageRoutingModule() {
          return (
            /* binding */
            _OnBoardingPageRoutingModule
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


      var _on_boarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./on-boarding.page */
      59155);

      var routes = [{
        path: '',
        component: _on_boarding_page__WEBPACK_IMPORTED_MODULE_0__.OnBoardingPage
      }];

      var _OnBoardingPageRoutingModule = function OnBoardingPageRoutingModule() {
        _classCallCheck(this, OnBoardingPageRoutingModule);
      };

      _OnBoardingPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OnBoardingPageRoutingModule);
      /***/
    },

    /***/
    24656:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/home/hr/on-boarding/on-boarding.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnBoardingPageModule": function OnBoardingPageModule() {
          return (
            /* binding */
            _OnBoardingPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./on-boarding-routing.module */
      44665);
      /* harmony import */


      var _on_boarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./on-boarding.page */
      59155);
      /* harmony import */


      var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-module/shared-module.module */
      69270);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-pagination */
      72533);

      var _OnBoardingPageModule = function OnBoardingPageModule() {
        _classCallCheck(this, OnBoardingPageModule);
      };

      _OnBoardingPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _on_boarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnBoardingPageRoutingModule, src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule],
        declarations: [_on_boarding_page__WEBPACK_IMPORTED_MODULE_1__.OnBoardingPage]
      })], _OnBoardingPageModule);
      /***/
    },

    /***/
    59155:
    /*!***************************************************************!*\
      !*** ./src/app/pages/home/hr/on-boarding/on-boarding.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OnBoardingPage": function OnBoardingPage() {
          return (
            /* binding */
            _OnBoardingPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./on-boarding.page.html */
      90421);
      /* harmony import */


      var _on_boarding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./on-boarding.page.scss */
      63809);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/shared-service/shared.service */
      49481);

      var _OnBoardingPage = /*#__PURE__*/function () {
        function OnBoardingPage(sharedService) {
          _classCallCheck(this, OnBoardingPage);

          this.sharedService = sharedService;
          this.pName = 'On Boarding';
        }

        _createClass(OnBoardingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onResize(window);
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.getScreenWidth = this.sharedService.resize(event);
          }
        }]);

        return OnBoardingPage;
      }();

      _OnBoardingPage.ctorParameters = function () {
        return [{
          type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService
        }];
      };

      _OnBoardingPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-on-boarding',
        template: _raw_loader_on_boarding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_on_boarding_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener)('window:resize', ['$event'])], _OnBoardingPage);
      /***/
    },

    /***/
    63809:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/home/hr/on-boarding/on-boarding.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbi1ib2FyZGluZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    90421:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hr/on-boarding/on-boarding.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content (window:resize)=\"onResize($event)\">\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n\n    <!-- <ion-list *ngIf=\"getScreenWidth < 768\"> -->\n    <!-- <ion-row>\n      <ion-col size-xl=\"12\" size-lg=\"12\" size-md=\"12\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n            <ion-card-title>Card Title</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            Keep close to Nature's heart... and break clear away, once in awhile,\n            and climb a mountain or spend a week in the woods. Wash your spirit clean.\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>ion-item in a card, icon left, button right</ion-label>\n            <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n          </ion-item>\n\n          <ion-card-content>\n            This is content, without any paragraph or header tags,\n            within an ion-card-content element.\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-item href=\"#\" class=\"ion-activated\">\n            <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n            <ion-label>Card Link Item 1 activated</ion-label>\n          </ion-item>\n\n          <ion-item href=\"#\">\n            <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n            <ion-label>Card Link Item 2</ion-label>\n          </ion-item>\n\n          <ion-item class=\"ion-activated\">\n            <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n            <ion-label>Card Button Item 1 activated</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n            <ion-label>Card Button Item 2</ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-sm=\"12\" size-xs=\"12\"> -->\n\n        <ngx-datatable class=\"material\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" rowHeight=\"auto\"\n          [externalPaging]=\"true\" *ngIf=\"getScreenWidth >= 768\">\n\n          <ngx-datatable-column name=\"Name\" [minWidth]=\"20\" [resizeable]=\"true\">\n            <ng-template ngx-datatable-cell-template>\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Position\" [minWidth]=\"20\" [resizeable]=\"true\">\n            <ng-template ngx-datatable-cell-template>\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Type\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Employee Bank Account Details\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Clothing Issue\" [minWidth]=\"20\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Medical Questionnaire\" [minWidth]=\"20\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Personal Details\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Authority to Release Personal Information\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Prescription Medication\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Superannuation Choice\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Tax File Number\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Assigned Licenses\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Other Forms\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"HORTS Induction\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Position Description\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n          <ngx-datatable-column name=\"Action\" [minWidth]=\"20\" [resizeable]=\"true\">\n          </ngx-datatable-column>\n\n        </ngx-datatable>\n      <!-- </ion-col> -->\n\n    <!-- </ion-row> -->\n    <!-- </ion-list> -->\n\n\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_hr_on-boarding_on-boarding_module_ts-es5.js.map