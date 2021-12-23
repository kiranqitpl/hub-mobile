import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnBoardingPageRoutingModule } from './on-boarding-routing.module';

import { OnBoardingPage } from './on-boarding.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnBoardingPageRoutingModule,
    SharedModuleModule,
    NgxDatatableModule,
    NgxPaginationModule,
  ],
  declarations: [OnBoardingPage]
})
export class OnBoardingPageModule { }
