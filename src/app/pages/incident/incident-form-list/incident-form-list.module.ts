import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentFormListPageRoutingModule } from './incident-form-list-routing.module';

import { IncidentFormListPage } from './incident-form-list.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentFormListPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [IncidentFormListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IncidentFormListPageModule {}
