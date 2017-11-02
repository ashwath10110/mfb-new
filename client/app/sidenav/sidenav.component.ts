import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { CartService } from './../items/cart.service';
import { CartComponent } from './../items/cart/cart.component';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var $: any;

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

	constructor(
		public auth: AuthService,
		private cartService: CartService,
		private el: ElementRef,
		public router: Router,
	) { }


	ngOnInit() {

	}

	openCart(event) {
	}

	goTo(route,event) {
		this.router.navigate(route);
	}

	processSideBar() {
		if ($('.sidebar-collapse').hasClass('sideNaveClose')) {
			$('.sidebar-collapse').addClass("sideNaveOpen");
			$('.side-nav').addClass("sideNaveOpen_");
			$('.sidebar-collapse').removeClass("sideNaveClose");
			$('.side-nav').removeClass("sideNaveClose_");
		} else {
			$('.sidebar-collapse').addClass("sideNaveClose");
			$('.side-nav').addClass("sideNaveClose_");
			$('.sidebar-collapse').removeClass("sideNaveOpen");
			$('.side-nav').removeClass("sideNaveOpen_");
		}
	}

}
