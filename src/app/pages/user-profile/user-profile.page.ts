import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  pName: String = 'Profile';

  userMenu = [
    {
      menuName: 'Bank Account Details', route: '/user-profile/bank-account'
    },
    // {
    //   menuName: 'Clothing Issue', route: '#'
    // },
    {
      menuName: 'Medical Questionnaire', route: '/user-profile/medical-questionnaire'
    },
    {
      menuName: 'Personal Details', route: '/user-profile/profile'
    },
    {
      menuName: 'Authority to Release Personal Information', route: '/user-profile/release-personal-info'
    },
    {
      menuName: 'Prescription Medication', route: '/user-profile/prescription-medication'
    },
    {
      menuName: 'Superannuation Choice', route: '/user-profile/superannuation-choice'
    },
    // {
    //   menuName: 'Tax File Number', route: '#'
    // },
    // {
    //   menuName: 'Assigned Licenses', route: '#'
    // },
    // {
    //   menuName: 'Other Forms', route: '#'
    // },
    // {
    //   menuName: 'HORTS Induction', route: '#'
    // },
    // {
    //   menuName: 'Position Description', route: '#'
    // },
    {
      menuName: 'Professional Development Application', route: '/home/hr/prof-dev-form'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
