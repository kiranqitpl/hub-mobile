(self.webpackChunkhub=self.webpackChunkhub||[]).push([[9169],{59169:function(e,t,i){"use strict";i.r(t),i.d(t,{PrestartDashboardPageModule:function(){return x}});var n=i(38583),o=i(90665),a=i(47823),r=i(10649),s=i(10639),c=i(89985),l=i(45311),u=i(68366);function m(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ion-col",9),s.NdJ("click",function(){s.CHM(e);const t=s.oxw().$implicit;return s.oxw().onFavorite(t.menuName,!1)}),s._UZ(1,"ion-icon",10),s.qZA()}}function f(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"ion-col",11),s.NdJ("click",function(){s.CHM(e);const t=s.oxw().$implicit;return s.oxw().onFavorite(t.menuName,!0)}),s._UZ(1,"ion-icon",12),s.qZA()}}function d(e,t){if(1&e&&(s.TgZ(0,"ion-button",5),s.TgZ(1,"ion-row"),s.TgZ(2,"ion-col",6),s._uU(3),s.qZA(),s.YNc(4,m,2,0,"ion-col",7),s.YNc(5,f,2,0,"ion-col",8),s.qZA(),s.qZA()),2&e){const e=t.$implicit;s.xp6(2),s.Q6J("routerLink",e.route),s.xp6(1),s.hij(" ",e.menuName," "),s.xp6(1),s.Q6J("ngIf",1==e.favorite||"true"==e.favorite),s.xp6(1),s.Q6J("ngIf",0==e.favorite||"false"==e.favorite)}}const g=[{path:"",component:(()=>{class e{constructor(e,t){this.globalService=e,this.toastService=t,this.pName="Prestart",this.loggedInUser="",this.menuData=[],this.rowId=""}ngOnInit(){this.loggedInUser=JSON.parse(localStorage.getItem("userDetails")),this.loadFavoriteList()}loadFavoriteList(){this.globalService.getData("PrestartMenu/get_PrestartMenu").subscribe(e=>{e.status?(this.menuData=e.data.menu.sort((e,t)=>parseInt(e.original_postion)-parseInt(t.original_postion)),this.rowId=e.data.id):this.menuData=[]},e=>{console.log(e)})}onFavorite(e,t){this.menuData.filter(i=>{i.menuName==e&&(i.favorite=t)}),this.globalService.postData("PrestartMenu/submit",{formData:{id:this.rowId,menu:this.menuData}}).subscribe(e=>{e.status&&(1==t?this.toastService.toast("This form is added in your favourite list.","success"):0==t&&this.toastService.toast("This form is removed from your favourite list.","success"))},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c.U),s.Y36(l.k))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-prestart-dashboard"]],decls:8,vars:2,consts:[[3,"pageName"],[1,"container"],["size-lg","3","size-md","3"],["size-lg","6","size-md","6","size-sm","12","size-xl","6","size-xs","12"],["class","btn",4,"ngFor","ngForOf"],[1,"btn"],["size-xl","10","size-lg","10","size-md","11","size-sm","11","size-xs","11",3,"routerLink"],["size-xl","2","size-lg","2","size-md","1","size-sm","1","size-xs","1","title","Remove from favourite","class","favourite-parent",3,"click",4,"ngIf"],["size-xl","2","size-lg","2","size-md","1","size-sm","1","size-xs","1","title","Add to favourite","class","favourite-parent",3,"click",4,"ngIf"],["size-xl","2","size-lg","2","size-md","1","size-sm","1","size-xs","1","title","Remove from favourite",1,"favourite-parent",3,"click"],["name","heart",1,"favourite"],["size-xl","2","size-lg","2","size-md","1","size-sm","1","size-xs","1","title","Add to favourite",1,"favourite-parent",3,"click"],["name","heart-outline",1,"favourite"]],template:function(e,t){1&e&&(s.TgZ(0,"ion-content"),s._UZ(1,"app-header",0),s.TgZ(2,"div",1),s.TgZ(3,"ion-row"),s._UZ(4,"ion-col",2),s.TgZ(5,"ion-col",3),s.YNc(6,d,6,4,"ion-button",4),s.qZA(),s._UZ(7,"ion-col",2),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("pageName",t.pName),s.xp6(5),s.Q6J("ngForOf",t.menuData))},directives:[a.W2,u.G,a.Nd,a.wI,n.sg,a.YG,a.YI,r.rH,n.O5,a.gu],styles:["[_nghost-%COMP%]{display:flex}[mwlDraggable][_ngcontent-%COMP%]{background-color:red;width:200px;height:200px;position:relative;z-index:2;float:left;margin-right:10px;cursor:move}[mwlDroppable][_ngcontent-%COMP%]{background-color:green;width:400px;height:400px;z-index:1;position:relative;top:50px;left:100px}.validate-drop[_ngcontent-%COMP%]{left:150px}[mwlDraggable][_ngcontent-%COMP%], [mwlDroppable][_ngcontent-%COMP%]{color:#fff;text-align:center;display:flex;align-items:center;justify-content:center}.drop-over-active[_ngcontent-%COMP%]{border:1px dashed #000;background-color:#90ee90}.drag-active[_ngcontent-%COMP%]{z-index:3}.floating-toolbar[_ngcontent-%COMP%]{position:absolute;top:140px;z-index:2;width:250px;height:75px;background:#ff0;display:flex;align-items:center;justify-content:center}.floating-toolbar-1[_ngcontent-%COMP%]{left:600px}.floating-toolbar-2[_ngcontent-%COMP%]{left:1050px}"]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.Bz.forChild(g)],r.Bz]}),e})();var w=i(69270);"function"==typeof Symbol&&Symbol;var h=["webkit","moz","ms","o"];(function(){if("undefined"==typeof window)return function(){};for(var e=0,t=h.length;e<t&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[h[e]+"RequestAnimationFrame"];if(!window.requestAnimationFrame){var i=0;window.requestAnimationFrame=function(e){var t=(new Date).getTime(),n=Math.max(0,16-t-i),o=window.setTimeout(function(){return e(t+n)},n);return i=t+n,o}}window.requestAnimationFrame.bind(window)})(),function(){if("undefined"==typeof window)return function(){};for(var e=0,t=h.length;e<t&&!window.cancelAnimationFrame;++e)window.cancelAnimationFrame=window[h[e]+"CancelAnimationFrame"]||window[h[e]+"CancelRequestAnimationFrame"];window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){window.clearTimeout(e)}),window.cancelAnimationFrame.bind(window)}();let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,o.u5,a.Pc,p,v,w.I]]}),e})()}}]);