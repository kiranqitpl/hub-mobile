import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CraneAddFormPageRoutingModule } from './crane-add-form-routing.module';

import { CraneAddFormPage } from './crane-add-form.page';
import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraneAddFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CraneAddFormPage,
    HeaderComponent
  ]
})
export class CraneAddFormPageModule { }
