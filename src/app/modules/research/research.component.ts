import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';
import { fadeIn } from 'src/app/animations/fade-in';

@Component({
  selector: 'bmc-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  animations: [fadeIn]
})
export class ResearchComponent implements OnInit {
  panelOpenState = false;

  constructor(private seo: SeoService) {}

  fields = [
    {
      index: '1',
      content:
        'The examination and theorization of representations and performances of Chicanx-Latinx identities in everyday life and popular culture'
    },
    {
      index: '2',
      content:
        'Mapping and theorizing points of affiliation and possibility between Chicanxs and other groups that fall under the term Latinx, within a department that both constrains and offers possible spaces for connection and cultural expression.'
    },
    {
      index: '3',
      content:
        'More recently my work has taken another turn as I have started to theorize the experiences of women of color in the academy. In doing this research I draw upon my lived experiences as a Chicana academic. In addition to Chicana and Black feminist theories, I am interested in how scholarship on monstrosity and race might further push us to question the assumptions made about women of color in the academy'
    },
    {
      index: '4',
      content:
        'What is the relationship between monstrosity, race, and performance? What do both figurative and literal images or representations of monstrosity tell us about understanding of race, ethnicity, sexuality, gender, class, and ability in the United States?'
    }
  ];

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Bernadette M. Calafell Ph.D - Research',
      description: 'Research done by Dr. Bernadette M. Calafell'
    });
  }
}
