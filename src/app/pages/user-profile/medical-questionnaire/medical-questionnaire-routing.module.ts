import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalQuestionnairePage } from './medical-questionnaire.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalQuestionnairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalQuestionnairePageRoutingModule {}
