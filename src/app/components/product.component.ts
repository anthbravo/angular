import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

@Component(
    {
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
    }
)
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productSelected: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChange) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('4. ngDocheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    selectedProduct() {
        this.productSelected.emit(this.product.id);
    }
}
