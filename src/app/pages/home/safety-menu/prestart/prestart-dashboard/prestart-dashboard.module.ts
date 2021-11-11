import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestartDashboardPageRoutingModule } from './prestart-dashboard-routing.module';

import { PrestartDashboardPage } from './prestart-dashboard.page';

import { HeaderComponent } from 'src/app/shared-component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestartDashboardPageRoutingModule
  ],
  declarations: [
    PrestartDashboardPage,
    HeaderComponent
  ]
})
export class PrestartDashboardPageModule { }
