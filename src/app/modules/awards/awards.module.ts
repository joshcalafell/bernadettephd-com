import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsComponent } from './awards.component';

@NgModule({
  declarations: [AwardsComponent],
  imports: [CommonModule, AwardsRoutingModule, SharedModule]
})
export class AwardsModule {}
