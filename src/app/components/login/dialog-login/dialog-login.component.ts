import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDialogData } from './dialog-data.model';

@Component({
  selector: 'bmc-dialog-login',
  styleUrls: ['./dialog-login.component.scss'],
  templateUrl: './dialog-login.component.html'
})
export class DialogLoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
    public afAuth: AngularFireAuth
  ) {}

  public ngOnInit() {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
