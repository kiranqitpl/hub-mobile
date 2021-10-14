import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSectionPageRoutingModule } from './form-section-routing.module';

import { FormSectionPage } from './form-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormSectionPageRoutingModule
  ],
  declarations: [FormSectionPage]
})
export class FormSectionPageModule {}
