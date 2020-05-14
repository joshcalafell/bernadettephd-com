import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilosophyComponent } from './philosophy.component';

const routes: Routes = [{ path: '', component: PhilosophyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhilosophyRoutingModule {}
