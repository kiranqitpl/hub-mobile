import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyMenuPageRoutingModule } from './safety-menu-routing.module';

import { SafetyMenuPage } from './safety-menu.page';

import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafetyMenuPageRoutingModule
  ],
  declarations: [SafetyMenuPage, HeaderComponent]
})
export class SafetyMenuPageModule {}
