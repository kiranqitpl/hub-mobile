(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_actions_actions_module_ts"], {
    /***/
    39471:
    /*!*********************************************************!*\
      !*** ./src/app/pages/actions/actions-routing.module.ts ***!
      \*********************************************************/

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
      84554);

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
    78840:
    /*!*************************************************!*\
      !*** ./src/app/pages/actions/actions.module.ts ***!
      \*************************************************/

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


      var _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions-routing.module */
      39471);
      /* harmony import */


      var _actions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions.page */
      84554);

      var _ActionsPageModule = function ActionsPageModule() {
        _classCallCheck(this, ActionsPageModule);
      };

      _ActionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionsPageRoutingModule],
        declarations: [_actions_page__WEBPACK_IMPORTED_MODULE_1__.ActionsPage]
      })], _ActionsPageModule);
      /***/
    },

    /***/
    84554:
    /*!***********************************************!*\
      !*** ./src/app/pages/actions/actions.page.ts ***!
      \***********************************************/

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


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_actions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./actions.page.html */
      96626);
      /* harmony import */


      var _actions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions.page.scss */
      36052);
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global.service */
      97465);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

      var _ActionsPage = /*#__PURE__*/function () {
        function ActionsPage(nav, global) {
          _classCallCheck(this, ActionsPage);

          this.nav = nav;
          this.global = global;
          this.description_of_required_action = '';
          this.priority = '';
          this.expected_completion = '';
          this.data = [];
        }

        _createClass(ActionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userRole = this.global.user;
            this.gmRole = this.global.gm;
            this.investigatorRole = this.global.investigator;
            this.managerRole = this.global.manager;
            this.supervisorRole = this.global.supervisior;
            this.role = localStorage.getItem("role");
            var ar = [];
            var d = JSON.parse(localStorage.getItem("singleView"));
            this.incident_id = d.id;
            this.global.getData("api/user/getAllUser").subscribe(function (success) {
              if (success) {
                success.data.forEach(function (user) {
                  if (user.role == _this.gmRole) {
                    ar.push(user);
                    console.log(ar);
                    _this.data = ar;
                  }
                });
              }
            }, function (err) {
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
              var d = JSON.parse(localStorage.getItem("singleView"));
              this.incident_id = d.id;
              this.global.presentLoading();
              this.global.getData("api/Investigator/getInvestigationAction").subscribe(function (res) {
                var _a;

                if (res) {
                  (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.forEach(function (el) {
                    if (el.incident_id == _this2.incident_id) {
                      _this2.description_of_required_action = el.description_of_required_action;
                      _this2.user_name = el.user_name;
                      _this2.user_id = el.user_id;
                      _this2.priority = el.priority;
                      _this2.expected_completion = el.expected_completion;
                      _this2.id = el.id;

                      _this2.global.dismissLoading();
                    } else {
                      _this2.global.dismissLoading();
                    }
                  });
                }
              }, function (err) {
                console.log("res", err);

                _this2.global.dismissLoading();
              });
            } else {}
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
              if (el.full_name == e.detail.value) {
                _this3.user_id = el.id;
              }
            });
          }
        }, {
          key: "dateSelect",
          value: function dateSelect(e) {
            this.expected_completion = moment__WEBPACK_IMPORTED_MODULE_3__(e.detail.value).format("YYYY-MM-DD");
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            if (this.description_of_required_action == '') {
              this.global.presentToast("Please enter description of required action");
            } else if (this.user_id == '' || this.user_id == undefined) {
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
              fd.append('user_id', this.user_id);
              fd.append("user_name", this.user_name);
              fd.append("priority", this.priority);
              fd.append("expected_completion", this.expected_completion);
              fd.append("description_of_required_action", this.description_of_required_action);
              fd.append("investigator_id", localStorage.getItem("id"));
              this.global.postData("api/Investigator/InvestigationAction", fd).subscribe(function (res) {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }];
      };

      _ActionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-actions',
        template: _raw_loader_actions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ActionsPage);
      /***/
    },

    /***/
    36052:
    /*!*************************************************!*\
      !*** ./src/app/pages/actions/actions.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-label {\n  white-space: normal;\n}\nion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: var(--ion-color-primary-contrast);\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n  padding-bottom: 0px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 21px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .btnView {\n  margin-top: 100px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 7px;\n  color: #313131;\n  font-size: 16px;\n}\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .questionHead {\n  font-family: mon-black;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n}\nion-content ion-radio {\n  margin-right: 7px;\n}\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\nion-content ion-col {\n  padding: 0;\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\nion-content .question {\n  font-size: 14px !important;\n  color: black;\n}\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\nion-content ion-select {\n  width: 100%;\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\nion-content ion-input {\n  margin-top: -13px;\n  margin-left: -9px;\n  background: var(--ion-color-primary-contrast);\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\nion-content .btnSubmit {\n  margin: 0;\n  height: 44px;\n  font-family: \"mon-medium\";\n  text-transform: capitalize;\n  font-size: 16px;\n}\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n.login-btn {\n  width: 100%;\n  font-family: \"mon-bold\";\n  color: var(--ion-color-primary-contrast);\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,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O0VBQ0EsbUJBQUE7QUFQSjtBQVNFO0VBQ0UsaUJBQUE7QUFQSjtBQVNFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQVBKO0FBU0U7RUFDRSx5QkFBQTtBQVBKO0FBU0U7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQVBKO0FBVUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQU5GIiwiZmlsZSI6ImFjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuICAudG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzJweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMnB4O1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLmxvZ28ge1xuICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgfVxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5wdXQtZGl2IHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG4gIC5iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDI5cHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibHVlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuYnRuVmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbiAgLnBsdXMge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5pbmNpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA3cHg7XG4gICAgICBjb2xvcjogIzMxMzEzMTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuICAucXVlc3Rpb25IZWFkIHtcbiAgICBmb250LWZhbWlseTogbW9uLWJsYWNrO1xuICB9XG4gIC5hY3RpdmVCYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgY29sb3I6ICMzMTMxMzE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oZWFkZXJUaXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDMzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5yYSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgfVxuICB9XG4gIGlvbi1yYWRpbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIH1cbiAgaW9uLWNoZWNrYm94IHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBociB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIGlvbi1yYWRpbyB7XG4gICAgLS1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIH1cbiAgLnF1ZXN0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogbW9uLW1lZGl1bTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG5cbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcblxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcbiAgICBtYXJnaW4tbGVmdDogLTlweDtcblxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5sYWJlbEN1c3RvbURyb3BEb3duIHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgfVxuICAuY2FtZXJhIHtcbiAgICBmb250LWZhbWlseTogbW9uLW1lZGl1bTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIGlvbi1kYXRldGltZSB7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICB9XG4gIGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmJ0blN1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uaW1nLXJlc3BvbnNpdmUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubG9naW4tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    96626:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actions/actions.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Actions</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"container\">\n  <div class=\"ion-padding-start ion-padding-end\">\n    <div>\n      <p class=\"question\">\n        Description of Required Action\n      </p>\n      <ion-input placeholder=\"Enter here\" [(ngModel)]=\"description_of_required_action\"></ion-input>\n    </div>\n    <hr/>\n    <p class=\"question\">\n      Allocated to\n    </p>\n    <ion-item class=\"ra ion-no-margin ion-no-padding\" lines=\"none\">\n      <ion-select placeholder=\"Select One\" interface=\"action-sheet\" [(ngModel)]=\"user_name\" (ionChange)=\"selectUser($event)\">\n        <ion-select-option value=\"{{item?.full_name}}\" *ngFor=\"let item of data\">\n          <p>{{item?.full_name}}</p>\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <hr/>\n    <p class=\"question\">\n      Priority\n    </p>\n    <ion-radio-group [(ngModel)]=\"priority\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"4\" class=\"ion-no-padding\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Minor</ion-label>\n            <ion-radio slot=\"start\" value=\"Minor\"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-no-padding\">\n          <ion-item class=\"ra\" lines=\"none\">\n            <ion-label>Major</ion-label>\n            <ion-radio slot=\"start\" value=\"Major\"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <hr/>\n    <p class=\"question\">\n      Expected completion\n    </p>\n    <ion-item class=\"ra\" lines=\"none\">\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select date\" (ionChange)=\"dateSelect($event)\" [(ngModel)]=\"expected_completion\">\n      </ion-datetime>\n    </ion-item>\n    <hr/>\n  </div>\n  </div>\n    <ion-button class=\"login-btn\" type=\"submit\" (click)=\"onSubmit()\" *ngIf=\"isFrom=='add'\">\n      SUBMIT\n    </ion-button>\n    <ion-button class=\"login-btn\" type=\"submit\" (click)=\"onSubmit()\" *ngIf=\"isFrom=='edit'\">\n      UPDATE\n    </ion-button>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_actions_actions_module_ts-es5.js.map