import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfDevFormPageRoutingModule } from './prof-dev-form-routing.module';

import { ProfDevFormPage } from './prof-dev-form.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfDevFormPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [ProfDevFormPage]
})
export class ProfDevFormPageModule {}
