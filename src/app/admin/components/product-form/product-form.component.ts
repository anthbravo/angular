import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from 'src/app/core/model/product.model';

import { ProductService } from 'src/app/core/services/product/product.service';

import { MyValidators } from 'src/app/utils/my-validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productFormGroup: FormGroup;

  constructor(
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.buildProductFormGroup();
  }

  saveProduct(event: Event) {
    event.preventDefault();

    if (this.productFormGroup.valid) {
      const newProduct: Product = this.productFormGroup.value;
      this.productService.createProduct(newProduct).subscribe(
        (product: Product) => {
          this.router.navigate(['./admin/products']);
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }

  private buildProductFormGroup() {
    this.productFormGroup = this.formBuilder.group(
      {
        id: ['', [Validators.required]],
        title: ['', [Validators.required]],
        price: ['', [Validators.required, MyValidators.isPriceValid]],
        image: [''],
        description: ['', [Validators.required]],
      }
    );
  }

  get priceField() {
    return this.productFormGroup.get('price');
  }

}
