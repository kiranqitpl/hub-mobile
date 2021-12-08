import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentFormListPageRoutingModule } from './incident-form-list-routing.module';

import { IncidentFormListPage } from './incident-form-list.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HeaderComponent } from 'src/app/shared-component/header/header.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentFormListPageRoutingModule,
    NgxDatatableModule,
    NgxPaginationModule
  ],
  declarations: [
    IncidentFormListPage,
    HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IncidentFormListPageModule { }
