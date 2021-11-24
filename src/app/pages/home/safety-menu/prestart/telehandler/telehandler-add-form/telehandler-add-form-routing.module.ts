import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelehandlerAddFormPage } from './telehandler-add-form.page';

const routes: Routes = [
  {
    path: '',
    component: TelehandlerAddFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelehandlerAddFormPageRoutingModule {}
