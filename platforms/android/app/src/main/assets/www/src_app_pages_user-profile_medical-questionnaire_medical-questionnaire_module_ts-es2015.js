(self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_user-profile_medical-questionnaire_medical-questionnaire_module_ts"],{

/***/ 52428:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/user-profile/medical-questionnaire/medical-questionnaire-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalQuestionnairePageRoutingModule": function() { return /* binding */ MedicalQuestionnairePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _medical_questionnaire_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-questionnaire.page */ 14302);




const routes = [
    {
        path: '',
        component: _medical_questionnaire_page__WEBPACK_IMPORTED_MODULE_0__.MedicalQuestionnairePage
    }
];
let MedicalQuestionnairePageRoutingModule = class MedicalQuestionnairePageRoutingModule {
};
MedicalQuestionnairePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MedicalQuestionnairePageRoutingModule);



/***/ }),

/***/ 45696:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/user-profile/medical-questionnaire/medical-questionnaire.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalQuestionnairePageModule": function() { return /* binding */ MedicalQuestionnairePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _medical_questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-questionnaire-routing.module */ 52428);
/* harmony import */ var _medical_questionnaire_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-questionnaire.page */ 14302);
/* harmony import */ var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-module/shared-module.module */ 69270);








let MedicalQuestionnairePageModule = class MedicalQuestionnairePageModule {
};
MedicalQuestionnairePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _medical_questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_0__.MedicalQuestionnairePageRoutingModule,
            src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [_medical_questionnaire_page__WEBPACK_IMPORTED_MODULE_1__.MedicalQuestionnairePage]
    })
], MedicalQuestionnairePageModule);



/***/ }),

/***/ 14302:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/user-profile/medical-questionnaire/medical-questionnaire.page.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalQuestionnairePage": function() { return /* binding */ MedicalQuestionnairePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_medical_questionnaire_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./medical-questionnaire.page.html */ 79563);
/* harmony import */ var _medical_questionnaire_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-questionnaire.page.scss */ 30866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MedicalQuestionnairePage = class MedicalQuestionnairePage {
    constructor() {
        this.pName = 'Medical Questionnaire';
        this.treatment = [
            {
                id: 'Asthma/Bronchitis',
                name: 'Asthma/Bronchitis'
            },
            {
                id: 'Hypertension/Heart Problems',
                name: 'Hypertension/Heart Problems'
            },
            {
                id: 'High Blood Pressure',
                name: 'High Blood Pressure'
            },
            {
                id: 'Palpitations',
                name: 'Palpitations'
            },
            {
                id: 'Stroke',
                name: 'Stroke'
            },
            {
                id: 'High Cholesterol',
                name: 'High Cholesterol'
            },
            {
                id: 'A-Work Related Injury or Illness',
                name: 'A-Work Related Injury or Illness'
            },
            {
                id: 'Lung Problems',
                name: 'Lung Problems'
            },
            {
                id: 'Tuberculosis',
                name: 'Tuberculosis'
            },
            {
                id: 'Anxiety/Depression',
                name: 'Anxiety/Depression'
            },
            {
                id: 'Allergies',
                name: 'Allergies'
            },
            {
                id: 'Thyroid Problems',
                name: 'Thyroid Problems'
            },
            {
                id: 'Diabetes',
                name: 'Diabetes'
            },
            {
                id: 'Cancer or Tumour',
                name: 'Cancer or Tumour'
            },
            {
                id: 'Impairment, Disability or Handicap or any type',
                name: 'Impairment, Disability or Handicap or any type'
            },
            {
                id: 'Back Strain Injury',
                name: 'Back Strain Injury'
            },
            {
                id: 'Persistent Headaches/Migraines',
                name: 'Persistent Headaches/Migraines'
            },
            {
                id: 'Fits/Seizures/Epilepsy/Blackouts',
                name: 'Fits/Seizures/Epilepsy/Blackouts'
            },
            {
                id: 'Arthritis/Rheumatism',
                name: 'Arthritis/Rheumatism'
            },
            {
                id: 'Joint Problems/Fractures/Broken Bones/Dislocation',
                name: 'Joint Problems/Fractures/Broken Bones/Dislocation'
            },
            {
                id: 'Have you ever been Hospitalised',
                name: 'Have you ever been Hospitalised'
            },
            {
                id: 'Repetitive Strain Injury/Overuse Syndrome',
                name: 'Repetitive Strain Injury/Overuse Syndrome'
            },
            {
                id: 'Have you ever had any Operations',
                name: 'Have you ever had any Operations'
            },
            {
                id: 'Hernias/Rupture',
                name: 'Hernias/Rupture'
            },
            {
                id: 'Loss of Hearing',
                name: 'Loss of Hearing'
            },
            {
                id: 'Visual impairment',
                name: 'Visual impairment'
            },
            {
                id: 'Sleep problems',
                name: 'Sleep problems'
            },
            {
                id: 'Hay fever',
                name: 'Hay fever'
            },
            {
                id: 'Skin disorders/Dermatitis',
                name: 'Skin disorders/Dermatitis'
            },
            {
                id: 'Whiplash, Neck Injury',
                name: 'Whiplash, Neck Injury'
            },
            {
                id: 'Mental or Nervous Disorder',
                name: 'Mental or Nervous Disorder'
            },
            {
                id: 'Back/Neck problems',
                name: 'Back/Neck problems'
            },
            {
                id: 'Defect in sight of either eye (not including glasses)',
                name: 'Defect in sight of either eye (not including glasses)'
            },
            {
                id: 'Skin Cancer',
                name: 'Skin Cancer'
            },
            {
                id: 'Sporting Injuries',
                name: 'Sporting Injuries'
            },
            {
                id: 'Blood in urine',
                name: 'Blood in urine'
            },
            {
                id: 'Stomach Problems/Ulcers',
                name: 'Stomach Problems/Ulcers'
            },
            {
                id: 'Unexplained weight loss',
                name: 'Unexplained weight loss'
            },
            {
                id: 'Varicose veins',
                name: 'Varicose veins'
            },
            {
                id: 'Difficulty in passing urine',
                name: 'Difficulty in passing urine'
            },
            {
                id: 'Bowel problems',
                name: 'Bowel problems'
            }
        ];
    }
    ngOnInit() {
    }
};
MedicalQuestionnairePage.ctorParameters = () => [];
MedicalQuestionnairePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-medical-questionnaire',
        template: _raw_loader_medical_questionnaire_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_medical_questionnaire_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MedicalQuestionnairePage);



/***/ }),

/***/ 30866:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/user-profile/medical-questionnaire/medical-questionnaire.page.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n  text-align: center;\n  border-style: double;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtcXVlc3Rpb25uYWlyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoibWVkaWNhbC1xdWVzdGlvbm5haXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xyXG59Il19 */");

/***/ }),

/***/ 79563:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/medical-questionnaire/medical-questionnaire.page.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xl=\"6\" size-xs=\"12\">\n        <ion-card>\n          <ion-row>\n            <ion-col size=\"12\" class=\"heading\">Medical History</ion-col>\n            <ion-col size=\"12\">\n              Have you ever received treatment or medical advice for any of the following:\n            </ion-col>\n            <ion-col size=\"12\" class=\"text-val\">(Please tick all that apply)</ion-col>\n            <ion-col size-xl=\"6\" size-lg=\"6\" size-md=\"12\" size-sm=\"12\" size-xs=\"12\"\n              *ngFor=\"let treatmentObject of treatment\">\n              <ion-item lines=\"none\">\n                <ion-label class=\"ion-text-wrap\">{{treatmentObject.name}}</ion-label>\n                <ion-checkbox slot=\"start\"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              If you answered yes to any of the above questions, please provide details:\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-textarea placeholder=\"Please enter details\"></ion-textarea>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              Have you ever received treatment or medical advice for any of the following:\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"text-val\">(Please select the appropriate answer)</ion-col>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">\n                      <span class=\"error\">* </span> Have you ever had time off in the last year to any illness or\n                      injury(work related) ?\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"><span class=\"error\">* </span> Are you currently being treated by a\n                      doctor for any medical condition\n                      that may affect your ability to perform the duties you are applying for ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">\n                      <span class=\"error\">* </span> Are you taking any medication, drug or injections for a Medical\n                      Condition on a regular basis ?\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Have you seen a doctor in the last 3\n                      months ? </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"><span class=\"error\">* </span> Is there any reason you cannot wear\n                      Personal Protective Equipment in\n                      the workplace ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Are you affected by Heights or\n                      Confined Spaces ?</ion-label>\n                  </ion-item>\n                </ion-col>\n\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">\n                      <span class=\"error\">* </span>Do you suffer from any allergies ?\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span> Have you ever been exposed to\n                      Excessive Noise in any previous\n                      employment ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span> Have you ever worked with Hazardous\n                      Chemicals ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Did you suffer or experience any\n                      health problems whilst working\n                      with these Hazardous Chemicals ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Have you a current Workers’\n                      Compensation Claim ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Have you had a Workers’ Compensation\n                      Claim in the past ?\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Do you have any other pre-existing\n                      injuries or Disabilities\n                      (physical\n                      or mental) which may affect your ability to carry out the responsibilities and / or duties of the\n                      position ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-col size=\"12\">\n              <span class=\"error\">* </span>In what year did you have your last Tetanus Injection ?\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-select placeholder=\"Please select\" interface=\"action-sheet\">\n                <ion-select-option value=\"2021\"> 2021</ion-select-option>\n              </ion-select>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              If you answered yes to any of the above questions, please provide details:\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-textarea placeholder=\"Please enter details\"></ion-textarea>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"heading\">\n              Miscellaneous\n            </ion-col>\n            <ion-col size=\"12\" class=\"text-val\">(Please tick appropriate answer)</ion-col>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Are you prepared to work in a\n                      Manufacturing / Engineering\n                      Environment and undertake required Training Activities ?\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Are you prepared to work outside\n                      normal working hours\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Are you prepared to do Shift Work ?\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Do you have the legal right to work\n                      in Australia ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Have you ever been convicted of a\n                      Criminal Offence ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-radio-group>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\"> <span class=\"error\">* </span>Do you or have you ever taken any\n                      type of illicit drug that may\n                      affect your work performance ?</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>Yes</ion-label>\n                    <ion-radio slot=\"start\" value=\"Yes\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-item lines=\"none\">\n                    <ion-label>No</ion-label>\n                    <ion-radio slot=\"start\" value=\"No\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n\n            <ion-col size=\"12\">\n              If you answered any of the above questions with the highlighted answer, please provide details:\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-textarea placeholder=\"Please enter details\"></ion-textarea>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"text-val\">Hort Enterprises has a ZERO tolerance of Drugs and Alcohol in the\n              Workplace. Pre-employment Screening Checks (including Criminal Record) may be undertaken before\n              appointment to any position.</ion-col>\n\n            <ion-col size=\"12\">\n              <ion-button class=\"btn\">SUBMIT</ion-button>\n            </ion-col>\n\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-profile_medical-questionnaire_medical-questionnaire_module_ts-es2015.js.map