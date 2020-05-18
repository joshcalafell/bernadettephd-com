import { Component, OnInit, Input } from '@angular/core';
import { ICommentary } from './commentary.model';

@Component({
  selector: 'bmc-commmentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {
  @Input() public item: ICommentary;
  @Input() public lastItem: boolean;

  constructor() {}

  public ngOnInit(): void {}
}
