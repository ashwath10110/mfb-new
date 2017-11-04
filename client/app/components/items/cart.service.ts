import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';
import { Subject } from 'rxjs/Subject';
import { LocalStorageService } from './../../services/local-storage.service';
import { ItemsService } from './../../services/items.service';
import { AppService } from './../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class CartService {

  products: any[] = [];
  cartTotal: number = 0;

  private productAddedSource = new Subject<any>()
  productAdded$ = this.productAddedSource.asObservable()

  constructor(
    private localStorageService: LocalStorageService,
    private appService: AppService,
    private itemsService: ItemsService,
    public router: Router
  ) {
  }

  initCart() {
    if (!this.appService.currentUser.cartValue.status) {
      let cartState = this.localStorageService.getCartValue();
      if (!cartState) {
        this.appService.currentUser.cartValue = {
          status: true,
          value: {
            products: [],
            cartTotal: 0
          }
        };
        this.products = [];
        this.cartTotal = 0;
      } else {
        this.products = cartState.cartValue.value.products;
        this.cartTotal = cartState.cartValue.value.cartTotal;
      }
    }
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
  }

  refreshCart() {
    this.products = [];
    this.cartTotal = 0;
    this.itemsService.state['isInitialised'] = false;
    this.updateLocalStorage();
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    this.router.navigate(['/items']);
  }

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
    this.updateLocalStorage();
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal })
  }

  addProductsToCart(products) {
    for (var i = 0; i < products.length; i++) {
      for (var j = 0; j < products[i].quantity; j++) {
        this.addProductToCart(products[i].product);
      }
    }
  }

  updateLocalStorage() {
    this.appService.currentUser.cartValue = {
      status: true,
      value: {
        products: this.products,
        cartTotal: this.cartTotal
      }
    };
    this.localStorageService.setCartValue(this.appService.currentUser);
  }

  deleteProductFromCart(product) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].product._id == product._id) {
        this.cartTotal -= this.products[i].product.parsedPrice * this.products[i].quantity;
        this.products.splice(i, 1);
        break;
      }
    }
    this.updateLocalStorage();
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }

  removeFromLocalStorage() {
    this.localStorageService.clearLocalStorageItem();
  }

  flushCart() {
    this.products = [];
    this.cartTotal = 0;
    this.updateLocalStorage();
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }

}
