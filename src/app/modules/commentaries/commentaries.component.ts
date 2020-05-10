import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Commentary } from './commentary/commentary.model';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'bmc-commmentaries',
  templateUrl: './commentaries.component.html',
  styleUrls: ['./commentaries.component.scss']
})
export class CommentariesComponent implements OnInit {
  constructor(private fs: FirestoreService, private seo: SeoService) {}

  commentaries: Commentary[];
  sub: Subscription;

  loading: boolean = true;

  ngOnInit() {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Media Commentary',
      description:
        'A list of media commentaries and appearances by Dr. Bernadette M. Calafell'
    });

    this.sub = this.fs
      .getMediaCommentary()
      .valueChanges()
      .subscribe(res => {
        this.commentaries = res;
        this.loading = false;
      });
  }
}
