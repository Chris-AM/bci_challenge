import { Injectable, inject } from '@angular/core';
import { LinksDatasourceImpl } from '../../infrastructure/datasources/link.datasource.impl';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private readonly dataSource: LinksDatasourceImpl = inject(LinksDatasourceImpl);
  
  getLinks() {
    return this.dataSource.getLinks();
  }
}
