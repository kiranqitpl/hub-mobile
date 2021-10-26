import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafetyMenuPage } from './safety-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafetyMenuPageRoutingModule {}
