import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { UserService } from '../services/user.service';
import { CartService } from './../items/cart.service';
import { AppService } from './../app.service';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentUser = {
    _id: '',
    username: '',
    email: '',
    role: '',
    addresses: [],
    orders: [],
    contactDetails: {}
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private cartService: CartService,
    private appService: AppService
  ) {
    this.freshUser();
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  freshUser() {
    this.currentUser = {
      _id: '',
      username: '',
      email: '',
      role: '',
      addresses: [],
      orders: [],
      contactDetails: {}
    };
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword).map(res => res.json()).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;

    this.freshUser();
    this.cartService.flushCart();

    this.cartService.removeFromLocalStorage();
    this.appService.isCartPrepared = false;
    this.router.navigate(['/items']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser = decodedUser;
    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
  }

}
