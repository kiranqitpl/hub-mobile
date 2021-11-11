import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestigationViewPage } from './investigation-view.page';

const routes: Routes = [
  {
    path: '',
    component: InvestigationViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestigationViewPageRoutingModule {}
