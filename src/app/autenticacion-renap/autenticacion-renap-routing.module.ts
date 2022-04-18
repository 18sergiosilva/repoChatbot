import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticacionRenapPage } from './autenticacion-renap.page';

const routes: Routes = [
  {
    path: '',
    component: AutenticacionRenapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticacionRenapPageRoutingModule {}
