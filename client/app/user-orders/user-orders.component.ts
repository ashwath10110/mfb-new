import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserOrdersService } from '../services/user-orders.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { CartService } from './../items/cart.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { AppService } from './../app.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  isLoading = false;
  isEditing = false;

  addCatForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  userOrders = [];
  userOrder = {};

  constructor(
    private userOrdersService: UserOrdersService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    public router: Router,
    private cartService: CartService,
    private auth: AuthService,
    private appService: AppService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUserOrders();
  }

  getUserOrders() {
    if (this.appService.currentUser.userData.status) {
      this.userOrders = this.appService.currentUser.userData.data['orders'];
    } else {
      this.isLoading = true;
      this.userService.getUser(this.auth.currentUser).subscribe(
        data => {
          this.userOrders = data['orders'];
          this.appService.currentUser.userData = {
            status: true,
            data: data
          };
          this.isLoading = false;
        },
        error => console.log(error),
        () => {
          this.isLoading = false;
        }
      );
    }
  }

  repeatOrder(order) {
    this.cartService.flushCart();
    this.cartService.addProductsToCart(order.cartDetails.items);
    this.router.navigate(['/addresses']);
  }

}