import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Publication } from './publication/publication.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../../components/login/dialog-login/dialog-login.component';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';
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
    const dialogRef = super.dialog.open(DialogLoginComponent);
  }
}
