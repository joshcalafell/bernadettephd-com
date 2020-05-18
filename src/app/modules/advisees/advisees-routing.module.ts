import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdviseesComponent } from './advisees.component';

const routes: Routes = [{ path: '', component: AdviseesComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AdviseesRoutingModule {}
