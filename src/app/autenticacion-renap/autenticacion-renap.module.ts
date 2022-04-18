import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutenticacionRenapPageRoutingModule } from './autenticacion-renap-routing.module';

import { AutenticacionRenapPage } from './autenticacion-renap.page';
import { SelphiProvider } from '../services/selphi-provider/selphi.provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutenticacionRenapPageRoutingModule,
  ],
  declarations: [AutenticacionRenapPage],
  providers: [
    SelphiProvider
  ]
})
export class AutenticacionRenapPageModule {}
