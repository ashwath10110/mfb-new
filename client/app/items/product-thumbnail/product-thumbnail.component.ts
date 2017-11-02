import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from '../cart.service';
import { AppService } from './../../app.service';

import { ToastComponent } from './../../shared/toast/toast.component';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product: Product;

  detailViewActive: boolean;
  rupeeSymbol = 'Rs.';

  constructor(
    private cartService: CartService,
    private appService: AppService,
    public toast: ToastComponent
  ) {
  }

  ngOnInit() {
    this.detailViewActive = false;
    this.rupeeSymbol = this.appService.currentUser.toUseForRupeeSymbol.hindiRupees;
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive;
  }

  onAddToCart() {
    this.cartService.addProductToCart(this.product);
    this.toast.setMessage('Added! ' + this.product.name, 'success');
  }

}
