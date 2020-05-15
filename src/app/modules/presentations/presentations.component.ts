import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Presentation } from './presentation/presentation.model';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-presentartions',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss']
})
export class PresentationsComponent extends CollectionBaseComponent
  implements OnInit {
  // SEO
  title: string = 'Presentations';
  description: string =
    'A list of presentations by Bernadette M. Calafell Ph.D';

  // Firestore collection name
  collection: string = 'presentations';

  ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }
}
