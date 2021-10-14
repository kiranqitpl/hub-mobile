import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormListPageRoutingModule } from './form-list-routing.module';

import { FormListPage } from './form-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormListPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [FormListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormListPageModule {}
