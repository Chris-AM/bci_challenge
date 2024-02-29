import { Injectable, inject } from '@angular/core';
import { HomeDatasourceImpl } from '../../infrastructure/datasources/home.datasource.impl';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly datasource: HomeDatasourceImpl = inject(HomeDatasourceImpl);

  getHomeData() {
    return this.datasource.getHomeData();
  }
}
