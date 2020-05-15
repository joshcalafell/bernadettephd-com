import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Commentary } from './commentary/commentary.model';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-commmentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.scss']
})
export class CommentariesComponent extends CollectionBaseComponent
  implements OnInit {
  // SEO
  title: string = 'Media Commentary';
  description: string =
    'A list of media commentaries by Bernadette M. Calafell Ph.D';

  // Firestore collection name
  collection: string = 'media-commentary';

  ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }
}
