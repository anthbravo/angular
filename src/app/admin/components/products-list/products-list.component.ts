import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(
      products => {
        this.products = products;
      });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      response => {
        if (response) {
          this.products = this.products.filter(product => product.id !== id);
        }
      }
    );
  }

}
