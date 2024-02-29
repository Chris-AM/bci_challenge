import { Observable } from "rxjs";
import { ProductModel } from "../models/product.model";

export abstract class ProductDatasource {
    abstract getAllProducts(): Observable<ProductModel[]>;
    abstract getProductById(id: number): Observable<ProductModel>;
    abstract createProduct(product: ProductModel): Observable<ProductModel>;
    abstract updateProduct(product: ProductModel): Observable<ProductModel>;
    abstract deleteProduct(id: number): Observable<boolean>;
}