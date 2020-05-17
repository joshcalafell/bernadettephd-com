import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AwardComponent } from './award/award.component';
import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsComponent } from './awards.component';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';

@NgModule({
  declarations: [AwardsComponent, AwardComponent, ListItemComponent],
  imports: [CommonModule, AwardsRoutingModule, SharedModule]
})
export class AwardsModule {}
