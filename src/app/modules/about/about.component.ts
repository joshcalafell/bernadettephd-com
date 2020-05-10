import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'bmc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - About',
      description: 'Home page for Bernadette M. Calafell Ph.D'
    });
  }
}
