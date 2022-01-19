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
  {
    path: 'prof-dev-form',
    loadChildren: () => import('./prof-dev-form/prof-dev-form.module').then( m => m.ProfDevFormPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrPageRoutingModule {}
