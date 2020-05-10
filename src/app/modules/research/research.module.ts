import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';

@NgModule({
  declarations: [ResearchComponent],
  imports: [CommonModule, ResearchRoutingModule, SharedModule]
})
export class ResearchModule {}
