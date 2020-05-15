import { Component, OnInit } from '@angular/core';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-advisees',
  templateUrl: './advisees.component.html',
  styleUrls: ['./advisees.component.scss']
})
export class AdviseesComponent extends CollectionBaseComponent
  implements OnInit {
  title: string = 'Advisees';
  description: string = 'A list of advisees of Bernadette M. Calafell Ph.D';

  // Firestore collection name
  collection: string = 'mentoring';

  ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }
}
