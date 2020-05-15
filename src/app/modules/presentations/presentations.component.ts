import { Component, OnInit } from '@angular/core';
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
