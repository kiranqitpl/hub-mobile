import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IncidentFormEditPageRoutingModule } from './incident-form-edit-routing.module';

import { IncidentFormEditPage } from './incident-form-edit.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentFormEditPageRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  declarations: [IncidentFormEditPage]
})
export class IncidentFormEditPageModule { }
