import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Award } from 'src/app/modules/awards/award/award.model';
import { Commentary } from 'src/app/modules/commentaries/commentary/commentary.model';
import { Advisee } from 'src/app/modules/advisees/advisee/advisee.model';
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
        console.log('collection', collection);
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

  // getAwards() {
  //   // TODO: Study Event Loop (microtasks vs. macrotasks) => https://www.youtube.com/watch?v=vn3tm0quoqE
  //   return this.database.collection<Award>('awards', ref =>
  //     ref.orderBy('date', 'desc')
  //   );
  // }

  getMediaCommentary() {
    return this.database.collection<Commentary>('media-commentary', ref =>
      ref.orderBy('date', 'desc')
    );
  }

  getMentorships() {
    return this.database.collection<Advisee>('mentoring', ref =>
      ref.orderBy('year', 'desc').orderBy('student', 'desc')
    );
  }

  getPresentations() {
    return this.database.collection<Presentation>('presentations', ref =>
      ref.orderBy('date', 'desc')
    );
  }

  getPublications() {
    return this.database.collection<Publication>('publications', ref =>
      ref.orderBy('year', 'desc').orderBy('title', 'desc')
    );
  }
}
