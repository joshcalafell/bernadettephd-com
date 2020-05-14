import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhilosophyRoutingModule } from './philosophy-routing.module';
import { PhilosophyComponent } from './philosophy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PhilosophyComponent],
  imports: [CommonModule, PhilosophyRoutingModule, SharedModule]
})
export class PhilosophyModule {}
