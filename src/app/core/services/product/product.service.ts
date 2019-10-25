import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>('http://platzi-store.herokuapp.com/products');
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`http://platzi-store.herokuapp.com/products/${id}`);
  }
}
