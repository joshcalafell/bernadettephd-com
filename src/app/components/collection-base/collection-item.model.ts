import { IAward } from '../../modules/awards/award/award.model';
import { Presentation } from '../../modules/presentations/presentation/presentation.model';
import { IAdvisee } from 'src/app/modules/advisees/advisee/advisee.model';
import { ICommentary } from 'src/app/modules/commentaries/commentary/commentary.model';
import { Publication } from 'src/app/modules/publications/publication/publication.model';

export type CollectionItem =
  | IAward
  | Presentation
  | IAdvisee
  | ICommentary
  | Publication;
