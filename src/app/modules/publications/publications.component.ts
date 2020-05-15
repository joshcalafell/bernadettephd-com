import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Publication } from './publication/publication.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../../components/login/dialog-login/dialog-login.component';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'bmc-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  tabs: string[] = [];

  publications: Publication[];
  sub: Subscription;

  loading: boolean = true;

  constructor(
    private fs: FirestoreService,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Publications',
      description: 'A list of publications by Dr. Bernadette M. Calafell'
    });

    this.sub = this.fs
      .getPublications()
      .valueChanges()
      .subscribe(p => {
        this.publications = p;
        this.publications.forEach(publication => {
          if (this.tabs.indexOf(publication.type) === -1) {
            this.tabs.push(publication.type);
          }
        });
        this.loading = false;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent);
  }

  getPublicationsByTab(tab: string): Publication[] {
    return this.publications.filter(
      publication => publication.type.toLowerCase() === tab.toLowerCase()
    );
  }

  getCountByTab(tab: string): number {
    return this.publications.filter(
      publication => publication.type.toLowerCase() === tab.toLowerCase()
    ).length;
  }
}
