import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelehandlerViewDetailPageRoutingModule } from './telehandler-view-detail-routing.module';

import { TelehandlerViewDetailPage } from './telehandler-view-detail.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelehandlerViewDetailPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    TelehandlerViewDetailPage,
  ]
})
export class TelehandlerViewDetailPageModule { }
