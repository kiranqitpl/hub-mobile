import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentDetailsPageRoutingModule } from './incident-details-routing.module';
import { HeaderComponent } from 'src/app/shared-component/header/header.component';
import { IncidentDetailsPage } from './incident-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentDetailsPageRoutingModule
  ],
  declarations: [
    IncidentDetailsPage,
    HeaderComponent
  ]
})
export class IncidentDetailsPageModule { }
