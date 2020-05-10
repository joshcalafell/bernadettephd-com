import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationsComponent } from './presentations.component';

const routes: Routes = [{ path: '', component: PresentationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationsRoutingModule {}
