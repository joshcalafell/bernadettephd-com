import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'bmc-books',
  styleUrls: ['./books.component.scss'],
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  constructor(private seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.generateTags({
      description: 'A list of books written by Dr. Bernadette M. Calafell',
      title: 'Bernadette M. Calafell Ph.D - Books'
    });
  }
}
