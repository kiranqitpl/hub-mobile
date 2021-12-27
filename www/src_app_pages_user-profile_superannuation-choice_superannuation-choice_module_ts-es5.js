(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_user-profile_superannuation-choice_superannuation-choice_module_ts"], {
    /***/
    97742:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice-routing.module.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuperannuationChoicePageRoutingModule": function SuperannuationChoicePageRoutingModule() {
          return (
            /* binding */
            _SuperannuationChoicePageRoutingModule
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


      var _superannuation_choice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./superannuation-choice.page */
      11606);

      var routes = [{
        path: '',
        component: _superannuation_choice_page__WEBPACK_IMPORTED_MODULE_0__.SuperannuationChoicePage
      }];

      var _SuperannuationChoicePageRoutingModule = function SuperannuationChoicePageRoutingModule() {
        _classCallCheck(this, SuperannuationChoicePageRoutingModule);
      };

      _SuperannuationChoicePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SuperannuationChoicePageRoutingModule);
      /***/
    },

    /***/
    97519:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuperannuationChoicePageModule": function SuperannuationChoicePageModule() {
          return (
            /* binding */
            _SuperannuationChoicePageModule
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


      var _superannuation_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./superannuation-choice-routing.module */
      97742);
      /* harmony import */


      var _superannuation_choice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./superannuation-choice.page */
      11606);
      /* harmony import */


      var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-module/shared-module.module */
      69270);

      var _SuperannuationChoicePageModule = function SuperannuationChoicePageModule() {
        _classCallCheck(this, SuperannuationChoicePageModule);
      };

      _SuperannuationChoicePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _superannuation_choice_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuperannuationChoicePageRoutingModule, src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule],
        declarations: [_superannuation_choice_page__WEBPACK_IMPORTED_MODULE_1__.SuperannuationChoicePage]
      })], _SuperannuationChoicePageModule);
      /***/
    },

    /***/
    11606:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice.page.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuperannuationChoicePage": function SuperannuationChoicePage() {
          return (
            /* binding */
            _SuperannuationChoicePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_superannuation_choice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./superannuation-choice.page.html */
      76342);
      /* harmony import */


      var _superannuation_choice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./superannuation-choice.page.scss */
      36385);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SuperannuationChoicePage = /*#__PURE__*/function () {
        function SuperannuationChoicePage() {
          _classCallCheck(this, SuperannuationChoicePage);

          this.pName = 'Superannuation Choice';
          this.paidTo = '';
        }

        _createClass(SuperannuationChoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuperannuationChoicePage;
      }();

      _SuperannuationChoicePage.ctorParameters = function () {
        return [];
      };

      _SuperannuationChoicePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-superannuation-choice',
        template: _raw_loader_superannuation_choice_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_superannuation_choice_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SuperannuationChoicePage);
      /***/
    },

    /***/
    36385:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/user-profile/superannuation-choice/superannuation-choice.page.scss ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcmFubnVhdGlvbi1jaG9pY2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    76342:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/superannuation-choice/superannuation-choice.page.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n    <ion-row>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n      <ion-col size-xl=\"6\" size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size-xs=\"12\">\n\n        <ion-card>\n\n          <ion-radio-group [(ngModel)]=\"paidTo\">\n            <ion-item lines=\"none\" size=\"12\">\n              <ion-label class=\"ion-text-wrap\">I request all of my future super contributions to be paid to :\n              </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">The APRA fund or retirement saving account (RSA) I nominate\n                  </ion-label>\n                  <ion-radio slot=\"start\" value=\"RSA\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">The self-managed super fund (SMSF) I nominate</ion-label>\n                  <ion-radio slot=\"start\" value=\"SMSF\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xs=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">The super fund nominated by my emploper</ion-label>\n                  <ion-radio slot=\"start\" value=\"emploper\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <ion-item class=\"ion-text-wrap text-val\">\n            Your name and tax file number will be collected from other forms.\n          </ion-item>\n\n        </ion-card>\n\n        <ion-card *ngIf=\"paidTo == 'RSA'\">\n          <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"heading\">\n                Nominating your APRA fund\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-text-wrap text-val\">\n                You will need current details from your APRA regulated fund or RSA to complete this item.\n              </ion-label>\n            </ion-col>\n          </ion-row> -->\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"lable-text\"> Fund ABN</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Fund ABN\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Fund Name</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Fund Name\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Fund Address</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-textarea placeholder=\"Please enter Fund Address\"></ion-textarea>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Suburb/Town </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Suburb/Town\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> State</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter State\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Postcode</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Postcode\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Fund Phone</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input inputmode=\"tel\" placeholder=\"Please enter Fund Phone\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Unique Superannuation Identifier (USI)</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Unique Superannuation Identifier\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Your Account Name (if applicable)</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Your Account Name\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Your Member Number (if applicable)</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Your Member Number\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Attach Compliance Letter</ion-label>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-text-wrap mandatoryField\">* You need to attach a letter from your\n                fund stating that they are a complying fund and that they will\n                accept contributions from your employer. Correct information about your super fund is needed for your\n                employer to pay super contributions. Your super fund will provide this upon request.\n              </ion-label>\n            </ion-col>\n\n\n            <ion-col size=\"12\">\n              <ion-input type=\"file\"></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox color=\"primary\"></ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              I have completed this form.\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button (click)=\"onSubmit()\" class=\"btn\">SUBMIT</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-card *ngIf=\"paidTo == 'SMSF'\">\n          <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"heading\">\n                Nominating your RSA fund\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-text-wrap text-val\">\n                You will need current details from your APRA regulated fund or RSA to complete this item.\n              </ion-label>\n            </ion-col>\n          </ion-row> -->\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"lable-text\"> Fund ABN</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Fund ABN\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Fund Name</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Fund Name\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Fund Address</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-textarea placeholder=\"Please enter Fund Address\"></ion-textarea>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Suburb/Town </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Suburb/Town\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> State</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter State\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label> Postcode</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Postcode\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Fund Phone</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input inputmode=\"tel\" placeholder=\"Please enter Fund Phone\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Fund electronic service address (ESA)</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Fund electronic service address (ESA)\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>BSB Code(please include all six numbers)</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter BSB Code\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Account Number</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Account Number\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-text-wrap mandatoryField\">* You need to attach a document confirming SMSF is an ATO\n                regulated super fund. You can located and print a copy of the compliance status for your SMSF by\n                searching using the ABN or fund name in the Super Fund Lookup service at\n                <ion-router-link href=\"https://superfundlookup.gov.au/\" target=\"_blank\" class=\"underline\">\n                  https://superfundlookup.gov.au/</ion-router-link>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-text-wrap mandatoryField\">* If you are the turstee, or a director of the corporate\n                trustee you can confirm that your SMSF will accpet contribution from your employer by making the\n                following declaration :\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-label> Attach ATO Compliance Document</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input type=\"file\"></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n            </ion-col>\n          </ion-row>\n\n          <ion-radio-group>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">I am the trustee, or a director of the corporate trustee of the SMSF\n                    and I declare that the SMSF will accept contributions from my employer.\n                  </ion-label>\n                  <ion-radio slot=\"start\" value=\"RSA\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\">\n                  <ion-label class=\"ion-text-wrap\">I am neither the trustee nor a director of the corporte trustee of\n                    the SMSF.</ion-label>\n                  <ion-radio slot=\"start\" value=\"SMSF\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"ion-text-wrap mandatoryField\">* If you are the trustee, or a director of the corporate\n                trustee of the SMSF, then you must attach a letter from the trustee confirming that the fund will accept\n                contributions from your employer.\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-label>Attach Confirmation Letter</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input type=\"file\"></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox color=\"primary\"></ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              I have completed this form.\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button (click)=\"onSubmit()\" class=\"btn\">SUBMIT</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-card *ngIf=\"paidTo == 'emploper'\">\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"lable-text\">Super Fund Name</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Super Fund Name\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Unique Superannuation Identifire (USI)</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Unique Superannuation Identifire (USI) \"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Phone (for the product disclosure statement for this\n                fund)</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Phone\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Super Fund Website Address</ion-label>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-input placeholder=\"Please enter Super Fund Website Address\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox color=\"primary\"></ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              I have completed this form.\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button (click)=\"onSubmit()\" class=\"btn\">SUBMIT</ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n\n\n      </ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_user-profile_superannuation-choice_superannuation-choice_module_ts-es5.js.map