import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SafeHtmlPipe } from '../pipes/safe-html/safe-html.pipe';
import { TimestampPipe } from './timestamp/timestamp.pipe';

const pipes = [SafeHtmlPipe, TimestampPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes]
})
export class PipesModule {}
