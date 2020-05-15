import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailLoginComponent } from './components/login/email-login/email-login.component';
import { GoogleSigninDirective } from './components/login/google-signin.directive';
import { NavWrapperComponent } from './components/nav-wrapper/nav-wrapper.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterDashboardComponent } from './components/footer-dashboard/footer-dashboard.component';
import { DialogLoginComponent } from './components/login/dialog-login/dialog-login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/shared/material/app-material.module';
import { PipesModule } from './modules/shared/pipes/pipes.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmailLoginComponent,
    GoogleSigninDirective,
    AppComponent,
    NavWrapperComponent,
    FooterComponent,
    FooterDashboardComponent,
    DialogLoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    PipesModule,
    // LoginModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  exports: [GoogleSigninDirective, CommonModule],

  bootstrap: [AppComponent]
})
export class AppModule {}
