import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<Product> = [
    {
      id: '1',
      image: 'http://www.solarte.es/image/cache/data/category_12/casual-friday-slim-fit-camisa-informal-hombre-con-botones-camisas-ropa-hombre-ls8faq-3350-500x500.jpg',
      title: 'Camisa Casual Azul',
      price: 1000,
      description: 'Material 100% algodon. Lavar a maquina a 40°C, no utilizar secadora.'
    },
    {
      id: '2',
      image: 'http://www.solarte.es/image/cache/data/category_12/casual-friday-slim-fit-camisa-informal-hombre-con-botones-camisas-ropa-hombre-ls8faq-3350-500x500.jpg',
      title: 'Camisa Casual Azul',
      price: 1000,
      description: 'Material 100% algodon. Lavar a maquina a 40°C, no utilizar secadora.'
    },
    {
      id: '3',
      image: 'http://www.solarte.es/image/cache/data/category_12/casual-friday-slim-fit-camisa-informal-hombre-con-botones-camisas-ropa-hombre-ls8faq-3350-500x500.jpg',
      title: 'Camisa Casual Azul',
      price: 1000,
      description: 'Material 100% algodon. Lavar a maquina a 40°C, no utilizar secadora.'
    }

  ];

  addCart(id: string) {

    console.log(id);
  }

}