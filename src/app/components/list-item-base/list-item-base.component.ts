import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bmc-list-item-base',
  templateUrl: './list-item-base.component.html',
  styleUrls: ['./list-item-base.component.scss']
})
export class ListItemBaseComponent implements OnInit {
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
