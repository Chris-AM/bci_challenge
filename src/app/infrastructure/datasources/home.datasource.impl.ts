import { Observable } from 'rxjs';
import { HomeDatasource } from '../../domain/datasources/home.datasource';
import { HomeModel } from '../../domain/models/home.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../config/environment.config';

@Injectable({ providedIn: 'root' })
export class HomeDatasourceImpl implements HomeDatasource {
  private readonly baseUrl = environment.links.base_url;
  private readonly httpClient: HttpClient = inject(HttpClient);

  getHomeData(): Observable<HomeModel[]> {
    const petition = this.httpClient.get<HomeModel[]>(
      `${this.baseUrl}${environment.links.home}`
    );
    return petition;
  }
}
