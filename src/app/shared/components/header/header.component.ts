import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalProducts$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.totalProducts$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

  ngOnInit() {
  }

}
