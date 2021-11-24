import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelehandlerAddFormPageRoutingModule } from './telehandler-add-form-routing.module';

import { TelehandlerAddFormPage } from './telehandler-add-form.page';

import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TelehandlerAddFormPageRoutingModule
  ],
  declarations: [
    TelehandlerAddFormPage,
    HeaderComponent
  ]
})
export class TelehandlerAddFormPageModule { }
