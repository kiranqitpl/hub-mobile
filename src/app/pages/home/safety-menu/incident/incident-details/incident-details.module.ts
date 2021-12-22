import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentDetailsPageRoutingModule } from './incident-details-routing.module';
import { IncidentDetailsPage } from './incident-details.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentDetailsPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    IncidentDetailsPage,
    // HeaderComponent
  ],
})
export class IncidentDetailsPageModule { }
