import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [
    {
      id: '1',
      image: 'http://lorempixel.com/400/500/',
      title: 'Camisa Casual Azul',
      price: 1000,
      description: 'Material 100% algodon. Lavar a maquina a 40°C, no utilizar secadora.'
    },
    {
      id: '2',
      image: 'http://lorempixel.com/400/501/',
      title: 'Camisa Casual Azul',
      price: 1000,
      description: 'Material 100% algodon. Lavar a maquina a 40°C, no utilizar secadora.'
    },
    {
      id: '3',
      image: 'http://lorempixel.com/400/502/',
      title: 'Camisa Casual Azul',
      price: 1000,
      description: 'Material 100% algodon. Lavar a maquina a 40°C, no utilizar secadora.'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((product) => product.id === id);
  }
}
