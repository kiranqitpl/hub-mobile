!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function o(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}(self.webpackChunkhub=self.webpackChunkhub||[]).push([[4116],{54116:function(e,t,r){"use strict";r.r(t),r.d(t,{SuperannuationChoicePageModule:function(){return An}});var u=r(38583),i=r(90665),a=r(47823),c=r(10649),s=r(92340),l=r(10639),f=r(89985),p=r(45311),d=r(49481),_=r(68366),Z=["target"];function g(n,e){1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label",22),l._uU(3,"Fund ABN"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",23),l.qZA(),l.qZA())}function m(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label"),l._uU(2,"Fund Name"),l.qZA(),l.qZA())}function h(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label"),l._uU(2,"Super Fund Name"),l.qZA(),l.qZA())}function b(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter alphabets. "),l.qZA())}function A(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.YNc(1,m,3,0,"ion-col",24),l.YNc(2,h,3,0,"ion-col",24),l.TgZ(3,"ion-col",20),l._UZ(4,"ion-input",25),l.qZA(),l.YNc(5,b,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf","EMPLOYER"!=o.super_contribution),l.xp6(1),l.Q6J("ngIf","EMPLOYER"==o.super_contribution),l.xp6(3),l.Q6J("ngIf",null==o.superannuation.controls.fund_name.errors?null:o.superannuation.controls.fund_name.errors.pattern)}}function v(n,e){1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3," Fund Address"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",28),l.qZA(),l.qZA())}function T(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter alphabets. "),l.qZA())}function q(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3," Suburb/Town "),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",29),l.qZA(),l.YNc(6,T,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw(2);l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_sub_urb.errors?null:o.superannuation.controls.fund_sub_urb.errors.pattern)}}function w(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter alphabets. "),l.qZA())}function S(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3," State"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",30),l.qZA(),l.YNc(6,w,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw(2);l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_state.errors?null:o.superannuation.controls.fund_state.errors.pattern)}}function x(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter number. "),l.qZA())}function N(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3,"Postcode"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",31),l.qZA(),l.YNc(6,x,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw(2);l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_postcode.errors?null:o.superannuation.controls.fund_postcode.errors.pattern)}}function I(n,e){if(1&n&&(l.TgZ(0,"div"),l.YNc(1,v,6,0,"ion-row",15),l.YNc(2,q,7,1,"ion-row",15),l.YNc(3,S,7,1,"ion-row",15),l.YNc(4,N,7,1,"ion-row",15),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_name),l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_address),l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_sub_urb),l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_state)}}function U(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label"),l._uU(2,"Fund Phone"),l.qZA(),l.qZA())}function Y(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label"),l._uU(2,"Phone(for the product disclouser statement for this fund)"),l.qZA(),l.qZA())}function y(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter number. "),l.qZA())}function P(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.YNc(1,U,3,0,"ion-col",24),l.YNc(2,Y,3,0,"ion-col",24),l.TgZ(3,"ion-col",20),l._UZ(4,"ion-input",32),l.qZA(),l.YNc(5,y,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf","EMPLOYER"!=o.super_contribution),l.xp6(1),l.Q6J("ngIf","EMPLOYER"==o.super_contribution),l.xp6(3),l.Q6J("ngIf",null==o.superannuation.controls.fund_phone.errors?null:o.superannuation.controls.fund_phone.errors.pattern)}}function J(n,e){1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3,"Unique Superannuation Identifier (USI)"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",33),l.qZA(),l.qZA())}function k(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter alphabets. "),l.qZA())}function F(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3," Your Account Name (if applicable)"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",34),l.qZA(),l.YNc(6,k,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw(2);l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_account_name.errors?null:o.superannuation.controls.fund_account_name.errors.pattern)}}function M(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter number. "),l.qZA())}function C(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3,"Your Member Number (if applicable)"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",35),l.qZA(),l.YNc(6,M,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw(2);l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_member_number.errors?null:o.superannuation.controls.fund_member_number.errors.pattern)}}function Q(n,e){if(1&n&&(l.TgZ(0,"div"),l.YNc(1,F,7,1,"ion-row",15),l.YNc(2,C,7,1,"ion-row",15),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_usi),l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_account_name)}}function E(n,e){1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3,"Fund electronic service address (ESA)"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",36),l.qZA(),l.qZA())}function R(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter number. "),l.qZA())}function z(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter 6 number. "),l.qZA())}function L(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3,"BSB Code(please include all six numbers)"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",37),l.qZA(),l.YNc(6,R,2,0,"ion-col",26),l.YNc(7,z,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw(2);l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_bsb_code.errors?null:o.superannuation.controls.fund_bsb_code.errors.pattern),l.xp6(1),l.Q6J("ngIf",(null==o.superannuation.controls.fund_bsb_code.errors?null:o.superannuation.controls.fund_bsb_code.errors.minlength)||(null==o.superannuation.controls.fund_bsb_code.errors?null:o.superannuation.controls.fund_bsb_code.errors.maxlength))}}function O(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter number. "),l.qZA())}function B(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3,"Account Number"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",38),l.qZA(),l.YNc(6,O,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw(2);l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_account_no.errors?null:o.superannuation.controls.fund_account_no.errors.pattern)}}function D(n,e){if(1&n&&(l.TgZ(0,"div"),l.YNc(1,E,6,0,"ion-row",15),l.YNc(2,L,8,2,"ion-row",15),l.YNc(3,B,7,1,"ion-row",15),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_phone),l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_esa),l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_bsb_code)}}function G(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label"),l._uU(2," Attach Compliance Letter"),l.qZA(),l.qZA())}function H(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label",39),l._uU(2,"* You need to attach a letter from your fund stating that they are a complying fund and that they will accept contributions from your employer. Correct information about your super fund is needed for your employer to pay super contributions. Your super fund will provide this upon request. "),l.qZA(),l.qZA())}function j(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label"),l._uU(2," Attach AOT Compliance Letter"),l.qZA(),l.qZA())}function W(n,e){1&n&&(l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-label",39),l._uU(2,"* You need to attach a document confirming SMSF is an ATO regulated super fund. You can located and print a copy of the compliance status for your SMSF by searching using the ABN or fund name in the Super Fund Lookup service at "),l.TgZ(3,"ion-router-link",40),l._uU(4," https://superfundlookup.gov.au/"),l.qZA(),l.qZA(),l.qZA())}function V(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-col",20),l.TgZ(1,"ion-input",41),l.NdJ("change",function(n){return l.CHM(o),l.oxw(2).onDocPreview(n,"fund_attachement")}),l.qZA(),l.qZA()}}function X(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.YNc(1,G,3,0,"ion-col",24),l.YNc(2,H,3,0,"ion-col",24),l.YNc(3,j,3,0,"ion-col",24),l.YNc(4,W,5,0,"ion-col",24),l.YNc(5,V,2,0,"ion-col",24),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf","RSA"==o.super_contribution&&o.superannuation.value.fund_member_number),l.xp6(1),l.Q6J("ngIf","RSA"==o.super_contribution&&o.superannuation.value.fund_member_number),l.xp6(1),l.Q6J("ngIf","SMSF"==o.super_contribution&&o.superannuation.value.fund_account_no),l.xp6(1),l.Q6J("ngIf","SMSF"==o.super_contribution&&o.superannuation.value.fund_account_no),l.xp6(1),l.Q6J("ngIf","RSA"==o.super_contribution&&o.superannuation.value.fund_member_number||"SMSF"==o.super_contribution&&o.superannuation.value.fund_account_no)}}function K(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-col",44),l.TgZ(1,"ion-button",45),l.NdJ("click",function(){l.CHM(o);var n=l.oxw(2);return n.onDownloadPdf(n.superannuation.value.fund_attachement,"compliance-letter")}),l._uU(2,"Download Attach Compliance Letter"),l.qZA(),l.qZA()}}function $(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-col",46),l.TgZ(1,"ion-icon",47),l.NdJ("click",function(){return l.CHM(o),l.oxw(2).onImageDelete("fund_attachement")}),l.qZA(),l.qZA()}}function nn(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.YNc(1,K,3,0,"ion-col",42),l.YNc(2,$,2,0,"ion-col",43),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf","RSA"==o.super_contribution&&o.superannuation.value.fund_attachement||"SMSF"==o.super_contribution&&o.superannuation.value.fund_attachement),l.xp6(1),l.Q6J("ngIf","RSA"==o.super_contribution&&o.superannuation.value.fund_attachement||"SMSF"==o.super_contribution&&o.superannuation.value.fund_attachement)}}function en(n,e){1&n&&(l.TgZ(0,"div"),l.TgZ(1,"ion-row"),l.TgZ(2,"ion-col",20),l.TgZ(3,"ion-label",39),l._uU(4,"* If you are the turstee, or a director of the corporate trustee you can confirm that your SMSF will accpet contribution from your employer by making the following declaration : "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(5,"ion-radio-group",48),l.TgZ(6,"ion-row"),l.TgZ(7,"ion-col",20),l.TgZ(8,"ion-item",9),l.TgZ(9,"ion-label",7),l._uU(10,"I am the trustee, or a director of the corporate trustee of the SMSF and I declare that the SMSF will accept contributions from my employer. "),l.qZA(),l._UZ(11,"ion-radio",10),l.qZA(),l.qZA(),l.TgZ(12,"ion-col",20),l.TgZ(13,"ion-item",9),l.TgZ(14,"ion-label",7),l._uU(15,"I am neither the trustee nor a director of the corporte trustee of the SMSF."),l.qZA(),l._UZ(16,"ion-radio",11),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA())}function on(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-col",44),l.TgZ(1,"ion-button",45),l.NdJ("click",function(){l.CHM(o);var n=l.oxw(3);return n.onDownloadPdf(n.superannuation.value.fund_attachment_confirm_letter,"fund-attachment-confirm-letter")}),l._uU(2," Download Attach Confirmation Letter"),l.qZA(),l.qZA()}}function tn(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-col",46),l.TgZ(1,"ion-icon",47),l.NdJ("click",function(){return l.CHM(o),l.oxw(3).onImageDelete("fund_attachment_confirm_letter")}),l.qZA(),l.qZA()}}function rn(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label",39),l._uU(3,"* If you are not the trustee, or a director of the corporate trustee of the SMSF, then you must attach a letter from the trustee confirming that the fund will accept contributions from your employer. "),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l.TgZ(5,"ion-label"),l._uU(6,"Attach Confirmation Letter"),l.qZA(),l.qZA(),l.TgZ(7,"ion-col",20),l.TgZ(8,"ion-input",41),l.NdJ("change",function(n){return l.CHM(o),l.oxw(2).onDocPreview(n,"fund_attachment_confirm_letter")}),l.qZA(),l.qZA(),l.YNc(9,on,3,0,"ion-col",42),l.YNc(10,tn,2,0,"ion-col",43),l.qZA()}if(2&n){var t=l.oxw(2);l.xp6(9),l.Q6J("ngIf",t.superannuation.value.fund_attachment_confirm_letter),l.xp6(1),l.Q6J("ngIf",t.superannuation.value.fund_attachment_confirm_letter)}}function un(n,e){if(1&n&&(l.TgZ(0,"div"),l.YNc(1,en,17,0,"div",15),l.YNc(2,rn,11,2,"ion-row",15),l.qZA()),2&n){var o=l.oxw();l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_attachement),l.xp6(1),l.Q6J("ngIf",o.superannuation.value.fund_trustee)}}function an(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please enter valid website url. "),l.qZA())}function cn(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.TgZ(2,"ion-label"),l._uU(3,"Super Fund Website Address"),l.qZA(),l.qZA(),l.TgZ(4,"ion-col",20),l._UZ(5,"ion-input",49),l.qZA(),l.YNc(6,an,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw();l.xp6(6),l.Q6J("ngIf",null==o.superannuation.controls.fund_web_url.errors?null:o.superannuation.controls.fund_web_url.errors.pattern)}}function sn(n,e){1&n&&(l.TgZ(0,"ion-col",27),l._uU(1," Please check this if you have completed above form. "),l.qZA())}function ln(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",46),l._UZ(2,"ion-checkbox",50),l.qZA(),l.TgZ(3,"ion-col",44),l._uU(4," I have completed this form. "),l.qZA(),l.YNc(5,sn,2,0,"ion-col",26),l.qZA()),2&n){var o=l.oxw();l.xp6(2),l.Q6J("checked",o.superannuation.value.completed),l.xp6(3),l.Q6J("ngIf",o.isSubmitted&&0==o.superannuation.value.completed)}}function fn(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-buttons"),l.TgZ(1,"ion-button",51),l.NdJ("click",function(){return l.CHM(o),l.oxw().onSubmit(0)}),l._UZ(2,"ion-icon",52),l.qZA(),l.qZA()}}function pn(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-button",54),l.NdJ("click",function(){return l.CHM(o),l.oxw(2).onSubmit(1)}),l._uU(1,"UPDATE "),l.qZA()}}function dn(n,e){if(1&n){var o=l.EpF();l.TgZ(0,"ion-button",54),l.NdJ("click",function(){return l.CHM(o),l.oxw(2).onSubmit(1)}),l._uU(1,"SUBMIT "),l.qZA()}}function _n(n,e){if(1&n&&(l.TgZ(0,"ion-row"),l.TgZ(1,"ion-col",20),l.YNc(2,pn,2,0,"ion-button",53),l.YNc(3,dn,2,0,"ion-button",53),l.qZA(),l.qZA()),2&n){var o=l.oxw();l.xp6(2),l.Q6J("ngIf",1==o.edit),l.xp6(1),l.Q6J("ngIf",0==o.edit)}}var Zn,gn,mn=[{path:"",component:(Zn=function(){function e(o,t,r,u,i){n(this,e),this.fb=o,this.globalService=t,this.nav=r,this.toastService=u,this.sharedService=i,this.pName="Superannuation Choice",this.paidTo="",this.isSubmitted=!1,this.edit=!1,this.form_percent=0,this.form_percent_val=0}return o(e,[{key:"ngOnInit",value:function(){this.userDetails=JSON.parse(localStorage.getItem("userDetails")),this.superannuation=this.fb.group({fund_abn:[""],fund_name:["",i.kI.pattern(s.N.alphabet)],fund_address:[""],fund_sub_urb:[""],fund_state:["",i.kI.pattern(s.N.alphabet)],fund_postcode:["",i.kI.pattern(s.N.numeric)],fund_phone:["",i.kI.pattern(s.N.numeric)],fund_usi:[""],fund_account_name:["",i.kI.pattern(s.N.alphabet)],fund_member_number:["",i.kI.pattern(s.N.numeric)],fund_attachement:[""],fund_esa:[""],fund_bsb_code:["",[i.kI.pattern(s.N.numeric),i.kI.minLength(6),i.kI.maxLength(6)]],fund_account_no:["",i.kI.pattern(s.N.numeric)],fund_trustee:[""],fund_attachment_confirm_letter:[""],fund_web_url:["",i.kI.pattern(s.N.url)],completed:[!1]}),this.onLoadData()}},{key:"onLoadData",value:function(){var n=this;this.globalService.getData("OnboardingSuperannuation/getSuperannuation/"+this.userDetails.id).subscribe(function(e){e&&e.status&&e.data&&e.data[0]?(n.edit=!0,n.pName="Edit Superannuation Choice",n.super_contribution=e.data[0].super_annuation,n.superannuation.patchValue(e.data[0])):(n.edit=!1,n.pName="Superannuation Choice",n.super_contribution="RSA")},function(n){console.log("error",n)})}},{key:"onSubmit",value:function(n){var e=this;if(("RSA"==this.super_contribution||"EMPLOYER"==this.super_contribution||"SMSF"==this.super_contribution)&&""==this.superannuation.value.rsa_fund_abn)return this.isSubmitted=!0;if(this.superannuation.valid){this.superannuation.value.super_contribution=this.super_contribution;var o=this.superannuation.value;o.guid="5DFFF608-B771-48AC-8C78-DE22A161BFB3",o.type="dyn",o.code="form_Superannuation",o.user_id=this.userDetails.id,o.completed=n,this.globalService.postData("OnboardingSuperannuation/saveSuperannuation",{formData:o}).subscribe(function(n){n&&n.status?(e.superannuation.reset(),e.onLoadData(),e.toastService.toast(n.message,"success")):e.toastService.toast(n.message,"danger")},function(n){console.log("error",n)})}}},{key:"onFormSelection",value:function(n){"RSA"==this.super_contribution?(this.superannuation.controls.fund_esa.reset(),this.superannuation.controls.fund_bsb_code.reset(),this.superannuation.controls.fund_account_no.reset(),this.superannuation.controls.fund_trustee.reset(),this.superannuation.controls.fund_attachment_confirm_letter.reset(),this.superannuation.controls.fund_web_url.reset()):"SMSF"==this.super_contribution?(this.superannuation.controls.fund_usi.reset(),this.superannuation.controls.fund_account_name.reset(),this.superannuation.controls.fund_member_number.reset(),this.superannuation.controls.fund_web_url.reset()):"EMPLOYER"==this.super_contribution&&(this.superannuation.controls.fund_abn.reset(),this.superannuation.controls.fund_address.reset(),this.superannuation.controls.fund_sub_urb.reset(),this.superannuation.controls.fund_state.reset(),this.superannuation.controls.fund_postcode.reset(),this.superannuation.controls.fund_account_name.reset(),this.superannuation.controls.fund_member_number.reset(),this.superannuation.controls.fund_attachement.reset(),this.superannuation.controls.fund_esa.reset(),this.superannuation.controls.fund_bsb_code.reset(),this.superannuation.controls.fund_account_no.reset(),this.superannuation.controls.fund_trustee.reset(),this.superannuation.controls.fund_attachment_confirm_letter.reset()),this.onProgressBar("")}},{key:"onDocPreview",value:function(n,e){var o=this;n&&n.target&&n.target.files&&n.target.files[0]&&n.target.files[0].type&&("application/pdf"==n.target.files[0].type?this.sharedService.getBase64(n.target.files[0]).then(function(n){o.superannuation.controls[e].setValue(n),o.onProgressBar("")}):(this.toastService.toast("Please select PDF format document only.","danger"),this.onProgressBar("")))}},{key:"onDownloadPdf",value:function(n,e){this.sharedService.downloadPdf(n,e)}},{key:"onImageDelete",value:function(n){this.superannuation.controls[n].setValue(""),this.onProgressBar("")}},{key:"onProgressBar",value:function(n){this.sharedService.autoScroll(this.content,this.myScrollContainer);var e=[];"RSA"==this.super_contribution?Object.keys(this.superannuation.controls).map(function(n){"fund_esa"!=n&&"fund_bsb_code"!=n&&"fund_account_no"!=n&&"fund_trustee"!=n&&"fund_attachment_confirm_letter"!=n&&"fund_web_url"!=n&&e.push(n)}):"SMSF"==this.super_contribution?Object.keys(this.superannuation.controls).map(function(n){"fund_account_name"!=n&&"fund_member_number"!=n&&"fund_web_url"!=n&&"fund_usi"!=n&&e.push(n)}):"EMPLOYER"==this.super_contribution&&Object.keys(this.superannuation.controls).map(function(n){"fund_name"!=n&&"fund_phone"!=n&&"fund_usi"!=n&&"fund_web_url"!=n&&"completed"!=n||e.push(n)});var o=this.sharedService.progressBar(e,this.superannuation);this.form_percent=o.form_percent,this.form_percent_val=o.form_percent_val}}]),e}(),Zn.\u0275fac=function(n){return new(n||Zn)(l.Y36(i.qu),l.Y36(f.U),l.Y36(a.SH),l.Y36(p.k),l.Y36(d.F))},Zn.\u0275cmp=l.Xpm({type:Zn,selectors:[["app-superannuation-choice"]],viewQuery:function(n,e){var o;1&n&&(l.Gf(a.W2,5),l.Gf(Z,5)),2&n&&(l.iGM(o=l.CRH())&&(e.content=o.first),l.iGM(o=l.CRH())&&(e.myScrollContainer=o.first))},decls:55,vars:20,consts:[[3,"pageName"],[1,"container"],["target",""],["size-xl","3","size-lg","2","size-md","2"],["size-xl","6","size-lg","8","size-md","8","size-sm","12","size-xs","12"],["value","super_contribution",3,"ngModel","ngModelChange","ionChange"],["lines","none","size","12"],[1,"ion-text-wrap"],["size-xl","6","size-lg","6","size-md","6","size-sm","12","size-xs","12"],["lines","none"],["slot","start","value","RSA"],["slot","start","value","SMSF"],["slot","start","value","EMPLOYER"],[1,"ion-text-wrap","text-val"],[3,"formGroup","ionChange"],[4,"ngIf"],[1,"progress-bar"],["size-xl","9","size-lg","9","size-md","9","size-sm","7","size-xs","7",1,"padding"],["size-xl","2","size-lg","2","size-md","2","size-sm","3","size-xs","3",1,"padding"],["size-xl","1","size-lg","1","size-md","1","size-sm","2","size-xs","2"],["size","12"],[3,"value"],[1,"lable-text"],["placeholder","Please enter Fund ABN","formControlName","fund_abn"],["size","12",4,"ngIf"],["placeholder","Please enter Fund Name","formControlName","fund_name"],["size","12","class","error",4,"ngIf"],["size","12",1,"error"],["placeholder","Please enter Fund Address","formControlName","fund_address"],["placeholder","Please enter Suburb/Town","formControlName","fund_sub_urb"],["placeholder","Please enter State","formControlName","fund_state"],["placeholder","Please enter postcode","formControlName","fund_postcode"],["inputmode","tel","placeholder","Please enter Fund Phone","formControlName","fund_phone"],["placeholder","Please enter Unique Superannuation Identifier","formControlName","fund_usi"],["placeholder","Please enter Your Account Name","formControlName","fund_account_name"],["placeholder","Please enter Your Member Number","formControlName","fund_member_number"],["placeholder","Please enter Fund electronic service address (ESA)","formControlName","fund_esa"],["placeholder","Please enter BSB Code","formControlName","fund_bsb_code"],["placeholder","Please enter Account Number","formControlName","fund_account_no"],[1,"ion-text-wrap","mandatoryField"],["href","https://superfundlookup.gov.au/","target","_blank",1,"underline"],["type","file",3,"change"],["size","11",4,"ngIf"],["size","1",4,"ngIf"],["size","11"],[1,"pdf","ion-text-wrap",3,"click"],["size","1"],["name","close",3,"click"],["formControlName","fund_trustee"],["type","url","placeholder","Please enter Super Fund Website Address","formControlName","fund_web_url"],["color","primary","formControlName","completed",3,"checked"],["title","Submit Incomplete Form",3,"click"],["slot","icon-only","name","save-outline","color","primary"],["class","btn",3,"click",4,"ngIf"],[1,"btn",3,"click"]],template:function(n,e){1&n&&(l.TgZ(0,"ion-content"),l._UZ(1,"app-header",0),l.TgZ(2,"div",1,2),l.TgZ(4,"ion-row"),l._UZ(5,"ion-col",3),l.TgZ(6,"ion-col",4),l.TgZ(7,"ion-card"),l.TgZ(8,"ion-radio-group",5),l.NdJ("ngModelChange",function(n){return e.super_contribution=n})("ionChange",function(n){return e.onFormSelection(n)}),l.TgZ(9,"ion-item",6),l.TgZ(10,"ion-label",7),l._uU(11,"I request all of my future super contributions to be paid to : "),l.qZA(),l.qZA(),l.TgZ(12,"ion-row"),l.TgZ(13,"ion-col",8),l.TgZ(14,"ion-item",9),l.TgZ(15,"ion-label",7),l._uU(16,"The APRA fund or retirement saving account (RSA) I nominate "),l.qZA(),l._UZ(17,"ion-radio",10),l.qZA(),l.qZA(),l.TgZ(18,"ion-col",8),l.TgZ(19,"ion-item",9),l.TgZ(20,"ion-label",7),l._uU(21,"The self-managed super fund (SMSF) I nominate"),l.qZA(),l._UZ(22,"ion-radio",11),l.qZA(),l.qZA(),l.TgZ(23,"ion-col",8),l.TgZ(24,"ion-item",9),l.TgZ(25,"ion-label",7),l._uU(26,"The super fund nominated by my employer"),l.qZA(),l._UZ(27,"ion-radio",12),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(28,"ion-item",13),l._uU(29," Your name and tax file number will be collected from other forms. "),l.qZA(),l.qZA(),l.TgZ(30,"ion-card",14),l.NdJ("ionChange",function(n){return e.onProgressBar(n)}),l.YNc(31,g,6,0,"ion-row",15),l.YNc(32,A,6,3,"ion-row",15),l.YNc(33,I,5,4,"div",15),l.YNc(34,P,6,3,"ion-row",15),l.YNc(35,J,6,0,"ion-row",15),l.YNc(36,Q,3,2,"div",15),l.YNc(37,D,4,3,"div",15),l.YNc(38,X,6,5,"ion-row",15),l.YNc(39,nn,3,2,"ion-row",15),l.YNc(40,un,3,2,"div",15),l.YNc(41,cn,7,1,"ion-row",15),l.YNc(42,ln,6,2,"ion-row",15),l.TgZ(43,"ion-row",16),l.TgZ(44,"ion-col",17),l._uU(45," Form progress bar "),l.qZA(),l.TgZ(46,"ion-col",18),l._uU(47),l.qZA(),l.TgZ(48,"ion-col",19),l.YNc(49,fn,3,0,"ion-buttons",15),l.qZA(),l.qZA(),l.TgZ(50,"ion-row"),l.TgZ(51,"ion-col",20),l._UZ(52,"ion-progress-bar",21),l.qZA(),l.qZA(),l.YNc(53,_n,4,2,"ion-row",15),l.qZA(),l.qZA(),l._UZ(54,"ion-col",3),l.qZA(),l.qZA(),l.qZA()),2&n&&(l.xp6(1),l.Q6J("pageName",e.pName),l.xp6(7),l.Q6J("ngModel",e.super_contribution),l.xp6(22),l.Q6J("formGroup",e.superannuation),l.xp6(1),l.Q6J("ngIf","EMPLOYER"!=e.super_contribution),l.xp6(1),l.Q6J("ngIf","EMPLOYER"!=e.super_contribution&&e.superannuation.value.fund_abn||"EMPLOYER"==e.super_contribution),l.xp6(1),l.Q6J("ngIf","EMPLOYER"!=e.super_contribution),l.xp6(1),l.Q6J("ngIf","EMPLOYER"!=e.super_contribution&&e.superannuation.value.fund_postcode||"EMPLOYER"==e.super_contribution&&e.superannuation.value.fund_name),l.xp6(1),l.Q6J("ngIf","SMSF"!=e.super_contribution&&e.superannuation.value.fund_phone),l.xp6(1),l.Q6J("ngIf","RSA"==e.super_contribution),l.xp6(1),l.Q6J("ngIf","SMSF"==e.super_contribution),l.xp6(1),l.Q6J("ngIf","EMPLOYER"!=e.super_contribution),l.xp6(1),l.Q6J("ngIf","RSA"==e.super_contribution&&e.superannuation.value.fund_member_number||"SMSF"==e.super_contribution&&e.superannuation.value.fund_account_no||"SMSF"==e.super_contribution&&e.superannuation.value.fund_attachment_confirm_letter),l.xp6(1),l.Q6J("ngIf","SMSF"==e.super_contribution),l.xp6(1),l.Q6J("ngIf","EMPLOYER"==e.super_contribution&&e.superannuation.value.fund_usi),l.xp6(1),l.Q6J("ngIf","RSA"==e.super_contribution&&""!=e.superannuation.value.fund_attachement||"SMSF"==e.super_contribution&&e.superannuation.value.fund_attachment_confirm_letter||"EMPLOYER"==e.super_contribution&&e.superannuation.value.fund_web_url),l.xp6(5),l.AsE(" ",e.form_percent_val,"","%"," "),l.xp6(2),l.Q6J("ngIf",100!=e.form_percent_val),l.xp6(3),l.Q6J("value",e.form_percent),l.xp6(1),l.Q6J("ngIf",100==e.form_percent_val))},directives:[a.W2,_.G,a.Nd,a.wI,a.PM,a.se,a.QI,i.JJ,i.On,a.Ie,a.Q$,a.B7,a.U5,i.JL,i.sg,u.O5,a.X7,a.pK,a.j9,i.u,a.YG,a.gu,a.nz,a.w,a.Sm],styles:[""]}),Zn)}],hn=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[c.Bz.forChild(mn)],c.Bz]}),e}(),bn=r(69270),An=((gn=function e(){n(this,e)}).\u0275fac=function(n){return new(n||gn)},gn.\u0275mod=l.oAB({type:gn}),gn.\u0275inj=l.cJS({imports:[[u.ez,i.u5,a.Pc,hn,bn.I,i.UX]]}),gn)},49481:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var u=r(64762),i=r(10639),a=r(89985),c=r(47823),s=r(84267),l=function(){var e=function(){function e(o,t,r){n(this,e),this.globalService=o,this.actionSheetController=t,this.camera=r,this.notViewNotiCount=0}return o(e,[{key:"getBase64",value:function(n){return new Promise(function(e,o){var t=new FileReader;t.readAsDataURL(n),t.onload=function(){return e(t.result)},t.onerror=function(n){return o(n)}})}},{key:"downloadPdf",value:function(n,e){var o=document.createElement("a");o.href=n,o.download=e,o.click()}},{key:"mobileUploadImages",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var e,o=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.actionSheetController.create({header:"Select Image source",buttons:[{text:"Load from Library",handler:function(){return o.pickImage(o.camera.PictureSourceType.PHOTOLIBRARY)}},{text:"Use Camera",handler:function(){return o.pickImage(o.camera.PictureSourceType.CAMERA)}},{text:"Cancel",role:"cancel"}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}},n,this)}))}},{key:"pickImage",value:function(n){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={quality:100,sourceType:n,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE},e.next=3,this.camera.getPicture(o).then(function(n){return"data:image/jpeg;base64,"+n},function(n){console.log("errOf Image ",n)});case 3:case"end":return e.stop()}},e,this)}))}},{key:"resize",value:function(n){return n.innerWidth?n.innerWidth:n.target.innerWidth}},{key:"progressBar",value:function(n,e){var o=0;n.forEach(function(n){e.value[n]&&""!=e.value[n]&&(o=++o)});var t=1/Object.keys(n).length*o;return{form_percent:t,form_percent_val:parseInt((100*t).toFixed())}}},{key:"autoScroll",value:function(n,e){return n.scrollToPoint(0,e.nativeElement.scrollHeight,8e3)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(i.LFG(a.U),i.LFG(c.BX),i.LFG(s.V1))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();