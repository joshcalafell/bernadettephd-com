import { Component, Input, OnInit } from '@angular/core';

import { Presentation } from './presentation.model';

@Component({
  selector: 'bmc-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  @Input() presentation: Presentation;
  @Input() lastItem: boolean;
  constructor() {}

  ngOnInit(): void {}
}
