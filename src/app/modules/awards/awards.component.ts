import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Award } from './award/award.model';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';
import { RouteBaseComponent } from 'src/app/components/route-base/route-base.component';

@Component({
  selector: 'bmc-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent extends RouteBaseComponent implements OnInit {
  constructor(public database: FirestoreService, public seo: SeoService) {
    super(database, seo);
  }

  ngOnInit() {
    super.initSEO(
      'Awards',
      'A list of awards granted to Bernadette M. Calafell Ph.D.'
    );
    super.initData('awards');
  }

  public getItemsByTab(tab: string) {
    return super.getItemsByTab(tab);
  }

  public getCountByTab(tab: string): number {
    return super.getCountByTab(tab);
  }
}
