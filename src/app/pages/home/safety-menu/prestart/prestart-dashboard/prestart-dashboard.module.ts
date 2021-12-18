import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestartDashboardPageRoutingModule } from './prestart-dashboard-routing.module';

import { PrestartDashboardPage } from './prestart-dashboard.page';

import { HeaderComponent } from 'src/app/shared-component/header/header.component';

import { DragAndDropModule } from 'angular-draggable-droppable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestartDashboardPageRoutingModule,
    DragAndDropModule
  ],
  declarations: [
    PrestartDashboardPage,
    HeaderComponent
  ]
})
export class PrestartDashboardPageModule { }
