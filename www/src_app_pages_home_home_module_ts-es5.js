(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_home_module_ts"], {
    /***/
    96610:
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
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


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      10678);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }, {
        path: 'safety-menu',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_home_safety-menu_safety-menu_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../pages/home/safety-menu/safety-menu.module */
          37050)).then(function (m) {
            return m.SafetyMenuPageModule;
          });
        }
      }, {
        path: 'hr',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_home_hr_hr_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./hr/hr.module */
          17330)).then(function (m) {
            return m.HrPageModule;
          });
        }
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    57994:
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      10678);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      96610);
      /* harmony import */


      var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-module/shared-module.module */
      69270);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    10678:
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      78102);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      17603);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(nav) {
          _classCallCheck(this, HomePage);

          this.nav = nav;
          this.pName = 'Home';
          this.menu = [{
            menuName: "Admin",
            route: "#"
          }, {
            // menuName: "HR", route: "/home/hr/on-boarding"
            menuName: "HR",
            route: "#"
          }, {
            menuName: "Projects",
            route: "#"
          }, {
            menuName: "Workshops",
            route: "#"
          }, {
            menuName: "Safety",
            route: "/home/safety-menu"
          }];
        }

        _createClass(HomePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.nav.navigateRoot("login");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    17603:
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    78102:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xl=\"6\" size-xs=\"12\">\n        <div class=\"btnView\">\n          <ion-button class=\"btn\" *ngFor=\"let tabVal of menu\" [routerLink]=\"tabVal.route\">\n            {{tabVal.menuName}}\n          </ion-button>\n        </div>\n      </ion-col>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_home_module_ts-es5.js.map