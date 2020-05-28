import { Component, OnInit } from '@angular/core';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';
import { fadeIn } from 'src/app/animations/fade-in';

@Component({
  selector: 'bmc-advisees',
  templateUrl: './advisees.component.html',
  styleUrls: ['./advisees.component.scss'],
  animations: [fadeIn]
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
