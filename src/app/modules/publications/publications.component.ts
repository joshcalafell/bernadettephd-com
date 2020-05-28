import { Component, OnInit } from '@angular/core';
import { DialogLoginComponent } from '../../components/login/dialog-login/dialog-login.component';
import { CollectionBaseComponent } from 'src/app/components/collection-base/collection.base.component';

@Component({
  selector: 'bmc-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent extends CollectionBaseComponent
  implements OnInit {
  // SEO
  title: string = 'Publications';
  description: string = 'A list of publications by Bernadette M. Calafell Ph.D';

  // Firestore collection name
  collection: string = 'publications';

  ngOnInit() {
    super.initSEO(this.title, this.description);
    super.fetchCollection(this.collection);
  }

  openDialog(): void {
    super.openLoginDialog();
  }
}
