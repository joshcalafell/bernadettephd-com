import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Award } from 'src/app/modules/awards/award.model';
import { Commentary } from 'src/app/modules/commentaries/commentary.model';
import { Advisee } from 'src/app/modules/advisees/advisee.model';
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
        return this.database.collection<Award>('awards', ref =>
          ref.orderBy('date', 'desc')
        );
      }

      case 'media-commentary': {
        return this.database.collection<Commentary>('media-commentary', ref =>
          ref.orderBy('date', 'desc')
        );
      }

      case 'mentoring': {
        return this.database.collection<Advisee>('mentoring', ref =>
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
