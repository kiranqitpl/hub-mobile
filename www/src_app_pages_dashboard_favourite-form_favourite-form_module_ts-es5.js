(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_dashboard_favourite-form_favourite-form_module_ts"], {
    /***/
    22872:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/dashboard/favourite-form/favourite-form-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavouriteFormPageRoutingModule": function FavouriteFormPageRoutingModule() {
          return (
            /* binding */
            _FavouriteFormPageRoutingModule
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


      var _favourite_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favourite-form.page */
      82522);

      var routes = [{
        path: '',
        component: _favourite_form_page__WEBPACK_IMPORTED_MODULE_0__.FavouriteFormPage
      }];

      var _FavouriteFormPageRoutingModule = function FavouriteFormPageRoutingModule() {
        _classCallCheck(this, FavouriteFormPageRoutingModule);
      };

      _FavouriteFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FavouriteFormPageRoutingModule);
      /***/
    },

    /***/
    94565:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/dashboard/favourite-form/favourite-form.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavouriteFormPageModule": function FavouriteFormPageModule() {
          return (
            /* binding */
            _FavouriteFormPageModule
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


      var _favourite_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favourite-form-routing.module */
      22872);
      /* harmony import */


      var _favourite_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favourite-form.page */
      82522);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _FavouriteFormPageModule = function FavouriteFormPageModule() {
        _classCallCheck(this, FavouriteFormPageModule);
      };

      _FavouriteFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _favourite_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouriteFormPageRoutingModule],
        declarations: [_favourite_form_page__WEBPACK_IMPORTED_MODULE_1__.FavouriteFormPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _FavouriteFormPageModule);
      /***/
    },

    /***/
    82522:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/dashboard/favourite-form/favourite-form.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavouriteFormPage": function FavouriteFormPage() {
          return (
            /* binding */
            _FavouriteFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_favourite_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./favourite-form.page.html */
      47136);
      /* harmony import */


      var _favourite_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favourite-form.page.scss */
      71073);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/shared-service/shared.service */
      49481);

      var _FavouriteFormPage = /*#__PURE__*/function () {
        function FavouriteFormPage(sharedService) {
          _classCallCheck(this, FavouriteFormPage);

          this.sharedService = sharedService;
          this.pName = "Favourite form";
        }

        _createClass(FavouriteFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRemoveFavorite",
          value: function onRemoveFavorite(tabname) {
            this.sharedService.prestartMenu.filter(function (ele) {
              if (ele.menuName == tabname) {
                ele.favorite = false;
              }
            });
          }
        }]);

        return FavouriteFormPage;
      }();

      _FavouriteFormPage.ctorParameters = function () {
        return [{
          type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService
        }];
      };

      _FavouriteFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-favourite-form',
        template: _raw_loader_favourite_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favourite_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FavouriteFormPage);
      /***/
    },

    /***/
    71073:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/dashboard/favourite-form/favourite-form.page.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvdXJpdGUtZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    47136:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/favourite-form/favourite-form.page.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <span *ngFor=\"let tabVal of sharedService.prestartMenu\">\n      <ion-button class=\"btn\" *ngIf=\"tabVal.favorite == true\">\n        <ion-row>\n          <ion-col size-lg=\"10\" size-md=\"10\" size-sm=\"10\" size-xl=\"10\" size-xs=\"10\" [routerLink]=\"tabVal.route\">\n            {{tabVal.menuName}}\n          </ion-col>\n          <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\" title=\"Remove from favorite\"\n            (click)=\"onRemoveFavorite(tabVal.menuName)\">\n            <ion-icon name=\"heart\" class=\"favorite\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-button>\n    </span>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_favourite-form_favourite-form_module_ts-es5.js.map