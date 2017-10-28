import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserOrdersService } from '../services/user-orders.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { CartService } from './../items/cart.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	constructor(
		private userOrdersService: UserOrdersService,
		public toast: ToastComponent,
		public cartService: CartService,
		public router: Router,
	) { }

	ngOnInit() {
	}

	//1-orderBooked
	//2-orderAccepted
	//3-orderDelivered

	submitOrder() {
		let items = this.cartService.products;
		for (var i = 0; i < items.length; i++) {
			delete items[i].product.imageForCart;
			delete items[i].product.imageForShowCase;
		}
		let order = {
			orderDetails: {
				orderTime: new Date(),
				modeOfPayment: 'COD',
				paymentId: '1234',
				orderAcceptedTime: new Date(),
				orderDeliveryTime: new Date(),
				orderStatus: 1
			},
			cartDetails: {
				items: items,
				cartTotal: this.cartService.cartTotal
			},
			status: true
		};
		this.addOrder(order);
	}

	addOrder(order) {
		this.userOrdersService.addUserOrder(order).subscribe(
			res => {
				if (res.status == 200) {

					this.toast.setMessage('Order added successfully.', 'success');
					this.cartService.flushCart();
					this.router.navigate(['/order-success']);
				}
			},
			error => console.log(error)
		);
	}

}
