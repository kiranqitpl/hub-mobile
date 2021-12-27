import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperannuationChoicePageRoutingModule } from './superannuation-choice-routing.module';

import { SuperannuationChoicePage } from './superannuation-choice.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperannuationChoicePageRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],
  declarations: [SuperannuationChoicePage]
})
export class SuperannuationChoicePageModule {}
