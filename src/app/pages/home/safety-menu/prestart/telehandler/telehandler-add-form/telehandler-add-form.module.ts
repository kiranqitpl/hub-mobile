import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelehandlerAddFormPageRoutingModule } from './telehandler-add-form-routing.module';

import { TelehandlerAddFormPage } from './telehandler-add-form.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TelehandlerAddFormPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    TelehandlerAddFormPage,
  ]
})
export class TelehandlerAddFormPageModule { }
