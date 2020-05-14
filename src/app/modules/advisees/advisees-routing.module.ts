import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdviseesComponent } from './advisees.component';

const routes: Routes = [{ path: '', component: AdviseesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviseesRoutingModule {}
