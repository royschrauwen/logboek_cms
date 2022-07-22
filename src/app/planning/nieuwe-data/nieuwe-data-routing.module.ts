import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NieuweDataPage } from './nieuwe-data.page';

const routes: Routes = [
  {
    path: '',
    component: NieuweDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NieuweDataPageRoutingModule {}
