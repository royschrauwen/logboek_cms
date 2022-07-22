import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlannenPageRoutingModule } from './plannen-routing.module';

import { PlannenPage } from './plannen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlannenPageRoutingModule
  ],
  declarations: [PlannenPage]
})
export class PlannenPageModule {}
