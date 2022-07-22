import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NieuweGebruikerPage } from './nieuwe-gebruiker.page';

const routes: Routes = [
  {
    path: '',
    component: NieuweGebruikerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NieuweGebruikerPageRoutingModule {}
