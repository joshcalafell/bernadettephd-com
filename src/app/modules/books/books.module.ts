import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, SharedModule]
})
export class BooksModule {}
