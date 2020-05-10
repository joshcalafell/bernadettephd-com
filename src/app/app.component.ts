import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Subscription } from 'rxjs';

import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'bmc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bernadettephd-com';
  reference: string;
  sub: Subscription;
  isDarkTheme: Observable<boolean>;

  profileUrl: Observable<string | null>;
  constructor(
    private themeService: ThemeService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isdarkTheme;
  }
}
