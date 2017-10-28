import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './items//cart/cart.component';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(public auth: AuthService) {
		if (window["Worker"]) {

			console.log('available');

		} else {
			console.log("NA");
		}
	}

	ngOnInit() {
		// setTimeout(() => {

		// });
  	}

}
