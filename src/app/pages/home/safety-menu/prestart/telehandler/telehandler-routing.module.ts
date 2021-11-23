import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelehandlerPage } from './telehandler.page';

const routes: Routes = [
  {
    path: '',
    component: TelehandlerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelehandlerPageRoutingModule {}
