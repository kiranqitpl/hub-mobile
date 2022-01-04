import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule,
    PdfViewerModule],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
