import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestigationViewPageRoutingModule } from './investigation-view-routing.module';

import { InvestigationViewPage } from './investigation-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestigationViewPageRoutingModule
  ],
  declarations: [InvestigationViewPage]
})
export class InvestigationViewPageModule {}
