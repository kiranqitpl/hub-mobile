import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteFormPageRoutingModule } from './favourite-form-routing.module';

import { FavouriteFormPage } from './favourite-form.page';
// import { HeaderComponent } from 'src/app/shared-component/header/header.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteFormPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    FavouriteFormPage,
  ],
})
export class FavouriteFormPageModule { }
