import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Award } from './award.model';

@Component({
  selector: 'bmc-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent {
  @Input() award: Award;
  @Input() lastItem: boolean;

  constructor(public dialog: MatDialog) {}
}
