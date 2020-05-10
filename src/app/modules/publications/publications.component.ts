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

  loading: boolean = false;

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

    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        if (auth.emailVerified) {
          this.performAuthorizedActions();
        }
      } else {
        this.performUnauthorizedActions();
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  performAuthorizedActions() {
    if (!this.loading) {
      this.loading = true;
    }
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

  performUnauthorizedActions() {
    this.publications = [];
    this.tabs = [];
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getPublicationsByTab(tab: string) {
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
