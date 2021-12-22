import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraneViewDetailPageRoutingModule } from './crane-view-detail-routing.module';

import { CraneViewDetailPage } from './crane-view-detail.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraneViewDetailPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    CraneViewDetailPage,
    // HeaderComponent
  ]
})
export class CraneViewDetailPageModule { }
