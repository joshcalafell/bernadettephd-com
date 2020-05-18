import { Component, OnInit } from '@angular/core';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-awards',
  styleUrls: ['./awards.component.scss'],
  templateUrl: './awards.component.html'
})
export class AwardsComponent extends CollectionBaseComponent implements OnInit {
  // SEO
  public title = 'Awards';
  public description =
    'A list of awards granted to Bernadette M. Calafell Ph.D';

  // Firestore collection name
  public collection = 'awards';

  public ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }
}
