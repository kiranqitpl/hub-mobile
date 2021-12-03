import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraneViewDetailPage } from './crane-view-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CraneViewDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CraneViewDetailPageRoutingModule {}
