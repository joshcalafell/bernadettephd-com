import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ListItemBaseComponent } from '../list-item-base/list-item-base.component';
import { Publication } from 'src/app/modules/publications/publication/publication.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { DialogLoginComponent } from '../login/dialog-login/dialog-login.component';
import { MatDialog } from '@angular/material/dialog';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'bmc-list-item-publications',
  templateUrl: './list-item-publications.component.html',
  styleUrls: ['./list-item-publications.component.scss']
})
export class ListItemPublicationsComponent extends ListItemBaseComponent
  implements OnInit {
  @Input() authorized: boolean;
  @Input() publisherLink?: string;
  @Input() reference?: any;
  @Input() year?: number;

  constructor(private storage: AngularFireStorage, public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      // width: '250px',
      data: {}
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

  savePDF(title: string, reference: any) {
    const storage = this.storage.storage;
    storage
      .ref(reference.path)
      .getDownloadURL()
      .then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
          FileSaver.saveAs(blob, title);
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch(function(error) {
        // Handle any errors
      });
  }
}
