import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Award } from './award/award.model';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'bmc-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  @ViewChild('awardsSearch') searchInput: ElementRef;

  tabs: string[] = [];

  constructor(private fs: FirestoreService, private seo: SeoService) {}

  awards: Award[];
  sub: Subscription;

  loading: boolean = true;

  ngOnInit() {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Awards and Honors',
      description:
        'A list of awards and honors given to Dr. Bernadette M. Calafell'
    });

    this.sub = this.fs
      .getAwards()
      .valueChanges()
      .subscribe(p => {
        this.awards = p;
        this.loading = false;
        this.awards.forEach(award => {
          if (this.tabs.indexOf(award.type) === -1) {
            this.tabs.push(award.type);
          }
        });
      });
  }

  getAwardsByTab(tab: string) {
    return this.awards.filter(
      award => award.type.toLowerCase() === tab.toLowerCase()
    );
  }

  getCountByTab(tab: string): number {
    return this.awards.filter(
      award => award.type.toLowerCase() === tab.toLowerCase()
    ).length;
  }
}
