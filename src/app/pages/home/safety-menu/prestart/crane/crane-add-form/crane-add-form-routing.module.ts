import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraneAddFormPage } from './crane-add-form.page';

const routes: Routes = [
  {
    path: '',
    component: CraneAddFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CraneAddFormPageRoutingModule {}
