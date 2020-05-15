import { Component, OnInit } from '@angular/core';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent extends CollectionBaseComponent implements OnInit {
  // SEO
  title: string = 'Awards';
  description: string =
    'A list of awards granted to Bernadette M. Calafell Ph.D';

  // Firestore collection name
  collection: string = 'awards';

  ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }
}
