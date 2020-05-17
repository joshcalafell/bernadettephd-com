import { Award } from '../../modules/awards/award.model';
import { Presentation } from '../../modules/presentations/presentation/presentation.model';
import { Advisee } from 'src/app/modules/advisees/advisee/advisee.model';
import { Commentary } from 'src/app/modules/commentaries/commentary.model';
import { Publication } from 'src/app/modules/publications/publication/publication.model';

// interface IListItem {
//     type: string;
//     title: string;
//     subtitle: string;
//     lines: string[];
// }

// class ListItem implements IListItem {
//     type: string;
//     title: string;
//     subtitle: string;
//     lines: string[];
//     constructor(item) {
//         this.type = item.type;
//         this.title = item.title;
//         this.subtitle = item.subtitle
//         this.lines = item.lines;
//     }

// }

export type CollectionItem =
  | Award
  | Presentation
  | Advisee
  | Commentary
  | Publication;
