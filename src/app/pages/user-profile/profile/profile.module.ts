import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

// import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule,
    // PdfViewerModule
  ],
  declarations: [ProfilePage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePageModule { }
