import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product/product.service';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
    CartService
  ]
})
export class CoreModule { }
