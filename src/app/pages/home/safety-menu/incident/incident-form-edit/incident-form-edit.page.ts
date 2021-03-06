import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';

import { environment } from 'src/environments/environment';
import { ManagersPage } from 'src/app/shared-module/managers/managers.page';
import { ImageModalPage } from 'src/app/modals/image-modal/image-modal.page';

import { GlobalService } from 'src/app/services/global-service/global.service';
import { SharedService } from 'src/app/services/shared-service/shared.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';

import moment from 'moment';
import IncidentJson from '../incident-form.json';


@Component({
  selector: 'app-incident-form-edit',
  templateUrl: './incident-form-edit.page.html',
  styleUrls: ['./incident-form-edit.page.scss'],
})
export class IncidentFormEditPage implements OnInit {

  imagePath = environment.imageUrl;
  witnessList: any = [];
  shiftTypeList: any = [];
  superVisorList: any = [];
  locationList: any = [];
  bodyPartList: any = [];
  employeeList: any = [];
  managerList: any = [];
  reputationWitnessList: any = [];
  incidentDetails: any = [];
  selectedTabList: any = [];
  // platformCheck: any = '';
  individualChecked: any;
  companyChecked: any;
  disabledTab: boolean;
  form_percent: number = 0;
  form_percent_val: number = 0;

  //-------------------------------------------------- Dropdowns variables---------------------------------------------------------------//

  incident_near_miss: any = '';
  was_there_any_witness_of_the_incident: any = '';
  classification_supervisor: any = '';
  classification_manager: any = '';
  injured_person_option: any = '';
  immediate_treatment_person_name: any = '';
  name_of_witness: any = '';

  //-------------------------------------------------- Dropdowns variables---------------------------------------------------------------//

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
      "val": "Incident",
      "tabDisable": false
    },
    {
      "val": "Photography",
      "tabDisable": true
    },
    {
      "val": "Incident Description",
      "tabDisable": true
    },
    {
      "val": "Classification",
      "tabDisable": true
    }
  ];
  selectedTabItem: string = 'Incident';

  //---------------------------------------------------------- Tab -----------------------------------------------------------//

  //-------------------------------------------------------- JSON DATA -------------------------------------------------------//

  classificationList = [
    {
      "val": "Asset",
      "isChecked": false
    },
    {
      "val": "Environmental",
      "isChecked": false
    },
    {
      "val": "Injury",
      "isChecked": false
    },
    {
      "val": "Report",
      "isChecked": false
    },
    {
      "val": "Reputation",
      "isChecked": false
    },
    {
      "val": "Security",
      "isChecked": false
    }
  ];

  itSecurityList = [
    {
      "val": "Intrusion",
      "isChecked": false
    },
    {
      "val": "Privacy breach",
      "isChecked": false
    },
    {
      "val": "Ransom ware",
      "isChecked": false
    },
    {
      "val": "Security",
      "isChecked": false
    }
  ];

  reputationCheckBox = [
    {
      "val": "Company",
      "isChecked": false
    },
    {
      "val": "Individual",
      "isChecked": false
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
    public globalService: GlobalService,
    private sharedService: SharedService,
    private modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    public nav: NavController,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    // private loadingService: LoadingService
  ) { }

  ngOnInit() {

    // if (!this.platform.is('cordova')) {
    //   this.platformCheck = 'browser'
    // } else {
    //   this.platformCheck = 'cordova'
    // }

    this.loadShift();
    this.loadLocation();
    this.loadBodyPart();
    this.loadEmployee();
    this.loadWitness();
    this.loadSuperwiser();
    // this.findValueInWitness();

    this.incidentForm = this.fb.group({
      incident_value: [''],                                    // required field
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
      incdesc_other_witness_details:
        this.fb.group({
          incdesc_other_witness_name: [''],
          incdesc_other_witness_mobile_no: [''],
          incdesc_other_witness_email: ['']
        }),

      incident_description_photo: [''],                         // incident description images
      incident_description_alcohol_test: [''],
      // alcohol_test_completed: [''],
      alcohol_test_image: [''],                                 // alcohal images

      drug_test_completed: [''],
      drug_test_image: [''],                                    // drug test image

      return_to_alternate_duties: [''],
      return_to_alternate_duties_image: ['']                    // return to alternate duties image
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
      // classification_manager: ['', Validators.required]        // required field
      classification_supervisor_other_details:
        this.fb.group({
          classification_supervisor_other_name: [''],
          classification_supervisor_other_mobile_no: [''],
          classification_supervisor_other_email: ['']
        }),

      classification_manager: ['', Validators.required],          // required field
      classification_manager_other_details:
        this.fb.group({
          classification_manager_other_name: [''],
          classification_manager_other_mobile_no: [''],
          classification_manager_other_email: ['']
        }),
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
      possible_outcome_incident: [''],                         // required field
    });

    this.securityForm = this.fb.group({
      security_option: [''],
      it_option_value: new FormArray([]),
      what_has_been_stolen_item: [''],
      approximate_value_of_stolen: [''],
      what_is_the_specific_securities_incident: [''],
    });

    this.assetDescriptionForm = this.fb.group({
      asset_description: [''],                                  // required field
      asset_has_number: [''],
      asset_number: [''],
      extent_of_damage: [''],                                   // required field       
      extent_damage_image: ['']                                 // extent damage image
    });

    this.reportForm = this.fb.group({
      report: ['']
    });

    this.loadIncidentDetails();
  }

  loadEmployee() {
    this.globalService.getData("user/getallemployee").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.employeeList = res.data;
      } else {
        this.employeeList = [];
      }
      this.employeeList.unshift({ full_name: "Other", employee_id: '0' });
    }, err => {
      console.log(err);
    })
  }

  loadWitness() {
    this.globalService.getData("Witness/getWitnessList").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.witnessList = res.data;
      } else {
        this.witnessList = [];
      }
      this.witnessList.unshift({ full_name: "Other", employee_id: '0' });
    }, err => {
      console.log(err);
    })
  }

  loadMangerList() {
    this.globalService.getData("Manager/getManagerList").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.managerList = res.data;
      } else {
        this.managerList = [];
      }
      this.managerList.unshift({ full_name: "Other", employee_id: '0' });
    }, err => {
      console.log(err);
    });
  }

  // findValueInWitness() {
  //   let val: boolean = false;
  //   this.reputationWitnessList.find(ele => {
  //     if (ele.name_of_witness != "Other") {
  //       val = true;
  //     }
  //   })
  //   return val;
  // }

  loadSuperwiser() {
    this.globalService.getData("Supervisor/getSupervisorList").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.superVisorList = res.data;
      } else {
        this.superVisorList = [];
      }
      this.superVisorList.unshift({ full_name: "Other", employee_id: '0' });
    }, err => {
      console.log("Eror", err)
    })
  }

  loadShift() {
    this.globalService.getData("Shift/get_shift_typelist").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.shiftTypeList = res.data;
      } else {
        this.shiftTypeList = [];
      }
    }, err => {
      console.log("Eror", err)
    })
  }

  loadLocation() {
    this.globalService.getData("location/getLocation").subscribe((res: any) => {
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
    this.globalService.getData("Body_part/getbodypart").subscribe((res: any) => {
      if (res && res.status && res.data && res.data.length > 0) {
        this.bodyPartList = res.data;
      } else {
        this.bodyPartList = [];
      }
    }, err => {
      console.log("Eror", err)
    })
  }

  loadIncidentDetails() {
    // this.loadingService.presentLoading();
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.globalService.getData('add_form/getSingleData?table_name=add_form&id=' + params['incident_id']).subscribe(result => {
          // this.globalService.getData('add_form/getIncidentFormByID/' + params['incident_id']).subscribe(result => {

          if (result && result['data'] && result['data'][0]) {
            this.incidentDetails = result['data'][0];

            //------------------------------------------------------- incidentForm ----------------------------------------------------------//

            if (this.incidentDetails.incident_near_miss != '' && this.incidentDetails.incident_near_miss != null) {
              let incident_near_miss_object: any;
              this.witnessList.forEach(element => {
                if (element.full_name == this.incidentDetails.incident_near_miss) {
                  incident_near_miss_object = element;
                }
              });

              if (incident_near_miss_object != undefined) {
                this.incident_near_miss = incident_near_miss_object;
              } else {
                this.globalService.getData("Witness/getWitnessList/?term=" + this.incidentDetails.incident_near_miss).subscribe((res: any) => {
                  if (res && res.status && res.data && res.data.length > 0) {
                    this.incident_near_miss = res.data[0];
                  }
                }, err => {
                  console.log("Eror", err)
                })
              }
            }
            this.incidentForm.patchValue(this.incidentDetails);

            this.onInput('', 'Incident');
            //------------------------------------------------------- incidentForm ----------------------------------------------------------//

            //------------------------------------------------------- PhotographyForm -------------------------------------------------------//

            if (this.incidentDetails.photography_image.length > 0) {
              for (let i = 0; i < this.incidentDetails.photography_image.length; i++) {
                this.photoGraphy.push(this.incidentDetails.photography_image[i]);
              }
              this.photoGraphyObject = this.incidentDetails.photography_image;
            }

            //------------------------------------------------------- PhotographyForm ------------------------------------------------------//

            //------------------------------------------------------- incidentDesForm ------------------------------------------------------//

            if (this.incidentDetails.was_there_any_witness_of_the_incident != '' || this.incidentDetails.was_there_any_witness_of_the_incident != null) {
              let was_there_any_witness_of_the_incident_object: any;
              this.witnessList.forEach(element => {
                if (element.full_name == this.incidentDetails.was_there_any_witness_of_the_incident) {
                  was_there_any_witness_of_the_incident_object = element;
                }
              });

              if (was_there_any_witness_of_the_incident_object != undefined) {
                this.was_there_any_witness_of_the_incident = was_there_any_witness_of_the_incident_object;
              } else {
                if (this.incidentDetails.was_there_any_witness_of_the_incident != '' && this.incidentDetails.was_there_any_witness_of_the_incident != null) {
                  this.globalService.getData("Witness/getWitnessList/?term=" + this.incidentDetails.was_there_any_witness_of_the_incident).subscribe((res: any) => {
                    if (res && res.status && res.data && res.data.length > 0) {
                      this.was_there_any_witness_of_the_incident = res.data[0];
                    }
                  }, err => {
                    console.log("Eror", err)
                  })
                }
              }
            }

            this.incidentDesForm.patchValue(this.incidentDetails);

            if (this.incidentDetails.alcohol_test_image.length > 0) {
              for (let i = 0; i < this.incidentDetails.alcohol_test_image.length; i++) {
                this.alcohalImages.push(this.incidentDetails.alcohol_test_image[i]);
              }
              this.alcohalImagesObject = this.incidentDetails.alcohol_test_image;
            }

            if (this.incidentDetails.drug_test_image.length > 0) {
              for (let i = 0; i < this.incidentDetails.drug_test_image.length; i++) {
                this.drugTestImages.push(this.incidentDetails.drug_test_image[i]);
              }
              this.drugTestImagesObject = this.incidentDetails.drug_test_image;
            }

            if (this.incidentDetails.return_to_alternate_duties_image.length > 0) {
              for (let i = 0; i < this.incidentDetails.return_to_alternate_duties_image.length; i++) {
                this.alterDutyImages.push(this.incidentDetails.return_to_alternate_duties_image[i]);
              }
              this.alterDutyImagesObject = this.incidentDetails.return_to_alternate_duties_image;
            }
            this.onInput('', 'Incident Description');
            //------------------------------------------------------- incidentDesForm -------------------------------------------------------//

            //------------------------------------------------------- classificationForm ----------------------------------------------------//

            let classificationValue: FormArray = this.classificationForm.get('classification_value') as FormArray;

            if (this.incidentDetails['classification_value'] != '') {
              this.selectedTabList = this.incidentDetails['classification_value'].split(',');

              if (this.selectedTabList && this.selectedTabList.length > 0) {
                this.classificationList.forEach((element) => {
                  this.selectedTabList.find(ele => {
                    if (element.val == ele) {
                      classificationValue.push(new FormControl(ele));
                      element.isChecked = true
                    }
                  });
                });
              }
            }

            this.classificationForm.controls['date_of_incident'].setValue(this.incidentDetails.date_of_incident);
            this.classificationForm.controls['time_of_incident'].setValue(this.incidentDetails.time_of_incident);
            this.classificationForm.controls['date_reported'].setValue(this.incidentDetails.date_reported);
            this.classificationForm.controls['time_reported'].setValue(this.incidentDetails.time_reported);
            this.classificationForm.controls['classification_location_option'].setValue(this.incidentDetails.classification_location_option);
            if (this.incidentDetails.classification_location_option == 'Add Location')
              this.classificationForm.controls['classification_location_value'].setValue(this.incidentDetails.classification_location_value);
            if (this.incidentDetails.classification_location_option == 'Choose Location')
              this.classificationForm.controls['classification_location_value1'].setValue(this.incidentDetails.classification_location_value);
            this.classificationForm.controls['classification_shift_type'].setValue(this.incidentDetails.classification_shift_type);

            if (this.incidentDetails.classification_supervisor != '' || this.incidentDetails.classification_supervisor != null) {

              let classification_supervisor_object: any;

              this.witnessList.forEach(element => {
                if (element.full_name == this.incidentDetails.classification_supervisor) {
                  classification_supervisor_object = element;
                }
              });

              if (classification_supervisor_object != undefined) {
                this.classification_supervisor = classification_supervisor_object;
              } else {
                // let firstStringEle = this.incidentDetails.classification_supervisor.charAt(0);
                // let newString = firstStringEle == '*' ? this.incidentDetails.classification_supervisor.substring(1).trim() : this.incidentDetails.classification_supervisor;
                this.globalService.getData("Supervisor/getSupervisorList?term=" + this.incidentDetails.classification_supervisor).subscribe((res: any) => {
                  if (res && res.status && res.data && res.data.length > 0) {
                    this.classification_supervisor = res.data[0];
                  }
                }, err => {
                  console.log("Eror", err)
                })

              }
              this.classificationForm.controls['classification_supervisor'].setValue(this.incidentDetails.classification_supervisor);
              this.classificationForm.controls['classification_supervisor_other_details'].patchValue(this.incidentDetails.classification_supervisor_other_details);
            }

            if (this.incidentDetails.classification_manager != '' || this.incidentDetails.classification_manager != null) {
              let classification_manager_object: any;
              this.witnessList.forEach(element => {
                if (element.full_name == this.incidentDetails.classification_manager) {
                  classification_manager_object = element;
                }
              });

              if (classification_manager_object != undefined) {
                this.classification_manager = classification_manager_object;
              } else {
                this.globalService.getData("Manager/getManagerList/?term=" + this.incidentDetails.classification_manager).subscribe((res: any) => {
                  if (res && res.status && res.data && res.data.length > 0) {
                    this.classification_manager = res.data[0];
                  }
                }, err => {
                  console.log("Eror", err)
                })
              }
              this.classificationForm.controls['classification_manager'].setValue(this.incidentDetails.classification_manager);
              this.classificationForm.controls['classification_manager_other_details'].patchValue(this.incidentDetails.classification_manager_other_details);
            }

            //------------------------------------------------------- classificationForm ----------------------------------------------------//
            //------------------------------------------------------- assetDescriptionForm --------------------------------------------------//
            this.assetDescriptionForm.patchValue(this.incidentDetails);

            if (this.incidentDetails.extent_damage_image.length > 0) {
              for (let i = 0; i < this.incidentDetails.extent_damage_image.length; i++) {
                this.damageImages.push(this.incidentDetails.extent_damage_image[i]);
              }
              this.damageImagesObject = this.incidentDetails.extent_damage_image;
            }

            // this.damageImagesObject = this.damageImages = this.incidentDetails.extent_damage_image;
            //------------------------------------------------------- assetDescriptionForm -------------------------------------------------//
            //------------------------------------------------------- enviornmentForm ------------------------------------------------------//
            this.enviornmentForm.patchValue(this.incidentDetails);

            if (this.incidentDetails.chemical_details.chemical_photo.length > 0) {
              this.enviornmentForm.controls.chemical_details.value.insertPhotoCheckBox.setValue(true);
            }

            if (this.incidentDetails.chemical_details.chemical_photo.length > 0) {
              for (let i = 0; i < this.incidentDetails.chemical_details.chemical_photo.length; i++) {
                this.chemicalImages.push(this.incidentDetails.chemical_details.chemical_photo[i]);
              }
              this.chemicalImagesObject = this.incidentDetails.chemical_details.chemical_photo;
            }

            // this.chemicalImages = this.chemicalImagesObject = this.incidentDetails.chemical_details.chemical_photo;

            //------------------------------------------------------- enviornmentForm -----------------------------------------------------//
            //------------------------------------------------------- injuryForm ----------------------------------------------------------//

            this.injuryForm.controls.injury_persons.setValue(this.incidentDetails.injury_persons);
            if (this.incidentDetails.person_details.length > 0) {
              // for (let i = 0; i <= this.incidentDetails.person_details.length; i++) {
              //   // this.injuryForm.controls.person_details.patchValue(this.setPersonDetails(this.incidentDetails.person_details));
              //   // this.injuryPersonDetails.controls[i].patchValue(this.incidentDetails.person_details[i]);
              // }
              this.injuryForm.setControl('person_details', this.setPersonDetails(this.incidentDetails.person_details));
            }
            //------------------------------------------------------- injuryForm ----------------------------------------------------------//

            //------------------------------------------------------- reportForm ----------------------------------------------------------//
            this.reportForm.patchValue(this.incidentDetails);
            //------------------------------------------------------- reportForm ----------------------------------------------------------//
            //------------------------------------------------------- reputationDesForm ---------------------------------------------------//

            let reputation_option = this.incidentDetails['reputation_option'].split(',');
            let reputationOption: FormArray = this.reputationDesForm.get('reputation_option') as FormArray;

            this.reputationCheckBox.forEach((element) => {
              reputation_option.find(ele => {
                if (element.val == ele) {
                  reputationOption.push(new FormControl(ele));
                  element.isChecked = true
                }
              });
            });

            this.reputationDesForm.controls['individual_damage_value'].setValue(this.incidentDetails.individual_damage_value);
            this.reputationDesForm.controls['company_damage_value'].setValue(this.incidentDetails.company_damage_value);
            this.reputationDesForm.controls['reputation_negative_effect'].setValue(this.incidentDetails.reputation_negative_effect);

            let effected_department = this.incidentDetails['effected_department'].split(',');
            let effectedDepartment: FormArray = this.reputationDesForm.get('effected_department') as FormArray;

            this.departmentEffect.forEach((element) => {
              effected_department.find(ele => {
                if (element.val == ele) {
                  effectedDepartment.push(new FormControl(ele));
                  element.isChecked = true
                }
              });
            });

            this.reputationDesForm.controls['external_party'].setValue(this.incidentDetails.external_party);

            if (this.incidentDetails.name_of_witness != '' || this.incidentDetails.name_of_witness != null) {
              let name_of_witness_object: any;
              this.witnessList.forEach(element => {
                if (element.full_name == this.incidentDetails.name_of_witness) {
                  name_of_witness_object = element;
                }
              });

              if (name_of_witness_object != undefined) {
                this.name_of_witness = name_of_witness_object;
              } else {
                if (this.incidentDetails.name_of_witness != '' && this.incidentDetails.name_of_witness != null) {
                  this.globalService.getData("Witness/getWitnessList/?term=" + this.incidentDetails.name_of_witness).subscribe((res: any) => {
                    if (res && res.status && res.data && res.data.length > 0) {
                      this.name_of_witness = res.data[0];
                    }
                  }, err => {
                    console.log("Eror", err)
                  })
                }
              }
            }

            this.reputationDesForm.controls['name_of_witness'].setValue(this.incidentDetails.name_of_witness);
            this.reputationDesForm.controls['other_witness_details'].setValue(this.incidentDetails.other_witness_details);
            this.reputationDesForm.controls['possible_outcome_incident'].setValue(this.incidentDetails.possible_outcome_incident);
            //---------------------------------------------------------- reputationDesForm ----------------------------------------------------------//
            //---------------------------------------------------------- securityForm ---------------------------------------------------------------//

            this.securityForm.controls['security_option'].setValue(this.incidentDetails.security_option);
            // this.securityForm.controls['it_option_value'].setValue(this.incidentDetails.it_option_value);
            this.securityForm.controls['what_has_been_stolen_item'].setValue(this.incidentDetails.what_has_been_stolen_item);
            this.securityForm.controls['approximate_value_of_stolen'].setValue(this.incidentDetails.approximate_value_of_stolen);
            this.securityForm.controls['what_is_the_specific_securities_incident'].setValue(this.incidentDetails.what_is_the_specific_securities_incident);

            let it_option_value = this.incidentDetails.it_option_value.split(',');
            let itOptionValue: FormArray = this.securityForm.get('it_option_value') as FormArray;
            this.itSecurityList.forEach((ele) => {
              it_option_value.find(element => {
                if (ele.val == element) {
                  itOptionValue.push(new FormControl(element));
                  ele.isChecked = true;
                }
              })
            });
            //------------------------------------------------------------- securityForm -------------------------------------------------------------//
          }
          this.onProgressBar('', '');
          // this.loadingService.dismissLoading();
        }), error => {
          // this.loadingService.dismissLoading();
          console.log(error);
        }
        // this.loadingService.dismissLoading();
      }
    ), error => {
      // this.loadingService.dismissLoading();
      console.log('param error', error)
    }
  }

  setPersonDetails(person_details): FormArray {
    const formArray = new FormArray([]);
    person_details.forEach(element => {
      formArray.push(
        this.fb.group({
          injured_person_option: [element.injured_person_option],   //  seletced person name
          injured_person_option_id: [element.injured_person_option_id],
          injured_person_option_other_details: this.fb.group({
            injured_person_option_other_name: [element.injured_person_option_other_details.injured_person_option_other_name],
            injured_person_option_other_mobile_no: [element.injured_person_option_other_details.injured_person_option_other_mobile_no],
            injured_person_option_other_email: [element.injured_person_option_other_details.injured_person_option_other_email]
          }),
          // injured_person_option_value: [element.injured_person_option_value],   // other person name
          gender: [element.gender],
          date_of_birth: [element.date_of_birth],
          normal_duties: [element.normal_duties],
          normal_duties_explanation: [element.normal_duties_explanation],
          alternate_duties: [element.alternate_duties],
          duties_explanation: [element.duties_explanation],
          initital_injury: [element.initital_injury],
          part_of_body_injured_occured: [element.part_of_body_injured_occured],
          was_immediate_treatment: [element.was_immediate_treatment],
          was_immediate_treatment_comment: [element.was_immediate_treatment_comment],
          immediate_treatment_given_explanation: [element.immediate_treatment_given_explanation],
          immediate_treatment_person_name_id: [element.immediate_treatment_person_name_id],
          immediate_treatment_person_name: [element.immediate_treatment_person_name],
          // immediate_treatment_person_number: [element.immediate_treatment_person_number],
          immediate_treatment_other_person_detail: this.fb.group({
            immediate_treatment_other_name: [element.immediate_treatment_other_person_detail.immediate_treatment_other_name],
            immediate_treatment_person_number: [element.immediate_treatment_other_person_detail.immediate_treatment_person_number],
            immediate_treatment_other_email: [element.immediate_treatment_other_person_detail.immediate_treatment_other_email]
          }),
        })
      )
    });
    return formArray;
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

  pickImage(sourceType, tabName) {
    // this.loadingService.presentLoading();
    let image: any;

    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        image = 'data:image/jpeg;base64,' + imageData;
        if (image != '' || image != undefined) {

          if (tabName == 'PhotoGraphy') {
            if (this.photoGraphy.length < 0) {
              this.photoGraphy.push(image);
            } else {
              this.photoGraphy.unshift(image);
            }
          }

          if (tabName == 'Alcohol') {
            if (this.alcohalImages.length < 0) {
              this.alcohalImages.push(image);
            } else {
              this.alcohalImages.unshift(image);
            }
          }

          if (tabName == 'Drug') {
            if (this.drugTestImages.length < 0) {
              this.drugTestImages.push(image);
            } else {
              this.drugTestImages.unshift(image);
            }
          }

          if (tabName == 'ReturnToAlternateDuty') {
            if (this.alterDutyImages.length < 0) {
              this.alterDutyImages.push(image);
            } else {
              this.alterDutyImages.unshift(image);
            }
          }

          if (tabName == 'ChemicalImage') {
            if (this.chemicalImages.length < 0) {
              this.chemicalImages.push(image);
            } else {
              this.chemicalImages.unshift(image);
            }
          }

          if (tabName == 'DamageImage') {
            if (this.damageImages.length < 0) {
              this.damageImages.push(image);
            } else {
              this.damageImages.unshift(image);
            }
          }
          this.onProgressBar('', '');
          // this.loadingService.dismissLoading();
        } else {
          // console.log('Error in image processing.');
          // this.loadingService.dismissLoading();
        }
      },
      (err) => {
        // this.loadingService.dismissLoading();
        console.log("errOf Image ", err)
      }
    );
  }

  async mobileUploads(tabName) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, tabName);
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA, tabName);
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

  async onPhotoGraphy(event, type) {
    if (type == 1) {
      this.mobileUploads('PhotoGraphy');
    } else if (type == 2) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.sharedService.getBase64(event.target.files[i]).then(
          image => {
            // this.photoGraphyObject[i] = image
            if (this.photoGraphy.length <= 0) {
              this.photoGraphy.push(image);
            } else {
              this.photoGraphy.unshift(image);
            }
            this.photoGraphyForm.controls['photography_image'].setValue(this.photoGraphy);
            this.onProgressBar('', '');
          }).catch(error => {
            console.log('error', error);
          });
      }
    }
  }

  onAlcoholImage(event, type) {
    if (type == 1) {
      this.mobileUploads('Alcohol');
    } else if (type == 2) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.sharedService.getBase64(event.target.files[i]).then(
          data => {
            // this.alcohalImagesObject[i] = data
            if (this.alcohalImages.length <= 0) {
              this.alcohalImages.push(data);
            } else {
              this.alcohalImages.unshift(data);
            }
            this.incidentDesForm.controls['alcohol_test_image'].setValue(this.alcohalImages);
            this.onProgressBar('', '');
          }).catch(error => {
            console.log('error', error);
          });
      }
    }
  }

  onAlcohalTestSelect(event) {
    if (event.target.value != 'Yes') {
      this.alcohalImages = [];
      // this.alcohalImagesObject = {};
    }
  }

  onDrugTestImage(event, type) {
    if (type == 1) {
      this.mobileUploads('Drug');
    } else if (type == 2) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.sharedService.getBase64(event.target.files[i]).then(
          data => {
            // this.drugTestImagesObject[i] = data
            if (this.drugTestImages.length <= 0) {
              this.drugTestImages.push(data);
            } else {
              this.drugTestImages.unshift(data);
            }
            this.incidentDesForm.controls['drug_test_image'].setValue(this.drugTestImages);
            this.onProgressBar('', '');
          }).catch(error => {
            console.log('error', error);
          });
      }
    }
  }

  onDrugTestSelect(event) {
    if (event.target.value != 'Yes') {
      this.drugTestImages = [];
      // this.drugTestImagesObject = {};
    }
  }

  onReturnToDutyImage(event, type) {
    if (type == 1) {
      this.mobileUploads('ReturnToAlternateDuty');
    } else if (type == 2) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.sharedService.getBase64(event.target.files[i]).then(
          data => {
            // this.alterDutyImagesObject[i] = data;
            if (this.alterDutyImages.length <= 0) {
              this.alterDutyImages.push(data);
            } else {
              this.alterDutyImages.unshift(data);
            }
            this.onProgressBar('', '');
          }).catch(error => {
            console.log('error', error);
          });
      }
    }
  }

  onReturnToDutySelect(event) {
    if (event.target.value != 'Yes') {
      this.alterDutyImages = [];
      // this.alterDutyImagesObject = {};
    }
  }

  onSelectDamageImage(event, type) {
    if (type == 1) {
      this.mobileUploads('DamageImage');
    } else if (type == 2) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.sharedService.getBase64(event.target.files[i]).then(
          data => {
            // this.damageImagesObject[i] = data
            // this.damageImages.push(data);
            if (this.damageImages.length <= 0) {
              this.damageImages.push(data);
            } else {
              this.damageImages.unshift(data);
            }
            this.assetDescriptionForm.controls['extent_damage_image'].setValue(this.damageImages);
            this.onProgressBar('', '');
          }).catch(error => {
            console.log('error', error);
          });
      }
    }
  }

  onChemicalImageSelect(event, type) {
    if (type == 1) {
      this.mobileUploads('ChemicalImage');
    } else if (type == 2) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.sharedService.getBase64(event.target.files[i]).then(
          data => {
            // this.chemicalImagesObject[i] = data;
            if (this.chemicalImages.length <= 0) {
              this.chemicalImages.push(data);
            } else {
              this.chemicalImages.unshift(data);
            }
            this.enviornmentForm.controls['chemical_details'].patchValue(image);
            this.onProgressBar('', '');
          }).catch(error => {
            console.log('error', error);
          });
      }
    }

    let image = {
      chemical_photo: this.chemicalImagesObject
    }

    this.enviornmentForm.controls['chemical_details'].patchValue(image);
    // this.enviornmentForm.get('chemical_details').value.chemical_photo = this.chemicalImagesObject;
  }

  onInsertImageSelect(event) {
    if (!event.detail.checked) {
      this.chemicalImages = [];
      // this.chemicalImagesObject = {};
    }
  }

  onImageDelete(index, variableName) {
    // if (tabName == 'Photography') {
    //   this.photoGraphy.splice(index, 1);
    // }

    // if (tabName == 'Alcohal Test') {
    //   this.alcohalImages.splice(index, 1);
    // }

    // if (tabName == 'Drug Test') {
    //   this.drugTestImages.splice(index, 1);
    // }

    // if (tabName == 'Return to Alternate Duties') {
    //   this.alterDutyImages.splice(index, 1);
    // }

    // if (tabName == 'Asset') {
    //   this.damageImages.splice(index, 1);
    // }

    // if (tabName == 'Chemical Image') {
    //   this.chemicalImages.splice(index, 1);
    // }

    this[variableName].splice(index, 1);
    this.onProgressBar('', '');
  }

  async onOpenIncidentModal() {
    const modal = await this.modalController.create({
      component: ManagersPage,
      componentProps: {
        "list": this.witnessList,
        "header": 'Witness List'
      },
      cssClass: 'managers',
    });
    modal.onDidDismiss().then((res) => {
      if (res && res?.data) {
        this.incidentForm.controls['incident_near_miss'].setValue(res.data.full_name);
        this.incident_near_miss = res.data;
      }
    })
    return await modal.present();
  }

  async onOpenIncDesModal() {
    const modal = await this.modalController.create({
      component: ManagersPage,
      componentProps: {
        "list": this.witnessList,
        "header": 'Witness List'
      },
      cssClass: 'managers',
    });
    modal.onDidDismiss().then((res) => {
      if (res && res?.data) {
        this.incidentDesForm.controls['was_there_any_witness_of_the_incident'].setValue(res.data.full_name);
        this.was_there_any_witness_of_the_incident = res.data;
      }
    })
    return await modal.present();
  }

  async onOpenClassiModal(headerName) {
    let list = [];
    if (headerName == 'Supervisor List') {
      list = this.superVisorList;
    }
    if (headerName == 'Manager List') {
      list = this.employeeList;
    }
    const modal = await this.modalController.create({
      component: ManagersPage,
      componentProps: {
        "list": list,
        "header": headerName
      },
      cssClass: 'managers',
    });
    modal.onDidDismiss().then((res) => {
      if (res && res?.data) {
        if (headerName == 'Supervisor List') {
          this.classificationForm.controls['classification_supervisor'].setValue(res.data.full_name);
          this.classification_supervisor = res.data;
          if (res.data.full_name != 'Other') {
            let data = {
              classification_supervisor_other_name: '',
              classification_supervisor_other_mobile_no: '',
              classification_supervisor_other_email: ''
            }
            this.classificationForm.controls['classification_supervisor_other_details'].patchValue(data);
          }
        } else if (headerName == 'Manager List') {
          this.classificationForm.controls['classification_manager'].setValue(res.data.full_name);
          this.classification_manager = res.data;
          if (res.data.full_name != 'Other') {
            let data = {
              classification_manager_other_name: '',
              classification_manager_other_mobile_no: '',
              classification_manager_other_email: ''
            }
            this.classificationForm.controls['classification_manager_other_details'].patchValue(data);
          }
        }
      }
    })
    return await modal.present();
  }

  async onOpenInjuryModal(field, index) {
    const modal = await this.modalController.create({
      component: ManagersPage,
      componentProps: {
        "list": this.employeeList,
        "header": 'Employee List'
      },
      cssClass: 'managers',
    });

    if (this.injuryPersonDetails.value[index].injured_person_option != '' &&
      this.injuryPersonDetails.value[index].injured_person_option != 'Other') {
      let data = {
        injured_person_option_other_details:
        {
          injured_person_option_other_name: '',
          injured_person_option_other_mobile_no: '',
          injured_person_option_other_email: ''
        }
      }
      this.injuryPersonDetails.controls[index].patchValue(data);
    }

    modal.onDidDismiss().then((res) => {
      if (res && res?.data) {
        if (field == 'Injured person') {
          let data = {
            injured_person_option: res.data.full_name,
            injured_person_option_id: res.data.employee_id,
          }
          this.injuryPersonDetails.controls[index].patchValue(data);
        }
        if (field == 'Injured administered') {
          let data = {
            immediate_treatment_person_name: res.data.full_name,
            immediate_treatment_person_name_id: res.data.employee_id,
            // immediate_treatment_person_number: res.data.emp_work_email && res.data.emp_work_email != '' ? res.data.emp_work_email : res.data.emp_mobile
            immediate_treatment_other_person_detail: {
              immediate_treatment_person_number: res.data.emp_mobile,
              immediate_treatment_other_email: res.data.emp_work_email ? res.data.emp_work_email : res.data.emp_oth_email
            }
          }
          this.injuryPersonDetails.controls[index].patchValue(data);
        }
      }
    })
    return await modal.present();
  }

  async onOpenReputationModal() {
    const modal = await this.modalController.create({
      component: ManagersPage,
      componentProps: {
        "list": this.witnessList,
        "header": 'Witness List'
      },
      cssClass: 'managers',
    });
    modal.onDidDismiss().then((res) => {
      if (res && res?.data) {
        this.reputationDesForm.controls['name_of_witness'].setValue(res.data.full_name);
        this.name_of_witness = res.data;
      }
    })
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

  //------------------------------------------------------------ Modals --------------------------------------------------------------------//

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
    // console.log('photoGraphyForm', this.photoGraphyForm.value);
    // console.log('incidentDesForm', this.incidentDesForm.value);
    // console.log('classificationForm', this.classificationForm.value);
    // console.log('assetDescriptionForm', this.assetDescriptionForm.value)
    // console.log('enviornmentForm', this.enviornmentForm.value);
    // console.log('injuryForm', this.injuryForm.value);
    // console.log('reportForm', this.reportForm.value);
    // console.log('reputationDesForm', this.reputationDesForm.value);
    // console.log('securityForm', this.securityForm.value);

    if (this.photoGraphy.length > 0) {
      this.photoGraphyObject = { ...this.photoGraphy };
    }

    if (this.alcohalImages.length > 0) {
      this.alcohalImagesObject = { ...this.alcohalImages }
    }

    if (this.drugTestImages.length > 0) {
      this.drugTestImagesObject = { ...this.drugTestImages }
    }

    if (this.alterDutyImages.length > 0) {
      this.alterDutyImagesObject = { ...this.alterDutyImages }
    }

    if (this.damageImages.length > 0) {
      this.damageImagesObject = { ...this.damageImages }
    }

    if (this.chemicalImages.length > 0) {
      this.chemicalImagesObject = { ...this.chemicalImages }
    }

    let userDetails = JSON.parse(localStorage.getItem('userDetails'));
    let validation: boolean = false;

    if (val == 'submit') {
      validation = this.validation();
    }

    if ((val == 'submit' && validation) || (val == 'incomplete_submit' && validation == false)) {
      let fd = new FormData();
      //---------------------------------------------------------- Incident ---------------------------------------------------------------------// 

      fd.append("incident_value", this.incidentForm.value['incident_value'] ? this.incidentForm.value['incident_value'] : '');                             // required
      fd.append("incident_near_miss", this.incidentForm.value['incident_near_miss'] ? this.incidentForm.value['incident_near_miss'] : '');
      // fd.append("incident_near_miss", this.incident_near_miss && this.incident_near_miss.employee_id ? this.incident_near_miss.employee_id : '');
      fd.append("incident_near_miss_other", this.incidentForm.value['incident_near_miss_other'] ? this.incidentForm.value['incident_near_miss_other'] : '');

      //----------------------------------------------------------- Incident --------------------------------------------------------------------// 

      //---------------------------------------------------------- photography ------------------------------------------------------------------//

      fd.append("photography_image", this.photoGraphyObject.length > 0 ? JSON.stringify(this.photoGraphyObject) : '');

      //---------------------------------------------------------- photography ------------------------------------------------------------------//

      //---------------------------------------------------- Incident Description ---------------------------------------------------------------//
      fd.append("incident_description", this.incidentDesForm.value['incident_description'] ? this.incidentDesForm.value['incident_description'] : '');              //required
      fd.append("incident_description_action", this.incidentDesForm.value['incident_description_action'] ? this.incidentDesForm.value['incident_description_action'] : ''); //incident photo pending from postman and here also  // required
      fd.append("incident_description_alcohol_test", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
      fd.append("alcohol_test_completed", this.incidentDesForm.value['incident_description_alcohol_test'] ? this.incidentDesForm.value['incident_description_alcohol_test'] : '');
      fd.append("drug_test_completed", this.incidentDesForm.value['drug_test_completed'] ? this.incidentDesForm.value['drug_test_completed'] : '');
      fd.append("seen_differently", this.incidentDesForm.value['seen_differently'] ? this.incidentDesForm.value['seen_differently'] : '');
      fd.append("was_there_any_witness_of_the_incident", this.was_there_any_witness_of_the_incident && this.was_there_any_witness_of_the_incident.employee_id ? this.was_there_any_witness_of_the_incident.employee_id : '');
      // fd.append("was_there_any_witness_of_the_incident", this.incidentDesForm.value['was_there_any_witness_of_the_incident']);
      fd.append("incdesc_other_witness_details", JSON.stringify(this.incidentDesForm.value['incdesc_other_witness_details']));
      fd.append("return_to_alternate_duties", this.incidentDesForm.value['return_to_alternate_duties'] ? this.incidentDesForm.value['return_to_alternate_duties'] : '');
      fd.append("alcohol_test_image", this.alcohalImagesObject.length > 0 ? JSON.stringify(this.alcohalImagesObject) : '')                          // alcohal test image
      fd.append("drug_test_image", this.drugTestImagesObject.length > 0 ? JSON.stringify(this.drugTestImagesObject) : '');                          // drug_test_image
      fd.append("return_to_alternate_duties_image", this.alterDutyImagesObject.length > 0 ? JSON.stringify(this.alterDutyImagesObject) : '');       // return_to_alternate_duties_image 

      //---------------------------------------------------- Incident Description ---------------------------------------------------------------//

      //-------------------------------------------------------- Classification -----------------------------------------------------------------//

      fd.append("classification_value", this.classificationForm.value['classification_value'].length > 0 ? this.classificationForm.value['classification_value'].join(',') : '');
      fd.append("date_of_incident", this.classificationForm.value['date_of_incident'] ? this.classificationForm.value['date_of_incident'] : '');
      fd.append("time_of_incident", this.classificationForm.value['time_of_incident'] ? this.classificationForm.value['time_of_incident'] : '');
      fd.append("date_reported", this.classificationForm.value['date_reported'] ? this.classificationForm.value['date_reported'] : '');
      fd.append("time_reported", this.classificationForm.value['time_reported'] ? this.classificationForm.value['time_reported'] : '');
      fd.append("classification_location_option", this.classificationForm.value['classification_location_option'] ? this.classificationForm.value['classification_location_option'] : '');
      if (this.classificationForm.value['classification_location_option'] == 'Add Location') {
        fd.append("classification_location_value", this.classificationForm.value['classification_location_value'] ? this.classificationForm.value['classification_location_value'] : '')
      }
      if (this.classificationForm.value['classification_location_option'] == 'Choose Location') {
        fd.append("classification_location_value", this.classificationForm.value['classification_location_value1'] ? this.classificationForm.value['classification_location_value1'] : '')
      }
      fd.append("classification_shift_type", this.classificationForm.value['classification_shift_type'] ? this.classificationForm.value['classification_shift_type'] : '');
      fd.append("classification_supervisor", this.classification_supervisor && this.classification_supervisor.employee_id ? this.classification_supervisor.employee_id : '');
      fd.append("classification_supervisor_other_details", JSON.stringify(this.classificationForm.value['classification_supervisor_other_details']));
      // fd.append("classification_supervisor", this.classificationForm.value['classification_supervisor']);
      // fd.append("classification_manager", this.classificationForm.value['classification_manager']);        // required
      fd.append("classification_manager", this.classification_manager && this.classification_manager.employee_id ? this.classification_manager.employee_id : '');
      fd.append("classification_manager_other_details", JSON.stringify(this.classificationForm.value['classification_manager_other_details']));
      //----------------------------------------------------------- Classification ---------------------------------------------------------------//

      //------------------------------------------------------------- Injury ---------------------------------------------------------------------//

      fd.append("injury_persons", this.injuryForm.value['injury_persons'] ? this.injuryForm.value['injury_persons'] : '');                                 // form value  
      fd.append("person_details", JSON.stringify(this.injuryForm.value['person_details']));

      //------------------------------------------------------------- Injury ---------------------------------------------------------------------//

      //----------------------------------------------------------- Enviornment ------------------------------------------------------------------//
      fd.append("environmental_description", this.enviornmentForm.value['environmental_description'] ? this.enviornmentForm.value['environmental_description'] : '');      // required
      fd.append("was_a_chemical_split", this.enviornmentForm.value['was_a_chemical_split'] ? this.enviornmentForm.value['was_a_chemical_split'] : '');                // chemical split value inner side query
      fd.append("chemical_details", JSON.stringify(this.enviornmentForm.value['chemical_details']))         // data with image
      fd.append("emergency_spill_kit_used", this.enviornmentForm.value['emergency_spill_kit_used'] ? this.enviornmentForm.value['emergency_spill_kit_used'] : '');
      fd.append("out_of_split_kit", this.enviornmentForm.value['out_of_split_kit'] ? this.enviornmentForm.value['out_of_split_kit'] : '');
      //------------------------------------------------------------ Enviornment ----------------------------------------------------------------//

      //------------------------------------------------------------- Reputation ----------------------------------------------------------------// 
      fd.append("reputation_option", this.reputationDesForm.value['reputation_option'] ? this.reputationDesForm.value['reputation_option'] : '');
      fd.append("individual_damage_value", this.reputationDesForm.value['individual_damage_value'] ? this.reputationDesForm.value['individual_damage_value'] : '');
      fd.append("company_damage_value", this.reputationDesForm.value['company_damage_value'] ? this.reputationDesForm.value['company_damage_value'] : '');
      fd.append("reputation_negative_effect", this.reputationDesForm.value['reputation_negative_effect'] ? this.reputationDesForm.value['reputation_negative_effect'] : '');
      fd.append("effected_department", this.reputationDesForm.value['effected_department'] ? this.reputationDesForm.value['effected_department'] : '');
      fd.append("external_party", this.reputationDesForm.value['external_party'] ? this.reputationDesForm.value['external_party'] : '');
      // fd.append("name_of_witness", this.reputationDesForm.value['name_of_witness']);
      fd.append("name_of_witness", this.name_of_witness && this.name_of_witness.employee_id ? this.name_of_witness.employee_id : '');
      fd.append("other_witness_details", JSON.stringify(this.reputationDesForm.value['other_witness_details']));
      fd.append("possible_outcome_incident", this.reputationDesForm.value['possible_outcome_incident'] ? this.reputationDesForm.value['possible_outcome_incident'] : '');    // required

      //-------------------------------------------------------------- Reputation ---------------------------------------------------------------//

      //--------------------------------------------------------------- Security ----------------------------------------------------------------//
      fd.append("security_option", this.securityForm.value['security_option'] ? this.securityForm.value['security_option'] : '');
      if (this.securityForm.value['security_option'] == 'IT') {
        fd.append("it_option_value", this.securityForm.value['it_option_value'].length > 0 ? this.securityForm.value['it_option_value'].join(',') : '')                  // chexkbox and inner value
      }
      fd.append("what_has_been_stolen_item", this.securityForm.value['what_has_been_stolen_item'] ? this.securityForm.value['what_has_been_stolen_item'] : '');
      fd.append("approximate_value_of_stolen", this.securityForm.value['approximate_value_of_stolen'] ? this.securityForm.value['approximate_value_of_stolen'] : '');
      fd.append("what_is_the_specific_securities_incident", this.securityForm.value['what_is_the_specific_securities_incident'] ? this.securityForm.value['what_is_the_specific_securities_incident'] : '');
      //---------------------------------------------------------------- Security----------------------------------------------------------------//

      //----------------------------------------------------------------- Asset ----------------------------------------------------------------//

      fd.append("asset_description", this.assetDescriptionForm.value['asset_description'] ? this.assetDescriptionForm.value['asset_description'] : '');                 // required
      fd.append("asset_has_number", this.assetDescriptionForm.value['asset_has_number'] ? this.assetDescriptionForm.value['asset_has_number'] : '');
      if (this.assetDescriptionForm.value['asset_has_number'] == 'Yes') {
        fd.append("asset_number", this.assetDescriptionForm.value['asset_number'] ? this.assetDescriptionForm.value['asset_number'] : '');
      }
      fd.append("extent_of_damage", this.assetDescriptionForm.value['extent_of_damage'] ? this.assetDescriptionForm.value['extent_of_damage'] : '');                   // required
      fd.append("extent_damage_image", this.damageImagesObject.length > 0 ? JSON.stringify(this.damageImagesObject) : '');                            // extent_damage_image

      //----------------------------------------------------------------- Asset -----------------------------------------------------------------//

      //---------------------------------------------------------------- Report -----------------------------------------------------------------//

      fd.append("report", this.reportForm.value['report'] ? this.reportForm.value['report'] : '');

      //---------------------------------------------------------------- Report -----------------------------------------------------------------//

      fd.append('id', this.incidentDetails.id);
      fd.append('user_id', userDetails.id);
      let url = (val == 'submit' ? "add_form/submit" : 'Add_form/submit_incomplete');

      this.globalService.postData(url, fd).subscribe((res: any) => {
        // this.globalService.presentLoading();
        if (res.status) {
          this.globalService.presentToast(res.message)
          this.nav.navigateRoot("incident-form-list")
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
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
      this.reputationCheckBox.find(ele => {
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
      this.reputationCheckBox.find(ele => {
        if (ele.val == event.target.value) {
          ele.isChecked = false
        }
      })
    }
    this.onProgressBar('', '');
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
      this.onProgressBar('', '');
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
      injured_person_option_id: [''],
      injured_person_option_other_details:
        this.fb.group({
          injured_person_option_other_name: [''],
          injured_person_option_other_mobile_no: [''],
          injured_person_option_other_email: ['']
        }),
      // injured_person_option_value: [''],  // other person name
      gender: [''],
      date_of_birth: [''],
      normal_duties: [''],
      normal_duties_explanation: [''],
      alternate_duties: [''],
      duties_explanation: [''],
      initital_injury: [''],
      part_of_body_injured_occured: [],
      was_immediate_treatment: [''],
      was_immediate_treatment_comment: [''],
      immediate_treatment_given_explanation: [''],
      immediate_treatment_person_name: [''],
      immediate_treatment_person_name_id: [''],
      // immediate_treatment_person_number: [''],
      immediate_treatment_other_person_detail: this.fb.group({
        immediate_treatment_other_name: [''],
        immediate_treatment_person_number: [''],
        immediate_treatment_other_email: ['']
      }),
    })
  }

  onAddMultiplePersonDetails(event) {
    let no = 0;
    if (this.injuryForm.value["person_details"].length != 0) {
      no = (parseInt(this.injuryForm.value['injury_persons']) - this.injuryForm.value["person_details"].length);
    } else {
      no = this.injuryForm.value['injury_persons']
    }
    // if (no == 0) {
    //   this.injuryPersonDetails.push(this.injuryPersonKeys());
    // } else 
    if (no > 0) {
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
    this.onProgressBar('', '');
  }

  onDepartmentEffectCheckBox(event) {
    const formArray: FormArray = this.reputationDesForm.get('effected_department') as FormArray;
    if (event.detail.checked) {
      formArray.push(new FormControl(event.detail.value));
      this.departmentEffect.find(ele => {
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
      })
      this.departmentEffect.find(ele => {
        if (ele.val == event.detail.value) {
          ele.isChecked = false;
        }
      })
    }
    this.onProgressBar('', '');
  }

  onWitnessChange(event) {
    if (event.detail.value != 'Other') {
      this.reputationDesForm.controls['other_witness_details'].reset();
    } else {

      this.reputationDesForm.value['other_witness_details'].employee_id = 0;
    }
  }

  onEmpChange(event, index) {
    this.employeeList.filter(ele => {
      if (ele.full_name == event.detail.value) {
        this.injuryForm.value['person_details'][index]['emp_id'] = ele.employee_id;
        this.injuryForm.controls['person_details'][index]['immediate_treatment_person_number'] = ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email;
      }
    })
  }

  onAdministeredPerson(event, index) {
    this.injuryForm.controls['person_details'].value[index]['immediate_treatment_person_number'] = '';
    this.employeeList.filter(ele => {
      if (ele.employee_id == event.detail.value) {
        this.injuryForm.controls['person_details'].value[index]['immediate_treatment_person_number'] = ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email;
        // this.injuryForm.value['person_details'].controls[index]['immediate_treatment_person_number'].setValue(ele.emp_mobile ? ele.emp_mobile : ele.emp_work_email);
      }
    })
  }

  onIncDesWitnessChange(event) {
    if (event.detail.value != 0) {
      this.incidentDesForm.controls['incdesc_other_witness_details'].reset();
    }
  }

  onImmediateTreatment(event, index) {
    if (event.detail.value == 'Yes') {
      let data = {
        was_immediate_treatment_comment: ''
      }
      this.injuryPersonDetails.controls[index].patchValue(data);
    }

    if (event.detail.value == 'No') {
      let data = {
        immediate_treatment_given_explanation: '',
        immediate_treatment_person_name: '',
        immediate_treatment_person_name_id: '',
        immediate_treatment_other_person_detail: {
          immediate_treatment_other_name: '',
          immediate_treatment_person_number: '',
          immediate_treatment_other_email: ''
        }
      }
      this.injuryPersonDetails.controls[index].patchValue(data);
    }
  }

  onProgressBar(event, tabName) {

    let count = 0;
    let formControlKeys = [];
    let formControlValue = [];

    //----------------------------------------------------------- Incident Form -------------------------------------------------------------//  

    Object.keys(this.incidentForm.controls).map(ele => formControlKeys.push(ele));
    Object.values(this.incidentForm.value).map(ele => formControlValue.push(ele));

    if (this.incidentForm.valid) {

      if (this.incidentForm.value['incident_value'] && this.incidentForm.value['incident_value'] != 'Near Miss') {
        for (var i = 0; i < formControlKeys.length; i++) {
          if (formControlKeys[i] === 'incident_near_miss') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
          if (formControlKeys[i] === 'incident_near_miss_other') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
        }
      }

      //----------------------------------------------------------- Incident Form ------------------------------------------------------------//  

      //----------------------------------------------------------- PhotoGraphy Form ---------------------------------------------------------//  

      Object.keys(this.photoGraphyForm.controls).map(ele => formControlKeys.push(ele));
      Object.values(this.photoGraphyForm.value).map(ele => formControlValue.push(ele));

      //----------------------------------------------------------- PhotoGraphy Form ---------------------------------------------------------//  

      //----------------------------------------------------------- Incident Desc Form -------------------------------------------------------//  

      Object.keys(this.incidentDesForm.controls).map(ele => formControlKeys.push(ele));
      Object.values(this.incidentDesForm.value).map(ele => formControlValue.push(ele));

      for (var i = 0; i <= formControlKeys.length; i++) {
        if (formControlKeys[i] === 'incdesc_other_witness_details') {
          formControlKeys.splice(i, 1);
          formControlValue.splice(i, 1);
        }

        if ((this.incidentDesForm.value['incident_description_alcohol_test'] == '' ||
          this.incidentDesForm.value['incident_description_alcohol_test'] != 'Yes') && formControlKeys[i] === 'alcohol_test_image') {
          formControlKeys.splice(i, 1);
          formControlValue.splice(i, 1);
        }

        if ((this.incidentDesForm.value['drug_test_completed'] == '' || this.incidentDesForm.value['drug_test_completed'] != 'Yes') &&
          formControlKeys[i] === 'drug_test_image') {
          formControlKeys.splice(i, 1);
          formControlValue.splice(i, 1);
        }

        if ((this.incidentDesForm.value['return_to_alternate_duties'] == '' ||
          this.incidentDesForm.value['return_to_alternate_duties'] != 'Yes') && formControlKeys[i] === 'return_to_alternate_duties_image') {
          formControlKeys.splice(i, 1);
          formControlValue.splice(i, 1);
        }
      }

      if (this.incidentDesForm.value['was_there_any_witness_of_the_incident'] == 'Other') {
        formControlKeys.push('incdesc_other_witness_name');
        formControlValue.push(this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_name != undefined ? this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_name : '');
        formControlKeys.push('incdesc_other_witness_mobile_no');
        formControlValue.push(this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_mobile_no != undefined ? this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_mobile_no : '');
        formControlKeys.push('incdesc_other_witness_email');
        formControlValue.push(this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_email != undefined ? this.incidentDesForm.value['incdesc_other_witness_details'].incdesc_other_witness_email : '');
      }

      //--------------------------------------------------------- Incident Desc Form  -------------------------------------------------------//  

      if (this.incidentDesForm.valid) {

        //------------------------------------------- ----------- Classification Form -------------------------------------------------------//  

        Object.keys(this.classificationForm.value).map(ele => formControlKeys.push(ele));
        Object.values(this.classificationForm.value).map(ele => formControlValue.push(ele));

        for (var i = 0; i < formControlKeys.length; i++) {
          if (formControlKeys[i] === 'classification_supervisor_other_details') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
          if (formControlKeys[i] === 'classification_manager_other_details') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
          if (formControlKeys[i] === 'classification_location_value') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
          if (formControlKeys[i] === 'classification_location_value1') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
        }

        if (this.classificationForm.value['classification_location_option'] == 'Add Location') {
          formControlKeys.push('classification_location_value');
          formControlValue.push(this.classificationForm.value['classification_location_value']);
        } else if (this.classificationForm.value['classification_location_option'] == 'Choose Location') {
          formControlKeys.push('classification_location_value1');
          formControlValue.push(this.classificationForm.value['classification_location_value1']);
        }

        if (this.classificationForm.value['classification_supervisor'] == 'Other') {
          formControlKeys.push('classification_supervisor_other_name');
          formControlValue.push(this.classificationForm.value['classification_supervisor_other_details'].classification_supervisor_other_name);
          formControlKeys.push('classification_supervisor_other_mobile_no');
          formControlValue.push(this.classificationForm.value['classification_supervisor_other_details'].classification_supervisor_other_mobile_no);
          formControlKeys.push('classification_supervisor_other_email');
          formControlValue.push(this.classificationForm.value['classification_supervisor_other_details'].classification_supervisor_other_email);
        }

        if (this.classificationForm.value['classification_manager'] == 'Other') {
          formControlKeys.push('classification_manager_other_name');
          formControlValue.push(this.classificationForm.value['classification_manager_other_details'].classification_manager_other_name);
          formControlKeys.push('classification_manager_other_mobile_no');
          formControlValue.push(this.classificationForm.value['classification_manager_other_details'].classification_manager_other_mobile_no);
          formControlKeys.push('classification_manager_other_email');
          formControlValue.push(this.classificationForm.value['classification_manager_other_details'].classification_manager_other_email);
        }

        //------------------------------------------------------- Classification Form -------------------------------------------------------//  

        this.classificationList.forEach(element => {

          if (element.val == 'Asset' && element.isChecked) {
            Object.keys(this.assetDescriptionForm.controls).map(ele => formControlKeys.push(ele));
            Object.values(this.assetDescriptionForm.value).map(ele => formControlValue.push(ele));
          }

          if (element.val == 'Environmental' && element.isChecked) {
            Object.keys(this.enviornmentForm.controls).map(ele => formControlKeys.push(ele));
            Object.values(this.enviornmentForm.value).map(ele => formControlValue.push(ele));
          }

          if (element.val == 'Injury' && element.isChecked) {
            formControlKeys.push('injury_persons');
            formControlValue.push(this.injuryForm.value['injury_persons']);
          }

          if (element.val == "Report" && element.isChecked) {
            Object.keys(this.reportForm.controls).map(ele => formControlKeys.push(ele));
            Object.values(this.reportForm.value).map(ele => formControlValue.push(ele));
          }

          //--------------------------------------------------- Reputation Des Form -----------------------------------------------------------//  
          if (element.val == "Reputation" && element.isChecked) {
            // Object.keys(this.reputationDesForm.controls).map(ele => formControlKeys.push(ele));
            // Object.values(this.reputationDesForm.value).map(ele => formControlValue.push(ele));

            formControlKeys.push('reputation_option');
            formControlValue.push(this.reputationDesForm.value['reputation_option']);
            formControlKeys.push('reputation_negative_effect');
            formControlValue.push(this.reputationDesForm.value['reputation_negative_effect']);
            formControlKeys.push('name_of_witness');
            formControlValue.push(this.reputationDesForm.value['name_of_witness']);
            formControlKeys.push('possible_outcome_incident');
            formControlValue.push(this.reputationDesForm.value['possible_outcome_incident']);

            if (this.reputationDesForm.value['reputation_option'] && this.reputationDesForm.value['reputation_option'].length > 0) {
              if (this.reputationDesForm.value['reputation_option'][0] == "Company" ||
                this.reputationDesForm.value['reputation_option'][1] == "Company") {
                formControlKeys.push('company_damage_value');
                formControlValue.push(this.reputationDesForm.value['company_damage_value']);
              }

              if (this.reputationDesForm.value['reputation_option'][0] == "Individual" ||
                this.reputationDesForm.value['reputation_option'][1] == "Individual") {
                formControlKeys.push('individual_damage_value');
                formControlValue.push(this.reputationDesForm.value['individual_damage_value']);
              }
            }

            if (this.reputationDesForm.value['reputation_negative_effect'] != '' &&
              this.reputationDesForm.value['reputation_negative_effect'] == 'Internal') {
              formControlKeys.push('effected_department');
              formControlValue.push(this.reputationDesForm.value['effected_department']);
            } else if (this.reputationDesForm.value['reputation_negative_effect'] != '' &&
              this.reputationDesForm.value['reputation_negative_effect'] == "External") {
              formControlKeys.push('external_party');
              formControlValue.push(this.reputationDesForm.value['external_party']);
            } else if (this.reputationDesForm.value['reputation_negative_effect'] == 'Both') {
              formControlKeys.push('effected_department');
              formControlValue.push(this.reputationDesForm.value['effected_department']);
              formControlKeys.push('external_party');
              formControlValue.push(this.reputationDesForm.value['external_party']);

            }

            if (this.reputationDesForm.value['name_of_witness'] == 'Other') {
              formControlKeys.push('other_witness_name');
              formControlValue.push(this.reputationDesForm.value['other_witness_details'].other_witness_name);
              formControlKeys.push('other_witness_mobile_no');
              formControlValue.push(this.reputationDesForm.value['other_witness_details'].other_witness_mobile_no);
              formControlKeys.push('other_witness_email');
              formControlValue.push(this.reputationDesForm.value['other_witness_details'].other_witness_email);
            }
          }
          //----------------------------------------------- Reputation Des Form ---------------------------------------------------------------//

          if (element.val == "Security" && element.isChecked) {

            //--------------------------------------------------- Security Form ----------------------------------------------------------------//  

            formControlKeys.push('security_option');
            formControlValue.push(this.securityForm.value['security_option']);
            if (this.securityForm.value['security_option'] == 'IT') {
              formControlKeys.push('it_option_value');
              formControlValue.push(this.securityForm.value['it_option_value']);
            }

            if (this.securityForm.value['security_option'] == 'Theft') {
              formControlKeys.push('what_has_been_stolen_item');
              formControlValue.push(this.securityForm.value['what_has_been_stolen_item']);

              formControlKeys.push('approximate_value_of_stolen');
              formControlValue.push(this.securityForm.value['approximate_value_of_stolen']);
            }

            if (this.securityForm.value['security_option'] == 'Other') {
              formControlKeys.push('what_is_the_specific_securities_incident');
              formControlValue.push(this.securityForm.value['what_is_the_specific_securities_incident']);
            }
            //---------------------------------------------------- Security Form ----------------------------------------------------------------//  
          }
        });

        for (var i = 0; i < formControlKeys.length; i++) {

          //----------------------------------------------------- Asset Form ----------------------------------------------------------------//  

          if (this.assetDescriptionForm.value['asset_has_number'] != 'Yes') {
            if (formControlKeys[i] === 'asset_number') {
              formControlKeys.splice(i, 1);
              formControlValue.splice(i, 1);
            }
          }

          //---------------------------------------------------- Asset Form -----------------------------------------------------------------//  

          //------------------------------------------------- Enviornment Form --------------------------------------------------------------//  

          if (formControlKeys[i] === 'chemical_details') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
          if (formControlKeys[i] === 'out_of_split_kit') {
            formControlKeys.splice(i, 1);
            formControlValue.splice(i, 1);
          }
        }

        if (this.enviornmentForm.value['was_a_chemical_split'] == 'Yes') {
          formControlKeys.push('chemical_name');
          formControlValue.push(this.enviornmentForm.value['chemical_details'].chemical_name);
          formControlKeys.push('approximate_quantity');
          formControlValue.push(this.enviornmentForm.value['chemical_details'].approximate_quantity);

          if (this.enviornmentForm.value['chemical_details'].insertPhotoCheckBox) {
            formControlKeys.push('chemical_photo');
            formControlValue.push(this.enviornmentForm.value['chemical_details'].chemical_photo);
          }
        }

        if (this.enviornmentForm.value['emergency_spill_kit_used'] == 'Yes') {
          formControlKeys.push('out_of_split_kit');
          formControlValue.push(this.enviornmentForm.value['out_of_split_kit']);
        }

        //---------------------------------------------------- Enviornment Form -------------------------------------------------------------// 

        //------------------------------------------------------- Injury Form ---------------------------------------------------------------// 

        if (this.injuryForm.value['injury_persons'] != '' && this.injuryForm.value['injury_persons'] != null) {
          for (let i = 0; i < this.injuryForm.value['injury_persons']; i++) {

            Object.keys(this.injuryForm.value['person_details'][i]).forEach((ele, j) => {

              if (ele != 'injured_person_option_id' && ele != 'injured_person_option_other_details' &&
                ele != 'normal_duties_explanation' && ele != 'duties_explanation' &&
                ele != 'immediate_treatment_person_name_id' && ele != 'immediate_treatment_given_explanation' &&
                ele != 'immediate_treatment_person_name' && ele != 'immediate_treatment_other_person_detail' &&
                ele != 'was_immediate_treatment_comment') {
                formControlKeys.push(ele + '_' + i);
                formControlValue.push(Object.values(this.injuryForm.value['person_details'][i])[j]);
              }

              if (ele == 'injured_person_option' && this.injuryForm.value['person_details'][i].injured_person_option == 'Other') {

                formControlKeys.push('injured_person_option_other_name' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i]['injured_person_option_other_details'].injured_person_option_other_name);

                formControlKeys.push('injured_person_option_other_mobile_no' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i]['injured_person_option_other_details'].injured_person_option_other_mobile_no);

                formControlKeys.push('injured_person_option_other_email' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i]['injured_person_option_other_details'].injured_person_option_other_email);

              }

              if (ele == 'normal_duties' && this.injuryForm.value['person_details'][i].normal_duties == 'No') {
                formControlKeys.push('normal_duties_explanation' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i]['normal_duties_explanation']);
              }

              if (ele == 'alternate_duties' && this.injuryForm.value['person_details'][i].alternate_duties == 'No') {
                formControlKeys.push('duties_explanation' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i]['duties_explanation']);
              }

              if (ele == 'was_immediate_treatment' && this.injuryForm.value['person_details'][i].was_immediate_treatment == 'Yes') {

                formControlKeys.push('immediate_treatment_given_explanation' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i].immediate_treatment_given_explanation);

                formControlKeys.push('immediate_treatment_person_name' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i].immediate_treatment_person_name);

                if (this.injuryForm.value['person_details'][i]['immediate_treatment_person_name'] == 'Other') {
                  formControlKeys.push('immediate_treatment_other_name' + '_' + i);
                  formControlValue.push(this.injuryForm.value['person_details'][i]['immediate_treatment_other_person_detail'].immediate_treatment_other_name);
                }

                formControlKeys.push('immediate_treatment_person_number' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i]['immediate_treatment_other_person_detail'].immediate_treatment_person_number);

                formControlKeys.push('immediate_treatment_other_email' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i]['immediate_treatment_other_person_detail'].immediate_treatment_other_email);
              }

              if (ele == 'was_immediate_treatment' && this.injuryForm.value['person_details'][i].was_immediate_treatment == 'No') {
                formControlKeys.push('was_immediate_treatment_comment' + '_' + i);
                formControlValue.push(this.injuryForm.value['person_details'][i].was_immediate_treatment_comment);
              }
            })
          }
        }

        //------------------------------------------------------- Injury Form ---------------------------------------------------------------//    
      }
    }

    formControlKeys.forEach((key, index) => {
      if (formControlValue[index] != '' && formControlValue[index] != null && formControlValue[index] != undefined &&
        formControlValue[index].length > 0) {
        count = ++count;
      }
    })

    this.form_percent = ((1 / formControlKeys.length) * count);
    this.form_percent_val = parseInt((((1 / formControlKeys.length) * count) * 100).toFixed());
  }

  onImageClick(val) {
  //   console.log(val);
  }

}