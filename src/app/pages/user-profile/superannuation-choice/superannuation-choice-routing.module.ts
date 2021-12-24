import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperannuationChoicePage } from './superannuation-choice.page';

const routes: Routes = [
  {
    path: '',
    component: SuperannuationChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperannuationChoicePageRoutingModule {}
