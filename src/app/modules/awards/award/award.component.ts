import { Component, Input } from '@angular/core';
import { Award } from './award.model';
import { RouteBaseComponent } from 'src/app/components/route-base/route-base.component';

@Component({
  selector: 'bmc-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent {
  @Input() item: Award;
  @Input() lastItem: boolean;

  constructor() {}
}
