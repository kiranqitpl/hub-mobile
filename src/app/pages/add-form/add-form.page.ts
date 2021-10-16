import {
  ActionSheetController,
  ModalController,
  NavController,
  Platform,
} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ManagersPage } from 'src/app/modals/managers/managers.page';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { GlobalService } from 'src/app/services/global.service';
import { Base64 } from '@ionic-native/base64/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})

export class AddFormPage implements OnInit {
  data: any = [];
  selected: any = 'Incident';
  imageUri: any = "" ; 
  image2Uri: any = "" ; 
  image3Uri: any = '';
  image4Uri: any = "" ; 
  drugTestImageUri: any = '';
  image5Uri: any = "" ; 
  imagePath: any = '';
  imagePath2: any = '';
  imagePath3: any = '';
  chemicalSplit: any = '';
  imagePath4: any = '';
  imagePath5: any = '';
  incedent: any = '';
  classificationChekBox: any = [];
  location: any = '';
  insertPhotoisChecked = false;
  nameOfManager: any = 'Name of Manager';
  alcoholTest: any = '';
  drugTest: any = '';
  drugImage: any = '';
  formCount: any = '1';
  injuredPerson: any = '';
  gender: any='';
  todayDate = new Date();
  returnToNormalDuties: any = '';
  alternativeDuties: any = '';
  injuryCheckBox: any = [];
  securityRadio: any='';
  itemsArray: any = [1];
  emergencySpill: any = '';
  itsecurityCheckbox: any = [];
  assetNumber: any='';
  reputationCheckBox: any = [];
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
    chemical_photo: this.imagePath3,
  }];
  person_one_details: any = {
    alternate_duties: '',//returnToAlernateDuties
    date_of_birth: '',//dateOfBirth
    duties_explanation: '',//explanation
    initital_injury: [],//injury_value
    injured_person_option: '',//fullNameOfInjuredPerson
    injured_person_option_value: '',//other_name
    normal_duties: '',//returnToNormalDuties
    part_of_body_injured_occured: "",//addedagain
    was_immediate_treatment: "",//added again
    immediate_treatment_given_explanation: "",//added again
    immediate_treatment_person_name: "",//addedagain
    immediate_treatment_person_number: "",//addedagain
    immediateTreatment: '',
    fullNameOfInjuredPerson: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: "",
    explanation: "",
    other_name: "",
    immediateTreatmentGivenExplanation: '',//added
    administeredPersonName: '',//added
    adminsteredPersonNumber: '',//added
    partOfBodyInjured: '',
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
    immediateTreatmentGivenExplanation: '',//added
    administeredPersonName: '',//added
    adminsteredPersonNumber: '',//added
    part_of_body_injured_occured: "",//addedagain
    was_immediate_treatment: "",//added again
    immediate_treatment_given_explanation: "",//added again
    immediate_treatment_person_name: "",//addedagain
    immediate_treatment_person_number: "",//addedagaom
    partOfBodyInjured: '',
    immediateTreatment: '',
    fullNameOfInjuredPerson: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: "",
    explanation: "",
    other_name: "",

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
  nagativeEffetct: any="";
  person_three_details: any = {
    alternate_duties: '',//returnToAlernateDuties
    date_of_birth: '',//dateOfBirth
    duties_explanation: '',//explanation
    initital_injury: [],//injury_value
    injured_person_option: '',//fullNameOfInjuredPerson
    injured_person_option_value: '',//other_name
    normal_duties: '',//returnToNormalDuties
    immediateTreatmentGivenExplanation: '',
    administeredPersonName: '',//added
    adminsteredPersonNumber: '',//added
    part_of_body_injured_occured: "",//addedagain
    was_immediate_treatment: "",//added again
    immediate_treatment_given_explanation: "",//added again
    immediate_treatment_person_name: "",//addedagain
    immediate_treatment_person_number: "",//addedagaom
    partOfBodyInjured: '',
    immediateTreatment: '',
    fullNameOfInjuredPerson: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: "",
    explanation: "",
    other_name: "",
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
    immediateTreatment: '',//added field
    immediateTreatmentGivenExplanation: '',//added
    administeredPersonName: '',//added
    adminsteredPersonNumber: '',//added
    fullNameOfInjuredPerson: '',//added
    part_of_body_injured_occured: "",//addedagain
    was_immediate_treatment: "",//added again
    immediate_treatment_given_explanation: "",//added again
    immediate_treatment_person_name: "",//addedagain
    immediate_treatment_person_number: "",//addedagaom
    partOfBodyInjured: '',
    gender: '',
    dateOfBirth: '',
    injury_value: [],
    returnToNormalDuties: '',
    returnToAlernateDuties: "",
    explanation: "",
    other_name: "",
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
  platformCheck: any = '';
  minDate: any="";
  //added field
  dateOfIncident: any = "" ; 
  timeOfIncident: any = "" ; 
  dateReported: any = "" ; 
  timeReported: any = "" ; 
  wasThereAnyWitnessOfIncident: any = "" ; 
  // alcoholTestCompleted:any = "" ; variable = alcoholTest
  // alcoholTestDocument:any = "" ; = imagePath2
  //drugTest:any = "" ; 
  // drugTestImage:any = "" ; variable = drugImage
  normalDutiesExplanation: any = "" ; 
  partOfBodyInjured: any = "" ; 
  // wasImmediateTreatment:any = "" ; injurry
  immediateTreatmentGivenExplanation: any = "" ; 
  immediateTreatmentPersonName: any = "" ; 
  immediateTreatmentPersonNumber: any = "" ; 
  stolenItem: any = "" ; //added
  specificSecurityIncident: any = "" ; //added
  approximateValueOfStolen:any = "" ; //added
  witnessList: any = [];
  managerList: any = [];
  superVisorList: any = [];
  shiftTypeList: any = [];
  locationList: any = [];
  personDetails: any = [];
  croppedImagepath: any = '';
  isLoading = false;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };

  url: any = '';

  selectedTime: any = "" ; 
  selectedDate;
  selectedDateReported: any = "" ; 
  selectedTimeReported: any = "" ; 

  individualChecked: any = "" ; 
  companyChecked: any = "" ; 

  constructor(
    private nav: NavController,
    private modal: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private global: GlobalService,
    private base64: Base64,
    private platform: Platform,
  ) {

    this.minDate = moment(new Date()).format("YYYY-MM-DD");

    this.data = [
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
    this.itsecurityCheckbox = [
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
        val: 'Intellectual Property Breach',
        isChecked: false,
      },
    ];
    this.classificationChekBox = [
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
    this.injuryCheckBox = [
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
    this.reputationCheckBox = [
      {
        val: 'Individual',
        isChecked: false,
      },
      {
        val: 'Company',
        isChecked: false,
      },
    ];
  }

  ngOnInit() {
    this.incedent = localStorage.getItem("incidentType");

    console.log('getItem', localStorage.getItem('id'));
  }

  itemsChangeForm(e) {
    let ee = JSON.parse(e.detail.value);
    if (ee == 1) {
      this.itemsArray = [1];
    }
    if (ee == 2) {
      this.itemsArray = [1, 2];
    }
    if (ee == 3) {
      this.itemsArray = [1, 2, 3];
    }
    if (ee == 4) {
      this.itemsArray = [1, 2, 3, 4];
    }
  }

  reputationCheckboxEvent(e, entry) {
    this.reputationCheckBox.forEach((element) => {
      if (element.val === 'Individual') {
        this.individualChecked = element.isChecked;
      } else if (element.val === 'Company') {
        this.companyChecked = element.isChecked;
      }
    });
  }

  pickImage(sourceType, e) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        const file = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
        if (e == 1) {
          this.imagePath = 'data:image/jpeg;base64,' + imageData;
          let t = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
          let realData = this.imagePath.split(",")[1];
          this.imageUri = imageData;
        }
        if (e == 2) {
          this.imagePath2 = 'data:image/jpeg;base64,' + imageData;
          let t = this.DataURIToBlob('data:image/jpeg;base64,' + imageData);
          this.image2Uri = imageData;
        }
        if (e == 3) {
          this.imagePath3 = 'data:image/jpeg;base64,' + imageData;
          this.image3Uri = imageData
        }
        if (e == 4) {
          this.imagePath4 = 'data:image/jpeg;base64,' + imageData;
          this.image4Uri = imageData
        }
        if (e == 5) {
          this.imagePath5 = 'data:image/jpeg;base64,' + imageData;
          this.image5Uri = imageData
        }
        if (e == 6) {
          this.drugImage = 'data:image/jpeg;base64,' + imageData;
          this.drugTestImageUri = imageData
        }
      },
      (err) => {
        console.log("errOf Image ", err)
      }
    );
  }

  ionViewWillEnter() {
    if (!this.platform.is('cordova')) {
      this.platformCheck = 'browser'
    } else {
      this.platformCheck = 'cordova'
    }
    this.incedent = localStorage.getItem("incidentType");
    this.global.getDataWithId("api/Witness/getWitnessList").subscribe((res: any) => {
      if (res) {
        this.witnessList = res.data;
      }
    }, err => {
      console.log(err);
    })

    this.global.getDataWithId("api/Manager/getManagerList").subscribe((res: any) => {
      if (res) {
        this.managerList = res.data;
      }
    }, err => {
      console.log(err);
    });

    this.global.getDataWithId("api/Supervisor/getSupervisorList").subscribe((res: any) => {
      if (res) {
        this.superVisorList = res.data;
      }
    }, err => {
      console.log("Eror", err)
    })

    this.global.getDataWithId("api/Shift/get_shift_typelist").subscribe((res: any) => {
      if (res) {
        this.shiftTypeList = res.data;
      }
    }, err => {
      console.log("Eror", err)
    })

    this.global.getDataWithId("api/location/getLocation").subscribe((res: any) => {
      if (res) {
        this.locationList = res.data
      }
    })

  }

  async selectImage(e) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, e);
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA, e);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  goBack() {
    this.nav.back();
  }

  goNext() {
    this.nav.navigateForward('dashboard');
  }

  checkDetails(i) {
    this.selected = i;
    let localDataStore = {
      incedent: this.incedent,
      whoWitnessedNearThis: this.whoWitnessedNearThis,
      possibleConsequence: this.possibleConsequence,
      classificationChekBox: this.classificationChekBox,
      dateOfIncident: this.dateOfIncident,
      timeOfIncident: this.timeOfIncident,
      dateReported: this.dateReported,
      timeReported: this.timeReported,
      location: this.location,
      addLocation: this.addLocation,
      locationSelection: this.locationSelection,
      shiftType: this.shiftType,
      superVisor: this.superVisor,
      nameOfManager: this.nameOfManager,
      imagePath: this.imagePath,
      descriptionIncident: this.descriptionIncident,
      immediateAction: this.immediateAction,
      wasThereAnyWitnessOfIncident: this.wasThereAnyWitnessOfIncident,
      alcoholTest: this.alcoholTest,
      imagePath2: this.imagePath2,
      drugTest: this.drugTest,
      drugImage: this.drugImage,
      formCount: this.formCount,
      person_one_details: this.person_one_details,
      person_two_details: this.person_two_details,
      person_three_details: this.person_three_details,
      person_four_details: this.person_four_details,
      environmentActionTaken: this.environmentActionTaken,
      chemicalSplit: this.chemicalSplit,
      nameOfChemical: this.nameOfChemical,
      insertPhotoisChecked: this.insertPhotoisChecked,
      imagePath3: this.imagePath3,
      approximateQtyofChemical: this.approximateQtyofChemical,
      emergencySpill: this.emergencySpill,
      reputationCheckBox: this.reputationCheckBox,
      individualReputationDamaged: this.individualReputationDamaged,
      companyReputatonDamaged: this.companyReputatonDamaged,
      nagativeEffetct: this.nagativeEffetct,
      nameOfAnyWitness: this.nameOfAnyWitness,
      possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
      securityRadio: this.securityRadio,
      itsecurityCheckbox: this.itsecurityCheckbox,
      stolenItem: this.stolenItem,
      approximateValueOfStolen: this.approximateValueOfStolen,
      specificSecurityIncident: this.specificSecurityIncident,
      assetDescription: this.assetDescription,
      assetsNumbers: this.assetsNumbers,
      extentOfDamage: this.extentOfDamage,
      imagePath5: this.imagePath5,
      doneDifferently: this.doneDifferently
    }
    localStorage.setItem("addFormDataStore", JSON.stringify(localDataStore))
  }

  saveItemOffline() {
    if (this.person_one_details.returnToNormalDuties === 'Yes') {
      this.person_one_details.returnToAlernateDuties = ""
    }
    this.person_one_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_one_details.injury_value.push(element.val)
      }
    });

    if (this.person_two_details.returnToNormalDuties === 'Yes') {
      this.person_two_details.returnToAlernateDuties = ""
    }
    this.person_two_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_two_details.injury_value.push(element.val)
      }
    });

    if (this.person_three_details.returnToNormalDuties === 'Yes') {
      this.person_three_details.returnToAlernateDuties = ""
    }
    this.person_three_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_three_details.injury_value.push(element.val)
      }
    });

    if (this.person_four_details.returnToNormalDuties === 'Yes') {
      this.person_four_details.returnToAlernateDuties = ""
    }
    this.person_four_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_four_details.injury_value.push(element.val)
      }
    });

    console.log("response")

    this.personDetails.push(this.person_one_details);
    this.personDetails.push(this.person_two_details);
    this.personDetails.push(this.person_three_details);
    this.personDetails.push(this.person_four_details);
    let classiCheckedValue: any = [];
    let repuCheckedValue: any = [];
    let it_option_value: any = [];
    this.itsecurityCheckbox.forEach(element => {
      if (element.isChecked) {
        it_option_value.push(element.val)
      }
    });
    this.classificationChekBox.forEach((el: any) => {
      if (el.isChecked) {
        classiCheckedValue.push(el.val)
      }
    });
    this.reputationCheckBox.forEach((el: any) => {
      if (el.isChecked) {
        repuCheckedValue.push(el.val)
      }
    })

    this.person_one_details.alternate_duties = this.person_one_details.returnToAlernateDuties
    this.person_one_details.date_of_birth = this.person_one_details.dateOfBirth
    this.person_one_details.duties_explanation = this.person_one_details.explanation
    this.person_one_details.initital_injury = this.person_one_details.injury_value.join(',')
    this.person_one_details.injured_person_option = this.person_one_details.fullNameOfInjuredPerson
    this.person_one_details.injured_person_option_value = this.person_one_details.other_name
    this.person_one_details.normal_duties = this.person_one_details.returnToNormalDuties;
    this.person_one_details.part_of_body_injured_occured = this.person_one_details.partOfBodyInjured;
    this.person_one_details.was_immediate_treatment = this.person_one_details.immediateTreatment
    this.person_one_details.immediate_treatment_given_explanation = this.person_one_details.immediateTreatmentGivenExplanation;
    this.person_one_details.immediate_treatment_person_name = this.person_one_details.administeredPersonName
    this.person_one_details.immediate_treatment_person_number = this.person_one_details.adminsteredPersonNumber;

    this.person_two_details.alternate_duties = this.person_two_details.returnToAlernateDuties
    this.person_two_details.date_of_birth = this.person_two_details.dateOfBirth
    this.person_two_details.duties_explanation = this.person_two_details.explanation
    this.person_two_details.initital_injury = this.person_two_details.injury_value.join(',')
    this.person_two_details.injured_person_option = this.person_two_details.fullNameOfInjuredPerson
    this.person_two_details.injured_person_option_value = this.person_two_details.other_name
    this.person_two_details.normal_duties = this.person_two_details.returnToNormalDuties;
    this.person_two_details.part_of_body_injured_occured = this.person_two_details.partOfBodyInjured;
    this.person_two_details.was_immediate_treatment = this.person_two_details.immediateTreatment
    this.person_two_details.immediate_treatment_given_explanation = this.person_two_details.immediateTreatmentGivenExplanation;
    this.person_two_details.immediate_treatment_person_name = this.person_two_details.administeredPersonName
    this.person_two_details.immediate_treatment_person_number = this.person_two_details.adminsteredPersonNumber

    this.person_three_details.alternate_duties = this.person_three_details.returnToAlernateDuties
    this.person_three_details.date_of_birth = this.person_three_details.dateOfBirth
    this.person_three_details.duties_explanation = this.person_three_details.explanation
    this.person_three_details.initital_injury = this.person_three_details.injury_value.join(',')
    this.person_three_details.injured_person_option = this.person_three_details.fullNameOfInjuredPerson
    this.person_three_details.injured_person_option_value = this.person_three_details.other_name
    this.person_three_details.normal_duties = this.person_three_details.returnToNormalDuties;
    this.person_three_details.part_of_body_injured_occured = this.person_three_details.partOfBodyInjured;
    this.person_three_details.was_immediate_treatment = this.person_three_details.immediateTreatment
    this.person_three_details.immediate_treatment_given_explanation = this.person_three_details.immediateTreatmentGivenExplanation;
    this.person_three_details.immediate_treatment_person_name = this.person_three_details.administeredPersonName
    this.person_three_details.immediate_treatment_person_number = this.person_three_details.adminsteredPersonNumber

    this.person_four_details.alternate_duties = this.person_four_details.returnToAlernateDuties
    this.person_four_details.date_of_birth = this.person_four_details.dateOfBirth
    this.person_four_details.duties_explanation = this.person_four_details.explanation
    this.person_four_details.initital_injury = this.person_four_details.injury_value.join(',')
    this.person_four_details.injured_person_option = this.person_four_details.fullNameOfInjuredPerson
    this.person_four_details.injured_person_option_value = this.person_four_details.other_name
    this.person_four_details.normal_duties = this.person_four_details.returnToNormalDuties;
    this.person_four_details.part_of_body_injured_occured = this.person_four_details.partOfBodyInjured;
    this.person_four_details.was_immediate_treatment = this.person_four_details.immediateTreatment
    this.person_four_details.immediate_treatment_given_explanation = this.person_four_details.immediateTreatmentGivenExplanation;
    this.person_four_details.immediate_treatment_person_name = this.person_four_details.administeredPersonName
    this.person_four_details.immediate_treatment_person_number = this.person_four_details.adminsteredPersonNumber

    let requiredData = {
      descriptionIncident: this.descriptionIncident,
      immediateAction: this.immediateAction,
      environmentActionTaken: this.environmentActionTaken,
      nameOfAnyWitness: this.nameOfAnyWitness,
      contactOfAnyWitness: this.contactOfAnyWitness,
      possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
      assetDescription: this.assetDescription,
      extentOfDamage: this.extentOfDamage,
      doneDifferently: this.doneDifferently
    };

    let nonRequirementIncident = {
      incidentRadio: this.incedent,
      whoWitnessedNearThis: this.whoWitnessedNearThis,
      possibleConsequence: this.possibleConsequence
    }

    let classificationObjectData = {
      ClassificationCheckBoxCollectionData: this.classificationChekBox,
      radioBtnValueofClassficationRadio: this.location,
      dropDownofShiftType: this.shiftType,
      superVisorDropdownValue: this.superVisor,
      addLocation: "",
      locationSelection: "",
      nameOfManager: this.nameOfManager,
      locationRadioValue: this.location
    }

    if (this.location === 'Add Location') {

      classificationObjectData.addLocation = this.addLocation;
    }
    if (this.location === 'Choose Location') {

      classificationObjectData.locationSelection = this.locationSelection
    }
    let incidentDataObject = {
      image: "",
      alcoholTest: this.alcoholTest
    }
    if (this.insertPhotoisChecked) {
      let imageData = {
        image: this.imagePath2
      }
      incidentDataObject.image = this.imagePath2;
    }
    let environmentalDataColletion = {
      chemicalSplit: this.chemicalSplit,
      nameOfChemical: "",
      image: "",
      approximateQtyofChemical: "",
      emergencySpill: this.emergencySpill
    }
    if (this.chemicalSplit === 'Yes') {
      environmentalDataColletion.nameOfChemical = this.nameOfChemical;
      environmentalDataColletion.image = this.imagePath3;
      environmentalDataColletion.approximateQtyofChemical = this.approximateQtyofChemical
    }
    let reputationCollectionData = {
      image: this.imagePath4,
      individualReputationDamaged: "",
      companyReputationDamged: "",
      reputationCheckBox: this.reputationCheckBox
    }
    if (this.individualChecked) {
      reputationCollectionData.individualReputationDamaged = this.individualReputationDamaged
    }
    if (this.companyChecked) {
      reputationCollectionData.companyReputationDamged = this.companyReputatonDamaged
    }
    let securityCollectionData = {
      securityRadiovalue: this.securityRadio,
      itsecurityCheckbox: ""
    }
    if (this.securityRadio == 'IT') {
      securityCollectionData.itsecurityCheckbox = this.itsecurityCheckbox
    }
    let assetCollectionData = {
      assetNumberRadioValue: this.assetNumber,
      image: this.imagePath5,
      assetsNumbers: ""
    }
    if (this.assetNumber == 'Yes') {
      assetCollectionData.assetsNumbers = this.assetsNumbers
    };
    if (this.person_one_details.returnToNormalDuties === 'Yes') {
      this.person_one_details.returnToAlernateDuties = ""
    }
    if (this.person_two_details.returnToNormalDuties === 'Yes') {
      this.person_two_details.returnToAlernateDuties = ""
    }
    if (this.person_three_details.returnToNormalDuties === 'Yes') {
      this.person_three_details.returnToAlernateDuties = ""
    }
    if (this.person_four_details.returnToNormalDuties === 'Yes') {
      this.person_four_details.returnToAlernateDuties = ""
    }
    let fd = new FormData();
    fd.append("photography_image", this.imagePath);
    fd.append("reputation_damage_image", this.imagePath4);
    fd.append("extent_damage_image", this.imagePath5);
    fd.append("incident_value", this.incedent);
    fd.append("incident_near_miss", this.whoWitnessedNearThis);
    fd.append("incident_near_miss_other", this.possibleConsequence);
    fd.append("classification_value", classiCheckedValue.join(','));
    fd.append("classification_location_option", this.location);
    if (this.location == 'Add Location') {
      fd.append("classification_location_value", this.addLocation)
    }
    if (this.location == 'Choose Location') {
      fd.append("classification_location_value", this.locationSelection)
    }
    fd.append("classification_shift_type", this.shiftType);
    fd.append("classification_supervisor", this.superVisor);
    fd.append("classification_manager", this.nameOfManager);
    fd.append("incident_description", this.descriptionIncident);
    fd.append("incident_description_action", this.immediateAction);
    fd.append("reputation_negative_effect", this.nagativeEffetct)
    //incident photo pending from postman and here also 
    fd.append("incident_description_alcohol_test", this.alcoholTest);
    fd.append("injury_persons", this.formCount);//form value
    fd.append("environmental_description", this.environmentActionTaken);
    fd.append("was_a_chemical_split", this.chemicalSplit);
    //checmical split value inner side query
    fd.append("emergency_spill_kit_used", this.emergencySpill);
    fd.append("reputation_option", repuCheckedValue);
    if (this.individualChecked) {
      fd.append("individual_damage_value", this.individualReputationDamaged)
    }
    if (this.companyChecked) {
      fd.append("company_damage_value", this.companyReputatonDamaged)
    }
    fd.append("incident_description_photo", this.imagePath2)
    fd.append("reutation_negative_effect", this.nagativeEffetct);
    fd.append("name_of_witness", this.nameOfAnyWitness);
    fd.append("contact_of_witness", this.contactOfAnyWitness);
    fd.append("possible_outcome_incident", this.possibleOutcomeOfIncident);
    fd.append("security_option", this.securityRadio);
    if (this.securityRadio == 'IT') {
      fd.append("it_option_value", it_option_value.join(',')) // chexkbox and inner value
    }
    fd.append("asset_description", this.assetDescription);
    fd.append("asset_has_number", this.assetNumber);
    if (this.assetNumber == 'Yes') {
      fd.append("asset_number", this.assetsNumbers);
    }
    fd.append("extent_of_damage", this.extentOfDamage);
    fd.append("report", this.doneDifferently);
    fd.append("person_details", JSON.stringify(this.personDetails));
    fd.append("chemical_details", JSON.stringify(this.checmicalDetails))

    fd.append("date_of_incident", this.dateOfIncident);
    fd.append("time_of_incident", this.timeOfIncident);
    fd.append("date_reported", this.dateReported);
    fd.append("time_reported", this.timeReported);
    fd.append("was_there_any_witness_of_the_incident", this.wasThereAnyWitnessOfIncident);
    fd.append("alcohol_test_completed", this.alcoholTest);
    fd.append("drug_test_completed", this.drugTest);
    fd.append("part_of_body_injured_occured", this.partOfBodyInjured);
    fd.append("what_has_been_stolen_item", this.stolenItem);
    fd.append("what_is_the_specific_securities_incident", this.specificSecurityIncident);
    fd.append("approximate_value_of_stolen", this.approximateValueOfStolen);
    fd.append('investigator_id', localStorage.getItem('id'));

    this.global.presentLoading();

    this.global.postData("api/Add_form/submit_incomplete", fd).subscribe((res: any) => {
      if (res.status) {
        this.global.presentToast(res.message)
        this.global.dismissLoading();
        this.nav.navigateRoot("form-list")
      } else {
        this.global.presentToast(res.message)
        this.global.dismissLoading();
      }
    }, err => {
      console.log("err", err);
      this.global.dismissLoading();
    })
  }

  deSelect(i) {
    this.selected = '';
  }

  checkIncident(e) {
    this.incedent = e.detail.value;
  }

  async openModal() {
    const modal = await this.modal.create({
      component: ManagersPage,
      cssClass: 'managers',
    });
    modal.onDidDismiss().then((res) => {
      if (res?.data?.full_name) {
        this.nameOfManager = res.data.full_name;
      }
    });
    return await modal.present();
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }

  onSubmit() {

    if (this.person_one_details.returnToNormalDuties === 'Yes') {
      this.person_one_details.returnToAlernateDuties = ""
    }
    this.person_one_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_one_details.injury_value.push(element.val)
      }
    });

    if (this.person_two_details.returnToNormalDuties === 'Yes') {
      this.person_two_details.returnToAlernateDuties = ""
    }
    this.person_two_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_two_details.injury_value.push(element.val)
      }
    });

    if (this.person_three_details.returnToNormalDuties === 'Yes') {
      this.person_three_details.returnToAlernateDuties = ""
    }
    this.person_three_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_three_details.injury_value.push(element.val)
      }
    });

    if (this.person_four_details.returnToNormalDuties === 'Yes') {
      this.person_four_details.returnToAlernateDuties = ""
    }
    this.person_four_details.injurryCheckBox.forEach(element => {
      if (element.isChecked) {
        this.person_four_details.injury_value.push(element.val)
      }
    });

    this.personDetails.push(this.person_one_details);
    this.personDetails.push(this.person_two_details);
    this.personDetails.push(this.person_three_details);
    this.personDetails.push(this.person_four_details);
    let classiCheckedValue: any = [];
    let repuCheckedValue: any = [];
    let it_option_value: any = [];
    this.itsecurityCheckbox.forEach(element => {
      if (element.isChecked) {
        it_option_value.push(element.val)
      }
    });
    this.classificationChekBox.forEach((el: any) => {
      if (el.isChecked) {
        classiCheckedValue.push(el.val)
      }
    });
    this.reputationCheckBox.forEach((el: any) => {
      if (el.isChecked) {
        repuCheckedValue.push(el.val)
      }
    })
    if (this.incedent === '') {
      this.global.toast("Incident : Incident is Required", 'danger');
    } else if (this.descriptionIncident === '') {

      // this.global.presentToast("Incident Description - Please enter Description of incident")
      this.global.toast("Incident Description - Please enter Description of incident", 'danger');
    } else if (this.immediateAction === '') {

      this.global.toast("Incident Description - Immediate action taken filed is Required", 'danger')
    } else if (this.environmentActionTaken === '') {

      this.global.toast("Environmental - Please enter Immediate action taken to minimize Environmental impact", 'danger')
    } else if (this.nameOfAnyWitness === '') {

      this.global.toast("Reputation - Please enter name of any witness", 'danger')
    } else if (this.possibleOutcomeOfIncident === '') {

      this.global.toast("Reputation - Please enter possible outcome of this incident", 'danger')
    } else if (this.assetDescription === '') {

      this.global.toast("Asset - Please enter asset description", 'danger')
    } else if (this.extentOfDamage === '') {

      this.global.toast("Asset - Please enter Extent of Damage", 'danger')
    } else if (this.doneDifferently === '') {

      this.global.toast("Report - Please enter what could have been done differently", 'danger')
    } else if (this.nameOfManager === '' || this.nameOfManager === "Name of Manager") {
      this.global.toast("Classification - Please Select the manager", 'danger')
    } else {
      this.person_one_details.alternate_duties = this.person_one_details.returnToAlernateDuties
      this.person_one_details.date_of_birth = this.person_one_details.dateOfBirth
      this.person_one_details.duties_explanation = this.person_one_details.explanation
      this.person_one_details.initital_injury = this.person_one_details.injury_value.join(',')
      this.person_one_details.injured_person_option = this.person_one_details.fullNameOfInjuredPerson
      this.person_one_details.injured_person_option_value = this.person_one_details.other_name
      this.person_one_details.normal_duties = this.person_one_details.returnToNormalDuties;
      this.person_one_details.part_of_body_injured_occured = this.person_one_details.partOfBodyInjured;
      this.person_one_details.was_immediate_treatment = this.person_one_details.immediateTreatment
      this.person_one_details.immediate_treatment_given_explanation = this.person_one_details.immediateTreatmentGivenExplanation;
      this.person_one_details.immediate_treatment_person_name = this.person_one_details.administeredPersonName
      this.person_one_details.immediate_treatment_person_number = this.person_one_details.adminsteredPersonNumber;

      this.person_two_details.alternate_duties = this.person_two_details.returnToAlernateDuties
      this.person_two_details.date_of_birth = this.person_two_details.dateOfBirth
      this.person_two_details.duties_explanation = this.person_two_details.explanation
      this.person_two_details.initital_injury = this.person_two_details.injury_value.join(',')
      this.person_two_details.injured_person_option = this.person_two_details.fullNameOfInjuredPerson
      this.person_two_details.injured_person_option_value = this.person_two_details.other_name
      this.person_two_details.normal_duties = this.person_two_details.returnToNormalDuties;
      this.person_two_details.part_of_body_injured_occured = this.person_two_details.partOfBodyInjured;
      this.person_two_details.was_immediate_treatment = this.person_two_details.immediateTreatment
      this.person_two_details.immediate_treatment_given_explanation = this.person_two_details.immediateTreatmentGivenExplanation;
      this.person_two_details.immediate_treatment_person_name = this.person_two_details.administeredPersonName
      this.person_two_details.immediate_treatment_person_number = this.person_two_details.adminsteredPersonNumber

      this.person_three_details.alternate_duties = this.person_three_details.returnToAlernateDuties
      this.person_three_details.date_of_birth = this.person_three_details.dateOfBirth
      this.person_three_details.duties_explanation = this.person_three_details.explanation
      this.person_three_details.initital_injury = this.person_three_details.injury_value.join(',')
      this.person_three_details.injured_person_option = this.person_three_details.fullNameOfInjuredPerson
      this.person_three_details.injured_person_option_value = this.person_three_details.other_name
      this.person_three_details.normal_duties = this.person_three_details.returnToNormalDuties;
      this.person_three_details.part_of_body_injured_occured = this.person_three_details.partOfBodyInjured;
      this.person_three_details.was_immediate_treatment = this.person_three_details.immediateTreatment
      this.person_three_details.immediate_treatment_given_explanation = this.person_three_details.immediateTreatmentGivenExplanation;
      this.person_three_details.immediate_treatment_person_name = this.person_three_details.administeredPersonName
      this.person_three_details.immediate_treatment_person_number = this.person_three_details.adminsteredPersonNumber

      this.person_four_details.alternate_duties = this.person_four_details.returnToAlernateDuties
      this.person_four_details.date_of_birth = this.person_four_details.dateOfBirth
      this.person_four_details.duties_explanation = this.person_four_details.explanation
      this.person_four_details.initital_injury = this.person_four_details.injury_value.join(',')
      this.person_four_details.injured_person_option = this.person_four_details.fullNameOfInjuredPerson
      this.person_four_details.injured_person_option_value = this.person_four_details.other_name
      this.person_four_details.normal_duties = this.person_four_details.returnToNormalDuties;
      this.person_four_details.part_of_body_injured_occured = this.person_four_details.partOfBodyInjured;
      this.person_four_details.was_immediate_treatment = this.person_four_details.immediateTreatment
      this.person_four_details.immediate_treatment_given_explanation = this.person_four_details.immediateTreatmentGivenExplanation;
      this.person_four_details.immediate_treatment_person_name = this.person_four_details.administeredPersonName
      this.person_four_details.immediate_treatment_person_number = this.person_four_details.adminsteredPersonNumber

      let requiredData = {
        descriptionIncident: this.descriptionIncident,
        immediateAction: this.immediateAction,
        environmentActionTaken: this.environmentActionTaken,
        nameOfAnyWitness: this.nameOfAnyWitness,
        contactOfAnyWitness: this.contactOfAnyWitness,
        possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
        assetDescription: this.assetDescription,
        extentOfDamage: this.extentOfDamage,
        doneDifferently: this.doneDifferently
      };
      let nonRequirementIncident = {
        incidentRadio: this.incedent,
        whoWitnessedNearThis: this.whoWitnessedNearThis,
        possibleConsequence: this.possibleConsequence
      }
      let classificationObjectData = {
        ClassificationCheckBoxCollectionData: this.classificationChekBox,
        radioBtnValueofClassficationRadio: this.location,
        dropDownofShiftType: this.shiftType,
        superVisorDropdownValue: this.superVisor,
        addLocation: "",
        locationSelection: "",
        nameOfManager: this.nameOfManager,
        locationRadioValue: this.location
      }

      if (this.location === 'Add Location') {

        classificationObjectData.addLocation = this.addLocation;
      }
      if (this.location === 'Choose Location') {

        classificationObjectData.locationSelection = this.locationSelection
      }
      let incidentDataObject = {
        image: "",
        alcoholTest: this.alcoholTest
      }
      if (this.insertPhotoisChecked) {
        let imageData = {
          image: this.imagePath2
        }
        incidentDataObject.image = this.imagePath2;
      }
      let environmentalDataColletion = {
        chemicalSplit: this.chemicalSplit,
        nameOfChemical: "",
        image: "",
        approximateQtyofChemical: "",
        emergencySpill: this.emergencySpill
      }
      if (this.chemicalSplit === 'Yes') {
        environmentalDataColletion.nameOfChemical = this.nameOfChemical;
        environmentalDataColletion.image = this.imagePath3;
        environmentalDataColletion.approximateQtyofChemical = this.approximateQtyofChemical
      }
      let reputationCollectionData = {
        image: this.imagePath4,
        individualReputationDamaged: "",
        companyReputationDamged: "",
        reputationCheckBox: this.reputationCheckBox
      }
      if (this.individualChecked) {
        reputationCollectionData.individualReputationDamaged = this.individualReputationDamaged
      }
      if (this.companyChecked) {
        reputationCollectionData.companyReputationDamged = this.companyReputatonDamaged
      }
      let securityCollectionData = {
        securityRadiovalue: this.securityRadio,
        itsecurityCheckbox: ""
      }
      if (this.securityRadio == 'IT') {
        securityCollectionData.itsecurityCheckbox = this.itsecurityCheckbox
      }
      let assetCollectionData = {
        assetNumberRadioValue: this.assetNumber,
        image: this.imagePath5,
        assetsNumbers: ""
      }
      if (this.assetNumber == 'Yes') {
        assetCollectionData.assetsNumbers = this.assetsNumbers
      };
      if (this.person_one_details.returnToNormalDuties === 'Yes') {
        this.person_one_details.returnToAlernateDuties = ""
      }
      if (this.person_two_details.returnToNormalDuties === 'Yes') {
        this.person_two_details.returnToAlernateDuties = ""
      }
      if (this.person_three_details.returnToNormalDuties === 'Yes') {
        this.person_three_details.returnToAlernateDuties = ""
      }
      if (this.person_four_details.returnToNormalDuties === 'Yes') {
        this.person_four_details.returnToAlernateDuties = ""
      }
      let fd = new FormData();
      fd.append("photography_image", this.imagePath);
      fd.append("reputation_damage_image", this.imagePath4);
      fd.append("extent_damage_image", this.imagePath5);
      fd.append("incident_value", this.incedent);
      fd.append("incident_near_miss", this.whoWitnessedNearThis);
      fd.append("incident_near_miss_other", this.possibleConsequence);
      fd.append("classification_value", classiCheckedValue.join(','));
      fd.append("classification_location_option", this.location);
      if (this.location == 'Add Location') {
        fd.append("classification_location_value", this.addLocation)
      }
      if (this.location == 'Choose Location') {
        fd.append("classification_location_value", this.locationSelection)
      }
      fd.append("classification_shift_type", this.shiftType);
      fd.append("classification_supervisor", this.superVisor);
      fd.append("classification_manager", this.nameOfManager);
      fd.append("incident_description", this.descriptionIncident);
      fd.append("incident_description_action", this.immediateAction);
      //incident photo pending from postman and here also 
      fd.append("incident_description_alcohol_test", this.alcoholTest);
      fd.append("injury_persons", this.formCount);//form value
      fd.append("environmental_description", this.environmentActionTaken);
      fd.append("was_a_chemical_split", this.chemicalSplit);
      //checmical split value inner side query
      fd.append("emergency_spill_kit_used", this.emergencySpill);
      fd.append("reputation_option", repuCheckedValue);
      if (this.individualChecked) {
        fd.append("individual_damage_value", this.individualReputationDamaged)
      }
      if (this.companyChecked) {
        fd.append("company_damage_value", this.companyReputatonDamaged)
      }
      fd.append("incident_description_photo", this.imagePath2)
      fd.append("reutation_negative_effect", this.nagativeEffetct);
      fd.append("name_of_witness", this.nameOfAnyWitness);
      fd.append("contact_of_witness", this.contactOfAnyWitness);
      fd.append("possible_outcome_incident", this.possibleOutcomeOfIncident);
      fd.append("security_option", this.securityRadio);
      if (this.securityRadio == 'IT') {
        fd.append("it_option_value", it_option_value.join(',')) // chexkbox and inner value
      }
      fd.append("asset_description", this.assetDescription);
      fd.append("asset_has_number", this.assetNumber);
      if (this.assetNumber == 'Yes') {
        fd.append("asset_number", this.assetsNumbers);
      }
      fd.append("extent_of_damage", this.extentOfDamage);
      fd.append("report", this.doneDifferently);
      fd.append("person_details", JSON.stringify(this.personDetails));
      fd.append("chemical_details", JSON.stringify(this.checmicalDetails))
      /* extra field added in api */
      fd.append("date_of_incident", this.dateOfIncident);
      fd.append("time_of_incident", this.timeOfIncident);
      fd.append("date_reported", this.dateReported);
      fd.append("time_reported", this.timeReported);
      fd.append("was_there_any_witness_of_the_incident", this.wasThereAnyWitnessOfIncident);
      fd.append("alcohol_test_completed", this.alcoholTest);
      fd.append("drug_test_completed", this.drugTest);
      fd.append("part_of_body_injured_occured", this.partOfBodyInjured);
      fd.append("what_has_been_stolen_item", this.stolenItem);
      fd.append("what_is_the_specific_securities_incident", this.specificSecurityIncident);
      fd.append("approximate_value_of_stolen", this.approximateValueOfStolen);
      fd.append('user_id', localStorage.getItem('id'));
      this.global.presentLoading();

      this.global.postData("api/add_form/submit", fd).subscribe((res: any) => {
        if (res.status) {
          this.global.presentToast(res.message)
          this.nav.navigateRoot("form-list");
          localStorage.removeItem("addFormDataStore")
          this.global.dismissLoading();
        } else {
          this.global.presentToast(res.message)
          this.global.dismissLoading();
        }
      }, err => {
        console.log("err", err);
        this.global.dismissLoading();
      })

    }
  }

  onSelectFile(event, e) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        if (e == 1) {
          this.imagePath = event.target.result;
        }
        if (e == 2) {
          this.imagePath2 = event.target.result;
        }
        if (e == 3) {
          this.imagePath3 = event.target.result;
        }
        if (e == 4) {
          this.imagePath4 = event.target.result;
        }
        if (e == 5) {
          this.imagePath5 = event.target.result;
        }
        if (e == 6) {
          this.drugImage = event.target.result;
        }
      }
    }
  }

  dateSelect(e: any, from) {
    if (from == 'incident') {
      this.dateOfIncident = moment(e.detail.value).format("YYYY-MM-DD");
      this.selectedDate = e.detail.value;
    } else {
      this.dateReported = moment(e.detail.value).format("YYYY-MM-DD")
      this.selectedDateReported = e.detail.value;
    }
  }

  timeSelect(e: any, from) {
    if (from == 'timeIncident') {
      this.timeOfIncident = moment(e.detail.value).format("hh:mm A");
      this.selectedTime = e.detail.value;
    } else {
      this.selectedTimeReported = e.detail.value;
      // this.timeReported = moment(e.detail.value).format("hh:mm A");
      this.timeReported = moment(e.detail.value).format("hh:mm A");
    }
  }

  inputChange(e) {
    let localDataStore = {
      incedent: this.incedent,
      whoWitnessedNearThis: this.whoWitnessedNearThis,
      possibleConsequence: this.possibleConsequence,
      classificationChekBox: this.classificationChekBox,
      dateOfIncident: this.dateOfIncident,
      timeOfIncident: this.timeOfIncident,
      dateReported: this.dateReported,
      timeReported: this.timeReported,
      location: this.location,
      addLocation: this.addLocation,
      locationSelection: this.locationSelection,
      shiftType: this.shiftType,
      superVisor: this.superVisor,
      nameOfManager: this.nameOfManager,
      imagePath: this.imagePath,
      descriptionIncident: this.descriptionIncident,
      immediateAction: this.immediateAction,
      wasThereAnyWitnessOfIncident: this.wasThereAnyWitnessOfIncident,
      alcoholTest: this.alcoholTest,
      imagePath2: this.imagePath2,
      drugTest: this.drugTest,
      drugImage: this.drugImage,
      formCount: this.formCount,
      person_one_details: this.person_one_details,
      person_two_details: this.person_two_details,
      person_three_details: this.person_three_details,
      person_four_details: this.person_four_details,
      environmentActionTaken: this.environmentActionTaken,
      chemicalSplit: this.chemicalSplit,
      nameOfChemical: this.nameOfChemical,
      insertPhotoisChecked: this.insertPhotoisChecked,
      imagePath3: this.imagePath3,
      approximateQtyofChemical: this.approximateQtyofChemical,
      emergencySpill: this.emergencySpill,
      reputationCheckBox: this.reputationCheckBox,
      individualReputationDamaged: this.individualReputationDamaged,
      companyReputatonDamaged: this.companyReputatonDamaged,
      nagativeEffetct: this.nagativeEffetct,
      nameOfAnyWitness: this.nameOfAnyWitness,
      possibleOutcomeOfIncident: this.possibleOutcomeOfIncident,
      securityRadio: this.securityRadio,
      itsecurityCheckbox: this.itsecurityCheckbox,
      stolenItem: this.stolenItem,
      approximateValueOfStolen: this.approximateValueOfStolen,
      specificSecurityIncident: this.specificSecurityIncident,
      assetDescription: this.assetDescription,
      assetsNumbers: this.assetsNumbers,
      extentOfDamage: this.extentOfDamage,
      imagePath5: this.imagePath5,
      doneDifferently: e.detail.value
    }
    localStorage.setItem("addFormDataStore", JSON.stringify(localDataStore))
  }

}
