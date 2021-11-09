import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestartDashboardPage } from './prestart-dashboard.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'prestart-dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: PrestartDashboardPage,
    // children: [
    //   {
    //     path: 'vehicle-hoist-add-form',
    //     loadChildren: () => import('../vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.module').then(m => m.VehicleHoistAddFormPageModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestartDashboardPageRoutingModule { }
