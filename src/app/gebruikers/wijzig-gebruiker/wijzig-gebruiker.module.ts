import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WijzigGebruikerPageRoutingModule } from './wijzig-gebruiker-routing.module';

import { WijzigGebruikerPage } from './wijzig-gebruiker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WijzigGebruikerPageRoutingModule
  ],
  declarations: [WijzigGebruikerPage]
})
export class WijzigGebruikerPageModule {}
