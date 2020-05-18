import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../../services/theme/theme.service';
import { DialogLoginComponent } from '../login/dialog-login/dialog-login.component';

@Component({
  selector: 'bmc-nav-wrapper',
  styleUrls: ['./nav-wrapper.component.scss'],
  templateUrl: './nav-wrapper.component.html'
})
export class NavWrapperComponent implements OnInit {
  public isDarkTheme: Observable<boolean>;

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result: any) => result.matches),
      shareReplay()
    );

  public isPhone$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Small)
    .pipe(
      map((result: any) => result.matches),
      shareReplay()
    );

  constructor(
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.isDarkTheme = this.themeService.isdarkTheme;
  }

  public toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      // width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
