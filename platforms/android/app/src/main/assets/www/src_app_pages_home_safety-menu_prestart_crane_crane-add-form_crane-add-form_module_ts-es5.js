(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_crane_crane-add-form_crane-add-form_module_ts"], {
    /***/
    82930:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form-routing.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CraneAddFormPageRoutingModule": function CraneAddFormPageRoutingModule() {
          return (
            /* binding */
            _CraneAddFormPageRoutingModule
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


      var _crane_add_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./crane-add-form.page */
      31040);

      var routes = [{
        path: '',
        component: _crane_add_form_page__WEBPACK_IMPORTED_MODULE_0__.CraneAddFormPage
      }];

      var _CraneAddFormPageRoutingModule = function CraneAddFormPageRoutingModule() {
        _classCallCheck(this, CraneAddFormPageRoutingModule);
      };

      _CraneAddFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CraneAddFormPageRoutingModule);
      /***/
    },

    /***/
    96614:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CraneAddFormPageModule": function CraneAddFormPageModule() {
          return (
            /* binding */
            _CraneAddFormPageModule
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


      var _crane_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./crane-add-form-routing.module */
      82930);
      /* harmony import */


      var _crane_add_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crane-add-form.page */
      31040);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _CraneAddFormPageModule = function CraneAddFormPageModule() {
        _classCallCheck(this, CraneAddFormPageModule);
      };

      _CraneAddFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _crane_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.CraneAddFormPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
        declarations: [_crane_add_form_page__WEBPACK_IMPORTED_MODULE_1__.CraneAddFormPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _CraneAddFormPageModule);
      /***/
    },

    /***/
    31040:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.page.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CraneAddFormPage": function CraneAddFormPage() {
          return (
            /* binding */
            _CraneAddFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_crane_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./crane-add-form.page.html */
      15044);
      /* harmony import */


      var _crane_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crane-add-form.page.scss */
      74671);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);
      /* harmony import */


      var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/toast-service/toast.service */
      45311);
      /* harmony import */


      var src_app_services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert-service/alert.service */
      96022);
      /* harmony import */


      var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/loading-service/loading.service */
      80513);

      var _CraneAddFormPage = /*#__PURE__*/function () {
        function CraneAddFormPage(fb, alertService, globalService, toastService, loadingService, nav) {
          _classCallCheck(this, CraneAddFormPage);

          this.fb = fb;
          this.alertService = alertService;
          this.globalService = globalService;
          this.toastService = toastService;
          this.loadingService = loadingService;
          this.nav = nav;
          this.pName = 'Crane';
          this.craneNoList = [{
            id: 'OHC01',
            name: 'OHC01'
          }, {
            id: 'OHC02',
            name: 'OHC02'
          }, {
            id: 'OHC03',
            name: 'OHC03'
          }, {
            id: 'JC01',
            name: 'JC01'
          }, {
            id: 'JC02',
            name: 'JC02'
          }, {
            id: 'JC03',
            name: 'JC03'
          }, {
            id: 'JC04',
            name: 'JC04'
          }, {
            id: 'JC05',
            name: 'JC05'
          }, {
            id: 'JC06',
            name: 'JC06'
          }];
        }

        _createClass(CraneAddFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.craneNoList);
            this.craneForm = this.fb.group({
              crane_number: [''],
              operate_crane: [''],
              swi: [''],
              equipment_isolated: [''],
              inspect_pendant: [''],
              inspect_control_operation: [''],
              directional_swl_sign: [''],
              brakes_operational: [''],
              limit_switches_operational: [''],
              hook: [''],
              hoist_chain_rope: [''],
              mechanically_sound: [''],
              passed_inspection: [''],
              comment: ['']
            });
          }
        }, {
          key: "onPassedInspection",
          value: function onPassedInspection(event) {
            console.log('event', event);

            if (event.detail.value == "No") {
              this.alertService.alert('Tag the crane out of service and report any abnormalities immediately to your supervisor.');
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.loadingService.presentLoading();
            var data = {
              'formData': this.craneForm.value
            };
            this.globalService.postData('crane/submit', data).subscribe(function (result) {
              if (result && result['status']) {
                _this.toastService.toast(result['message'], 'success');

                _this.craneForm.reset();

                _this.nav.back();
              } else {
                _this.toastService.toast(result['message'], 'danger');
              }

              _this.loadingService.dismissLoading();
            }, function (error) {
              _this.loadingService.dismissLoading();

              console.log(error);
            });
          }
        }]);

        return CraneAddFormPage;
      }();

      _CraneAddFormPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: src_app_services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
        }, {
          type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _CraneAddFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-crane-add-form',
        template: _raw_loader_crane_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crane_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CraneAddFormPage);
      /***/
    },

    /***/
    80513:
    /*!*************************************************************!*\
      !*** ./src/app/services/loading-service/loading.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
        }

        _createClass(LoadingService, [{
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoadingService);
      /***/
    },

    /***/
    74671:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.page.scss ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmFuZS1hZGQtZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    15044:
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/crane/crane-add-form/crane-add-form.page.html ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card [formGroup]=\"craneForm\">\n\n      <!-- <ion-grid class=\"progress-bar\">\n        <ion-progress-bar [type]=\"'determinate'\" [value]=\"form_percent\"></ion-progress-bar>\n      </ion-grid> -->\n\n      <ion-grid>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label>Crane number :</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-select placeholder=\"Please select crane no.\" interface=\"action-sheet\" formControlName=\"crane_number\">\n              <ion-select-option value=\"{{craneNoKey?.id}}\" *ngFor=\"let craneNoKey of craneNoList\">{{craneNoKey?.name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"operate_crane\">\n            <ion-item lines=\"none\">\n              <ion-label>Are you fully qualified and trained to operate the crane ?</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>No</ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-text class=\"mandatoryField\">* If you are unsure contact your supervisor. </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"swi\">\n            <ion-item lines=\"none\">\n              <ion-label>Have you read and understood the relevant SWI for the equipment ? </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>No </ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"equipment_isolated\">\n            <ion-item lines=\"none\">\n              <ion-label>Is the equipment isolated ? </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Ensure there are no maintenance, lock-out tags or isolation procedures in\n          place. </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"inspect_pendant\">\n            <ion-item lines=\"none\">\n              <ion-label>Inspect Pendant :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty</ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-text class=\"mandatoryField\">* Ensure that you can identify each of the buttons on the pendant and that they\n          move freely without sticking.\n        </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"inspect_control_operation\">\n            <ion-item lines=\"none\">\n              <ion-label> Inspect Control operation :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Activate each directional button on the pendant control and ensure the\n          correct\n          movement.</ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"directional_swl_sign\">\n            <ion-item lines=\"none\">\n              <ion-label> Directional and SWL sign in place : </ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Ensure the directional and SWL sign is attached to the crane.</ion-text>\n\n        <div *ngIf=\"craneForm.value['crane_number'] == 'OHC01' || craneForm.value['crane_number'] == 'OHC02'\n      || craneForm.value['crane_number'] == 'OHC03'\">\n          <ion-row>\n            <ion-radio-group formControlName=\"brakes_operational\">\n              <ion-item lines=\"none\">\n                <ion-label> Brakes operational :</ion-label>\n              </ion-item>\n              <ion-row>\n                <ion-col size-md=\"6\" size-lg=\"4\">\n                  <ion-item lines=\"none\">\n                    <ion-label> Ok</ion-label>\n                    <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size-md=\"6\" size-lg=\"4\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Faulty </ion-label>\n                    <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </ion-row>\n          <ion-text class=\"mandatoryField\">* Drive and stop the crane a few times in each direction to check the breaks\n            for adjustment and operation of the crane for the job.</ion-text>\n        </div>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"limit_switches_operational\">\n            <ion-item lines=\"none\">\n              <ion-label> Limit Switches operational :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Test the operation of the working limit switches.</ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"hook\">\n            <ion-item lines=\"none\">\n              <ion-label> Hook :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Check the hook is fitted with a safety catch, make sure it is working\n          correctly.</ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"hoist_chain_rope\">\n            <ion-item lines=\"none\">\n              <ion-label> Hoist chain/rope :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Inspect the hoist chain/ rope is free of kinks, wear, rust or damage.\n        </ion-text>\n\n        <ion-row>\n          <ion-radio-group formControlName=\"mechanically_sound\">\n            <ion-item lines=\"none\">\n              <ion-label> Mechanically Sound :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Ok</ion-label>\n                  <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>Faulty </ion-label>\n                  <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n        <ion-text class=\"mandatoryField\">* Check for any obvious mechanical problems (undue noises, signs of strain or\n          leaking oil).\n        </ion-text>\n\n        <ion-row>\n          <ion-radio-group (ionChange)=\"onPassedInspection($event)\" formControlName=\"passed_inspection\">\n            <ion-item lines=\"none\">\n              <ion-label> Passed Inspection :</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label> Yes</ion-label>\n                  <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size-md=\"6\" size-lg=\"4\">\n                <ion-item lines=\"none\">\n                  <ion-label>No </ion-label>\n                  <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n        </ion-row>\n\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-label> Comment : </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"comment\">\n            </ion-textarea>\n          </ion-item>\n        </ion-row>\n\n      </ion-grid>\n      <ion-button (click)=\"onSubmit()\" class=\"btn\">SUBMIT</ion-button>\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_crane_crane-add-form_crane-add-form_module_ts-es5.js.map