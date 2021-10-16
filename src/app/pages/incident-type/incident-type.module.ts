import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentTypePageRoutingModule } from './incident-type-routing.module';

import { IncidentTypePage } from './incident-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentTypePageRoutingModule
  ],
  declarations: [IncidentTypePage]
})
export class IncidentTypePageModule {}
