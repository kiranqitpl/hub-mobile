import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSectionPage } from './form-section.page';

const routes: Routes = [
  {
    path: '',
    component: FormSectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSectionPageRoutingModule {}
