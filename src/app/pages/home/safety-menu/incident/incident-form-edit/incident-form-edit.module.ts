import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IncidentFormEditPageRoutingModule } from './incident-form-edit-routing.module';

import { IncidentFormEditPage } from './incident-form-edit.page';
import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentFormEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IncidentFormEditPage, HeaderComponent]
})
export class IncidentFormEditPageModule { }
