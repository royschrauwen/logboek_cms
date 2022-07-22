import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GebruikersPageRoutingModule } from './gebruikers-routing.module';

import { GebruikersPage } from './gebruikers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GebruikersPageRoutingModule
  ],
  declarations: [GebruikersPage]
})
export class GebruikersPageModule {}
