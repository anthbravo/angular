import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AngularFireStorage } from '@angular/fire/storage';

import { Product } from 'src/app/core/model/product.model';

import { ProductService } from 'src/app/core/services/product/product.service';

import { MyValidators } from 'src/app/utils/my-validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;

  @Output() productEdited: EventEmitter<any> = new EventEmitter();

  productFormGroup: FormGroup;

  image$: Observable<any>;

  constructor(
    private router: Router,
    private angularFireStorage: AngularFireStorage,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.buildProductFormGroup();
  }

  ngOnInit() {
    this.initValuesForEdit();
  }

  saveProduct(event: Event) {
    event.preventDefault();

    if (this.productFormGroup.valid) {
      const product: Product = this.productFormGroup.value;

      if (this.product) {
        this.updateProduct(product);
      } else {
        this.createProduct(product);
      }

    }

  }

  createProduct(newProduct: Product) {
    this.productService.createProduct(newProduct).subscribe(
      (product: Product) => {
        this.router.navigate(['./admin/products']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProduct(updateProduct: Product) {
    this.productService.updateProduct(updateProduct).subscribe(
      (product: Product) => {
        this.product = product;
        this.backProductList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const dir = `images/${this.idField.value}`;
    const fileRef = this.angularFireStorage.ref(dir);
    const task = this.angularFireStorage.upload(dir, file);
    task.snapshotChanges()
      .pipe(
        finalize(
          () => {
            this.image$ = fileRef.getDownloadURL();
            this.image$.subscribe(
              url => {
                console.log(url);
                this.productFormGroup.get('image').setValue(url);
              }
            );
          }
        )
      ).subscribe((uploadTaskSnapShot) => {
        console.log(uploadTaskSnapShot);
      });
  }

  private buildProductFormGroup() {
    this.productFormGroup = this.formBuilder.group(
      {
        id: ['', [Validators.required]],
        title: ['', [Validators.required]],
        price: ['', [Validators.required, MyValidators.isPriceValid]],
        image: ['', [Validators.required]],
        description: ['', [Validators.required]],
      }
    );
  }

  initValuesForEdit() {
    if (this.product) {
      this.productFormGroup.patchValue(this.product);
    }
  }

  backProductList() {
    this.productEdited.emit(this.product);
  }

  get priceField() {
    return this.productFormGroup.get('price');
  }

  get idField() {
    return this.productFormGroup.get('id');
  }

  get imageField() {
    return this.productFormGroup.get('image');
  }

}
