import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CartComponent } from './../items/cart/cart.component';
import { CartService } from './../items/cart.service';
import { AuthService } from './../services/auth.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	constructor(private CartService: CartService,
		public auth: AuthService,
		public router: Router) { }

	ngOnInit() {
	}

}
