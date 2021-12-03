import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraneViewDetailPageRoutingModule } from './crane-view-detail-routing.module';

import { CraneViewDetailPage } from './crane-view-detail.page';
import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraneViewDetailPageRoutingModule
  ],
  declarations: [
    CraneViewDetailPage,
    HeaderComponent
  ]
})
export class CraneViewDetailPageModule { }
