import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteFormPageRoutingModule } from './favourite-form-routing.module';

import { FavouriteFormPage } from './favourite-form.page';
import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteFormPageRoutingModule
  ],
  declarations: [
    FavouriteFormPage,
    HeaderComponent
  ]
})
export class FavouriteFormPageModule {}
