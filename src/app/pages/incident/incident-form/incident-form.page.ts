import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import moment from 'moment';

import { environment } from 'src/environments/environment';
import { GlobalService } from '../../../services/global-service/global.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { ManagersPage } from 'src/app/modals/managers/managers.page';
import { ImageModalPage } from 'src/app/modals/image-modal/image-modal.page';

import IncidentJson from '../incident-form.json';


@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.page.html',
  styleUrls: ['./incident-form.page.scss'],
})
export class IncidentFormPage implements OnInit {

  imagePath = environment.imageUrl;
  pName: string = 'Add Form';
  witnessList: any = [];
  shiftTypeList: any = [];
  superVisorList: any = [];
  locationList: any = [];
  bodyPartList; any = [];
  managerList: any = 'Name of Manager';
  individualChecked: any;
  companyChecked: any;
  selectedTabList: any = [];
  disabledTab: boolean;
  reputationWitnessList: any = [];
  platformCheck: any = '';

  //----------------------------------------------------- Image variables ----------------------------------------------------//
  photoGraphy = [];
  photoGraphyObject: any = {};
  alcohalImages = [];
  alcohalImagesObject: any = {};
  drugTestImages = [];
  drugTestImagesObject: any = {};
  alterDutyImages = [];
  alterDutyImagesObject: any = {};
  chemicalImages = [];
  chemicalImagesObject: any = {};
  damageImages = [];
  damageImagesObject: any = {};
  //------------------------------------------------------ Image variables ----------------------------------------------------//


  //--------------------------------------------------------- Forms -----------------------------------------------------------//

  incidentForm: FormGroup;
  photoGraphyForm: FormGroup;
  incidentDesForm: FormGroup;
  classificationForm: FormGroup;
  injuryForm: FormGroup;
  enviornmentForm: FormGroup;
  reputationDesForm: FormGroup;
  securityForm: FormGroup;
  assetDescriptionForm: FormGroup;
  reportForm: FormGroup;

  //--------------------------------------------------------- Forms ----------------------------------------------------------//

  //---------------------------------------------------------- Tab -----------------------------------------------------------//

  tabList = [
    {
      val: "Incident",
      tabDisable: false
    },
    {
      val: "Photography",
      tabDisable: true
    },
    {
      val: "Incident Description",
      tabDisable: true
    },
    {
      val: "Classification",
      tabDisable: true
    }
  ];
  selectedTabItem: string = 'Incident';

  //---------------------------------------------------------- Tab -----------------------------------------------------------//

  //-------------------------------------------------------- JSON DATA -------------------------------------------------------//

  classificationList = [
    {
      val: "Asset",
      isChecked: false
    },
    {
      val: "Environmental",
      isChecked: false
    },
    {
      val: "Injury",
      isChecked: false
    },
    {
      val: "Report",
      isChecked: false
    },
    {
      val: "Reputation",
      isChecked: false
    },
    {
      val: "Security",
      isChecked: false
    }
  ];
  itSecurityList = [
    {
      val: "Intrusion",
      isChecked: false
    },
    {
      val: "Privacy breach",
      isChecked: false
    },
    {
      val: "Ransom ware",
      isChecked: false
    },
    {
      val: "Security",
      isChecked: false
    }
  ];
  reputationCheckBox = [
    {
      val: "Company",
      isChecked: false
    },
    {
      val: "Individual",
      isChecked: false
    }
  ];

  departmentEffect = [
    {
      val: "Dubbo Division",
      isChecked: false
    },
    {
      val: "Mudgee Division",
      isChecked: false
    },
    {
      val: "Orange Division",
      isChecked: false
    },
    {
      val: "Project Services",
      isChecked: false
    },
    {
      val: "West Wyalong Division",
      isChecked: false
    }
  ];
  injuryList = IncidentJson[0].injuryList;

  //-------------------------------------------------------- JSON DATA -------------------------------------------------------//

  constructor(
    private globalService: GlobalService,
    private sharedService: SharedService,
    private modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private nav: NavController,
    private platform: Platform
  ) { }

  ngOnInit() {
    // console.log('IncidentJson', IncidentJson);
    if (!this.platform.is('cordova')) {
      this.platformCheck = 'browser'
    } else {
      this.platformCheck = 'cordova'
    }

    this.loadWitness();
    this.loadShift();
    this.loadSuperwiser();
    this.loadLocation();
    this.findValueInWitness();
    this.loadBodyPart();

    this.incidentForm = this.fb.group({
      incident_value: [''],                // required field
      incident_near_miss: [''],
      incident_near_miss_other: [''],
    });

    this.photoGraphyForm = this.fb.group({
      photography_image: [''],                                 // photography image
    });

    this.incidentDesForm = this.fb.group({
      incident_description: ['', Validators.required],         // required field
      incident_description_action: ['', Validators.required],  // required field
      seen_differently: [''],
      was_there_any_witness_of_the_incident: [''],

      incident_description_alcohol_test: [''],
      // alcohol_test_completed: [''],
      incident_description_photo: [''],                         // incident description images

      alcohol_test_image: [''],                                 // alcohal images

      drug_test_completed: [''],
      drug_test_image: [''],                                    // drug test image

      return_to_alternate_duties: [''],
      return_to_alternate_duties_image: ['']                    //return to alternate duties image
    });

    this.classificationForm = this.fb.group({
      classification_value: new FormArray([]),
      date_of_incident: [''],
      time_of_incident: [''],
      date_reported: [''],
      time_reported: [''],
      classification_location_option: [''],
      classification_location_value: [''],
      classification_location_value1: [''],
      // selectLocation: [''],
      classification_shift_type: [''],
      classification_supervisor: [''],
      classification_manager: ['', Validators.required]          // required field
    });

    this.injuryForm = this.fb.group({
      injury_persons: [''],
      person_details: this.fb.array([]),
    });

    this.enviornmentForm = this.fb.group({
      environmental_description: [''],                           // required
      was_a_chemical_split: [''],
      chemical_details:
        this.fb.group({
          chemical_name: [''],
          chemical_photo: [''],                                  // chemical images
          approximate_quantity: [''],
          insertPhotoCheckBox: [false],
        }),
      emergency_spill_kit_used: [''],
      out_of_split_kit: ['']
    });

    this.reputationDesForm = this.fb.group({
      reputation_option: new FormArray([]),
      individual_damage_value: [''],
      company_damage_value: [''],
      reputation_negative_effect: [''],
      effected_department: new FormArray([]),
      external_party: [''],
      name_of_witness: [''],                                   // required field
      other_witness_details:
        this.fb.group({
          other_witness_name: [''],
          other_witness_mobile_no: [''],
          other_witness_email: ['']
        }),
      possible_outcome_incident: [''],                          // required field
    });

    this.securityForm = this.fb.group({
      security_option: [''],
      it_option_value: new FormArray([]),
      what_has_been_stolen_item: [''],
      approximate_value_of_stolen: [''],
      what_is_the_specific_securities_incident: [''],
    });

    this.assetDescriptionForm = this.fb.group({
      asset_description: [''],                                   // required field
      asset_has_number: [''],
      asset_number: [''],
      extent_of_damage: [''],                                    // required field       
      extent_damage_image: ['']                                 // extent damage image
    });

    this.reportForm = this.fb.group({
      report: ['']
    });
  }

  loadWitness() {
    this.globalService.getData1("Witness/getWitnessList").subscribe((res: any) => {
      console.log('getWitnessList',res);
      if (res && res.status && res.data && res.data.length > 0) {
        this.witnessList = res.data;
        this.reputationWitnessList = this.witnessList;
        let data: boolean = this.findValueInWitness();
        if (data) {
          this.reputationWitnessList.push({ contact_of_witness: "", name_of_witness: "Other" });
        }
      } else {
        this.witnessList = [];
      }
    }, err => {
      console.log(err);
    })
  }

  findValueInWitness() {
    let val: boolean = false;
    this.reputationWitnessList.find(ele => {
      if (ele.name_of_witness != "Other") {
        val = true;
      }
    })
    return val;
  }

  loadShift() {
    this.globalService.getData1("Shift/get_shift_typelist").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.shiftTypeList = res.data;
      } else {
        this.shiftTypeList = [];
      }
    }, err => {
      console.log("Eror", err)
    })
  }

  loadSuperwiser() {
    this.globalService.getData1("Supervisor/getSupervisorList").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.superVisorList = res.data;
      } else {
        this.superVisorList = [];
      }
    }, err => {
      console.log("Eror", err)
    })
  }

  loadLocation() {
    this.globalService.getData1("location/getLocation").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.locationList = res.data;
      } else {
        this.locationList = [];
      }
    }, err => {
      console.log("Eror", err)
    })
  }

  loadBodyPart() {
    this.globalService.getData1("Body_part/getbodypart").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.bodyPartList = res.data;
      } else {
        this.bodyPartList = [];
      }
    }, err => {
      console.log("Eror", err)
    })
  }

  onSelectTabItem(i) {
    this.selectedTabItem = i;
  }

  onDeSelectTabItem(i) {
    this.selectedTabItem = '';
    if (i == 'Classification') {
      this.selectedTabList = this.selectedTabList;
    }
  }

  onMobileUpload() {
  }

  onPhotoGraphy(event, type) {
    this.photoGraphy = []
    this.photoGraphyObject = {}
    if (type == 1) {
      // let data = this.mobileUploadImages();
      // console.log('data', data);
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        this.sharedService.getBase64(event.target.files[i]).then(
          data => {
            console.log('onPhotoGraphy', data)
            // this.convertDataURIToBinary(data);
            this.photoGraphyObject[i] = data
            this.photoGraphy.push(data);
          }).catch(error => {
            console.log('error', error);
          });
      }
    }
  }

  onAlochaolImage(event) {
    this.alcohalImages = [];
    this.alcohalImagesObject = {};
    for (let i = 0; i < event.target.files.length; i++) {
      this.sharedService.getBase64(event.target.files[i]).then(
        data => {
          this.alcohalImagesObject[i] = data
          this.alcohalImages.push(data);
        }).catch(error => {
          console.log('error', error);
        });
    }
  }

  onAlcohalTestSelect(event) {
    if (event.target.value != 'Yes') {
      this.alcohalImages = [];
      this.alcohalImagesObject = {};
    }
  }

  onDrugTestImage(event) {
    this.drugTestImages = [];
    this.drugTestImagesObject = {};
    for (let i = 0; i < event.target.files.length; i++) {
      this.sharedService.getBase64(event.target.files[i]).then(
        data => {
          // let blobImage = this.convertDataURIToBinary(data);
          this.drugTestImagesObject[i] = data
          this.drugTestImages.push(data);
        }).catch(error => {
          console.log('error', error);
        });
    }
  }

  onDrugTestSelect(event) {
    if (event.target.value != 'Yes') {
      this.drugTestImages = [];
      this.drugTestImagesObject = {};
    }
  }

  onReturnToDutyImage(event) {
    this.alterDutyImagesObject = {};
    this.alterDutyImages = [];
    for (let i = 0; i < event.target.files.length; i++) {
      this.sharedService.getBase64(event.target.files[i]).then(
        data => {
          this.alterDutyImagesObject[i] = data
          this.alterDutyImages.push(data);
        }).catch(error => {
          console.log('error', error);
        });
    }
  }

  onReturnToDutySelect(event) {
    if (event.target.value != 'Yes') {
      this.alterDutyImages = [];
      this.alterDutyImagesObject = {};
    }
  }

  onChemicalImageSelect(event) {
    this.chemicalImages = [];
    this.chemicalImagesObject = {};
    for (let i = 0; i < event.target.files.length; i++) {
      this.sharedService.getBase64(event.target.files[i]).then(
        data => {
          this.chemicalImagesObject[i] = data
          this.chemicalImages.push(data);
        }).catch(error => {
          console.log('error', error);
        });
    }
    this.enviornmentForm.get('chemical_details').value.chemical_photo = this.chemicalImagesObject;
  }

  onInsertImageSelect(event) {
    if (!event.detail.checked) {
      this.chemicalImages = [];
      this.chemicalImagesObject = {};
    }
  }

  onSelectDamageImage(event) {
    this.damageImages = [];
    this.damageImagesObject = {};
    for (let i = 0; i < event.target.files.length; i++) {
      this.sharedService.getBase64(event.target.files[i]).then(
        data => {
          this.damageImagesObject[i] = data
          this.damageImages.push(data);
        }).catch(error => {
          console.log('error', error);
        });
    }
  }

  async onOpenModal() {
    const modal = await this.modalController.create({
      component: ManagersPage,
      cssClass: 'managers',
    });
    modal.onDidDismiss().then((res) => {
      if (res?.data?.full_name) {
        this.managerList = res.data.full_name;
        this.classificationForm.controls.classification_manager.setValue(res.data.full_name);
      }
    });

    return await modal.present();
  }

  async onOpenPreview(img) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        img
      }
    });
    modal.present();
  }

  validation() {
    let enviornmental: boolean = false;
    let reputation: boolean = false;
    let assets: boolean = false;
    let report: boolean = false;

    this.classificationForm.value['classification_value'].find(ele => {
      if (ele == 'Environmental') {
        enviornmental = true;
      }
      if (ele == 'Reputation') {
        reputation = true;
      }
      if (ele == 'Asset') {
        assets = true;
      }
      if (ele == 'Report') {
        report = true;
      }
    });

    if (this.incidentForm.value['incident_value'] === '' || this.incidentForm.value['incident_value'] == null) {
      this.globalService.presentToast("Incident : Incident is Required");
    } else if (this.incidentDesForm.value['incident_description'] === '' || this.incidentDesForm.value['incident_description'] == null) {
      this.globalService.presentToast("Incident Description - Please enter Description of incident")
    } else if (this.incidentDesForm.value['incident_description_action'] === '' || this.incidentDesForm.value['incident_description_action'] == null) {
      this.globalService.presentToast("Incident Description - Immediate action taken filed is Required")
    } else if (this.classificationForm.value['classification_manager'] == '' || this.classificationForm.value['classification_manager'] == null) {
      this.globalService.presentToast("Classification - Please Select the manager")
    } else if ((this.enviornmentForm.value['environmental_description'] === '' || this.enviornmentForm.value['environmental_description'] == null) && enviornmental) {
      this.globalService.presentToast("Environmental - Please enter Immediate action taken to minimize Environmental impact")
    } else if ((this.reputationDesForm.value['name_of_witness'] === '' || this.reputationDesForm.value['name_of_witness'] == null || this.reputationDesForm.value['name_of_witness'] == undefined) && reputation) {
      this.globalService.presentToast("Reputation - Please enter name of any witness");
    } else if ((this.reputationDesForm.value['name_of_witness'] == '' ||
      this.reputationDesForm.value['name_of_witness'] == null) && reputation) {
      this.globalService.presentToast("Reputation - Please enter witness name.");
    } else if (this.reputationDesForm.value['name_of_witness'] == 'Other' &&
      (this.reputationDesForm.value['other_witness_details'].other_witness_name == '' ||
        this.reputationDesForm.value['other_witness_details'].other_witness_name == null ||
        this.reputationDesForm.value['other_witness_details'].other_witness_name == undefined
      ) && reputation) {
      this.globalService.presentToast("Reputation - Please enter other witness name.");
    } else if (this.reputationDesForm.value['name_of_witness'] == 'Other' &&
      (this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == '' ||
        this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == null ||
        this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no == undefined)
      && reputation) {
      this.globalService.presentToast("Reputation - Please enter other witness mobile no.");
    } else if (this.reputationDesForm.value['name_of_witness'] == 'Other' &&
      (this.reputationDesForm.value['other_witness_details'].other_witness_email == '' ||
        this.reputationDesForm.value['other_witness_details'].other_witness_email == null ||
        this.reputationDesForm.value['other_witness_details'].other_witness_email == undefined
      )
      && reputation) {
      this.globalService.presentToast("Reputation - Please enter other witness email.");
    } else if ((this.reputationDesForm.value['possible_outcome_incident'] === '' ||
      this.reputationDesForm.value['possible_outcome_incident'] == null)
      && reputation) {
      this.globalService.presentToast("Reputation - Please enter possible outcome of this incident")
    } else if ((this.assetDescriptionForm.value['asset_description'] === '' || this.assetDescriptionForm.value['asset_description'] == null) && assets) {
      this.globalService.presentToast("Asset - Please enter asset description")
    } else if ((this.assetDescriptionForm.value['extent_of_damage'] === '' || this.assetDescriptionForm.value['extent_of_damage'] == null) && assets) {
      this.globalService.presentToast("Asset - Please enter Extent of Damage")
    } else if ((this.reportForm.value['report'] === '' || this.reportForm.value['report'] == null) && report) {
      this.globalService.presentToast("Report - Please enter what could have been done differently")
    } else {
      return true;
    }
  }

  onSubmit(val) {
    // console.log('incidentForm', this.incidentForm.value);
    // console.log('incidentForm', this.photoGraphyForm.value);
    // console.log('incidentDesForm', this.incidentDesForm.value);
    console.log('classificationForm', this.classificationForm.value);
    // console.log('injuryForm', this.injuryForm.value);
    // console.log('enviornmentForm', this.enviornmentForm.value);
    // console.log('reputationDesForm', this.reputationDesForm.value);
    // console.log('securityForm', this.securityForm.value);
    // console.log('assetDescriptionForm', this.assetDescriptionForm.value)
    // console.log('reportForm', this.reportForm.value);
    // console.log('injuryForm', this.injuryForm.value);

    let validation: boolean = false;
    if (val == 'submit') {
      validation = this.validation();
    }
    if ((val == 'submit' && validation) || (val == 'incomplete_submit' && validation == false)) {
      let fd = new FormData();
      //----------------------------------------------- Incident ---------------------------------------------------------------// 

      fd.append("incident_value", this.incidentForm.value['incident_value'] ? this.incidentForm.value['incident_value'] : '');                             // required
      fd.append("incident_near_miss", this.incidentForm.value['incident_near_miss'] ? this.incidentForm.value['incident_near_miss'] : '');
      fd.append("incident_near_miss_other", this.incidentForm.value['incident_near_miss_other'] ? this.incidentForm.value['incident_near_miss_other'] : '');

      //----------------------------------------------- Incident ---------------------------------------------------------------// 

      //---------------------------------------------- photography -------------------------------------------------------------//

      fd.append("photography_image", this.photoGraphyObject ? JSON.stringify(this.photoGraphyObject) : '');

      //---------------------------------------------- photography --------------------------------------------------------------//

      //--------------------------------------------- Incident Description ------------------------------------------------------//
      fd.append("incident_description", this.incidentDesForm.value['incident_description'] ? this.incidentDesForm.value['incident_description'] : '');              //required
      fd.append("incident_description_action", this.incidentDesForm.value['incident_description_action'] ? this.incidentDesForm.value['incident_description_action'] : ''); //incident photo pending from postman and here also  // required
      fd.append("incident_description_alcohol_test", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
      fd.append("alcohol_test_completed", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
      fd.append("drug_test_completed", this.incidentDesForm.value['drug_test_completed'] ? this.incidentDesForm.value['drug_test_completed'] : '');
      fd.append("seen_differently", this.incidentDesForm.value['seen_differently'] ? this.incidentDesForm.value['seen_differently'] : '');
      fd.append("was_there_any_witness_of_the_incident", this.incidentDesForm.value['was_there_any_witness_of_the_incident']);
      fd.append("return_to_alternate_duties", this.incidentDesForm.value['return_to_alternate_duties']);

      fd.append("alcohol_test_image", JSON.stringify(this.alcohalImagesObject))                          // alcohal test image
      fd.append("drug_test_image", JSON.stringify(this.drugTestImagesObject));                           // drug_test_image
      fd.append("return_to_alternate_duties_image", JSON.stringify(this.alterDutyImagesObject));         // return_to_alternate_duties_image       
      //----------------------------------------------- Incident Description -----------------------------------------------------//

      //----------------------------------------------- Classification -----------------------------------------------------------//

      console.log('time_of_incident', this.classificationForm.value['time_of_incident']);

      console.log('time_reported', this.classificationForm.value['time_reported']);

      fd.append("classification_value", this.classificationForm.value['classification_value'].join(','));
      fd.append("date_of_incident", this.classificationForm.value['date_of_incident']);
      fd.append("time_of_incident", this.classificationForm.value['time_of_incident'] != '' ? moment(this.classificationForm.value['time_of_incident']).format('HH:mm:ss') : '');
      fd.append("date_reported", this.classificationForm.value['date_reported']);
      fd.append("time_reported", this.classificationForm.value['time_reported'] != '' ? moment(this.classificationForm.value['time_reported']).format('HH:mm:ss') : '');
      fd.append("classification_location_option", this.classificationForm.value['classification_location_option']);
      if (this.classificationForm.value['classification_location_option'] == 'Add Location') {
        fd.append("classification_location_value", this.classificationForm.value['classification_location_value'])
      }
      if (this.classificationForm.value['classification_location_option'] == 'Choose Location') {
        fd.append("classification_location_value", this.classificationForm.value['classification_location_value1'])
      }
      fd.append("classification_shift_type", this.classificationForm.value['classification_shift_type']);
      fd.append("classification_supervisor", this.classificationForm.value['classification_supervisor']);
      fd.append("classification_manager", this.classificationForm.value['classification_manager']);        // required

      //--------------------------------------------------- Classification ---------------------------------------------------------//

      //----------------------------------------------------- Injury ---------------------------------------------------------------//

      fd.append("injury_persons", this.injuryForm.value['injury_persons']);                                 // form value
      fd.append("person_details", JSON.stringify(this.injuryForm.value['person_details']));

      //------------------------------------------------------ Injury ---------------------------------------------------------------//

      //------------------------------------------------------ Enviornment ----------------------------------------------------------//
      fd.append("environmental_description", this.enviornmentForm.value['environmental_description']);      // required
      fd.append("was_a_chemical_split", this.enviornmentForm.value['was_a_chemical_split']);                // chemical split value inner side query
      fd.append("chemical_details", JSON.stringify(this.enviornmentForm.value['chemical_details']))         // data with image
      fd.append("emergency_spill_kit_used", this.enviornmentForm.value['emergency_spill_kit_used']);
      fd.append("out_of_split_kit", this.enviornmentForm.value['out_of_split_kit']);
      //------------------------------------------------------ Enviornment -----------------------------------------------------------//

      //------------------------------------------------------ Reputation -------------------------------------------------------------// 
      fd.append("reputation_option", this.reputationDesForm.value['reputation_option']);
      fd.append("individual_damage_value", this.reputationDesForm.value['individual_damage_value']);
      fd.append("company_damage_value", this.reputationDesForm.value['company_damage_value']);
      fd.append("reputation_negative_effect", this.reputationDesForm.value['reputation_negative_effect']);
      fd.append("effected_department", this.reputationDesForm.value['effected_department']);
      fd.append("external_party", this.reputationDesForm.value['external_party']);
      fd.append("name_of_witness", this.reputationDesForm.value['name_of_witness']);
      fd.append("other_witness_details", JSON.stringify(this.reputationDesForm.value['other_witness_details']));
      fd.append("possible_outcome_incident", this.reputationDesForm.value['possible_outcome_incident']);    // required

      //--------------------------------------------------------- Reputation -----------------------------------------------------------//

      //--------------------------------------------------------- Security -------------------------------------------------------------//
      fd.append("security_option", this.securityForm.value['security_option']);
      if (this.securityForm.value['security_option'] == 'IT') {
        fd.append("it_option_value", this.securityForm.value['it_option_value'].join(','))                  // chexkbox and inner value
      }
      fd.append("what_has_been_stolen_item", this.securityForm.value['what_has_been_stolen_item']);
      fd.append("approximate_value_of_stolen", this.securityForm.value['approximate_value_of_stolen']);
      fd.append("what_is_the_specific_securities_incident", this.securityForm.value['what_is_the_specific_securities_incident']);
      //---------------------------------------------------------- Security--------------------------------------------------------------//

      //---------------------------------------------------------- Asset ----------------------------------------------------------------//

      fd.append("asset_description", this.assetDescriptionForm.value['asset_description']);                 // required
      fd.append("asset_has_number", this.assetDescriptionForm.value['asset_has_number']);
      if (this.assetDescriptionForm.value['asset_has_number'] == 'Yes') {
        fd.append("asset_number", this.assetDescriptionForm.value['asset_number']);
      }
      fd.append("extent_of_damage", this.assetDescriptionForm.value['extent_of_damage']);                   // required
      fd.append("extent_damage_image", JSON.stringify(this.damageImagesObject));                            // extent_damage_image

      //---------------------------------------------------------- Asset -----------------------------------------------------------------//

      //--------------------------------------------------------  Report -----------------------------------------------------------------//

      fd.append("report", this.reportForm.value['report']);

      //--------------------------------------------------------- Report ------------------------------------------------------------------//

      fd.append('user_id', localStorage.getItem('id'));
      let url = (val == 'submit' ? "add_form/submit" : 'Add_form/submit_incomplete');

      this.globalService.postData1(url, fd).subscribe((res: any) => {
        // this.globalService.presentLoading();
        if (res.status) {
          this.globalService.presentToast(res.message)
          this.nav.navigateRoot("form-list")
        } else {
          this.globalService.presentToast(res.message)
        }
        // this.globalService.dismissLoading();
      }, err => {
        console.log("err", err);
        // this.globalService.dismissLoading();
      })
    }
  }

  onClassificationChange(event) {
    const formArray: FormArray = this.classificationForm.get('classification_value') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
      this.classificationList.find(ele => {
        if (ele.val == event.target.value) {
          ele.isChecked = true
        }
      })
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
      this.classificationList.find(ele => {
        if (ele.val == event.target.value) {
          ele.isChecked = false
        }
      })
    }
    this.selectedTabList = formArray.value;
  }

  onSecurityOption(evt) {
    if (evt.detail.value == 'IT') {
      this.securityForm.controls['what_has_been_stolen_item'].reset();
      this.securityForm.controls['approximate_value_of_stolen'].reset();
      this.securityForm.controls['what_is_the_specific_securities_incident'].reset();

    } else if (evt.detail.value == 'Theft') {
      this.itSecurityList.find(ele => {
        ele.isChecked = false
      })
      this.securityForm.controls['what_is_the_specific_securities_incident'].reset();
    } else if (evt.detail.value == 'Other') {
      this.itSecurityList.find(ele => {
        ele.isChecked = false
      })
      this.securityForm.controls['what_has_been_stolen_item'].reset();
      this.securityForm.controls['approximate_value_of_stolen'].reset();
    }
  }

  onSecurityItOption(event) {
    const formArray: FormArray = this.securityForm.get('it_option_value') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
      this.itSecurityList.find(ele => {
        if (ele.val == event.target.value) {
          ele.isChecked = true
        }
      })
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
      this.itSecurityList.find(ele => {
        if (ele.val == event.target.value) {
          ele.isChecked = false
        }
      })
    }
  }

  onReputationDamagesCheckBox(event) {
    const formArray: FormArray = this.reputationDesForm.get('reputation_option') as FormArray;
    if (event.detail.checked) {
      formArray.push(new FormControl(event.detail.value));
      this.reputationCheckBox.find(ele => {
        if (ele.val == event.detail.value) {
          ele.isChecked = event.detail.checked;
        }
      })
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.detail.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
      this.reputationCheckBox.find(ele => {
        if (ele.val == event.detail.value) {
          ele.isChecked = false
        }
      })
    }
    // console.log('this.reputationCheckBox', this.reputationCheckBox);
    // console.log('this.reputationDesForm', this.reputationDesForm);
  }

  onDepartmentEffectCheckBox(event) {
    const formArray: FormArray = this.reputationDesForm.get('effected_department') as FormArray;
    if (event.detail.checked) {
      formArray.push(new FormControl(event.detail.value));
      this.departmentEffect.find(ele => {
        console.log('departmentEffect ele', ele);
        if (ele.val == event.detail.value) {
          console.log('here1');
          ele.isChecked = event.detail.checked;
        }
      })
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.detail.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      })
      this.departmentEffect.find(ele => {
        if (ele.val == event.detail.value) {
          ele.isChecked = false;
        }
      })
    }
    console.log('this.departmentEffect', this.departmentEffect);
    console.log('this.reputationDesForm', this.reputationDesForm);
  }

  onInput(evt, val) {
    this.tabList.find(ele => {
      if (val == 'Incident' && this.incidentForm.valid) {
        if (ele.val != 'Classification') {
          ele.tabDisable = false;
        }
      } else if (val == 'Incident Description' && this.incidentDesForm.valid) {
        ele.tabDisable = false;
      } else {
        if ((val == 'Incident Description' && this.incidentDesForm.invalid) && ele.val == 'Classification') {
          ele.tabDisable = true;
          this.selectedTabList = [];
          this.classificationForm.reset();
          this.injuryForm.reset();
          this.enviornmentForm.reset();
          this.reputationDesForm.reset();
          this.securityForm.reset();
          this.assetDescriptionForm.reset();
          this.reportForm.reset();
        }
      }
    })
    if (evt && evt.detail && evt.detail.value && evt.detail.value != 'Near Miss') {
      this.incidentForm.controls['incident_near_miss'].setValue('');
      this.incidentForm.controls['incident_near_miss_other'].setValue('');
    }
  }

  get injuryPersonDetails(): FormArray {
    return this.injuryForm.get("person_details") as FormArray
  }

  injuryPersonKeys(): FormGroup {
    return this.fb.group({
      injured_person_option: [''],   //  seletced person name
      injured_person_option_value: [''],  // other person name
      gender: [''],
      date_of_birth: [''],
      normal_duties: [''],
      normal_duties_explanation: [''],
      alternate_duties: [''],
      duties_explanation: [''],
      // initital_injury: new FormArray([]),
      initital_injury: [''],
      part_of_body_injured_occured: [],
      was_immediate_treatment: [''],
      immediate_treatment_given_explanation: [''],
      immediate_treatment_person_name: [''],
      immediate_treatment_person_number: [''],
    })
  }

  onAddMultiplePersonDetails(event) {
    // console.log('onAddMultiplePersonDetails', event);
    // console.log('injury_persons',this.injuryForm.value['injury_persons']);
    let no = 0;
    if (this.injuryForm.value["person_details"].length != 0) {
      no = (this.injuryForm.value['injury_persons'] - this.injuryForm.value["person_details"].length);
    }
    if (no == 0) {
      this.injuryPersonDetails.push(this.injuryPersonKeys());
    } else if (no > 0) {
      for (let i = 1; i <= no; i++) {
        this.injuryPersonDetails.push(this.injuryPersonKeys());
      }
    } else if (no < 0) {
      for (let i = 1; i <= Math.abs(no); i++) {
        this.injuryPersonDetails.controls.pop();
        this.injuryForm.value["person_details"].pop();
      }
    }
  }

  onRepoNegativeEffect(evt) {
    if (evt.detail.value == "Internal") {
      this.reputationDesForm.controls['external_party'].setValue('');
    } else if (evt.detail.value == "External") {
      this.reputationDesForm.controls['effected_department'].setValue('');
    }
  }
}