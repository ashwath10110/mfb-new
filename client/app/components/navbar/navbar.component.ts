import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
// import { CartService } from './../items/cart.service';
import { CartComponent } from './../items/cart/cart.component';
// import { AppService } from './../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showCart = false;
  searchParams = '';

  constructor(
    public router: Router,
    public auth: AuthService,
    // private cartService: CartService,
    // private appService: AppService
  ) {
  }

  ngOnInit() {
  }

  openCart(event) {
    // this.router.navigate(['/cart']);
  }

}
