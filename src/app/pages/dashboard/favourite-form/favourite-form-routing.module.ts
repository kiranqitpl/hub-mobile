import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteFormPage } from './favourite-form.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteFormPageRoutingModule {}
