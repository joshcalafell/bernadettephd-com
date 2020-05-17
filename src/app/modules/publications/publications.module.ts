import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SharedModule } from '../shared/shared.module';
import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsComponent } from './publications.component';
import { ListItemPublicationsComponent } from './list-item-publications/list-item-publications.component';

@NgModule({
  declarations: [PublicationsComponent, ListItemPublicationsComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    SharedModule,
    AngularFireStorageModule
  ],
  providers: []
})
export class PublicationsModule {}
