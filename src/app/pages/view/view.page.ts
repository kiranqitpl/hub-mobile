import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

// import { ManagersPage } from 'src/app/modals/managers/managers.page';
// import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
// import { File } from '@ionic-native/file/ngx';
// import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})

export class ViewPage implements OnInit {

  data: any = [
    'Incident',
    'Classification',
    'Photography',
    'Incident Description',
    'Injury',
    'Environmental',
    'Reputation',
    'Security',
    'Asset',
    'Report',
  ];

  itsecurityCheckbox = [
    {
      val: 'Intrusion',
      isChecked: false,
    },
    {
      val: 'Ransom ware',
      isChecked: false,
    },
    {
      val: 'Privacy breach',
      isChecked: false,
    },
    {
      val: 'Intellectual',
      isChecked: false,
    },
  ];

  classificationChekBox = [
    {
      val: 'Injury',
      isChecked: false,
    },
    {
      val: 'Environmental',
      isChecked: false,
    },
    {
      val: 'Reputation',
      isChecked: false,
    },
    {
      val: 'Security',
      isChecked: false,
    },
    {
      val: 'Asset',
      isChecked: false,
    },
    {
      val: 'Report only',
      isChecked: false,
    },
  ];

  injuryCheckBox = [
    {
      val: 'FAI',
      isChecked: false,
    },
    {
      val: 'MTI',
      isChecked: false,
    },
    {
      val: 'ADI',
      isChecked: false,
    },
    {
      val: 'LTL',
      isChecked: false,
    },
    {
      val: 'Head',
      isChecked: false,
    },
    {
      val: 'Limbs',
      isChecked: false,
    },
    {
      val: 'Torso',
      isChecked: false,
    },
  ];

  reputationCheckBox = [
    {
      val: 'Individual',
      isChecked: false,
    },
    {
      val: 'Company',
      isChecked: false,
    },
  ];

  what_has_been_stolen_item: any;
  selected: any;
  drugTest: any;
  imageUri: any;
  person_Array: any = [];
  what_is_the_specific_securities_incident: any;
  approximate_value_of_stolen
  image2Uri: any;
  image3Uri: any = '';
  image4Uri: any;
  image5Uri: any;
  imagePath: any = '';
  imagePath2: any = '';
  imagePath3: any = '';
  chemicalSplit: any = '';
  imagePath4: any = '';
  imagePath5: any = '';
  incedent: any = '';

  location: any = '';
  insertPhotoisChecked = false;
  nameOfManager: any = 'Name of Manager';
  alcoholTest: any = '';
  formCount: any = '1';
  injuredPerson: any = '';
  gender: any;
  todayDate = new Date();
  returnToNormalDuties: any = '';
  alternativeDuties: any = '';

  securityRadio: any;
  itemsArray: any = [1];
  emergencySpill: any = '';
  assetNumber: any;

  possibleConsequence: any = '';
  addLocation: any = '';
  descriptionIncident: any = '';
  immediateAction: any = '';
  injuredPersons: any = '';
  explanationAlterative: any = '';
  environmentActionTaken: any = '';
  nameOfChemical: any = '';
  approximateQtyofChemical: any = '';
  individualReputationDamaged: any = '';
  companyReputatonDamaged: any = '';
  nameOfAnyWitness: any = '';
  contactOfAnyWitness: any = '';
  possibleOutcomeOfIncident: any = '';
  assetDescription: any = '';
  assetsNumbers: any = '';
  extentOfDamage: any = '';
  doneDifferently: any = '';
  whoWitnessedNearThis: any = '';
  shiftType: any = '';
  superVisor: any = '';
  locationSelection: any = '';
  checmicalDetails: any = [{
    approximate_quantity: this.approximateQtyofChemical,
    chemical_name: this.nameOfChemical,
    chemical_photo: this.image3Uri,
  }];

  personDetails: any = [];

  person_one_details: any = {
    alternate_duties: '',//returnToAlernateDuties
    date_of_birth: '',//dateOfBirth
    duties_explanation: '',//explanation
    initital_injury: [],//injury_value
    injured_person_option: '',//fullNameOfInjuredPerson
    injured_person_option_value: '',//other_name
    normal_duties: '',//returnToNormalDuties
    fullNameOfInjuredPerson: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: null,
    explanation: null,
    other_name: null,

    injurryCheckBox: [
      {
        val: 'FAI',
        isChecked: false,
      },
      {
        val: 'MTI',
        isChecked: false,
      },
      {
        val: 'ADI',
        isChecked: false,
      },
      {
        val: 'LTL',
        isChecked: false,
      },
      {
        val: 'Head',
        isChecked: false,
      },
      {
        val: 'Limbs',
        isChecked: false,
      },
      {
        val: 'Torso',
        isChecked: false,
      },
    ]
  }

  person_two_details: any = {
    alternate_duties: '',//returnToAlernateDuties
    date_of_birth: '',//dateOfBirth
    duties_explanation: '',//explanation
    initital_injury: [],//injury_value
    injured_person_option: '',//fullNameOfInjuredPerson
    injured_person_option_value: '',//other_name
    normal_duties: '',//returnToNormalDuties
    fullNameOfInjuredPerson: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: null,
    explanation: null,
    other_name: null,
    injurryCheckBox: [
      {
        val: 'FAI',
        isChecked: false,
      },
      {
        val: 'MTI',
        isChecked: false,
      },
      {
        val: 'ADI',
        isChecked: false,
      },
      {
        val: 'LTL',
        isChecked: false,
      },
      {
        val: 'Head',
        isChecked: false,
      },
      {
        val: 'Limbs',
        isChecked: false,
      },
      {
        val: 'Torso',
        isChecked: false,
      },
    ]
  }

  nagativeEffetct: any;
  person_three_details: any = {
    alternate_duties: '',//returnToAlernateDuties
    date_of_birth: '',//dateOfBirth
    duties_explanation: '',//explanation
    initital_injury: [],//injury_value
    injured_person_option: '',//fullNameOfInjuredPerson
    injured_person_option_value: '',//other_name
    normal_duties: '',//returnToNormalDuties
    fullNameOfInjuredPerson: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: null,
    explanation: null,
    other_name: null,
    injurryCheckBox: [
      {
        val: 'FAI',
        isChecked: false,
      },
      {
        val: 'MTI',
        isChecked: false,
      },
      {
        val: 'ADI',
        isChecked: false,
      },
      {
        val: 'LTL',
        isChecked: false,
      },
      {
        val: 'Head',
        isChecked: false,
      },
      {
        val: 'Limbs',
        isChecked: false,
      },
      {
        val: 'Torso',
        isChecked: false,
      },
    ]
  }

  person_four_details: any = {
    alternate_duties: '',//returnToAlernateDuties
    date_of_birth: '',//dateOfBirth
    duties_explanation: '',//explanation
    initital_injury: [],//injury_value
    injured_person_option: '',//fullNameOfInjuredPerson
    injured_person_option_value: '',//other_name
    normal_duties: '',//returnToNormalDuties
    fullNameOfInjuredPerson: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: null,
    explanation: null,
    other_name: null,
    injurryCheckBox: [
      {
        val: 'FAI',
        isChecked: false,
      },
      {
        val: 'MTI',
        isChecked: false,
      },
      {
        val: 'ADI',
        isChecked: false,
      },
      {
        val: 'LTL',
        isChecked: false,
      },
      {
        val: 'Head',
        isChecked: false,
      },
      {
        val: 'Limbs',
        isChecked: false,
      },
      {
        val: 'Torso',
        isChecked: false,
      },
    ]
  }

  id: any;
  o1: any = [];
  o2: any = [];
  o3: any = [];
  o4: any = [];
  o5: any = [];
  dateOfIncident: any;
  dateReported: any;
  timeReported: any;
  timeOfIncident: any;
  individualChecked: any;
  companyChecked: any;
  croppedImagepath: any = '';
  isLoading = false;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };

  returnToAlternateDuties: any = "";
  returnToDutiesImage: any = "";

  constructor(
    // private modal: ModalController,
    // private camera: Camera,
    private nav: NavController,
    public actionSheetController: ActionSheetController,
    private global: GlobalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // let data = JSON.parse(localStorage.getItem('singleView'));
    // this.global.presentLoading();
    let data = "";
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.global.getData('api/add_form/getIncidentFormByID/' + params['form_id']).subscribe(result => {
          // this.global.dismissLoading();
          data = result['data'][0];
          if (data != "") {
            this.what_has_been_stolen_item = data['what_has_been_stolen_item']
            this.approximate_value_of_stolen = data['approximate_value_of_stolen']
            this.dateReported = data['date_reported']
            this.dateOfIncident = data['date_of_incident'];
            // console.log('moment',moment(data['time_of_incident']).format('hh:mm:ss'));
            this.timeOfIncident = data['time_of_incident'];
            // console.log('this.timeOfIncident ', this.timeOfIncident);
            this.timeReported = data['time_reported'];
            this.what_is_the_specific_securities_incident = data['what_is_the_specific_securities_incident']
            this.drugTest = data['drug_test_completed']
            // this.timeReported = data['time_reported'];
            this.id = data['id'];
            this.incedent = data['incident_value'];
            this.whoWitnessedNearThis = data['incident_near_miss'];
            this.possibleConsequence = data['incident_near_miss_other'];
            let classification_value = data['classification_value'].split(",")
            this.classificationChekBox = classification_value
            this.location = data['classification_location_option'];

            if (this.location == 'Add Location') {
              this.addLocation = data['classification_location_value']
            }

            if (this.location == 'Choose Location') {
              this.locationSelection = data['classification_location_value']
            }

            this.shiftType = data['classification_shift_type'];
            this.superVisor = data['classification_supervisor'];
            this.nameOfManager = data['classification_manager'];
            this.imagePath = data['photography_image'];
            this.descriptionIncident = data['incident_description'];
            this.immediateAction = data['incident_description_action'];
            if (data['incident_description_photo'] !== '') {
              if (data['incident_description_photo'] !== "undefined") {
                this.insertPhotoisChecked = true;
                this.imagePath2 = data['incident_description_photo'];
              }
            }
            this.returnToAlternateDuties = data['return_to_alternate_duties'];
            this.returnToDutiesImage = data['return_to_alternate_duties_image'];
            this.alcoholTest = data['incident_description_alcohol_test'];
            this.formCount = data['injury_persons'];

            if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 1) {
              this.itemsArray = [1]
            }

            if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 2) {
              this.itemsArray = [1, 2]
            }

            if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 3) {
              this.itemsArray = [1, 2, 3]
            }

            if (data['injury_persons'] != '' && JSON.parse(data['injury_persons']) == 4) {
              this.itemsArray = [1, 2, 3, 4]
            }

            if (data && data['person_details'] && data['person_details'][0] && data['person_details'][0]['alternate_duties']) {

              this.person_one_details = {
                alternate_duties: data['person_details'][0]['alternate_duties'],
                date_of_birth: data['person_details'][0]['date_of_birth'],
                duties_explanation: data['person_details'][0]['duties_explanation'],
                injured_person_option: data['person_details'][0]['injured_person_option'],
                injured_person_option_value: data['person_details'][0]['injured_person_option_value'],
                normal_duties: data['person_details'][0]['normal_duties'],
                fullNameOfInjuredPerson: data['person_details'][0]['injured_person_option'],
                gender: data['person_details'][0]['gender'],
                dateOfBirth: data['person_details'][0]['date_of_birth'],
                returnToNormalDuties: data['person_details'][0]['normal_duties'],
                returnToAlernateDuties: data['person_details'][0]['alternate_duties'],
                explanation: data['person_details'][0]['duties_explanation'],
                other_name: data['person_details'][0]['injured_person_option_value'],
                //aded
                part_of_body_injured_occured: data['person_details'][0]['part_of_body_injured_occured'],
                was_immediate_treatment: data['person_details'][0]['was_immediate_treatment'],
                immediate_treatment_given_explanation: data['person_details'][0]['immediate_treatment_given_explanation'],
                immediate_treatment_person_name: data['person_details'][0]['immediate_treatment_person_name'],
                immediate_treatment_person_number: data['person_details'][0]['immediate_treatment_person_number'],

                initital_injury: [],
                injury_value: [],
                injurryCheckBox: [
                  {
                    val: 'FAI',
                    isChecked: false,
                  },
                  {
                    val: 'MTI',
                    isChecked: false,
                  },
                  {
                    val: 'ADI',
                    isChecked: false,
                  },
                  {
                    val: 'LTL',
                    isChecked: false,
                  },
                  {
                    val: 'Head',
                    isChecked: false,
                  },
                  {
                    val: 'Limbs',
                    isChecked: false,
                  },
                  {
                    val: 'Torso',
                    isChecked: false,
                  },
                ]
              }
              let one = data['person_details'][0]['initital_injury'].split(",")
              this.person_one_details.injurryCheckBox.forEach((el) => {
                one.forEach((ele) => {
                  if (el.val == ele) {
                    el.isChecked = true;
                    this.o1.push(el);
                  }
                })
              })

            }

            if (data && data['person_details'] && data['person_details'][1] && data['person_details'][1]['alternate_duties']) {

              this.person_two_details = {
                alternate_duties: data['person_details'][1]['alternate_duties'],
                date_of_birth: data['person_details'][1]['date_of_birth'],
                duties_explanation: data['person_details'][1]['duties_explanation'],
                injured_person_option: data['person_details'][1]['injured_person_option'],
                injured_person_option_value: data['person_details'][1]['injured_person_option_value'],
                normal_duties: data['person_details'][1]['normal_duties'],
                fullNameOfInjuredPerson: data['person_details'][1]['injured_person_option'],
                gender: data['person_details'][1]['gender'],
                dateOfBirth: data['person_details'][1]['date_of_birth'],
                returnToNormalDuties: data['person_details'][1]['normal_duties'],
                returnToAlernateDuties: data['person_details'][1]['alternate_duties'],
                explanation: data['person_details'][1]['duties_explanation'],
                other_name: data['person_details'][1]['injured_person_option_value'],
                part_of_body_injured_occured: data['person_details'][1]['part_of_body_injured_occured'],
                was_immediate_treatment: data['person_details'][1]['was_immediate_treatment'],
                immediate_treatment_given_explanation: data['person_details'][1]['immediate_treatment_given_explanation'],
                immediate_treatment_person_name: data['person_details'][1]['immediate_treatment_person_name'],
                immediate_treatment_person_number: data['person_details'][1]['immediate_treatment_person_number'],

                initital_injury: [],
                injury_value: [],
                injurryCheckBox: [
                  {
                    val: 'FAI',
                    isChecked: false,
                  },
                  {
                    val: 'MTI',
                    isChecked: false,
                  },
                  {
                    val: 'ADI',
                    isChecked: false,
                  },
                  {
                    val: 'LTL',
                    isChecked: false,
                  },
                  {
                    val: 'Head',
                    isChecked: false,
                  },
                  {
                    val: 'Limbs',
                    isChecked: false,
                  },
                  {
                    val: 'Torso',
                    isChecked: false,
                  },
                ]
              }

              let two = data['person_details'][1]['initital_injury'].split(",")
              this.person_one_details.injurryCheckBox.forEach((el) => {
                two.forEach((ele) => {
                  if (el.val == ele) {
                    el.isChecked = true;
                    this.o2.push(el);
                  }
                })
              })

            }

            if (data && data['person_details'] && data['person_details'][2] && data['person_details'][2]['alternate_duties']) {
              this.person_three_details = {
                alternate_duties: data['person_details'][2]['alternate_duties'],
                date_of_birth: data['person_details'][2]['date_of_birth'],
                duties_explanation: data['person_details'][2]['duties_explanation'],
                injured_person_option: data['person_details'][2]['injured_person_option'],
                injured_person_option_value: data['person_details'][2]['altinjured_person_option_valueernate_duties'],
                normal_duties: data['person_details'][2]['normal_duties'],
                fullNameOfInjuredPerson: data['person_details'][2]['injured_person_option'],
                gender: data['person_details'][2]['gender'],
                dateOfBirth: data['person_details'][2]['date_of_birth'],
                returnToNormalDuties: data['person_details'][2]['normal_duties'],
                returnToAlernateDuties: data['person_details'][2]['alternate_duties'],
                explanation: data['person_details'][2]['duties_explanation'],
                other_name: data['person_details'][2]['injured_person_option_value'],
                part_of_body_injured_occured: data['person_details'][2]['part_of_body_injured_occured'],
                was_immediate_treatment: data['person_details'][2]['was_immediate_treatment'],
                immediate_treatment_given_explanation: data['person_details'][2]['immediate_treatment_given_explanation'],
                immediate_treatment_person_name: data['person_details'][2]['immediate_treatment_person_name'],
                immediate_treatment_person_number: data['person_details'][2]['immediate_treatment_person_number'],

                initital_injury: [],
                injury_value: [],
                injurryCheckBox: [
                  {
                    val: 'FAI',
                    isChecked: false,
                  },
                  {
                    val: 'MTI',
                    isChecked: false,
                  },
                  {
                    val: 'ADI',
                    isChecked: false,
                  },
                  {
                    val: 'LTL',
                    isChecked: false,
                  },
                  {
                    val: 'Head',
                    isChecked: false,
                  },
                  {
                    val: 'Limbs',
                    isChecked: false,
                  },
                  {
                    val: 'Torso',
                    isChecked: false,
                  },
                ]
              }
              let three = data['person_details'][2]['initital_injury'].split(",")
              this.person_three_details.injurryCheckBox.forEach((el) => {
                three.forEach((ele) => {
                  if (el.val == ele) {
                    el.isChecked = true;
                    this.o3.push(el);
                  }
                })
              })

            }

            if (data && data['person_details'] && data['person_details'][3] && data['person_details'][3]['alternate_duties']) {

              this.person_four_details = {
                alternate_duties: data['person_details'][3]['alternate_duties'],
                date_of_birth: data['person_details'][3]['date_of_birth'],
                duties_explanation: data['person_details'][3]['duties_explanation'],
                injured_person_option: data['person_details'][3]['injured_person_option'],
                injured_person_option_value: data['person_details'][3]['injured_person_option_value'],
                normal_duties: data['person_details'][3]['normal_duties'],
                fullNameOfInjuredPerson: data['person_details'][3]['injured_person_option'],
                gender: data['person_details'][3]['gender'],
                dateOfBirth: data['person_details'][3]['date_of_birth'],
                returnToNormalDuties: data['person_details'][3]['normal_duties'],
                returnToAlernateDuties: data['person_details'][3]['alternate_duties'],
                explanation: data['person_details'][3]['duties_explanation'],
                other_name: data['person_details'][3]['injured_person_option_value'],
                part_of_body_injured_occured: data['person_details'][3]['part_of_body_injured_occured'],
                was_immediate_treatment: data['person_details'][3]['was_immediate_treatment'],
                immediate_treatment_given_explanation: data['person_details'][3]['immediate_treatment_given_explanation'],
                immediate_treatment_person_name: data['person_details'][3]['immediate_treatment_person_name'],
                immediate_treatment_person_number: data['person_details'][3]['immediate_treatment_person_number'],

                initital_injury: [],
                injury_value: [],
                injurryCheckBox: [
                  {
                    val: 'FAI',
                    isChecked: false,
                  },
                  {
                    val: 'MTI',
                    isChecked: false,
                  },
                  {
                    val: 'ADI',
                    isChecked: false,
                  },
                  {
                    val: 'LTL',
                    isChecked: false,
                  },
                  {
                    val: 'Head',
                    isChecked: false,
                  },
                  {
                    val: 'Limbs',
                    isChecked: false,
                  },
                  {
                    val: 'Torso',
                    isChecked: false,
                  },
                ]
              }

              let four = data['person_details'][3]['initital_injury'].split(",")
              this.person_four_details.injurryCheckBox.forEach((el) => {
                four.forEach((ele) => {
                  if (el.val == ele) {
                    el.isChecked = true;
                    this.o4.push(el);
                  }
                })
              })
            }

            this.environmentActionTaken = data['environmental_description'];
            this.chemicalSplit = data['was_a_chemical_split'];
            this.nameOfChemical = data['chemical_details.chemical_name'];
            this.approximateQtyofChemical = data['chemical_details.approximate_quantity'];
            if (data && data['chemical_details'] && data['chemical_details'].chemical_photo !== '') {
              this.insertPhotoisChecked = true;
              this.imagePath3 = data['chemical_details'].chemical_photo
            }
            this.emergencySpill = data['emergency_spill_kit_used'];
            let reputationValue = data['reputation_option'].split(',');
            this.reputationCheckBox.forEach((res) => {
              reputationValue.forEach((eleme) => {
                if (res.val === eleme) {
                  res.isChecked = true;
                  if (res.val == 'Individual') {
                    this.individualChecked = true
                  }
                  if (res.val == 'Company') {
                    this.companyChecked = true
                  }
                }
              })
            });

            if (this.formCount == "1") {
              this.person_Array.push(this.person_one_details);
            }

            if (this.formCount == "2") {
              this.person_Array.push(this.person_one_details);
              this.person_Array.push(this.person_two_details);
            }

            if (this.formCount == "3") {
              this.person_Array.push(this.person_one_details);
              this.person_Array.push(this.person_two_details);
              this.person_Array.push(this.person_three_details);
            }

            if (this.formCount == "4") {
              this.person_Array.push(this.person_one_details);
              this.person_Array.push(this.person_two_details);
              this.person_Array.push(this.person_three_details);
              this.person_Array.push(this.person_four_details);
            }

            if (this.individualChecked) {
              this.individualReputationDamaged = data['individual_damage_value'];
            }

            if (this.companyChecked) {
              this.companyReputatonDamaged = data['company_damage_value'];
            }

            this.nagativeEffetct = data['reputation_negative_effect'];
            this.nameOfAnyWitness = data['name_of_witness'];
            this.contactOfAnyWitness = data['contact_of_witness'];
            this.possibleOutcomeOfIncident = data['possible_outcome_incident'];
            if (data['reputation_damage_image'] !== '') {
              this.imagePath4 = data['reputation_damage_image']
            }

            this.securityRadio = data['security_option'];
            if (this.securityRadio == 'IT') {
              let t = data['it_option_value'].split(",");
              this.itsecurityCheckbox.forEach((itsecurity) => {
                t.forEach((ts) => {
                  if (itsecurity.val == ts) {
                    itsecurity.isChecked = true;
                  }
                })
              })
            }

            this.assetDescription = data['asset_description'];
            this.assetNumber = data['asset_has_number'];
            this.assetsNumbers = data['asset_number'];
            this.extentOfDamage = data['extent_of_damage'];
            if (data['extent_damage_image'] !== '') {
              this.imagePath5 = data['extent_damage_image']
            }
            this.doneDifferently = data['report'];
          } else {
            console.log("error");
          }
        }), error => {
          // this.global.dismissLoading();
          console.log(error);
        }
      }
    );
  }

  goBack() {
    this.nav.back();
  }

  goNext() {
    this.nav.navigateForward('dashboard');
  }

  // itemsChangeForm(e) {
  //   let ee = JSON.parse(e.detail.value);
  //   if (ee == 1) {
  //     this.itemsArray = [1];
  //   }
  //   if (ee == 2) {
  //     this.itemsArray = [1, 2];
  //   }
  //   if (ee == 3) {
  //     this.itemsArray = [1, 2, 3];
  //   }
  //   if (ee == 4) {
  //     this.itemsArray = [1, 2, 3, 4];
  //   }
  // }

  // reputationCheckboxEvent(e, entry) {
  //   this.reputationCheckBox.forEach((element) => {
  //     if (element.val === 'Individual') {
  //       this.individualChecked = element.isChecked;
  //     } else if (element.val === 'Company') {
  //       this.companyChecked = element.isChecked;
  //     }
  //   });
  // }

  // pickImage(sourceType, e) {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     sourceType: sourceType,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   };
  //   this.camera.getPicture(options).then(
  //     (imageData) => {
  //       // imageData is either a base64 encoded string or a file URI
  //       // this.croppedImagePath = 'data:image/jpeg;base64,' + imageData;
  //       const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
  //       if (e == 1) {
  //         this.imagePath = 'data:image/jpeg;base64,' + imageData;
  //         let t = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
  //         let realData = this.imagePath.split(",")[1];
  //         let blob = this.b64toBlob(realData, 'image/jpeg');
  //         this.imageUri = imageData;
  //       }
  //       if (e == 2) {
  //         this.imagePath2 = 'data:image/jpeg;base64,' + imageData;
  //         let t = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
  //         this.image2Uri = imageData;
  //       }
  //       if (e == 3) {
  //         this.imagePath3 = 'data:image/jpeg;base64,' + imageData;
  //         this.image3Uri = imageData
  //       }
  //       if (e == 4) {
  //         this.imagePath4 = 'data:image/jpeg;base64,' + imageData;
  //         this.image4Uri = imageData
  //       }
  //       if (e == 5) {
  //         this.imagePath5 = 'data:image/jpeg;base64,' + imageData;
  //         this.image5Uri = imageData
  //       }
  //     },
  //     (err) => {
  //       // Handle error
  //       console.log("errOf Image ", err)
  //     }
  //   );
  // }

  // async selectImage(e) {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Select Image source',
  //     buttons: [
  //       {
  //         text: 'Load from Library',
  //         handler: () => {
  //           this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, e);
  //         },
  //       },
  //       {
  //         text: 'Use Camera',
  //         handler: () => {
  //           this.pickImage(this.camera.PictureSourceType.CAMERA, e);
  //         },
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //       },
  //     ],
  //   });
  //   await actionSheet.present();
  // }

  // checkDetails(i) {
  //   this.selected = i;
  // }

  // deSelect(i) {
  //   this.selected = '';
  // }

  // checkIncident(e) {
  //   this.incedent = e.detail.value;
  // }

  // async openModal() {
  //   const modal = await this.modal.create({
  //     component: ManagersPage,
  //     cssClass: 'managers',
  //   });
  //   modal.onDidDismiss().then((res) => {
  //     if (res?.data?.name) {
  //       this.nameOfManager = res.data.name;
  //     }
  //   });
  //   return await modal.present();
  // }

  // DataURIToBlob(dataURI: string) {
  //   const splitDataURI = dataURI.split(',')
  //   const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
  //   const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
  //   const ia = new Uint8Array(byteString.length)
  //   for (let i = 0; i < byteString.length; i++)
  //     ia[i] = byteString.charCodeAt(i)
  //   return new Blob([ia], { type: mimeString })
  // }

  // b64toBlob(b64Data, contentType) {
  //   contentType = contentType || '';
  //   var sliceSize = 512;
  //   var byteCharacters = atob(b64Data);
  //   var byteArrays = [];
  //   for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //     var slice = byteCharacters.slice(offset, offset + sliceSize);
  //     var byteNumbers = new Array(slice.length);
  //     for (var i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }
  //     var byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }
  //   var blob = new Blob(byteArrays, { type: contentType });
  //   return blob;
  // }

}
