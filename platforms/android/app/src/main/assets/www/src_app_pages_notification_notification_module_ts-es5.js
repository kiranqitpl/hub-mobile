(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_notification_notification_module_ts"], {
    /***/
    54863:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/notification/notification-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageRoutingModule": function NotificationPageRoutingModule() {
          return (
            /* binding */
            _NotificationPageRoutingModule
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


      var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification.page */
      95259);

      var routes = [{
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
      }];

      var _NotificationPageRoutingModule = function NotificationPageRoutingModule() {
        _classCallCheck(this, NotificationPageRoutingModule);
      };

      _NotificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotificationPageRoutingModule);
      /***/
    },

    /***/
    89770:
    /*!***********************************************************!*\
      !*** ./src/app/pages/notification/notification.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageModule": function NotificationPageModule() {
          return (
            /* binding */
            _NotificationPageModule
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


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification-routing.module */
      54863);
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page */
      95259);

      var _NotificationPageModule = function NotificationPageModule() {
        _classCallCheck(this, NotificationPageModule);
      };

      _NotificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
      })], _NotificationPageModule);
      /***/
    },

    /***/
    95259:
    /*!*********************************************************!*\
      !*** ./src/app/pages/notification/notification.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPage": function NotificationPage() {
          return (
            /* binding */
            _NotificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./notification.page.html */
      92291);
      /* harmony import */


      var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page.scss */
      44088);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global.service */
      97465);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared-service/shared.service */
      49481);

      var _NotificationPage = /*#__PURE__*/function () {
        function NotificationPage(nav, globalService, sharedService) {
          _classCallCheck(this, NotificationPage);

          this.nav = nav;
          this.globalService = globalService;
          this.sharedService = sharedService;
          this.type = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.allType;
          this.notificationId = [];
          this.notificationData = '';
        }

        _createClass(NotificationPage, [{
          key: "goBack",
          value: function goBack() {
            this.nav.back();
          }
        }, {
          key: "logOut",
          value: function logOut() {
            localStorage.clear();
            this.nav.navigateRoot("login");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
            this.onNotificationLoad();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            this.userId = localStorage.getItem('id');
            this.roleId = localStorage.getItem('role');
          } //----------------------------------- Load Notification Data ---------------------------------------------------------// 

        }, {
          key: "onNotificationLoad",
          value: function onNotificationLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var formData, url;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      formData = new FormData();
                      formData.append("type", this.type);
                      formData.append("user_id", this.userId); // this.notificationData = await this.sharedService.notificationLoad(formData);
                      // console.log("this.notificationData ", this.notificationData);

                      url = "";

                      if (this.roleId == this.globalService.investigator) {
                        url = 'api/notification/getInvestigatorNotificationByInvestigatorID';
                      } else if (this.roleId == this.globalService.gm) {
                        url = 'api/notification/getGMNotificationByGmID';
                      }

                      if (url != "") {
                        // this.globalService.presentLoading();
                        this.globalService.postData(url, formData).subscribe(function (result) {
                          if (result['status']) {
                            _this.notificationData = result['data'];
                          } // this.globalService.dismissLoading();

                        }), function (error) {
                          // this.globalService.dismissLoading();
                          console.log('error', error);
                        };
                      } else {
                        // this.globalService.dismissLoading();
                        console.log("error");
                      }

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //----------------------------------- Load Notification Data ---------------------------------------------------------//
          //----------------------------------- Delete Notification ---------------------------------------------------------//

        }, {
          key: "filterArrayData",
          value: function filterArrayData(rowId) {
            var data = [];
            data['result'] = false;
            this.notificationId.filter(function (ele, i) {
              if (ele == rowId) {
                data['result'] = true;
                data['index'] = i;
              }
            });
            return data;
          }
        }, {
          key: "onDeleteDataSelect",
          value: function onDeleteDataSelect(rowId) {
            var val = this.filterArrayData(rowId);

            if (val['result']) {
              this.notificationId.splice(val['index'], 1);
            } else {
              this.notificationId.push(rowId);
            }
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this2 = this;

            if (this.notificationId.length != 0) {
              this.globalService.presentLoading();
              var url = 'api/notification/deleteNotificationByNotificationID';
              var formData = new FormData();
              formData.append("id", JSON.stringify(this.notificationId));
              this.globalService.postData(url, formData).subscribe(function (result) {
                if (result && result['status']) {
                  _this2.onNotificationLoad();
                }

                _this2.globalService.presentToast(result['message']);

                _this2.globalService.dismissLoading();
              }), function (error) {
                _this2.globalService.dismissLoading();

                console.log('error', error);
              };
            }
          } //----------------------------------- Delete Notification ---------------------------------------------------------//
          //----------------------------------- Re-direct on detail page --------------------------------------------------------//

        }, {
          key: "onNotificationDetaliPage",
          value: function onNotificationDetaliPage(rowID, formId, formType, isSeen) {
            var _this3 = this;

            if (formType == this.globalService.formType_user) {
              this.nav.navigateForward('view/' + formId);
            } else if (formType == this.globalService.formType_investigator) {
              this.nav.navigateForward('investigation-view/' + formId);
            }

            if (isSeen == 0) {
              this.globalService.getData('api/notification/changeNotificationSeen/' + rowID).subscribe(function (result) {
                console.log('result', result);

                if (result['status']) {
                  _this3.sharedService.notViewNotiCount = _this3.sharedService.notViewNotiCount != 0 ? _this3.sharedService.notViewNotiCount - 1 : 0;
                }
              }), function (error) {
                console.log("error", error);
              };
            }
          }
        }]);

        return NotificationPage;
      }();

      _NotificationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService
        }];
      };

      _NotificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotificationPage);
      /***/
    },

    /***/
    44088:
    /*!***********************************************************!*\
      !*** ./src/app/pages/notification/notification.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .toolbar {\n  background-color: var(--theme-blue-color);\n  align-items: center;\n  align-content: center;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  padding: 40px;\n  font-family: \"mon-bold\";\n  font-size: 19px;\n  text-transform: uppercase;\n}\nion-content .container {\n  background-color: white;\n  border-top-left-radius: 32px;\n  padding: 20px;\n  border-top-right-radius: 32px;\n  margin-top: -25px;\n}\nion-content .container .logo {\n  padding-top: 80px;\n}\nion-content .container ion-item {\n  --inner-padding-end: 0px;\n}\nion-content .container ion-item ion-label {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 21px;\n}\nion-content .container ion-item ion-input {\n  font-family: \"mon-medium\";\n  color: var(--black-color);\n  font-size: 16px;\n  border: 1px solid #c3c3c3;\n  border-radius: 20px;\n  margin-top: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\nion-content .container .login-btn {\n  width: 100%;\n  border-radius: 23px;\n  --border-radius: 23px;\n  font-family: \"mon-bold\";\n  color: white;\n  --background: var(--theme-blue-color);\n  height: 50px;\n  overflow: hidden;\n  margin-top: 13px;\n  text-transform: capitalize;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\nion-content .container .input-div {\n  margin-top: 25px;\n}\nion-content .back {\n  position: absolute;\n  left: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\nion-content .logout {\n  position: absolute;\n  right: 0;\n  top: 29px;\n  font-family: \"mon-bold\";\n  font-size: 29px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQU47QUFFSTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUFOO0FBQ007RUFDRSxpQkFBQTtBQUNSO0FBQ007RUFDRSx3QkFBQTtBQUNSO0FBQVE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVWO0FBQVE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRVY7QUFDTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDTTtFQUNFLGdCQUFBO0FBQ1I7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFOIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAudG9vbGJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMycHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1tZWRpdW1cIjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJtb24tbWVkaXVtXCI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubG9naW4tYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJsdWUtY29sb3IpO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXQtZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFjayB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAyOXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtb24tYm9sZFwiO1xyXG4gICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICB9XHJcbiAgICAubG9nb3V0e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDI5cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbi1ib2xkXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    92291:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"toolbar\">\n    <ion-text>Notification</ion-text>\n    <ion-buttons class='back'>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class='logout'>\n      <ion-button (click)=\"logOut()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size=\"10\">\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"trash\" (click)=\"onDelete()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-card *ngFor=\"let notification of notificationData; let i=index;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-checkbox (ionChange)=\"onDeleteDataSelect(notification.id)\"></ion-checkbox>\n          </ion-col>\n          <ion-col size=\"10\"\n            (click)=\"onNotificationDetaliPage(notification.id,notification.form_id,notification.form_type, notification.is_seen)\">\n            {{notification.message}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_notification_notification_module_ts-es5.js.map