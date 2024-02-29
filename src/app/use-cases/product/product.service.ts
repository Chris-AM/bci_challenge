import { Injectable, inject } from '@angular/core';
import { ProductDatasourceImpl } from '../../infrastructure/datasources/product.datasource.impl';
import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly dataSource: ProductDatasourceImpl = inject(
    ProductDatasourceImpl
  );

  getAllProducts(): Observable<ProductModel[]> {
    return this.dataSource.getAllProducts();
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.dataSource.getProductById(id);
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.dataSource.createProduct(product);
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.dataSource.updateProduct(product);
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.dataSource.deleteProduct(id);
  }
}
