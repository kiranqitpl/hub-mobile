import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ManagersPage } from './managers/managers.page';


@NgModule({
  declarations: [HeaderComponent, ManagersPage],
  imports: [CommonModule],
  exports: [HeaderComponent, ManagersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModuleModule { }
