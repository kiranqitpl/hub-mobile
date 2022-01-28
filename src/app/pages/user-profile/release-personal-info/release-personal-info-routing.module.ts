import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasePersonalInfoPage } from './release-personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: ReleasePersonalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasePersonalInfoPageRoutingModule {}
