import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalQuestionnairePageRoutingModule } from './medical-questionnaire-routing.module';

import { MedicalQuestionnairePage } from './medical-questionnaire.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalQuestionnairePageRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],
  declarations: [MedicalQuestionnairePage]
})
export class MedicalQuestionnairePageModule {}
