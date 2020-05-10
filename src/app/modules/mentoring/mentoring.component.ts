import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { Mentorship } from './mentorship/mentorship.model';
import { Subscription } from 'rxjs';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'bmc-mentoring',
  templateUrl: './mentoring.component.html',
  styleUrls: ['./mentoring.component.scss']
})
export class MentoringComponent implements OnInit {
  tabs: string[] = [];

  mentorships: Mentorship[];
  sub: Subscription;

  loading: boolean = true;

  constructor(private fs: FirestoreService, private seo: SeoService) {}

  ngOnInit() {
    this.performSEO();
    this.requestData();
  }

  requestData() {
    this.sub = this.fs
      .getMentorships()
      .valueChanges()
      .subscribe(res => {
        this.mentorships = res;
        this.loading = false;
        this.mentorships.forEach((item: Mentorship) => {
          if (this.tabs.indexOf(item.type) === -1) {
            this.tabs.push(item.type);
          }
        });
      });
  }

  performSEO() {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Teaching and Mentorship',
      description:
        'A list of awards and honors given to Dr. Bernadette M. Calafell'
    });
  }

  getMentorshipsByTab(tab: string) {
    return this.mentorships.filter(
      mentorship => mentorship.type.toLowerCase() === tab.toLowerCase()
    );
  }

  getCountByTab(tab: string): number {
    return this.mentorships.filter(
      mentorship => mentorship.type.toLowerCase() === tab.toLowerCase()
    ).length;
  }
}
