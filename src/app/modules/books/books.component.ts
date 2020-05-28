import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { fadeIn } from 'src/app/animations/fade-in';

@Component({
  selector: 'bmc-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  animations: [fadeIn]
})
export class BooksComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Books',
      description: 'A list of books written by Dr. Bernadette M. Calafell'
    });
  }
}
