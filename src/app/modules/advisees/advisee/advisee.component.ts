import { Component, Input } from '@angular/core';
import { IAdvisee } from './advisee.model';

@Component({
  selector: 'bmc-advisee',
  styleUrls: ['./advisee.component.scss'],
  templateUrl: './advisee.component.html'
})
export class AdviseeComponent {
  @Input() private item: IAdvisee;
  @Input() private lastItem: boolean;

  constructor() {}
}
