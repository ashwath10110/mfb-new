import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserOrdersService } from '../services/user-orders.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { CartService } from './../items/cart.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  isLoading = true;
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
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getUserOrders();
    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getUserOrders() {
    this.userOrdersService.getUserOrders().subscribe(
      data => {
        this.userOrders = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  repeatOrder(order) {
    this.cartService.flushCart();
    this.cartService.addProductsToCart(order.cartDetails.items);
    this.router.navigate(['/addresses']);
  }

  addCat() {
    this.userOrdersService.addUserOrder(this.addCatForm.value).subscribe(
      res => {
        const newUserOrder = res.json();
        this.userOrders.push(newUserOrder);
        this.addCatForm.reset();
        this.toast.setMessage('Order added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(userOrder) {
    this.isEditing = true;
    this.userOrder = userOrder;
  }

  cancelEditing() {
    this.isEditing = false;
    this.userOrder = {};
    this.toast.setMessage('Order editing cancelled.', 'warning');
    this.getUserOrders();
  }

  editCat(userOrder) {
    this.userOrdersService.editUserOrder(userOrder).subscribe(
      res => {
        this.isEditing = false;
        this.userOrder = userOrder;
        this.toast.setMessage('Order edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteCat(userOrder) {
    if (window.confirm('Are you sure you want to permanently delete this Order?')) {
      this.userOrdersService.deleteUserOrder(userOrder).subscribe(
        res => {
          const pos = this.userOrders.map(elem => elem._id).indexOf(userOrder._id);
          this.userOrders.splice(pos, 1);
          this.toast.setMessage('Order deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}