import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyMenuPageRoutingModule } from './safety-menu-routing.module';

import { SafetyMenuPage } from './safety-menu.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafetyMenuPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    SafetyMenuPage,
  ],
})
export class SafetyMenuPageModule { }
