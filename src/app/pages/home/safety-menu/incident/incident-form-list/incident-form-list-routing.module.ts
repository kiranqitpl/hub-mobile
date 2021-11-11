import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentFormListPage } from './incident-form-list.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentFormListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentFormListPageRoutingModule {}
