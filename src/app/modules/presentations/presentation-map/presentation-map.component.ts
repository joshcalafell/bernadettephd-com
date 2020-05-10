import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Presentation } from '../presentation/presentation.model';
import PRESENTATION_MAP_STYLES from './presentation-map.styles';

@Component({
  selector: 'bmc-presentation-map',
  templateUrl: './presentation-map.component.html',
  styleUrls: ['./presentation-map.component.scss']
})
export class PresentationMapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: true }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  @Input() presentations: Presentation[];

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

  constructor(private breakpointObserver: BreakpointObserver) {}

  zoom = 4;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: PRESENTATION_MAP_STYLES
  };
  markers = [];
  infoContent = '';

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.center = {
    //     lat: 39.0997,
    //     lng: -94.5786,
    //   }
    // })

    this.center = {
      lat: 39.0997,
      lng: -94.5786
    };
    this.addMarkers(this.presentations);
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  addMarkers(presentations: Presentation[]) {
    presentations.forEach(presentation => {
      var contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading"><b>' +
        presentation.role +
        '</b></h1>' +
        '<div id="bodyContent">' +
        '<p><b><i>' +
        (presentation.title ? '"' + presentation.title + '"' : '') +
        '</b></i></p>' +
        '<p>' +
        (presentation.school ? presentation.school : '') +
        '</p>' +
        '<p>' +
        presentation.location +
        ' - ' +
        moment(presentation.date).format('MMM YYYY') +
        '</p>' +
        '</div>' +
        '</div>';

      this.markers.push({
        position: {
          lat: presentation.coords.lat,
          lng: presentation.coords.lng
        },
        label: '',

        info: contentString,
        options: {
          animation: google.maps.Animation.DROP
          // icon: "../../assets/purple_marker.png"
        }
      });
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
