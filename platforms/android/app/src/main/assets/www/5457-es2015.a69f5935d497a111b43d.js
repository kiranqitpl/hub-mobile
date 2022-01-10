(self.webpackChunkhub=self.webpackChunkhub||[]).push([[5457],{75457:function(o,n,e){"use strict";e.r(n),e.d(n,{CraneViewDetailPageModule:function(){return q}});var a=e(38583),i=e(90665),t=e(47823),Z=e(10649),c=e(10639),l=e(89985),r=e(68366);const s=[{path:"",component:(()=>{class o{constructor(o,n){this.globalService=o,this.activatedRoute=n,this.pName="Crane Details",this.craneData=[]}ngOnInit(){this.loadData()}loadData(){this.activatedRoute.params.subscribe(o=>{this.globalService.getData("add_form/getSingleData?table_name=crane&id="+o.id).subscribe(o=>{o&&o.data&&o.data[0]&&(this.craneData=o.data[0])})})}}return o.\u0275fac=function(n){return new(n||o)(c.Y36(l.U),c.Y36(Z.gz))},o.\u0275cmp=c.Xpm({type:o,selectors:[["app-crane-view-detail"]],decls:86,vars:14,consts:[[3,"pageName"],[1,"ion-padding-start","ion-padding-end","container"],["size-xl","3","size-lg","2","size-md","2"],["size-xl","6","size-lg","8","size-md","8","size-sm","12","size-xs","12"],["size","6"],["size","8"],["size","4"]],template:function(o,n){1&o&&(c.TgZ(0,"ion-content"),c._UZ(1,"app-header",0),c.TgZ(2,"div",1),c.TgZ(3,"ion-row"),c._UZ(4,"ion-col",2),c.TgZ(5,"ion-col",3),c.TgZ(6,"ion-card"),c.TgZ(7,"ion-card-content"),c.TgZ(8,"ion-row"),c.TgZ(9,"ion-col",4),c.TgZ(10,"ion-label"),c._uU(11,"Crane number :"),c.qZA(),c.qZA(),c.TgZ(12,"ion-col",4),c._uU(13),c.qZA(),c.qZA(),c.TgZ(14,"ion-row"),c.TgZ(15,"ion-col",5),c.TgZ(16,"ion-label"),c._uU(17,"Are you fully qualified and trained to operate the crane ? :"),c.qZA(),c.qZA(),c.TgZ(18,"ion-col",6),c._uU(19),c.qZA(),c.qZA(),c.TgZ(20,"ion-row"),c.TgZ(21,"ion-col",5),c.TgZ(22,"ion-label"),c._uU(23,"Have you read and understood the relevant SWI for the equipment ? :"),c.qZA(),c.qZA(),c.TgZ(24,"ion-col",6),c._uU(25),c.qZA(),c.qZA(),c.TgZ(26,"ion-row"),c.TgZ(27,"ion-col",4),c.TgZ(28,"ion-label"),c._uU(29,"Is the equipment isolated ? :"),c.qZA(),c.qZA(),c.TgZ(30,"ion-col",6),c._uU(31),c.qZA(),c.qZA(),c.TgZ(32,"ion-row"),c.TgZ(33,"ion-col",4),c.TgZ(34,"ion-label"),c._uU(35,"Inspect Pendant :"),c.qZA(),c.qZA(),c.TgZ(36,"ion-col",4),c._uU(37),c.qZA(),c.qZA(),c.TgZ(38,"ion-row"),c.TgZ(39,"ion-col",4),c.TgZ(40,"ion-label"),c._uU(41,"Inspect Control operation :"),c.qZA(),c.qZA(),c.TgZ(42,"ion-col",4),c._uU(43),c.qZA(),c.qZA(),c.TgZ(44,"ion-row"),c.TgZ(45,"ion-col",4),c.TgZ(46,"ion-label"),c._uU(47,"Directional and SWL sign in place :"),c.qZA(),c.qZA(),c.TgZ(48,"ion-col",4),c._uU(49),c.qZA(),c.qZA(),c.TgZ(50,"ion-row"),c.TgZ(51,"ion-col",4),c.TgZ(52,"ion-label"),c._uU(53,"Limit Switches operational :"),c.qZA(),c.qZA(),c.TgZ(54,"ion-col",4),c._uU(55),c.qZA(),c.qZA(),c.TgZ(56,"ion-row"),c.TgZ(57,"ion-col",4),c.TgZ(58,"ion-label"),c._uU(59,"Hook :"),c.qZA(),c.qZA(),c.TgZ(60,"ion-col",4),c._uU(61),c.qZA(),c.qZA(),c.TgZ(62,"ion-row"),c.TgZ(63,"ion-col",4),c.TgZ(64,"ion-label"),c._uU(65,"Hoist chain/rope :"),c.qZA(),c.qZA(),c.TgZ(66,"ion-col",4),c._uU(67),c.qZA(),c.qZA(),c.TgZ(68,"ion-row"),c.TgZ(69,"ion-col",4),c.TgZ(70,"ion-label"),c._uU(71,"Mechanically Sound :"),c.qZA(),c.qZA(),c.TgZ(72,"ion-col",4),c._uU(73),c.qZA(),c.qZA(),c.TgZ(74,"ion-row"),c.TgZ(75,"ion-col",4),c.TgZ(76,"ion-label"),c._uU(77,"Passed Inspection :"),c.qZA(),c.qZA(),c.TgZ(78,"ion-col",4),c._uU(79),c.qZA(),c.qZA(),c.TgZ(80,"ion-row"),c.TgZ(81,"ion-label"),c._uU(82,"Comment :"),c.qZA(),c.qZA(),c.TgZ(83,"ion-row"),c._uU(84),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(85,"ion-col",2),c.qZA(),c.qZA(),c.qZA()),2&o&&(c.xp6(1),c.Q6J("pageName",n.pName),c.xp6(12),c.Oqu(n.craneData.crane_number),c.xp6(6),c.Oqu(n.craneData.operate_crane),c.xp6(6),c.Oqu(n.craneData.swi),c.xp6(6),c.Oqu(n.craneData.equipment_isolated),c.xp6(6),c.Oqu(n.craneData.inspect_pendant),c.xp6(6),c.Oqu(n.craneData.inspect_control_operation),c.xp6(6),c.Oqu(n.craneData.directional_swl_sign),c.xp6(6),c.Oqu(n.craneData.limit_switches_operational),c.xp6(6),c.Oqu(n.craneData.hook),c.xp6(6),c.Oqu(n.craneData.hoist_chain_rope),c.xp6(6),c.Oqu(n.craneData.mechanically_sound),c.xp6(6),c.Oqu(n.craneData.passed_inspection),c.xp6(5),c.hij(" ",n.craneData.comment," "))},directives:[t.W2,r.G,t.Nd,t.wI,t.PM,t.FN,t.Q$],styles:[""]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[Z.Bz.forChild(s)],Z.Bz]}),o})();var g=e(69270);let q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[a.ez,i.u5,t.Pc,u,g.I]]}),o})()}}]);