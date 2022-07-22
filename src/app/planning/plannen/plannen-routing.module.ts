import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlannenPage } from './plannen.page';

const routes: Routes = [
  {
    path: '',
    component: PlannenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannenPageRoutingModule {}
