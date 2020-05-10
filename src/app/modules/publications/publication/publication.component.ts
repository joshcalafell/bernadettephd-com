import { Component, OnInit, Input } from '@angular/core';
import { Publication } from './publication.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../../../components/login/dialog-login/dialog-login.component';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'bmc-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input() publication: Publication;
  @Input() lastItem: boolean;

  tabs: string[] = [];

  profileUrl: Observable<string | null>;

  link: string;

  constructor(
    private storage: AngularFireStorage,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      // width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  savePDF(publication: Publication) {
    const storage = this.storage.storage;
    storage
      .ref(publication.reference.path)
      .getDownloadURL()
      .then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
          FileSaver.saveAs(blob, publication.title);
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch(function(error) {
        // Handle any errors
      });
  }
}
