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


      var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-module/shared-module.module */
      69270);

      var _CraneAddFormPageModule = function CraneAddFormPageModule() {
        _classCallCheck(this, CraneAddFormPageModule);
      };

      _CraneAddFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _crane_add_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.CraneAddFormPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule],
        declarations: [_crane_add_form_page__WEBPACK_IMPORTED_MODULE_1__.CraneAddFormPage]
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


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
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
        function CraneAddFormPage(fb, alertService, globalService, toastService, loadingService, nav, activatedRoute) {
          _classCallCheck(this, CraneAddFormPage);

          this.fb = fb;
          this.alertService = alertService;
          this.globalService = globalService;
          this.toastService = toastService;
          this.loadingService = loadingService;
          this.nav = nav;
          this.activatedRoute = activatedRoute; // pName: String = 'Crane';

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
          this.form_percent = 0;
          this.url_id = '';
          this.craneData = [];
          this.form_percent_val = 0;
        }

        _createClass(CraneAddFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
            this.activatedRoute.params.subscribe(function (params) {
              _this.url_id = params['id'] != undefined ? params['id'] : '';

              if (_this.url_id != '' && _this.url_id != undefined) {
                _this.loadData(_this.url_id);
              }
            });
            this.craneForm = this.fb.group({
              crane_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              operate_crane: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              swi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              equipment_isolated: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              inspect_pendant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              inspect_control_operation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              directional_swl_sign: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              brakes_operational: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              limit_switches_operational: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hook: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              hoist_chain_rope: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              mechanically_sound: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              passed_inspection: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              comment: ['']
            });
          }
        }, {
          key: "onPassedInspection",
          value: function onPassedInspection(event) {
            if (event.detail.value == "No") {
              this.alertService.alert('Tag the crane out of service and report any abnormalities immediately to your supervisor.');
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(complete_status) {
            var _this2 = this;

            this.loadingService.presentLoading();
            var formData = {};
            formData = this.craneForm.value;
            formData['user_id'] = this.loggedInUser.id;
            formData['complete_status'] = complete_status;

            if (this.url_id != '' && this.url_id != undefined) {
              formData['id'] = this.craneData['id'];
            }

            var data = {
              formData: formData
            };
            this.globalService.postData('crane/submit', data).subscribe(function (result) {
              if (result && result['status']) {
                _this2.toastService.toast(result['message'], 'success');

                _this2.craneForm.reset();

                _this2.nav.back();
              } else {
                _this2.toastService.toast(result['message'], 'danger');
              }

              _this2.loadingService.dismissLoading();
            }, function (error) {
              _this2.loadingService.dismissLoading();

              console.log(error);
            });
          }
        }, {
          key: "onProgressBar",
          value: function onProgressBar(event) {
            var _this3 = this;

            this.content.scrollToPoint(0, this.myScrollContainer.nativeElement.scrollHeight, 6000);
            var count = 0;
            var formControlList = [];
            Object.keys(this.craneForm.controls).map(function (ele) {
              return formControlList.push(ele);
            });
            formControlList.forEach(function (key) {
              if (_this3.craneForm.value[key] && _this3.craneForm.value[key] != '') {
                count = ++count;
              }
            }); // this.form_percent = parseInt((((1 / Object.keys(this.craneForm.controls).length) * count) * 100).toExponential(2));

            this.form_percent = 1 / Object.keys(this.craneForm.controls).length * count;
            this.form_percent_val = parseInt((1 / Object.keys(this.craneForm.controls).length * count * 100).toFixed());
          }
        }, {
          key: "loadData",
          value: function loadData(id) {
            var _this4 = this;

            this.globalService.getData('add_form/getSingleData?table_name=crane&id=' + id).subscribe(function (result) {
              if (result && result['data'] && result['data'][0]) {
                _this4.craneData = result['data'][0];
                console.log('this.craneData', _this4.craneData);

                _this4.craneForm.patchValue(_this4.craneData);

                _this4.onProgressBar('');

                console.log('this.craneForm ', _this4.craneForm);
              }
            }), function (error) {
              console.log(error);
            };
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }];
      };

      _CraneAddFormPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, {
            "static": false
          }]
        }],
        myScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['target']
        }]
      };
      _CraneAddFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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


      __webpack_exports__["default"] = "<ion-content>\n  <!-- <app-header [pageName]=\"pName\"></app-header> -->\n\n  <div class=\"toolbar\">\n    <ion-text *ngIf=\"url_id == ''\">Crane</ion-text>\n    <ion-text *ngIf=\"url_id != ''\">Edit Crane</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"nav.back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class='saveBtn' (click)=\"onSubmit(0)\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div class=\"container\" #target>\n    <ion-row>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n      <ion-col size-xl=\"6\" size-lg=\"8\" size-md=\"8\" size-sm=\"12\" size-xs=\"12\">\n        <ion-card>\n          <div [formGroup]=\"craneForm\" (ionChange)=\"onProgressBar($event)\">\n            <ion-row>\n              <ion-item lines=\"none\">\n                <ion-label>Crane number :</ion-label>\n              </ion-item>\n            </ion-row>\n            <ion-row>\n              <ion-item lines=\"none\">\n                <ion-select placeholder=\"Please select crane no.\" interface=\"action-sheet\"\n                  formControlName=\"crane_number\">\n                  <ion-select-option value=\"{{craneNoKey?.id}}\" *ngFor=\"let craneNoKey of craneNoList\">\n                    {{craneNoKey?.name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-row>\n\n            <div *ngIf=\"craneForm.value['crane_number'] != ''\">\n              <ion-radio-group formControlName=\"operate_crane\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Are you fully qualified and trained to operate the crane ? </ion-label>\n                  </ion-col>\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <ion-text class=\"mandatoryField\">* If you are unsure contact your supervisor. </ion-text>\n            </div>\n\n            <div *ngIf=\"craneForm.value['operate_crane'] != ''\">\n              <ion-radio-group formControlName=\"swi\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Have you read and understood the relevant SWI for the equipment ? </ion-label>\n                  </ion-col>\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n            </div>\n\n            <div *ngIf=\"craneForm.value['swi'] != ''\">\n              <ion-radio-group formControlName=\"equipment_isolated\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Is the equipment isolated ? </ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <ion-text class=\"mandatoryField\">* Ensure there are no maintenance, lock-out tags or isolation procedures\n                in place. </ion-text>\n            </div>\n\n\n            <div *ngIf=\"craneForm.value['equipment_isolated'] != ''\">\n              <!-- <ion-radio-group formControlName=\"inspect_pendant\">\n                <ion-item lines=\"none\" size=\"12\">\n                  <ion-label>Inspect Pendant :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n              <ion-radio-group formControlName=\"inspect_pendant\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Inspect Pendant : </ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <ion-text class=\"mandatoryField\">* Ensure that you can identify each of the buttons on the pendant and\n                that they move freely without sticking.\n              </ion-text>\n            </div>\n\n            <div *ngIf=\"craneForm.value['inspect_pendant'] != ''\">\n\n              <!--  <ion-radio-group formControlName=\"inspect_control_operation\">\n                <ion-item lines=\"none\" size=\"12\">\n                  <ion-label> Inspect Control operation :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty </ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n              <ion-radio-group formControlName=\"inspect_control_operation\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Inspect Control operation : </ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <ion-text class=\"mandatoryField\">* Activate each directional button on the pendant control and ensure the\n                correct movement.</ion-text>\n            </div>\n\n            <div *ngIf=\"craneForm.value['inspect_control_operation'] != ''\">\n\n              <!-- <ion-radio-group formControlName=\"directional_swl_sign\">\n                <ion-item lines=\"none\" size=\"12\">\n                  <ion-label> Directional and SWL sign in place : </ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty </ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n              <ion-radio-group formControlName=\"directional_swl_sign\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Directional and SWL sign in place : </ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <ion-text class=\"mandatoryField\">* Ensure the directional and SWL sign is attached to the crane.\n              </ion-text>\n            </div>\n\n            <div *ngIf=\"(craneForm.value['crane_number'] == 'OHC01' || craneForm.value['crane_number'] == 'OHC02'\n      || craneForm.value['crane_number'] == 'OHC03') && craneForm.value['directional_swl_sign'] != ''\">\n\n              <!-- <ion-radio-group formControlName=\"brakes_operational\">\n                <ion-item lines=\"none\">\n                  <ion-label> Brakes operational :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty </ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n              <ion-radio-group formControlName=\"brakes_operational\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label> Brakes operational : </ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <ion-text class=\"mandatoryField\">* Drive and stop the crane a few times in each direction to check the\n                breaks\n                for adjustment and operation of the crane for the job.</ion-text>\n            </div>\n\n            <div *ngIf=\"craneForm.value['directional_swl_sign'] != ''\">\n              <!-- <ion-radio-group formControlName=\"limit_switches_operational\">\n                <ion-item lines=\"none\">\n                  <ion-label> Limit Switches operational :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty </ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n\n              <ion-radio-group formControlName=\"limit_switches_operational\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label> Limit Switches operational :</ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <ion-text class=\"mandatoryField\">* Test the operation of the working limit switches.</ion-text>\n            </div>\n\n            <div *ngIf=\"craneForm.value['limit_switches_operational'] != ''\">\n              <!-- <ion-radio-group formControlName=\"hook\">\n                <ion-item lines=\"none\">\n                  <ion-label> Hook :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty </ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n\n              <ion-radio-group formControlName=\"hook\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Hook :</ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <ion-text class=\"mandatoryField\">* Check the hook is fitted with a safety catch, make sure it is working\n                correctly.</ion-text>\n            </div>\n\n\n            <div *ngIf=\"craneForm.value['hook'] != ''\">\n              <!-- <ion-radio-group formControlName=\"hoist_chain_rope\">\n                <ion-item lines=\"none\">\n                  <ion-label> Hoist chain/rope :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty </ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n              <ion-radio-group formControlName=\"hoist_chain_rope\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label> Hoist chain/rope :</ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <ion-text class=\"mandatoryField\">* Inspect the hoist chain/ rope is free of kinks, wear, rust or damage.\n              </ion-text>\n            </div>\n\n            <div *ngIf=\"craneForm.value['hoist_chain_rope'] != ''\">\n              <!-- <ion-radio-group formControlName=\"mechanically_sound\">\n                <ion-item lines=\"none\">\n                  <ion-label> Mechanically Sound :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Faulty </ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n              <ion-radio-group formControlName=\"mechanically_sound\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label> Mechanically Sound :</ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Ok</ion-label>\n                      <ion-radio slot=\"start\" value=\"Ok\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Faulty</ion-label>\n                      <ion-radio slot=\"start\" value=\"Faulty\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n              <ion-text class=\"mandatoryField\">* Check for any obvious mechanical problems (undue noises, signs of\n                strain or\n                leaking oil).\n              </ion-text>\n            </div>\n\n            <div *ngIf=\"craneForm.value['mechanically_sound'] != ''\">\n              <!-- <ion-radio-group (ionChange)=\"onPassedInspection($event)\" formControlName=\"passed_inspection\">\n                <ion-item lines=\"none\">\n                  <ion-label> Passed Inspection :</ion-label>\n                </ion-item>\n                <ion-row>\n                  <ion-col size-md=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size-md=\"6\">\n                    <ion-item lines=\"none\">\n                      <ion-label>No </ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group> -->\n\n              <ion-radio-group (ionChange)=\"onPassedInspection($event)\" formControlName=\"passed_inspection\">\n                <ion-row>\n                  <ion-col size=\" 12\">\n                    <ion-label>Passed Inspection :</ion-label>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> Yes</ion-label>\n                      <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size-xs=\"12\">\n                    <ion-item lines=\"none\">\n                      <ion-label> No</ion-label>\n                      <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n\n              <ion-item lines=\"none\">\n                <ion-label> Comment : </ion-label>\n              </ion-item>\n\n              <ion-item lines=\"none\">\n                <ion-textarea placeholder=\"Enter Comment\" autoGrow=\"true\" formControlName=\"comment\">\n                </ion-textarea>\n              </ion-item>\n            </div>\n          </div>\n\n          <div class=\"progress-bar\">\n            <ion-row>\n              <ion-col size-xl=\"10\" size-lg=\"10\" size-md=\"10\" size-sm=\"9\" size-xs=\"9\">\n                Form progress bar\n              </ion-col>\n              <ion-col size-xl=\"2\" size-lg=\"2\" size-md=\"2\" size-sm=\"3\" size-xs=\"3\">\n                {{form_percent_val}}{{'%'}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-progress-bar [value]=\"form_percent\"></ion-progress-bar>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <ion-button *ngIf=\"url_id == '' && (form_percent_val == 100)\" (click)=\"onSubmit(1)\" class=\"btn\"\n            [disabled]=\"craneForm.invalid\">SUBMIT\n          </ion-button>\n\n          <ion-button *ngIf=\"url_id != ''  && (form_percent_val  == 100)\" (click)=\"onSubmit(1)\" class=\"btn\"\n            [disabled]=\"craneForm.invalid\">Update\n          </ion-button>\n        </ion-card>\n      </ion-col>\n      <ion-col size-xl=\"3\" size-lg=\"2\" size-md=\"2\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_crane_crane-add-form_crane-add-form_module_ts-es5.js.map