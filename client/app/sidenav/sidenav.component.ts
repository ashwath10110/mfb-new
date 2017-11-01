import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { CartService } from './../items/cart.service';
import { CartComponent } from './../items/cart/cart.component';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

	constructor(
		public auth: AuthService,
		private cartService: CartService
	) { }

	ngOnInit() {
	}

	openCart(event) {
	}

}
