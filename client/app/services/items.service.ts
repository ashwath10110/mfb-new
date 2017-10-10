import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getLeafyGreenVegetables(): Observable<any> {
    return this.http.get('/api/items').map(res => res.json());
  }

  countLeafyGreenVegetables(): Observable<any> {
    return this.http.get('/api/items/count').map(res => res.json());
  }

  addLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    return this.http.post('/api/items', JSON.stringify(leafyGreenVegetables), this.options);
  }

  getLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    return this.http.get(`/api/items/${leafyGreenVegetables._id}`).map(res => res.json());
  }

  editLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    debugger;
    return this.http.put(`/api/items/${leafyGreenVegetables._id}`, JSON.stringify(leafyGreenVegetables), this.options);
  }

  deleteLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    return this.http.delete(`/api/items/${leafyGreenVegetables._id}`, this.options);
  }

}
