(self.webpackChunkhub=self.webpackChunkhub||[]).push([[2234],{92234:function(e,i,o){"use strict";o.r(i),o.d(i,{ProfilePageModule:function(){return q}});var n=o(38583),t=o(90665),l=o(47823),r=o(10649),a=o(64762),s=o(91681),c=o(10639),d=o(89985),Z=o(49481),g=o(68366);function u(e,i){if(1&e&&(c.TgZ(0,"ion-select-option",45),c._uU(1),c.qZA()),2&e){const e=i.$implicit;c.xp6(1),c.hij(" ",e.val," ")}}function m(e,i){if(1&e&&(c.TgZ(0,"ion-select-option",46),c._uU(1),c.qZA()),2&e){const e=i.$implicit;c.xp6(1),c.hij(" ",e.val," ")}}function h(e,i){if(1&e){const e=c.EpF();c.TgZ(0,"ion-col",47),c.TgZ(1,"ion-item",48),c.TgZ(2,"ion-label",49),c._uU(3),c.qZA(),c.TgZ(4,"ion-checkbox",50),c.NdJ("ionChange",function(i){return c.CHM(e),c.oxw().onHighRiskLicences(i)}),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=i.$implicit;c.xp6(3),c.Oqu(e.val),c.xp6(1),c.Q6J("value",e.val)("checked",e.isChecked)}}function p(e,i){if(1&e){const e=c.EpF();c.TgZ(0,"ion-slide"),c.TgZ(1,"ion-grid"),c.TgZ(2,"ion-row"),c.TgZ(3,"ion-col",53),c.TgZ(4,"img",54),c.NdJ("click",function(){const i=c.CHM(e).$implicit;return c.oxw(2).onOpenPreview(i)}),c.qZA(),c.qZA(),c.TgZ(5,"ion-col",55),c.TgZ(6,"p",56),c.TgZ(7,"ion-icon",57),c.NdJ("click",function(){const i=c.CHM(e).index;return c.oxw(2).onImageDelete(i,"riDoc")}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=i.$implicit;c.xp6(4),c.Q6J("src",e,c.LSH)}}function f(e,i){if(1&e&&(c.TgZ(0,"ion-slides",51),c.YNc(1,p,8,1,"ion-slide",52),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngForOf",e.riDocs)}}const _=[{path:"",component:(()=>{class e{constructor(e,i,o,n){this.fb=e,this.globalService=i,this.sharedService=o,this.modalController=n,this.pName="Personal Details",this.salutation=[{id:"Miss.",val:"Miss."},{id:"Mrs.",val:"Mrs."},{id:"Mr.",val:"Mr."}],this.gender=[{id:"Male",val:"Male"},{id:"Female",val:"Female"},{id:"Other",val:"Other"}],this.high_risk_licence=[{id:"LF - Forklift ",val:"LF - Forklift ",isChecked:!1},{id:"RB - Rigging Basic Certification",val:"RB - Rigging Basic Certification",isChecked:!1},{id:"DG - Dogging",val:"DG - Dogging",isChecked:!1},{id:"CN - Non-Slew Mobile Crane (Over 3 Tonne)",val:"CN - Non-Slew Mobile Crane (Over 3 Tonne)",isChecked:!1},{id:"C2 - Slewing Mobile Crane 20t",val:"C2 - Slewing Mobile Crane 20t",isChecked:!1},{id:"C6 - Slewing Mobile Crane up to 60t",val:"C6 - Slewing Mobile Crane up to 60t",isChecked:!1},{id:"CB - Bridge & Gantry Crane",val:"CB - Bridge & Gantry Crane",isChecked:!1},{id:"CV - Vehicle Loading Crane under 10 tonne",val:"CV - Vehicle Loading Crane under 10 tonne",isChecked:!1},{id:"SB - Scaffolding Basic",val:"SB - Scaffolding Basic",isChecked:!1},{id:"LO - Forklift Order Picking Truck",val:"LO - Forklift Order Picking Truck",isChecked:!1},{id:"RI - Rigging Intermediate",val:"RI - Rigging Intermediate",isChecked:!1},{id:"SA - Scaffolding Advanced",val:"SA - Scaffolding Advanced",isChecked:!1},{id:"RA - Rigging Advanced",val:"RA - Rigging Advanced",isChecked:!1},{id:"PB - Concrete Placing Booms",val:"PB - Concrete Placing Booms",isChecked:!1},{id:"SI - Scaffolding Intermediate",val:"SI - Scaffolding Intermediate",isChecked:!1},{id:"CT - Tower Crane",val:"CT - Tower Crane",isChecked:!1},{id:"C0 - Slewing Mobile Crane over 100t",val:"C0 - Slewing Mobile Crane over 100t",isChecked:!1},{id:"HM - Materials Hoists",val:"HM - Materials Hoists",isChecked:!1},{id:"WP - Elevated Work Platform",val:"WP - Elevated Work Platform",isChecked:!1}],this.highRiskLicences=[],this.riDocs=[]}ngOnInit(){this.userProfileForm=this.fb.group({salutation:[""],first_name:[""],middel_name:[""],last_name:[""],residential_address:[""],town:[""],state:[""],postcode:[""],dob:[""],pob:[""],mobile_no:[""],email:[""],gender:[""],usi_number:[""],sap_number:[""],drivers_licence_number:[""],drivers_licence_type:[""],kin_name:[""],kin_relationship:[""],kin_home_address:[""],kin_mobile_no:[""],high_risk_licences:[""],other_qualification:[""],ri_expiry_date:[""],ri_document:[""],fire_warden_expiry_date:[""],fire_warden_document:[""],drivers_licence_C_expiry_date:[""],drivers_licence_C_document:[""]})}onHighRiskLicences(e){this.high_risk_licence.find(i=>{i.val==e.detail.value&&(i.isChecked=!0)}),this.highRiskLicences.push(e.detail.value),this.userProfileForm.controls.high_risk_licences.setValue(this.highRiskLicences)}onSelectImage(e){console.log("event 1",e),console.log("event 2",e.target.files);for(let i=0;i<e.target.files.length;i++)if("application/pdf"==e.target.files[0].type){let i={type:"pdf",val:e.target.files[0]};this.riDocs.length<=0?this.riDocs.push(i):this.riDocs.unshift(i)}else this.sharedService.getBase64(e.target.files[i]).then(e=>{let i={type:"image",val:e};this.riDocs.length<=0?this.riDocs.push(i):this.riDocs.unshift(i),this.userProfileForm.controls.ri_document.setValue(this.riDocs)}).catch(e=>{console.log("error",e)})}onOpenPreview(e){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.modalController.create({component:s.e,cssClass:"transparent-modal",componentProps:{img:e}})).present()})}onOpenPdf(e){}onImageDelete(e,i){this[i].splice(e,1)}onSubmit(){console.log("userProfileForm",this.userProfileForm.value),this.globalService.postData("OnboardingSuperannuation/saveOnboardingProfile",{formData:this.userProfileForm.value}).subscribe(e=>{})}}return e.\u0275fac=function(i){return new(i||e)(c.Y36(t.qu),c.Y36(d.U),c.Y36(Z.F),c.Y36(l.IN))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-profile"]],decls:199,vars:6,consts:[[3,"pageName"],[1,"container"],["size-xl","3","size-lg","3","size-md","3"],["size-xl","6","size-lg","6","size-md","6","size-sm","12","size-xs","12"],[3,"formGroup"],["size","12"],["placeholder","Please select salutation","interface","action-sheet","formControlName","salutation"],["value","salutationVal.id",4,"ngFor","ngForOf"],["placeholder","Please enter first name","formControlName","first_name"],["placeholder","Please enter middle name","formControlName","middel_name"],["placeholder","Please enter last name","formControlName","last_name"],["placeholder","Please enter residential address","formControlName","residential_address"],["placeholder","Please enter town","formControlName","town"],["placeholder","Please enter state","formControlName","state"],["placeholder","Please enter postcode","formControlName","postcode"],["placeholder","Please select dob","formControlName","dob"],["placeholder","Please enter place of birth","formControlName","pob"],["placeholder","Please enter mobile no","formControlName","mobile_no"],["placeholder","Please enter email","formControlName","email"],["placeholder","Please select gender","interface","action-sheet","formControlName","gender"],["value","genderVal.id",4,"ngFor","ngForOf"],["placeholder","Please enter USI number","formControlName","usi_number"],["placeholder","Please enter SAP number","formControlName","sap_number"],["placeholder","Please enter driver's licence number","formControlName","drivers_licence_number"],["placeholder","Please select driver's licence type","interface","action-sheet","formControlName","drivers_licence_type"],["value",""],["size","12",1,"heading"],["placeholder","Please enter name","formControlName","kin_name"],["placeholder","Please enter relationship","formControlName","kin_relationship"],["placeholder","Please enter home address","formControlName","kin_home_address"],["placeholder","Please enter mobile no","formControlName","kin_mobile_no"],["size","12",1,"sub-heading"],["size","12",1,"ion-text-center"],["size-xl","6","size-lg","6","size-md","12","size-sm","12","size-xs","12",4,"ngFor","ngForOf"],[1,"text-val"],["formControlName","other_qualification"],["placeholder","Please select expiry date","formControlName","ri_expiry_date"],["type","file","multiple","",3,"change"],["class","preview-slides",4,"ngIf"],["size","12",1,"text-val"],["placeholder","Please select expiry date","formControlName","fire_warden_expiry_date"],["type","file","formControlName","fire_warden_document"],["placeholder","Please select expiry date","formControlName","drivers_licence_C_expiry_date"],["type","file","formControlName","drivers_licence_C_document"],[1,"btn",3,"click"],["value","salutationVal.id"],["value","genderVal.id"],["size-xl","6","size-lg","6","size-md","12","size-sm","12","size-xs","12"],["lines","none"],[1,"ion-text-wrap"],["slot","start",3,"value","checked","ionChange"],[1,"preview-slides"],[4,"ngFor","ngForOf"],["size","11"],["tappable","",3,"src","click"],["size","1"],[1,"question"],["name","close",3,"click"]],template:function(e,i){1&e&&(c.TgZ(0,"ion-content"),c._UZ(1,"app-header",0),c.TgZ(2,"div",1),c.TgZ(3,"ion-row"),c._UZ(4,"ion-col",2),c.TgZ(5,"ion-col",3),c.TgZ(6,"ion-card",4),c.TgZ(7,"ion-row"),c.TgZ(8,"ion-col",5),c.TgZ(9,"ion-label"),c._uU(10,"Salutation"),c.qZA(),c.qZA(),c.TgZ(11,"ion-col",5),c.TgZ(12,"ion-select",6),c.YNc(13,u,2,1,"ion-select-option",7),c.qZA(),c.qZA(),c.TgZ(14,"ion-col",5),c.TgZ(15,"ion-label"),c._uU(16,"First Name"),c.qZA(),c.qZA(),c.TgZ(17,"ion-col",5),c._UZ(18,"ion-input",8),c.qZA(),c.TgZ(19,"ion-col",5),c.TgZ(20,"ion-label"),c._uU(21,"Middle Name"),c.qZA(),c.qZA(),c.TgZ(22,"ion-col",5),c._UZ(23,"ion-input",9),c.qZA(),c.TgZ(24,"ion-col",5),c.TgZ(25,"ion-label"),c._uU(26,"Last Name"),c.qZA(),c.qZA(),c.TgZ(27,"ion-col",5),c._UZ(28,"ion-input",10),c.qZA(),c.TgZ(29,"ion-col",5),c.TgZ(30,"ion-label"),c._uU(31,"Residential address"),c.qZA(),c.qZA(),c.TgZ(32,"ion-col",5),c._UZ(33,"ion-input",11),c.qZA(),c.TgZ(34,"ion-col",5),c.TgZ(35,"ion-label"),c._uU(36,"Town"),c.qZA(),c.qZA(),c.TgZ(37,"ion-col",5),c._UZ(38,"ion-input",12),c.qZA(),c.TgZ(39,"ion-col",5),c.TgZ(40,"ion-label"),c._uU(41,"State"),c.qZA(),c.qZA(),c.TgZ(42,"ion-col",5),c._UZ(43,"ion-input",13),c.qZA(),c.TgZ(44,"ion-col",5),c.TgZ(45,"ion-label"),c._uU(46,"Postcode"),c.qZA(),c.qZA(),c.TgZ(47,"ion-col",5),c._UZ(48,"ion-input",14),c.qZA(),c.TgZ(49,"ion-col",5),c.TgZ(50,"ion-label"),c._uU(51,"Date of birth"),c.qZA(),c.qZA(),c.TgZ(52,"ion-col",5),c._UZ(53,"ion-datetime",15),c.qZA(),c.TgZ(54,"ion-col",5),c.TgZ(55,"ion-label"),c._uU(56,"Place of birth"),c.qZA(),c.qZA(),c.TgZ(57,"ion-col",5),c._UZ(58,"ion-input",16),c.qZA(),c.TgZ(59,"ion-col",5),c.TgZ(60,"ion-label"),c._uU(61,"Mobile no"),c.qZA(),c.qZA(),c.TgZ(62,"ion-col",5),c._UZ(63,"ion-input",17),c.qZA(),c.TgZ(64,"ion-col",5),c.TgZ(65,"ion-label"),c._uU(66,"Email"),c.qZA(),c.qZA(),c.TgZ(67,"ion-col",5),c._UZ(68,"ion-input",18),c.qZA(),c.TgZ(69,"ion-col",5),c.TgZ(70,"ion-label"),c._uU(71,"Gender"),c.qZA(),c.qZA(),c.TgZ(72,"ion-col",5),c.TgZ(73,"ion-select",19),c.YNc(74,m,2,1,"ion-select-option",20),c.qZA(),c.qZA(),c.TgZ(75,"ion-col",5),c.TgZ(76,"ion-label"),c._uU(77,"USI Number"),c.qZA(),c.qZA(),c.TgZ(78,"ion-col",5),c._UZ(79,"ion-input",21),c.qZA(),c.TgZ(80,"ion-col",5),c.TgZ(81,"ion-label"),c._uU(82,"SAP Number"),c.qZA(),c.qZA(),c.TgZ(83,"ion-col",5),c._UZ(84,"ion-input",22),c.qZA(),c.TgZ(85,"ion-col",5),c.TgZ(86,"ion-label"),c._uU(87,"Driver's licence Number"),c.qZA(),c.qZA(),c.TgZ(88,"ion-col",5),c._UZ(89,"ion-input",23),c.qZA(),c.TgZ(90,"ion-col",5),c.TgZ(91,"ion-label"),c._uU(92,"Driver's licence Type"),c.qZA(),c.qZA(),c.TgZ(93,"ion-col",5),c.TgZ(94,"ion-select",24),c._UZ(95,"ion-select-option",25),c.qZA(),c.qZA(),c.qZA(),c.TgZ(96,"ion-row"),c.TgZ(97,"ion-col",26),c._uU(98,"Next of Kin"),c.qZA(),c.TgZ(99,"ion-col",5),c.TgZ(100,"ion-label"),c._uU(101,"Name"),c.qZA(),c.qZA(),c.TgZ(102,"ion-col",5),c._UZ(103,"ion-input",27),c.qZA(),c.TgZ(104,"ion-col",5),c.TgZ(105,"ion-label"),c._uU(106,"Relationship"),c.qZA(),c.qZA(),c.TgZ(107,"ion-col",5),c._UZ(108,"ion-input",28),c.qZA(),c.TgZ(109,"ion-col",5),c.TgZ(110,"ion-label"),c._uU(111,"Home address"),c.qZA(),c.qZA(),c.TgZ(112,"ion-col",5),c._UZ(113,"ion-input",29),c.qZA(),c.TgZ(114,"ion-col",5),c.TgZ(115,"ion-label"),c._uU(116,"Mobile no"),c.qZA(),c.qZA(),c.TgZ(117,"ion-col",5),c._UZ(118,"ion-input",30),c.qZA(),c.qZA(),c.TgZ(119,"ion-row"),c.TgZ(120,"ion-col",26),c._uU(121,"Qualification & Competencies"),c.qZA(),c.TgZ(122,"ion-col",31),c._uU(123," Copies of all relevant qualifications (clear colour scans or photographs, front and back) are required to be submitted with this form."),c.qZA(),c.TgZ(124,"ion-col",32),c._uU(125,"High risk licences"),c.qZA(),c.TgZ(126,"ion-col",31),c._uU(127," Only national photo ID high risk licenses are accepted."),c.qZA(),c.YNc(128,h,5,3,"ion-col",33),c.qZA(),c.TgZ(129,"ion-row"),c.TgZ(130,"ion-col",26),c._uU(131,"Other Qualifications"),c.qZA(),c.TgZ(132,"ion-text",34),c._uU(133,"Click the box below, and choose the qualifications you have in the pop out box that appears. A set of fields for the expiry date of the qualification and a place to upload supporting documents will appear once you make your selection. If the qualification you are submitting does not have an expiry date, please leave that field blank."),c.qZA(),c.TgZ(134,"ion-col",5),c._UZ(135,"ion-textarea",35),c.qZA(),c.qZA(),c.TgZ(136,"ion-row"),c.TgZ(137,"ion-col",32),c._uU(138," RI - Rigging Intermediate"),c.qZA(),c.TgZ(139,"ion-col",5),c.TgZ(140,"ion-label"),c._uU(141,"Expiry Date "),c.qZA(),c.qZA(),c.TgZ(142,"ion-col",5),c._UZ(143,"ion-datetime",36),c.qZA(),c.TgZ(144,"ion-col",5),c.TgZ(145,"ion-label"),c._uU(146,"Upload Documents "),c.qZA(),c.qZA(),c.TgZ(147,"ion-col",5),c.TgZ(148,"input",37),c.NdJ("change",function(e){return i.onSelectImage(e)}),c.qZA(),c.YNc(149,f,2,1,"ion-slides",38),c.qZA(),c.TgZ(150,"ion-col",39),c._uU(151," Two files max - PDF, PNG or JPEG only. "),c.qZA(),c.qZA(),c.TgZ(152,"ion-row"),c.TgZ(153,"ion-col",32),c._uU(154,"Fire Warden"),c.qZA(),c.TgZ(155,"ion-col",5),c.TgZ(156,"ion-label"),c._uU(157,"Expiry Date "),c.qZA(),c.qZA(),c.TgZ(158,"ion-col",5),c._UZ(159,"ion-datetime",40),c.qZA(),c.TgZ(160,"ion-col",5),c.TgZ(161,"ion-label"),c._uU(162,"Upload Documents "),c.qZA(),c.qZA(),c.TgZ(163,"ion-col",5),c._UZ(164,"ion-input",41),c.qZA(),c.TgZ(165,"ion-col",39),c._uU(166," Two files max - PDF, PNG or JPEG only. "),c.qZA(),c.qZA(),c.TgZ(167,"ion-row"),c.TgZ(168,"ion-col",32),c._uU(169,"Drivers Licence - C"),c.qZA(),c.TgZ(170,"ion-col",5),c.TgZ(171,"ion-label"),c._uU(172,"Expiry Date "),c.qZA(),c.qZA(),c.TgZ(173,"ion-col",5),c._UZ(174,"ion-datetime",42),c.qZA(),c.TgZ(175,"ion-col",5),c.TgZ(176,"ion-label"),c._uU(177,"Upload Documents "),c.qZA(),c.qZA(),c.TgZ(178,"ion-col",5),c._UZ(179,"ion-input",43),c.qZA(),c.TgZ(180,"ion-col",39),c._uU(181," Two files max - PDF, PNG or JPEG only. "),c.qZA(),c.qZA(),c.TgZ(182,"ion-row"),c.TgZ(183,"ion-col",26),c._uU(184,"Declaration"),c.qZA(),c.TgZ(185,"ion-col",39),c._uU(186," Before submitting this form, please take time to review your responses and ensure all details are complete and correct. "),c._UZ(187,"hr"),c.qZA(),c.TgZ(188,"ion-col",39),c._uU(189," I understand that the information in this form will be used for the purpose of managing my access to project sites and assessing my competencies and qualifications to carry out assigned work at this site. Further information may also be collected, such as site induction and training records. "),c.qZA(),c.TgZ(190,"ion-col",39),c._uU(191," I certify that the information provided by me in this form is to the best of my knowledge true and accurate. I will update HORT Enterprises if any of this information changes. "),c.qZA(),c.TgZ(192,"ion-col",39),c._uU(193," I understand that HORT Enterprises reserve the right to verify the information provided. Any false statements will be sufficient to cause this person's rejection as an applicant for site access, dismissal if hired, or termination of agreement or contract. "),c.qZA(),c.qZA(),c.TgZ(194,"ion-row"),c.TgZ(195,"ion-col",5),c.TgZ(196,"ion-button",44),c.NdJ("click",function(){return i.onSubmit()}),c._uU(197,"SUBMIT"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(198,"ion-col",2),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(1),c.Q6J("pageName",i.pName),c.xp6(5),c.Q6J("formGroup",i.userProfileForm),c.xp6(7),c.Q6J("ngForOf",i.salutation),c.xp6(61),c.Q6J("ngForOf",i.gender),c.xp6(54),c.Q6J("ngForOf",i.high_risk_licence),c.xp6(21),c.Q6J("ngIf",i.riDocs.length>0))},directives:[l.W2,g.G,l.Nd,l.wI,l.PM,t.JL,t.sg,l.Q$,l.t9,l.QI,t.JJ,t.u,n.sg,l.pK,l.j9,l.x4,l.n0,l.yW,l.g2,n.O5,l.YG,l.Ie,l.nz,l.w,l.Hr,l.A$,l.jY,l.gu],styles:[".heading[_ngcontent-%COMP%]{text-align:center;border-style:double}.sub-heading[_ngcontent-%COMP%]{text-align:center;font-size:12px}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(_)],r.Bz]}),e})();var A=o(69270);let q=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,t.u5,l.Pc,T,A.I,t.UX]]}),e})()},49481:function(e,i,o){"use strict";o.d(i,{F:function(){return s}});var n=o(64762),t=o(10639),l=o(89985),r=o(47823),a=o(84267);let s=(()=>{class e{constructor(e,i,o){this.globalService=e,this.actionSheetController=i,this.camera=o,this.notViewNotiCount=0,this.prestartMenu=[{menuName:"LV",route:"#",favorite:!1,position_in_list:1},{menuName:"Forklift",route:"#",favorite:!1,position_in_list:2},{menuName:"Telehandler",route:"/home/safety-menu/telehandler-add-form",favorite:!1,position_in_list:3},{menuName:"Crane",route:"/home/safety-menu/crane-add-form",favorite:!1,position_in_list:4},{menuName:"Vehicle Hoist",route:"/home/safety-menu/vehicle-hoist-add-form",favorite:!1,position_in_list:5}]}getBase64(e){return new Promise((i,o)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>i(n.result),n.onerror=e=>o(e)})}mobileUploadImages(){return(0,n.mG)(this,void 0,void 0,function*(){let e;const i=yield this.actionSheetController.create({header:"Select Image source",buttons:[{text:"Load from Library",handler:()=>e=this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY)},{text:"Use Camera",handler:()=>e=this.pickImage(this.camera.PictureSourceType.CAMERA)},{text:"Cancel",role:"cancel"}]});yield i.present()})}pickImage(e){return(0,n.mG)(this,void 0,void 0,function*(){const i={quality:100,sourceType:e,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE};yield this.camera.getPicture(i).then(e=>{console.log("imageData",e);let i="data:image/jpeg;base64,"+e;return console.log("pickImage",i),i},e=>{console.log("errOf Image ",e)})})}resize(e){return e.innerWidth?e.innerWidth:e.target.innerWidth}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(l.U),t.LFG(r.BX),t.LFG(a.V1))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);