import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestartDashboardPage } from './prestart-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PrestartDashboardPage,
  },
  // {
  //   path: 'telehandler',
  //   loadChildren: () => import('../../prestart/telehandler/telehandler.module').then(m => m.TelehandlerPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestartDashboardPageRoutingModule { }
