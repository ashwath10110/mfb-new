import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { CartService } from './../items/cart.service';
import { CartComponent } from './../items/cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
    public auth: AuthService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
  }

  openCart(event) {
    // this.router.navigate(['/cart']);
  }

}
