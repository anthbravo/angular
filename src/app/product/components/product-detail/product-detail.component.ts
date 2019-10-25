import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../../../core/services/product/product.service';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.fetchProduct(params.id);
      }
    );
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id).subscribe(
      product => {
        product.image = 'http://lorempixel.com/400/500/';
        this.product = product;
      }
    );
  }

}
