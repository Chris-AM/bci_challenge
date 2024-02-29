import { Observable, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDatasource } from '../../domain/datasources/product.model';
import { ProductModel } from '../../domain/models/product.model';
import { environment } from '../../config/environment.config';

@Injectable({
  providedIn: 'root',
})
export class ProductDatasourceImpl implements ProductDatasource {
  private readonly baseUrl = environment.expernal_links.base_url;
  private readonly httpClient: HttpClient = inject(HttpClient);

  //* 1 Elige alguna Api: https://dummyjson.com/
  //* Motivo: Puedo obtener diferentes tipos de datos para simular

  //* 4 Necesitamos que tu App tenga la capacidad de ser
  //*   un CRUD que trabaje de forma emporal con la DATA de la API (...)
  getAllProducts(): Observable<ProductModel[]> {
    const petition = this.httpClient.get<ProductModel[]>(
      `${this.baseUrl}${environment.expernal_links.products.base_url}`
    );
    return petition;
  }
  getProductById(id: number): Observable<ProductModel> {
    const petition = this.httpClient.get<ProductModel>(
      `${this.baseUrl}${environment.expernal_links.products.base_url}/${id}`
    );
    return petition;
  }

  //* 4 (...)  debemos poder eliminar, editar y crear data temporalmente,
  //*          si actualizamos
  //*          el sitio la data debe volver a su estado inicial
  createProduct(product: ProductModel): Observable<ProductModel> {
    return of(product);
  }
  updateProduct(product: ProductModel): Observable<ProductModel> {
    return of(product);
  }
  deleteProduct(id: number): Observable<boolean> {
    return of(true);
  }
}
