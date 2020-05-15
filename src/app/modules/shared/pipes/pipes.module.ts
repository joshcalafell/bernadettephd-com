import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from '../pipes/safe-html/safe-html.pipe';
import { YearPipe } from './year/year.pipe';

const pipes = [SafeHtmlPipe, YearPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes]
})
export class PipesModule {}
