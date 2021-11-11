import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestigationPageRoutingModule } from './investigation-routing.module';

import { InvestigationPage } from './investigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestigationPageRoutingModule
  ],
  declarations: [InvestigationPage]
})
export class InvestigationPageModule {}
