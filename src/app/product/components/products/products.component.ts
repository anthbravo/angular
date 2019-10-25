import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/model/product.model';
import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  addCart(id: string) {
    console.log(id);
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(
      products => {
        products.forEach(product => product.image = 'http://lorempixel.com/400/500/');
        this.products = products;
      }
    );
  }

}
