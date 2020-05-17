import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bmc-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle?: string;
  @Input() date?: any;
  @Input() line1?: string;
  @Input() line2?: string;
  @Input() line3?: string;
  @Input() line4?: string;
  @Input() lastItem: boolean;
  @Input() author_first?: string;
  @Input() author_last?: string;

  constructor() {}

  ngOnInit(): void {}
}
