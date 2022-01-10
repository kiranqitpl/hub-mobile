import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EmpSearchComponent } from './emp-search/emp-search.component';

import { ManagersPage } from './managers/managers.page';
import { ManagersPageModule } from './managers/managers.module';


@NgModule({
  declarations: [HeaderComponent,EmpSearchComponent],
  imports: [CommonModule,ManagersPageModule],
  exports: [HeaderComponent,EmpSearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModuleModule { }
