import { Component, OnInit, Input } from '@angular/core';
import { Commentary } from './commentary.model';

@Component({
  selector: 'bmc-commmentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {
  @Input() item: Commentary;
  @Input() lastItem: boolean;

  constructor() {}

  ngOnInit(): void {}
}
