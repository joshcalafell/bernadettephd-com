import { Component, Input } from '@angular/core';
import { IAward } from './award.model';

@Component({
  selector: 'bmc-award',
  styleUrls: ['./award.component.scss'],
  templateUrl: './award.component.html'
})
export class AwardComponent {
  @Input() public item: IAward;
  @Input() public lastItem: boolean;

  constructor() {}
}
