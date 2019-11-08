import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    // SimpleChange,
    OnInit,
    // DoCheck,
    OnDestroy
} from '@angular/core';

import { CartService } from 'src/app/core/services/cart/cart.service';

import { Product } from '../../../core/model/product.model';

@Component(
    {
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
    }
)
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
    @Input() product: Product;
    @Output() productSelected: EventEmitter<any> = new EventEmitter();

    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    ngOnChanges(changes) {
        console.log('2. ngOnChanges');
        console.log(changes);
    }

    ngOnInit() {
        console.log('3. ngOnInit');
    }

    // ngDoCheck() {
    //     console.log('4. ngDocheck');
    // }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        this.productSelected.emit(this.product.id);
        this.cartService.addCart(this.product);
    }
}
