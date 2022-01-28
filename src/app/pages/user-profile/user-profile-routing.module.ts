import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfilePage } from './user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'superannuation-choice',
    loadChildren: () => import('./superannuation-choice/superannuation-choice.module').then( m => m.SuperannuationChoicePageModule)
  },
  {
    path: 'bank-account',
    loadChildren: () => import('./bank-account/bank-account.module').then( m => m.BankAccountPageModule)
  },
  {
    path: 'medical-questionnaire',
    loadChildren: () => import('./medical-questionnaire/medical-questionnaire.module').then( m => m.MedicalQuestionnairePageModule)
  },
  {
    path: 'release-personal-info',
    loadChildren: () => import('./release-personal-info/release-personal-info.module').then( m => m.ReleasePersonalInfoPageModule)
  },
  {
    path: 'prescription-medication',
    loadChildren: () => import('./prescription-medication/prescription-medication.module').then( m => m.PrescriptionMedicationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfilePageRoutingModule {}
