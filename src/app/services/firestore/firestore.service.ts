import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { IAward } from 'src/app/modules/awards/award/award.model';
import { ICommentary } from 'src/app/modules/commentaries/commentary/commentary.model';
import { IAdvisee } from 'src/app/modules/advisees/advisee/advisee.model';
import { Presentation } from 'src/app/modules/presentations/presentation/presentation.model';
import { Publication } from 'src/app/modules/publications/publication/publication.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private database: AngularFirestore) {}

  getCollection(collection: string): AngularFirestoreCollection<any> {
    switch (collection) {
      case 'awards': {
        return this.database.collection<IAward>('awards', ref =>
          ref.orderBy('date', 'desc')
        );
      }

      case 'media-commentary': {
        return this.database.collection<ICommentary>('media-commentary', ref =>
          ref.orderBy('date', 'desc')
        );
      }

      case 'mentoring': {
        return this.database.collection<IAdvisee>('mentoring', ref =>
          ref.orderBy('year', 'desc').orderBy('student', 'desc')
        );
      }

      case 'presentations': {
        return this.database.collection<Presentation>('presentations', ref =>
          ref.orderBy('date', 'desc')
        );
      }

      case 'publications': {
        return this.database.collection<Publication>('publications', ref =>
          ref.orderBy('year', 'desc').orderBy('title', 'desc')
        );
      }
    }
  }
}
