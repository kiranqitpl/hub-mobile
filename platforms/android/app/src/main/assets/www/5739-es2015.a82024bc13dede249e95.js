(self.webpackChunkhub=self.webpackChunkhub||[]).push([[5739],{5739:function(e,t,n){"use strict";n.r(t),n.d(t,{InvestigationPageModule:function(){return u}});var i=n(38583),o=n(90665),_=n(47823),a=n(10649),s=n(16738),c=n.n(s),r=n(92340),d=n(10639),l=n(89985);const p=[{path:"",component:(()=>{class e{constructor(e,t){this.nav=e,this.global=t,this.imageUrl=r.N.imageUrl,this.loggedInUser="",this.selected="Investigation team members",this.reputationCheckBox=[{val:"Safety",isChecked:!1},{val:"Environmental",isChecked:!1},{val:"Quality",isChecked:!1},{val:"N/A",isChecked:!1}],this.data=["Investigation team members","Sequence of events","Investigators Initial Findings (Event Factors)","Immediate Cause Analysis","Investigation Team Conclusion of Incident Causes","Additional Investigation"],this.listOfUsers=[],this.names=[]}ngOnInit(){this.loggedInUser=JSON.parse(localStorage.getItem("userDetails")),this.loadData()}loadData(){this.global.getData("Investigator/getInvestigator").subscribe(e=>{e?this.listOfUsers=e.data:console.log("response of get investigator api",e)},e=>{console.log(e)})}ionViewWillEnter(){var e,t;let n=JSON.parse(localStorage.getItem("singleView"));if(this.incident_id=n.id,this.isFrom=localStorage.getItem("isInvestigationFrom"),"edit"==this.isFrom){this.investigatorId=n.investigation_details.id;let i=n.investigation_details;null!==(null==i?void 0:i.name)&&(this.selectedName=null===(e=null==i?void 0:i.name[0])||void 0===e?void 0:e.investigator_name),console.log("this.selectedName ",this.selectedName),this.additional_investigation_required=i.additional_investigation_required,void 0!==i.comments&&"undefined"!==i.comments&&(this.comments=i.comments),void 0!==i.critical_control_defence_failure_absent_non_compliance&&"undefined"!==i.critical_control_defence_failure_absent_non_compliance&&(this.critical_control_defence_failure_absent_non_compliance=i.critical_control_defence_failure_absent_non_compliance),void 0!==i.critical_controls_applicable_for_task&&"undefined"!==i.critical_controls_applicable_for_task&&(this.critical_controls_applicable_for_task=i.critical_controls_applicable_for_task),this.date_investigation_commenced=i.date_investigation_commenced,this.impact_contact_events=i.impact_contact_events;let o=null===(t=null==i?void 0:i.is_a_safety_environmental_or_quality_alert_required)||void 0===t?void 0:t.split(",");this.reputationCheckBox.forEach(e=>{o.forEach(t=>{e.val==t&&(e.isChecked=!0)})}),void 0!==i.key_earnings&&"undefined"!==i.key_earnings&&(this.key_earnings=i.key_earnings),void 0!==i.other_contributing_event_factors&&"undefined"!==i.other_contributing_event_factors&&(this.other_contributing_event_factors=i.other_contributing_event_factors),void 0!==i.pre_incident_contributing_events&&"undefined"!==i.pre_incident_contributing_events&&(this.pre_incident_contributing_events=i.pre_incident_contributing_events),void 0!==i.workplace_conditions&&"undefined"!==i.workplace_conditions&&(this.workplace_conditions=i.workplace_conditions),void 0!==i.work_and_people_practices&&"undefined"!==i.work_and_people_practices&&(this.work_and_people_practices=i.work_and_people_practices),void 0!==i.employee_competence&&"undefined"!==i.employee_competence&&(this.employee_competence=i.employee_competence),void 0!==i.experience&&"undefined"!==i.experience&&(this.experience=i.experience),void 0!==i.plant_equipment_or_tooling_involve_in_incident&&"undefined"!==i.plant_equipment_or_tooling_involve_in_incident&&(this.plant_equipment_or_tooling_involve_in_incident=i.plant_equipment_or_tooling_involve_in_incident),void 0!==i.relevant_documentation&&"undefined"!==i.relevant_documentation&&(this.relevant_documentation=i.relevant_documentation),void 0!==i.environmental_related_factors&&"undefined"!==i.environmental_related_factors&&(this.environmental_related_factors=i.environmental_related_factors),void 0!==i.critical_control_defence_failure_absent_non_compliance&&"undefined"!==i.critical_control_defence_failure_absent_non_compliance&&(this.critical_control_defence_failure_absent_non_compliance=i.critical_control_defence_failure_absent_non_compliance),void 0!==i.what_substandard_acts_practices_and_conditions_caused_or_could&&"undefined"!==i.what_substandard_acts_practices_and_conditions_caused_or_could&&(this.what_substandard_acts_practices_and_conditions_caused_or_could=i.what_substandard_acts_practices_and_conditions_caused_or_could),void 0!==i.post_incident_events&&"undefined"!==i.post_incident_events&&(this.post_incident_events=i.post_incident_events),this.reportable_incident=i.reportable_incident,void 0!==i.root_cause&&"undefined"!==i.root_cause&&(this.root_cause=i.root_cause),this.type=i.type,void 0!==i.what_systems_personal_factors_caused_or_could_cause_the_incident&&"undefined"!==i.what_systems_personal_factors_caused_or_could_cause_the_incident&&(this.what_systems_personal_factors_caused_or_could_cause_the_incident=i.what_systems_personal_factors_caused_or_could_cause_the_incident)}}selectedValue(e){console.log("selectedValue",e),this.listOfUsers.forEach(t=>{if(t.employee_id==e.detail.value){let e={user_id:t.employee_id,user_name:t.full_name};this.selectedName=t.employee_id,this.names.push(e)}})}onSubmit(){let e=[];this.reputationCheckBox.forEach(t=>{t.isChecked&&e.push(t.val)}),this.listOfUsers.forEach(e=>{if(e.full_name==this.selectedName){let t={user_id:e.employee_id,user_name:e.full_name};this.selectedName=e.employee_id,this.names.push(t)}}),console.log("this.names",this.names),this.is_a_safety_environmental_or_quality_alert_required=e,this.name=[{user_id:100,user_name:"Deepak"},{user_id:101,user_name:"Gaurav"}];const t=new FormData;"edit"==this.isFrom&&t.append("id",this.investigatorId),t.append("incident_id",this.incident_id),t.append("name",JSON.stringify(this.names)),t.append("date_investigation_commenced",this.date_investigation_commenced),t.append("reportable_incident",this.reportable_incident),t.append("pre_incident_contributing_events",this.pre_incident_contributing_events),t.append("post_incident_events",this.post_incident_events),t.append("other_contributing_event_factors",this.other_contributing_event_factors),t.append("critical_controls_applicable_for_task",this.critical_controls_applicable_for_task),t.append("workplace_conditions",this.workplace_conditions),t.append("work_and_people_practices",this.work_and_people_practices),t.append("employee_competence",this.employee_competence),t.append("experience",this.experience),t.append("plant_equipment_or_tooling_involve_in_incident",this.plant_equipment_or_tooling_involve_in_incident),t.append("relevant_documentation",this.relevant_documentation),t.append("environmental_related_factors",this.environmental_related_factors),t.append("critical_control_defence_failure_absent_non_compliance",this.critical_control_defence_failure_absent_non_compliance),t.append("what_substandard_acts_practices_and_conditions_caused_or_could",this.what_substandard_acts_practices_and_conditions_caused_or_could),t.append("what_systems_personal_factors_caused_or_could_cause_the_incident",this.what_systems_personal_factors_caused_or_could_cause_the_incident),t.append("root_cause",this.root_cause),t.append("key_earnings",this.key_earnings),t.append("comments",this.comments),t.append("is_a_safety_environmental_or_quality_alert_required",this.is_a_safety_environmental_or_quality_alert_required),t.append("additional_investigation_required",this.additional_investigation_required),t.append("type",this.type),t.append("investigator_id",this.loggedInUser.id),this.global.presentLoading(),this.global.postData("Investigator/submitInvestigation",t).subscribe(e=>{e.status?(this.global.presentToast(e.message),localStorage.removeItem("investigationLocalStorage"),this.nav.navigateRoot("incident-form-list")):this.global.presentToast("Something went wrong"),this.global.dismissLoading()},e=>{console.log("err",e),this.global.dismissLoading()})}saveItemOffline(){let e=[];this.reputationCheckBox.forEach(t=>{t.isChecked&&e.push(t.val)}),this.is_a_safety_environmental_or_quality_alert_required=e,this.name=[{user_id:100,user_name:"Deepak"},{user_id:101,user_name:"Gaurav"}],this.listOfUsers.forEach(e=>{if(e.employee_id==this.selectedName){let t={user_id:e.employee_id,user_name:e.full_name};this.selectedName=e.employee_id,this.names.push(t)}});const t=new FormData;"edit"==this.isFrom&&t.append("id",this.investigatorId),t.append("incident_id",this.incident_id),t.append("name",JSON.stringify(this.names)),t.append("date_investigation_commenced",this.date_investigation_commenced),t.append("reportable_incident",this.reportable_incident),t.append("pre_incident_contributing_events",this.pre_incident_contributing_events),t.append("post_incident_events",this.post_incident_events),t.append("other_contributing_event_factors",this.other_contributing_event_factors),t.append("critical_controls_applicable_for_task",this.critical_controls_applicable_for_task),t.append("workplace_conditions",this.workplace_conditions),t.append("work_and_people_practices",this.work_and_people_practices),t.append("employee_competence",this.employee_competence),t.append("experience",this.experience),t.append("plant_equipment_or_tooling_involve_in_incident",this.plant_equipment_or_tooling_involve_in_incident),t.append("relevant_documentation",this.relevant_documentation),t.append("environmental_related_factors",this.environmental_related_factors),t.append("critical_control_defence_failure_absent_non_compliance",this.critical_control_defence_failure_absent_non_compliance),t.append("what_substandard_acts_practices_and_conditions_caused_or_could",this.what_substandard_acts_practices_and_conditions_caused_or_could),t.append("what_systems_personal_factors_caused_or_could_cause_the_incident",this.what_systems_personal_factors_caused_or_could_cause_the_incident),t.append("root_cause",this.root_cause),t.append("key_earnings",this.key_earnings),t.append("comments",this.comments),t.append("is_a_safety_environmental_or_quality_alert_required",this.is_a_safety_environmental_or_quality_alert_required),t.append("additional_investigation_required",this.additional_investigation_required),t.append("type",this.type),this.global.presentLoading(),this.global.postData("Investigator/submitInvestigation_incomplete",t).subscribe(e=>{e.status?(this.global.presentToast(e.message),localStorage.removeItem("investigationLocalStorage"),this.nav.navigateRoot("incident-form-list")):this.global.presentToast("Something went wrong"),this.global.dismissLoading()},e=>{console.log("err",e),this.global.dismissLoading()})}selectChekbox(e){"add"==this.isFrom&&localStorage.setItem("investigationLocalStorage",JSON.stringify({name:this.selectedName,date_investigation_commenced:this.date_investigation_commenced,reportable_incident:this.reportable_incident,pre_incident_contributing_events:this.pre_incident_contributing_events,post_incident_events:this.post_incident_events,other_contributing_event_factors:this.other_contributing_event_factors,critical_controls_applicable_for_task:this.critical_controls_applicable_for_task,workplace_conditions:this.workplace_conditions,work_and_people_practices:this.work_and_people_practices,employee_competence:this.employee_competence,experience:this.experience,plant_equipment_or_tooling_involve_in_incident:this.plant_equipment_or_tooling_involve_in_incident,relevant_documentation:this.relevant_documentation,environmental_related_factors:this.environmental_related_factors,critical_control_defence_failure_absent_non_compliance:this.critical_control_defence_failure_absent_non_compliance,what_substandard_acts_practices_and_conditions_caused_or_could:this.what_substandard_acts_practices_and_conditions_caused_or_could,what_systems_personal_factors_caused_or_could_cause_the_incident:this.what_systems_personal_factors_caused_or_could_cause_the_incident,key_earnings:this.key_earnings,comments:this.comments,reputationCheckBox:this.reputationCheckBox,additional_investigation_required:this.additional_investigation_required,type:this.type,id:this.incident_id}))}checkDetails(e){this.selected=e,"add"==this.isFrom&&localStorage.setItem("investigationLocalStorage",JSON.stringify({name:this.selectedName,date_investigation_commenced:this.date_investigation_commenced,reportable_incident:this.reportable_incident,pre_incident_contributing_events:this.pre_incident_contributing_events,post_incident_events:this.post_incident_events,other_contributing_event_factors:this.other_contributing_event_factors,critical_controls_applicable_for_task:this.critical_controls_applicable_for_task,workplace_conditions:this.workplace_conditions,work_and_people_practices:this.work_and_people_practices,employee_competence:this.employee_competence,experience:this.experience,plant_equipment_or_tooling_involve_in_incident:this.plant_equipment_or_tooling_involve_in_incident,relevant_documentation:this.relevant_documentation,environmental_related_factors:this.environmental_related_factors,critical_control_defence_failure_absent_non_compliance:this.critical_control_defence_failure_absent_non_compliance,what_substandard_acts_practices_and_conditions_caused_or_could:this.what_substandard_acts_practices_and_conditions_caused_or_could,what_systems_personal_factors_caused_or_could_cause_the_incident:this.what_systems_personal_factors_caused_or_could_cause_the_incident,key_earnings:this.key_earnings,comments:this.comments,reputationCheckBox:this.reputationCheckBox,additional_investigation_required:this.additional_investigation_required,type:this.type,id:this.incident_id}))}additionalRadio(e){this.additional_investigation_required=e.detail.value,"add"==this.isFrom&&localStorage.setItem("investigationLocalStorage",JSON.stringify({name:this.selectedName,date_investigation_commenced:this.date_investigation_commenced,reportable_incident:this.reportable_incident,pre_incident_contributing_events:this.pre_incident_contributing_events,post_incident_events:this.post_incident_events,other_contributing_event_factors:this.other_contributing_event_factors,critical_controls_applicable_for_task:this.critical_controls_applicable_for_task,workplace_conditions:this.workplace_conditions,work_and_people_practices:this.work_and_people_practices,employee_competence:this.employee_competence,experience:this.experience,plant_equipment_or_tooling_involve_in_incident:this.plant_equipment_or_tooling_involve_in_incident,relevant_documentation:this.relevant_documentation,environmental_related_factors:this.environmental_related_factors,critical_control_defence_failure_absent_non_compliance:this.critical_control_defence_failure_absent_non_compliance,what_substandard_acts_practices_and_conditions_caused_or_could:this.what_substandard_acts_practices_and_conditions_caused_or_could,what_systems_personal_factors_caused_or_could_cause_the_incident:this.what_systems_personal_factors_caused_or_could_cause_the_incident,key_earnings:this.key_earnings,comments:this.comments,reputationCheckBox:this.reputationCheckBox,additional_investigation_required:this.additional_investigation_required,type:this.type,id:this.incident_id}))}typeSelect(e){"add"==this.isFrom&&localStorage.setItem("investigationLocalStorage",JSON.stringify({name:this.selectedName,date_investigation_commenced:this.date_investigation_commenced,reportable_incident:this.reportable_incident,pre_incident_contributing_events:this.pre_incident_contributing_events,post_incident_events:this.post_incident_events,other_contributing_event_factors:this.other_contributing_event_factors,critical_controls_applicable_for_task:this.critical_controls_applicable_for_task,workplace_conditions:this.workplace_conditions,work_and_people_practices:this.work_and_people_practices,employee_competence:this.employee_competence,experience:this.experience,plant_equipment_or_tooling_involve_in_incident:this.plant_equipment_or_tooling_involve_in_incident,relevant_documentation:this.relevant_documentation,environmental_related_factors:this.environmental_related_factors,critical_control_defence_failure_absent_non_compliance:this.critical_control_defence_failure_absent_non_compliance,what_substandard_acts_practices_and_conditions_caused_or_could:this.what_substandard_acts_practices_and_conditions_caused_or_could,what_systems_personal_factors_caused_or_could_cause_the_incident:this.what_systems_personal_factors_caused_or_could_cause_the_incident,key_earnings:this.key_earnings,comments:this.comments,reputationCheckBox:this.reputationCheckBox,additional_investigation_required:this.additional_investigation_required,type:this.type,id:this.incident_id}))}deSelect(e){this.selected=""}goBack(){this.nav.back()}dateSelect(e){c()(e.detail.value).format("YYYY-MM-DD"),this.date_investigation_commenced=c()(e.detail.value).format("YYYY-MM-DD")}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(_.SH),d.Y36(l.U))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-investigation"]],decls:0,vars:0,template:function(e,t){},styles:["ion-content[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]{position:absolute;right:0;top:30px}ion-content[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]{height:18px;width:18px;-o-object-fit:contain;object-fit:contain}ion-content[_ngcontent-%COMP%]   .incident[_ngcontent-%COMP%]{font-family:mon-bold;width:100%;--background:#e0e0e0;overflow:hidden!important;height:52px;--border-radius:31px;border-radius:31px;align-items:flex-start;align-content:flex-start;justify-content:flex-start;margin:0 0 24px}ion-content[_ngcontent-%COMP%]   .incident[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-transform:capitalize;text-align:left;justify-content:flex-start;position:absolute;left:0;top:5px;color:#313131;font-size:20px;margin-top:10px}ion-content[_ngcontent-%COMP%]   .incident[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:3px;position:absolute;right:0}ion-content[_ngcontent-%COMP%]   .activeBackground[_ngcontent-%COMP%]{border-radius:20px;margin-bottom:22px;background-color:#f3f3f3;padding:15px;font-family:mon-bold}ion-content[_ngcontent-%COMP%]   .activeBackground[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-transform:capitalize;text-align:left;justify-content:flex-start;color:#313131;font-size:20px}ion-content[_ngcontent-%COMP%]   .activeBackground[_ngcontent-%COMP%]   .headerTitle[_ngcontent-%COMP%]{display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   .activeBackground[_ngcontent-%COMP%]   .headerTitle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:33px;margin-top:-8px}ion-content[_ngcontent-%COMP%]   .ra[_ngcontent-%COMP%]{text-transform:capitalize;--background:transparent;padding:0;margin:0;--padding-top:0px;--inner-padding-top:0;--inner-padding-end:0;--inner-padding-bottom:0;--inner-padding-start:0;--padding-bottom:0;--padding-start:0;--padding-end:0}ion-content[_ngcontent-%COMP%]   .ra[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:mon-medium;font-size:15px;color:var(--black-color)}ion-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:1px;background:#ccc;margin-top:0;margin-bottom:0}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[a.Bz.forChild(p)],a.Bz]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[i.ez,o.u5,_.Pc,h]]}),e})()}}]);