import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChronometerPageRoutingModule } from './chronometer-routing.module';

import { ChronometerPage } from './chronometer.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronometerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChronometerPage]
})
export class ChronometerPageModule {}
