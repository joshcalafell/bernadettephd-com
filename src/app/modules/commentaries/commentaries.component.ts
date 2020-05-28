import { Component, OnInit } from '@angular/core';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';
import { fadeIn } from 'src/app/animations/fade-in';

@Component({
  selector: 'bmc-commmentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.scss'],
  animations: [fadeIn]
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
