import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CraneAddFormPageRoutingModule } from './crane-add-form-routing.module';

import { CraneAddFormPage } from './crane-add-form.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraneAddFormPageRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  declarations: [
    CraneAddFormPage,
  ]
})
export class CraneAddFormPageModule { }
