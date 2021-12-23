import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'safety-menu',
    loadChildren: () => import('../../pages/home/safety-menu/safety-menu.module').then(m => m.SafetyMenuPageModule)
  },
  {
    path: 'hr',
    loadChildren: () => import('./hr/hr.module').then( m => m.HrPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
