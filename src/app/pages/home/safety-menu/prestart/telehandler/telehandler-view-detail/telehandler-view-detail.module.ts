import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelehandlerViewDetailPageRoutingModule } from './telehandler-view-detail-routing.module';

import { TelehandlerViewDetailPage } from './telehandler-view-detail.page';

import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelehandlerViewDetailPageRoutingModule
  ],
  declarations: [
    TelehandlerViewDetailPage,
    HeaderComponent
  ]
})
export class TelehandlerViewDetailPageModule { }
