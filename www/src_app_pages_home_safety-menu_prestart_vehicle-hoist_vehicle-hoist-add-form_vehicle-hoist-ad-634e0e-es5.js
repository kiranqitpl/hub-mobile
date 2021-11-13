(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-hoist-add-form_vehicle-hoist-ad-634e0e"], {
    /***/
    55453:
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form-routing.module.ts ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleHoistAddFormPageRoutingModule": function VehicleHoistAddFormPageRoutingModule() {
          return (
            /* binding */
            _VehicleHoistAddFormPageRoutingModule
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


      var _vehicle_hoist_add_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-hoist-add-form.page */
      92383);

      var routes = [{
        path: '',
        component: _vehicle_hoist_add_form_page__WEBPACK_IMPORTED_MODULE_0__.VehicleHoistAddFormPage
      }];

      var _VehicleHoistAddFormPageRoutingModule = function VehicleHoistAddFormPageRoutingModule() {
        _classCallCheck(this, VehicleHoistAddFormPageRoutingModule);
      };

      _VehicleHoistAddFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VehicleHoistAddFormPageRoutingModule);
      /***/
    },

    /***/
    79496:
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.module.ts ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleHoistAddFormPageModule": function VehicleHoistAddFormPageModule() {
          return (
            /* binding */
            _VehicleHoistAddFormPageModule
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


      var _vehicle_hoist_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vehicle-hoist-add-form-routing.module */
      55453);
      /* harmony import */


      var _vehicle_hoist_add_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vehicle-hoist-add-form.page */
      92383);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _VehicleHoistAddFormPageModule = function VehicleHoistAddFormPageModule() {
        _classCallCheck(this, VehicleHoistAddFormPageModule);
      };

      _VehicleHoistAddFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _vehicle_hoist_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleHoistAddFormPageRoutingModule],
        declarations: [_vehicle_hoist_add_form_page__WEBPACK_IMPORTED_MODULE_1__.VehicleHoistAddFormPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _VehicleHoistAddFormPageModule);
      /***/
    },

    /***/
    92383:
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.page.ts ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VehicleHoistAddFormPage": function VehicleHoistAddFormPage() {
          return (
            /* binding */
            _VehicleHoistAddFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_vehicle_hoist_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vehicle-hoist-add-form.page.html */
      96024);
      /* harmony import */


      var _vehicle_hoist_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vehicle-hoist-add-form.page.scss */
      90401);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);
      /* harmony import */


      var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/loading-service/loading.service */
      80513);
      /* harmony import */


      var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/toast-service/toast.service */
      45311);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

      var _VehicleHoistAddFormPage = /*#__PURE__*/function () {
        function VehicleHoistAddFormPage(alertCtrl, loadingService, toastService, navCtrl, fb, globalService) {
          _classCallCheck(this, VehicleHoistAddFormPage);

          this.alertCtrl = alertCtrl;
          this.loadingService = loadingService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.fb = fb;
          this.globalService = globalService;
          this.pName = 'Vehicle Hoist';
          this.logedInUserName = '';
          this.showMsg = false;
        }

        _createClass(VehicleHoistAddFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logedInUserName = localStorage.getItem('name');
            this.vehicleHoistForm = this.fb.group({
              vehicle_host_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              trained: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              inspection_certificate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              maintenance_instructions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              data_plate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              safty_devices: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              locks_latches: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              rubber_pad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              safty_gaurds: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hydraulic_connections: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              chain_cable_connection: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              frayed_cables: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              snap_rings: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              bolts_nuts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              electrical_switch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hoist_work_area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              anchor_bolts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              swing_arm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hoist_controls: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            });
          }
        }, {
          key: "alert",
          value: function alert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'alert-msg',
                        header: 'Alert Message',
                        backdropDismiss: false,
                        message: 'STOP you can cannot conduct a prestart on this piece of equipment until you have been trained and deemed competent, you must see your supervisor.',
                        buttons: [{
                          text: 'Ok',
                          role: 'Ok',
                          handler: function handler() {
                            _this.navCtrl.back();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onTrainedHoist",
          value: function onTrainedHoist(event) {
            if (event.detail.value == 'No') {
              this.alert();
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.loadingService.presentLoading();
            var formData = {};
            formData = this.vehicleHoistForm.value;
            formData['user_name'] = this.logedInUserName;
            formData['date'] = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
            formData['time'] = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('HH:mm:ss');
            this.globalService.postData1('prestart_vehicle/add_prestart_vehicle', formData).subscribe(function (result) {
              if (result && result['status']) {
                _this2.navCtrl.back();

                _this2.toastService.toast(result['message'], 'success');
              } else {
                _this2.toastService.toast(result['message'], 'danger');
              }

              _this2.loadingService.dismissLoading();
            }, function (error) {
              _this2.loadingService.dismissLoading();

              console.log('error', error);
            });
          }
        }, {
          key: "onHoistControlChange",
          value: function onHoistControlChange() {
            var count = 0;
            Object.values(this.vehicleHoistForm.value).forEach(function (key) {
              if (key == 'Faulty') {
                count++;
              }
            });

            if (count > 0) {
              this.showMsg = true;
            } else {
              this.showMsg = false;
            }

            console.log('count', count);
          }
        }]);

        return VehicleHoistAddFormPage;
      }();

      _VehicleHoistAddFormPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }];
      };

      _VehicleHoistAddFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-vehicle-hoist-add-form',
        template: _raw_loader_vehicle_hoist_add_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vehicle_hoist_add_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VehicleHoistAddFormPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
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
    90401:
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.page.scss ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlLWhvaXN0LWFkZC1mb3JtLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    96024:
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.page.html ***!
      \*************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <app-header [pageName]=\"pName\"></app-header>\n\n  <div class=\"container\" [formGroup]=\"vehicleHoistForm\">\n\n    <ion-card>\n      <ion-card-content>\n        <ion-radio-group formControlName=\"vehicle_host_no\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Vehicle Hoist number :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                VH01<ion-radio slot=\"start\" value=\"VH01\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                VH02<ion-radio slot=\"start\" value=\"VH02\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group (ionChange)=\"onTrainedHoist($event)\" formControlName=\"trained\"\n          *ngIf=\"vehicleHoistForm.value['vehicle_host_no'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Are you trained and competent to operate the vehicle hoist ? :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Yes<ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                No<ion-radio slot=\"start\" value=\"No\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"inspection_certificate\" *ngIf=\"vehicleHoistForm.value['trained'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Certificate of inspection (Current) :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"maintenance_instructions\"\n          *ngIf=\"vehicleHoistForm.value['inspection_certificate'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Operating and Maintenance instructions, SWI (with hoist HE-WHS-SWI-008) :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"data_plate\" *ngIf=\"vehicleHoistForm.value['maintenance_instructions'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">Data plate, decals (attached/ readable) :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"safty_devices\" *ngIf=\"vehicleHoistForm.value['data_plate'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Safety devices are operational (including E-stop) :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"locks_latches\" *ngIf=\"vehicleHoistForm.value['safty_devices'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Locks, latches (move freely. Fully engage) :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"rubber_pad\" *ngIf=\"vehicleHoistForm.value['locks_latches'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Rubber pads (attached, good condition on all load points) :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"safty_gaurds\" *ngIf=\"vehicleHoistForm.value['rubber_pad'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Safety guards (fitted, secure and operational) :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"hydraulic_connections\" *ngIf=\"vehicleHoistForm.value['safty_gaurds'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Hydraulic connections, hoses (secure, no leaks) :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"chain_cable_connection\"\n          *ngIf=\"vehicleHoistForm.value['hydraulic_connections'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Chain and cable connections (Bends, cracks, lose links or looseness) :\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"frayed_cables\" *ngIf=\"vehicleHoistForm.value['chain_cable_connection'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Check for frayed cables (raised and lowered position) :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"snap_rings\" *ngIf=\"vehicleHoistForm.value['frayed_cables'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Check snap rings at all rollers and sheaves : </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"bolts_nuts\" *ngIf=\"vehicleHoistForm.value['snap_rings'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Check bolts, nuts, screws : </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"electrical_switch\" *ngIf=\"vehicleHoistForm.value['bolts_nuts'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Check wiring and electrical switches for damage :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK\n                <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"hoist_work_area\" *ngIf=\"vehicleHoistForm.value['electrical_switch'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Hoist and work area is free from grease, oil, corrosive substances,\n                slip and trip hazards :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK\n                <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"anchor_bolts\" *ngIf=\"vehicleHoistForm.value['hoist_work_area'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Check floor for stress cracks near anchor bolts :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK\n                <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"swing_arm\" *ngIf=\"vehicleHoistForm.value['anchor_bolts'] != ''\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Check swing arm restraints :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK\n                <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <ion-radio-group formControlName=\"hoist_controls\" *ngIf=\"vehicleHoistForm.value['swing_arm'] != ''\"\n          (ionChange)=\"onHoistControlChange()\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item class=\"ra\" lines=\"none\"> Test all hoist controls and functions :</ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                OK\n                <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"ra\" lines=\"none\">\n                Faulty\n                <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n\n        <div *ngIf=\"showMsg\">\n          <p>\n            <ion-text color=\"danger\">By clicking the submit button\n              below you are stating that you have done\n              the safety check on the fork truck to the best of you ability and that all details in this inspection are\n              true and correct at the time of the inspection.</ion-text>\n          </p>\n          <p>\n            <ion-text color=\"tertiary\"> Your name, date and the time the inspection is submitted will also be added to\n              this report.</ion-text>\n          </p>\n        </div>\n\n        <ion-button class=\"btn\" (click)=\"onSubmit()\" [disabled]=\"vehicleHoistForm.invalid\">SUBMIT\n        </ion-button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-hoist-add-form_vehicle-hoist-ad-634e0e-es5.js.map