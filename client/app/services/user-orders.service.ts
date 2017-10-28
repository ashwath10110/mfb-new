import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserOrdersService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getUserOrders(): Observable<any> {
    return this.http.get('/api/user-orders').map(res => res.json());
  }

  countUserOrders(): Observable<any> {
    return this.http.get('/api/user-orders/count').map(res => res.json());
  }

  addUserOrder(userOrder): Observable<any> {
    return this.http.post('/api/user-orders', JSON.stringify(userOrder), this.options);
  }

  getUserOrder(userOrder): Observable<any> {
    return this.http.get(`/api/user-orders/${userOrder._id}`).map(res => res.json());
  }

  editUserOrder(userOrder): Observable<any> {
    return this.http.put(`/api/user-orders/${userOrder._id}`, JSON.stringify(userOrder), this.options);
  }

  deleteUserOrder(userOrder): Observable<any> {
    return this.http.delete(`/api/user-orders/${userOrder._id}`, this.options);
  }

}
