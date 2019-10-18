import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
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
  }

  addCart(id: string) {
    console.log(id);
  }

}
