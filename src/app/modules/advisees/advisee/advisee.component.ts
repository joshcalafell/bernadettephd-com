import { Component, OnInit, Input } from '@angular/core';
import { Advisee } from './advisee.model';

@Component({
  selector: 'bmc-advisee',
  templateUrl: './advisee.component.html',
  styleUrls: ['./advisee.component.scss']
})
export class AdviseeComponent implements OnInit {
  @Input() advisee: Advisee;
  @Input() lastItem: boolean;

  constructor() {}

  ngOnInit(): void {}
}
