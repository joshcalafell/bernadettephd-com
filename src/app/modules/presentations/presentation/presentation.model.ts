interface PresentationCoords {
  lat: Number;
  lng: Number;
}

export interface Presentation {
  type?: string;
  role: string; // Required
  date: any; // Required
  title?: string;
  department?: string;
  school?: string;
  location?: string;
  coords?: PresentationCoords;
  additional_authors?: String[];
}

// TODO: ???
