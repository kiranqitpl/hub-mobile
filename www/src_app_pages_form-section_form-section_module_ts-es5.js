(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_form-section_form-section_module_ts"], {
    /***/
    63081:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/form-section/form-section-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormSectionPageRoutingModule": function FormSectionPageRoutingModule() {
          return (
            /* binding */
            _FormSectionPageRoutingModule
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


      var _form_section_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-section.page */
      88990);

      var routes = [{
        path: '',
        component: _form_section_page__WEBPACK_IMPORTED_MODULE_0__.FormSectionPage
      }];

      var _FormSectionPageRoutingModule = function FormSectionPageRoutingModule() {
        _classCallCheck(this, FormSectionPageRoutingModule);
      };

      _FormSectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FormSectionPageRoutingModule);
      /***/
    },

    /***/
    73786:
    /*!***********************************************************!*\
      !*** ./src/app/pages/form-section/form-section.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormSectionPageModule": function FormSectionPageModule() {
          return (
            /* binding */
            _FormSectionPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _form_section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-section-routing.module */
      63081);
      /* harmony import */


      var _form_section_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-section.page */
      88990);

      var _FormSectionPageModule = function FormSectionPageModule() {
        _classCallCheck(this, FormSectionPageModule);
      };

      _FormSectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _form_section_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormSectionPageRoutingModule],
        declarations: [_form_section_page__WEBPACK_IMPORTED_MODULE_1__.FormSectionPage]
      })], _FormSectionPageModule);
      /***/
    },

    /***/
    88990:
    /*!*********************************************************!*\
      !*** ./src/app/pages/form-section/form-section.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormSectionPage": function FormSectionPage() {
          return (
            /* binding */
            _FormSectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_form_section_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./form-section.page.html */
      11618);
      /* harmony import */


      var _form_section_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-section.page.scss */
      98591);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global.service */
      97465);

      var _FormSectionPage = /*#__PURE__*/function () {
        function FormSectionPage(nav, global) {
          _classCallCheck(this, FormSectionPage);

          this.nav = nav;
          this.global = global;
          this.data = [];
          this.data = ["Admin", "Company", "Projects", "Workshops", "WHSE"];
        }

        _createClass(FormSectionPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.global.dismissLoading();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.nav.back();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "next",
          value: function next(item) {
            if (item == "WHSE") {
              this.nav.navigateForward("incident-type");
            }
          }
        }]);

        return FormSectionPage;
      }();

      _FormSectionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }];
      };

      _FormSectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-section',
        template: _raw_loader_form_section_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_section_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FormSectionPage);
      /***/
    },

    /***/
    97465:
    /*!********************************************!*\
      !*** ./src/app/services/global.service.ts ***!
      \********************************************/

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
          this.baseUrl = 'https://mforms-api-devel.horts.com.au/'; // https://mforms-api-devel.horts.com.au/
          //Role 

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
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'apikey': 'as*37486a*()HGY'
            });
            header.set("Access-Control-Allow-Origin", "*");
            header.set("Content-Type", "application/json");
            header.set("Access-Control-Allow-Headers", "*");
            header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
            header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

            if (localStorage.getItem("token")) {
              header.set("token", localStorage.getItem("token"));
            }

            return header;
          }
        }, {
          key: "getData",
          value: function getData(url) {
            // let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
            // header.set("Access-Control-Allow-Origin", "*");
            // header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
            // header.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            var headers = this.setHeader();
            return this.http.get(this.baseUrl + url, {
              headers: headers
            });
          }
        }, {
          key: "postData",
          value: function postData(url, data) {
            // let header = new HttpHeaders({ 'apikey': 'as*37486a*()HGY' });
            // header.set("Access-Control-Allow-Origin", "*");
            // header.set("Content-Type", "application/json");
            // header.set("Access-Control-Allow-Headers", "*")
            // header.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
            // header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
            var headers = this.setHeader();
            return this.http.post(this.baseUrl + url, data, {
              headers: headers
            });
          }
        }, {
          key: "postDataWithId",
          value: function postDataWithId(url, data) {
            // let header = new HttpHeaders();
            // header.set("token", localStorage.getItem("token"));
            var headers = this.setHeader();
            return this.http.post(this.baseUrl + url, data, {
              headers: headers
            });
          }
        }, {
          key: "getDataWithId",
          value: function getDataWithId(url) {
            // let header = new HttpHeaders();
            // header.set("token", localStorage.getItem("token"));
            // header.set("apikey", "as*37486a*()HGY")
            var headers = this.setHeader();
            return this.http.get(this.baseUrl + url, {
              headers: headers
            });
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
      })], _GlobalService);
      /***/
    },

    /***/
    98591:
    /*!***********************************************************!*\
      !*** ./src/app/pages/form-section/form-section.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 21px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content .btnView {\n  margin-top: 40px;\n}\nion-content .addForm {\n  align-items: center;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px;\n  border: 2px dashed #c3c3c3;\n  border-radius: 20px;\n  margin: 7px;\n  margin-top: 65px;\n}\nion-content .addF {\n  font-family: \"mon-bold\";\n  font-size: 17px;\n  text-transform: capitalize;\n  color: var(--black-color);\n}\nion-content .logouts {\n  margin-top: 80px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tc2VjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0k7RUFDRSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSx3QkFBQTtBQUNOO0FBQU07RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQU07RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFDSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFFRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUVFO0VBQ0ksbUJBQUE7RUFDRixrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVFO0VBQ0ksMkJBQUE7QUFBTiIsImZpbGUiOiJmb3JtLXNlY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAudG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzJweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAubG9nbyB7XG4gICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICB9XG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW4tYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgLmlucHV0LWRpdiB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgfVxuICAuYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAyOXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICB9XG4gIC5idG5WaWV3e1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgLmFkZEZvcm17XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNjM2MzYzM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IDdweDtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICB9XG4gIC5hZGRGe1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gIH1cbiAgLmxvZ291dHN7XG4gICAgICBtYXJnaW4tdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    11618:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-section/form-section.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Sections</ion-text>\n    <ion-buttons class='back'>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"container\">\n    <div class=\"btnView\">\n      <ion-button class=\"login-btn\" *ngFor=\"let item of data\" (click)=\"next(item)\">\n        {{item}}\n      </ion-button>\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_form-section_form-section_module_ts-es5.js.map