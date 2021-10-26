import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentFormPage } from './incident-form.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentFormPageRoutingModule {}
