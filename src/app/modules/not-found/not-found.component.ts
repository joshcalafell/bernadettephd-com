import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { fadeIn } from 'src/app/animations/fade-in';

@Component({
  selector: 'bmc-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [fadeIn]
})
export class NotFoundComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Page Not Found',
      description: '404 Page Not Found'
    });
  }
}
