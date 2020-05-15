import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AwardComponent } from './award/award.component';
import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsComponent } from './awards.component';
import { RouteBaseComponent } from 'src/app/components/route-base/route-base.component';

@NgModule({
  declarations: [AwardsComponent, AwardComponent],
  imports: [CommonModule, AwardsRoutingModule, SharedModule]
})
export class AwardsModule {}
