(self.webpackChunkhub=self.webpackChunkhub||[]).push([[8592],{68225:function(t,e,n){"use strict";n.d(e,{c:function(){return s}});var i=n(23150),o=n(52954),r=n(39461);const s=(t,e)=>{let n,s;const a=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),c(r,o)):l()},c=(t,e)=>{n=t,s||(s=n);const o=n;(0,i.c)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,i.c)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return(0,r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,o.a),onMove:t=>a(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),(0,o.h)(),s=void 0}})}},77330:function(t,e,n){"use strict";n.d(e,{a:function(){return o},d:function(){return r}});var i=n(52377);const o=async(t,e,n,o,r)=>{if(t)return t.attachViewToDom(e,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),await new Promise(t=>(0,i.c)(s,t)),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},52954:function(t,e,n){"use strict";n.d(e,{a:function(){return r},b:function(){return s},c:function(){return o},d:function(){return c},h:function(){return a}});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},66575:function(t,e,n){"use strict";n.d(e,{s:function(){return i}});const i=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!s()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=r(t);for(let e=0;e<s.length;e++)o(s[e])}});const i=r(e);for(let t=0;t<i.length;t++)o(i[t]);const a=document.createElement("div");a.appendChild(e);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!a.includes(i.toLowerCase())){t.removeAttribute(i);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=r(t);for(let n=0;n<e.length;n++)o(e[n])},r=t=>null!=t.children?t.children:t.childNodes,s=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},60408:function(t,e,n){"use strict";n.d(e,{S:function(){return i}});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},61269:function(t,e,n){"use strict";n.d(e,{c:function(){return o},g:function(){return r},h:function(){return i},o:function(){return a}});const i=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},44981:function(t,e,n){"use strict";n.d(e,{h:function(){return r},Z:function(){return o}});var i=n(10639);let o=(()=>{class t{transform(e,n){return n&&e?t.filter(e,n):e}static filter(t,e){const n=e.toLowerCase();function i(t,e){for(let o in t)if(null!==t[o]&&null!=t[o]){if("object"==typeof t[o]&&i(t[o],e))return!0;if(t[o].toString().toLowerCase().includes(n))return!0}return!1}return t.filter(function(t){return i(t,e)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Yjl({name:"filter",type:t,pure:!1}),t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})(),r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({}),t})()},91681:function(t,e,n){"use strict";n.d(e,{e:function(){return s}});var i=n(64762),o=n(47823),r=n(10639);let s=(()=>{class t{constructor(t){this.modalController=t,this.sliderOpts={zoom:!0}}ngOnInit(){console.log("img",this.img),console.log("slides",this.slides)}ionViewDidEnter(){this.slides.update()}zoom(t){return(0,i.mG)(this,void 0,void 0,function*(){const e=(yield this.slides.getSwiper()).zoom;t?e.in():e.out()})}close(){this.modalController.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o.IN))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-image-modal"]],viewQuery:function(t,e){if(1&t&&r.Gf(o.Hr,5),2&t){let t;r.iGM(t=r.CRH())&&(e.slides=t.first)}},inputs:{img:"img"},decls:19,vars:2,consts:[[3,"options"],[1,"swiper-zoom-container"],[3,"src"],["size","4",1,"ion-text-center"],["fill","clear",3,"click"],["name","remove","slot","start"],["name","close","slot","start"],["name","add","slot","start"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-content"),r.TgZ(1,"ion-slides",0),r.TgZ(2,"ion-slide"),r.TgZ(3,"div",1),r._UZ(4,"img",2),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(5,"ion-footer"),r.TgZ(6,"ion-row"),r.TgZ(7,"ion-col",3),r.TgZ(8,"ion-button",4),r.NdJ("click",function(){return e.zoom(!1)}),r._UZ(9,"ion-icon",5),r._uU(10," out "),r.qZA(),r.qZA(),r.TgZ(11,"ion-col",3),r.TgZ(12,"ion-button",4),r.NdJ("click",function(){return e.close()}),r._UZ(13,"ion-icon",6),r._uU(14," close "),r.qZA(),r.qZA(),r.TgZ(15,"ion-col",3),r.TgZ(16,"ion-button",4),r.NdJ("click",function(){return e.zoom(!0)}),r._UZ(17,"ion-icon",7),r._uU(18," in "),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("options",e.sliderOpts),r.xp6(3),r.Q6J("src",e.img,r.LSH))},directives:[o.W2,o.Hr,o.A$,o.fr,o.Nd,o.wI,o.YG,o.gu],styles:["ion-content[_ngcontent-%COMP%]{--background:transparent}ion-footer[_ngcontent-%COMP%]{margin-bottom:10px}ion-slides[_ngcontent-%COMP%]{height:100%}"]}),t})()},58127:function(t,e,n){"use strict";n.d(e,{Y:function(){return d}});var i=n(26215),o=n(10639),r=n(47823),s=n(89985),a=n(90665),c=n(38583),l=n(44981);function u(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"ion-item",8),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().close(e)}),o.TgZ(1,"ion-label"),o._uU(2),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit;o.xp6(2),o.Oqu(null==t?null:t.full_name)}}let d=(()=>{class t{constructor(t,e){this.modal=t,this.global=e,this.newList=new i.X([])}ionViewWillEnter(){}ngOnInit(){this.newList.next(this.list)}onSearch(t){let e=!1;this.list.forEach(t=>{t.full_name==this.term&&(e=!0)}),0==e&&""!=t&&(this.newList.next([]),this.global.getData("user/getallemployee/?term="+t.detail.value).subscribe(t=>{t&&t.data&&t.data.length>0?(t.data.unshift({full_name:"Other",employee_id:"0"}),this.newList.next(t.data)):this.newList.next(this.list)},t=>{console.log(t)}))}close(t){this.modal.dismiss(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.IN),o.Y36(s.U))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-managers"]],inputs:{header:"header",list:"list"},decls:12,vars:6,consts:[[1,"ion-no-border"],["color","primary"],["slot","end"],[3,"click"],["name","close","slot","icon-only"],["placeholder","Search",3,"ngModel","ngModelChange","ionChange"],[1,"ion-padding"],["button","","class","ion-no-padding","lines","none",3,"click",4,"ngFor","ngForOf"],["button","","lines","none",1,"ion-no-padding",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar",1),o.TgZ(2,"ion-title"),o._uU(3),o.qZA(),o.TgZ(4,"ion-buttons",2),o.TgZ(5,"ion-button",3),o.NdJ("click",function(){return e.close()}),o._UZ(6,"ion-icon",4),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"ion-input",5),o.NdJ("ngModelChange",function(t){return e.term=t})("ionChange",function(t){return e.onSearch(t)}),o.qZA(),o.qZA(),o.TgZ(8,"ion-content",6),o.TgZ(9,"ion-list"),o.YNc(10,u,3,1,"ion-item",7),o.ALo(11,"filter"),o.qZA(),o.qZA()),2&t&&(o.xp6(3),o.Oqu(e.header),o.xp6(4),o.Q6J("ngModel",e.term),o.xp6(3),o.Q6J("ngForOf",o.xi3(11,3,e.newList.value,e.term)))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.YG,r.gu,r.pK,r.j9,a.JJ,a.On,r.W2,r.q_,c.sg,r.Ie,r.Q$],pipes:[l.Z],styles:["ion-input[_ngcontent-%COMP%]{color:#fff!important}"]}),t})()},96022:function(t,e,n){"use strict";n.d(e,{c:function(){return s}});var i=n(64762),o=n(10639),r=n(47823);let s=(()=>{class t{constructor(t,e){this.alertCtrl=t,this.navCtrl=e}alertWithBack(t){return(0,i.mG)(this,void 0,void 0,function*(){const e=yield this.alertCtrl.create({cssClass:"alert-message",header:"Alert !",backdropDismiss:!1,message:t,animated:!0,buttons:[{text:"Ok",role:"Ok",handler:()=>{this.navCtrl.back()}}]});yield e.present()})}alert(t){return(0,i.mG)(this,void 0,void 0,function*(){const e=yield this.alertCtrl.create({cssClass:"alert-message",header:"Alert !",backdropDismiss:!1,message:t,animated:!0,buttons:[{text:"Ok",role:"Ok",handler:()=>{}}]});yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(r.Br),o.LFG(r.SH))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},80513:function(t,e,n){"use strict";n.d(e,{b:function(){return s}});var i=n(64762),o=n(10639),r=n(47823);let s=(()=>{class t{constructor(t){this.loadingController=t}presentLoading(){return(0,i.mG)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({cssClass:"my-custom-class",message:"Please wait..."});yield t.present()})}dismissLoading(){return(0,i.mG)(this,void 0,void 0,function*(){yield this.loadingController.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(r.HT))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},49481:function(t,e,n){"use strict";n.d(e,{F:function(){return c}});var i=n(64762),o=n(10639),r=n(89985),s=n(47823),a=n(84267);let c=(()=>{class t{constructor(t,e,n){this.globalService=t,this.actionSheetController=e,this.camera=n,this.notViewNotiCount=0,this.prestartMenu=[{menuName:"LV",route:"#",favorite:!1,position_in_list:1},{menuName:"Forklift",route:"#",favorite:!1,position_in_list:2},{menuName:"Telehandler",route:"/home/safety-menu/telehandler-add-form",favorite:!1,position_in_list:3},{menuName:"Crane",route:"/home/safety-menu/crane-add-form",favorite:!1,position_in_list:4},{menuName:"Vehicle Hoist",route:"/home/safety-menu/vehicle-hoist-add-form",favorite:!1,position_in_list:5}]}getBase64(t){return new Promise((e,n)=>{const i=new FileReader;i.readAsDataURL(t),i.onload=()=>e(i.result),i.onerror=t=>n(t)})}mobileUploadImages(){return(0,i.mG)(this,void 0,void 0,function*(){let t;const e=yield this.actionSheetController.create({header:"Select Image source",buttons:[{text:"Load from Library",handler:()=>t=this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY)},{text:"Use Camera",handler:()=>t=this.pickImage(this.camera.PictureSourceType.CAMERA)},{text:"Cancel",role:"cancel"}]});yield e.present()})}pickImage(t){return(0,i.mG)(this,void 0,void 0,function*(){const e={quality:100,sourceType:t,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE};yield this.camera.getPicture(e).then(t=>{console.log("imageData",t);let e="data:image/jpeg;base64,"+t;return console.log("pickImage",e),e},t=>{console.log("errOf Image ",t)})})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(r.U),o.LFG(s.BX),o.LFG(a.V1))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},45311:function(t,e,n){"use strict";n.d(e,{k:function(){return s}});var i=n(64762),o=n(10639),r=n(47823);let s=(()=>{class t{constructor(t){this.toastController=t}presentToast(t){return(0,i.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"dark"})).present()})}toast(t,e){return(0,i.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:e,animated:!0})).present()})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(r.yF))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},68366:function(t,e,n){"use strict";n.d(e,{G:function(){return r}});var i=n(10639),o=n(47823);let r=(()=>{class t{constructor(t){this.nav=t}ngOnInit(){}onGoBack(){this.nav.back()}onLogOut(){localStorage.clear(),this.nav.navigateRoot("login")}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.SH))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-header"]],inputs:{pageName:"pageName"},decls:9,vars:1,consts:[[1,"toolbar"],[1,"back"],[3,"click"],["slot","icon-only","name","chevron-back"],[1,"logout"],["slot","icon-only","name","log-out-outline"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"ion-text"),i._uU(2),i.qZA(),i.TgZ(3,"ion-buttons",1),i.TgZ(4,"ion-button",2),i.NdJ("click",function(){return e.onGoBack()}),i._UZ(5,"ion-icon",3),i.qZA(),i.qZA(),i.TgZ(6,"ion-buttons",4),i.TgZ(7,"ion-button",2),i.NdJ("click",function(){return e.onLogOut()}),i._UZ(8,"ion-icon",5),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(2),i.Oqu(e.pageName))},styles:[""]}),t})()},69270:function(t,e,n){"use strict";n.d(e,{I:function(){return r}});var i=n(38583),o=n(10639);let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez]]}),t})()},79044:function(t){"use strict";t.exports=JSON.parse('[{"K":[{"val":"FAI","isChecked":false,"desc":"FAI: First Aid injury, an injury that requires a single first aid treatment and a follow-up visit for subsequent observation involving on minor injuries which do not ordinarily require medical care, and for which the person would typically return immediately to their normal activities"},{"val":"MTI","isChecked":false,"desc":"MTI: Medical Treatment Injury, an injury or disease that resulted in a certain level of treatment (not first aid treatment) given by a physician or medical personnel under standing orders of a physician."},{"val":"ADI","isChecked":false,"desc":"ADI: Alternative Duties Injury, temporary duties , identified as in Hort Enterprises Alternative Duties Within the Workplace HE-WHS-FRM-0036, that are required when an injured worker is unable to return to their normal duties."},{"val":"LTI","isChecked":false,"desc":"LTI: Lost Time Injury, an injury that results in a day or more lost from work."},{"val":"PII","isChecked":false,"desc":"PII: Permanent Impairment Injury, the permanent impact an injury has on a person\'s functioning."},{"val":"Fatality","isChecked":false,"desc":"Fatality: Fatality, a person who dies as a result from an injury."}]}]')}}]);