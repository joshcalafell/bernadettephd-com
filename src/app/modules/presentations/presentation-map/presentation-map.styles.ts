const PRESENTATION_MAP_STYLES: any = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#444444' }]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ color: '#f2f2f2' }]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'on' }]
  },
  { featureType: 'poi', elementType: 'geometry.fill', stylers: [] },
  { featureType: 'poi', elementType: 'geometry.stroke', stylers: [] },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 45 }]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'all',
    stylers: [{ visibility: 'on' }]
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'labels.text.fill',
    stylers: []
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'labels.icon',
    stylers: []
  },
  {
    featureType: 'transit.station.rail',
    elementType: 'all',
    stylers: [{ visibility: 'on' }]
  },
  {
    featureType: 'transit.station.rail',
    elementType: 'labels.text.fill',
    stylers: []
  },
  {
    featureType: 'transit.station.rail',
    elementType: 'labels.icon',
    stylers: []
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ color: '#d2d2d2' }, { visibility: 'on' }]
  }
];

export default PRESENTATION_MAP_STYLES;
