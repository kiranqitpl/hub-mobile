import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleHostViewDetailPageRoutingModule } from './vehicle-host-view-detail-routing.module';

import { VehicleHostViewDetailPage } from './vehicle-host-view-detail.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleHostViewDetailPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    VehicleHostViewDetailPage,

  ]
})
export class VehicleHostViewDetailPageModule { }
