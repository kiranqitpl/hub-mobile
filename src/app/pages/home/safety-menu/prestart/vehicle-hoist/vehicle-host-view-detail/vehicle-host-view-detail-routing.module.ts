import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleHostViewDetailPage } from './vehicle-host-view-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleHostViewDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleHostViewDetailPageRoutingModule {}
