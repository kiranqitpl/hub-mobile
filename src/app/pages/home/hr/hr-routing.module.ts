import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrPage } from './hr.page';

const routes: Routes = [
  {
    path: '',
    component: HrPage
  },
  {
    path: 'on-boarding',
    loadChildren: () => import('../hr/on-boarding/on-boarding.module').then( m => m.OnBoardingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrPageRoutingModule {}
