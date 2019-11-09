import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from 'src/app/core/model/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  productsObservable: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.productsObservable = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
