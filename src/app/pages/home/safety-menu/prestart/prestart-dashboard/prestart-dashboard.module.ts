import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestartDashboardPageRoutingModule } from './prestart-dashboard-routing.module';

import { PrestartDashboardPage } from './prestart-dashboard.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

import { DragAndDropModule } from 'angular-draggable-droppable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestartDashboardPageRoutingModule,
    DragAndDropModule,
    SharedModuleModule
  ],
  declarations: [
    PrestartDashboardPage
  ]
})
export class PrestartDashboardPageModule { }
