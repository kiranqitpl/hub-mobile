import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrescriptionMedicationPageRoutingModule } from './prescription-medication-routing.module';

import { PrescriptionMedicationPage } from './prescription-medication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrescriptionMedicationPageRoutingModule
  ],
  declarations: [PrescriptionMedicationPage]
})
export class PrescriptionMedicationPageModule {}
