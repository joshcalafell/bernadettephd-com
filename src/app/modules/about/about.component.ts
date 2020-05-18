import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'bmc-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.generateTags({
      description: 'Home page for Bernadette M. Calafell Ph.D',
      title: 'Bernadette M. Calafell Ph.D - About'
    });
  }
}
