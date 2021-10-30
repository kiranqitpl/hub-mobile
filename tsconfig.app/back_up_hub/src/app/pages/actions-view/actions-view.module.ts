import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsViewPageRoutingModule } from './actions-view-routing.module';

import { ActionsViewPage } from './actions-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsViewPageRoutingModule
  ],
  declarations: [ActionsViewPage]
})
export class ActionsViewPageModule {}
