import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommentaryRoutingModule } from './commentaries-routing.module';
import { CommentariesComponent } from './commentaries.component';
import { SharedModule } from '../shared/shared.module';
import { ListItemCommentariesComponent } from './list-item-commentaries/list-item-commentaries.component';

@NgModule({
  declarations: [CommentariesComponent, ListItemCommentariesComponent],
  imports: [CommonModule, SharedModule, CommentaryRoutingModule]
})
export class CommentariesModule {}
