(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_actions-view_actions-view_module_ts"], {
    /***/
    29268:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/actions-view/actions-view-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionsViewPageRoutingModule": function ActionsViewPageRoutingModule() {
          return (
            /* binding */
            _ActionsViewPageRoutingModule
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


      var _actions_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions-view.page */
      2832);

      var routes = [{
        path: '',
        component: _actions_view_page__WEBPACK_IMPORTED_MODULE_0__.ActionsViewPage
      }];

      var _ActionsViewPageRoutingModule = function ActionsViewPageRoutingModule() {
        _classCallCheck(this, ActionsViewPageRoutingModule);
      };

      _ActionsViewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ActionsViewPageRoutingModule);
      /***/
    },

    /***/
    71563:
    /*!***********************************************************!*\
      !*** ./src/app/pages/actions-view/actions-view.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionsViewPageModule": function ActionsViewPageModule() {
          return (
            /* binding */
            _ActionsViewPageModule
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


      var _actions_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./actions-view-routing.module */
      29268);
      /* harmony import */


      var _actions_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions-view.page */
      2832);

      var _ActionsViewPageModule = function ActionsViewPageModule() {
        _classCallCheck(this, ActionsViewPageModule);
      };

      _ActionsViewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _actions_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionsViewPageRoutingModule],
        declarations: [_actions_view_page__WEBPACK_IMPORTED_MODULE_1__.ActionsViewPage]
      })], _ActionsViewPageModule);
      /***/
    },

    /***/
    2832:
    /*!*********************************************************!*\
      !*** ./src/app/pages/actions-view/actions-view.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionsViewPage": function ActionsViewPage() {
          return (
            /* binding */
            _ActionsViewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_actions_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./actions-view.page.html */
      80589);
      /* harmony import */


      var _actions_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions-view.page.scss */
      52575);
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global.service */
      97465);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ActionsViewPage = /*#__PURE__*/function () {
        function ActionsViewPage(nav, global) {
          _classCallCheck(this, ActionsViewPage);

          this.nav = nav;
          this.global = global;
        }

        _createClass(ActionsViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var d = JSON.parse(localStorage.getItem("singleView"));
            this.incident_id = d.id;
            this.global.presentLoading();
            this.global.getData("api/Investigator/getInvestigationAction").subscribe(function (res) {
              var _a;

              if (res) {
                (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.forEach(function (el) {
                  if (el.incident_id == _this.incident_id) {
                    _this.data = el;

                    _this.global.dismissLoading();
                  }
                });
              }
            }, function (err) {
              console.log("res", err);

              _this.global.dismissLoading();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.nav.back();
          }
        }]);

        return ActionsViewPage;
      }();

      _ActionsViewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }];
      };

      _ActionsViewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-actions-view',
        template: _raw_loader_actions_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actions_view_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ActionsViewPage);
      /***/
    },

    /***/
    52575:
    /*!***********************************************************!*\
      !*** ./src/app/pages/actions-view/actions-view.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-label {\n  white-space: normal;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 18px;\n}\nion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n  padding-bottom: 0px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  white-space: normal;\n  color: var(--black-color);\n  font-size: 18px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content p {\n  font-family: \"mon-medium\";\n  color: var(--theme-blue-color);\n  font-size: 20px;\n  margin-top: 10px;\n}\nion-content .btnView {\n  margin-top: 100px;\n}\nion-content .plus {\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .inci {\n  width: 100%;\n  margin: 0;\n  --background: #e0e0e0;\n  overflow: hidden !important;\n  height: 52px;\n  --border-radius: 31px;\n  border-radius: 31px;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  margin-bottom: 24px;\n}\nion-content .inci p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .inci img {\n  margin-top: 3px;\n  position: absolute;\n  right: 0;\n}\nion-content .questionHead {\n  font-family: mon-black;\n}\nion-content .activeBackground {\n  border-radius: 20px;\n  margin-bottom: 22px;\n  background-color: #f3f3f3;\n  padding: 15px;\n}\nion-content .activeBackground p {\n  font-family: \"mon-bold\";\n  text-transform: capitalize;\n  text-align: left;\n  justify-content: flex-start;\n  color: #313131;\n  font-size: 20px;\n}\nion-content .activeBackground .headerTitle {\n  display: flex;\n  align-items: center;\n}\nion-content .activeBackground .headerTitle img {\n  position: absolute;\n  right: 33px;\n  margin-top: -8px;\n}\nion-content .ra {\n  --background: transparent;\n  padding: 0;\n  margin: 0;\n  --padding-top: 0px;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-start: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content .ra ion-label {\n  font-family: \"mon-medium\";\n  font-size: 17px;\n  color: var(--black-color);\n}\nion-content ion-radio {\n  margin-right: 7px;\n}\nion-content ion-checkbox {\n  --border-color: var(--theme-blue-color);\n}\nion-content ion-col {\n  padding: 0;\n}\nion-content hr {\n  height: 1px;\n  background: #cccccc;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\nion-content ion-radio {\n  --color: var(--theme-blue-color);\n}\nion-content .question {\n  font-size: 14px !important;\n}\nion-content ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-content ion-list ion-item ion-label {\n  font-family: mon-medium;\n}\nion-content ion-select {\n  width: 100%;\n  background: white;\n  border-radius: 20px;\n  --padding-start: 15px;\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  --padding-end: 15px;\n}\nion-content ion-input {\n  background: white;\n  border-radius: 20px;\n  font-family: \"mon-medium\";\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n}\nion-content .labelCustomDropDown {\n  margin-left: 12px;\n}\nion-content .camera {\n  font-family: mon-medium;\n  margin-top: 16px;\n}\nion-content ion-datetime {\n  font-family: \"mon-medium\";\n}\nion-content ion-card {\n  margin: 0;\n  padding: 16px;\n  border-radius: 19px;\n  margin-bottom: 15px;\n}\n.regularTexrt {\n  text-transform: capitalize;\n  margin-left: 33px;\n}\n.value {\n  font-family: mon-medium !important;\n  font-size: 16px !important;\n  color: gray !important;\n  margin-top: -10px !important;\n}\n.head {\n  font-family: mon-medium !important;\n  font-size: 18px !important;\n  color: black !important;\n}\n.img-responsive {\n  height: 200px;\n  width: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,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RTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsbUJBQUE7QUFMSjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPRTtFQUNFLGlCQUFBO0FBTEo7QUFPRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9FO0VBQ0UseUJBQUE7QUFMSjtBQU9FO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFRQTtFQUVJLDBCQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVVBO0VBQ0ksa0NBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFQSjtBQVNBO0VBQ00sa0NBQUE7RUFDRiwwQkFBQTtFQUNBLHVCQUFBO0FBTko7QUFRQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEoiLCJmaWxlIjoiYWN0aW9ucy12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWxhYmVsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLnRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMycHg7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAubG9nbyB7XG4gICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW4tYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgLmlucHV0LWRpdiB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgfVxuICAuYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAyOXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtYmx1ZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmJ0blZpZXcge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG4gIC5wbHVzIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICAuaW5jaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgY29sb3I6ICMzMTMxMzE7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbiAgLnF1ZXN0aW9uSGVhZCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbi1ibGFjaztcbiAgfVxuICAuYWN0aXZlQmFja2dyb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHAge1xuICAgICAgZm9udC1mYW1pbHk6IFwibW9uLWJvbGRcIjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGNvbG9yOiAjMzEzMTMxO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuaGVhZGVyVGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAzM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucmEge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuICAgIH1cbiAgfVxuICBpb24tcmFkaW8ge1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICB9XG4gIGlvbi1jaGVja2JveCB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICB9XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaHIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICBpb24tcmFkaW8ge1xuICAgIC0tY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xuICB9XG4gIC5xdWVzdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogbW9uLW1lZGl1bTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcblxuICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xuXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgfVxuICBpb24taW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwibW9uLW1lZGl1bVwiO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLmxhYmVsQ3VzdG9tRHJvcERvd24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG4gIC5jYW1lcmEge1xuICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgaW9uLWRhdGV0aW1lIHtcbiAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XG4gIH1cbiAgaW9uLWNhcmR7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG4ucmVndWxhclRleHJ0e1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLWxlZnQ6IDMzcHg7XG5cbn1cblxuLnZhbHVle1xuICAgIGZvbnQtZmFtaWx5OiBtb24tbWVkaXVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuLmhlYWR7XG4gICAgICBmb250LWZhbWlseTogbW9uLW1lZGl1bSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLmltZy1yZXNwb25zaXZle1xuICAgIGhlaWdodDoyMDBweDtcbiAgICB3aWR0aDoyNTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    80589:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actions-view/actions-view.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Actions</ion-text>\n    <ion-buttons class=\"back\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <div class=\"container\">\n    <div class=\"activeBackground\">\n     <p class=\"question\">Description of Required Action</p>\n     <p class=\"value\">{{data?.description_of_required_action}}</p>\n\n     <p class=\"question\">Allocated To</p>\n     <p class=\"value\">{{data?.user_name}}</p>\n\n     <p class=\"question\">Priority</p>\n     <p class=\"value\">{{data?.priority}}</p>\n\n     <p class=\"question\">Expected completion</p>\n     <p class=\"value\">{{data?.expected_completion}}</p>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_actions-view_actions-view_module_ts-es5.js.map