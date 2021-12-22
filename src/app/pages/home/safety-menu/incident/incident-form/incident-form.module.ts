import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IncidentFormPageRoutingModule } from './incident-form-routing.module';

import { IncidentFormPage } from './incident-form.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentFormPageRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  declarations: [IncidentFormPage, 
    // HeaderComponent
  ]
})
export class IncidentFormPageModule { }
