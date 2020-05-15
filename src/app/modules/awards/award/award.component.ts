import { Component, Input } from '@angular/core';
import { Award } from './award.model';

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
