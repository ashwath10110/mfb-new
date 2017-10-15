import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
  }

  getOrders(): Observable<any> {
    return this.http.get('/api/order').map(res => res.json());
  }

  countOrders(): Observable<any> {
    return this.http.get('/api/order/count').map(res => res.json());
  }

  addOrder(leafyGreenVegetables): Observable<any> {
    return this.http.post('/api/order', JSON.stringify(leafyGreenVegetables), this.options);
  }

  getOrder(leafyGreenVegetables): Observable<any> {
    return this.http.get(`/api/order/${leafyGreenVegetables._id}`).map(res => res.json());
  }

  editOrder(leafyGreenVegetables): Observable<any> {
    return this.http.put(`/api/order/${leafyGreenVegetables._id}`, JSON.stringify(leafyGreenVegetables), this.options);
  }

  deleteOrder(leafyGreenVegetables): Observable<any> {
    return this.http.delete(`/api/order/${leafyGreenVegetables._id}`, this.options);
  }

}