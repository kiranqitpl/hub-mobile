(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_investigator_investigation-view_investigation-view_module_ts"], {
    /***/
    49858:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation-view/investigation-view-routing.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvestigationViewPageRoutingModule": function InvestigationViewPageRoutingModule() {
          return (
            /* binding */
            _InvestigationViewPageRoutingModule
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


      var _investigation_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./investigation-view.page */
      7805);

      var routes = [{
        path: '',
        component: _investigation_view_page__WEBPACK_IMPORTED_MODULE_0__.InvestigationViewPage
      }];

      var _InvestigationViewPageRoutingModule = function InvestigationViewPageRoutingModule() {
        _classCallCheck(this, InvestigationViewPageRoutingModule);
      };

      _InvestigationViewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InvestigationViewPageRoutingModule);
      /***/
    },

    /***/
    67078:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation-view/investigation-view.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvestigationViewPageModule": function InvestigationViewPageModule() {
          return (
            /* binding */
            _InvestigationViewPageModule
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


      var _investigation_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./investigation-view-routing.module */
      49858);
      /* harmony import */


      var _investigation_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./investigation-view.page */
      7805);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _InvestigationViewPageModule = function InvestigationViewPageModule() {
        _classCallCheck(this, InvestigationViewPageModule);
      };

      _InvestigationViewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _investigation_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvestigationViewPageRoutingModule],
        declarations: [_investigation_view_page__WEBPACK_IMPORTED_MODULE_1__.InvestigationViewPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _InvestigationViewPageModule);
      /***/
    },

    /***/
    7805:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation-view/investigation-view.page.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvestigationViewPage": function InvestigationViewPage() {
          return (
            /* binding */
            _InvestigationViewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_investigation_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./investigation-view.page.html */
      36110);
      /* harmony import */


      var _investigation_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./investigation-view.page.scss */
      93439);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/global-service/global.service */
      89985);

      var _InvestigationViewPage = /*#__PURE__*/function () {
        function InvestigationViewPage(nav, activatedRoute, globalService) {
          _classCallCheck(this, InvestigationViewPage);

          this.nav = nav;
          this.activatedRoute = activatedRoute;
          this.globalService = globalService;
          this.pName = "Investigation";
        }

        _createClass(InvestigationViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            // this.globalService.presentLoading();
            this.activatedRoute.params.subscribe(function (params) {
              _this.globalService.getData('api/investigator/getInvestigationFormByID/' + params['investigation_id']).subscribe(function (result) {
                if (result['status']) {
                  _this.data = result['data'][0];
                } else {
                  console.log("error");
                } // this.globalService.dismissLoading();

              }), function (error) {
                // this.globalService.dismissLoading();
                console.log("error", error);
              }; // this.globalService.dismissLoading();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.nav.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// let d = JSON.parse(localStorage.getItem("singleView"));
            // this.data = d.investigation_details;
          }
        }]);

        return InvestigationViewPage;
      }();

      _InvestigationViewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }];
      };

      _InvestigationViewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-investigation-view',
        template: _raw_loader_investigation_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_investigation_view_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InvestigationViewPage);
      /***/
    },

    /***/
    89985:
    /*!***********************************************************!*\
      !*** ./src/app/services/global-service/global.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalService": function GlobalService() {
          return (
            /* binding */
            _GlobalService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _GlobalService = /*#__PURE__*/function () {
        function GlobalService(toastController, http, loadingController) {
          _classCallCheck(this, GlobalService);

          this.toastController = toastController;
          this.http = http;
          this.loadingController = loadingController;
          this.baseUrl = 'https://mforms-api-devel.horts.com.au/';
          this.baseUrl1 = 'https://mforms-api-devel.horts.com.au/api/'; //Role 

          this.user = "31";
          this.gm = "32";
          this.investigator = "33";
          this.manager = "34";
          this.supervisior = "35";
          this.formType_user = 1;
          this.formType_investigator = 2;
        }

        _createClass(GlobalService, [{
          key: "presentToast",
          value: function presentToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        mode: "ios",
                        color: "dark"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "toast",
          value: function toast(msg, type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        // mode: "ios",
                        color: type,
                        animated: true
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.dismiss();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setHeader",
          value: function setHeader() {
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('apikey', 'as*37486a*()HGY').set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Headers", "*").set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS").set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); // if (localStorage.getItem("token") && localStorage.getItem("token") != "")
            //   header.append("token", localStorage.getItem("token"));

            return header;
          }
        }, {
          key: "getData",
          value: function getData(url) {
            var headers = this.setHeader();
            return this.http.get(this.baseUrl + url, {
              headers: headers
            });
          }
        }, {
          key: "postData",
          value: function postData(url, data) {
            var headers = this.setHeader();
            return this.http.post(this.baseUrl + url, data, {
              headers: headers
            });
          } // --------------------------------------------------New Services ---------------------------------------------//

        }, {
          key: "postData1",
          value: function postData1(url, data) {
            var headers = this.setHeader();
            return this.http.post(this.baseUrl1 + url, data, {
              headers: headers
            });
          }
        }, {
          key: "getData1",
          value: function getData1(url) {
            var headers = this.setHeader();
            return this.http.get(this.baseUrl1 + url, {
              headers: headers
            }); // return this.http.get(this.baseUrl1 + url, { headers: headers }).pipe(
            //   map((response) => {
            //     console.log('response', response);
            //     if (!response['status']) {
            //       throw new Error('Value expected!');
            //     }
            //     response;
            //   }),
            //   catchError(() => of())
            // );
          }
        }]);

        return GlobalService;
      }();

      _GlobalService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
        }];
      };

      _GlobalService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _GlobalService); // ---------------------------------------------  New Services --------------------------------------------------//

      /***/
    },

    /***/
    93439:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/investigator/investigation-view/investigation-view.page.scss ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .headerTitle {\n  font-family: \"mon-bold\";\n  font-size: 17px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdGlnYXRpb24tdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiaW52ZXN0aWdhdGlvbi12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmhlYWRlclRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    36110:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/investigator/investigation-view/investigation-view.page.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-content>\n        <!-- <div class=\"ion-padding-start ion-padding-end \"> -->\n\n          <div class=\"headerTitle\">\n           Investigation team members\n          </div>\n          <p class=\"question\">Name</p>\n          <p class=\"value\">{{data?.investigator_name}}</p>\n\n          <p class=\"question\">Date Investigation Commenced</p>\n          <p class=\"value\">{{data?.date_investigation_commenced}}</p>\n          <p class=\"question\">Reportable Incident - Statutory Body</p>\n          <p class=\"value\">{{data?.reportable_incident}}</p>\n          <hr />\n          <div class=\"headerTitle\">\n            Sequence of events\n          </div>\n          <p class=\"question\">Pre Incident Contributing Events</p>\n          <p class=\"value\">{{data?.pre_incident_contributing_events}}</p>\n\n          <p class=\"question\">Post Incident Events</p>\n          <p class=\"value\">{{data?.post_incident_events}}</p>\n\n          <p class=\"question\">Other Contributing Event Factors</p>\n          <p class=\"value\">{{data?.other_contributing_event_factors}}</p>\n\n          <p class=\"question\">Critical Controls Applicable For Task</p>\n          <p class=\"value\">{{data?.critical_controls_applicable_for_task}}</p>\n\n          <hr />\n          <div class=\"headerTitle\">\n            Investigators Initial Findings (Event Factors)\n          </div>\n\n          <p class=\"question\">Workplace Conditions</p>\n          <p class=\"value\">{{data?.workplace_conditions}}</p>\n\n          <p class=\"question\">Work and People Practices</p>\n          <p class=\"value\">{{data?.work_and_people_practices}}</p>\n\n          <p class=\"question\">Employee Competence</p>\n          <p class=\"value\">{{data?.employee_competence}}</p>\n\n          <p class=\"question\">Experience</p>\n          <p class=\"value\">{{data?.experience}}</p>\n\n          <p class=\"question\">Plant, Equipment Or Tooling Involve In Incident</p>\n          <p class=\"value\">{{data?.plant_equipment_or_tooling_involve_in_incident}}</p>\n\n          <p class=\"question\">Relevant Documentation</p>\n          <p class=\"value\">{{data?.relevant_documentation}}</p>\n\n          <p class=\"question\">Environmental Related Factors</p>\n          <p class=\"value\">{{data?.environmental_related_factors}}</p>\n\n          <p class=\"question\">Critical control Defence Failure / Absent / Non-Compliance</p>\n          <p class=\"value\">{{data?.critical_control_defence_failure_absent_non_compliance}}</p>\n          <hr />\n\n          <div class=\"headerTitle\">\n            Immediate Cause Analysis\n          </div>\n          <p class=\"question\">What Substandard Acts / Practices And Conditions Caused or Could Cause the Incident</p>\n          <p class=\"value\">{{data?.what_substandard_acts_practices_and_conditions_caused_or_could}}</p>\n          <p class=\"question\">What Systems / Personal Factors Caused or Could Cause The Incident</p>\n          <p class=\"value\">{{data?.what_systems_personal_factors_caused_or_could_cause_the_incident}} </p>\n          <hr />\n          <div class=\"headerTitle\">\n            Investigation Team Conclusion of Incident Causes\n          </div>\n          <p class=\"question\">Root Cause</p>\n          <p class=\"value\">{{data?.root_cause}}</p>\n          <p class=\"question\">Key Learnings</p>\n          <p class=\"value\">{{data?.key_earnings}}</p>\n\n          <p class=\"question\">Comments</p>\n          <p class=\"value\">{{data?.comments}}</p>\n\n          <p class=\"question\">Is a Safety, Environmental or Quality Alert Required?</p>\n          <p class=\"value\">{{data?.is_a_safety_environmental_or_quality_alert_required}}</p>\n\n          <hr />\n          <div class=\"headerTitle\">\n            Additional Investigation\n          </div>\n          <p class=\"question\">Additional Investigation Required</p>\n          <p class=\"value\">{{data?.additional_investigation_required}}</p>\n\n          <p class=\"question\">Type</p>\n          <p class=\"value\">{{data?.type}}</p>\n          <hr />\n        <!-- </div> -->\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_investigator_investigation-view_investigation-view_module_ts-es5.js.map