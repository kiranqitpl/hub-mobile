!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunkhub=self.webpackChunkhub||[]).push([[9789],{39789:function(o,i,n){"use strict";n.r(i),n.d(i,{FavouriteFormPageModule:function(){return z}});var r=n(38583),a=n(90665),s=n(47823),u=n(10649),c=n(10639),l=n(89985),f=n(45311),m=n(68366);function p(e,t){if(1&e){var o=c.EpF();c.TgZ(0,"span",7),c.TgZ(1,"ion-row"),c.TgZ(2,"ion-col",8),c._UZ(3,"ion-reorder"),c.qZA(),c.TgZ(4,"ion-col",9),c._uU(5),c.qZA(),c.TgZ(6,"ion-col",10),c.TgZ(7,"span",11),c.NdJ("click",function(){c.CHM(o);var e=c.oxw().$implicit;return c.oxw().onRemoveFavorite(e.menuName,!1)}),c._UZ(8,"ion-icon",12),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){var i=c.oxw().$implicit;c.xp6(4),c.Q6J("routerLink",i.route),c.xp6(1),c.hij(" ",i.menuName," ")}}function d(e,t){if(1&e&&(c.TgZ(0,"span"),c.YNc(1,p,9,2,"span",6),c.qZA()),2&e){var o=t.$implicit;c.xp6(1),c.Q6J("ngIf",1==o.favorite||"true"==o.favorite)}}var v,g,h=[{path:"",component:(v=function(){function o(t,i,n){e(this,o),this.globalService=t,this.toastService=i,this.nav=n,this.pName="Favourite form",this.menuData=[],this.updateRowId=""}var i,n,r;return i=o,(n=[{key:"ngOnInit",value:function(){this.loadFavoriteList()}},{key:"loadFavoriteList",value:function(){var e=this;this.globalService.getData("PrestartMenu/get_PrestartMenu").subscribe(function(t){t.status?(e.menuData=t.data.menu.sort(function(e,t){return e.favorite_position-t.favorite_position}),e.updateRowId=t.data.id,console.log("this.menuData",e.menuData)):e.menuData=[]},function(e){console.log(e)})}},{key:"onRemoveFavorite",value:function(e,t){this.menuData.filter(function(o){o.menuName==e&&(o.favorite=t)}),this.updateMenu("remove")}},{key:"updateMenu",value:function(e){var t=this;this.globalService.postData("PrestartMenu/submit",{formData:{id:this.updateRowId,menu:this.menuData}}).subscribe(function(o){o.status&&""!=e&&"remove"==e&&t.toastService.toast("This form is removed from your favorite list.","success")},function(e){console.log(e)})}},{key:"onRenderItems",value:function(e){var t=this.menuData.splice(e.detail.from,1)[0];this.menuData.splice(e.detail.to,0,t),e.detail.complete(),this.menuData.forEach(function(e,t){e.favorite_position=t}),this.menuData.sort(function(e,t){return e.favorite_position-t.favorite_position}),this.updateMenu("")}},{key:"onGoToPage",value:function(e){console.log("route",e),this.nav.navigateForward(e)}}])&&t(i.prototype,n),r&&t(i,r),o}(),v.\u0275fac=function(e){return new(e||v)(c.Y36(l.U),c.Y36(f.k),c.Y36(s.SH))},v.\u0275cmp=c.Xpm({type:v,selectors:[["app-favourite-form"]],decls:9,vars:2,consts:[[3,"pageName"],[1,"container"],["size-lg","3","size-md","3"],["size-lg","6","size-md","6","size-sm","12","size-xl","6","size-xs","12"],["disabled","false",3,"ionItemReorder"],[4,"ngFor","ngForOf"],["class","btn-blue",4,"ngIf"],[1,"btn-blue"],["size-lg","4","size-md","4","size-sm","4","size-xl","4","size-xs","4",1,"reorder"],["size-lg","4","size-md","4","size-sm","4","size-xl","4","size-xs","4",3,"routerLink"],["size-lg","4","size-md","4","size-sm","4","size-xl","4","size-xs","4"],["title","Remove from favorite",3,"click"],["name","heart",1,"favorite"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-content"),c._UZ(1,"app-header",0),c.TgZ(2,"div",1),c.TgZ(3,"ion-row"),c._UZ(4,"ion-col",2),c.TgZ(5,"ion-col",3),c.TgZ(6,"ion-reorder-group",4),c.NdJ("ionItemReorder",function(e){return t.onRenderItems(e)}),c.YNc(7,d,2,1,"span",5),c.qZA(),c.qZA(),c._UZ(8,"ion-col",2),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(1),c.Q6J("pageName",t.pName),c.xp6(6),c.Q6J("ngForOf",t.menuData))},directives:[s.W2,m.G,s.Nd,s.wI,s.oz,r.sg,r.O5,s.Nh,s.YI,u.rH,s.gu],styles:[".reorder[_ngcontent-%COMP%]{opacity:0!important}.btn-blue[_ngcontent-%COMP%]{background:#3880ff;background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);width:100%;border-radius:23px;--border-radius:23px;font-family:mon-bold;color:var(--ion-color-primary-contrast);--background:var(--theme-blue-color);height:50px;overflow:hidden;margin-top:13px;text-transform:capitalize;font-size:16px;margin-bottom:8px;display:block;line-height:2.5;text-align:center}"]}),v)}],b=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[u.Bz.forChild(h)],u.Bz]}),t}(),Z=n(69270),z=((g=function t(){e(this,t)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=c.oAB({type:g}),g.\u0275inj=c.cJS({imports:[[r.ez,a.u5,s.Pc,b,Z.I]]}),g)}}])}();