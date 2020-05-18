import { Component, OnInit } from '@angular/core';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-advisees',
  styleUrls: ['./advisees.component.scss'],
  templateUrl: './advisees.component.html'
})
export class AdviseesComponent extends CollectionBaseComponent
  implements OnInit {
  public title = 'Advisees';
  public description = 'A list of advisees of Bernadette M. Calafell Ph.D';

  // Firestore collection name
  public collection = 'mentoring';

  public ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }
}
