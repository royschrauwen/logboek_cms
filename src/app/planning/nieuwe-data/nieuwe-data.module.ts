import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NieuweDataPageRoutingModule } from './nieuwe-data-routing.module';

import { NieuweDataPage } from './nieuwe-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NieuweDataPageRoutingModule
  ],
  declarations: [NieuweDataPage]
})
export class NieuweDataPageModule {}
