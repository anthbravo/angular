import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../model/product.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient.post<Product>(`${environment.url_api}/products`, product);
  }

  updateProduct(product: Partial<Product>) {
    return this.httpClient.put<Product>(`${environment.url_api}/products/${product.id}`, product);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${environment.url_api}/products/${id}`);
  }
}
