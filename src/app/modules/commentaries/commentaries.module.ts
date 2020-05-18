import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommentaryRoutingModule } from './commentaries-routing.module';
import { CommentariesComponent } from './commentaries.component';
import { CommentaryComponent } from './commentary/commentary.component';

@NgModule({
  declarations: [CommentariesComponent, CommentaryComponent],
  imports: [CommonModule, SharedModule, CommentaryRoutingModule]
})
export class CommentariesModule {}
