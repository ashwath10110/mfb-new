import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAddresses(): Observable<any> {
    return this.http.get('/api/address').map(res => res.json());
  }

  addAddress(cat): Observable<any> {
    debugger;
    return this.http.post('/api/address', JSON.stringify(cat), this.options);
  }

  editAddress(cat): Observable<any> {
    return this.http.put(`/api/address/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteAddress(cat): Observable<any> {
    return this.http.delete(`/api/address/${cat._id}`, this.options);
  }

}
