import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AwardsComponent } from './awards.component';

const routes: Routes = [{ path: '', component: AwardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardsRoutingModule {}
