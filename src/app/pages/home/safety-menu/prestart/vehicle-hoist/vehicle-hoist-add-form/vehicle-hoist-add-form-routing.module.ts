import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleHoistAddFormPage } from './vehicle-hoist-add-form.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleHoistAddFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleHoistAddFormPageRoutingModule {}
