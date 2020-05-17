import { Component, OnInit, Input } from '@angular/core';
import { last } from 'rxjs/operators';

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
  @Input() lastItem: boolean;

  constructor() {
    console.log(
      this.title,
      this.subtitle,
      this.date,
      this.line1,
      this.lastItem
    );
  }

  ngOnInit(): void {}
}
