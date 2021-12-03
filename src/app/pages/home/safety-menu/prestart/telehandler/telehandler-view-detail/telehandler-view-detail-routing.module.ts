import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelehandlerViewDetailPage } from './telehandler-view-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TelehandlerViewDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelehandlerViewDetailPageRoutingModule {}
