import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { SharedModule } from '../shared/shared.module';
import { PresentationComponent } from './presentation/presentation.component';
import { PresentationMapComponent } from './presentation-map/presentation-map.component';
import { PresentationsRoutingModule } from './presentations-routing.module';
import { PresentationsComponent } from './presentations.component';

@NgModule({
  declarations: [
    PresentationComponent,
    PresentationsComponent,
    PresentationMapComponent
  ],
  imports: [
    CommonModule,
    PresentationsRoutingModule,
    SharedModule,
    GoogleMapsModule
  ]
})
export class PresentationsModule {}
