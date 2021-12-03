import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleHostViewDetailPageRoutingModule } from './vehicle-host-view-detail-routing.module';

import { VehicleHostViewDetailPage } from './vehicle-host-view-detail.page';

import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleHostViewDetailPageRoutingModule
  ],
  declarations: [
    VehicleHostViewDetailPage,
    HeaderComponent
  ]
})
export class VehicleHostViewDetailPageModule { }
