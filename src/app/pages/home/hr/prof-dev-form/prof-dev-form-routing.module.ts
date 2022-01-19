import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfDevFormPage } from './prof-dev-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProfDevFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfDevFormPageRoutingModule {}
