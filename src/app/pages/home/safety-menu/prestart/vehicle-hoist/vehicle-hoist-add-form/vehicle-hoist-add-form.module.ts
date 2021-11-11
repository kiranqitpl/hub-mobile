import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleHoistAddFormPageRoutingModule } from './vehicle-hoist-add-form-routing.module';

import { VehicleHoistAddFormPage } from './vehicle-hoist-add-form.page';

import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VehicleHoistAddFormPageRoutingModule
  ],
  declarations: [
    VehicleHoistAddFormPage,
    HeaderComponent
  ]
})
export class VehicleHoistAddFormPageModule { }
