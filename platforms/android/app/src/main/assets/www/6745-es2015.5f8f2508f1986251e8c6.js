(self.webpackChunkhub=self.webpackChunkhub||[]).push([[6745],{96745:function(e,t,o){"use strict";o.r(t),o.d(t,{DashboardPageModule:function(){return Z}});var n=o(38583),i=o(90665),r=o(47823),a=o(10649),c=o(92340),s=o(10639),l=o(89985),d=o(49481),u=o(68366);function g(e,t){if(1&e&&(s.TgZ(0,"ion-badge",11),s._uU(1),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.hij(" ",e.sharedService.notViewNotiCount,"")}}function m(e,t){if(1&e&&(s.TgZ(0,"div"),s.TgZ(1,"ion-button",9),s._uU(2),s.YNc(3,g,2,1,"ion-badge",10),s.qZA(),s.qZA()),2&e){const e=t.$implicit,o=s.oxw();s.xp6(1),s.Q6J("routerLink",e.route),s.xp6(1),s.hij(" ",e.menuName," "),s.xp6(1),s.Q6J("ngIf","Notification"==e.menuName&&0!=o.sharedService.notViewNotiCount)}}const h=[{path:"",component:(()=>{class e{constructor(e,t,o){this.nav=e,this.global=t,this.sharedService=o,this.menu=[{menuName:"Favourites",route:"/dashboard/favourite-form"},{menuName:"Submitted Forms",route:"/incident-form-list"},{menuName:"Notification",route:"/dashboard/notification"}],this.type=c.N.allType,this.imageUrl=c.N.imageUrl,this.pName="Dashboard"}ngOnInit(){this.loggedInUserDetails=JSON.parse(localStorage.getItem("userDetails")),this.onNotificationLoad()}onLogOut(){localStorage.clear(),this.nav.navigateRoot("login")}onNotificationLoad(){this.global.getData("notification/getNotificationList/"+this.loggedInUserDetails.id).subscribe(e=>{if(e&&e.row_count>0){let t=0;e.data.forEach(e=>{0==e.is_seen&&(t+=1)}),this.sharedService.notViewNotiCount=t}else this.sharedService.notViewNotiCount=0})}onAddForm(){this.nav.navigateForward("home")}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(r.SH),s.Y36(l.U),s.Y36(d.F))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-dashboard"]],decls:22,vars:3,consts:[[3,"pageName"],[1,"container"],["size-lg","3","size-md","3"],["size-lg","6","size-md","6","size-sm","12","size-xl","6","size-xs","12"],[1,"addForm",3,"click"],[3,"src"],[1,"addF"],[4,"ngFor","ngForOf"],[1,"btn","logouts",3,"click"],[1,"btn",3,"routerLink"],["class","badge","color","danger",4,"ngIf"],["color","danger",1,"badge"]],template:function(e,t){1&e&&(s.TgZ(0,"ion-content"),s._UZ(1,"app-header",0),s.TgZ(2,"div",1),s.TgZ(3,"ion-row"),s._UZ(4,"ion-col",2),s.TgZ(5,"ion-col",3),s.TgZ(6,"div",4),s.NdJ("click",function(){return t.onAddForm()}),s._UZ(7,"img",5),s.TgZ(8,"p",6),s._uU(9,"ADD FORM"),s.qZA(),s.qZA(),s.qZA(),s._UZ(10,"ion-col",2),s.qZA(),s.TgZ(11,"ion-row"),s._UZ(12,"ion-col",2),s.TgZ(13,"ion-col",3),s.YNc(14,m,4,3,"div",7),s.qZA(),s._UZ(15,"ion-col",2),s.qZA(),s.TgZ(16,"ion-row"),s._UZ(17,"ion-col",2),s.TgZ(18,"ion-col",3),s.TgZ(19,"ion-button",8),s.NdJ("click",function(){return t.onLogOut()}),s._uU(20," Logout "),s.qZA(),s.qZA(),s._UZ(21,"ion-col",2),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("pageName",t.pName),s.xp6(6),s.s9C("src",t.imageUrl+"form.png",s.LSH),s.xp6(7),s.Q6J("ngForOf",t.menu))},directives:[r.W2,u.G,r.Nd,r.wI,n.sg,r.YG,r.YI,a.rH,n.O5,r.yp],styles:["ion-content[_ngcontent-%COMP%]   .addForm[_ngcontent-%COMP%]{align-items:center;align-self:center;align-content:center;justify-content:center;text-align:center;padding:40px;border:2px dashed #c3c3c3;border-radius:20px;margin:40px 7px 7px}ion-content[_ngcontent-%COMP%]   .addF[_ngcontent-%COMP%]{font-family:mon-bold;font-size:17px;text-transform:capitalize;color:var(--white-color)}"]}),e})()},{path:"favourite-form",loadChildren:()=>Promise.all([o.e(8592),o.e(9789)]).then(o.bind(o,39789)).then(e=>e.FavouriteFormPageModule)},{path:"notification",loadChildren:()=>o.e(6484).then(o.bind(o,86484)).then(e=>e.NotificationPageModule)}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),e})();var f=o(69270);let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,i.u5,r.Pc,p,f.I]]}),e})()},49481:function(e,t,o){"use strict";o.d(t,{F:function(){return s}});var n=o(64762),i=o(10639),r=o(89985),a=o(47823),c=o(84267);let s=(()=>{class e{constructor(e,t,o){this.globalService=e,this.actionSheetController=t,this.camera=o,this.notViewNotiCount=0}getBase64(e){return new Promise((t,o)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=e=>o(e)})}downloadPdf(e,t){const o=document.createElement("a");o.href=e,o.download=t,o.click()}mobileUploadImages(){return(0,n.mG)(this,void 0,void 0,function*(){let e;const t=yield this.actionSheetController.create({header:"Select Image source",buttons:[{text:"Load from Library",handler:()=>e=this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY)},{text:"Use Camera",handler:()=>e=this.pickImage(this.camera.PictureSourceType.CAMERA)},{text:"Cancel",role:"cancel"}]});yield t.present()})}pickImage(e){return(0,n.mG)(this,void 0,void 0,function*(){const t={quality:100,sourceType:e,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE};yield this.camera.getPicture(t).then(e=>"data:image/jpeg;base64,"+e,e=>{console.log("errOf Image ",e)})})}resize(e){return e.innerWidth?e.innerWidth:e.target.innerWidth}progressBar(e,t){let o=0,n={};e.forEach(e=>{t.value[e]&&""!=t.value[e]&&(o=++o)});let i=1/Object.keys(e).length*o;return n={form_percent:i,form_percent_val:parseInt((100*i).toFixed())},n}autoScroll(e,t){return e.scrollToPoint(0,t.nativeElement.scrollHeight,8e3)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(r.U),i.LFG(a.BX),i.LFG(c.V1))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);