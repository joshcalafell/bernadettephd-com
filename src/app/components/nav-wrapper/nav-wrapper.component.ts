import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { ThemeService } from '../../services/theme/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../login/dialog-login/dialog-login.component';

@Component({
  selector: 'bmc-nav-wrapper',
  templateUrl: './nav-wrapper.component.html',
  styleUrls: ['./nav-wrapper.component.scss']
})
export class NavWrapperComponent {
  isDarkTheme: Observable<boolean>;

  // animal: string;
  // name: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isPhone$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Small)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isdarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

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
}
