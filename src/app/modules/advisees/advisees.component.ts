import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { Advisee } from './advisee/advisee.model';
import { Subscription } from 'rxjs';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'bmc-advisees',
  templateUrl: './advisees.component.html',
  styleUrls: ['./advisees.component.scss']
})
export class AdviseesComponent implements OnInit {
  tabs: string[] = [];

  advisees: Advisee[];
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
        this.advisees = res;
        this.loading = false;
        this.advisees.forEach((item: Advisee) => {
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

  getAdviseesByTab(tab: string) {
    return this.advisees.filter(
      mentorship => mentorship.type.toLowerCase() === tab.toLowerCase()
    );
  }

  getCountByTab(tab: string): number {
    return this.advisees.filter(
      mentorship => mentorship.type.toLowerCase() === tab.toLowerCase()
    ).length;
  }
}
