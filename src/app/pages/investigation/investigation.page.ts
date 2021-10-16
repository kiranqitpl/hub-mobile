import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.page.html',
  styleUrls: ['./investigation.page.scss'],
})
export class InvestigationPage implements OnInit {
  data: any = [];
  selected: any ='Investigation team members';
  reputationCheckBox: any = [
    {
      val: "Safety",
      isChecked: false
    },
    {
      val: "Environmental",
      isChecked: false
    },
    {
      val: "Quality",
      isChecked: false
    },
    {
      val: "N/A",
      isChecked: false
    }
  ]
  constructor(private nav: NavController, private global: GlobalService) { }

  listOfUsers: any = [];
  ngOnInit() {
    this.data = [
      'Investigation team members',
      'Sequence of events',
      'Investigators Initial Findings (Event Factors)',
      'Immediate Cause Analysis',
      'Investigation Team Conclusion of Incident Causes',
      'Additional Investigation'
    ];
  }


  checkDetails(i) {
    this.selected = i;
    if(this.isFrom=='add'){
      let localDataStore = {
        name: this.selectedName,
        date_investigation_commenced: this.date_investigation_commenced,
        reportable_incident: this.reportable_incident,
        pre_incident_contributing_events: this.pre_incident_contributing_events,
        post_incident_events: this.post_incident_events,
        other_contributing_event_factors: this.other_contributing_event_factors,
        critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
        workplace_conditions: this.workplace_conditions,
        work_and_people_practices: this.work_and_people_practices,
        employee_competence: this.employee_competence,
        experience: this.experience,
        plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
        relevant_documentation: this.relevant_documentation,
        environmental_related_factors: this.environmental_related_factors,
        critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
        what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
        what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
        key_earnings: this.key_earnings,
        comments: this.comments,
        reputationCheckBox: this.reputationCheckBox,
        additional_investigation_required: this.additional_investigation_required,
        type: this.type,
        id: this.incident_id
      }
      localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore))
    }
  
  }

  additionalRadio(event) {
    this.additional_investigation_required = event.detail.value;

    if(this.isFrom=='add'){
      let localDataStore = {
        name: this.selectedName,
        date_investigation_commenced: this.date_investigation_commenced,
        reportable_incident: this.reportable_incident,
        pre_incident_contributing_events: this.pre_incident_contributing_events,
        post_incident_events: this.post_incident_events,
        other_contributing_event_factors: this.other_contributing_event_factors,
        critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
        workplace_conditions: this.workplace_conditions,
        work_and_people_practices: this.work_and_people_practices,
        employee_competence: this.employee_competence,
        experience: this.experience,
        plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
        relevant_documentation: this.relevant_documentation,
        environmental_related_factors: this.environmental_related_factors,
        critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
        what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
        what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
        key_earnings: this.key_earnings,
        comments: this.comments,
        reputationCheckBox: this.reputationCheckBox,
        additional_investigation_required: this.additional_investigation_required,
        type: this.type,
        id: this.incident_id
      }
      localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore))
    }
  }

  typeSelect(e) {
    if(this.isFrom=='add'){
      let localDataStore = {
        name: this.selectedName,
        date_investigation_commenced: this.date_investigation_commenced,
        reportable_incident: this.reportable_incident,
        pre_incident_contributing_events: this.pre_incident_contributing_events,
        post_incident_events: this.post_incident_events,
        other_contributing_event_factors: this.other_contributing_event_factors,
        critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
        workplace_conditions: this.workplace_conditions,
        work_and_people_practices: this.work_and_people_practices,
        employee_competence: this.employee_competence,
        experience: this.experience,
        plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
        relevant_documentation: this.relevant_documentation,
        environmental_related_factors: this.environmental_related_factors,
        critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
        what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
        what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
        key_earnings: this.key_earnings,
        comments: this.comments,
        reputationCheckBox: this.reputationCheckBox,
        additional_investigation_required: this.additional_investigation_required,
        type: this.type,
        id: this.incident_id
      }
      localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore))
    }    
  }

  deSelect(i) {
    this.selected = '';
  }
  goBack() {
    this.nav.back();
  }

  dateSelect(e) {
    moment(e.detail.value).format("YYYY-MM-DD");
    this.date_investigation_commenced = moment(e.detail.value).format("YYYY-MM-DD");
  }

  incident_id: any;
  name: any;
  date_investigation_commenced: any;
  reportable_incident: any;
  pre_incident_contributing_events: any;
  impact_contact_events: any;
  post_incident_events: any;
  other_contributing_event_factors: any;
  critical_controls_applicable_for_task: any;
  workplace_conditions: any;
  work_and_people_practices: any;
  employee_competence: any;
  experience: any;
  plant_equipment_or_tooling_involve_in_incident: any;
  relevant_documentation: any;
  environmental_related_factors: any;
  critical_control_defence_failure_absent_non_compliance: any;
  what_substandard_acts_practices_and_conditions_caused_or_could: any; what_systems_personal_factors_caused_or_could_cause_the_incident: any;
  root_cause: any;
  key_earnings: any;
  comments: any;
  isFrom:any;
  selectedName: any
  is_a_safety_environmental_or_quality_alert_required: any;
  additional_investigation_required: any;
  type: any;
  investigatorId: any
  ionViewWillEnter() {
    let d = JSON.parse(localStorage.getItem("singleView"));
    this.incident_id = d.id;
    this.global.getData("api/Investigator/getInvestigator").subscribe((res: any) => {
      if (res) {
        this.listOfUsers = res.data;
      }else{
        console.log("response of get investigator api",res)
      }
    }, err => {
      console.log(err)
    });
    this.isFrom = localStorage.getItem("isInvestigationFrom");
    if (this.isFrom =='edit') {
      this.investigatorId = d.investigation_details.id;      
      let investigatorDetails = d.investigation_details;
      this.selectedName = investigatorDetails.name;
      this.additional_investigation_required = investigatorDetails.additional_investigation_required;
      if (investigatorDetails.comments!== undefined && investigatorDetails.comments !== 'undefined'){        
        this.comments = investigatorDetails.comments;
      }
      if (investigatorDetails.critical_control_defence_failure_absent_non_compliance !==undefined && investigatorDetails.critical_control_defence_failure_absent_non_compliance !== 'undefined'){

        this.critical_control_defence_failure_absent_non_compliance = investigatorDetails.critical_control_defence_failure_absent_non_compliance;
      }
      if (investigatorDetails.critical_controls_applicable_for_task!== undefined && investigatorDetails.critical_controls_applicable_for_task !== 'undefined'){
        this.critical_controls_applicable_for_task = investigatorDetails.critical_controls_applicable_for_task;
      }
      this.date_investigation_commenced = investigatorDetails.date_investigation_commenced;      
      this.impact_contact_events = investigatorDetails.impact_contact_events;      
      let chekBoxDetails = investigatorDetails?.is_a_safety_environmental_or_quality_alert_required?.split(",");
      this.reputationCheckBox.forEach((el)=>{
        chekBoxDetails.forEach((ele)=>{
          if(el.val==ele){
            el.isChecked = true;
          }
        })
      })
      if (investigatorDetails.key_earnings!== undefined && investigatorDetails.key_earnings !== 'undefined'){
        this.key_earnings = investigatorDetails.key_earnings;
      }


      if(investigatorDetails?.name!==null){
        this.selectedName = investigatorDetails?.name[0]?.investigator_name;
      }
      if (investigatorDetails.other_contributing_event_factors !== undefined && investigatorDetails.other_contributing_event_factors !== 'undefined'){
        this.other_contributing_event_factors = investigatorDetails.other_contributing_event_factors;
      }

      //pre_incident_contributing_events
      if (investigatorDetails.pre_incident_contributing_events !== undefined && investigatorDetails.pre_incident_contributing_events !== 'undefined') {
        this.pre_incident_contributing_events = investigatorDetails.pre_incident_contributing_events;
      }
      //workplace_conditions
      //work_and_people_practices
      //employee_competence
      //experience
      //plant_equipment_or_tooling_involve_in_incident//
      //relevant_documentation
      //environmental_related_factors
      //critical_control_defence_failure_absent_non_compliance
      //what_substandard_acts_practices_and_conditions_caused_or_could


      if (investigatorDetails.workplace_conditions !== undefined && investigatorDetails.workplace_conditions !== 'undefined') {
        this.workplace_conditions = investigatorDetails.workplace_conditions;
      }

      if (investigatorDetails.work_and_people_practices !== undefined && investigatorDetails.work_and_people_practices !== 'undefined') {
        this.work_and_people_practices = investigatorDetails.work_and_people_practices;
      }

      if (investigatorDetails.employee_competence !== undefined && investigatorDetails.employee_competence !== 'undefined') {
        this.employee_competence = investigatorDetails.employee_competence;
      }

      if (investigatorDetails.experience !== undefined && investigatorDetails.experience !== 'undefined') {
        this.experience = investigatorDetails.experience;
      }

      if (investigatorDetails.plant_equipment_or_tooling_involve_in_incident !== undefined && investigatorDetails.plant_equipment_or_tooling_involve_in_incident !== 'undefined') {
        this.plant_equipment_or_tooling_involve_in_incident = investigatorDetails.plant_equipment_or_tooling_involve_in_incident;
      }

      if (investigatorDetails.relevant_documentation !== undefined && investigatorDetails.relevant_documentation !== 'undefined') {
        this.relevant_documentation = investigatorDetails.relevant_documentation;
      }

      if (investigatorDetails.environmental_related_factors !== undefined && investigatorDetails.environmental_related_factors !== 'undefined') {
        this.environmental_related_factors = investigatorDetails.environmental_related_factors;
      }

      if (investigatorDetails.critical_control_defence_failure_absent_non_compliance !== undefined && investigatorDetails.critical_control_defence_failure_absent_non_compliance !== 'undefined') {
        this.critical_control_defence_failure_absent_non_compliance = investigatorDetails.critical_control_defence_failure_absent_non_compliance;
      }

      if (investigatorDetails.what_substandard_acts_practices_and_conditions_caused_or_could !== undefined && investigatorDetails.what_substandard_acts_practices_and_conditions_caused_or_could !== 'undefined') {
        this.what_substandard_acts_practices_and_conditions_caused_or_could = investigatorDetails.what_substandard_acts_practices_and_conditions_caused_or_could;
      }

      // this.plant_equipment_or_tooling_involve_in_incident = investigatorDetails.plant_equipment_or_tooling_involve_in_incident;
      // this.pre_incident_contributing_events = investigatorDetails.pre_incident_contributing_events;
      if (investigatorDetails.post_incident_events!== undefined && investigatorDetails.post_incident_events !== 'undefined'){
        this.post_incident_events = investigatorDetails.post_incident_events;
      }

      // this.relevant_documentation = investigatorDetails.relevant_documentation;
      this.reportable_incident = investigatorDetails.reportable_incident;
      if (investigatorDetails.root_cause!== undefined && investigatorDetails.root_cause !== 'undefined'){
        this.root_cause = investigatorDetails.root_cause;
      }
      
      this.type = investigatorDetails.type;
      // this.what_substandard_acts_practices_and_conditions_caused_or_could = investigatorDetails.what_substandard_acts_practices_and_conditions_caused_or_could;
      if (investigatorDetails.what_systems_personal_factors_caused_or_could_cause_the_incident!== undefined && investigatorDetails.what_systems_personal_factors_caused_or_could_cause_the_incident !== 'undefined'){
        this.what_systems_personal_factors_caused_or_could_cause_the_incident = investigatorDetails.what_systems_personal_factors_caused_or_could_cause_the_incident;
      }
      // this.work_and_people_practices = investigatorDetails.work_and_people_practices;
      // this.workplace_conditions = investigatorDetails.workplace_conditions;      
    }
  }
  names: any = [];
  
  selectedValue(e) {
    this.listOfUsers.forEach((ele) => {
      if (ele.full_name == e.detail.value) {
        let data = {
          user_id: ele.id,
          user_name: ele.full_name
        };
        this.selectedName = ele.full_name;
        this.names.push(data)
      }
    })
  }


  onSubmit() {

    let ar = [];
    this.reputationCheckBox.forEach((e) => {
      if (e.isChecked) {
        ar.push(e.val)
      }
    })
    this.listOfUsers.forEach((ele) => {
      if (ele.full_name == this.selectedName) {
        let data = {
          user_id: ele.id,
          user_name: ele.full_name
        };
        this.selectedName = ele.full_name;
        this.names.push(data)
      }
    })
    this.is_a_safety_environmental_or_quality_alert_required = ar
    this.name = [{ user_id: 100, user_name: 'Deepak' }, { user_id: 101, user_name: 'Gaurav' }]
    const fd = new FormData();
    if(this.isFrom=='edit'){
      fd.append("id",this.investigatorId)
    }
    fd.append("incident_id", this.incident_id);
    
      fd.append("name", JSON.stringify(this.names));
    
    fd.append("date_investigation_commenced", this.date_investigation_commenced);
    fd.append("reportable_incident", this.reportable_incident);
    fd.append("pre_incident_contributing_events", this.pre_incident_contributing_events);
    fd.append("post_incident_events", this.post_incident_events);
    fd.append("other_contributing_event_factors", this.other_contributing_event_factors);
    fd.append("critical_controls_applicable_for_task", this.critical_controls_applicable_for_task);
    fd.append("workplace_conditions", this.workplace_conditions);
    fd.append("work_and_people_practices", this.work_and_people_practices);
    fd.append("employee_competence", this.employee_competence);
    fd.append("experience", this.experience);
    fd.append("plant_equipment_or_tooling_involve_in_incident", this.plant_equipment_or_tooling_involve_in_incident);
    fd.append("relevant_documentation", this.relevant_documentation);
    fd.append("environmental_related_factors", this.environmental_related_factors);
    fd.append("critical_control_defence_failure_absent_non_compliance", this.critical_control_defence_failure_absent_non_compliance);
    fd.append("what_substandard_acts_practices_and_conditions_caused_or_could", this.what_substandard_acts_practices_and_conditions_caused_or_could);
    fd.append("what_systems_personal_factors_caused_or_could_cause_the_incident", this.what_systems_personal_factors_caused_or_could_cause_the_incident);
    fd.append("root_cause", this.root_cause);
    fd.append("key_earnings", this.key_earnings);
    fd.append('comments', this.comments);
    fd.append("is_a_safety_environmental_or_quality_alert_required", this.is_a_safety_environmental_or_quality_alert_required);
    fd.append("additional_investigation_required", this.additional_investigation_required);
    fd.append("type", this.type);


    let dataObj = {
      incident_id: this.incident_id,
      name: this.names,
      date_investigation_commenced: this.date_investigation_commenced,
      reportable_incident: this.reportable_incident,
      pre_incident_contributing_events: this.pre_incident_contributing_events,
      post_incident_events: this.post_incident_events,
      other_contributing_event_factors: this.other_contributing_event_factors,
      critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
      workplace_conditions: this.workplace_conditions,
      work_and_people_practices: this.work_and_people_practices,
      employee_competence: this.employee_competence,
      experience: this.experience,
      plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
      relevant_documentation: this.relevant_documentation,
      environmental_related_factors: this.environmental_related_factors,
      critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
      what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
      what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
      root_cause: this.root_cause,
      key_earnings: this.key_earnings,
      comments: this.comments,
      is_a_safety_environmental_or_quality_alert_required: this.is_a_safety_environmental_or_quality_alert_required,
      additional_investigation_required: this.additional_investigation_required,
      type: this.type,
    }
    this.global.presentLoading();

    let addUrl ='api/Investigator/submitInvestigation';
    let editUrl = 'api/Investigator/submitInvestigation';

    let url = this.isFrom=='edit' ? editUrl : addUrl
    this.global.postData(url, fd).subscribe((res: any) => {
      if (res.status) {
        this.global.presentToast(res.message);
        localStorage.removeItem("investigationLocalStorage");
        this.nav.navigateRoot("form-list");
      } else {
        this.global.presentToast("Something went wrong")
      }
      this.global.dismissLoading();
    }, err => {
      console.log("err", err)
      this.global.dismissLoading();
    })

  }

  selectChekbox(e) {
    if(this.isFrom=='add'){
      let localDataStore = {
        name: this.selectedName,
        date_investigation_commenced: this.date_investigation_commenced,
        reportable_incident: this.reportable_incident,
        pre_incident_contributing_events: this.pre_incident_contributing_events,
        post_incident_events: this.post_incident_events,
        other_contributing_event_factors: this.other_contributing_event_factors,
        critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
        workplace_conditions: this.workplace_conditions,
        work_and_people_practices: this.work_and_people_practices,
        employee_competence: this.employee_competence,
        experience: this.experience,
        plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
        relevant_documentation: this.relevant_documentation,
        environmental_related_factors: this.environmental_related_factors,
        critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
        what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
        what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
        key_earnings: this.key_earnings,
        comments: this.comments,
        reputationCheckBox: this.reputationCheckBox,
        additional_investigation_required: this.additional_investigation_required,
        type: this.type,
        id: this.incident_id
      }
      localStorage.setItem("investigationLocalStorage", JSON.stringify(localDataStore))
    }
  }

  saveItemOffline(){
    let ar = [];
    this.reputationCheckBox.forEach((e) => {
      if (e.isChecked) {
        ar.push(e.val)
      }
    })
    this.is_a_safety_environmental_or_quality_alert_required = ar
    this.name = [{ user_id: 100, user_name: 'Deepak' }, { user_id: 101, user_name: 'Gaurav' }]

    this.listOfUsers.forEach((ele) => {
      if (ele.full_name == this.selectedName) {
        let data = {
          user_id: ele.id,
          user_name: ele.full_name
        };
        this.selectedName = ele.full_name;
        this.names.push(data)
      }
    })

    const fd = new FormData();
    if (this.isFrom == 'edit') {
      fd.append("id", this.investigatorId)
    }
    fd.append("incident_id", this.incident_id);
    fd.append("name", JSON.stringify(this.names));
    fd.append("date_investigation_commenced", this.date_investigation_commenced);
    fd.append("reportable_incident", this.reportable_incident);
    fd.append("pre_incident_contributing_events", this.pre_incident_contributing_events);
    fd.append("post_incident_events", this.post_incident_events);
    fd.append("other_contributing_event_factors", this.other_contributing_event_factors);
    fd.append("critical_controls_applicable_for_task", this.critical_controls_applicable_for_task);
    fd.append("workplace_conditions", this.workplace_conditions);
    fd.append("work_and_people_practices", this.work_and_people_practices);
    fd.append("employee_competence", this.employee_competence);
    fd.append("experience", this.experience);
    fd.append("plant_equipment_or_tooling_involve_in_incident", this.plant_equipment_or_tooling_involve_in_incident);
    fd.append("relevant_documentation", this.relevant_documentation);
    fd.append("environmental_related_factors", this.environmental_related_factors);
    fd.append("critical_control_defence_failure_absent_non_compliance", this.critical_control_defence_failure_absent_non_compliance);
    fd.append("what_substandard_acts_practices_and_conditions_caused_or_could", this.what_substandard_acts_practices_and_conditions_caused_or_could);
    fd.append("what_systems_personal_factors_caused_or_could_cause_the_incident", this.what_systems_personal_factors_caused_or_could_cause_the_incident);
    fd.append("root_cause", this.root_cause);
    fd.append("key_earnings", this.key_earnings);
    fd.append('comments', this.comments);
    fd.append("is_a_safety_environmental_or_quality_alert_required", this.is_a_safety_environmental_or_quality_alert_required);
    fd.append("additional_investigation_required", this.additional_investigation_required);
    fd.append("type", this.type);


    let dataObj = {
      incident_id: this.incident_id,
      name: this.names,
      date_investigation_commenced: this.date_investigation_commenced,
      reportable_incident: this.reportable_incident,
      pre_incident_contributing_events: this.pre_incident_contributing_events,
      post_incident_events: this.post_incident_events,
      other_contributing_event_factors: this.other_contributing_event_factors,
      critical_controls_applicable_for_task: this.critical_controls_applicable_for_task,
      workplace_conditions: this.workplace_conditions,
      work_and_people_practices: this.work_and_people_practices,
      employee_competence: this.employee_competence,
      experience: this.experience,
      plant_equipment_or_tooling_involve_in_incident: this.plant_equipment_or_tooling_involve_in_incident,
      relevant_documentation: this.relevant_documentation,
      environmental_related_factors: this.environmental_related_factors,
      critical_control_defence_failure_absent_non_compliance: this.critical_control_defence_failure_absent_non_compliance,
      what_substandard_acts_practices_and_conditions_caused_or_could: this.what_substandard_acts_practices_and_conditions_caused_or_could,
      what_systems_personal_factors_caused_or_could_cause_the_incident: this.what_systems_personal_factors_caused_or_could_cause_the_incident,
      root_cause: this.root_cause,
      key_earnings: this.key_earnings,
      comments: this.comments,
      is_a_safety_environmental_or_quality_alert_required: this.is_a_safety_environmental_or_quality_alert_required,
      additional_investigation_required: this.additional_investigation_required,
      type: this.type,
    }
    this.global.presentLoading();

    let addUrl = 'api/Investigator/submitInvestigation_incomplete';
    let editUrl = 'api/Investigator/submitInvestigation_incomplete';

    let url = this.isFrom == 'edit' ? editUrl : addUrl
    this.global.postData(url, fd).subscribe((res: any) => {
      if (res.status) {
        this.global.presentToast(res.message);
        localStorage.removeItem("investigationLocalStorage");
        this.nav.navigateRoot("form-list");
      } else {
        this.global.presentToast("Something went wrong")
      }
      this.global.dismissLoading();
    }, err => {
      console.log("err", err)
      this.global.dismissLoading();
    })
  }




}
