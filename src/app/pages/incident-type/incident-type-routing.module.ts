import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentTypePage } from './incident-type.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentTypePageRoutingModule {}
