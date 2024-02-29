
import { Observable } from 'rxjs';
import { LinkModel } from '../models/link.model';

export abstract class LinksDataSource {
  abstract getNavbarItems(): Observable<LinkModel[]>;
}