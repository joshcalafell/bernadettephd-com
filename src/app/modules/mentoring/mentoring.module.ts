import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MentoringRoutingModule } from './mentoring-routing.module';
import { MentoringComponent } from './mentoring.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MentoringComponent, MentorshipComponent],
  imports: [CommonModule, MentoringRoutingModule, SharedModule]
})
export class MentoringModule {}
