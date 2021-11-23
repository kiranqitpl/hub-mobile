import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelehandlerPageRoutingModule } from './telehandler-routing.module';

import { TelehandlerPage } from './telehandler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelehandlerPageRoutingModule
  ],
  declarations: [TelehandlerPage]
})
export class TelehandlerPageModule {}
