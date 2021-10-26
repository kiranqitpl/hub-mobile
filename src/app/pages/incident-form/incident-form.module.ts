import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IncidentFormPageRoutingModule } from './incident-form-routing.module';

import { IncidentFormPage } from './incident-form.page';
import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IncidentFormPage, HeaderComponent]
})
export class IncidentFormPageModule { }
