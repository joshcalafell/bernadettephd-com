import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bmc-list-item-commentaries',
  templateUrl: './list-item-commentaries.component.html',
  styleUrls: ['./list-item-commentaries.component.scss']
})
export class ListItemCommentariesComponent implements OnInit {
  @Input() title?: string;
  @Input() author_first?: string;
  @Input() author_last?: string;
  @Input() link?: string;
  @Input() date: any;
  @Input() publication?: string;
  @Input() lastItem: boolean;
  constructor() {}

  ngOnInit(): void {}
}
