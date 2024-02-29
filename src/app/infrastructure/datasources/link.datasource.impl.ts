import { Observable, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../config/environment.config';
import { LinkModel } from '../../domain/models/link.model';
import { LinksDataSource } from '../../domain/datasources/link.datasource';

@Injectable({
  providedIn: 'root',
})
export class LinksDatasourceImpl implements LinksDataSource {
  private readonly baseUrl = environment.links.base_url;
  private readonly httpClient: HttpClient = inject(HttpClient);

  getNavbarItems(): Observable<LinkModel[]> {
    const petition = this.httpClient.get<LinkModel[]>(
      `${this.baseUrl}${environment.links.paths}`
    );
    return petition;
  }
}
