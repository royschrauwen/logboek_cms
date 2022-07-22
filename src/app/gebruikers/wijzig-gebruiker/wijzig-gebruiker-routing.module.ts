import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WijzigGebruikerPage } from './wijzig-gebruiker.page';

const routes: Routes = [
  {
    path: '',
    component: WijzigGebruikerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WijzigGebruikerPageRoutingModule {}
