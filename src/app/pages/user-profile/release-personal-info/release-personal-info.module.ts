import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReleasePersonalInfoPageRoutingModule } from './release-personal-info-routing.module';

import { ReleasePersonalInfoPage } from './release-personal-info.page';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReleasePersonalInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReleasePersonalInfoPage],
  providers : [
    Base64ToGallery
  ]
})
export class ReleasePersonalInfoPageModule {}
