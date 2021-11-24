import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyMenuPage } from './safety-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyMenuPage
  },
  {
    path: 'prestart-dashboard',
    loadChildren: () => import('./prestart/prestart-dashboard/prestart-dashboard.module').then(m => m.PrestartDashboardPageModule)
  },
  {
    path: 'incident-form',
    loadChildren: () => import('./incident/incident-form/incident-form.module').then(m => m.IncidentFormPageModule)
  },
  {
    path: 'vehicle-hoist-add-form',
    loadChildren: () => import('./prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.module').then(m => m.VehicleHoistAddFormPageModule)
  },
  {
    path: 'telehandler-add-form',
    loadChildren: () => import('./prestart/telehandler/telehandler-add-form/telehandler-add-form.module').then( m => m.TelehandlerAddFormPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyMenuPageRoutingModule { }
