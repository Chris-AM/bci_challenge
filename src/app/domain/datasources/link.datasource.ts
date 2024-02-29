
import { Observable } from 'rxjs';
import { LinkModel } from '../models/link.model';

export abstract class LinksDataSource {
  abstract getLinks(): Observable<LinkModel[]>;
}