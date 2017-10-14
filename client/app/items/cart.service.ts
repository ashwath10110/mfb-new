import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CartService {

  products: any[] = []
  cartTotal: number = 0

  private productAddedSource = new Subject<any>()
  productAdded$ = this.productAddedSource.asObservable()

  constructor() { }

  addProductToCart(product) {
    let exists = false;
    let parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
    this.cartTotal += parsedPrice;
    //Search this product on the cart and increment the quantity

    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].product._id == product._id) {
        this.products[i].quantity++;
        exists = true;
      }
    }
    //Add a new product to the cart if it's a new product
    if (!exists) {
      product.parsedPrice = parsedPrice
      this.products.push({
        product: product,
        quantity: 1
      })
    }
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
  }

  deleteProductFromCart(product) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].product._id == product._id) {
        this.cartTotal -= this.products[i].product.parsedPrice * this.products[i].quantity;
        this.products.splice(i, 1);
        break;
      }
    }
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
  }

  flushCart() {
    this.products = []
    this.cartTotal = 0
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
  }
}
