(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_prestart-dashboard_prestart-dashboard_module_ts"], {
    /***/
    50367:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard-routing.module.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrestartDashboardPageRoutingModule": function PrestartDashboardPageRoutingModule() {
          return (
            /* binding */
            _PrestartDashboardPageRoutingModule
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


      var _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prestart-dashboard.page */
      15476);

      var routes = [{
        path: '',
        component: _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PrestartDashboardPage
      } // {
      //   path: 'telehandler',
      //   loadChildren: () => import('../../prestart/telehandler/telehandler.module').then(m => m.TelehandlerPageModule)
      // }
      ];

      var _PrestartDashboardPageRoutingModule = function PrestartDashboardPageRoutingModule() {
        _classCallCheck(this, PrestartDashboardPageRoutingModule);
      };

      _PrestartDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrestartDashboardPageRoutingModule);
      /***/
    },

    /***/
    8492:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.module.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrestartDashboardPageModule": function PrestartDashboardPageModule() {
          return (
            /* binding */
            _PrestartDashboardPageModule
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


      var _prestart_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prestart-dashboard-routing.module */
      50367);
      /* harmony import */


      var _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prestart-dashboard.page */
      15476);
      /* harmony import */


      var src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-component/header/header.component */
      13998);

      var _PrestartDashboardPageModule = function PrestartDashboardPageModule() {
        _classCallCheck(this, PrestartDashboardPageModule);
      };

      _PrestartDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _prestart_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrestartDashboardPageRoutingModule],
        declarations: [_prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PrestartDashboardPage, src_app_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent]
      })], _PrestartDashboardPageModule);
      /***/
    },

    /***/
    15476:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrestartDashboardPage": function PrestartDashboardPage() {
          return (
            /* binding */
            _PrestartDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_prestart_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./prestart-dashboard.page.html */
      66767);
      /* harmony import */


      var _prestart_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prestart-dashboard.page.scss */
      41209);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/shared-service/shared.service */
      49481);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);

      var _PrestartDashboardPage = /*#__PURE__*/function () {
        function PrestartDashboardPage(sharedService, globalService) {
          _classCallCheck(this, PrestartDashboardPage);

          this.sharedService = sharedService;
          this.globalService = globalService;
          this.pName = 'Prestart';
          this.menu = []; //  [
          //   {
          //     menuName: 'LV', route: '#', favourite: false
          //   },
          //   {
          //     menuName: 'Forklift', route: '#', favourite: false
          //   },
          //   {
          //     menuName: 'Telehandler', route: '/home/safety-menu/telehandler-add-form', favourite: false
          //   },
          //   {
          //     menuName: 'Crane', route: '/home/safety-menu/crane-add-form', favourite: false
          //   },
          //   {
          //     menuName: 'Vehicle Hoist', route: '/home/safety-menu/vehicle-hoist-add-form', favourite: false
          //   },
          // ];

          this.loggedInUser = "";
        }

        _createClass(PrestartDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
            this.loadFavoriteList();
            console.log('prestartMenu', this.sharedService.prestartMenu);
          }
        }, {
          key: "loadFavoriteList",
          value: function loadFavoriteList() {
            console.log('this.loggedInUser', this.loggedInUser);
            this.globalService.getData('PrestartMenu/get_PrestartMenu/' + this.loggedInUser['id']).subscribe(function (result) {
              console.log('result', result);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "onFavorite",
          value: function onFavorite(tabname, val) {
            this.sharedService.prestartMenu.filter(function (ele) {
              if (ele.menuName == tabname) {
                ele.favorite = val;
              }
            });
          }
        }]);

        return PrestartDashboardPage;
      }();

      _PrestartDashboardPage.ctorParameters = function () {
        return [{
          type: src_app_services_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService
        }, {
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService
        }];
      };

      _PrestartDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-prestart-dashboard',
        template: _raw_loader_prestart_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prestart_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrestartDashboardPage);
      /***/
    },

    /***/
    49481:
    /*!***********************************************************!*\
      !*** ./src/app/services/shared-service/shared.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* binding */
            _SharedService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _global_service_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../global-service/global.service */
      89985);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);

      var _SharedService = /*#__PURE__*/function () {
        //------------------------------------------------------------------ Global Variable -------------------------------------------------------//
        function SharedService(globalService, actionSheetController, camera) {
          _classCallCheck(this, SharedService);

          this.globalService = globalService;
          this.actionSheetController = actionSheetController;
          this.camera = camera;
          this.notViewNotiCount = 0; //------------------------------------------------------------------ Global Variable -------------------------------------------------------//

          this.prestartMenu = [{
            menuName: 'LV',
            route: '#',
            favorite: false
          }, {
            menuName: 'Forklift',
            route: '#',
            favorite: false
          }, {
            menuName: 'Telehandler',
            route: '/home/safety-menu/telehandler-add-form',
            favorite: false
          }, {
            menuName: 'Crane',
            route: '/home/safety-menu/crane-add-form',
            favorite: false
          }, {
            menuName: 'Vehicle Hoist',
            route: '/home/safety-menu/vehicle-hoist-add-form',
            favorite: false
          }];
        }

        _createClass(SharedService, [{
          key: "getBase64",
          value: function getBase64(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.onerror = function (error) {
                return reject(error);
              };
            });
          } // fileToBase64 = (file) => {
          //   let image: any;
          //   let reader = new FileReader();
          //   reader.onload = (function (file) {
          //     return function (e) {
          //       image = e.target.result;
          //       this.base64Image = e.target.result;
          //     };
          //   })(file);
          //   reader.readAsDataURL(file);
          // };
          // convertDataURIToBinary(dataURI) {
          //   var BASE64_MARKER = ';base64,';
          //   var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
          //   var base64 = dataURI.substring(base64Index);
          //   var raw = window.atob(base64);
          //   var rawLength = raw.length;
          //   var array = new Uint8Array(new ArrayBuffer(rawLength));
          //   for (let i = 0; i < rawLength; i++) {
          //     array[i] = raw.charCodeAt(i);
          //   }
          //   return array;
          // }

        }, {
          key: "mobileUploadImages",
          value: function mobileUploadImages() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var images, actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Select Image source',
                        buttons: [{
                          text: 'Load from Library',
                          handler: function handler() {
                            return images = _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Use Camera',
                          handler: function handler() {
                            return images = _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var options;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('sourceType', sourceType);
                      options = {
                        quality: 100,
                        sourceType: sourceType,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE
                      };
                      _context2.next = 4;
                      return this.camera.getPicture(options).then(function (imageData) {
                        console.log('imageData', imageData); // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);

                        // const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
                        var image = 'data:image/jpeg;base64,' + imageData;
                        console.log('pickImage', image);
                        return image;
                      }, function (err) {
                        console.log("errOf Image ", err);
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return SharedService;
      }();

      _SharedService.ctorParameters = function () {
        return [{
          type: _global_service_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__.Camera
        }];
      };

      _SharedService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _SharedService);
      /***/
    },

    /***/
    41209:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.scss ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzdGFydC1kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    66767:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-button class=\"btn\" *ngFor=\"let tabVal of sharedService.prestartMenu\">\n      <ion-row>\n\n        <ion-col size-lg=\"10\" size-md=\"10\" size-sm=\"10\" size-xl=\"10\" size-xs=\"10\" [routerLink]=\"tabVal.route\">\n          {{tabVal.menuName}}\n        </ion-col>\n\n        <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\" title=\"Remove from favorite\"\n          *ngIf=\"tabVal.favorite == true\" (click)=\"onFavorite(tabVal.menuName, false)\">\n          <ion-icon name=\"heart\" class=\"favorite\"></ion-icon>\n        </ion-col>\n\n        <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\" title=\"Add to favorite\"\n          *ngIf=\"tabVal.favorite == false\" (click)=\"onFavorite(tabVal.menuName, true)\">\n          <ion-icon name=\"heart-outline\" class=\"favorite\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_prestart-dashboard_prestart-dashboard_module_ts-es5.js.map