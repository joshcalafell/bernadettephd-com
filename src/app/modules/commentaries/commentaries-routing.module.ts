import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentariesComponent } from './commentaries.component';

const routes: Routes = [{ path: '', component: CommentariesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentaryRoutingModule {}
