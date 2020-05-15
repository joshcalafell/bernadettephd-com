import { Award } from '../../modules/awards/award/award.model';
import { Presentation } from '../../modules/presentations/presentation/presentation.model';

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

export type CollectionItem = Award | Presentation;
