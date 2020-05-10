import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Presentation } from './presentation/presentation.model';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'bmc-presentartions',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss']
})
export class PresentationsComponent implements OnInit {
  presentations: Presentation[];
  sub: Subscription;

  loading: boolean = true;

  constructor(public fs: FirestoreService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Presentations',
      description: 'A list of presentations given to Dr. Bernadette M. Calafell'
    });

    this.sub = this.fs
      .getPresentations()
      .valueChanges()
      .subscribe(p => {
        this.presentations = p;
        this.loading = false;
      });
  }
}
