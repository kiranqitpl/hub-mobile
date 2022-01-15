import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankAccountPageRoutingModule } from './bank-account-routing.module';

import { BankAccountPage } from './bank-account.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankAccountPageRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],
  declarations: [BankAccountPage]
})
export class BankAccountPageModule {}
