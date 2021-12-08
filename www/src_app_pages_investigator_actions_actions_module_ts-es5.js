(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_investigator_actions_actions_module_ts"], {
    /***/
    48325:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/investigator/actions/actions-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionsPageRoutingModule": function ActionsPageRoutingModule() {
          return (
            /* binding */
            _ActionsPageRoutingModule
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


      var _actions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions.page */
      40390);

      var routes = [{
        path: '',
        component: _actions_page__WEBPACK_IMPORTED_MODULE_0__.ActionsPage
      }];

      var _ActionsPageRoutingModule = function ActionsPageRoutingModule() {
        _classCallCheck(this, ActionsPageRoutingModule);
      };

      _ActionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ActionsPageRoutingModule);
      /***/
    },

    /***/
    99230:
    /*!**************************************************************!*\
      !*** ./src/app/pages/investigator/actions/actions.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionsPageModule": function ActionsPageModule() {
          return (
            /* binding */
            _ActionsPageModule
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


      var _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions-routing.module */
      48325);
      /* harmony import */


      var _actions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions.page */
      40390);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _ActionsPageModule = function ActionsPageModule() {
        _classCallCheck(this, ActionsPageModule);
      };

      _ActionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionsPageRoutingModule],
        declarations: [_actions_page__WEBPACK_IMPORTED_MODULE_1__.ActionsPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _ActionsPageModule);
      /***/
    },

    /***/
    40390:
    /*!************************************************************!*\
      !*** ./src/app/pages/investigator/actions/actions.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionsPage": function ActionsPage() {
          return (
            /* binding */
            _ActionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_actions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./actions.page.html */
      20251);
      /* harmony import */


      var _actions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions.page.scss */
      34398);
      /* harmony import */


      var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/global-service/global.service */
      89985);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/loading-service/loading.service */
      80513);

      var _ActionsPage = /*#__PURE__*/function () {
        //------------------------------------------------------------ Form Variables ---------------------------------------------------------------//
        function ActionsPage(nav, global, loadingService) {
          _classCallCheck(this, ActionsPage);

          this.nav = nav;
          this.global = global;
          this.loadingService = loadingService;
          this.pName = "Actions";
          this.data = []; //------------------------------------------------------------ Form Variables ---------------------------------------------------------------//

          this.description_of_required_action = '';
          this.priority = '';
          this.expected_completion = '';
          this.loggedInUser = '';
        }

        _createClass(ActionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
            var d = JSON.parse(localStorage.getItem("singleView"));
            this.incident_id = d.id;
            this.loadEmp();
          }
        }, {
          key: "loadEmp",
          value: function loadEmp() {
            var _this = this;

            this.loadingService.presentLoading();
            this.global.getData("user/getAllUser").subscribe(function (result) {
              if (result && result.data) {
                _this.data = result.data;
              }

              _this.loadingService.dismissLoading();

              console.log('this.data ', _this.data);
            }, function (err) {
              _this.loadingService.dismissLoading();

              console.log(err);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            var isOpenFrom = localStorage.getItem("isActionsForm");
            this.isFrom = isOpenFrom;

            if (isOpenFrom == 'edit') {
              var d = JSON.parse(localStorage.getItem("singleView")); // this.incident_id = d.id;
              // this.global.presentLoading();

              console.log('  this.incident_id ', this.incident_id);
              this.global.getData("Investigator/getInvestigationAction/" + this.loggedInUser['id']).subscribe(function (res) {
                var _a;

                console.log('getInvestigationAction 1', res);

                if (res) {
                  (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.forEach(function (el) {
                    console.log('getInvestigationAction 2', el);

                    if (el.incident_id == _this2.incident_id) {
                      console.log('here');
                      _this2.description_of_required_action = el.description_of_required_action; // this.user_name = el.user_name;

                      _this2.user_name = el.user_id;
                      _this2.priority = el.priority;
                      _this2.expected_completion = el.expected_completion;
                      _this2.id = el.id; // this.global.dismissLoading();

                      console.log(' this.id ', _this2.id);
                    }
                  });
                }
              }, function (err) {
                console.log("res", err); // this.global.dismissLoading();
              });
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.nav.back();
          }
        }, {
          key: "selectUser",
          value: function selectUser(e) {
            var _this3 = this;

            this.data.forEach(function (el) {
              if (el.employee_id == e.detail.value) {
                _this3.user_id = el.full_name;
              }
            });
          }
        }, {
          key: "dateSelect",
          value: function dateSelect(e) {
            this.expected_completion = moment__WEBPACK_IMPORTED_MODULE_3___default()(e.detail.value).format("YYYY-MM-DD");
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            var userDetails = JSON.parse(localStorage.getItem("userDetails"));

            if (this.description_of_required_action == '') {
              this.global.presentToast("Please enter description of required action");
            } else if (this.user_name == '') {
              this.global.presentToast("Please Select User");
            } else if (this.priority == '') {
              this.global.presentToast("Please select the priority");
            } else if (this.expected_completion == '') {
              this.global.presentToast("Please enter expected completion");
            } else {
              this.global.presentLoading();
              var fd = new FormData();
              if (this.isFrom == 'edit') fd.append("id", this.id);
              fd.append("incident_id", this.incident_id);
              fd.append('user_id', this.user_name);
              fd.append("user_name", this.user_id);
              fd.append("priority", this.priority);
              fd.append("expected_completion", this.expected_completion);
              fd.append("description_of_required_action", this.description_of_required_action);
              fd.append("investigator_id", userDetails.id);
              this.global.postData("Investigator/InvestigationAction", fd).subscribe(function (res) {
                if (res.status) {
                  _this4.global.presentToast(res.message);

                  _this4.global.dismissLoading();

                  _this4.nav.back();
                } else {
                  _this4.global.dismissLoading();
                }
              }, function (err) {
                console.log(err);

                _this4.global.dismissLoading();
              });
            }
          }
        }]);

        return ActionsPage;
      }();

      _ActionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: src_app_services_loading_service_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }];
      };

      _ActionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-actions',
        template: _raw_loader_actions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ActionsPage);
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
    34398:
    /*!**************************************************************!*\
      !*** ./src/app/pages/investigator/actions/actions.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb25zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    20251:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/investigator/actions/actions.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-content>\n        <div class=\"ion-padding-start ion-padding-end \">\n          <p class=\"question\">\n            Description of Required Action\n          </p>\n          <ion-input placeholder=\"Enter here\" [(ngModel)]=\"description_of_required_action\"></ion-input>\n\n          <p class=\"question\">Allocated to</p>\n          <ion-item class=\"ra ion-no-margin ion-no-padding\" lines=\"none\">\n            <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"user_name\"\n              (ionChange)=\"selectUser($event)\">\n              <ion-select-option value=\"{{item?.employee_id}}\" *ngFor=\"let item of data\">\n                <p>{{item?.full_name}}</p>\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <p class=\"question\">Priority</p>\n          <ion-radio-group [(ngModel)]=\"priority\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col size=\"4\" class=\"ion-no-padding\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Minor</ion-label>\n                  <ion-radio slot=\"start\" value=\"Minor\"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\" class=\"ion-no-padding\">\n                <ion-item class=\"ra\" lines=\"none\">\n                  <ion-label>Major</ion-label>\n                  <ion-radio slot=\"start\" value=\"Major\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n\n          <p class=\"question\">Expected completion</p>\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event)\"\n              [(ngModel)]=\"expected_completion\">\n            </ion-datetime>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-button class=\"btn\" type=\"submit\" (click)=\"onSubmit()\" *ngIf=\"isFrom=='add'\">\n      SUBMIT\n    </ion-button>\n    <ion-button class=\"btn\" type=\"submit\" (click)=\"onSubmit()\" *ngIf=\"isFrom=='edit'\">\n      UPDATE\n    </ion-button>\n\n\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_investigator_actions_actions_module_ts-es5.js.map