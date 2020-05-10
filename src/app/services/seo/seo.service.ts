import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  image: string = '../../../assets/bernadette.jpg';
  site: string = 'Bernadette M. Calafell Ph.D.';
  description: string = 'Personal website of Dr. Bernadette M. Calafell';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  generateTags({ title = '', description = '' }) {
    this.title.setTitle(this.site);
    this.meta.addTags([
      // Open graph
      {
        name: 'og: title',
        content: title
      },
      {
        name: 'og:description',
        content: description
      },
      {
        name: 'og:image',
        content: this.image
      },
      {
        name: 'og:url',
        content: `https://bernadettephd.com${this.router.url}`
      }
    ]);
  }
}
