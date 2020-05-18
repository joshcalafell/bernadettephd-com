import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdviseeComponent } from './advisee/advisee.component';
import { AdviseesRoutingModule } from './advisees-routing.module';
import { AdviseesComponent } from './advisees.component';

@NgModule({
  declarations: [AdviseesComponent, AdviseeComponent],
  imports: [CommonModule, AdviseesRoutingModule, SharedModule]
})
export class AdviseesModule {}
