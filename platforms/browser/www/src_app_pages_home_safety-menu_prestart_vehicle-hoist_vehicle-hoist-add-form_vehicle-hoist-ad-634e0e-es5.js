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
        function VehicleHoistAddFormPage(alertCtrl, loadingService, toastService, navCtrl, fb, globalService, elementRef) {
          _classCallCheck(this, VehicleHoistAddFormPage);

          this.alertCtrl = alertCtrl;
          this.loadingService = loadingService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.fb = fb;
          this.globalService = globalService;
          this.elementRef = elementRef;
          this.pName = 'Vehicle Hoist';
          this.logedInUserDetails = '';
          this.showMsg = false;
          this.isSubmitted = false;
        }

        _createClass(VehicleHoistAddFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.logedInUserDetails = JSON.parse(localStorage.getItem('userDetails'));
            this.vehicleHoistForm = this.fb.group({
              vehicle_host_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              trained: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              inspection_certificate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              inspection_certificate_comment: [''],
              maintenance_instructions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              maintenance_instructions_comment: [''],
              data_plate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              data_plate_comment: [''],
              safty_devices: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              safty_devices_comment: [''],
              locks_latches: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              locks_latches_comment: [''],
              rubber_pad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              rubber_pad_comment: [''],
              safty_gaurds: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              safty_gaurds_comment: [''],
              hydraulic_connections: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hydraulic_connections_comment: [''],
              chain_cable_connection: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              chain_cable_connection_comment: [''],
              frayed_cables: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              frayed_cables_comment: [''],
              snap_rings: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              snap_rings_comment: [''],
              bolts_nuts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              bolts_nuts_comment: [''],
              electrical_switch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              electrical_switch_comment: [''],
              hoist_work_area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hoist_work_area_comment: [''],
              anchor_bolts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              anchor_bolts_comment: [''],
              swing_arm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              swing_arm_comment: [''],
              hoist_controls: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hoist_controls_comment: [''],
              comment: ['']
            }); // this.scrollToBottom();
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
          key: "onValueChange",
          value: function onValueChange(event, type) {
            this.content.scrollToBottom(500);

            if (type == 'inspection_certificate' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['inspection_certificate_comment'].reset();
            } else if (type == 'maintenance_instructions' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['maintenance_instructions_comment'].reset();
            } else if (type == 'data_plate' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['data_plate_comment'].reset();
            } else if (type == 'safty_devices' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['safty_devices_comment'].reset();
            } else if (type == 'locks_latches' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['locks_latches_comment'].reset();
            } else if (type == 'rubber_pad' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['rubber_pad_comment'].reset();
            } else if (type == 'safty_gaurds' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['safty_gaurds_comment'].reset();
            } else if (type == 'hydraulic_connections' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['hydraulic_connections_comment'].reset();
            } else if (type == 'chain_cable_connection' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['chain_cable_connection_comment'].reset();
            } else if (type == 'frayed_cables' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['frayed_cables_comment'].reset();
            } else if (type == 'snap_rings' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['snap_rings_comment'].reset();
            } else if (type == 'bolts_nuts' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['bolts_nuts_comment'].reset();
            } else if (type == 'electrical_switch' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['electrical_switch_comment'].reset();
            } else if (type == 'hoist_work_area' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['hoist_work_area_comment'].reset();
            } else if (type == 'anchor_bolts' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['anchor_bolts_comment'].reset();
            } else if (type == 'swing_arm' && event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['swing_arm_comment'].reset();
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.isSubmitted = true;

            if (this.vehicleHoistForm.valid) {
              if (this.vehicleHoistForm.value['inspection_certificate'] == 'Faulty' && this.vehicleHoistForm.value['inspection_certificate_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['maintenance_instructions'] == 'Faulty' && this.vehicleHoistForm.value['maintenance_instructions_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['data_plate'] == 'Faulty' && this.vehicleHoistForm.value['data_plate_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['safty_devices'] == 'Faulty' && this.vehicleHoistForm.value['safty_devices_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['locks_latches'] == 'Faulty' && this.vehicleHoistForm.value['locks_latches_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['rubber_pad'] == 'Faulty' && this.vehicleHoistForm.value['rubber_pad_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['safty_gaurds'] == 'Faulty' && this.vehicleHoistForm.value['safty_gaurds_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['hydraulic_connections'] == 'Faulty' && this.vehicleHoistForm.value['hydraulic_connections_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['chain_cable_connection'] == 'Faulty' && this.vehicleHoistForm.value['chain_cable_connection_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['frayed_cables'] == 'Faulty' && this.vehicleHoistForm.value['frayed_cables_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['snap_rings'] == 'Faulty' && this.vehicleHoistForm.value['snap_rings_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['bolts_nuts'] == 'Faulty' && this.vehicleHoistForm.value['bolts_nuts_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['electrical_switch'] == 'Faulty' && this.vehicleHoistForm.value['electrical_switch_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['hoist_work_area'] == 'Faulty' && this.vehicleHoistForm.value['hoist_work_area_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['anchor_bolts'] == 'Faulty' && this.vehicleHoistForm.value['anchor_bolts_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['swing_arm'] == 'Faulty' && this.vehicleHoistForm.value['swing_arm_comment'] == '') {
                return;
              } else if (this.vehicleHoistForm.value['hoist_controls'] == 'Faulty' && this.vehicleHoistForm.value['hoist_controls_comment'] == '') {
                return;
              } else {
                this.loadingService.presentLoading();
                var formData = {};
                formData = this.vehicleHoistForm.value;
                formData['user_name'] = this.logedInUserDetails.name;
                formData['date'] = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
                formData['time'] = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('HH:mm:ss');
                var val = {
                  'formData': formData
                };
                console.log('typeof', typeof val);
                this.globalService.postData('prestart_vehicle/add_prestart_vehicle', val).subscribe(function (result) {
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
            } else {
              console.log('Enter data in form'); // for (let key in this.vehicleHoistForm.controls) {
              //   if (this.vehicleHoistForm.controls.hasOwnProperty(key)) {
              //     let control: FormControl = <FormControl>this.vehicleHoistForm.controls[key];
              //     console.log('control', control);
              //     if () {
              //     } else {
              //     }
              //   }
              // }
            }
          }
        }, {
          key: "onHoistControlChange",
          value: function onHoistControlChange(event) {
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

            if (event.detail.value == 'OK') {
              this.vehicleHoistForm.controls['hoist_controls_comment'].reset();
            }
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
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
        }];
      };

      _VehicleHoistAddFormPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, {
            "static": false
          }]
        }]
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


      __webpack_exports__["default"] = ".space_bwt_words {\n  padding-right: 5px;\n}\n\nion-content {\n  height: 1200px;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtaG9pc3QtYWRkLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InZlaGljbGUtaG9pc3QtYWRkLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlX2J3dF93b3JkcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuIl19 */";
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


      __webpack_exports__["default"] = "<ion-content [scrollEvents]=\"true\">\n\n  <app-header [pageName]=\"pName\"></app-header>\n\n  <div class=\"container\">\n    <!-- </div> -->\n    <ion-card [formGroup]=\"vehicleHoistForm\">\n\n      <ion-radio-group formControlName=\"vehicle_host_no\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Vehicle Hoist number :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              VH01\n              <ion-radio slot=\"start\" value=\"VH01\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              VH02<ion-radio slot=\"start\" value=\"VH02\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-radio-group (ionChange)=\"onTrainedHoist($event)\" formControlName=\"trained\"\n        *ngIf=\"vehicleHoistForm.value['vehicle_host_no'] != ''\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span> Are you trained and competent to operate the vehicle\n              hoist\n              ? :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Yes<ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              No<ion-radio slot=\"start\" value=\"No\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-radio-group formControlName=\"inspection_certificate\" *ngIf=\"vehicleHoistForm.value['trained'] != ''\"\n        (ionChange)=\"onValueChange($event, 'inspection_certificate')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span> Certificate of inspection (Current) :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['inspection_certificate'] != '' && vehicleHoistForm.value['inspection_certificate'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"inspection_certificate_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['inspection_certificate'] == 'Faulty' && vehicleHoistForm.value['inspection_certificate_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"maintenance_instructions\"\n        *ngIf=\"vehicleHoistForm.value['inspection_certificate'] != ''\"\n        (ionChange)=\"onValueChange($event, 'maintenance_instructions')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span> Operating and Maintenance instructions, SWI (with hoist\n              HE-WHS-SWI-008) :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['maintenance_instructions'] != '' && vehicleHoistForm.value['maintenance_instructions'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"maintenance_instructions_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['maintenance_instructions'] == 'Faulty' && vehicleHoistForm.value['maintenance_instructions_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group #radio formControlName=\"data_plate\"\n        *ngIf=\"vehicleHoistForm.value['maintenance_instructions'] != ''\"\n        (ionChange)=\"onValueChange($event, 'data_plate')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span>Data plate, decals (attached/ readable) :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid *ngIf=\"vehicleHoistForm.value['data_plate'] != '' && vehicleHoistForm.value['data_plate'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"data_plate_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['data_plate'] == 'Faulty' && vehicleHoistForm.value['data_plate_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"safty_devices\" *ngIf=\"vehicleHoistForm.value['data_plate'] != ''\"\n        (ionChange)=\"onValueChange($event, 'safty_devices')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span> Safety devices are operational (including E-stop) :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['safty_devices'] != '' && vehicleHoistForm.value['safty_devices'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"safty_devices_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['safty_devices'] == 'Faulty' && vehicleHoistForm.value['safty_devices_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"locks_latches\" *ngIf=\"vehicleHoistForm.value['safty_devices'] != ''\"\n        (ionChange)=\"onValueChange($event, 'locks_latches')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span> Locks, latches (move freely. Fully engage) :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['locks_latches'] != '' && vehicleHoistForm.value['locks_latches'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"locks_latches_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['locks_latches'] == 'Faulty' && vehicleHoistForm.value['locks_latches_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"rubber_pad\" *ngIf=\"vehicleHoistForm.value['locks_latches'] != ''\"\n        (ionChange)=\"onValueChange($event, 'rubber_pad')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span> Rubber pads (attached, good condition on all load\n              points)\n              :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid *ngIf=\"vehicleHoistForm.value['rubber_pad'] != '' && vehicleHoistForm.value['rubber_pad'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"rubber_pad_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['rubber_pad'] == 'Faulty' && vehicleHoistForm.value['rubber_pad_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"safty_gaurds\" *ngIf=\"vehicleHoistForm.value['rubber_pad'] != ''\"\n        (ionChange)=\"onValueChange($event, 'safty_gaurds')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span> Safety guards (fitted, secure and operational) :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['safty_gaurds'] != '' && vehicleHoistForm.value['safty_gaurds'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"safty_gaurds_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['safty_gaurds'] == 'Faulty' && vehicleHoistForm.value['safty_gaurds_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"hydraulic_connections\" *ngIf=\"vehicleHoistForm.value['safty_gaurds'] != ''\"\n        (ionChange)=\"onValueChange($event, 'hydraulic_connections')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span>\n              Hydraulic connections, hoses (secure, no leaks) :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['hydraulic_connections'] != '' && vehicleHoistForm.value['hydraulic_connections'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"hydraulic_connections_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['hydraulic_connections'] == 'Faulty' && vehicleHoistForm.value['hydraulic_connections_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"chain_cable_connection\"\n        *ngIf=\"vehicleHoistForm.value['hydraulic_connections'] != ''\"\n        (ionChange)=\"onValueChange($event, 'chain_cable_connection')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Chain and cable\n              connections (Bends, cracks, lose links or looseness) :</ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['chain_cable_connection'] != '' && vehicleHoistForm.value['chain_cable_connection'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"chain_cable_connection_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['chain_cable_connection'] == 'Faulty' && vehicleHoistForm.value['chain_cable_connection_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"frayed_cables\" *ngIf=\"vehicleHoistForm.value['chain_cable_connection'] != ''\"\n        (ionChange)=\"onValueChange($event, 'frayed_cables')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Check for frayed cables\n              (raised and lowered position) :</ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['frayed_cables'] != '' && vehicleHoistForm.value['frayed_cables'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"frayed_cables_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['frayed_cables'] == 'Faulty' && vehicleHoistForm.value['frayed_cables_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"snap_rings\" *ngIf=\"vehicleHoistForm.value['frayed_cables'] != ''\"\n        (ionChange)=\"onValueChange($event, 'snap_rings')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Check snap rings at all\n              rollers and sheaves : </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid *ngIf=\"vehicleHoistForm.value['snap_rings'] != '' && vehicleHoistForm.value['snap_rings'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"snap_rings_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['snap_rings'] == 'Faulty' && vehicleHoistForm.value['snap_rings_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"bolts_nuts\" *ngIf=\"vehicleHoistForm.value['snap_rings'] != ''\"\n        (ionChange)=\"onValueChange($event, 'bolts_nuts')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Check bolts, nuts, screws\n              : </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK<ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty<ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid *ngIf=\"vehicleHoistForm.value['bolts_nuts'] != '' && vehicleHoistForm.value['bolts_nuts'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"bolts_nuts_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['bolts_nuts'] == 'Faulty' && vehicleHoistForm.value['bolts_nuts_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"electrical_switch\" *ngIf=\"vehicleHoistForm.value['bolts_nuts'] != ''\"\n        (ionChange)=\"onValueChange($event, 'electrical_switch')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Check wiring and\n              electrical switches for damage :</ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK\n              <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['electrical_switch'] != '' && vehicleHoistForm.value['electrical_switch'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"electrical_switch_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['electrical_switch'] == 'Faulty' && vehicleHoistForm.value['electrical_switch_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"hoist_work_area\" *ngIf=\"vehicleHoistForm.value['electrical_switch'] != ''\"\n        (ionChange)=\"onValueChange($event, 'hoist_work_area')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <span class=\"error\">* </span>Hoist and work area is free from grease, oil, corrosive\n              substances, slip and trip hazards :\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK\n              <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['hoist_work_area'] != '' && vehicleHoistForm.value['hoist_work_area'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"hoist_work_area_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['hoist_work_area'] == 'Faulty' && vehicleHoistForm.value['hoist_work_area_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"anchor_bolts\" *ngIf=\"vehicleHoistForm.value['hoist_work_area'] != ''\"\n        (ionChange)=\"onValueChange($event, 'anchor_bolts')\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Check floor for stress\n              cracks near anchor bolts :</ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK\n              <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['anchor_bolts'] != '' && vehicleHoistForm.value['anchor_bolts'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"anchor_bolts_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['anchor_bolts'] == 'Faulty' && vehicleHoistForm.value['anchor_bolts_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"swing_arm\" *ngIf=\"vehicleHoistForm.value['anchor_bolts'] != ''\"\n        (ionChange)=\"onValueChange($event, 'swing_arm')\">\n        <ion-row>\n          <ion-col size=\"12\">\n\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Check swing arm\n              restraints :</ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK\n              <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid *ngIf=\"vehicleHoistForm.value['swing_arm'] != '' && vehicleHoistForm.value['swing_arm'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"swing_arm_comment\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['swing_arm'] == 'Faulty' && vehicleHoistForm.value['swing_arm_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <ion-radio-group formControlName=\"hoist_controls\" *ngIf=\"vehicleHoistForm.value['swing_arm'] != ''\"\n        (ionChange)=\"onHoistControlChange($event)\">\n        <ion-row>\n          <ion-col size=\"12\">\n\n            <ion-item lines=\"none\"> <span class=\"error\">* </span> Test all hoist controls\n              and functions :</ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              OK\n              <ion-radio slot=\"start\" value=\"OK\"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              Faulty\n              <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n\n      <ion-grid\n        *ngIf=\"vehicleHoistForm.value['hoist_controls'] != '' && vehicleHoistForm.value['hoist_controls'] == 'Faulty'\">\n        <ion-row>\n          <span class=\"error\">* </span>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"hoist_controls_comment\">\n          </ion-textarea>\n        </ion-row>\n\n        <ion-row>\n          <span class=\"error\"\n            *ngIf=\"isSubmitted && vehicleHoistForm.value['hoist_controls'] == 'Faulty' && vehicleHoistForm.value['hoist_controls_comment'] == ''\">\n            Comment is required.\n          </span>\n        </ion-row>\n      </ion-grid>\n\n      <div *ngIf=\"showMsg\">\n        <p>\n          <ion-text color=\"danger\">By clicking the submit button below you are stating that you have done the safety\n            check on the (what ever equipment you are prestarting needs to go in here automatically) to the best of\n            you ability (best of your ability) and that all details in this inspection are true and correct at the\n            time of the inspection.</ion-text>\n        </p>\n        <p>\n          <ion-text color=\"tertiary\"> Your name, date and the time the inspection is submitted will also be added to\n            this report.</ion-text>\n        </p>\n      </div>\n\n      <ion-grid *ngIf=\"vehicleHoistForm.value['hoist_controls'] != ''\">\n        <ion-row>\n          <ion-label>Comment : </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-textarea placeholder=\"Enter Comment\" formControlName=\"comment\">\n          </ion-textarea>\n        </ion-row>\n      </ion-grid>\n\n      <ion-button class=\"btn\" (click)=\"onSubmit()\" [disabled]=\"vehicleHoistForm.invalid\">SUBMIT\n      </ion-button>\n\n      <!-- </ion-card-content> -->\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_vehicle-hoist_vehicle-hoist-add-form_vehicle-hoist-ad-634e0e-es5.js.map