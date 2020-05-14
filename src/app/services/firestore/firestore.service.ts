import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Award } from 'src/app/modules/awards/award/award.model';
import { Commentary } from 'src/app/modules/commentaries/commentary/commentary.model';
import { Advisee } from 'src/app/modules/advisees/advisee/advisee.model';
import { Presentation } from 'src/app/modules/presentations/presentation/presentation.model';
import { Publication } from 'src/app/modules/publications/publication/publication.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private db: AngularFirestore) {}

  getAwards() {
    // TODO: Study Event Loop (microtasks vs. macrotasks) => https://www.youtube.com/watch?v=vn3tm0quoqE
    return this.db.collection<Award>('awards', ref =>
      ref.orderBy('date', 'desc')
    );
  }

  getMediaCommentary() {
    return this.db.collection<Commentary>('media-commentary', ref =>
      ref.orderBy('date', 'desc')
    );
  }

  getMentorships() {
    return this.db.collection<Advisee>('mentoring', ref =>
      ref.orderBy('year', 'desc').orderBy('student', 'desc')
    );
  }

  getPresentations() {
    return this.db.collection<Presentation>('presentations', ref =>
      ref.orderBy('date', 'desc')
    );
  }

  getPublications() {
    return this.db.collection<Publication>('publications', ref => ref);
  }
}
