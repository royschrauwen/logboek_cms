import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NieuweGebruikerPageRoutingModule } from './nieuwe-gebruiker-routing.module';

import { NieuweGebruikerPage } from './nieuwe-gebruiker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NieuweGebruikerPageRoutingModule
  ],
  declarations: [NieuweGebruikerPage]
})
export class NieuweGebruikerPageModule {}
