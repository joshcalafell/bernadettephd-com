import { Component, OnInit, Input } from '@angular/core';
import { Mentorship } from './mentorship.model';

@Component({
  selector: 'bmc-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.scss']
})
export class MentorshipComponent implements OnInit {
  @Input() mentorship: Mentorship;
  @Input() lastItem: boolean;

  constructor() {
    console.log('mentorship', this.mentorship);
  }

  ngOnInit(): void {}
}
