import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleHoistAddFormPageRoutingModule } from './vehicle-hoist-add-form-routing.module';

import { VehicleHoistAddFormPage } from './vehicle-hoist-add-form.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VehicleHoistAddFormPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    VehicleHoistAddFormPage,
  ]
})
export class VehicleHoistAddFormPageModule { }
