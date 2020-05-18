import { Component, OnInit } from '@angular/core';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-commmentaries',
  styleUrls: ['./commentaries.component.scss'],
  templateUrl: './commentaries.component.html'
})
export class CommentariesComponent extends CollectionBaseComponent
  implements OnInit {
  // SEO
  public title = 'Media ICommentary';
  public description =
    'A list of media commentaries by Bernadette M. Calafell Ph.D';

  // Firestore collection name
  public collection = 'media-commentary';

  public ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }
}
